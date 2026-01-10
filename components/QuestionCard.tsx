'use client';

import { useState, useEffect } from 'react';
import { Question, Paragraph } from '@/types/atalaya';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';

interface QuestionCardProps {
  question: Question;
  paragraphs: Paragraph[];
  lsmText?: string;
  sectionLsmText?: string;
  onLSMUpdate?: (questionNumber: string, text: string) => void;
  isNavigationMode?: boolean; // Nueva prop para saber si estamos en modo navegación
  favorites: Record<string, boolean>; // Estado de favoritos
  onToggleFavorite: (favoriteId: string) => void; // Callback para marcar/desmarcar favorito
  allLsmData: Record<string, string>; // Todos los datos LSM (incluye flashcards)
  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
  articleId: string; // ID del artículo actual
}

// Textos bíblicos para el modal LEE (NWT 2019)
const biblicalTexts: Record<string, { reference: string; text: string }[]> = {
  "LEE Salmo 31:7; 136:1": [
    { reference: "Salmo 31:7", text: "Estaré muy feliz y me alegraré por tu amor leal, porque has visto mi sufrimiento; estás al tanto de mi profunda angustia." },
    { reference: "Salmo 136:1", text: "Denle gracias a Jehová porque él es bueno; su amor leal dura para siempre." }
  ],
  "LEE Juan 16:26, 27": [
    { reference: "Juan 16:26, 27", text: "Ese día le pedirán al Padre en mi nombre. No les digo que yo le rogaré al Padre por ustedes, porque el Padre mismo los quiere, ya que ustedes me han querido a mí y han creído que vine como representante del Padre." }
  ],
  "LEE Romanos 5:8": [
    { reference: "Romanos 5:8", text: "Pero Dios nos recomienda su propio amor de esta manera: en que, siendo nosotros todavía pecadores, Cristo murió por nosotros." }
  ],
  "LEE 2 Samuel 22:26": [
    { reference: "2 Samuel 22:26", text: "Con alguien leal, tú actúas con lealtad; con el hombre intachable, tú te portas de manera intachable." }
  ],
  "LEE Salmo 119:145": [
    { reference: "Salmo 119:145", text: "Con todo mi corazón clamo. Respóndeme, oh, Jehová. Tus disposiciones quiero obedecer." },
    { reference: "Salmo 119:146", text: "Clamo a ti. ¡Sálvame! Y obedeceré tus recordatorios." }
  ],
  "LEE 1 Samuel 1:10, 11": [
    { reference: "1 Samuel 1:10", text: "Ana estaba muy angustiada, y empezó a orar a Jehová llorando amargamente." },
    { reference: "1 Samuel 1:11", text: "Entonces hizo este voto: «Oh, Jehová de los ejércitos, si te fijas en el sufrimiento de tu sierva y te acuerdas de mí, si no te olvidas de tu sierva y le das un hijo varón, se lo daré a Jehová por todos los días de su vida, y la navaja nunca tocará su cabeza»." }
  ],
  "LEE Jeremías 12:1": [
    { reference: "Jeremías 12:1", text: "Tú siempre eres justo, oh, Jehová, cuando me quejo ante ti. Sin embargo, quiero hablarte de cuestiones de justicia. ¿Por qué les va bien a los malos? ¿Por qué viven tranquilos todos los que actúan con traición?" }
  ],
  "LEE Salmo 42:1-4": [
    { reference: "Salmo 42:1", text: "Como el ciervo que brama por los riachuelos de agua, así brama mi alma por ti, oh, Dios." },
    { reference: "Salmo 42:2", text: "Mi alma tiene sed de Dios, del Dios vivo. ¿Cuándo iré a presentarme delante de Dios?" },
    { reference: "Salmo 42:3", text: "Mis lágrimas son mi alimento de día y de noche, mientras me dicen todo el día: «¿Dónde está tu Dios?»." },
    { reference: "Salmo 42:4", text: "Recuerdo estas cosas y derramo mi alma dentro de mí, porque yo iba con la multitud, caminaba lentamente con ellos hacia la casa de Dios, entre el ruido de los que se alegraban y daban gracias, una multitud que celebraba una fiesta." }
  ],
  "LEE Jonás 2:1, 2": [
    { reference: "Jonás 2:1", text: "Entonces Jonás oró a Jehová su Dios desde el vientre del pez." },
    { reference: "Jonás 2:2", text: "Dijo: «Desde mi angustia llamé a Jehová, y él me respondió. Desde las profundidades de la Tumba pedí ayuda. Tú oíste mi voz»." }
  ],
  "LEE Romanos 8:26, 27": [
    { reference: "Romanos 8:26", text: "Así mismo, el espíritu también nos ayuda cuando estamos débiles; porque no sabemos pedir en oración lo que necesitamos, pero el espíritu mismo ruega por nosotros con gemidos que no se pueden expresar con palabras." },
    { reference: "Romanos 8:27", text: "Sin embargo, el que examina los corazones sabe cuál es la intención del espíritu, porque este ruega de acuerdo con Dios a favor de los santos." }
  ],
  // Artículo 43: "No nos olvidemos de orar por otros"
  "LEE Santiago 5:16": [
    { reference: "Santiago 5:16", text: "Por eso, confiésense unos a otros sus pecados y oren unos por otros para que se curen. El ruego del hombre justo tiene un efecto poderoso." }
  ],
  "LEE 1 Pedro 3:8": [
    { reference: "1 Pedro 3:8", text: "En conclusión, todos ustedes tengan la misma actitud mental, tengan empatía, cariño fraternal, tierna compasión y humildad." }
  ],
  "LEE Filipenses 2:3, 4": [
    { reference: "Filipenses 2:3", text: "No hagan nada por espíritu de rivalidad ni por presunción, sino que con humildad consideren a los demás como superiores a ustedes." },
    { reference: "Filipenses 2:4", text: "No busquen solo sus propios intereses, sino también los de los demás." }
  ],
  "LEE Mateo 6:8": [
    { reference: "Mateo 6:8", text: "No sean como ellos, porque su Padre sabe lo que ustedes necesitan incluso antes de que se lo pidan." }
  ],
  // Artículo 44: "Cómo mantener la alegría en la vejez"
  "LEE Salmo 92:12-14": [
    { reference: "Salmo 92:12", text: "El justo florecerá como la palmera, crecerá como el cedro del Líbano." },
    { reference: "Salmo 92:13", text: "Plantados en la casa de Jehová, florecerán en los patios de nuestro Dios." },
    { reference: "Salmo 92:14", text: "En su vejez seguirán prosperando; estarán llenos de vitalidad y frescura." }
  ],
  "LEE Proverbios 15:15": [
    { reference: "Proverbios 15:15", text: "Todos los días del afligido son malos, pero el que tiene un corazón alegre disfruta de un banquete continuo." }
  ],
  "LEE Isaías 46:4": [
    { reference: "Isaías 46:4", text: "Hasta su vejez yo seré el mismo, y hasta que tengan canas los seguiré cargando. Yo los he hecho, yo los llevaré, sí, yo los cargaré y los salvaré." }
  ],
  "LEE 2 Corintios 4:16-18": [
    { reference: "2 Corintios 4:16", text: "Por eso no nos damos por vencidos. Aunque nuestro hombre exterior se está desgastando, nuestro hombre interior va renovándose día a día." },
    { reference: "2 Corintios 4:17", text: "Porque, aunque la tribulación es momentánea y leve, produce en nosotros una gloria que es de un peso cada vez más extraordinario y es eterna." },
    { reference: "2 Corintios 4:18", text: "Por eso no nos concentramos en las cosas que se ven, sino en las que no se ven, porque las cosas que se ven son temporales, pero las que no se ven son eternas." }
  ],
  // Artículo 45: "Cómo mantener la alegría al cuidar de un ser querido"
  "LEE Proverbios 19:17": [
    { reference: "Proverbios 19:17", text: "El que le muestra favor al de condición humilde le presta a Jehová, y Él le pagará lo que haya hecho." }
  ],
  "LEE Proverbios 19:11": [
    { reference: "Proverbios 19:11", text: "La perspicacia del hombre ciertamente retarda su cólera, y es hermosura de su parte pasar por alto la transgresión." }
  ],
  "LEE Salmo 132:4, 5": [
    { reference: "Salmo 132:4", text: "No permitiré que mis ojos se duerman ni que mis párpados se cierren." },
    { reference: "Salmo 132:5", text: "Hasta que encuentre un lugar para Jehová, una magnífica morada para el Poderoso de Jacob." }
  ],
  "LEE Proverbios 17:22": [
    { reference: "Proverbios 17:22", text: "Un corazón alegre es buena medicina, pero el espíritu deprimido seca los huesos." }
  ],
  // Artículo 46: "Jesús es un Sumo Sacerdote compasivo"
  "LEE Hebreos 5:7-9": [
    { reference: "Hebreos 5:7", text: "Durante sus días en la carne, Cristo ofreció ruegos y también súplicas al que podía salvarlo de la muerte, con fuertes clamores y lágrimas. Y fue escuchado favorablemente por su temor piadoso." },
    { reference: "Hebreos 5:8", text: "Aunque era Hijo, aprendió la obediencia por las cosas que sufrió." },
    { reference: "Hebreos 5:9", text: "Y después de haber sido perfeccionado, vino a ser responsable de la salvación eterna de todos los que le obedecen." }
  ],
  "LEE Isaías 42:3": [
    { reference: "Isaías 42:3", text: "No romperá la caña que está quebrada ni apagará la mecha que apenas arde. Con fidelidad hará que la justicia se conozca." }
  ],
  "LEE Hebreos 4:15, 16": [
    { reference: "Hebreos 4:15", text: "Porque no tenemos a un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino a uno que ha sido probado en todo sentido igual que nosotros, pero sin pecado." },
    { reference: "Hebreos 4:16", text: "Así que acerquémonos con franqueza al trono de la bondad inmerecida para recibir misericordia y hallar bondad inmerecida que nos ayude justo en el momento en que necesitemos ayuda." }
  ],
  "LEE Hechos 2:5-7, 33": [
    { reference: "Hechos 2:5", text: "Había judíos de todas las naciones bajo el cielo viviendo en Jerusalén, hombres que eran devotos." },
    { reference: "Hechos 2:6", text: "Cuando se oyó este sonido, se juntó una multitud, y estaban desconcertados porque cada uno los oía hablar en su propio idioma." },
    { reference: "Hechos 2:7", text: "Estaban totalmente asombrados y decían: '¿No son galileos todos estos que están hablando?'." },
    { reference: "Hechos 2:33", text: "Así que, como fue ensalzado a la derecha de Dios y recibió del Padre el espíritu santo prometido, ha derramado esto que ustedes ven y oyen." }
  ],
  // Artículo 47: "Tú eres muy valioso"
  "LEE Marcos 5:34": [
    { reference: "Marcos 5:34", text: "Él le dijo: 'Hija, tu fe te ha sanado. Vete en paz y queda sana de tu terrible enfermedad'." }
  ],
  "LEE 1 Samuel 16:7": [
    { reference: "1 Samuel 16:7", text: "Pero Jehová le dijo a Samuel: 'No te fijes en su apariencia ni en lo alto de su estatura, porque lo he rechazado. Porque Dios no ve como ve el hombre, pues el hombre ve lo que aparece ante sus ojos, pero Jehová ve lo que hay en el corazón'." }
  ],
  "LEE Daniel 9:23": [
    { reference: "Daniel 9:23", text: "Al comienzo de tus súplicas, se dio una orden, y he venido a informarte, porque tú eres muy valioso. Así que presta atención al mensaje y entiende la visión." }
  ],
  "LEE Salmo 5:12": [
    { reference: "Salmo 5:12", text: "Porque tú bendices al justo, oh Jehová; con tu favor lo rodeas como con un gran escudo." }
  ],
  // Artículo 48: "Cómo nos ayuda el libro de Job cuando estamos sufriendo"
  "LEE Job 1:20-22; 2:9, 10": [
    { reference: "Job 1:20", text: "Entonces Job se levantó, se rasgó la ropa y se rapó la cabeza. Luego se postró en el suelo y adoró." },
    { reference: "Job 1:21", text: "Dijo: 'Desnudo salí del vientre de mi madre y desnudo volveré. Jehová dio y Jehová quitó. Que el nombre de Jehová siga siendo bendecido'." },
    { reference: "Job 1:22", text: "En todo esto, Job no pecó ni acusó a Dios de haber hecho algo malo." },
    { reference: "Job 2:9", text: "Entonces su esposa le dijo: '¿Todavía te mantienes fiel? ¡Maldice a Dios y muérete!'." },
    { reference: "Job 2:10", text: "Pero él le contestó: 'Hablas como una mujer insensata. Si aceptamos las cosas buenas de Dios, ¿no deberíamos aceptar también las malas?'. En todo esto, Job no pecó con sus labios." }
  ],
  "LEE Hebreos 10:36": [
    { reference: "Hebreos 10:36", text: "Porque necesitan tener aguante para que, después de haber hecho la voluntad de Dios, reciban lo que se les ha prometido." }
  ],
  "LEE Job 34:12": [
    { reference: "Job 34:12", text: "Está claro que Dios no actúa con maldad; el Todopoderoso no pervierte la justicia." }
  ],
  // Artículo 49: "Cómo nos ayuda el libro de Job a dar buenos consejos"
  "LEE Proverbios 27:9": [
    { reference: "Proverbios 27:9", text: "El aceite y el incienso alegran el corazón; lo mismo hace la dulzura de un amigo con su consejo sincero." }
  ],
  "LEE Job 33:6, 7": [
    { reference: "Job 33:6", text: "Mira, ante el Dios verdadero yo soy igual que tú; yo también fui formado de un pedazo de arcilla." },
    { reference: "Job 33:7", text: "Por eso no tienes que temerme ni sentirte abrumado por mi presencia." }
  ],
  "LEE Job 33:1": [
    { reference: "Job 33:1", text: "Sin embargo, Job, por favor, escucha lo que digo; presta atención a todas mis palabras." }
  ],
  // Artículo 50: "Imitemos la humildad de Jehová"
  "LEE Salmo 62:8": [
    { reference: "Salmo 62:8", text: "Confíen en él en todo momento, pueblo mío. Derramen su corazón delante de él. Dios es un refugio para nosotros." }
  ],
  "LEE Marcos 3:1-6": [
    { reference: "Marcos 3:1", text: "De nuevo entró en una sinagoga, y había allí un hombre que tenía una mano seca." },
    { reference: "Marcos 3:2", text: "Y ellos lo vigilaban de cerca para ver si lo curaría en sábado, con el fin de acusarlo." },
    { reference: "Marcos 3:3", text: "Él le dijo al hombre de la mano seca: 'Levántate y ponte en el medio'." },
    { reference: "Marcos 3:4", text: "Entonces les preguntó: '¿Qué está permitido hacer en sábado? ¿Una cosa buena o una cosa mala? ¿Salvar una vida o matar?'. Pero ellos se quedaron callados." },
    { reference: "Marcos 3:5", text: "Después de mirarlos con indignación, profundamente entristecido por la insensibilidad de sus corazones, le dijo al hombre: 'Extiende la mano'. El hombre la extendió y la mano le quedó sana." },
    { reference: "Marcos 3:6", text: "Al instante, los fariseos salieron y se pusieron a conspirar con los partidarios de Herodes para matarlo." }
  ],
  "LEE 2 Pedro 3:9": [
    { reference: "2 Pedro 3:9", text: "Jehová no es lento en cuanto a su promesa, como algunos piensan; más bien, él tiene paciencia con ustedes porque no quiere que nadie sea destruido, sino que quiere que todos alcancen el arrepentimiento." }
  ],
  "LEE Salmo 138:6": [
    { reference: "Salmo 138:6", text: "Aunque Jehová está en las alturas, se fija en el humilde, pero al arrogante solo lo conoce de lejos." }
  ],
  // Artículo 51: "Cómo planear una boda que honre a Jehová"
  "LEE Romanos 13:1, 2": [
    { reference: "Romanos 13:1", text: "Toda persona debe someterse a las autoridades superiores, porque no hay autoridad que no venga de Dios; las autoridades que existen han sido puestas por Dios en sus posiciones relativas." },
    { reference: "Romanos 13:2", text: "Por lo tanto, el que se opone a la autoridad se opone a lo que Dios ha establecido; los que se oponen recibirán juicio sobre sí mismos." }
  ],
  "LEE Romanos 13:13": [
    { reference: "Romanos 13:13", text: "Comportémonos con decencia, como de día: nada de comilonas ni borracheras, nada de relaciones sexuales ilícitas ni de conducta descarada, nada de peleas ni de envidias." }
  ],
  "LEE 1 Juan 2:15-17": [
    { reference: "1 Juan 2:15", text: "No amen al mundo ni las cosas que hay en el mundo. Si alguien ama al mundo, no tiene el amor del Padre." },
    { reference: "1 Juan 2:16", text: "Porque todo lo que hay en el mundo —los malos deseos de la carne, los malos deseos de los ojos y la ostentación de los medios de vida— no viene del Padre, sino que viene del mundo." },
    { reference: "1 Juan 2:17", text: "Además, el mundo va pasando, y también sus malos deseos, pero el que hace la voluntad de Dios permanece para siempre." }
  ],
  "LEE 1 Corintios 14:40": [
    { reference: "1 Corintios 14:40", text: "Pero que todo se haga de manera apropiada y con orden." }
  ]
};

export default function QuestionCard({ question, paragraphs, lsmText, sectionLsmText, onLSMUpdate, isNavigationMode = false, favorites, onToggleFavorite, allLsmData, hiddenCards, onToggleHidden, articleId }: QuestionCardProps) {
  const [showParagraphsModal, setShowParagraphsModal] = useState(false);
  const [showInfographicModal, setShowInfographicModal] = useState(false);
  const [showReadTextModal, setShowReadTextModal] = useState(false);
  const [paragraphCopied, setParagraphCopied] = useState(false);
  const [infographicCopied, setInfographicCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isNavigationMode); // Expandido por defecto en modo navegación
  const [showFlashcards, setShowFlashcards] = useState(isNavigationMode); // Flashcards visibles en navegación
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || question.textLSM || '');
  const [isEditingSectionLSM, setIsEditingSectionLSM] = useState(false);
  const [editedSectionLSM, setEditedSectionLSM] = useState(sectionLsmText || question.sectionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingSection, setIsSavingSection] = useState(false);

  // Estado para editar puntos clave
  const [editingBulletIndex, setEditingBulletIndex] = useState<number | null>(null);
  const [editedBulletText, setEditedBulletText] = useState('');
  const [customBullets, setCustomBullets] = useState<string[]>([]);
  const [isAddingBullet, setIsAddingBullet] = useState(false);
  const [newBulletText, setNewBulletText] = useState('');
  const [isSavingBullets, setIsSavingBullets] = useState(false);
  // Estado para marcar bullets como respuesta directa o entrelazados
  const [bulletTypes, setBulletTypes] = useState<Record<number, 'direct' | 'interlaced'>>({});

  // Estado para preguntas de reflexión
  const [editingReflectionIndex, setEditingReflectionIndex] = useState<number | null>(null);
  const [editedReflectionText, setEditedReflectionText] = useState('');
  const [customReflections, setCustomReflections] = useState<string[]>([]);
  const [isAddingReflection, setIsAddingReflection] = useState(false);
  const [newReflectionText, setNewReflectionText] = useState('');
  const [isSavingReflections, setIsSavingReflections] = useState(false);

  // Estado para aplicaciones prácticas
  const [editingApplicationIndex, setEditingApplicationIndex] = useState<number | null>(null);
  const [editedApplicationText, setEditedApplicationText] = useState('');
  const [customApplications, setCustomApplications] = useState<string[]>([]);
  const [isAddingApplication, setIsAddingApplication] = useState(false);
  const [newApplicationText, setNewApplicationText] = useState('');
  const [isSavingApplications, setIsSavingApplications] = useState(false);

  // Estado para flashcards personalizadas
  const [customFlashcards, setCustomFlashcards] = useState<Array<{ question: string; answer: string; isCustom?: boolean }>>([]);


  // Estado para puntos clave completados
  const [completedBullets, setCompletedBullets] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`completed-bullets-${articleId}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Guardar puntos clave completados en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`completed-bullets-${articleId}`, JSON.stringify(completedBullets));
    }
  }, [completedBullets, articleId]);

  // Función para marcar/desmarcar un punto clave como completado
  const toggleBulletCompleted = (bulletId: string) => {
    setCompletedBullets(prev => ({
      ...prev,
      [bulletId]: !prev[bulletId]
    }));
  };

  // Cargar puntos clave personalizados desde Vercel KV
  useEffect(() => {
    const loadCustomBullets = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=bullets-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          if (data.lsmText !== undefined && data.lsmText !== null) {
            // Si hay bullets personalizados guardados (incluso si es array vacío), usarlos
            setCustomBullets(JSON.parse(data.lsmText));
          } else {
            // Solo usar los originales si nunca se ha guardado nada
            setCustomBullets(question.answerBullets ?
              (Array.isArray(question.answerBullets) ? question.answerBullets : question.answerBullets.split('\n').filter(b => b.trim()))
              : []
            );
          }
        }
      } catch (error) {
        console.error('Error loading custom bullets:', error);
        // En caso de error, usar los originales
        setCustomBullets(question.answerBullets ?
          (Array.isArray(question.answerBullets) ? question.answerBullets : question.answerBullets.split('\n').filter(b => b.trim()))
          : []
        );
      }
    };
    loadCustomBullets();
  }, [articleId, question.number, question.answerBullets]);

  // Cargar tipos de bullets (directo/entrelazado) desde Vercel KV
  useEffect(() => {
    const loadBulletTypes = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=bullet-types-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          if (data.lsmText !== undefined && data.lsmText !== null && data.lsmText !== '') {
            setBulletTypes(JSON.parse(data.lsmText));
          }
        }
      } catch (error) {
        console.error('Error loading bullet types:', error);
      }
    };
    loadBulletTypes();
  }, [articleId, question.number]);



  // Cargar preguntas de reflexión personalizadas desde Vercel KV
  useEffect(() => {
    const loadCustomReflections = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=reflections-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          // Check if lsmText exists and is not empty string
          if (data.lsmText !== undefined && data.lsmText !== null && data.lsmText !== '') {
            const parsed = JSON.parse(data.lsmText);
            setCustomReflections(parsed);
          } else {
            // Solo usar originales si nunca se ha guardado nada
            setCustomReflections(question.reflectionQuestions || []);
          }
        }
      } catch (error) {
        console.error('Error loading custom reflections:', error);
        setCustomReflections(question.reflectionQuestions || []);
      }
    };
    loadCustomReflections();
  }, [articleId, question.number, question.reflectionQuestions]);

  // Cargar aplicaciones prácticas personalizadas desde Vercel KV
  useEffect(() => {
    const loadCustomApplications = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=applications-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          // Check if lsmText exists and is not empty string
          if (data.lsmText !== undefined && data.lsmText !== null && data.lsmText !== '') {
            const parsed = JSON.parse(data.lsmText);
            setCustomApplications(parsed);
          } else {
            // Solo usar originales si nunca se ha guardado nada
            setCustomApplications(question.practicalApplications || []);
          }
        }
      } catch (error) {
        console.error('Error loading custom applications:', error);
        setCustomApplications(question.practicalApplications || []);
      }
    };
    loadCustomApplications();
  }, [articleId, question.number, question.practicalApplications]);

  // Cargar flashcards personalizadas desde Vercel KV
  useEffect(() => {
    const loadCustomFlashcards = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=flashcards-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          if (data.lsmText !== undefined && data.lsmText !== null) {
            // Si hay datos guardados (incluso si es array vacío), usarlos
            setCustomFlashcards(JSON.parse(data.lsmText));
          } else {
            // Solo usar originales si nunca se ha guardado nada
            const originalFlashcards = question.flashcards || [];
            // Normalizar al formato de objetos
            const normalized = Array.isArray(originalFlashcards) && typeof originalFlashcards[0] === 'string'
              ? (originalFlashcards as string[]).map((q: string) => ({ question: q, answer: '' }))
              : originalFlashcards as Array<{ question: string; answer: string }>;
            setCustomFlashcards(normalized);
          }
        }
      } catch (error) {
        console.error('Error loading custom flashcards:', error);
        const originalFlashcards = question.flashcards || [];
        const normalized = Array.isArray(originalFlashcards) && typeof originalFlashcards[0] === 'string'
          ? (originalFlashcards as string[]).map((q: string) => ({ question: q, answer: '' }))
          : originalFlashcards as Array<{ question: string; answer: string }>;
        setCustomFlashcards(normalized);
      }
    };
    loadCustomFlashcards();
  }, [articleId, question.number, question.flashcards]);

  // Sincronizar estados cuando cambia la pregunta o el modo de navegación
  useEffect(() => {
    setEditedLSM(lsmText || question.textLSM || '');
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsExpanded(isNavigationMode);
    setShowFlashcards(isNavigationMode);
  }, [question.number, lsmText, sectionLsmText, isNavigationMode, question.textLSM, question.sectionLSM]);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showParagraphsModal) {
        setShowParagraphsModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showParagraphsModal]);

  // Bloquear scroll del body cuando el modal de infografía está abierto
  useEffect(() => {
    if (showInfographicModal) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showInfographicModal]);

  // Obtener los párrafos relacionados con esta pregunta
  const relatedParagraphs = paragraphs.filter(p =>
    question.paragraphs.includes(p.number)
  );

  // Función para formatear el contenido con textos bíblicos
  const formatContent = (text: string) => {
    // Buscar patrones de referencias bíblicas entre paréntesis
    const parts = text.split(/(\([^)]+\))/g);

    return parts.map((part, index) => {
      // Si es una referencia bíblica (está entre paréntesis)
      if (part.startsWith('(') && part.endsWith(')')) {
        return (
          <span key={index} className="text-slate-700 font-medium">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Función para formatear texto LSM con líneas divisorias
  const formatLSMText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
      <div key={index}>
        <p className="text-lg font-semibold text-slate-900 leading-relaxed uppercase mb-0">
          {line}
        </p>
        {index < lines.length - 1 && (
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-3"></div>
        )}
      </div>
    ));
  };

  // Función para formatear texto LSM de secciones con líneas divisorias
  const formatSectionLSMText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold tracking-wide uppercase mb-0">
          {line}
        </h3>
        {index < lines.length - 1 && (
          <div className="w-24 h-px bg-white/40 mx-auto my-2"></div>
        )}
      </div>
    ));
  };

  const handleSaveLSM = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: question.number,
          lsmText: editedLSM
        })
      });

      if (response.ok) {
        setIsEditingLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(question.number, editedLSM);
        }
      } else {
        const responseData = await response.json();
        alert('Error al guardar: ' + (responseData.error || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error saving LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedLSM(lsmText || question.textLSM || '');
    setIsEditingLSM(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Si presiona Enter sin Shift, guardar
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Evitar salto de línea
      handleSaveLSM();
    }
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
    // Shift+Enter permite salto de línea normal
  };

  // Guardar al perder foco (clic fuera)
  const handleBlurLSM = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // Verificar que el nuevo elemento con foco no sea un botón dentro del mismo contenedor
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (relatedTarget.tagName === 'BUTTON')) {
      return; // No guardar si se hizo clic en un botón (Guardar o Cancelar)
    }
    // Guardar automáticamente
    if (!isSaving) {
      handleSaveLSM();
    }
  };

  const handleSaveSectionLSM = async () => {
    setIsSavingSection(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `section-${question.number}`,
          lsmText: editedSectionLSM
        })
      });

      if (response.ok) {
        setIsEditingSectionLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(`section-${question.number}`, editedSectionLSM);
        }
      } else {
        const responseData = await response.json();
        alert('Error al guardar: ' + (responseData.error || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error saving section LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSavingSection(false);
    }
  };

  const handleCancelSectionEdit = () => {
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsEditingSectionLSM(false);
  };

  const handleSectionKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveSectionLSM();
    }
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelSectionEdit();
    }
  };

  // Guardar sección al perder foco (clic fuera)
  const handleBlurSectionLSM = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (relatedTarget.tagName === 'BUTTON')) {
      return;
    }
    if (!isSavingSection) {
      handleSaveSectionLSM();
    }
  };

  // Funciones para editar puntos clave
  const saveBulletsToKV = async (bullets: string[]) => {
    setIsSavingBullets(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `bullets-${question.number}`,
          lsmText: JSON.stringify(bullets)
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar');
      }
      return true;
    } catch (error) {
      console.error('Error saving bullets:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    } finally {
      setIsSavingBullets(false);
    }
  };

  const saveBulletTypesToKV = async (types: Record<number, 'direct' | 'interlaced'>) => {
    try {
      await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `bullet-types-${question.number}`,
          lsmText: JSON.stringify(types)
        })
      });
    } catch (error) {
      console.error('Error saving bullet types:', error);
    }
  };

  const toggleDirectType = async (index: number) => {
    // Función para marcar/desmarcar como respuesta directa
    let newTypesResult: Record<number, 'direct' | 'interlaced'> = {};

    setBulletTypes(prevTypes => {
      const currentType = prevTypes[index];
      let newType: 'direct' | 'interlaced' | undefined;

      // Si es directa, desmarcar. Si no es directa, marcar como directa
      if (currentType === 'direct') {
        newType = undefined;
      } else {
        newType = 'direct';
      }

      const newTypes = { ...prevTypes };
      if (newType === undefined) {
        delete newTypes[index];
      } else {
        newTypes[index] = newType;
      }

      newTypesResult = newTypes;
      return newTypes;
    });

    // Guardar después de actualizar el estado
    await saveBulletTypesToKV(newTypesResult);
  };

  const toggleInterlacedType = async (index: number) => {
    // Función para marcar/desmarcar como entrelazado
    let newTypesResult: Record<number, 'direct' | 'interlaced'> = {};

    setBulletTypes(prevTypes => {
      const currentType = prevTypes[index];
      let newType: 'direct' | 'interlaced' | undefined;

      // Si es entrelazado, desmarcar. Si no es entrelazado, marcar como entrelazado
      if (currentType === 'interlaced') {
        newType = undefined;
      } else {
        newType = 'interlaced';
      }

      const newTypes = { ...prevTypes };
      if (newType === undefined) {
        delete newTypes[index];
      } else {
        newTypes[index] = newType;
      }

      newTypesResult = newTypes;
      return newTypes;
    });

    // Guardar después de actualizar el estado
    await saveBulletTypesToKV(newTypesResult);
  };

  const handleStartEditBullet = (index: number, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingBulletIndex(index);
    setEditedBulletText(text);
  };

  const handleSaveBullet = async () => {
    if (editingBulletIndex === null) return;

    const newBullets = [...customBullets];
    newBullets[editingBulletIndex] = editedBulletText.trim();

    const success = await saveBulletsToKV(newBullets);
    if (success) {
      setCustomBullets(newBullets);
      setEditingBulletIndex(null);
      setEditedBulletText('');
    }
  };

  const handleCancelEditBullet = () => {
    setEditingBulletIndex(null);
    setEditedBulletText('');
  };

  const handleDeleteBullet = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar este punto clave?')) return;

    const newBullets = customBullets.filter((_, i) => i !== index);
    const success = await saveBulletsToKV(newBullets);
    if (success) {
      setCustomBullets(newBullets);

      // Reajustar los índices de bulletTypes
      const newTypes: Record<number, 'direct' | 'interlaced'> = {};
      Object.keys(bulletTypes).forEach(key => {
        const oldIndex = parseInt(key);
        if (oldIndex < index) {
          // Los índices menores al eliminado se mantienen igual
          newTypes[oldIndex] = bulletTypes[oldIndex];
        } else if (oldIndex > index) {
          // Los índices mayores al eliminado se mueven una posición hacia atrás
          newTypes[oldIndex - 1] = bulletTypes[oldIndex];
        }
        // El índice eliminado simplemente no se copia
      });

      setBulletTypes(newTypes);
      await saveBulletTypesToKV(newTypes);
    }
  };

  const handleAddBullet = async () => {
    if (!newBulletText.trim()) return;

    const newBullets = [...customBullets, newBulletText.trim()];
    const success = await saveBulletsToKV(newBullets);
    if (success) {
      setCustomBullets(newBullets);
      setNewBulletText('');
      setIsAddingBullet(false);
    }
  };

  const handleBulletKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editingBulletIndex !== null) {
        handleSaveBullet();
      } else if (isAddingBullet) {
        handleAddBullet();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (editingBulletIndex !== null) {
        handleCancelEditBullet();
      } else if (isAddingBullet) {
        setIsAddingBullet(false);
        setNewBulletText('');
      }
    }
  };

  // Funciones para manejar preguntas de reflexión
  const saveReflectionsToKV = async (reflections: string[]) => {
    setIsSavingReflections(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `reflections-${question.number}`,
          lsmText: JSON.stringify(reflections)
        })
      });
      if (!response.ok) throw new Error('Error al guardar');
      return true;
    } catch (error) {
      console.error('Error saving reflections:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    } finally {
      setIsSavingReflections(false);
    }
  };

  const handleStartEditReflection = (index: number, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingReflectionIndex(index);
    setEditedReflectionText(text);
  };

  const handleSaveReflection = async () => {
    if (editingReflectionIndex === null) return;
    const newReflections = [...customReflections];
    newReflections[editingReflectionIndex] = editedReflectionText.trim();
    const success = await saveReflectionsToKV(newReflections);
    if (success) {
      setCustomReflections(newReflections);
      setEditingReflectionIndex(null);
      setEditedReflectionText('');
    }
  };

  const handleCancelEditReflection = () => {
    setEditingReflectionIndex(null);
    setEditedReflectionText('');
  };

  const handleDeleteReflection = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar esta pregunta de reflexión?')) return;
    const newReflections = customReflections.filter((_, i) => i !== index);
    const success = await saveReflectionsToKV(newReflections);
    if (success) setCustomReflections(newReflections);
  };

  const handleAddReflection = async () => {
    if (!newReflectionText.trim()) return;
    const newReflections = [...customReflections, newReflectionText.trim()];
    const success = await saveReflectionsToKV(newReflections);
    if (success) {
      setCustomReflections(newReflections);
      setNewReflectionText('');
      setIsAddingReflection(false);
    }
  };

  const handleReflectionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editingReflectionIndex !== null) {
        handleSaveReflection();
      } else if (isAddingReflection) {
        handleAddReflection();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (editingReflectionIndex !== null) {
        handleCancelEditReflection();
      } else if (isAddingReflection) {
        setIsAddingReflection(false);
        setNewReflectionText('');
      }
    }
  };

  // Funciones para manejar aplicaciones prácticas
  const saveApplicationsToKV = async (applications: string[]) => {
    setIsSavingApplications(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `applications-${question.number}`,
          lsmText: JSON.stringify(applications)
        })
      });
      if (!response.ok) throw new Error('Error al guardar');
      return true;
    } catch (error) {
      console.error('Error saving applications:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    } finally {
      setIsSavingApplications(false);
    }
  };

  const handleStartEditApplication = (index: number, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingApplicationIndex(index);
    setEditedApplicationText(text);
  };

  const handleSaveApplication = async () => {
    if (editingApplicationIndex === null) return;
    const newApplications = [...customApplications];
    newApplications[editingApplicationIndex] = editedApplicationText.trim();
    const success = await saveApplicationsToKV(newApplications);
    if (success) {
      setCustomApplications(newApplications);
      setEditingApplicationIndex(null);
      setEditedApplicationText('');
    }
  };

  const handleCancelEditApplication = () => {
    setEditingApplicationIndex(null);
    setEditedApplicationText('');
  };

  const handleDeleteApplication = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar esta aplicación práctica?')) return;
    const newApplications = customApplications.filter((_, i) => i !== index);
    const success = await saveApplicationsToKV(newApplications);
    if (success) setCustomApplications(newApplications);
  };

  const handleAddApplication = async () => {
    if (!newApplicationText.trim()) return;
    const newApplications = [...customApplications, newApplicationText.trim()];
    const success = await saveApplicationsToKV(newApplications);
    if (success) {
      setCustomApplications(newApplications);
      setNewApplicationText('');
      setIsAddingApplication(false);
    }
  };

  const handleApplicationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editingApplicationIndex !== null) {
        handleSaveApplication();
      } else if (isAddingApplication) {
        handleAddApplication();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (editingApplicationIndex !== null) {
        handleCancelEditApplication();
      } else if (isAddingApplication) {
        setIsAddingApplication(false);
        setNewApplicationText('');
      }
    }
  };

  // Funciones para manejar flashcards
  const saveFlashcardsToKV = async (flashcards: Array<{ question: string; answer: string; isCustom?: boolean }>) => {
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `flashcards-${question.number}`,
          lsmText: JSON.stringify(flashcards)
        })
      });
      if (!response.ok) throw new Error('Error al guardar');
      return true;
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    }
  };

  const handleDeleteFlashcard = async (index: number) => {
    const newFlashcards = customFlashcards.filter((_, i) => i !== index);
    const success = await saveFlashcardsToKV(newFlashcards);
    if (success) {
      setCustomFlashcards(newFlashcards);
    }
  };

  const handleAddFlashcard = async (card: { question: string; answer: string; isCustom?: boolean }) => {
    const newCard = { question: card.question, answer: card.answer, isCustom: true };
    const newFlashcards = [...customFlashcards, newCard];
    const success = await saveFlashcardsToKV(newFlashcards);
    if (success) {
      setCustomFlashcards(newFlashcards);
    }
  };

  const handleEditFlashcard = async (index: number, card: { question: string; answer: string; isCustom?: boolean }) => {
    const newFlashcards = [...customFlashcards];
    newFlashcards[index] = { question: card.question, answer: card.answer, isCustom: customFlashcards[index].isCustom };
    const success = await saveFlashcardsToKV(newFlashcards);
    if (success) {
      setCustomFlashcards(newFlashcards);
    }
  };

  const currentLSMText = lsmText || question.textLSM;
  const currentSectionLSMText = sectionLsmText || question.sectionLSM;

  // RENDERIZADO PREMIUM/EJECUTIVO (Artículo 43 en adelante)
  const articleNum = parseInt(articleId.split('-').pop() || '0');
  const isPremiumDesign = articleNum >= 43;

  if (isPremiumDesign) {
    return (
      <>
        {/* Modals (Mismos que el diseño original) */}
        {showParagraphsModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-slate-200">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span>📖</span> Párrafos de Estudio
                </h3>
                <button
                  onClick={() => setShowParagraphsModal(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar bg-white">
                <div className="space-y-6">
                  {relatedParagraphs.map((paragraph, index) => (
                    <div key={index} className="leading-relaxed text-slate-700 text-lg">
                      <span className="font-bold text-slate-900 mr-2">[{paragraph.number}]</span>
                      {formatContent(paragraph.content)}
                      {/* Imagen del párrafo (si existe) - Diseño Premium */}
                      {paragraph.image && (
                        <div className="mt-4">
                          <img
                            src={paragraph.image}
                            alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                            className="w-full rounded-xl shadow-lg border border-slate-200"
                          />
                          {paragraph.imageCaption && (
                            <p className="text-sm text-slate-600 italic mt-3 text-center bg-slate-50 p-3 rounded-lg">
                              {paragraph.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button
                  onClick={() => {
                    const text = relatedParagraphs.map(p => `[${p.number}] ${p.content}`).join('\n\n');
                    navigator.clipboard.writeText(text);
                    setParagraphCopied(true);
                    setTimeout(() => setParagraphCopied(false), 2000);
                  }}
                  className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center gap-2 shadow-sm"
                >
                  {paragraphCopied ? '✅ Copiado' : '📋 Copiar'}
                </button>
                <button
                  onClick={() => setShowParagraphsModal(false)}
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium shadow-sm"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Helper para renderizar modales de textos bíblicos */}
        {showReadTextModal && question.readText && biblicalTexts[question.readText] && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-slate-200">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span>📖</span> Lectura Bíblica
                </h3>
                <button
                  onClick={() => setShowReadTextModal(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar bg-white">
                <div className="space-y-6">
                  {biblicalTexts[question.readText].map((text, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-5 border-l-4 border-slate-600">
                      <h4 className="font-bold text-slate-800 mb-2 font-serif">{text.reference}</h4>
                      <p className="text-slate-700 italic leading-relaxed font-serif text-lg">
                        &quot;{text.text}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button
                  onClick={() => setShowReadTextModal(false)}
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Subtítulo de Sección - Diseño Ejecutivo */}
        {question.section && (
          <div className="mb-8 mt-12">
            {/* Contenedor del subtítulo */}
            <div className="relative">
              {/* Líneas decorativas laterales */}
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
              </div>

              {/* Subtítulo centrado */}
              <div className="relative flex justify-center">
                <div className="bg-slate-800 px-8 py-4 rounded-lg shadow-lg">
                  <h2 className="text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]">
                    {question.section}
                  </h2>
                </div>
              </div>
            </div>

            {/* Sección LSM del subtítulo */}
            <div className="mt-4 flex justify-center">
              {isEditingSectionLSM ? (
                <div className="w-full max-w-xl bg-white p-4 rounded-lg border border-blue-200 shadow-md animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🤟</span>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Editando LSM</span>
                  </div>
                  <textarea
                    value={editedSectionLSM}
                    onChange={(e) => setEditedSectionLSM(e.target.value)}
                    onKeyDown={handleSectionKeyDown}
                    className="w-full p-3 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg resize-none uppercase"
                    rows={2}
                    placeholder="Escribe el subtítulo en LSM..."
                    autoFocus
                  />
                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      onClick={handleSaveSectionLSM}
                      disabled={isSavingSection}
                      className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium"
                    >
                      {isSavingSection ? 'Guardando...' : '💾 Guardar'}
                    </button>
                    <button
                      onClick={handleCancelSectionEdit}
                      className="text-sm text-slate-500 px-4 py-2 hover:text-slate-700"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setIsEditingSectionLSM(true)}
                  className="group/section cursor-pointer px-6 py-3 rounded-lg border border-transparent hover:bg-slate-50 hover:border-slate-200 transition-all max-w-xl w-full"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg">🤟</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover/section:text-blue-600">LSM</span>
                    <span className="opacity-0 group-hover/section:opacity-100 text-blue-500 text-xs transition-opacity">✏️</span>
                  </div>
                  <p className="text-slate-600 font-medium text-lg text-center uppercase">
                    {currentSectionLSMText || <span className="text-slate-400 italic font-normal text-sm normal-case">Toca para agregar traducción LSM...</span>}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* DISEÑO PREMIUM */}
        <div id={`question-${question.number}`} className="mb-12 scroll-mt-24 transform transition-all duration-500 ease-out">

          {/* Tarjeta Principal */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">

            {/* Barra lateral decorativa */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-slate-400"></div>

            {/* Cabecera de la Pregunta */}
            <div className="p-8 pb-4">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                  Pregunta {question.number}
                </span>
                <div className="flex items-center gap-2">
                  {/* Botón Infografía */}
                  {question.infographic && (
                    <button
                      onClick={() => setShowInfographicModal(true)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors text-xs font-bold uppercase tracking-wide border border-blue-200"
                      title="Ver infografía"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Infografía</span>
                    </button>
                  )}
                  {/* Botón Párrafos (Diseño Minimalista) */}
                  <button
                    onClick={() => setShowParagraphsModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors text-xs font-bold uppercase tracking-wide border border-slate-200"
                  >
                    <span>Párrafos</span>
                    <span className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                      {question.paragraphs.join(', ')}
                    </span>
                  </button>
                </div>
              </div>

              {/* Texto de la Pregunta */}
              <h2 className="text-2xl md:text-3xl font-serif text-slate-800 leading-tight mb-2">
                {question.textEs}
              </h2>

              {/* Lectura Bíblica (Si existe) */}
              {question.readText && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowReadTextModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-transform active:scale-95 shadow-md group/btn"
                  >
                    <span className="text-lg">📖</span>
                    <span className="font-medium tracking-wide">{question.readText}</span>
                    <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity ml-1">→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Sección Intermedia: LSM y Herramientas */}
            <div className="px-8 py-4 bg-slate-50 border-y border-slate-100 flex flex-wrap items-center gap-4">

              {/* Botón LSM */}
              <div className="flex-1 min-w-[200px]">
                {isEditingLSM ? (
                  <div className="bg-white p-2 rounded-lg border border-blue-200 shadow-sm animate-fadeIn">
                    <textarea
                      value={editedLSM}
                      onChange={(e) => setEditedLSM(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onBlur={handleBlurLSM}
                      className="w-full p-2 text-slate-700 border-none focus:ring-0 text-sm resize-none"
                      rows={2}
                      placeholder="Escribe la traducción LSM..."
                      autoFocus
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button onMouseDown={handleSaveLSM} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Guardar</button>
                      <button onMouseDown={handleCancelEdit} className="text-xs text-slate-500 px-2 py-1">Cancelar</button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsEditingLSM(true)}
                    className="group/lsm cursor-pointer p-3 rounded-lg border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🤟</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover/lsm:text-blue-600">LSM</span>
                    </div>
                    <p className="text-slate-700 font-medium text-lg leading-snug min-h-[1.5rem] uppercase">
                      {lsmText || question.textLSM || <span className="text-slate-400 italic font-normal text-sm">Agregar traducción...</span>}
                    </p>
                  </div>
                )}
              </div>

              {/* Botones de Acción */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm border ${isExpanded
                    ? 'bg-white border-slate-300 text-slate-700'
                    : 'bg-slate-800 border-slate-800 text-white hover:bg-slate-900'
                    }`}
                >
                  {isExpanded ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>
              </div>
            </div>

            {/* IMAGEN ILUSTRATIVA - Si existe (Diseño Premium) */}
            {question.image && (
              <div className="px-8 py-6 bg-white">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={question.image}
                    alt={question.imageCaption || "Ilustración de la pregunta"}
                    className="w-full h-auto object-cover"
                  />
                  {question.imageCaption && (
                    <p className="text-sm text-slate-600 italic p-4 bg-slate-50 text-center border-t border-slate-100">
                      {question.imageCaption}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Contenido Expandible (Respuesta y Tarjetas) */}
            {isExpanded && (
              <div className="animate-slideDown">

                {/* Sección de Respuesta */}
                <div className="p-8 bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-lg shadow-sm border border-amber-200">
                        💡
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">

                      {/* Respuesta Principal Mejorada con numeración */}
                      <div className="prose prose-slate max-w-none">
                        {question.answer && (
                          Array.isArray(question.answer)
                            ? question.answer.map((paragraph, idx) => (
                              <p key={idx} className="text-lg text-slate-700 leading-relaxed mb-4">
                                <span className="text-slate-400 font-medium">[{idx + 1}]</span> {paragraph}
                              </p>
                            ))
                            : typeof question.answer === 'string'
                              ? question.answer.split('.').filter(s => s.trim().length > 0).map((sentence, idx) => (
                                <p key={idx} className="text-lg text-slate-700 leading-relaxed mb-4 block">
                                  <span className="text-slate-400 font-medium">[{idx + 1}]</span> {sentence.trim()}.
                                </p>
                              ))
                              : <p className="text-lg text-slate-700 leading-relaxed">{String(question.answer)}</p>
                        )}
                      </div>

                      {/* Puntos Clave */}
                      {(question.answerBullets || customBullets.length > 0) && (
                        <div className="mt-6 space-y-3">
                          {(customBullets.length > 0 ? customBullets : question.answerBullets as string[]).map((bullet, idx) => (
                            <div key={idx} className="flex gap-3 group/bullet">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 group-hover/bullet:bg-blue-500 transition-colors"></div>
                              <p className="text-slate-600 group-hover/bullet:text-slate-800 transition-colors">{bullet}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Línea divisoria elegante */}
                <div className="px-8 py-4 bg-white">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50" />
                    <span className="text-amber-400 text-sm">✦</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50" />
                  </div>
                </div>

                {/* Grid de Tarjetas (Fondo sutil) */}
                <div className="bg-slate-50 p-8">
                  <div className="grid md:grid-cols-2 gap-6">

                    {/* Tarjetas Didácticas */}
                    {(question.flashcards || customFlashcards.length > 0) && (
                      <div className="space-y-4">

                        <FlashCards
                          cards={customFlashcards}
                          questionNumber={question.number}
                          lsmData={allLsmData}
                          onLSMUpdate={onLSMUpdate || (() => { })}
                          hiddenCards={hiddenCards}
                          onToggleHidden={onToggleHidden}
                          articleId={articleId}
                          onAddCard={handleAddFlashcard}
                          onEditCard={handleEditFlashcard}
                          onDeleteCard={handleDeleteFlashcard}
                        />
                      </div>
                    )}

                    {/* Textos Bíblicos */}
                    {question.biblicalCards && (
                      <div className="space-y-4">

                        <BiblicalCards
                          cards={question.biblicalCards}
                          questionNumber={question.number}
                          hiddenCards={hiddenCards}
                          onToggleHidden={onToggleHidden}
                        />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* Modal de infografía para diseño premium */}
        {showInfographicModal && question.infographic && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            onClick={() => setShowInfographicModal(false)}
          >
            {/* Header compacto */}
            <div className="flex-shrink-0 h-12 bg-slate-800 px-4 flex items-center justify-between">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                Infografía - Pregunta {question.number}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    const textToCopy = `Infografía - Pregunta ${question.number}\n\n${question.textEs}\n\nURL: ${question.infographic}`;
                    await navigator.clipboard.writeText(textToCopy);
                    setInfographicCopied(true);
                    setTimeout(() => setInfographicCopied(false), 2000);
                  }}
                  className={`p-2 rounded-lg ${infographicCopied ? 'bg-green-500' : 'bg-white/20 hover:bg-white/30'} transition-all`}
                  title={infographicCopied ? '¡Copiado!' : 'Copiar enlace'}
                >
                  {infographicCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setShowInfographicModal(false)}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* BOTÓN GRANDE DE CERRAR - Fácil de tocar en móvil/tablet */}
            <div className="flex-shrink-0 px-4 py-2 bg-black">
              <button
                onClick={() => setShowInfographicModal(false)}
                className="w-full py-4 bg-red-600 hover:bg-red-500 active:bg-red-700
                           text-white font-semibold text-lg rounded-xl
                           flex items-center justify-center gap-3
                           transition-all duration-150
                           shadow-lg hover:shadow-xl
                           touch-manipulation
                           min-h-[56px]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>CERRAR INFOGRAFÍA</span>
              </button>
            </div>

            {/* Contenedor de imagen */}
            <div
              className="flex-1 overflow-hidden flex items-center justify-center p-2 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={question.infographic}
                alt={`Infografía para la pregunta ${question.number}`}
                className="max-w-full object-contain"
                style={{ maxHeight: 'calc(100vh - 140px)' }}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {/* Subtítulo de sección (si existe) */}
      {question.section && (
        <div className="mb-6 mt-8">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-6 py-6 rounded-lg shadow-lg group relative">
            {/* Subtítulo en español */}
            <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-4">
              {question.section}
            </h2>

            {/* Línea divisoria decorativa */}
            <div className="w-20 h-1 bg-white/30 mx-auto mb-4"></div>

            {/* Subtítulo en LSM - Modo visualización */}
            {!isEditingSectionLSM && currentSectionLSMText ? (
              <>
                <div className="text-center">
                  <p className="text-sm mb-3 font-semibold opacity-80">🤟 LSM</p>
                  <div>
                    {formatSectionLSMText(currentSectionLSMText)}
                  </div>
                </div>
                <button
                  onClick={() => setIsEditingSectionLSM(true)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg hover:bg-slate-50 font-medium shadow-sm"
                >
                  ✏️ Editar LSM
                </button>
              </>
            ) : !isEditingSectionLSM ? (
              <button
                onClick={() => setIsEditingSectionLSM(true)}
                className="w-full py-2 bg-white/10 border-2 border-dashed border-white/30 rounded-lg hover:bg-white/20 transition-colors text-white font-semibold text-sm"
              >
                ➕ Agregar subtítulo en LSM
              </button>
            ) : null}
          </div>

          {/* Modo edición LSM - Fuera del banner principal */}
          {isEditingSectionLSM && (
            <div className="mt-3 p-4 bg-indigo-50 rounded-lg border-2 border-indigo-400 shadow-sm">
              <p className="text-sm text-indigo-700 mb-2 font-semibold">✍️ Editar Subtítulo LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
              <textarea
                value={editedSectionLSM}
                onChange={(e) => setEditedSectionLSM(e.target.value)}
                onKeyDown={handleSectionKeyDown}
                onBlur={handleBlurSectionLSM}
                className="w-full p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
                rows={3}
                placeholder="Escribe el subtítulo en LSM..."
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleSaveSectionLSM}
                  disabled={isSavingSection}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
                >
                  {isSavingSection ? 'Guardando...' : '💾 Guardar'}
                </button>
                <button
                  onClick={handleCancelSectionEdit}
                  disabled={isSavingSection}
                  className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors font-medium"
                >
                  ✖️ Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* OPCIÓN 2: Tarjetas Compactas */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
        {/* Número flotante */}
        <div
          className={`flex items-start gap-4 p-6 ${!isNavigationMode ? 'cursor-pointer' : ''}`}
          onClick={() => {
            if (!isNavigationMode) {
              setIsExpanded(!isExpanded);
            }
          }}
        >
          <div className="flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowParagraphsModal(true);
              }}
              className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-md hover:from-slate-700 hover:to-slate-800 transition-all cursor-pointer"
              title="Ver párrafos"
            >
              <span className="text-white font-semibold text-lg">{question.number}</span>
            </button>
          </div>

          {/* Contenido lado a lado */}
          <div className="flex-1 space-y-4">
            {/* Español - SIEMPRE VISIBLE */}
            <div className="bg-slate-50 rounded-lg p-4 border-l-2 border-slate-300 group relative">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-xs font-medium text-slate-500">Español</div>
                {question.infographic && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInfographicModal(true);
                    }}
                    className="w-7 h-7 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                    title="Ver infografía"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="text-base text-slate-800 leading-relaxed">
                {question.textEs}
              </p>
              {question.readText && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowReadTextModal(true);
                    }}
                    className="text-sm font-bold text-blue-700 uppercase hover:text-blue-900 hover:underline cursor-pointer transition-colors"
                  >
                    📖 {question.readText}
                  </button>
                </div>
              )}
            </div>

            {/* LSM - SIEMPRE VISIBLE */}
            <div className="bg-indigo-50 rounded-lg p-4 border-l-2 border-indigo-400 group relative">
              {!isEditingLSM && currentLSMText ? (
                <>
                  <div className="text-xs font-semibold text-indigo-700 mb-3">🤟 LSM</div>
                  <div>
                    {formatLSMText(currentLSMText)}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingLSM(true);
                    }}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 font-medium shadow-sm"
                  >
                    ✏️ Editar
                  </button>
                </>
              ) : !isEditingLSM ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingLSM(true);
                  }}
                  className="w-full py-2 bg-indigo-50 border-2 border-dashed border-indigo-300 rounded-lg hover:bg-indigo-100 transition-colors text-indigo-600 font-medium text-sm"
                >
                  ➕ Agregar pregunta en LSM
                </button>
              ) : null}
            </div>

            {/* Modo edición LSM */}
            {isEditingLSM && (
              <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-400 shadow-sm" onClick={(e) => e.stopPropagation()}>
                <p className="text-sm text-indigo-700 mb-2 font-semibold">✍️ Editar LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
                <textarea
                  value={editedLSM}
                  onChange={(e) => setEditedLSM(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={handleBlurLSM}
                  className="w-full p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
                  rows={4}
                  placeholder="Escribe la pregunta en LSM..."
                  autoFocus
                />
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleSaveLSM}
                    disabled={isSaving}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
                  >
                    {isSaving ? 'Guardando...' : '💾 Guardar'}
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    disabled={isSaving}
                    className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors font-medium"
                  >
                    ✖️ Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* IMAGEN ILUSTRATIVA - Si existe */}
            {question.image && (
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={question.image}
                  alt="Ilustración de la pregunta"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* IMÁGENES DE LOS PÁRRAFOS RELACIONADOS */}
            {relatedParagraphs.filter(p => p.image).length > 0 && (
              <div className="space-y-4">
                {relatedParagraphs
                  .filter(p => p.image)
                  .map((paragraph) => (
                    <div key={paragraph.number} className="rounded-lg overflow-hidden shadow-md bg-slate-50 p-4">
                      <img
                        src={paragraph.image}
                        alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      {paragraph.imageCaption && (
                        <p className="text-sm text-slate-600 italic mt-3 text-center">
                          {paragraph.imageCaption}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* RESPUESTA - Colapsable solo en modo scroll */}
            {!isNavigationMode && (
              <div
                className="cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="text-sm text-slate-600 flex items-center gap-2 mb-2">
                  <span>{isExpanded ? '▼' : '▶'}</span>
                  <span className="font-medium">
                    {isExpanded ? 'Ocultar respuesta' : 'Ver respuesta'}
                  </span>
                </div>
              </div>
            )}

            {/* Contenido de la respuesta */}
            {(isExpanded || isNavigationMode) && (question.answer || question.answerBullets) && (
              <div className="bg-emerald-50 rounded-lg p-4 border-l-2 border-emerald-500">
                <div className="text-xs font-semibold text-emerald-700 mb-3">💡 Respuesta</div>

                {/* Respuesta en oraciones clave */}
                {question.answer && (
                  Array.isArray(question.answer) ? (
                    question.answer.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {question.answer.map((sentence, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-100"
                          >
                            <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {i + 1}
                            </span>
                            <p className="text-slate-800 leading-relaxed">
                              {sentence}
                            </p>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <p className="text-base text-slate-800 leading-relaxed mb-4">
                      {question.answer}
                    </p>
                  )
                )}

              </div>
            )}

            {/* Tarjetas Didácticas - Después de las respuestas */}
            {(isExpanded || isNavigationMode) && (customFlashcards.length > 0 || (question.flashcards && question.flashcards.length > 0)) && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar tarjetas siempre (sin botón) */}
                <FlashCards
                  cards={customFlashcards}
                  questionNumber={question.number}
                  lsmData={allLsmData}
                  onLSMUpdate={onLSMUpdate || (() => { })}
                  hiddenCards={hiddenCards}
                  onToggleHidden={onToggleHidden}
                  articleId={articleId}
                  onAddCard={handleAddFlashcard}
                  onEditCard={handleEditFlashcard}
                  onDeleteCard={handleDeleteFlashcard}
                />
              </div>
            )}

            {/* Tarjetas de Textos Bíblicos - Después de las flashcards */}
            {(isExpanded || isNavigationMode) && question.biblicalCards && question.biblicalCards.length > 0 && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar tarjetas bíblicas siempre (sin botón) */}
                <BiblicalCards
                  cards={question.biblicalCards}
                  questionNumber={question.number}
                  hiddenCards={hiddenCards}
                  onToggleHidden={onToggleHidden}
                />
              </div>
            )}

            {/* Preguntas de Reflexión Personal */}
            {(isExpanded || isNavigationMode) && (customReflections.length > 0 || isAddingReflection) && (
              <div className="mt-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-purple-700">💭 Preguntas de Reflexión Personal</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAddingReflection(true);
                    }}
                    className="px-2 py-1 bg-purple-200 hover:bg-purple-300 text-purple-700 text-xs rounded font-medium transition-colors"
                  >
                    ➕ Agregar
                  </button>
                </div>
                <div className="space-y-2">
                  {customReflections.map((reflection, idx) => {
                    const isEditingThis = editingReflectionIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`
                          border rounded-lg p-3 bg-white transition-all group relative
                          ${isEditingThis ? 'ring-2 ring-purple-500' : 'border-purple-200 hover:border-purple-300'}
                        `}
                      >
                        {!isEditingThis ? (
                          <>
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={(e) => handleStartEditReflection(idx, reflection, e)}
                                className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center text-xs"
                                title="Editar"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={(e) => handleDeleteReflection(idx, e)}
                                className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center text-xs"
                                title="Eliminar"
                              >
                                🗑️
                              </button>
                            </div>
                            <p className="text-sm text-purple-900 leading-relaxed font-medium pr-16">{reflection}</p>
                          </>
                        ) : (
                          <div>
                            <input
                              type="text"
                              value={editedReflectionText}
                              onChange={(e) => setEditedReflectionText(e.target.value)}
                              onKeyDown={handleReflectionKeyDown}
                              className="w-full p-2 border-2 border-purple-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="Editar pregunta de reflexión..."
                              autoFocus
                            />
                            <div className="flex gap-1 mt-2">
                              <button
                                onClick={handleSaveReflection}
                                disabled={isSavingReflections}
                                className="flex-1 px-2 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 disabled:bg-slate-400 font-medium"
                              >
                                {isSavingReflections ? '...' : '💾'}
                              </button>
                              <button
                                onClick={handleCancelEditReflection}
                                disabled={isSavingReflections}
                                className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                              >
                                ✖️
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {isAddingReflection && (
                    <div className="border-2 border-dashed border-purple-400 rounded-lg p-3 bg-white">
                      <input
                        type="text"
                        value={newReflectionText}
                        onChange={(e) => setNewReflectionText(e.target.value)}
                        onKeyDown={handleReflectionKeyDown}
                        className="w-full p-2 border-2 border-purple-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Nueva pregunta de reflexión..."
                        autoFocus
                      />
                      <div className="flex gap-1 mt-2">
                        <button
                          onClick={handleAddReflection}
                          disabled={isSavingReflections}
                          className="flex-1 px-2 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 disabled:bg-slate-400 font-medium"
                        >
                          {isSavingReflections ? '...' : '✅ Agregar'}
                        </button>
                        <button
                          onClick={() => {
                            setIsAddingReflection(false);
                            setNewReflectionText('');
                          }}
                          disabled={isSavingReflections}
                          className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                        >
                          ✖️
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Aplicaciones Prácticas */}
            {(isExpanded || isNavigationMode) && (customApplications.length > 0 || isAddingApplication) && (
              <div className="mt-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-blue-700">💡 Aplicaciones Prácticas</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAddingApplication(true);
                    }}
                    className="px-2 py-1 bg-blue-200 hover:bg-blue-300 text-blue-700 text-xs rounded font-medium transition-colors"
                  >
                    ➕ Agregar
                  </button>
                </div>
                <div className="space-y-2">
                  {customApplications.map((application, idx) => {
                    const isEditingThis = editingApplicationIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`
                          border rounded-lg p-3 bg-white transition-all group relative
                          ${isEditingThis ? 'ring-2 ring-blue-500' : 'border-blue-200 hover:border-blue-300'}
                        `}
                      >
                        {!isEditingThis ? (
                          <>
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={(e) => handleStartEditApplication(idx, application, e)}
                                className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center text-xs"
                                title="Editar"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={(e) => handleDeleteApplication(idx, e)}
                                className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center text-xs"
                                title="Eliminar"
                              >
                                🗑️
                              </button>
                            </div>
                            <p className="text-sm text-blue-900 leading-relaxed font-medium pr-16">{application}</p>
                          </>
                        ) : (
                          <div>
                            <input
                              type="text"
                              value={editedApplicationText}
                              onChange={(e) => setEditedApplicationText(e.target.value)}
                              onKeyDown={handleApplicationKeyDown}
                              className="w-full p-2 border-2 border-blue-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Editar aplicación práctica..."
                              autoFocus
                            />
                            <div className="flex gap-1 mt-2">
                              <button
                                onClick={handleSaveApplication}
                                disabled={isSavingApplications}
                                className="flex-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:bg-slate-400 font-medium"
                              >
                                {isSavingApplications ? '...' : '💾'}
                              </button>
                              <button
                                onClick={handleCancelEditApplication}
                                disabled={isSavingApplications}
                                className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                              >
                                ✖️
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {isAddingApplication && (
                    <div className="border-2 border-dashed border-blue-400 rounded-lg p-3 bg-white">
                      <input
                        type="text"
                        value={newApplicationText}
                        onChange={(e) => setNewApplicationText(e.target.value)}
                        onKeyDown={handleApplicationKeyDown}
                        className="w-full p-2 border-2 border-blue-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nueva aplicación práctica..."
                        autoFocus
                      />
                      <div className="flex gap-1 mt-2">
                        <button
                          onClick={handleAddApplication}
                          disabled={isSavingApplications}
                          className="flex-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:bg-slate-400 font-medium"
                        >
                          {isSavingApplications ? '...' : '✅ Agregar'}
                        </button>
                        <button
                          onClick={() => {
                            setIsAddingApplication(false);
                            setNewApplicationText('');
                          }}
                          disabled={isSavingApplications}
                          className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                        >
                          ✖️
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de párrafos */}
      {showParagraphsModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={() => setShowParagraphsModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-t-xl flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Párrafo{relatedParagraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    const paragraphsText = relatedParagraphs.map(p =>
                      `Párrafo ${p.number}\n${p.content}`
                    ).join('\n\n');
                    const fullText = `Pregunta ${question.number}\n${question.textEs}\n\n${paragraphsText}`;

                    await navigator.clipboard.writeText(fullText);
                    setParagraphCopied(true);
                    setTimeout(() => setParagraphCopied(false), 2000);
                  }}
                  className={`w-10 h-10 ${paragraphCopied ? 'bg-green-500 border-green-400' : 'bg-white/20 hover:bg-white/30 border-white/40'} rounded-lg flex items-center justify-center transition-all border shadow-sm`}
                  title={paragraphCopied ? '¡Copiado!' : 'Copiar contenido'}
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}
                >
                  {paragraphCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setShowParagraphsModal(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 border border-white/40 rounded-lg flex items-center justify-center transition-all shadow-sm"
                  title="Cerrar"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}
                >
                  <span className="text-2xl font-bold text-white">×</span>
                </button>
              </div>
            </div>

            {/* Contenido de los párrafos */}
            <div className="p-6 space-y-6">
              {/* Sección de RESUMEN - Al inicio del modal */}
              {relatedParagraphs.some(p => p.summary) && (
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
                    Resumen
                  </h4>
                  <div className="space-y-2">
                    {relatedParagraphs
                      .filter(p => p.summary)
                      .map((p, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-base font-bold text-blue-600 min-w-[24px]">{p.number}</span>
                          <span className="text-base text-gray-700 leading-relaxed">{p.summary}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )}

              {relatedParagraphs.map((paragraph) => (
                <div key={paragraph.number} className="bg-slate-50 rounded-lg p-5 border-l-2 border-indigo-400">
                  {/* Número de párrafo */}
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-base w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                      {paragraph.number}
                    </span>
                    {/* Contenido del párrafo */}
                    <div className="flex-1">
                      <p className="text-base leading-relaxed text-slate-700">
                        {formatContent(paragraph.content)}
                      </p>
                      {/* Imagen del párrafo (si existe) */}
                      {paragraph.image && (
                        <div className="mt-4">
                          <img
                            src={paragraph.image}
                            alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                            className="w-full rounded-lg shadow-md"
                          />
                          {paragraph.imageCaption && (
                            <p className="text-sm text-slate-600 italic mt-2 text-center">
                              {paragraph.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer del modal */}
            <div className="sticky bottom-0 bg-slate-50 p-4 rounded-b-xl border-t border-slate-200 text-center">
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de infografía - Optimizado para imágenes verticales */}
      {showInfographicModal && question.infographic && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          onClick={() => setShowInfographicModal(false)}
          onTouchMove={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            className="h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Header compacto */}
            <div className="flex-shrink-0 h-12 bg-gradient-to-r from-blue-600 to-blue-800 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Infografía - Pregunta {question.number}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    const textToCopy = `Infografía - Pregunta ${question.number}\n\n${question.textEs}\n\nURL: ${question.infographic}`;
                    await navigator.clipboard.writeText(textToCopy);
                    setInfographicCopied(true);
                    setTimeout(() => setInfographicCopied(false), 2000);
                  }}
                  className={`p-2 rounded-lg ${infographicCopied ? 'bg-green-500' : 'bg-white/20 hover:bg-white/30'} transition-all`}
                  title={infographicCopied ? '¡Copiado!' : 'Copiar enlace'}
                >
                  {infographicCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setShowInfographicModal(false)}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all"
                  title="Cerrar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* BOTÓN GRANDE DE CERRAR - Fácil de tocar en móvil/tablet */}
            <div className="flex-shrink-0 px-4 py-2 bg-black">
              <button
                onClick={() => setShowInfographicModal(false)}
                className="w-full py-4 bg-red-600 hover:bg-red-500 active:bg-red-700
                           text-white font-semibold text-lg rounded-xl
                           flex items-center justify-center gap-3
                           transition-all duration-150
                           shadow-lg hover:shadow-xl
                           touch-manipulation
                           min-h-[56px]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>CERRAR INFOGRAFÍA</span>
              </button>
            </div>

            {/* Contenedor de imagen - Ocupa todo el espacio disponible */}
            <div className="flex-1 overflow-hidden flex items-center justify-center p-2 bg-white">
              <img
                src={question.infographic}
                alt={`Infografía para la pregunta ${question.number}`}
                className="max-w-full object-contain"
                style={{ maxHeight: 'calc(100vh - 140px)' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal de Lectura Bíblica (LEE) */}
      {showReadTextModal && question.readText && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setShowReadTextModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-4 rounded-t-xl flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📖</span>
                <h3 className="text-lg font-bold">{question.readText}</h3>
              </div>
              <button
                onClick={() => setShowReadTextModal(false)}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 border border-white/40 rounded-lg flex items-center justify-center transition-all shadow-sm"
                title="Cerrar"
              >
                <span className="text-2xl font-bold text-white">×</span>
              </button>
            </div>

            {/* Contenido - Textos bíblicos */}
            <div className="p-6 space-y-4">
              {biblicalTexts[question.readText] ? (
                biblicalTexts[question.readText].map((item, index) => (
                  <div key={index} className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-sm font-bold text-emerald-700 mb-2">{item.reference}</p>
                    <p className="text-slate-800 leading-relaxed italic">&ldquo;{item.text}&rdquo;</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-600 italic">Texto bíblico no disponible.</p>
              )}
              <p className="text-xs text-slate-500 text-center mt-4">
                Traducción del Nuevo Mundo (edición 2019)
              </p>
            </div>

            {/* Footer del modal */}
            <div className="sticky bottom-0 bg-slate-50 p-4 rounded-b-xl border-t border-slate-200 text-center">
              <button
                onClick={() => setShowReadTextModal(false)}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
