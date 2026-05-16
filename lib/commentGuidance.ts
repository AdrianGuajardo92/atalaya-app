import { Paragraph, Question, ReviewQuestion } from '@/types/atalaya';

type Answer = Question['answer'] | ReviewQuestion['answer'];
type QuestionCommentInput = Pick<Question, 'number' | 'textEs' | 'answer' | 'commentSuggestion' | 'keyPoint'>;

export interface BiblicalCommentSource {
  reference: string;
  purpose: string;
  text: string;
  commentSuggestion?: string;
}

interface BiblicalCommentContext {
  questionText?: string;
  paragraphs?: Pick<Paragraph, 'number' | 'content' | 'summary'>[];
}

export interface BiblicalComment {
  reference: string;
  comment: string;
}

const PROPER_STARTS = [
  'Jehová',
  'Jesús',
  'Satanás',
  'Moisés',
  'David',
  'Pablo',
  'Pedro',
  'Job',
  'Abrahán',
  'Sara',
  'María',
  'José',
];

const GENERIC_PURPOSE_PATTERN = /^texto citado para apoyar/i;
const SCRIPTURE_BOOK_ABBREVIATIONS: Record<string, string[]> = {
  'Génesis': ['Gén.', 'Gen.'],
  'Éxodo': ['Éx.', 'Ex.'],
  'Levítico': ['Lev.'],
  'Números': ['Núm.', 'Num.'],
  'Deuteronomio': ['Deut.'],
  'Josué': ['Jos.'],
  'Jueces': ['Juec.'],
  'Rut': ['Rut'],
  '1 Samuel': ['1 Sam.'],
  '2 Samuel': ['2 Sam.'],
  '1 Reyes': ['1 Rey.'],
  '2 Reyes': ['2 Rey.'],
  '1 Crónicas': ['1 Crón.', '1 Cron.'],
  '2 Crónicas': ['2 Crón.', '2 Cron.'],
  'Esdras': ['Esd.'],
  'Nehemías': ['Neh.'],
  'Ester': ['Est.'],
  'Job': ['Job'],
  'Salmo': ['Sal.'],
  'Salmos': ['Sal.'],
  'Proverbios': ['Prov.'],
  'Eclesiastés': ['Ecl.'],
  'Cantar de los Cantares': ['Cant.'],
  'Isaías': ['Is.'],
  'Jeremías': ['Jer.'],
  'Lamentaciones': ['Lam.'],
  'Ezequiel': ['Ezeq.'],
  'Daniel': ['Dan.'],
  'Oseas': ['Os.'],
  'Joel': ['Joel'],
  'Amós': ['Amós'],
  'Abdías': ['Abd.'],
  'Jonás': ['Jon.'],
  'Miqueas': ['Miq.'],
  'Nahúm': ['Nah.'],
  'Habacuc': ['Hab.'],
  'Sofonías': ['Sof.'],
  'Ageo': ['Ageo'],
  'Zacarías': ['Zac.'],
  'Malaquías': ['Mal.'],
  'Mateo': ['Mat.'],
  'Marcos': ['Mar.'],
  'Lucas': ['Luc.'],
  'Juan': ['Juan'],
  'Hechos': ['Hech.'],
  'Romanos': ['Rom.'],
  '1 Corintios': ['1 Cor.'],
  '2 Corintios': ['2 Cor.'],
  'Gálatas': ['Gál.', 'Gal.'],
  'Efesios': ['Efes.'],
  'Filipenses': ['Filip.'],
  'Colosenses': ['Col.'],
  '1 Tesalonicenses': ['1 Tes.'],
  '2 Tesalonicenses': ['2 Tes.'],
  '1 Timoteo': ['1 Tim.'],
  '2 Timoteo': ['2 Tim.'],
  'Tito': ['Tito'],
  'Filemón': ['Filem.'],
  'Hebreos': ['Heb.'],
  'Santiago': ['Sant.'],
  '1 Pedro': ['1 Ped.'],
  '2 Pedro': ['2 Ped.'],
  '1 Juan': ['1 Juan'],
  '2 Juan': ['2 Juan'],
  '3 Juan': ['3 Juan'],
  'Judas': ['Jud.'],
  'Apocalipsis': ['Apoc.'],
};
const WEAK_OPENING_PATTERNS = [
  /^imagine\b/i,
  /^imagina\b/i,
  /^por ejemplo\b/i,
  /^así que\b/i,
  /^claro,\s/i,
  /^en una ocasión\b/i,
  /^suponga\b/i,
];
const MAIN_IDEA_TERMS = [
  'Jehová',
  'Jesús',
  'Biblia',
  'oración',
  'fe',
  'amor',
  'perdón',
  'debemos',
  'podemos',
  'necesitamos',
  'nos ayuda',
  'aprendemos',
  'es importante',
];

const QUESTION_COMMENT_SUGGESTIONS: Record<string, string> = {
  '58:1': 'Yo podría comentar: "El bautismo no es solo un requisito; es una decisión que trae bendiciones reales. Nos permite acercarnos a Jehová con una buena conciencia, recibir su aprobación y animar a otros con nuestro ejemplo. Por eso este artículo nos ayuda a ver qué cosas pueden frenar a alguien y cómo vencerlas."',
  '58:2': 'Yo podría comentar: "A veces alguien no se bautiza porque siente que no da la talla o porque teme la oposición. Pero Jehová no está esperando perfección; él valora que hagamos lo mejor que podamos. Y si enfrentamos presión, no tenemos que hacerlo solos, porque podemos pedirle valor y confiar en su ayuda."',
  '58:3': 'Yo podría comentar: "Algunos posponen el bautismo pensando que todavía les falta saber mucho. Pero si ya conocen a Jehová, lo aman y entienden las enseñanzas básicas, no deberían dejar que el miedo los detenga. El ejemplo del carcelero muestra que, cuando uno entiende la verdad, puede actuar con decisión."',
  '58:4': 'Yo podría comentar: "Otra razón es que algunos miran más lo que van a dejar que lo que van a ganar. Claro, bautizarse implica cambios, pero no significa perder; significa escoger una vida con propósito, amistad con Jehová y una esperanza segura."',
  '58:5': 'Yo podría comentar: "Jesús enseñó que el Reino es como un tesoro. Así que, al pensar en bautizarnos, no conviene enfocarnos solo en el costo, sino en el valor de lo que recibimos: la amistad con Jehová, una familia espiritual y la esperanza de vida eterna."',
  '58:6': 'Yo podría comentar: "Si notamos que nuestro corazón está dividido, no significa que no podamos progresar. Podemos pedirle a Jehová que nos ayude a tener un corazón más receptivo, uno que no solo escuche la verdad, sino que quiera obedecerla."',
  '58:7, 8': 'Yo podría comentar: "Algunos jóvenes no progresan porque reciben mucha presión o poco apoyo. Por eso es tan importante escoger buenas influencias y dejar que los recordatorios de Jehová formen nuestra manera de pensar. Un joven puede avanzar mucho si se rodea de quienes lo ayudan a amar más a Jehová."',
  '58:9': 'Yo podría comentar: "No está mal querer bautizarse con alguien cercano, pero la decisión es personal. Cada uno le dará cuentas a Jehová por su propia vida. Por eso, si alguien ya está listo, no debería posponer su dedicación solo por esperar a otra persona."',
  '58:10': 'Yo podría comentar: "Pensar: ‘más adelante cambio’ puede ser peligroso porque no sabemos cuánto tiempo tenemos. Jesús nos anima a estar preparados ahora. Si sé que debo hacer cambios para acercarme a Jehová, lo mejor es empezar sin demora."',
  '58:11': 'Yo podría comentar: "Mientras más conocemos a Jehová, más entendemos que sus normas no son una carga, sino una protección. Eso hace que queramos obedecerle con gusto y sin aplazarlo, porque confiamos en que lo que él pide siempre es para nuestro bien."',
  '58:12': 'Yo podría comentar: "La parábola de la viña me enseña que, cuando Jehová nos da la oportunidad de servirle, lo sabio es responder enseguida. No se trata de cuánto tiempo llevamos, sino de aceptar la invitación y actuar con aprecio."',
  '58:13': 'Yo podría comentar: "La esposa de Lot sabía que debía escapar, pero su corazón seguía apegado a lo que dejaba atrás. Eso me enseña que no conviene esperar hasta el último momento para cambiar, porque cuanto más apego tengamos a este mundo, más difícil será avanzar."',
  '58:14': 'Yo podría comentar: "Las profecías cumplidas no deberían asustarnos, sino despertarnos. Aunque algunas cosas no pasen cerca de nosotros, verlas cumplirse en el mundo nos recuerda que el fin está cerca y que ahora es el momento de actuar."',
  '58:15': 'Yo podría comentar: "Esperar el día de Jehová no significa vivir con miedo, sino con sentido de urgencia. Si de verdad deseamos ese día, vamos a esforzarnos por vivir limpios y mantenernos ocupados en cosas espirituales."',
  '58:16': 'Yo podría comentar: "El mejor momento para progresar es ahora. El eunuco etíope no esperó a saberlo todo ni a tener una ocasión perfecta; cuando entendió lo necesario, actuó. Ese ejemplo nos anima a no dejar para después una decisión tan importante."',
  '58:17': 'Yo podría comentar: "Si algo nos frena, Jehová no nos rechaza por eso; más bien quiere ayudarnos. Con su apoyo podemos vencer temores, presiones o dudas, y al bautizarnos ganamos algo precioso: una amistad fuerte con él y una conciencia limpia."',
  '62:1, 2': 'Yo podría comentar: "Algo importante puede convertirse en distracción cuando ocupa el lugar que debería tener lo más importante. Es como cuando uno maneja: una llamada puede ser importante, pero en ese momento mirar el camino es más importante. De la misma manera, debo cuidar que las preocupaciones, el entretenimiento o cualquier otra cosa no me quiten la atención de servir a Jehová."',
  '62:3': 'Yo podría comentar: "Este artículo nos ayudará a ver que nadie planea distraerse espiritualmente, pero puede pasar poco a poco. Por eso necesitamos identificar qué nos puede quitar el enfoque, mirar cómo actuó Jesús y aprender a seguir su ejemplo."',
  '62:4-6': 'Yo podría comentar: "Las distracciones no siempre son cosas malas. Pueden ser preocupaciones legítimas, como la salud, la familia o problemas personales. El peligro está en dejar que esas cosas ocupen tanto espacio en la mente que nos quiten la paz y nos alejen de las actividades espirituales."',
  '62:7': 'Yo podría comentar: "Jesús tuvo razones humanas para distraerse: problemas de la gente, presión política y hasta consejos mal orientados de alguien cercano. Pero no dejó que nada lo apartara de hacer la voluntad de Jehová."',
  '62:8': 'Yo podría comentar: "Jesús no se dejaba mover por lo que otros querían que hiciera. Él tenía muy claro por qué estaba en la Tierra y se concentraba en cumplir la voluntad de su Padre. Ese enfoque nos ayuda a decidir qué merece nuestra atención."',
  '62:9': 'Yo podría comentar: "Efesios 5:17 me enseña que no basta con evitar lo malo; necesito entender qué quiere Jehová en cada situación. Para lograrlo, tengo que leer su Palabra, meditar y acostumbrarme a pensar como él."',
  '62:10': 'Yo podría comentar: "Comprender la manera de pensar de Jehová requiere detenernos cuando leemos la Biblia y preguntarnos qué revela el relato sobre él. No es solo leer información; es aprender a ver las cosas como Jehová las ve."',
  '62:11': 'Yo podría comentar: "Jehová quiere que estemos preparados y que las preocupaciones no nos dominen. Por eso nos invita a confiar en él y a no cargar solos con lo que nos inquieta."',
  '62:12': 'Yo podría comentar: "Para ser felices en este mundo tan difícil, necesitamos llenar nuestra vida de actividades espirituales. Eso nos ayuda a enfocarnos en lo que sí podemos hacer y no vivir atrapados en problemas que no podemos controlar."',
  '62:13': 'Yo podría comentar: "Aprovechar bien el tiempo significa usar nuestras oportunidades para ayudar a otros y fortalecer nuestra relación con Jehová. El tiempo se puede ir muy rápido, así que conviene invertirlo en cosas que tengan valor espiritual."',
  '62:14': 'Yo podría comentar: "Mantenernos ocupados en actividades espirituales nos da equilibrio. No elimina los problemas del mundo, pero nos recuerda que Jehová está con nosotros y que su propósito sigue adelante."',
  '62:15': 'Yo podría comentar: "El buen juicio nos ayuda a decidir cuánto lugar le damos al entretenimiento, las redes o el descanso. No se trata de no disfrutar nada, sino de tener claro qué es lo más importante para no perder el equilibrio."',
  '62:16': 'Yo podría comentar: "En sus últimas horas, Jesús se concentró en orar y cumplir lo que Jehová le había encargado. Aunque estaba bajo muchísima presión, no perdió de vista lo más importante."',
  '62:17': 'Yo podría comentar: "Las redes sociales pueden usarse para distraerse un rato, pero también pueden llenar la mente de tristeza, enojo o preocupación. Por eso conviene preguntarnos si realmente nos ayudan o si nos están quitando el enfoque espiritual."',
  '62:18': 'Yo podría comentar: "El entretenimiento puede relajarnos, pero también puede consumir demasiado tiempo o influir mal en nuestra manera de pensar. El buen juicio nos ayuda a elegir lo que nos descansa sin debilitarnos espiritualmente."',
  '62:19': 'Yo podría comentar: "Descansar y tomar vacaciones es necesario, pero si eso se vuelve el centro de nuestra vida, puede robarnos tiempo y energías que necesitamos para Jehová. La clave es disfrutarlo sin perder nuestras prioridades."',
  '62:20': 'Yo podría comentar: "Luchar contra las distracciones siempre nos beneficia. Nos ayuda a vivir con más calma, a no preocuparnos de más y a invertir en lo que Jehová dice que tiene valor para el futuro."',
  '63:1, 2': 'Yo podría comentar: "La perspicacia es la capacidad de mirar más allá de lo que se ve al principio. Nos ayuda a entender mejor una situación, controlar nuestras palabras y tomar decisiones más prudentes."',
  '63:3': 'Yo podría comentar: "Naamán era un hombre importante y respetado, pero tenía un problema que no podía resolver: la lepra. Su caso muestra que, por mucha posición o capacidad que alguien tenga, necesita humildad para aceptar la ayuda de Jehová."',
  '63:4': 'Yo podría comentar: "Naamán demostró algo bueno: estuvo dispuesto a escuchar una sugerencia que venía de una niña israelita. Eso muestra que la perspicacia también incluye no menospreciar la ayuda solo porque viene de alguien humilde."',
  '63:5': 'Yo podría comentar: "Cuando Naamán llegó a Israel, esperaba tal vez una solución a su manera. Pero Jehová usó a Eliseo para darle instrucciones sencillas. El problema fue que Naamán tenía que decidir si confiaría en Jehová o en sus propias expectativas."',
  '63:6': 'Yo podría comentar: "Naamán reaccionó con orgullo porque las instrucciones no eran lo que él imaginaba. Pero sus siervos fueron perspicaces y lo ayudaron a razonar. Al final, cuando obedeció con humildad, Jehová lo curó."',
  '63:7': 'Yo podría comentar: "De Naamán aprendo que antes de reaccionar debo parar y pensar. Si una corrección o una instrucción no me gusta, puedo preguntarme si mi reacción muestra humildad o si el orgullo me está estorbando."',
  '63:8': 'Yo podría comentar: "Mantener la calma puede ser difícil cuando sentimos que nos trataron mal o que hubo una injusticia. La perspicacia nos ayuda a no reaccionar solo por emoción, sino a pensar antes de hablar o actuar."',
  '63:9': 'Yo podría comentar: "Nabal trató a David de forma muy injusta, aunque David y sus hombres habían ayudado mucho. Este relato muestra cómo una ofensa fuerte puede provocar una reacción peligrosa si uno no se detiene a pensar."',
  '63:10': 'Yo podría comentar: "Abigaíl vio el peligro y actuó con prudencia; David también fue humilde al escucharla. Gracias a la perspicacia, se evitó una tragedia. Esto me enseña que escuchar un buen consejo puede salvarnos de cometer errores graves."',
  '63:11': 'Yo podría comentar: "Cuando algo me enoja, la perspicacia me ayuda a bajar la velocidad. En vez de responder de inmediato, puedo preguntarme qué no estoy viendo y qué reacción honraría más a Jehová."',
  '63:12': 'Yo podría comentar: "Jehová puede usar a hermanos maduros para ayudarnos a ver una situación con más equilibrio. Si estoy molesto, hablar con alguien espiritual puede ayudarme a no decidir solo con el enojo."',
  '63:13': 'Yo podría comentar: "La perspicacia nos ayuda a ver que nuestros temores no son más grandes que Jehová. Aunque una situación intimide, podemos recordar que Jehová tiene poder para ayudarnos."',
  '63:14': 'Yo podría comentar: "Jonás pudo haber sentido miedo porque Nínive era una ciudad violenta y peligrosa. Humanamente, su tarea parecía intimidante, pero Jehová quería enseñarle a confiar en él."',
  '63:15': 'Yo podría comentar: "Jonás recuperó confianza al recordar el gran poder de Jehová. Si Jehová pudo salvarlo del mar y del pez, también podía protegerlo al predicar en Nínive."',
  '63:16': 'Yo podría comentar: "Cuando algo nos intimida, la perspicacia nos ayuda a no ver solo el peligro. Nos invita a recordar cómo Jehová ya nos ha ayudado y a confiar en que no estamos solos."',
  '63:17': 'Yo podría comentar: "Para ser más perspicaces necesitamos acercarnos a Jehová, meditar en su Palabra y aceptar su guía. La perspicacia no aparece sola; se cultiva escuchando a Jehová y aprendiendo de sus consejos."',
  '63:18': 'Yo podría comentar: "Estoy decidido a valorar la perspicacia como un tesoro. Si aprendo a ver las cosas como Jehová, reaccionaré mejor, tomaré mejores decisiones y haré feliz a Jehová."',
  '64:1': 'Yo podría comentar: "Jesús dijo algo que parece sorprendente: que podemos ser felices aunque la gente nos odie. No quiso decir que el odio sea agradable, sino que hay razones espirituales que nos permiten mantener la alegría."',
  '64:2, 3': 'Yo podría comentar: "Una razón por la que nos persiguen es que adoramos a Jehová. Saber eso nos ayuda a no odiar a los opositores, porque muchos están engañados por Satanás. En vez de responder con odio, pedimos que Jehová los ayude."',
  '64:4': 'Yo podría comentar: "Jesús y Esteban nos enseñan a no devolver odio con odio. Aunque fueron tratados injustamente, oraron por sus enemigos. Eso muestra que el amor cristiano puede seguir vivo incluso bajo persecución."',
  '64:5': 'Yo podría comentar: "La experiencia de César me enseña que Jehová puede responder nuestras oraciones incluso por personas que se oponen a nosotros. Por eso no vemos a los opositores como casos perdidos; deseamos que Jehová los ayude a cambiar."',
  '64:6': 'Yo podría comentar: "Otra razón por la que la gente nos odia es porque apoyamos a Jesús como Rey. Muchos no aceptan su autoridad, pero nosotros sabemos que su Reino es la única esperanza verdadera."',
  '64:7, 8': 'Yo podría comentar: "Sufrimos burlas porque no queremos vivir como el mundo de Satanás. Aunque otros no entiendan nuestras decisiones, seguir las normas de Jehová nos protege y demuestra que queremos agradarle."',
  '64:9, 10': 'Yo podría comentar: "También somos diferentes porque somos neutrales. No tomamos partido en política ni en guerras, no porque no nos importe la gente, sino porque apoyamos el Reino de Dios y seguimos el ejemplo de Jesús."',
  '64:11': 'Yo podría comentar: "La persecución fortalece nuestra fe porque confirma que la Biblia tenía razón. En vez de sorprendernos, recordamos que Jesús dijo que sus discípulos serían odiados, y eso nos convence más de que estamos en la verdad."',
  '64:12': 'Yo podría comentar: "Al hermano lo ayudó recordar la paz que Jesús prometió. Aunque la persecución no sea fácil, Jehová puede darnos una calma interior que el mundo no puede dar."',
  '64:13': 'Yo podría comentar: "Lo que nos ayuda a vencer el odio es el amor. El odio puede ser fuerte, pero el amor por Jehová, por los hermanos y hasta por los opositores nos da fuerzas para no volvernos iguales que quienes nos atacan."',
  '64:14': 'Yo podría comentar: "Pablo pudo ser leal porque amaba profundamente a Jehová y confiaba en él. Ese amor fue más fuerte que el miedo a morir, y lo ayudó a terminar fielmente su carrera."',
  '64:15': 'Yo podría comentar: "Nuestros hermanos demuestran amor cuando se apoyan unos a otros en medio de la persecución. Ese amor nos hace felices porque nos recuerda que formamos parte de una familia espiritual real."',
  '64:16': 'Yo podría comentar: "Pedro dijo que podemos ser felices si sufrimos por servir a Dios porque eso significa que tenemos su aprobación. La oposición duele, pero saber que Jehová está contento con nuestra lealtad nos da alegría."',
  '64:17': 'Yo podría comentar: "Jesús recordó a sus discípulos que quienes lo aman son amados por el Padre. Eso nos consuela mucho: aunque algunas personas nos odien, Jehová y Jesús nos aman y pronto harán justicia."',
};

export function cleanStudyText(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function ensureFinalPunctuation(text: string): string {
  if (!text) return text;
  return /[.!?¿¡]"?$/.test(text) ? text : `${text}.`;
}

function lowerCaseFirst(text: string): string {
  if (!text) return text;
  if (PROPER_STARTS.some((name) => text.startsWith(name))) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function prepareQuotedComment(text: string): string {
  return text.replace(/"/g, "'");
}

function shorten(text: string, maxLength = 260): string {
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSentence = Math.max(trimmed.lastIndexOf('.'), trimmed.lastIndexOf('?'), trimmed.lastIndexOf('!'));
  if (lastSentence > 90) return trimmed.slice(0, lastSentence + 1);

  const lastSpace = trimmed.lastIndexOf(' ');
  return `${trimmed.slice(0, lastSpace > 90 ? lastSpace : maxLength).trim()}...`;
}

export function getAnswerSentences(answer?: Answer): string[] {
  if (!answer) return [];

  if (Array.isArray(answer)) {
    return answer.map(cleanStudyText).filter(Boolean);
  }

  return (String(answer).match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [])
    .map(cleanStudyText)
    .filter(Boolean);
}

function scoreAnswerSentence(sentence: string, index: number): number {
  const normalized = cleanStudyText(sentence);
  let score = index * 0.4;

  if (normalized.length >= 45) score += 1;
  if (normalized.length > 190) score -= 1;
  if (WEAK_OPENING_PATTERNS.some((pattern) => pattern.test(normalized))) score -= 5;

  MAIN_IDEA_TERMS.forEach((term) => {
    if (normalized.toLowerCase().includes(term.toLowerCase())) score += 1;
  });

  return score;
}

function selectBestAnswerSentence(sentences: string[]): string {
  return sentences
    .map((sentence, index) => ({ sentence, score: scoreAnswerSentence(sentence, index) }))
    .sort((a, b) => b.score - a.score)[0]?.sentence ?? '';
}

function extractBibleIdea(text: string): string {
  const cleanText = cleanStudyText(text)
    .replace(/^["'”]+/, '')
    .replace(/["'”]+$/, '')
    .replace(/^por lo tanto,\s*/i, '')
    .replace(/^porque\s+/i, '');

  const candidates = cleanText
    .split(/[.;]/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 24);

  return shorten(ensureFinalPunctuation(candidates[0] || cleanText), 170);
}

function stripBibleReferences(text: string): string {
  return text
    .replace(/\((?:lea\s+)?[^)]*\d+:\d+[^)]*\)/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function removeFinalPunctuation(text: string): string {
  return text.replace(/[.!?¿¡]+$/g, '').trim();
}

function normalizeBibleIdeaForComment(text: string): string {
  const idea = removeFinalPunctuation(extractBibleIdea(text))
    .replace(/^pero debes saber que\s+/i, '')
    .replace(/^debes saber que\s+/i, '')
    .replace(/^por lo tanto,\s*/i, '')
    .replace(/^porque\s+/i, '');

  return lowerCaseFirst(idea);
}

function formatBibleInsight(idea: string): string {
  if (!idea) return 'el texto contiene una idea importante para entender el párrafo';

  if (/últimos días|tiempos críticos|profetiz|predijo|predicho/i.test(idea)) {
    return `la Biblia ya había dicho que ${idea}`;
  }

  if (/^(manténganse|vigílense|busquen|sigan|pongan|recuerden|no\s|deben\s|debemos\s|tenemos\s)/i.test(idea)) {
    return `este texto nos ayuda a recordar que ${idea}`;
  }

  return `este texto muestra que ${idea}`;
}

function getReferenceNeedles(reference: string): string[] {
  const normalizedReference = cleanStudyText(reference);
  const match = normalizedReference.match(/^(.+?)\s+(\d+)(?::|\b)/);
  if (!match) return [normalizedReference];

  const [, book, chapter] = match;
  const abbreviations = SCRIPTURE_BOOK_ABBREVIATIONS[book] ?? [];

  return Array.from(new Set([
    `${book} ${chapter}`,
    `${book} ${chapter}:`,
    ...abbreviations.flatMap((abbreviation) => [
      `${abbreviation} ${chapter}`,
      `${abbreviation} ${chapter}:`,
    ]),
  ]));
}

function findParagraphForReference(
  reference: string,
  paragraphs: BiblicalCommentContext['paragraphs'] = [],
) {
  const needles = getReferenceNeedles(reference).map((needle) => needle.toLowerCase());

  return paragraphs.find((paragraph) => {
    const content = cleanStudyText(paragraph.content).toLowerCase();
    return needles.some((needle) => content.includes(needle));
  });
}

function extractParagraphContext(
  card: BiblicalCommentSource,
  context?: BiblicalCommentContext,
): string {
  const paragraph = findParagraphForReference(card.reference, context?.paragraphs);
  const paragraphSource = paragraph?.summary || paragraph?.content;
  const questionSource = context?.questionText;
  const purpose = cleanStudyText(card.purpose);

  const source = paragraphSource || questionSource || purpose;
  const cleaned = stripBibleReferences(cleanStudyText(source))
    .replace(/^texto citado para apoyar la respuesta a la pregunta:\s*/i, '')
    .replace(/^qué\s+/i, 'lo que ')
    .replace(/^cómo\s+/i, 'la manera en que ')
    .replace(/^por qué\s+/i, 'por qué ');

  return removeFinalPunctuation(shorten(cleaned, 165));
}

function buildContextSentence(contextIdea: string): string {
  if (!contextIdea) {
    return 'Ese detalle ayuda a explicar la idea del párrafo con más claridad.';
  }

  return `El párrafo lo usa para explicar que ${lowerCaseFirst(contextIdea)}.`;
}

function buildBiblicalApplicationSentence(contextIdea: string): string {
  const normalizedContext = contextIdea.toLowerCase();

  if (/preocup|distracc|enfoque|mente|consum/.test(normalizedContext)) {
    return 'Así puedo comentar que esas presiones son reales, pero no tienen que dominar mi mente ni quitarme el enfoque espiritual.';
  }

  if (/persecuc|odio|enemig|opositor/.test(normalizedContext)) {
    return 'Así puedo comentar que la oposición no nos toma por sorpresa y que Jehová puede ayudarnos a seguir siendo leales.';
  }

  if (/oraci|orar|ruego|pedir/.test(normalizedContext)) {
    return 'Así puedo comentar que el texto no es solo una idea bonita, sino una invitación a hablar con Jehová y confiar en él.';
  }

  return 'Así puedo explicar el versículo conectándolo directamente con la idea del párrafo, no solo leyéndolo como una cita de apoyo.';
}

export function buildQuestionComment(question: QuestionCommentInput, articleNumber?: number): string | null {
  if (question.commentSuggestion) {
    return cleanStudyText(question.commentSuggestion);
  }

  const customComment = articleNumber ? QUESTION_COMMENT_SUGGESTIONS[`${articleNumber}:${question.number}`] : undefined;
  if (customComment) {
    return customComment;
  }

  const answerSentences = getAnswerSentences(question.answer);
  const source = answerSentences.length > 0
    ? selectBestAnswerSentence(answerSentences)
    : cleanStudyText(question.keyPoint ?? '');

  if (!source) return null;

  return `Yo podría comentar: "${prepareQuotedComment(shorten(ensureFinalPunctuation(source)))}"`;
}

export function buildBiblicalComment(card: BiblicalCommentSource, context?: BiblicalCommentContext): BiblicalComment {
  if (card.commentSuggestion) {
    return {
      reference: card.reference,
      comment: cleanStudyText(card.commentSuggestion),
    };
  }

  const cleanedPurpose = cleanStudyText(card.purpose);
  const bibleInsight = formatBibleInsight(normalizeBibleIdeaForComment(card.text));
  const contextIdea = extractParagraphContext(card, context);
  const contextSentence = buildContextSentence(contextIdea);

  if (GENERIC_PURPOSE_PATTERN.test(cleanedPurpose)) {
    return {
      reference: card.reference,
      comment: `Yo podría comentar: "Con ${card.reference} destacaría que ${prepareQuotedComment(bibleInsight)}. ${contextSentence} ${buildBiblicalApplicationSentence(contextIdea)}"`,
    };
  }

  return {
    reference: card.reference,
    comment: `Yo podría comentar: "Con ${card.reference} podría explicar que ${prepareQuotedComment(bibleInsight)}. ${contextSentence} ${buildBiblicalApplicationSentence(contextIdea)}"`,
  };
}

export function buildBiblicalComments(cards?: BiblicalCommentSource[], context?: BiblicalCommentContext): BiblicalComment[] {
  return (cards ?? []).map((card) => buildBiblicalComment(card, context));
}
