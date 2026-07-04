#!/usr/bin/env python3
"""Import Watchtower study issue pages from jw.org into atalaya-app.

The script intentionally uses only Python's standard library so the skill works
on a fresh machine without installing extra packages.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
import time
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable
from urllib.parse import unquote, urljoin
from urllib.request import Request, urlopen


BASE_URL = "https://www.jw.org"
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
BLOCK_TAGS = {"article", "aside", "blockquote", "br", "div", "figcaption", "figure", "h1", "h2", "h3", "li", "p", "section", "ul", "ol"}
SKIP_TEXT_CLASSES = {"chapterNum", "verseNum", "footnoteLink", "xrefLink", "dc-screenReaderText", "pageNum", "parNum"}

MONTH_SLUGS = {
    "enero": "enero",
    "febrero": "febrero",
    "marzo": "marzo",
    "abril": "abril",
    "mayo": "mayo",
    "junio": "junio",
    "julio": "julio",
    "agosto": "agosto",
    "septiembre": "septiembre",
    "setiembre": "septiembre",
    "octubre": "octubre",
    "noviembre": "noviembre",
    "diciembre": "diciembre",
}

MONTH_NAME = {
    "ENERO": "Enero",
    "FEBRERO": "Febrero",
    "MARZO": "Marzo",
    "ABRIL": "Abril",
    "MAYO": "Mayo",
    "JUNIO": "Junio",
    "JULIO": "Julio",
    "AGOSTO": "Agosto",
    "SEPTIEMBRE": "Septiembre",
    "OCTUBRE": "Octubre",
    "NOVIEMBRE": "Noviembre",
    "DICIEMBRE": "Diciembre",
}

MONTH_SHORT = {
    "ENERO": "Ene",
    "FEBRERO": "Feb",
    "MARZO": "Mar",
    "ABRIL": "Abr",
    "MAYO": "May",
    "JUNIO": "Jun",
    "JULIO": "Jul",
    "AGOSTO": "Ago",
    "SEPTIEMBRE": "Sep",
    "OCTUBRE": "Oct",
    "NOVIEMBRE": "Nov",
    "DICIEMBRE": "Dic",
}

MONTH_NUMBER = {
    "Enero": "01",
    "Febrero": "02",
    "Marzo": "03",
    "Abril": "04",
    "Mayo": "05",
    "Junio": "06",
    "Julio": "07",
    "Agosto": "08",
    "Septiembre": "09",
    "Octubre": "10",
    "Noviembre": "11",
    "Diciembre": "12",
}

BOOK_NAMES = {
    "genesis": "Génesis",
    "génesis": "Génesis",
    "exodo": "Éxodo",
    "éxodo": "Éxodo",
    "levitico": "Levítico",
    "levítico": "Levítico",
    "numeros": "Números",
    "números": "Números",
    "deuteronomio": "Deuteronomio",
    "josue": "Josué",
    "josué": "Josué",
    "jueces": "Jueces",
    "rut": "Rut",
    "1-samuel": "1 Samuel",
    "2-samuel": "2 Samuel",
    "1-reyes": "1 Reyes",
    "2-reyes": "2 Reyes",
    "1-cronicas": "1 Crónicas",
    "1-crónicas": "1 Crónicas",
    "2-cronicas": "2 Crónicas",
    "2-crónicas": "2 Crónicas",
    "esdras": "Esdras",
    "nehemias": "Nehemías",
    "nehemías": "Nehemías",
    "ester": "Ester",
    "job": "Job",
    "salmos": "Salmos",
    "proverbios": "Proverbios",
    "eclesiastes": "Eclesiastés",
    "eclesiastés": "Eclesiastés",
    "cantar-de-los-cantares": "Cantar de los Cantares",
    "isaias": "Isaías",
    "isaías": "Isaías",
    "jeremias": "Jeremías",
    "jeremías": "Jeremías",
    "lamentaciones": "Lamentaciones",
    "ezequiel": "Ezequiel",
    "daniel": "Daniel",
    "oseas": "Oseas",
    "óseas": "Oseas",
    "joel": "Joel",
    "amos": "Amós",
    "amós": "Amós",
    "abdias": "Abdías",
    "abdías": "Abdías",
    "jonas": "Jonás",
    "jonás": "Jonás",
    "miqueas": "Miqueas",
    "nahum": "Nahúm",
    "nahúm": "Nahúm",
    "habacuc": "Habacuc",
    "sofonias": "Sofonías",
    "sofonías": "Sofonías",
    "ageo": "Ageo",
    "zacarias": "Zacarías",
    "zacarías": "Zacarías",
    "malaquias": "Malaquías",
    "malaquías": "Malaquías",
    "mateo": "Mateo",
    "marcos": "Marcos",
    "lucas": "Lucas",
    "juan": "Juan",
    "hechos": "Hechos",
    "romanos": "Romanos",
    "1-corintios": "1 Corintios",
    "2-corintios": "2 Corintios",
    "galatas": "Gálatas",
    "gálatas": "Gálatas",
    "efesios": "Efesios",
    "filipenses": "Filipenses",
    "colosenses": "Colosenses",
    "1-tesalonicenses": "1 Tesalonicenses",
    "2-tesalonicenses": "2 Tesalonicenses",
    "1-timoteo": "1 Timoteo",
    "2-timoteo": "2 Timoteo",
    "tito": "Tito",
    "filemon": "Filemón",
    "filemón": "Filemón",
    "hebreos": "Hebreos",
    "santiago": "Santiago",
    "1-pedro": "1 Pedro",
    "2-pedro": "2 Pedro",
    "1-juan": "1 Juan",
    "2-juan": "2 Juan",
    "3-juan": "3 Juan",
    "judas": "Judas",
    "apocalipsis": "Apocalipsis",
}

STOPWORDS = {
    "que", "como", "para", "por", "con", "del", "los", "las", "una", "uno", "unos",
    "unas", "este", "esta", "estos", "estas", "cual", "cuál", "cuando", "donde",
    "qué", "por qué", "según", "también", "sobre", "nos", "usted", "debemos",
}

KEYWORDS_TO_BOLD = [
    "Jehová", "Jesús", "Satanás", "Job", "Moisés", "David", "Abigaíl", "Pablo",
    "Soberano del universo", "espíritu santo", "nuevo mundo", "resurrección",
    "Gran Tribulación", "Armagedón", "fe", "amor", "sabiduría", "justicia",
    "confianza", "integridad", "leal", "leales", "sufrimiento", "predicación",
    "distracciones", "perspicaz", "odio", "persecución", "felices",
]


class Node:
    def __init__(self, tag: str, attrs: dict[str, str], parent: "Node | None", order: int) -> None:
        self.tag = tag
        self.attrs = attrs
        self.parent = parent
        self.children: list[Node | str] = []
        self.order = order

    def get(self, name: str, default: str = "") -> str:
        return self.attrs.get(name, default)


class DOMParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.root = Node("document", {}, None, 0)
        self.stack = [self.root]
        self.counter = 1

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_dict = {name: (value or "") for name, value in attrs}
        node = Node(tag.lower(), attr_dict, self.stack[-1], self.counter)
        self.counter += 1
        self.stack[-1].children.append(node)
        if tag.lower() not in VOID_TAGS:
            self.stack.append(node)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        for idx in range(len(self.stack) - 1, 0, -1):
            if self.stack[idx].tag == tag:
                del self.stack[idx:]
                return

    def handle_data(self, data: str) -> None:
        if data:
            self.stack[-1].children.append(data)

    def handle_entityref(self, name: str) -> None:
        self.stack[-1].children.append(html.unescape(f"&{name};"))

    def handle_charref(self, name: str) -> None:
        self.stack[-1].children.append(html.unescape(f"&#{name};"))


@dataclass
class BibleVerse:
    reference: str
    text: str


@dataclass
class BibleLink:
    reference: str
    href: str
    targetverses: str
    text: str = ""


@dataclass
class IssueEntry:
    doc_id: int
    url: str
    title: str
    context: str
    image: str = ""


@dataclass
class SidebarDraft:
    title: str
    intro: str = ""
    items: list[str] = field(default_factory=list)
    anchor: str = ""


@dataclass
class ParagraphDraft:
    number: int
    content: str
    summary: str
    sidebar: dict[str, object] | None = None


@dataclass
class QuestionDraft:
    number: str
    text: str
    paragraphs: list[int]
    answer: list[str]
    key_point: str
    section: str = ""
    read_text: str = ""
    image: str = ""
    image_caption: str = ""
    bible_links: list[BibleLink] = field(default_factory=list)


@dataclass
class ArticleDraft:
    article_number: int
    study_id: str
    doc_id: int
    source_url: str
    week: str
    month: str
    year: int
    song: str
    title: str
    biblical_text: str
    theme: str
    final_song: str
    questions: list[QuestionDraft]
    paragraphs: list[ParagraphDraft]
    review_questions: list[dict[str, object]]
    biblical_texts: dict[str, list[BibleVerse]]


FETCH_CACHE: dict[str, str] = {}
BIBLE_CACHE: dict[str, Node] = {}


def parse_html(markup: str) -> Node:
    parser = DOMParser()
    parser.feed(markup)
    return parser.root


def walk(node: Node | str) -> Iterable[Node]:
    if isinstance(node, str):
        return
    yield node
    for child in node.children:
        if isinstance(child, Node):
            yield from walk(child)


def classes(node: Node) -> set[str]:
    return set(node.get("class").split())


def has_class(node: Node, class_name: str) -> bool:
    return class_name in classes(node)


def find_all(root: Node, tag: str | None = None, class_name: str | None = None) -> list[Node]:
    results: list[Node] = []
    for node in walk(root):
        if tag and node.tag != tag:
            continue
        if class_name and not has_class(node, class_name):
            continue
        results.append(node)
    return results


def first(root: Node, tag: str | None = None, class_name: str | None = None) -> Node | None:
    matches = find_all(root, tag=tag, class_name=class_name)
    return matches[0] if matches else None


def clean_text(value: str) -> str:
    value = html.unescape(value)
    value = value.replace("\u00a0", " ").replace("\u202f", " ").replace("\u200b", "")
    value = re.sub(r"\s+", " ", value).strip()
    value = re.sub(r"\s+([,.;:?!])", r"\1", value)
    value = re.sub(r"([¿¡(])\s+", r"\1", value)
    return value


def collect_text(node: Node | str, pieces: list[str]) -> None:
    if isinstance(node, str):
        pieces.append(node)
        return
    if node.tag in {"script", "style", "noscript", "textarea", "label"}:
        return
    if classes(node) & SKIP_TEXT_CLASSES:
        return
    if node.tag in BLOCK_TAGS:
        pieces.append(" ")
    for child in node.children:
        collect_text(child, pieces)
    if node.tag in BLOCK_TAGS:
        pieces.append(" ")


def text_content(node: Node | None) -> str:
    if node is None:
        return ""
    pieces: list[str] = []
    collect_text(node, pieces)
    return clean_text("".join(pieces))


def _has_descendant_tag(node: Node, tags: set[str]) -> bool:
    for child in node.children:
        if isinstance(child, Node):
            if child.tag in tags:
                return True
            if _has_descendant_tag(child, tags):
                return True
    return False


def collect_rich_text(node: Node | str, pieces: list[str]) -> None:
    if isinstance(node, str):
        pieces.append(node)
        return
    if node.tag in {"script", "style", "noscript", "textarea", "label"}:
        return
    if classes(node) & SKIP_TEXT_CLASSES:
        return

    if node.tag in {"strong", "b"}:
        plain = text_content(node)
        if plain:
            if _has_descendant_tag(node, {"em", "i"}):
                pieces.append(f"***{plain}***")
            else:
                pieces.append(f"**{plain}**")
        return
    if node.tag in {"em", "i"} and _has_descendant_tag(node, {"strong", "b"}):
        plain = text_content(node)
        if plain:
            pieces.append(f"***{plain}***")
        return

    if node.tag in BLOCK_TAGS:
        pieces.append(" ")
    for child in node.children:
        collect_rich_text(child, pieces)
    if node.tag in BLOCK_TAGS:
        pieces.append(" ")


def rich_text_content(node: Node | None) -> str:
    if node is None:
        return ""
    pieces: list[str] = []
    collect_rich_text(node, pieces)
    return clean_text("".join(pieces))


def fetch(url: str) -> str:
    absolute = urljoin(BASE_URL, url)
    if absolute in FETCH_CACHE:
        return FETCH_CACHE[absolute]
    request = Request(absolute, headers={"User-Agent": "Mozilla/5.0 atalaya-app-importer"})
    with urlopen(request, timeout=30) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        text = response.read().decode(charset, errors="replace")
    FETCH_CACHE[absolute] = text
    return text


def normalize_month(value: str) -> str:
    normalized = clean_text(value).lower()
    normalized = normalized.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")
    for month in MONTH_SLUGS:
        bare = month.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")
        if normalized == bare:
            return month
    raise ValueError(f"Mes no reconocido: {value}")


def build_issue_url(month: str, year: int) -> str:
    slug = MONTH_SLUGS[normalize_month(month)]
    return f"{BASE_URL}/es/biblioteca/revistas/atalaya-estudio-{slug}-{year}/"


def extract_doc_id(node: Node) -> int | None:
    match = re.search(r"docId-(\d+)", node.get("class"))
    return int(match.group(1)) if match else None


def image_url_from_span(span: Node | None) -> str:
    if not span:
        return ""
    return span.get("data-zoom") or span.get("data-img-size-xl") or span.get("data-img-size-lg") or span.get("data-img-size-md")


def parse_issue(issue_url: str, limit: int | None = None) -> list[IssueEntry]:
    root = parse_html(fetch(issue_url))
    entries: list[IssueEntry] = []
    seen: set[int] = set()
    for node in walk(root):
        node_classes = classes(node)
        if "PublicationArticle" not in node_classes or "docClass-40" not in node_classes:
            continue
        if node.tag not in {"div", "li"}:
            continue
        doc_id = extract_doc_id(node)
        if not doc_id or doc_id in seen:
            continue
        link_node = None
        heading = first(node, tag="h2") or first(node, tag="h3")
        if heading:
            for candidate in find_all(heading, tag="a"):
                if candidate.get("href"):
                    link_node = candidate
                    break
        if not link_node:
            for candidate in find_all(node, tag="a"):
                if candidate.get("href") and candidate.get("aria-hidden") != "true":
                    link_node = candidate
                    break
        if not link_node:
            continue
        title = text_content(link_node)
        context = text_content(first(node, tag="p", class_name="contextTitle"))
        span = first(node, tag="span", class_name="jsRespImg")
        entries.append(IssueEntry(doc_id=doc_id, url=urljoin(issue_url, link_node.get("href")), title=title, context=context, image=image_url_from_span(span)))
        seen.add(doc_id)
        if limit and len(entries) >= limit:
            break
    return entries


def article_number_from_doc_id(doc_id: int, offset: int) -> int:
    return (doc_id % 100) + offset


def parse_week(context: str) -> tuple[str, str, int]:
    context = clean_text(context).upper()
    same_month = re.search(r"(\d+)-(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+DE\s+(\d{4})", context)
    if same_month:
        start, end, month_raw, year = same_month.groups()
        week = f"{int(start)}-{int(end)} {MONTH_SHORT[month_raw]}"
        return week, MONTH_NAME[month_raw], int(year)
    cross_month = re.search(r"(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+A\s+(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+DE\s+(\d{4})", context)
    if cross_month:
        start, first_month, end, second_month, year = cross_month.groups()
        week = f"{int(start)} {MONTH_SHORT[first_month]}-{int(end)} {MONTH_SHORT[second_month]}"
        return week, MONTH_NAME[first_month], int(year)
    cross_month_dash = re.search(r"(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)-(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+DE\s+(\d{4})", context)
    if cross_month_dash:
        start, first_month, end, second_month, year = cross_month_dash.groups()
        week = f"{int(start)} {MONTH_SHORT[first_month]}-{int(end)} {MONTH_SHORT[second_month]}"
        return week, MONTH_NAME[first_month], int(year)
    raise ValueError(f"No pude interpretar la semana: {context}")


def parse_study_id(context: str) -> str:
    """Fecha ISO (inicio de semana) usada como studyId, ej. 2026-06-29."""
    context_clean = clean_text(context).upper()
    same_month = re.search(r"(\d+)-(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+DE\s+(\d{4})", context_clean)
    if same_month:
        start, _, month_raw, year = same_month.groups()
        month_num = MONTH_NUMBER.get(MONTH_NAME.get(month_raw, ""), "01")
        return f"{year}-{month_num}-{int(start):02d}"
    cross_month = re.search(r"(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+A\s+(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+DE\s+(\d{4})", context_clean)
    if cross_month:
        start, first_month, _, _, year = cross_month.groups()
        month_num = MONTH_NUMBER.get(MONTH_NAME.get(first_month, ""), "01")
        return f"{year}-{month_num}-{int(start):02d}"
    cross_month_dash = re.search(r"(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)-(\d+)\s+DE\s+([A-ZÁÉÍÓÚ]+)\s+DE\s+(\d{4})", context_clean)
    if cross_month_dash:
        start, first_month, _, _, year = cross_month_dash.groups()
        month_num = MONTH_NUMBER.get(MONTH_NAME.get(first_month, ""), "01")
        return f"{year}-{month_num}-{int(start):02d}"
    raise ValueError(f"No pude interpretar studyId desde: {context}")


def study_export_suffix(study_id: str) -> str:
    return study_id.replace("-", "")


def normalize_song(text: str) -> str:
    text = clean_text(text)
    text = re.sub(r"^CANCIÓN", "Canción", text)
    return text


def nearest_ancestor(node: Node, tag: str | None = None, class_name: str | None = None) -> Node | None:
    current = node.parent
    while current:
        if tag and current.tag != tag:
            current = current.parent
            continue
        if class_name and not has_class(current, class_name):
            current = current.parent
            continue
        return current
    return None


def parse_question_number(raw: str) -> tuple[str, str]:
    raw = clean_text(raw)
    match = re.match(r"^(\d+(?:,\s*\d+)*)\.\s*(.*)$", raw)
    if match:
        return match.group(1), match.group(2).strip()
    return "", raw


def remove_initial_read_marker(text: str) -> str:
    return clean_text(re.sub(r"^\(?\s*Lea\s+[^.)]+\)\.\s*", "", text, flags=re.IGNORECASE))


def sentence_split(text: str) -> list[str]:
    text = clean_text(text)
    text = remove_initial_read_marker(text)
    if not text:
        return []
    chunks = re.split(r"(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡])", text)
    return [clean_text(chunk) for chunk in chunks if len(clean_text(chunk)) > 20]


def words(text: str) -> set[str]:
    return {
        token.lower()
        for token in re.findall(r"[A-Za-zÁÉÍÓÚáéíóúÑñüÜ]{4,}", text)
        if token.lower() not in STOPWORDS
    }


def bold_keywords(text: str) -> str:
    result = text
    for keyword in sorted(KEYWORDS_TO_BOLD, key=len, reverse=True):
        pattern = re.compile(rf"(?<!\*)\b({re.escape(keyword)})\b(?!\*)", re.IGNORECASE)
        result = pattern.sub(lambda match: f"**{match.group(1)}**", result, count=1)
    return result


def strip_bold(text: str) -> str:
    return text.replace("**", "")


def comparable_reference(text: str) -> str:
    text = clean_text(text).lower()
    replacements = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "ü": "u",
        "\u00a0": " ",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    text = re.sub(r"\b1\s+", "1 ", text)
    text = re.sub(r"\b2\s+", "2 ", text)
    text = text.replace(".", "")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def generate_answer(question: str, paragraph_texts: list[str]) -> list[str]:
    q_words = words(question)
    candidates: list[tuple[int, int, str]] = []
    order = 0
    for paragraph in paragraph_texts:
        for sentence in sentence_split(paragraph):
            if sentence.startswith("¿"):
                continue
            score = len(words(sentence) & q_words)
            if order == 0:
                score += 2
            if "Jehová" in sentence:
                score += 1
            candidates.append((score, -order, sentence))
            order += 1
    candidates.sort(reverse=True)
    selected: list[str] = []
    seen: set[str] = set()
    for _, _, sentence in candidates:
        base = strip_bold(sentence)
        if base in seen:
            continue
        selected.append(bold_keywords(sentence))
        seen.add(base)
        if len(selected) >= 4:
            break
    return selected or ["Revise el párrafo y destaque la idea principal con **palabras clave**."]


def trim_summary(text: str, max_len: int = 240) -> str:
    text = clean_text(text)
    text = re.sub(r"\s*\([^)]{1,80}\)", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) <= max_len:
        return text
    candidates = re.split(r"(?<=[.!?])\s+", text)
    shortened = ""
    for candidate in candidates:
        if not candidate:
            continue
        proposed = clean_text(f"{shortened} {candidate}")
        if len(proposed) > max_len:
            break
        shortened = proposed
    if shortened:
        return shortened
    return text[:max_len].rsplit(" ", 1)[0].rstrip(" ,;:")


def generate_summary(content: str, question: str = "", answer: list[str] | None = None) -> str:
    """Create a short draft summary.

    This is only a starting point. The skill requires a human/agent pass to
    rewrite summaries in plain language and avoid copied paragraph fragments.
    """
    answer = answer or []
    q_words = words(question)
    sentences = [sentence for sentence in sentence_split(content) if not sentence.startswith(("¿", "¡"))]
    if not sentences:
        return "Reescribir este resumen con la **idea central** del párrafo."

    ranked: list[tuple[int, int, str]] = []
    for index, sentence in enumerate(sentences):
        score = len(words(sentence) & q_words)
        if "Jehová" in sentence:
            score += 1
        if answer and any(words(sentence) & words(item) for item in answer[:2]):
            score += 1
        ranked.append((score, -index, sentence))
    ranked.sort(reverse=True)
    chosen = ranked[0][2]
    chosen = re.sub(r"^(La Biblia dice que|Es cierto que|Por eso,|Así que,|Además,|Pero|En cambio,|En resumen,)\s+", "", chosen, flags=re.IGNORECASE)
    summary = f"Este párrafo destaca esta idea: {trim_summary(chosen, 190)}"
    summary = summary.rstrip(" .") + "."
    return bold_keywords(summary)


def slug_to_book_name(href: str) -> str:
    decoded = unquote(href)
    match = re.search(r"/libros/([^/]+)/", decoded, flags=re.IGNORECASE)
    if not match:
        return "Texto bíblico"
    slug = match.group(1).lower()
    return BOOK_NAMES.get(slug, slug.replace("-", " ").title())


def chapter_from_href(href: str) -> int:
    decoded = unquote(href)
    match = re.search(r"/libros/[^/]+/(\d+)/", decoded, flags=re.IGNORECASE)
    return int(match.group(1)) if match else 0


def reference_from_anchor(anchor: Node) -> str:
    label = clean_text(text_content(anchor)).rstrip(";,.")
    href = anchor.get("href")
    book = slug_to_book_name(href)
    match = re.search(r"(\d+\s*:\s*[\d,\s\-]+)", label)
    if match:
        return f"{book} {clean_text(match.group(1))}"
    if re.match(r"^\d", label):
        return f"{book} {label}"
    chapter = chapter_from_href(href)
    return f"{book} {chapter}" if chapter else label


def verse_ids_from_target(target: str) -> list[int]:
    ids: list[int] = []
    for part in target.split(","):
        part = part.strip()
        if not part:
            continue
        if "-" in part:
            start_raw, end_raw = part.split("-", 1)
            start, end = int(start_raw), int(end_raw)
            ids.extend(range(start, end + 1))
        else:
            ids.append(int(part))
    return ids


def chapter_url_from_href(href: str) -> str:
    absolute = urljoin(BASE_URL, href)
    return absolute.split("#", 1)[0]


def verse_ref_from_id(book: str, verse_id: int) -> str:
    verse = verse_id % 1000
    chapter = (verse_id // 1000) % 1000
    return f"{book} {chapter}:{verse}"


def get_bible_root(url: str) -> Node:
    if url not in BIBLE_CACHE:
        BIBLE_CACHE[url] = parse_html(fetch(url))
    return BIBLE_CACHE[url]


def fetch_bible_verses(link: BibleLink) -> list[BibleVerse]:
    if not link.href or not link.targetverses:
        return []
    ids = verse_ids_from_target(link.targetverses)
    if not ids:
        return []
    root = get_bible_root(chapter_url_from_href(link.href))
    verses_by_id = {node.get("id"): node for node in find_all(root, tag="span", class_name="verse")}
    book = slug_to_book_name(link.href)
    results: list[BibleVerse] = []
    for verse_id in ids:
        node = verses_by_id.get(f"v{verse_id}")
        if not node:
            continue
        text = clean_text(text_content(node))
        results.append(BibleVerse(reference=verse_ref_from_id(book, verse_id), text=text))
    return results


def extract_bible_links(nodes: Iterable[Node]) -> list[BibleLink]:
    links: list[BibleLink] = []
    seen: set[tuple[str, str]] = set()
    for root in nodes:
        for anchor in find_all(root, tag="a", class_name="jsBibleLink"):
            if "xrefLink" in classes(anchor):
                continue
            href = anchor.get("href")
            target = anchor.get("data-targetverses")
            if not href or not target:
                continue
            key = (href, target)
            if key in seen:
                continue
            seen.add(key)
            link = BibleLink(reference=reference_from_anchor(anchor), href=href, targetverses=target)
            verses = fetch_bible_verses(link)
            link.text = " ".join(verse.text for verse in verses)
            links.append(link)
    return links


def read_text_from_paragraph(paragraphs: list[Node]) -> tuple[str, list[BibleVerse]]:
    for paragraph in paragraphs:
        text = text_content(paragraph)
        read_match = re.search(r"\(\s*lea\s+([^)]+?)\s*\)", text, flags=re.IGNORECASE)
        if not read_match:
            continue
        requested = clean_text(read_match.group(1))
        requested_key = comparable_reference(requested)
        anchor = None
        bible_anchors = [node for node in find_all(paragraph, tag="a", class_name="jsBibleLink") if "xrefLink" not in classes(node)]
        for candidate in bible_anchors:
            candidate_reference = comparable_reference(reference_from_anchor(candidate))
            candidate_text = comparable_reference(text_content(candidate))
            if requested_key in candidate_reference or candidate_text in requested_key:
                anchor = candidate
                break
        if not anchor and bible_anchors:
            anchor = bible_anchors[-1]
        if not anchor:
            continue
        link = BibleLink(reference=reference_from_anchor(anchor), href=anchor.get("href"), targetverses=anchor.get("data-targetverses"))
        verses = fetch_bible_verses(link)
        if verses:
            return f"LEE {link.reference}", verses
    return "", []


def paragraph_number(node: Node) -> int | None:
    marker = first(node, tag="span", class_name="parNum")
    value = marker.get("data-pnum") if marker else ""
    return int(value) if value.isdigit() else None


def node_order_map(root: Node) -> dict[int, Node]:
    return {node.order: node for node in walk(root)}


def parse_caption_paragraph_numbers(caption: str) -> list[int]:
    caption = caption.lower()
    match = re.search(r"párrafos?\s+([\d,\sy]+)", caption)
    if not match:
        return []
    return [int(value) for value in re.findall(r"\d+", match.group(1))]


def box_anchor_id(box_node: Node) -> str:
    ref = first(box_node, tag="span", class_name="refID")
    if ref and ref.get("id"):
        return ref.get("id")
    return ""


def parse_box_supplement(box_node: Node) -> SidebarDraft | None:
    if not has_class(box_node, "boxSupplement"):
        return None
    title_node = first(box_node, tag="h2")
    title = text_content(title_node)
    if not title or "QUÉ RESPONDER" in title.upper():
        return None

    box_content = first(box_node, tag="div", class_name="boxContent")
    intro = ""
    items: list[str] = []
    if box_content:
        intro_node = first(box_content, tag="p")
        if intro_node:
            intro = rich_text_content(intro_node)
        list_node = first(box_content, tag="ol") or first(box_content, tag="ul")
        if list_node:
            for item in find_all(list_node, tag="li"):
                paragraph = first(item, tag="p")
                item_text = rich_text_content(paragraph or item)
                if item_text:
                    items.append(item_text)

    return SidebarDraft(title=title, intro=intro, items=items, anchor=box_anchor_id(box_node))


def build_question_anchor_map(question_nodes: list[Node], questions: list[QuestionDraft]) -> dict[str, QuestionDraft]:
    mapping: dict[str, QuestionDraft] = {}
    for question_node, question in zip(question_nodes, questions):
        for link in find_all(question_node, tag="a"):
            anchor = link.get("data-anchor", "").lstrip("#")
            if anchor.startswith("link"):
                mapping[anchor] = question
    return mapping


def last_paragraph_number_before(body: Node, node_order: int) -> int | None:
    last_number: int | None = None
    for node in walk(body):
        if node.order >= node_order:
            break
        if node.tag == "p" and node.get("data-rel-pid"):
            number = paragraph_number(node)
            if number is not None:
                last_number = number
    return last_number


def link_boxes_to_paragraphs(
    body: Node,
    question_nodes: list[Node],
    questions: list[QuestionDraft],
    paragraph_drafts_by_number: dict[int, ParagraphDraft],
) -> None:
    anchor_map = build_question_anchor_map(question_nodes, questions)
    for box_node in find_all(body, class_name="boxSupplement"):
        sidebar = parse_box_supplement(box_node)
        if not sidebar:
            continue

        target_number: int | None = None
        if sidebar.anchor and sidebar.anchor in anchor_map:
            question = anchor_map[sidebar.anchor]
            if question.paragraphs:
                target_number = max(question.paragraphs)
        if target_number is None:
            target_number = last_paragraph_number_before(body, box_node.order)

        if target_number is None or target_number not in paragraph_drafts_by_number:
            continue

        paragraph_drafts_by_number[target_number].sidebar = {
            "title": sidebar.title,
            **({"intro": sidebar.intro} if sidebar.intro else {}),
            **({"items": sidebar.items} if sidebar.items else {}),
        }


def paragraph_to_data(paragraph: ParagraphDraft) -> dict[str, object]:
    data: dict[str, object] = {
        "number": paragraph.number,
        "content": paragraph.content,
        "summary": paragraph.summary,
    }
    if paragraph.sidebar:
        data["sidebar"] = paragraph.sidebar
    return data


def parse_article(entry: IssueEntry, article_number: int, delay: float = 0.0) -> ArticleDraft:
    if delay:
        time.sleep(delay)
    root = parse_html(fetch(entry.url))
    body_class = first(root, tag="body").get("class") if first(root, tag="body") else ""
    doc_match = re.search(r"docId-(\d+)", body_class)
    doc_id = int(doc_match.group(1)) if doc_match else entry.doc_id
    title = text_content(first(root, tag="h1")) or entry.title
    context = text_content(first(root, tag="p", class_name="contextTtl")) or entry.context
    week, month, year = parse_week(context)
    study_id = parse_study_id(context)
    pub_refs = find_all(root, tag="p", class_name="pubRefs")
    song = normalize_song(text_content(pub_refs[0])) if pub_refs else ""
    final_song = normalize_song(text_content(pub_refs[-1])) if pub_refs else ""
    theme = ""
    for index, pub_ref in enumerate(pub_refs):
        if text_content(pub_ref).upper() == "TEMA" and index + 1 < len(pub_refs):
            theme = text_content(pub_refs[index + 1])
            break
    biblical_text = text_content(first(root, tag="p", class_name="themeScrp"))
    body = first(root, tag="div", class_name="bodyTxt")
    if not body:
        raise RuntimeError(f"No encontré bodyTxt en {entry.url}")

    question_nodes = find_all(body, tag="p", class_name="qu")
    all_paragraph_nodes = [node for node in find_all(body, tag="p") if node.get("data-rel-pid")]
    section_by_question: dict[int, str] = {}
    current_section = ""
    for node in sorted([n for n in walk(body) if n.tag in {"h2", "p"}], key=lambda n: n.order):
        if node.tag == "h2" and text_content(node) and "QUÉ RESPONDERÍA" not in text_content(node).upper():
            current_section = text_content(node)
        if node.tag == "p" and has_class(node, "qu"):
            section_by_question[node.order] = current_section

    paragraph_drafts_by_number: dict[int, ParagraphDraft] = {}
    questions: list[QuestionDraft] = []
    biblical_texts: dict[str, list[BibleVerse]] = {}

    for question_node in question_nodes:
        qpid = question_node.get("data-pid")
        q_number, q_text = parse_question_number(text_content(question_node))
        related = [node for node in all_paragraph_nodes if f"[{qpid}]" in node.get("data-rel-pid")]
        p_numbers: list[int] = []
        p_texts: list[str] = []
        for paragraph_node in related:
            number = paragraph_number(paragraph_node)
            if number is None:
                continue
            content = text_content(paragraph_node)
            p_numbers.append(number)
            p_texts.append(content)
            if number not in paragraph_drafts_by_number:
                paragraph_drafts_by_number[number] = ParagraphDraft(number=number, content=content, summary="")
        read_text, read_verses = read_text_from_paragraph(related)
        if read_text and read_verses:
            biblical_texts[read_text] = read_verses
        bible_links = extract_bible_links([question_node, *related])
        answer = generate_answer(q_text, p_texts)
        for number in p_numbers:
            paragraph = paragraph_drafts_by_number[number]
            if not paragraph.summary:
                paragraph.summary = generate_summary(paragraph.content, q_text, answer)
        questions.append(
            QuestionDraft(
                number=q_number,
                text=q_text,
                paragraphs=p_numbers,
                answer=answer,
                key_point=strip_bold(answer[0]),
                section=section_by_question.get(question_node.order, ""),
                read_text=read_text,
                bible_links=bible_links,
            )
        )

    link_boxes_to_paragraphs(body, question_nodes, questions, paragraph_drafts_by_number)
    assign_images(body, questions, question_nodes)
    review_questions = parse_review_questions(root, questions)
    paragraphs = [paragraph_drafts_by_number[number] for number in sorted(paragraph_drafts_by_number)]
    return ArticleDraft(
        article_number=article_number,
        study_id=study_id,
        doc_id=doc_id,
        source_url=entry.url,
        week=week,
        month=month,
        year=year,
        song=song,
        title=title,
        biblical_text=biblical_text,
        theme=theme,
        final_song=final_song,
        questions=questions,
        paragraphs=paragraphs,
        review_questions=review_questions,
        biblical_texts=biblical_texts,
    )


def assign_images(body: Node, questions: list[QuestionDraft], question_nodes: list[Node]) -> None:
    image_spans = [node for node in find_all(body, tag="span", class_name="jsRespImg") if node.get("data-img-type") == "cnt"]
    question_by_order = list(zip(question_nodes, questions))
    for span in image_spans:
        image = image_url_from_span(span)
        if not image:
            continue
        figure = nearest_ancestor(span, tag="figure")
        caption = text_content(first(figure, tag="figcaption")) if figure else span.get("data-img-att-alt")
        nums = parse_caption_paragraph_numbers(caption)
        target: QuestionDraft | None = None
        if nums:
            for question in questions:
                if any(num in question.paragraphs for num in nums):
                    target = question
                    break
        if not target:
            preceding = [(node.order, question) for node, question in question_by_order if node.order < span.order]
            if preceding:
                target = sorted(preceding)[-1][1]
        if target and not target.image:
            target.image = image
            target.image_caption = caption or span.get("data-img-att-alt")


def parse_review_questions(body: Node, questions: list[QuestionDraft]) -> list[dict[str, object]]:
    block = first(body, tag="div", class_name="blockTeach")
    if not block:
        return []
    result: list[dict[str, object]] = []
    all_answers = [sentence for question in questions for sentence in question.answer if not strip_bold(sentence).startswith("¿")]
    for item in find_all(block, tag="li"):
        paragraph = first(item, tag="p")
        question_text = text_content(paragraph)
        if not question_text:
            continue
        q_words = words(question_text)
        scored = sorted(((len(words(answer) & q_words), answer) for answer in all_answers), reverse=True)
        answers = [answer for score, answer in scored if score > 0][:4]
        if len(answers) < 3:
            answers = (answers + all_answers[:4])[:4]
        result.append({"question": question_text, "answer": answers})
    return result


def question_to_data(question: QuestionDraft, previous_section: str = "") -> dict[str, object]:
    data: dict[str, object] = {
        "number": question.number,
        "textEs": question.text,
        "textLSM": "",
        "paragraphs": question.paragraphs,
        "keyPoint": question.key_point,
        "answer": question.answer,
    }
    if question.section and question.section != previous_section:
        data["section"] = question.section
    if question.read_text:
        data["readText"] = question.read_text
    if question.image:
        data["image"] = question.image
    if question.image_caption:
        data["imageCaption"] = question.image_caption
    if question.bible_links:
        data["biblicalCards"] = [
            {
                "reference": link.reference,
                "purpose": f"Texto citado para apoyar la respuesta a la pregunta: {strip_bold(question.text).rstrip('?')}",
                "text": link.text or "VERIFICAR TEXTO EN JW.ORG",
            }
            for link in question.bible_links
        ]
    return data


def article_to_data(article: ArticleDraft) -> dict[str, object]:
    questions_data: list[dict[str, object]] = []
    previous_section = ""
    for question in article.questions:
        questions_data.append(question_to_data(question, previous_section))
        if question.section:
            previous_section = question.section

    return {
        "metadata": {
            "studyId": article.study_id,
            "week": article.week,
            "month": article.month,
            "year": article.year,
        },
        "song": article.song,
        "title": article.title,
        "biblicalText": article.biblical_text,
        "theme": article.theme,
        "questions": questions_data,
        "paragraphs": [paragraph_to_data(paragraph) for paragraph in article.paragraphs],
        "reviewQuestions": article.review_questions,
        "finalSong": article.final_song,
    }


def json_ts(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def render_article_file(article: ArticleDraft) -> str:
    suffix = study_export_suffix(article.study_id)
    biblical_texts = {
        read_text: [{"reference": verse.reference, "text": verse.text} for verse in verses]
        for read_text, verses in article.biblical_texts.items()
    }
    return (
        "import { ArticleData } from '@/types/atalaya';\n\n"
        "// ============================================\n"
        "// TEXTOS BÍBLICOS (readText + refs del recuadro)\n"
        "// ============================================\n"
        f"export const biblicalTexts{suffix}: Record<string, {{ reference: string; text: string }}[]> = {json_ts(biblical_texts)};\n\n"
        "// ============================================\n"
        f"// ESTUDIO {article.study_id}\n"
        "// ============================================\n"
        f"export const study{suffix}: ArticleData = {json_ts(article_to_data(article))};\n"
    )


def write_article_files(articles: list[ArticleDraft], articles_dir: Path, force: bool) -> list[Path]:
    articles_dir.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []
    for article in articles:
        path = articles_dir / f"study-{article.study_id}.ts"
        if path.exists() and not force:
            print(f"SKIP {path} ya existe. Usa --force para sobrescribir.", file=sys.stderr)
            continue
        path.write_text(render_article_file(article), encoding="utf-8")
        written.append(path)
    return written


def update_index(repo_root: Path, articles: list[ArticleDraft]) -> None:
    path = repo_root / "data/articles/index.ts"
    text = path.read_text(encoding="utf-8")
    existing_ids = set(re.findall(r"'(\d{4}-\d{2}-\d{2})': study\d+", text))
    existing_ids.update(article.study_id for article in articles)
    ordered = sorted(existing_ids)
    import_block = "\n".join(
        f"import {{ study{study_export_suffix(sid)}, biblicalTexts{study_export_suffix(sid)} }} from './study-{sid}';"
        for sid in ordered
    )
    text = re.sub(
        r"(import \{ isStudyActive \} from '\.\./articles-config';\n)(.*?)(\n// ============================================\n// MAPAS DE DATOS)",
        rf"\1{import_block}\3",
        text,
        flags=re.S,
    )
    studies_map = "export const studiesMap: Record<string, ArticleData> = {\n" + "\n".join(
        f"  '{sid}': study{study_export_suffix(sid)}," for sid in ordered
    ) + "\n};"
    text = re.sub(r"export const studiesMap: Record<string, ArticleData> = \{\n.*?\n\};", studies_map, text, flags=re.S)
    bible_map = "export const biblicalTextsMap: Record<string, Record<string, { reference: string; text: string }[]>> = {\n" + "\n".join(
        f"  '{sid}': biblicalTexts{study_export_suffix(sid)}," for sid in ordered
    ) + "\n};"
    text = re.sub(
        r"export const biblicalTextsMap: Record<string, Record<string, \{ reference: string; text: string \}\[\]>> = \{\n.*?\n\};",
        bible_map,
        text,
        flags=re.S,
    )
    exports_block = "export {\n" + "\n".join(
        f"  study{study_export_suffix(sid)}, biblicalTexts{study_export_suffix(sid)},"
        for sid in ordered
    ) + "\n};"
    text = re.sub(r"export \{[^;]*study\d+[^;]*\};", exports_block, text, flags=re.S)
    path.write_text(text, encoding="utf-8")


def update_config(repo_root: Path, articles: list[ArticleDraft]) -> None:
    if not articles:
        return
    path = repo_root / "data/articles-config.ts"
    text = path.read_text(encoding="utf-8")
    existing = set(re.findall(r'"(\d{4}-\d{2}-\d{2})"', text))
    existing.update(article.study_id for article in articles)
    by_id = {article.study_id: article for article in articles}
    lines = []
    for study_id in sorted(existing):
        article = by_id.get(study_id)
        if article:
            title = article.title.replace('"', "'")
            lines.append(f'    "{study_id}",  // "{title}" ({article.week})')
        else:
            old_comment = re.search(rf'^\s*"{study_id}",\s*//\s*(.*)$', text, flags=re.M)
            comment = old_comment.group(1) if old_comment else "estudio existente"
            lines.append(f'    "{study_id}",  // {comment}')
    active_block = "activeStudyIds: [\n" + "\n".join(lines) + "\n  ],"
    text = re.sub(r"activeStudyIds: \[[\s\S]*?\],", active_block, text, flags=re.S)
    first_article = sorted(articles, key=lambda article: article.study_id)[0]
    default_month = f"{first_article.year}-{MONTH_NUMBER.get(first_article.month, '01')}"
    text = re.sub(r'defaultMonth: "\d{4}-\d{2}"', f'defaultMonth: "{default_month}"', text)
    text = re.sub(r'defaultStudyId: "[^"]*"|defaultStudyId: null', f'defaultStudyId: "{first_article.study_id}"', text)
    path.write_text(text, encoding="utf-8")


def validate_articles(articles: list[ArticleDraft]) -> list[str]:
    warnings: list[str] = []
    sidebar_ref_pattern = re.compile(r"\(([^)]+)\)")
    for article in articles:
        label = f"Estudio {article.study_id}"
        if not article.questions:
            warnings.append(f"{label}: no tiene preguntas.")
        if not article.paragraphs:
            warnings.append(f"{label}: no tiene párrafos.")
        for paragraph in article.paragraphs:
            plain_summary = clean_text(strip_bold(paragraph.summary))
            plain_content = clean_text(paragraph.content)
            if not plain_summary:
                warnings.append(f"{label}, párrafo {paragraph.number}: falta summary.")
            if plain_summary.startswith("¿"):
                warnings.append(f"{label}, párrafo {paragraph.number}: el summary empieza como pregunta.")
            if plain_summary.endswith("..."):
                warnings.append(f"{label}, párrafo {paragraph.number}: el summary parece truncado.")
            if len(plain_summary) > 260:
                warnings.append(f"{label}, párrafo {paragraph.number}: el summary es demasiado largo.")
            if len(plain_summary) > 120 and plain_summary in plain_content:
                warnings.append(f"{label}, párrafo {paragraph.number}: el summary parece copiado del párrafo.")
            sidebar = paragraph.sidebar
            if sidebar:
                sidebar_texts: list[str] = []
                if sidebar.get("intro"):
                    sidebar_texts.append(str(sidebar["intro"]))
                sidebar_texts.extend(str(item) for item in (sidebar.get("items") or []))
                for sidebar_text in sidebar_texts:
                    for match in sidebar_ref_pattern.finditer(sidebar_text):
                        inner = match.group(1)
                        if re.search(r"\d+:\d+", inner):
                            warnings.append(
                                f"{label}, párrafo {paragraph.number}: añadir TNM en biblicalTexts para ref del recuadro ({inner})"
                            )
        for question in article.questions:
            if question.read_text and question.read_text not in article.biblical_texts:
                warnings.append(f"{label}: falta biblicalTexts para {question.read_text}.")
            for link in question.bible_links:
                if not link.text:
                    warnings.append(f"{label}: falta texto bíblico para {link.reference}.")
        for question in article.questions:
            if question.image and "_xl" not in question.image:
                warnings.append(f"{label}: imagen no parece ser tamaño XL en pregunta {question.number}.")
    return warnings


def existing_study_ids(repo_root: Path) -> set[str]:
    articles_dir = repo_root / "data/articles"
    return {
        match.group(1)
        for path in articles_dir.glob("study-*.ts")
        if (match := re.search(r"study-(\d{4}-\d{2}-\d{2})\.ts$", path.name))
    }


def existing_article_numbers(repo_root: Path) -> set[int]:
    """Legacy helper — prefer existing_study_ids."""
    articles_dir = repo_root / "data/articles"
    return {
        int(match.group(1))
        for path in articles_dir.glob("article-*.ts")
        if (match := re.search(r"article-(\d+)\.ts$", path.name))
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Importa una revista de estudio de La Atalaya desde jw.org.")
    parser.add_argument("--month", help="Mes de la revista en español, por ejemplo marzo.")
    parser.add_argument("--year", type=int, help="Año de la revista, por ejemplo 2026.")
    parser.add_argument("--issue-url", help="URL explícita de la revista en jw.org.")
    parser.add_argument("--first-article-number", type=int, help="Número del primer artículo de estudio de la revista.")
    parser.add_argument("--article-offset", type=int, default=40, help="Offset para inferir número desde docId. Default: 40.")
    parser.add_argument("--repo-root", type=Path, default=Path.cwd(), help="Raíz del repo atalaya-app.")
    parser.add_argument("--output-dir", type=Path, help="Directorio alterno para escribir study-YYYY-MM-DD.ts.")
    parser.add_argument("--write", action="store_true", help="Escribe archivos. Sin esto solo muestra diagnóstico.")
    parser.add_argument("--dry-run", action="store_true", help="Solo lista los artículos detectados.")
    parser.add_argument("--force", action="store_true", help="Permite sobrescribir archivos de artículo existentes.")
    parser.add_argument("--no-integrate", action="store_true", help="No actualiza index.ts ni articles-config.ts.")
    parser.add_argument("--limit", type=int, help="Limita la cantidad de artículos. Útil para pruebas.")
    parser.add_argument("--delay", type=float, default=0.05, help="Pausa entre solicitudes.")
    args = parser.parse_args()

    if not args.issue_url:
        if not args.month or not args.year:
            parser.error("Usa --issue-url o proporciona --month y --year.")
        issue_url = build_issue_url(args.month, args.year)
    else:
        issue_url = args.issue_url

    print(f"Revista: {issue_url}")
    entries = parse_issue(issue_url, limit=args.limit)
    if not entries:
        print("No encontré artículos de estudio docClass-40.", file=sys.stderr)
        return 1

    first_number = args.first_article_number
    existing = existing_study_ids(args.repo_root)
    plan: list[tuple[IssueEntry, int, str, bool]] = []
    for index, entry in enumerate(entries):
        number = first_number + index if first_number else article_number_from_doc_id(entry.doc_id, args.article_offset)
        try:
            study_id = parse_study_id(entry.context)
        except ValueError:
            study_id = f"unknown-{number}"
        plan.append((entry, number, study_id, study_id in existing))

    for entry, number, study_id, exists in plan:
        status = "existe" if exists else "nuevo"
        print(f"- Estudio {study_id} (art. {number}, {status}) docId {entry.doc_id}: {entry.title} [{entry.context}]")

    if args.dry_run or not args.write:
        return 0

    drafts: list[ArticleDraft] = []
    for entry, number, study_id, exists in plan:
        if exists and not args.force:
            continue
        print(f"Generando estudio {study_id} (art. {number}): {entry.title}")
        drafts.append(parse_article(entry, article_number=number, delay=args.delay))

    warnings = validate_articles(drafts)
    for warning in warnings:
        print(f"ADVERTENCIA: {warning}", file=sys.stderr)

    articles_dir = args.output_dir or (args.repo_root / "data/articles")
    written = write_article_files(drafts, articles_dir, force=args.force)
    for path in written:
        print(f"Escrito: {path}")

    if not args.no_integrate and not args.output_dir:
        update_index(args.repo_root, drafts)
        update_config(args.repo_root, drafts)
        print("Actualizados: data/articles/index.ts y data/articles-config.ts")
    elif args.output_dir:
        print("Integración omitida porque se usó --output-dir.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
