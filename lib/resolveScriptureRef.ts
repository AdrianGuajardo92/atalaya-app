export type ScriptureVerse = { reference: string; text: string };

const BOOK_ABBREVIATIONS: Record<string, string[]> = {
  Génesis: ['Gén.', 'Gen.'],
  Éxodo: ['Éx.', 'Ex.'],
  Levítico: ['Lev.'],
  Números: ['Núm.', 'Num.'],
  Deuteronomio: ['Deut.'],
  Josué: ['Jos.'],
  Jueces: ['Juec.'],
  Rut: ['Rut'],
  '1 Samuel': ['1 Sam.'],
  '2 Samuel': ['2 Sam.'],
  '1 Reyes': ['1 Rey.'],
  '2 Reyes': ['2 Rey.'],
  '1 Crónicas': ['1 Crón.', '1 Cron.'],
  '2 Crónicas': ['2 Crón.', '2 Cron.'],
  Esdras: ['Esd.'],
  Nehemías: ['Neh.'],
  Ester: ['Est.'],
  Job: ['Job'],
  Salmo: ['Sal.'],
  Salmos: ['Sal.'],
  Proverbios: ['Prov.'],
  Eclesiastés: ['Ecl.'],
  'Cantar de los Cantares': ['Cant.'],
  Isaías: ['Is.'],
  Jeremías: ['Jer.'],
  Lamentaciones: ['Lam.'],
  Ezequiel: ['Ezeq.'],
  Daniel: ['Dan.'],
  Oseas: ['Os.'],
  Joel: ['Joel'],
  Amós: ['Amós'],
  Abdías: ['Abd.'],
  Jonás: ['Jon.'],
  Miqueas: ['Miq.'],
  Nahúm: ['Nah.'],
  Habacuc: ['Hab.'],
  Sofonías: ['Sof.'],
  Ageo: ['Ageo'],
  Zacarías: ['Zac.'],
  Malaquías: ['Mal.'],
  Mateo: ['Mat.'],
  Marcos: ['Mar.'],
  Lucas: ['Luc.'],
  Juan: ['Juan'],
  Hechos: ['Hech.'],
  Romanos: ['Rom.'],
  '1 Corintios': ['1 Cor.', '1Co'],
  '2 Corintios': ['2 Cor.', '2Co'],
  Gálatas: ['Gál.', 'Gal.'],
  Efesios: ['Efes.', 'Ef'],
  Filipenses: ['Filip.'],
  Colosenses: ['Col.'],
  '1 Tesalonicenses': ['1 Tes.'],
  '2 Tesalonicenses': ['2 Tes.'],
  '1 Timoteo': ['1 Tim.'],
  '2 Timoteo': ['2 Tim.'],
  Tito: ['Tito'],
  Filemón: ['Filem.'],
  Hebreos: ['Heb.'],
  Santiago: ['Sant.'],
  '1 Pedro': ['1 Ped.'],
  '2 Pedro': ['2 Ped.'],
  '1 Juan': ['1 Juan'],
  '2 Juan': ['2 Juan'],
  '3 Juan': ['3 Juan'],
  Judas: ['Jud.'],
  Apocalipsis: ['Apoc.'],
};

const ABBREV_TO_BOOK = new Map<string, string>();
for (const [book, abbrevs] of Object.entries(BOOK_ABBREVIATIONS)) {
  for (const alias of [book, ...abbrevs]) {
    ABBREV_TO_BOOK.set(alias.toLowerCase(), book);
    ABBREV_TO_BOOK.set(alias.toLowerCase().replace(/\.$/, ''), book);
  }
}

function normalizeRefKey(ref: string): string {
  return ref.trim().replace(/\s+/g, ' ');
}

function resolveBookName(raw: string): string {
  const trimmed = raw.trim().replace(/\.$/, '');
  return ABBREV_TO_BOOK.get(trimmed.toLowerCase()) ?? trimmed;
}

function splitVerseList(versesPart: string): string[] {
  return versesPart.split(/\s*,\s*/).flatMap((part) => {
    const value = part.trim();
    const range = value.match(/^(\d+)\s*-\s*(\d+)$/);
    if (!range) return value ? [value] : [];

    const start = Number(range[1]);
    const end = Number(range[2]);
    if (!Number.isInteger(start) || !Number.isInteger(end) || end < start) return [value];

    return Array.from({ length: end - start + 1 }, (_, index) => String(start + index));
  });
}

export function parseScriptureReferences(inner: string): string[] {
  const text = inner
    .replace(/^comp(?:are|ara)\s+con\s+/i, '')
    .replace(/^le[ae]\s+/i, '')
    .trim();
  const segments = text.split(/\s*;\s*/);
  const refs: string[] = [];
  let currentBook = '';

  for (const segment of segments) {
    const trimmed = segment.trim().replace(/^comp(?:are|ara)\s+con\s+/i, '').replace(/^le[ae]\s+/i, '');
    if (!trimmed) continue;

    const fullMatch = trimmed.match(/^(.+?)\s+(\d+):(\d+(?:\s*-\s*\d+)?(?:\s*,\s*\d+(?:\s*-\s*\d+)?)*)/);
    if (fullMatch) {
      const book = resolveBookName(fullMatch[1]);
      currentBook = book;
      const chapter = fullMatch[2];
      for (const verse of splitVerseList(fullMatch[3])) {
        refs.push(`${book} ${chapter}:${verse}`);
      }
      continue;
    }

    const contMatch = trimmed.match(/^(\d+):(\d+(?:\s*-\s*\d+)?(?:\s*,\s*\d+(?:\s*-\s*\d+)?)*)/);
    if (contMatch && currentBook) {
      const chapter = contMatch[1];
      for (const verse of splitVerseList(contMatch[2])) {
        refs.push(`${currentBook} ${chapter}:${verse}`);
      }
    }
  }

  return refs;
}

export function buildVerseIndex(sources: ScriptureVerse[]): Map<string, ScriptureVerse[]> {
  const map = new Map<string, ScriptureVerse[]>();
  for (const card of sources) {
    const nums = card.reference.match(/\d+:\d+/g) ?? [];
    for (const n of nums) {
      const existing = map.get(n) ?? [];
      if (!existing.some((entry) => entry.reference === card.reference)) {
        existing.push(card);
      }
      map.set(n, existing);
    }
  }
  return map;
}

export function buildReferenceLookup(sources: ScriptureVerse[]): Map<string, ScriptureVerse> {
  const map = new Map<string, ScriptureVerse>();

  const register = (reference: string, card: ScriptureVerse) => {
    const key = normalizeRefKey(reference);
    const existing = map.get(key);
    if (!existing || (!existing.text && card.text)) {
      map.set(key, { reference, text: card.text });
    }
  };

  for (const card of sources) {
    register(card.reference, card);

    const rangeMatch = card.reference.match(/^(.+?)\s+(\d+):(\d+(?:\s*-\s*\d+)?(?:\s*,\s*\d+(?:\s*-\s*\d+)?)*)/);
    if (rangeMatch) {
      const book = resolveBookName(rangeMatch[1]);
      const chapter = rangeMatch[2];
      for (const verse of splitVerseList(rangeMatch[3])) {
        register(`${book} ${chapter}:${verse}`, card);
      }
    }
  }

  return map;
}

export function resolveScriptureFromParenthetical(
  inner: string,
  verseIndex: Map<string, ScriptureVerse[]>,
  biblicalTexts: Record<string, ScriptureVerse[]>,
  refLookup: Map<string, ScriptureVerse>,
  options: { fallbackToReference?: boolean } = {}
): { title: string; verses: ScriptureVerse[] } | null {
  const { fallbackToReference = false } = options;
  const leaMatch = inner.match(/^lea\s+(.+)$/i);
  if (leaMatch) {
    const verses = biblicalTexts[`LEE ${leaMatch[1].trim()}`];
    if (verses) {
      return { title: leaMatch[1].trim(), verses };
    }
  }

  const parsedRefs = parseScriptureReferences(inner);
  if (parsedRefs.length) {
    const matched: ScriptureVerse[] = [];
    const seen = new Set<string>();
    for (const ref of parsedRefs) {
      const card = refLookup.get(normalizeRefKey(ref));
      if (card && !seen.has(card.reference)) {
        seen.add(card.reference);
        matched.push(card);
      }
    }
    if (matched.length) {
      return {
        title: matched.length === 1 ? matched[0].reference : inner.replace(/^comp(?:are|ara)\s+con\s+/i, '').trim(),
        verses: matched,
      };
    }
  }

  const verseNums = inner.match(/\d+:\d+/g);
  if (verseNums?.length) {
    const seen = new Set<string>();
    const matched: ScriptureVerse[] = [];
    for (const v of verseNums) {
      for (const card of verseIndex.get(v) ?? []) {
        if (!seen.has(card.reference)) {
          seen.add(card.reference);
          matched.push(card);
        }
      }
    }
    if (matched.length) {
      return {
        title: matched.length === 1 ? matched[0].reference : inner,
        verses: matched,
      };
    }

    if (!fallbackToReference) return null;

    const reference = inner.replace(/^comp(?:are|ara) con\s+/i, '').trim();
    return {
      title: reference,
      verses: [{ reference, text: '' }],
    };
  }

  return null;
}
