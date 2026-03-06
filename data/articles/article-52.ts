import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS DEL ARTÍCULO 52
// "Sigamos satisfaciendo nuestras 'necesidades espirituales'"
// ============================================
export const biblicalTexts52: Record<string, { reference: string; text: string }[]> = {
  "LEE Mateo 5:3": [
    { reference: "Mateo 5:3", text: "Felices los que reconocen sus necesidades espirituales, porque el Reino de los cielos les pertenece." }
  ],
  "LEE Hebreos 5:14-6:1": [
    { reference: "Hebreos 5:14", text: "Pero el alimento sólido es para las personas maduras, para las que mediante el uso han entrenado sus facultades perceptivas a fin de distinguir tanto lo correcto como lo incorrecto." },
    { reference: "Hebreos 6:1", text: "Por eso, ahora que hemos dejado atrás la enseñanza elemental sobre el Cristo, avancemos hacia la madurez. No pongamos otra vez los cimientos, es decir, el arrepentimiento de las obras muertas y la fe en Dios." }
  ],
  "LEE Colosenses 3:8-10": [
    { reference: "Colosenses 3:8", text: "Pero ahora quítenselo todo de encima: la ira, la cólera, la maldad, los insultos y el habla obscena." },
    { reference: "Colosenses 3:9", text: "No se mientan los unos a los otros. Quítense la vieja personalidad con sus prácticas." },
    { reference: "Colosenses 3:10", text: "Y vístanse con la nueva personalidad, que se va renovando mediante el conocimiento exacto según la imagen de aquel que la creó." }
  ],
  "LEE Salmo 27:5": [
    { reference: "Salmo 27:5", text: "Pues me esconderá en su cabaña el día de la calamidad. Me cobijará en lo recóndito de su tienda. Me pondrá en alto sobre una roca." }
  ]
};

// ============================================
// DATOS DEL ARTÍCULO 52
// ============================================
export const article52: ArticleData = {
  metadata: {
    articleNumber: 52,
    week: "2-8 Mar",
    month: "Enero",
    year: 2026
  },
  song: "Canción 97: Nuestra vida depende de la Palabra de Dios",
  title: "Sigamos satisfaciendo nuestras «necesidades espirituales»",
  biblicalText: "\"Felices los que reconocen sus necesidades espirituales\" (MAT. 5:3).",
  theme: "Qué hacer para seguir beneficiándonos del alimento, la ropa y la protección espirituales que Jehová nos da.",
  questions: [
    // ─── PREGUNTA 1 ───
    {
      number: "1",
      textEs: "¿Con qué necesidades básicas nos creó Jehová? (Mateo 5:3).",
      textLSM: "",
      paragraphs: [1],
      readText: "LEE Mateo 5:3",
      keyPoint: "Jehová nos creó con necesidades espirituales además de las básicas, y para ser felices debemos reconocerlas y nunca dejar de satisfacerlas.",
      guidingQuestion: "¿Qué tres necesidades básicas menciona el párrafo, y qué necesidad adicional nos dio Jehová?",
      answer: [
        "Jehová nos creó con **tres necesidades básicas**: comida, ropa y cobijo.",
        "Si nos faltaran estas cosas, aunque fuera por **poco tiempo**, la vida se complicaría.",
        "Pero Jehová también nos hizo con **necesidades espirituales**.",
        "Para ser **verdaderamente felices**, tenemos que reconocer que las tenemos y **nunca dejar de satisfacerlas**."
      ],
      flashcards: [
        {
          question: "¿Qué tres necesidades básicas menciona el párrafo?",
          answer: "Comida, ropa y cobijo."
        },
        {
          question: "¿Qué se necesita para ser verdaderamente feliz según Mateo 5:3?",
          answer: "Reconocer que tenemos necesidades espirituales y nunca dejar de satisfacerlas."
        }
      ],
      biblicalCards: [
        {
          reference: "Mateo 5:3",
          purpose: "Las necesidades espirituales son clave para la verdadera felicidad",
          text: "Felices los que reconocen sus necesidades espirituales, porque el Reino de los cielos les pertenece.",
          reasoningQuestion: "Si Jesús vincula la felicidad con reconocer las necesidades espirituales, ¿por qué creen que tantas personas buscan la felicidad en cosas materiales?"
        }
      ]
    },
    // ─── PREGUNTA 2 ───
    {
      number: "2",
      textEs: "¿Qué ejemplo nos ayuda a entender lo que significa reconocer nuestras necesidades espirituales?",
      textLSM: "",
      paragraphs: [2],
      keyPoint: "Reconocer nuestras necesidades espirituales es como ser un mendigo que sabe que necesita ayuda desesperadamente y está dispuesto a buscarla.",
      guidingQuestion: "¿A quién se compara a los que reconocen sus necesidades espirituales, y por qué?",
      answer: [
        "La expresión griega transmite literalmente la idea de ser **«mendigos del espíritu»**.",
        "Es como un hombre **muy pobre**, vestido de harapos, sin comida y expuesto a la intemperie.",
        "El mendigo **sabe muy bien** que necesita ayuda para mejorar su situación.",
        "Los que reconocen sus necesidades espirituales están **deseosos** de aprovechar los **regalos espirituales** que Jehová les da."
      ],
      flashcards: [
        {
          question: "¿Qué transmite literalmente en griego la expresión 'los que reconocen sus necesidades espirituales'?",
          answer: "La idea de ser 'mendigos del espíritu', personas muy conscientes de lo desesperada que es su situación espiritual y de que necesitan ayuda."
        }
      ],
      biblicalCards: []
    },
    // ─── PREGUNTA 3 ───
    {
      number: "3",
      textEs: "¿Qué veremos en este artículo?",
      textLSM: "",
      paragraphs: [3],
      keyPoint: "El artículo analiza el ejemplo de la mujer fenicia y tres hombres espirituales (Pedro, Pablo y David) para aprender a satisfacer nuestras necesidades espirituales.",
      guidingQuestion: "¿Qué tres cualidades imprescindibles demostró la mujer fenicia?",
      answer: [
        "Primero hablaremos de la **mujer fenicia** que le rogó a Jesús que la ayudara.",
        "Ella demostró **tres cualidades imprescindibles** para quienes reconocen sus necesidades espirituales.",
        "Luego analizaremos el ejemplo de tres hombres muy espirituales: los apóstoles **Pedro** y **Pablo**, y el rey **David**."
      ],
      flashcards: [
        {
          question: "¿Qué tres personajes bíblicos masculinos se analizarán como ejemplo en este artículo?",
          answer: "Los apóstoles Pedro y Pablo, y el rey David."
        }
      ],
      biblicalCards: []
    },
    // ─── PREGUNTA 4 ───
    {
      number: "4",
      textEs: "¿Qué quería la mujer fenicia que Jesús hiciera por ella?",
      textLSM: "",
      paragraphs: [4],
      section: "UN EJEMPLO DE HUMILDAD, PERSISTENCIA Y FE",
      keyPoint: "La mujer fenicia buscó a Jesús con urgencia porque su hija estaba cruelmente poseída por un demonio, y se arrodilló suplicándole ayuda.",
      guidingQuestion: "¿Cómo se acercó la mujer fenicia a Jesús, y por qué le suplicó ayuda?",
      answer: [
        "Su hija estaba **«cruelmente poseída por un demonio»**.",
        "La mujer **se arrodilló** ante Jesús **suplicándole** ayuda.",
        "Demostró cualidades **sobresalientes** al buscar a Jesús."
      ],
      flashcards: [
        {
          question: "¿Qué problema tan grave tenía la hija de la mujer fenicia?",
          answer: "Estaba 'cruelmente poseída por un demonio' (Mateo 15:22)."
        }
      ],
      biblicalCards: [
        {
          reference: "Mateo 15:22-28",
          purpose: "Relato completo de la mujer fenicia que demostró humildad, persistencia y fe",
          text: "Y resulta que llegó una mujer fenicia de esa región y gritó: '¡Ten compasión de mí, Señor, Hijo de David! Mi hija está cruelmente poseída por un demonio'. Pero él no le contestó ni una sola palabra. Así que sus discípulos se le acercaron y se pusieron a rogarle: 'Dile que se vaya, porque no deja de gritar detrás de nosotros'. Él respondió: 'Solo se me envió a las ovejas perdidas de la nación de Israel'. Pero la mujer vino, se inclinó ante él y le suplicó: '¡Señor, ayúdame!'. Él le contestó: 'No está bien quitarles el pan a los hijos para echárselo a los perritos'. 'Cierto, Señor —admitió ella—, pero la verdad es que los perritos comen de las migajas que caen de la mesa de sus dueños'. Entonces Jesús le respondió: 'Mujer, ¡qué fe tan grande tienes! Que se te cumpla lo que deseas'. Y en ese momento su hija quedó sana."
        }
      ]
    },
    // ─── PREGUNTA 5 ───
    {
      number: "5",
      textEs: "¿Qué cualidades demostró la mujer fenicia, y qué hizo Jesús? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [5],
      // TODO: Agregar image y imageCaption (mujer fenicia de rodillas pidiendo ayuda a Jesús)
      keyPoint: "La mujer demostró humildad (no se ofendió), persistencia (rogó una y otra vez) y fe (confió en Jesús), y él expulsó al demonio.",
      guidingQuestion: "¿Cómo demostró la mujer fenicia humildad cuando Jesús la comparó a un perrito?",
      answer: [
        "Demostró **verdadera humildad**: no se ofendió cuando Jesús la comparó a un **perrito**.",
        "También mostró **persistencia**, pues le rogó a Jesús **una y otra vez** que la ayudara.",
        "Insistió tanto porque tenía **fe** en él.",
        "Jesús vio que tenía una **fe tan grande** que expulsó al demonio que atormentaba a su hija."
      ],
      flashcards: [
        {
          question: "¿Qué tres cualidades demostró la mujer fenicia?",
          answer: "Humildad (no se ofendió), persistencia (rogó una y otra vez) y fe (confió en Jesús)."
        },
        {
          question: "¿Por qué la respuesta de la mujer fenicia fue tan notable?",
          answer: "Porque no se ofendió cuando Jesús la comparó a un perrito; al contrario, usó esa comparación con humildad para seguir pidiendo ayuda."
        }
      ],
      biblicalCards: []
    },
    // ─── PREGUNTA 6 ───
    {
      number: "6",
      textEs: "¿Qué aprendemos del relato de la mujer fenicia?",
      textLSM: "",
      paragraphs: [6],
      keyPoint: "Para satisfacer nuestras necesidades espirituales debemos ser humildes, persistentes y tener fe fuerte, confiando también en quienes Jehová usa para dirigir.",
      guidingQuestion: "¿Qué papel juega la fe en Jesucristo y en el esclavo fiel y prudente?",
      answer: [
        "Debemos ser **humildes**, **persistentes** y tener una **fe fuerte**.",
        "Solo si somos humildes le pediremos con **insistencia** a Dios que nos ayude.",
        "Es importante tener fe en Jesucristo y confiar en quienes Jehová usa para **dirigir a sus discípulos**.",
        "Jehová y su Hijo se sienten **felices** de cubrir las necesidades espirituales de quienes demuestran estas cualidades."
      ],
      flashcards: [
        {
          question: "¿En quiénes debemos confiar para satisfacer nuestras necesidades espirituales?",
          answer: "En Jesucristo y en quienes él está usando para dirigir a sus discípulos (Mateo 24:45-47)."
        }
      ],
      biblicalCards: [
        {
          reference: "Mateo 24:45-47",
          purpose: "Jehová usa a un esclavo fiel para alimentar a sus siervos",
          text: "'¿Quién es en realidad el esclavo fiel y prudente a quien su amo puso a cargo de sus sirvientes para darles alimento al debido tiempo? ¡Feliz ese esclavo si su amo, al llegar, lo encuentra haciéndolo así! Les aseguro que lo pondrá a cargo de todos sus bienes'.",
          reasoningQuestion: "Si Jesús designó a un esclavo fiel para alimentarnos espiritualmente, ¿qué actitud debemos tener hacia las publicaciones y las instrucciones que recibimos?"
        },
        {
          reference: "Santiago 1:5-7",
          purpose: "Debemos pedir con fe y sin dudar",
          text: "Si alguno de ustedes tiene falta de sabiduría, que se la pida a Dios —quien la da generosamente a todos sin reprenderlos—, y se le dará. Pero que siga pidiendo con fe, sin dudar nada, pues el que duda es como una ola del mar empujada por el viento de un lado a otro. De hecho, que ese hombre no se imagine que recibirá nada de Jehová."
        }
      ]
    },
    // ─── PREGUNTA 7 ───
    {
      number: "7",
      textEs: "¿Qué tarea recibió Pedro, pero qué más tenía que hacer? (Hebreos 5:14-6:1).",
      textLSM: "",
      paragraphs: [7],
      section: "SEAMOS COMO PEDRO: ESTEMOS SIEMPRE BIEN ALIMENTADOS ESPIRITUALMENTE",
      readText: "LEE Hebreos 5:14-6:1",
      keyPoint: "Pedro recibió la tarea de alimentar a las ovejas, pero él también necesitaba alimentarse espiritualmente, incluso estudiando cosas difíciles de entender.",
      guidingQuestion: "¿Qué admitió Pedro sobre las cartas de Pablo?",
      answer: [
        "Pedro fue uno de los primeros en reconocer que Jesús era **el Mesías**.",
        "Jesús le dijo: **«Alimenta a mis ovejitas»**, y Pedro cumplió **fielmente** con esa tarea.",
        "Pero Pedro también necesitaba **alimentarse espiritualmente**: estudió las cartas de **Pablo**.",
        "Admitió que en ellas había **«cosas difíciles de entender»**, pero persistió con **fe** en que Jehová lo ayudaría."
      ],
      flashcards: [
        {
          question: "¿Qué tarea le encargó Jesús a Pedro antes de subir al cielo?",
          answer: "Le dijo: 'Alimenta a mis ovejitas' (Juan 21:17)."
        },
        {
          question: "¿Qué admitió Pedro sobre las cartas de Pablo?",
          answer: "Que en ellas había 'cosas difíciles de entender', pero aun así las estudió con persistencia."
        }
      ],
      biblicalCards: [
        {
          reference: "Juan 6:66-68",
          purpose: "Pedro reconoció que Jesús tenía palabras de vida eterna",
          text: "Por eso, muchos de sus discípulos se volvieron atrás y ya no andaban con él. Entonces Jesús les dijo a los Doce: '¿También ustedes quieren irse?'. Simón Pedro le contestó: 'Señor, ¿a quién nos iremos? Tú tienes palabras de vida eterna'."
        },
        {
          reference: "Juan 21:17",
          purpose: "Jesús le encargó a Pedro la tarea de alimentar a sus ovejas",
          text: "Le preguntó por tercera vez: 'Simón hijo de Juan, ¿me tienes cariño?'. Pedro se puso triste porque le preguntó por tercera vez: '¿Me tienes cariño?'. Le dijo: 'Señor, tú lo sabes todo. Tú bien sabes que te tengo cariño'. Jesús le dijo: 'Alimenta a mis ovejitas'."
        },
        {
          reference: "2 Pedro 3:15, 16",
          purpose: "Pedro reconoció que las cartas de Pablo tenían cosas difíciles de entender",
          text: "Consideren que la paciencia de nuestro Señor significa salvación, así como nuestro querido hermano Pablo les escribió según la sabiduría que se le dio. Habla de estas cosas en todas sus cartas. En ellas hay algunas cosas difíciles de entender que los ignorantes y los inconstantes tuercen, como hacen con el resto de las Escrituras, para su propia destrucción."
        },
        {
          reference: "Hebreos 5:14–6:1",
          purpose: "Pedro necesitaba digerir el 'alimento sólido' para avanzar hacia la madurez espiritual",
          text: "Pero el alimento sólido es para las personas maduras, para las que mediante el uso han entrenado sus facultades perceptivas a fin de distinguir tanto lo correcto como lo incorrecto. Por eso, ahora que hemos dejado atrás la enseñanza elemental sobre el Cristo, avancemos hacia la madurez.",
          reasoningQuestion: "Si hasta el apóstol Pedro necesitaba esforzarse por entender 'cosas difíciles', ¿qué nos enseña eso sobre nuestra actitud al estudiar la Biblia?"
        }
      ]
    },
    // ─── PREGUNTA 8 ───
    {
      number: "8",
      textEs: "¿Qué hizo Pedro cuando recibió nuevas instrucciones de parte de Jehová?",
      textLSM: "",
      paragraphs: [8],
      keyPoint: "Pedro aceptó de inmediato la nueva iluminación espiritual de Jehová, cambiando su manera de ver las cosas para predicar a personas de las naciones.",
      guidingQuestion: "¿Cómo reaccionó Pedro ante la visión de los animales impuros en Jope?",
      answer: [
        "En una **visión en Jope**, Jehová le dijo que matara y comiera animales que la Ley consideraba **impuros**.",
        "Pedro al principio rechazó la idea, pues **nunca** había comido nada contaminado.",
        "Pero entendió que Jehová estaba dando una **nueva iluminación espiritual** y la **aceptó de inmediato**.",
        "Les predicó a **Cornelio** y a los de su casa, y tuvo la alegría de verlos **aceptar la verdad** y bautizarse."
      ],
      flashcards: [
        {
          question: "¿Qué instrucción recibió Pedro en la visión de Jope?",
          answer: "Que matara y comiera animales que según la Ley mosaica eran impuros, porque Dios los había purificado."
        },
        {
          question: "¿Qué cambio importante aceptó Pedro gracias a esa visión?",
          answer: "Que las personas de otras naciones no eran impuras. Fue a la casa de Cornelio, les predicó, y estos recibieron espíritu santo y se bautizaron."
        }
      ],
      biblicalCards: [
        {
          reference: "Hechos 10:9-15",
          purpose: "Pedro recibió una visión en Jope con la instrucción de no llamar impuro a lo que Dios purificó",
          text: "Al día siguiente, mientras ellos iban de camino y se acercaban a la ciudad, Pedro subió a la azotea para orar como a la hora sexta. Pero le dio mucha hambre y quiso comer. Mientras preparaban la comida, él cayó en un trance y vio el cielo abierto y algo parecido a una gran sábana de lino sostenida por sus cuatro puntas que descendía sobre la tierra. Encima había todo tipo de animales de cuatro patas y reptiles de la tierra y aves del cielo. Entonces una voz le dijo: '¡Levántate, Pedro, mata y come!'. Pero Pedro respondió: 'De ninguna manera, Señor. Nunca he comido nada contaminado o impuro'. La voz habló por segunda vez y le dijo: 'Deja de llamar contaminadas a las cosas que Dios ha purificado'."
        },
        {
          reference: "Hechos 10:28, 29",
          purpose: "Pedro entendió que no debía considerar impura a ninguna persona",
          text: "Les dijo: 'Ustedes bien saben que a un judío no le está permitido juntarse con alguien de otra nación ni acercarse a él. Pero Dios me ha mostrado que a ningún ser humano debo llamar contaminado o impuro. Por eso, cuando me mandaron a buscar, vine sin poner ninguna objeción'."
        },
        {
          reference: "Proverbios 4:18",
          purpose: "La iluminación espiritual va en aumento progresivo",
          text: "Pero la senda de los justos es como la luz del amanecer, que va en aumento hasta llegar al pleno día.",
          reasoningQuestion: "Si la luz espiritual va en aumento, ¿qué actitud deberíamos tener cuando la organización ajusta su entendimiento de una verdad bíblica?"
        },
        {
          reference: "Hechos 10:44-48",
          purpose: "Cornelio y su familia aceptaron la verdad y se bautizaron",
          text: "Mientras Pedro aún hablaba, el espíritu santo cayó sobre todos los que estaban escuchando el mensaje. Los creyentes fieles que habían venido con Pedro estaban asombrados porque el regalo gratuito del espíritu santo también se derramaba sobre personas de las naciones. [...] Entonces mandó que se bautizaran en el nombre de Jesucristo."
        }
      ]
    },
    // ─── PREGUNTA 9 ───
    {
      number: "9",
      textEs: "¿Qué dos beneficios obtenemos al desarrollar un fuerte deseo por el alimento espiritual sólido?",
      textLSM: "",
      paragraphs: [9],
      keyPoint: "Al estudiar verdades profundas, amamos más a Jehová y nos sentimos más motivados a predicar. Además, debemos aceptar los cambios de entendimiento sin demora.",
      guidingQuestion: "¿Qué lección adicional sacamos del ejemplo de Pedro sobre los cambios de entendimiento?",
      answer: [
        "Debemos alimentarnos de las enseñanzas **básicas** (como leche) y también del **alimento sólido**.",
        "**Primer beneficio**: aprendemos cosas sobre Jehová que nos motivan a **quererlo y respetarlo más**.",
        "**Segundo beneficio**: nos sentimos más **impulsados a hablarles a otros** de nuestro Padre celestial.",
        "**Lección adicional**: cuando la organización cambia su entendimiento de una verdad bíblica, debemos **aceptar ese cambio sin demora**."
      ],
      flashcards: [
        {
          question: "¿Cuáles son los dos beneficios de desarrollar un fuerte deseo por el alimento espiritual sólido?",
          answer: "1) Aprendemos cosas sobre Jehová que nos motivan a quererlo más. 2) Nos sentimos más impulsados a hablarles a otros de él."
        }
      ],
      biblicalCards: [
        {
          reference: "Romanos 11:33",
          purpose: "Las cualidades de Jehová son tan profundas que nos motivan a conocerlo más",
          text: "¡Oh, la profundidad de la riqueza, la sabiduría y el conocimiento de Dios! ¡Qué inescrutables son sus juicios y qué imposible es rastrear sus caminos!"
        },
        {
          reference: "Apocalipsis 4:11",
          purpose: "Conocer a Jehová nos impulsa a darle gloria",
          text: "'Tú eres digno, Jehová, Dios nuestro, de recibir la gloria, la honra y el poder, porque tú creaste todas las cosas, y por tu voluntad existen y fueron creadas'."
        }
      ]
    },
    // ─── PREGUNTA 10 ───
    {
      number: "10",
      textEs: "¿Qué implica estar bien vestidos espiritualmente? (Colosenses 3:8-10).",
      textLSM: "",
      paragraphs: [10],
      section: "SEAMOS COMO PABLO: ESTEMOS SIEMPRE BIEN VESTIDOS ESPIRITUALMENTE",
      readText: "LEE Colosenses 3:8-10",
      keyPoint: "Estar bien vestidos espiritualmente implica quitarse la vieja personalidad y ponerse la nueva, algo que requiere esfuerzo constante.",
      guidingQuestion: "¿Qué resultado tuvo la falta de conocimiento exacto en la vida de Pablo antes de ser cristiano?",
      answer: [
        "Pablo aconsejó: **«Quítense la vieja personalidad»** y **«vístanse con la nueva»**.",
        "Ponerse las cualidades de la nueva personalidad requiere un **esfuerzo constante**.",
        "Pablo, desde joven, puso todo su empeño en agradar a Dios, pero le faltaba **conocimiento exacto**.",
        "Su ignorancia espiritual sumada a su **orgullo** lo convertían en un hombre **«insolente»** con una personalidad desagradable."
      ],
      flashcards: [
        {
          question: "¿Qué consejo dio Pablo sobre la personalidad espiritual?",
          answer: "'Quítense la vieja personalidad' y 'vístanse con la nueva personalidad' (Colosenses 3:8-10)."
        },
        {
          question: "¿Qué le pasaba a Pablo antes de conocer las enseñanzas de Cristo?",
          answer: "Era espiritualmente pobre: le faltaba conocimiento exacto y su orgullo lo hacía 'insolente', con una personalidad desagradable."
        }
      ],
      biblicalCards: [
        {
          reference: "Gálatas 1:14",
          purpose: "Pablo era muy celoso de las tradiciones judías antes de ser cristiano",
          text: "Y en el judaísmo progresaba yo más que muchos de los de mi misma edad entre mi pueblo, pues era mucho más celoso de las tradiciones de mis antepasados."
        },
        {
          reference: "Filipenses 3:4, 5",
          purpose: "Pablo confiaba en sus credenciales humanas",
          text: "Aunque yo tengo razones para confiar también en la carne. Si algún otro cree tener razones para confiar en la carne, yo las tengo aún más: circuncidado al octavo día, de la nación de Israel, de la tribu de Benjamín, hebreo hijo de hebreos; en lo que respecta a la ley, fariseo."
        },
        {
          reference: "1 Timoteo 1:13",
          purpose: "Pablo reconoció que antes era un hombre insolente",
          text: "A pesar de que antes fui un blasfemo, un perseguidor y un hombre insolente. Pero se me mostró misericordia porque actué por ignorancia y falta de fe."
        },
        {
          reference: "Colosenses 3:8-10",
          purpose: "Pablo aconsejó quitarse la vieja personalidad y vestirse con la nueva",
          text: "Pero ahora quítenselo todo de encima: la ira, la cólera, la maldad, los insultos y el habla obscena. No se mientan los unos a los otros. Quítense la vieja personalidad con sus prácticas. Y vístanse con la nueva personalidad, que se va renovando mediante el conocimiento exacto según la imagen de aquel que la creó.",
          reasoningQuestion: "Pablo dice que la nueva personalidad 'se va renovando'. ¿Qué nos indica eso sobre el ritmo del cambio espiritual?"
        }
      ]
    },
    // ─── PREGUNTA 11 ───
    {
      number: "11",
      textEs: "¿Contra qué defecto de su vieja personalidad luchó Pablo?",
      textLSM: "",
      paragraphs: [11],
      keyPoint: "Pablo luchó contra su tendencia a la ira; aunque tuvo un retroceso con Bernabé, no se dio por vencido.",
      guidingQuestion: "¿Qué episodio muestra que Pablo todavía luchaba con su carácter después de hacerse cristiano?",
      answer: [
        "Antes de ser cristiano, Pablo era **de mecha corta**: amenazaba a los seguidores de Jesús y **«deseaba asesinarlos»**.",
        "Después de hacerse cristiano, se esforzó al máximo por **quitarse** esa parte de su vieja personalidad.",
        "Aun así, tuvo un **«fuerte estallido de ira»** con **Bernabé** por un desacuerdo.",
        "Pero **no se dio por vencido**: siguió luchando con todas sus fuerzas contra sus **imperfecciones**."
      ],
      flashcards: [
        {
          question: "¿Qué episodio muestra que Pablo todavía luchaba con su carácter?",
          answer: "Tuvo un 'fuerte estallido de ira' con Bernabé por un desacuerdo sobre Juan Marcos (Hechos 15:37-39)."
        },
        {
          question: "¿Cómo describe la Biblia a Pablo antes de ser cristiano?",
          answer: "Estaba tan furioso con los seguidores de Jesús que seguía amenazándolos y 'deseaba asesinarlos' (Hechos 9:1)."
        }
      ],
      biblicalCards: [
        {
          reference: "Hechos 9:1",
          purpose: "Pablo amenazaba a los discípulos antes de convertirse",
          text: "Mientras tanto, Saulo, que seguía amenazando a los discípulos del Señor y deseando asesinarlos, fue al sumo sacerdote."
        },
        {
          reference: "Efesios 4:22, 31",
          purpose: "El consejo de Pablo sobre quitarse la vieja personalidad y la ira",
          text: "Que se quiten la vieja personalidad que se ajusta a su anterior modo de vivir y que se va corrompiendo según sus deseos engañosos. [...] Quítense de encima toda amargura y cólera y enojo y griterío e injuria, junto con toda clase de maldad."
        },
        {
          reference: "Hechos 15:37-39",
          purpose: "Un fuerte desacuerdo entre Pablo y Bernabé",
          text: "Bernabé estaba decidido a llevarse también a Juan, que se llamaba Marcos. Pero a Pablo no le parecía bien llevarse a alguien que los había abandonado en Panfilia y que no había ido con ellos a la obra. Entonces se produjo un fuerte estallido de ira, de modo que se separaron."
        },
        {
          reference: "1 Corintios 9:27",
          purpose: "Pablo luchaba constantemente contra sus imperfecciones",
          text: "Más bien, golpeo mi cuerpo y lo trato como a un esclavo, no sea que después de haber predicado a otros yo mismo quede descalificado de alguna manera."
        }
      ]
    },
    // ─── PREGUNTA 12 ───
    {
      number: "12",
      textEs: "¿Cómo logró Pablo quitarse su vieja personalidad?",
      textLSM: "",
      paragraphs: [12],
      keyPoint: "Pablo no confió en sus propias fuerzas sino en la fuerza que Dios le daba, y cuando se desanimaba recordaba las cosas buenas que Jehová había hecho por él.",
      guidingQuestion: "¿Qué hacía Pablo cuando cometía errores y se desanimaba?",
      answer: [
        "No confiando en sus **propias fuerzas**, sino dependiendo de **«la fuerza que Dios da»**.",
        "Al igual que Pedro, dependía del poder de **Jehová**.",
        "Cuando cometía errores y se desanimaba, pensaba en las **cosas buenas** que su Padre celestial había hecho por él.",
        "Así **recobraba las fuerzas** para seguir en su lucha."
      ],
      flashcards: [
        {
          question: "¿De qué dependía Pablo para quitarse la vieja personalidad?",
          answer: "No de sus propias fuerzas, sino de 'la fuerza que Dios da' (Filipenses 4:13; 1 Pedro 4:11)."
        }
      ],
      biblicalCards: [
        {
          reference: "Filipenses 4:13",
          purpose: "Pablo dependía de la fuerza divina",
          text: "Para todo tengo fuerzas gracias a aquel que me da poder.",
          reasoningQuestion: "¿En qué situaciones de nuestra vida sentimos que necesitamos esta fuerza de Dios para controlar nuestra vieja personalidad?"
        },
        {
          reference: "1 Pedro 4:11",
          purpose: "Pedro también destacó la importancia de depender de la fuerza de Dios",
          text: "Si alguien habla, que hable las declaraciones sagradas de Dios. Si alguien sirve, que sirva dependiendo de la fuerza que Dios da. Así Dios será glorificado en todo por medio de Jesucristo."
        },
        {
          reference: "Romanos 7:21-25",
          purpose: "Pablo describió su lucha interna contra el pecado",
          text: "Así descubro una ley en mi caso: que cuando quiero hacer lo que está bien, lo malo está presente conmigo. [...] ¡Miserable de mí! ¿Quién me librará del cuerpo que me acarrea esta muerte? ¡Gracias a Dios por medio de Jesucristo nuestro Señor!"
        }
      ]
    },
    // ─── PREGUNTA 13 ───
    {
      number: "13",
      textEs: "¿De qué manera podemos imitar a Pablo?",
      textLSM: "",
      paragraphs: [13],
      keyPoint: "Debemos hacer un esfuerzo continuo por ponernos la nueva personalidad, y si damos un paso atrás, no rendirnos; somos nosotros los que debemos cambiar.",
      guidingQuestion: "¿Por qué dice el párrafo que la nueva personalidad no es como una prenda que ajustamos a nuestro gusto?",
      answer: [
        "Haciendo un **esfuerzo continuo** por quitarnos la vieja personalidad y ponernos la **nueva**.",
        "Si damos un paso atrás, **no pensar** que somos un caso perdido.",
        "Seguir poniendo todo el empeño en **transformar** nuestra manera de pensar y actuar.",
        "La nueva personalidad no se ajusta a nuestro gusto: somos **nosotros** los que tenemos que cambiar para **adaptarnos** a lo que Dios espera."
      ],
      flashcards: [
        {
          question: "¿Por qué la nueva personalidad no es como una prenda de ropa que ajustamos a nuestro gusto?",
          answer: "Porque somos nosotros los que tenemos que cambiar nuestra forma de ser para adaptarnos a lo que Dios espera, no al revés."
        }
      ],
      biblicalCards: [
        {
          reference: "Romanos 12:1, 2",
          purpose: "Debemos transformar nuestra mente para agradar a Dios",
          text: "Por eso les ruego por las compasiones de Dios, hermanos, que presenten sus cuerpos como sacrificio vivo, santo y agradable a Dios, un servicio sagrado con su facultad de razonar. Y dejen de amoldarse a este sistema de cosas, más bien transfórmense renovando su mente, para que comprueben por ustedes mismos cuál es la voluntad de Dios: lo bueno, lo agradable y lo perfecto."
        },
        {
          reference: "Efesios 4:24",
          purpose: "La nueva personalidad fue creada según la voluntad de Dios",
          text: "Y se pongan la nueva personalidad que fue creada de acuerdo con la voluntad de Dios en verdadera justicia y lealtad."
        }
      ]
    },
    // ─── PREGUNTA 14, 15 ───
    {
      number: "14, 15",
      textEs: "¿Cómo protege Jehová a su pueblo hoy en día? (Salmo 27:5; vea también la imagen).",
      textLSM: "",
      paragraphs: [14, 15],
      section: "SEAMOS COMO DAVID: BUSQUEMOS SIEMPRE EL COBIJO DE JEHOVÁ",
      readText: "LEE Salmo 27:5",
      // TODO: Agregar image y imageCaption (hermana levanta la mano en el Estudio de La Atalaya)
      keyPoint: "Jehová protege asegurándose de que nada destruya nuestra fe, ayudándonos con las preocupaciones y dándonos una familia espiritual y pastores.",
      guidingQuestion: "¿De cuántas maneras protege Jehová a su pueblo según los párrafos 14 y 15?",
      answer: [
        "Se asegura de que nada ni nadie logre **acabar con la fe** de sus siervos.",
        "Promete que **ningún arma** fabricada contra nosotros **dará resultado**.",
        "Aunque los enemigos nos quiten la vida, Jehová **nos la devolverá**.",
        "Nos ayuda a **lidiar con nuestras preocupaciones** y nos da una gran **familia espiritual** y **pastores** que nos cuidan."
      ],
      flashcards: [
        {
          question: "¿Qué garantiza Jehová sobre los ataques de Satanás y los que nos persiguen?",
          answer: "Que no pueden hacernos ningún daño irreparable; incluso si nos quitan la vida, Jehová nos la devolverá."
        },
        {
          question: "¿De qué maneras prácticas nos protege Jehová hoy?",
          answer: "Nos ayuda con nuestras preocupaciones, nos da una familia de hermanos espirituales que nos apoyan, y pastores que nos cuidan."
        }
      ],
      biblicalCards: [
        {
          reference: "Salmo 27:5",
          purpose: "David confiaba en que Jehová lo protegería",
          text: "Pues me esconderá en su cabaña el día de la calamidad. Me cobijará en lo recóndito de su tienda. Me pondrá en alto sobre una roca.",
          reasoningQuestion: "¿De qué maneras concretas hemos experimentado la protección de Jehová en nuestra vida?"
        },
        {
          reference: "Salmo 34:7",
          purpose: "El ángel de Jehová protege a los que le temen",
          text: "El ángel de Jehová acampa alrededor de los que le temen, y los rescata."
        },
        {
          reference: "Isaías 54:17",
          purpose: "Ningún arma fabricada contra los siervos de Dios dará resultado",
          text: "'Ningún arma que se fabrique contra ti dará resultado, y a toda lengua que se levante contra ti en juicio la condenarás. Esta es la herencia de los siervos de Jehová, y la justicia que procede de mí', dice Jehová."
        },
        {
          reference: "1 Corintios 15:55-57",
          purpose: "La muerte no tiene la victoria final",
          text: "Muerte, ¿dónde está tu victoria? Muerte, ¿dónde está tu aguijón? El aguijón que produce la muerte es el pecado, y lo que le da poder al pecado es la Ley. ¡Pero gracias a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo!"
        },
        {
          reference: "Apocalipsis 21:3, 4",
          purpose: "Jehová eliminará todo sufrimiento y devolverá la vida",
          text: "'¡Mira! La tienda de Dios está con la humanidad, y él residirá con ellos, y ellos serán su pueblo. Y Dios mismo estará con ellos. Y les limpiará toda lágrima de los ojos, y la muerte no será más, y no habrá más duelo ni clamor ni dolor. Las cosas de antes han pasado'."
        },
        {
          reference: "Proverbios 12:25",
          purpose: "Jehová nos ayuda con nuestras preocupaciones",
          text: "La ansiedad agobia el corazón del hombre, pero una buena palabra lo alegra."
        },
        {
          reference: "Mateo 6:27-29",
          purpose: "No hay razón para preocuparnos en exceso",
          text: "¿Quién de ustedes, por mucho que se preocupe, puede añadir un solo codo a la duración de su vida? Y ¿por qué se preocupan por la ropa? Aprendan de los lirios del campo, de cómo crecen. No trabajan ni hilan. Pero les digo que ni siquiera Salomón, con toda su gloria, se vistió como uno de ellos."
        },
        {
          reference: "Isaías 32:1, 2",
          purpose: "Los pastores espirituales son como un refugio para el pueblo de Dios",
          text: "¡Miren! Un rey reinará para la justicia, y los príncipes gobernarán de acuerdo con el derecho. Y cada uno de ellos será como un refugio contra el viento, un abrigo contra la tempestad, como arroyos de agua en una tierra seca, como la sombra de una enorme roca en un terreno árido."
        },
        {
          reference: "Hebreos 10:24, 25",
          purpose: "Las reuniones nos dan protección y ánimo espiritual",
          text: "Y prestemos atención los unos a los otros para motivarnos al amor y a las buenas obras. No dejemos de reunirnos, como es costumbre de algunos, sino animémonos unos a otros, y tanto más al ver que el día se acerca."
        }
      ]
    },
    // ─── PREGUNTA 16 ───
    {
      number: "16",
      textEs: "¿De qué maneras protegió Jehová a David?",
      textLSM: "",
      paragraphs: [16],
      keyPoint: "Jehová protegió a David ayudándolo a tomar buenas decisiones cuando obedecía, pero no lo protegió de las consecuencias cuando desobedeció.",
      guidingQuestion: "¿Qué diferencia hubo en la protección de Jehová cuando David obedeció y cuando desobedeció?",
      answer: [
        "Cuando David **obedeció**, Jehová lo ayudó a tomar **buenas decisiones** que lo protegieron.",
        "Cuando fue **desobediente**, Jehová **no lo protegió** de las consecuencias de sus acciones.",
        "Cuando sufrió por culpa de **otros**, se refugió en la **oración**.",
        "Jehová lo protegió dándole **consuelo** y asegurándole que lo **quería mucho** y cuidaría de él."
      ],
      flashcards: [
        {
          question: "¿Qué diferencia hubo en la protección de Jehová según la obediencia de David?",
          answer: "Cuando obedeció, Jehová lo ayudó a tomar buenas decisiones. Cuando desobedeció, no lo protegió de las consecuencias."
        }
      ],
      biblicalCards: [
        {
          reference: "Proverbios 5:1, 2",
          purpose: "Obedecer los consejos de Jehová nos protege",
          text: "Hijo mío, presta atención a mi sabiduría. Inclina tu oído a mi entendimiento, para que conserves la capacidad de pensar y tus labios guarden el conocimiento."
        },
        {
          reference: "2 Samuel 12:9, 10",
          purpose: "Cuando David desobedeció, Jehová no lo protegió de las consecuencias",
          text: "'¿Por qué has despreciado la palabra de Jehová haciendo lo malo ante sus ojos? Has herido con la espada a Urías el hitita. Te has quedado con su esposa, y a él lo mataste con la espada de los ammonitas. Ahora bien, la espada jamás se apartará de tu casa, porque me has despreciado al tomar a la esposa de Urías el hitita para que sea tu mujer'."
        },
        {
          reference: "Salmo 23:1, 4, 6",
          purpose: "David se refugió en Jehová y encontró consuelo",
          text: "Jehová es mi Pastor. Nada me faltará. [...] Aunque ande por el valle de sombra profunda, no temo ningún mal, porque tú estás conmigo. Tu vara y tu cayado me consuelan. [...] Ciertamente la bondad y el amor leal me seguirán todos los días de mi vida, y viviré en la casa de Jehová para siempre."
        }
      ]
    },
    // ─── PREGUNTA 17 ───
    {
      number: "17",
      textEs: "¿Cómo podemos imitar a David?",
      textLSM: "",
      paragraphs: [17],
      keyPoint: "Imitamos a David recurriendo a Jehová al tomar decisiones y refugiándonos en la oración cuando enfrentamos dificultades.",
      guidingQuestion: "¿De qué no nos protegerá Jehová si tomamos malas decisiones?",
      answer: [
        "Recurriendo a **Jehová** cuando tenemos que tomar **decisiones**.",
        "Siendo conscientes de que si tomamos **malas decisiones**, Jehová no nos protegerá de las **consecuencias negativas**.",
        "Cuando afrontamos dificultades por culpa de otros, nos refugiamos en la **oración**.",
        "Confiamos en que Jehová protegerá nuestros **corazones y nuestras mentes**."
      ],
      flashcards: [
        {
          question: "¿Qué debemos hacer cuando enfrentamos dificultades por culpa de otros?",
          answer: "Refugiarnos en la oración con la confianza de que Jehová protegerá nuestros corazones y nuestras mentes (Filipenses 4:6, 7)."
        }
      ],
      biblicalCards: [
        {
          reference: "Gálatas 6:7, 8",
          purpose: "Lo que sembramos es lo que cosechamos",
          text: "No se engañen: de Dios nadie se burla. Porque lo que uno siembre, eso también cosechará. El que siembra para su carne cosechará destrucción de la carne, pero el que siembra para el espíritu cosechará vida eterna del espíritu."
        },
        {
          reference: "Filipenses 4:6, 7",
          purpose: "La oración nos da la paz de Dios que protege nuestros corazones y mentes",
          text: "No se inquieten por nada, sino que en todo, mediante oración y ruego junto con acción de gracias, den a conocer sus peticiones a Dios. Y la paz de Dios, que supera todo lo que la mente humana puede comprender, protegerá sus corazones y sus mentes mediante Cristo Jesús.",
          reasoningQuestion: "¿Hemos experimentado alguna vez que, después de orar, sentimos una paz que no podemos explicar con palabras?"
        }
      ]
    },
    // ─── PREGUNTA 18 ───
    {
      number: "18",
      textEs: "¿Qué reto afrontamos, y cómo podemos seguir satisfaciendo nuestras necesidades espirituales? (Vea también las imágenes).",
      textLSM: "",
      paragraphs: [18],
      section: "NO DEJEMOS DE SATISFACER NUESTRAS NECESIDADES ESPIRITUALES",
      // TODO: Agregar image y imageCaption (hermana estudia La Atalaya, lleva comida a matrimonio, ancianos la pastorean)
      keyPoint: "Vivimos rodeados de personas infelices que no reconocen sus necesidades espirituales; debemos seguir alimentándonos, vistiéndonos y cobijándonos espiritualmente.",
      guidingQuestion: "¿Qué errores cometen las personas que son infelices según el párrafo?",
      answer: [
        "Vivimos rodeados de personas **infelices** que se niegan a aceptar sus **necesidades espirituales**.",
        "Algunas tratan de llenar ese vacío adorando a Dios **a su manera** o recurriendo a **filosofías humanas**.",
        "No debemos dejar que **se nos pegue** esa actitud.",
        "Debemos seguir **alimentándonos** de la Palabra de Dios, **poniéndonos** la nueva personalidad y **buscando el cobijo** espiritual de Jehová."
      ],
      flashcards: [
        {
          question: "¿Qué tres cosas debemos seguir haciendo para satisfacer nuestras necesidades espirituales?",
          answer: "1) Alimentarnos de la Palabra de Dios. 2) Ponernos la nueva personalidad. 3) Buscar el cobijo espiritual que Jehová nos da."
        }
      ],
      biblicalCards: []
    }
  ],
  paragraphs: [
    {
      number: 1,
      content: "JEHOVÁ creó a los seres humanos con ciertas necesidades básicas. Por ejemplo, todos necesitamos comida, ropa y cobijo. Estas cosas son tan importantes que si llegaran a faltarnos, aunque fuera por poco tiempo, la vida se complicaría. Pero Jehová también nos hizo con necesidades espirituales (lea Mateo 5:3). Si queremos ser verdaderamente felices, tenemos que reconocer que las tenemos y nunca dejar de satisfacerlas.",
      summary: "Jehová nos creó con **tres necesidades básicas**: comida, ropa y cobijo. Pero también nos hizo con **necesidades espirituales**. Para ser **verdaderamente felices**, tenemos que reconocerlas y **nunca dejar de satisfacerlas**."
    },
    {
      number: 2,
      content: "¿Qué quiso decir Jesús cuando habló de \"los que reconocen sus necesidades espirituales\"? En griego, esa expresión transmite literalmente la idea de ser mendigos del espíritu. Para entenderlo mejor, imaginemos a un hombre muy pobre, vestido de harapos y sentado en una esquina, expuesto al calor del día y al frío de la noche. Está demacrado y débil porque no tiene comida. Y debido a su mal aspecto la gente lo evita. El mendigo sabe muy bien que necesita ayuda para mejorar su situación en la vida. Lo mismo pasa con los mendigos del espíritu, es decir, con quienes reconocen sus necesidades espirituales. Están muy al tanto de lo desesperada que es su situación y de que necesitan ayuda para mejorarla. Por eso están deseosos de aprovechar la gran cantidad de regalos espirituales que Jehová les da a quienes lo aman.",
      summary: "En griego, la expresión significa ser **«mendigos del espíritu»**. Como un hombre **muy pobre** que sabe que necesita ayuda, quienes reconocen sus necesidades espirituales están **deseosos** de aprovechar los **regalos espirituales** de Jehová."
    },
    {
      number: 3,
      content: "En este artículo primero hablaremos de la mujer fenicia que le rogó a Jesús que la ayudara. Veremos que ella demostró tres cualidades que son imprescindibles para quienes reconocen sus necesidades espirituales. Luego analizaremos el ejemplo de tres hombres muy espirituales: los apóstoles Pedro y Pablo, y el rey David.",
      summary: "El artículo analiza a la **mujer fenicia** y sus **tres cualidades imprescindibles**, y luego el ejemplo de **Pedro**, **Pablo** y **David**."
    },
    {
      number: 4,
      content: "En una ocasión, una mujer fenicia fue adonde estaba Jesús porque su hija estaba \"cruelmente poseída por un demonio\" (Mat. 15:21-28). Se le acercó y se arrodilló suplicándole ayuda. Esta mujer demostró cualidades sobresalientes. Veamos algunas de ellas.",
      summary: "Una **mujer fenicia** fue a Jesús porque su hija estaba **«cruelmente poseída por un demonio»**. Se **arrodilló** suplicándole ayuda y demostró cualidades **sobresalientes**."
    },
    {
      number: 5,
      content: "La mujer fenicia demostró verdadera humildad. ¿Cómo lo sabemos? Ella no se ofendió cuando Jesús la comparó a un perrito, una mascota que posiblemente era habitual en las familias no judías. ¿Cómo habríamos reaccionado nosotros? ¿Nos habríamos sentido insultados y nos habríamos dado la vuelta sin pedirle ayuda? La mujer fenicia no lo hizo. Ella fue humilde. Además, demostró persistencia, pues le rogó a Jesús una y otra vez que la ayudara. ¿Por qué insistió tanto? Porque tenía fe en él. De hecho, Jesús vio que la mujer tenía una fe tan grande que decidió hacer algo sorprendente. Aunque le había dicho que se le envió para ayudar solo \"a las ovejas perdidas de la nación de Israel\", expulsó al demonio que atormentaba a su hija.",
      summary: "La mujer demostró **verdadera humildad** al no ofenderse cuando Jesús la comparó a un **perrito**. Mostró **persistencia** al rogarle una y otra vez. Y tenía una **fe** tan grande que Jesús expulsó al **demonio** de su hija."
    },
    {
      number: 6,
      content: "Para satisfacer nuestras necesidades espirituales tenemos que ser como la mujer fenicia. Debemos ser humildes y persistentes y tener una fe fuerte. Únicamente si somos humildes le pediremos con insistencia a Dios que nos ayude. También es importante que tengamos una fe fuerte en Jesucristo y confiemos en quienes está usando para dirigir a sus discípulos (Mat. 24:45-47). Jehová y su Hijo se sienten felices de cubrir las necesidades espirituales de quienes demuestran estas cualidades (compare con Santiago 1:5-7). Veamos ahora cómo nos da Jehová alimento, ropa y cobijo en sentido espiritual, y qué tenemos que hacer para beneficiarnos de su ayuda. Para ello, analizaremos el ejemplo de Pedro, Pablo y David.",
      summary: "Para satisfacer nuestras necesidades espirituales debemos ser **humildes**, **persistentes** y tener **fe fuerte**. Debemos confiar en quienes Jehová usa para **dirigir a sus discípulos**. Él se siente feliz de **cubrir** las necesidades de quienes demuestran estas cualidades."
    },
    {
      number: 7,
      content: "Pensemos en el ejemplo del apóstol Pedro. Él fue uno de los primeros judíos en reconocer que Jesús era el Mesías. Sabía que Jehová lo estaba usando para alimentar a su pueblo con \"palabras de vida eterna\" (Juan 6:66-68). Antes de subir al cielo, Jesús le dijo a Pedro: \"Alimenta a mis ovejitas\" (Juan 21:17). El apóstol cumplió fielmente con esa tarea, y Jehová incluso lo usó para escribir dos cartas que llegaron a formar parte de la Biblia. Pero Pedro también necesitaba alimentarse espiritualmente. Por ejemplo, estudió las cartas que el apóstol Pablo había escrito por inspiración. Pedro admitió que en ellas había \"cosas difíciles de entender\" (2 Ped. 3:15, 16). Sin embargo, persistió y tuvo fe en que Jehová lo ayudaría a digerir —es decir, a entender y aplicar— el \"alimento sólido\" que Pablo había escrito en sus cartas (lea Hebreos 5:14-6:1).",
      summary: "**Pedro** reconoció a Jesús como **el Mesías** y recibió la tarea de **«alimentar a mis ovejitas»**. Pero también necesitaba alimentarse: estudió las cartas de **Pablo** que tenían **«cosas difíciles de entender»**, con persistencia y fe."
    },
    {
      number: 8,
      content: "Pedro demostró que tenía fe en Jehová, pues obedeció sus instrucciones. Pensemos en la visión que recibió en la ciudad de Jope. El representante de Dios le dijo que matara y comiera unos animales que, según la Ley mosaica, eran impuros. ¡Hacer eso era impensable para cualquier judío! Por lo que Pedro respondió: \"De ninguna manera, Señor. Nunca he comido nada contaminado o impuro\". Pero luego recibió esta instrucción: \"Deja de llamar contaminadas a las cosas que Dios ha purificado\" (Hech. 10:9-15). Después de recibir la visión, llegaron tres hombres y le dijeron que su amo, Cornelio, quería que fuera a su casa a hablar con él. Antes de esa visión, Pedro jamás hubiera puesto un pie en la casa de Cornelio, pues no era judío, y los judíos pensaban que la gente de otras naciones era impura (Hech. 10:28, 29). ¿Cambió el apóstol su manera de ver las cosas? Sí, pues entendió que Jehová estaba dando una nueva iluminación espiritual, y la aceptó de inmediato (Prov. 4:18). Les predicó a Cornelio y a todos los que estaban en su casa, y tuvo la alegría de verlos aceptar la verdad, recibir espíritu santo y bautizarse (Hech. 10:44-48).",
      summary: "En **Jope**, Jehová le mostró a Pedro una visión sobre **animales impuros**. Pedro entendió la **nueva iluminación espiritual** y la aceptó de inmediato. Predicó a **Cornelio** y su familia, quienes aceptaron la verdad y se **bautizaron**."
    },
    {
      number: 9,
      content: "Al igual que Pedro, debemos alimentarnos de las enseñanzas básicas de la Palabra de Dios, que son como leche. También es importante desarrollar un fuerte deseo por el alimento espiritual sólido, verdades que a lo mejor son más difíciles de entender. Claro, se necesita tiempo y esfuerzo para entender las verdades más profundas de la Biblia. Pero sin duda vale la pena, pues obtenemos muchos beneficios. Pensemos en dos de ellos. Por un lado, aprendemos cosas sobre Jehová que nos motivan a quererlo y respetarlo más. Por otro, nos sentimos más impulsados a hablarles a otros de lo maravilloso que es nuestro Padre celestial (Rom. 11:33; Apoc. 4:11). Y hay una lección adicional que sacamos del ejemplo de Pedro: cuando la organización cambia su manera de entender una verdad bíblica, tenemos que aceptar ese cambio sin demora. Esa es la única manera de seguir estando bien alimentados espiritualmente y de seguir siendo útiles para Jehová.",
      summary: "Debemos alimentarnos de las enseñanzas **básicas** y del **alimento sólido**. **Dos beneficios**: amamos más a Jehová y nos sentimos más **impulsados a predicar**. Lección de Pedro: aceptar los **cambios de entendimiento sin demora**."
    },
    {
      number: 10,
      content: "Jehová también nos da ropa espiritual que debemos ponernos para agradarle. ¿A qué ropa nos referimos? El apóstol Pablo dio este consejo: \"Quítense la vieja personalidad\". Y luego dijo: \"Vístanse con la nueva personalidad\" (lea Colosenses 3:8-10). \"Ponernos\" las cualidades de la nueva personalidad requiere un esfuerzo constante. Pensemos en el propio Pablo. Desde muy joven, puso todo su empeño en agradar a Dios (Gál. 1:14; Filip. 3:4, 5). Sin embargo, como le faltaba conocimiento exacto del propósito de Dios, era muy pobre espiritualmente. Por ejemplo, no conocía las enseñanzas de Cristo. Y, si a su ignorancia espiritual le sumamos su orgullo, el resultado era un hombre \"insolente\", que andaba vestido con una personalidad desagradable (1 Tim. 1:13).",
      summary: "**Pablo** aconsejó **«quítense la vieja personalidad»** y **«vístanse con la nueva»**. Requiere **esfuerzo constante**. Antes de ser cristiano, Pablo era **«insolente»** por su **orgullo** y falta de **conocimiento exacto**."
    },
    {
      number: 11,
      content: "Antes de ser cristiano, Pablo era, por decirlo así, de mecha corta. De hecho, la Biblia dice que estaba tan furioso con los seguidores de Jesús que seguía amenazándolos y \"deseaba asesinarlos\" (Hech. 9:1). Después de hacerse cristiano, sin duda se esforzó al máximo por quitarse de encima esa parte de su vieja personalidad (Efes. 4:22, 31). Aun así, cuando en cierta ocasión tuvo un desacuerdo con Bernabé, se produjo entre ellos \"un fuerte estallido de ira\" (Hech. 15:37-39). Eso fue un paso atrás en su lucha por controlar su carácter, pero no se dio por vencido. Al contrario, continuó peleando con todas sus fuerzas contra sus imperfecciones para conservar la aprobación de Dios (1 Cor. 9:27).",
      summary: "Antes de ser cristiano, **Pablo** era **de mecha corta**: **amenazaba** a los discípulos y **«deseaba asesinarlos»**. Después de convertirse, tuvo un **«fuerte estallido de ira»** con **Bernabé**, pero **no se dio por vencido** y siguió luchando."
    },
    {
      number: 12,
      content: "¿Cómo logró Pablo quitarse su vieja personalidad y ponerse la nueva? Pues no confiando en sus propias fuerzas (Filip. 4:13). Al igual que Pedro, dependía \"de la fuerza que Dios da\" (1 Ped. 4:11). Aun así, a veces cometía errores y se desanimaba. En esos momentos, pensaba en todas las cosas buenas que su Padre celestial había hecho por él, y así recobraba las fuerzas para seguir en su lucha (Rom. 7:21-25).",
      summary: "Pablo logró cambiar **no confiando en sus propias fuerzas**, sino dependiendo de **«la fuerza que Dios da»**. Cuando se desanimaba, pensaba en las **cosas buenas** que Jehová había hecho por él y **recobraba las fuerzas**."
    },
    {
      number: 13,
      content: "Ya sea que llevemos poco o mucho tiempo sirviendo a Jehová, todos podemos imitar a Pablo. ¿De qué manera? Haciendo un esfuerzo continuo por quitarnos la vieja personalidad y ponernos la nueva, la ropa espiritual que Jehová nos da. Si damos un paso atrás en nuestra lucha por controlar, por ejemplo, nuestro carácter o nuestra lengua, no pensemos que somos un caso perdido. Al contrario, sigamos poniendo todo nuestro empeño en transformar nuestra manera de pensar y actuar (Rom. 12:1, 2; Efes. 4:24). Eso sí, hay una cosa muy importante que no debemos olvidar: la nueva personalidad no es como una prenda de ropa que podamos ajustar a nuestro gusto o medida; más bien, somos nosotros los que tenemos que cambiar nuestra forma de ser para adaptarnos a lo que Dios espera de nosotros.",
      summary: "Imitamos a Pablo haciendo un **esfuerzo continuo** por ponernos la **nueva personalidad**. Si damos un paso atrás, **no rendirnos**. La nueva personalidad no se ajusta a nuestro gusto: somos **nosotros** los que debemos **cambiar** para adaptarnos a lo que Dios espera."
    },
    {
      number: 14,
      content: "No basta con el alimento y la ropa espirituales para ser verdaderamente felices. También hace falta tener cobijo o protección espiritual. Veamos en detalle en qué consiste y qué tenemos que hacer para seguir beneficiándonos de este regalo de Jehová.",
      summary: "No basta con el **alimento** y la **ropa espirituales**. También hace falta **cobijo** o protección espiritual para ser verdaderamente felices."
    },
    {
      number: 15,
      content: "El rey David sabía que podía contar con la protección de Jehová, que podía refugiarse en él (lea Salmo 27:5). Ahora bien, ¿cómo protege Jehová a su pueblo hoy en día? Asegurándose de que nada ni nadie logre acabar con la fe de sus siervos. Promete que ningún arma que se fabrique contra nosotros dará resultado (Sal. 34:7; Is. 54:17). Aunque Satanás, los demonios y quienes nos persiguen son poderosos, no pueden hacernos ningún daño irreparable. Incluso si nos quitan la vida, Jehová nos la devolverá (1 Cor. 15:55-57; Apoc. 21:3, 4). Además de protegernos de cosas externas, nuestro Padre nos ayuda a lidiar con nuestras preocupaciones para que podamos seguir sirviéndole (Prov. 12:25; Mat. 6:27-29). También, como nos quiere mucho, nos da una gran familia de hermanos espirituales que nos apoyan y pastores que nos cuidan (Is. 32:1, 2). Y en nuestras reuniones aprendemos otras maneras de beneficiarnos del cobijo que nos brinda Jehová (Heb. 10:24, 25).",
      summary: "**David** confiaba en la **protección de Jehová**. Hoy, Jehová se asegura de que nada acabe con nuestra **fe**. **Ningún arma** contra nosotros dará resultado. Nos ayuda con nuestras **preocupaciones**, nos da una **familia espiritual** y **pastores** que nos cuidan."
    },
    {
      number: 16,
      content: "Cuando David obedeció a Jehová, este lo ayudó a tomar buenas decisiones que lo protegieron de las consecuencias que sufren quienes no respetan las normas de Dios (compare con Proverbios 5:1, 2). Claro, cuando David fue desobediente, Jehová no lo protegió de las consecuencias de sus acciones (2 Sam. 12:9, 10). ¿Y qué pasó cuando David sufrió por culpa de otros? Se refugió en la oración, y Jehová lo protegió dándole consuelo y asegurándole que lo quería mucho y que cuidaría de él (Sal. 23:1-6).",
      summary: "Cuando **David** obedeció, Jehová lo ayudó a tomar **buenas decisiones**. Cuando **desobedeció**, no lo protegió de las **consecuencias**. Cuando sufrió por otros, se refugió en la **oración** y Jehová le dio **consuelo**."
    },
    {
      number: 17,
      content: "Imitamos a David recurriendo a Jehová cuando tenemos que tomar decisiones. También somos conscientes de que, si tomamos malas decisiones, Jehová no nos protegerá de las consecuencias negativas que tal vez suframos (Gál. 6:7, 8). Y, cuando afrontamos dificultades por culpa de otros, nos refugiamos en la oración con la confianza de que Jehová protegerá nuestros corazones y nuestras mentes (Filip. 4:6, 7).",
      summary: "Imitamos a David recurriendo a **Jehová** al tomar **decisiones**. Si tomamos malas decisiones, no nos protegerá de las **consecuencias**. Ante dificultades por otros, nos refugiamos en la **oración** confiando en que protegerá nuestros **corazones y mentes**."
    },
    {
      number: 18,
      content: "El texto del año 2026 dice: \"Felices los que reconocen sus necesidades espirituales\". Y ahora más que nunca es importante que pongamos en práctica esas palabras. Vivimos rodeados de personas que son infelices porque se niegan a aceptar que tienen necesidades espirituales o tratan de llenar ese vacío adorando a Dios a su manera o recurriendo a filosofías humanas. Por nada del mundo queremos que se nos pegue esa actitud. Así que no dejemos de satisfacer nuestras necesidades espirituales: sigamos alimentándonos de la Palabra de Dios, poniéndonos la nueva personalidad y buscando el cobijo espiritual que Jehová nos da.",
      summary: "Vivimos rodeados de personas **infelices** que no reconocen sus necesidades espirituales o las llenan con **filosofías humanas**. Debemos seguir **alimentándonos**, **vistiéndonos** y **cobijándonos** espiritualmente con la ayuda de Jehová."
    }
  ],
  reviewQuestions: [
    {
      question: "¿Qué podemos hacer para aprovechar el alimento espiritual que nos da Jehová?",
      answer: [
        "Alimentarnos tanto de las enseñanzas **básicas** como del **alimento espiritual sólido**.",
        "**Persistir** en estudiar verdades que pueden ser difíciles de entender, como hizo **Pedro** con las cartas de Pablo.",
        "Cuando la organización cambia su entendimiento de una verdad bíblica, **aceptar el cambio sin demora**.",
        "Así seguiremos estando **bien alimentados** espiritualmente y seremos **útiles para Jehová**."
      ]
    },
    {
      question: "¿Qué podemos hacer para aprovechar la ropa espiritual que nos da Jehová?",
      answer: [
        "Hacer un **esfuerzo continuo** por quitarnos la **vieja personalidad** y ponernos la **nueva**.",
        "No confiar en nuestras propias fuerzas, sino depender de **«la fuerza que Dios da»**, como hizo **Pablo**.",
        "Si damos un paso atrás, **no rendirnos** sino seguir luchando contra nuestras imperfecciones.",
        "Recordar que somos **nosotros** los que debemos cambiar para adaptarnos a lo que Dios espera."
      ]
    },
    {
      question: "¿Qué podemos hacer para aprovechar el cobijo espiritual que nos da Jehová?",
      answer: [
        "**Recurrir a Jehová** cuando tenemos que tomar decisiones, como hizo **David**.",
        "**Refugiarnos en la oración** cuando afrontamos dificultades, confiando en que Jehová protegerá nuestros corazones y mentes.",
        "Aprovechar la **familia espiritual** y los **pastores** que Jehová nos da.",
        "Asistir a las **reuniones** para aprender más maneras de beneficiarnos de su cobijo."
      ]
    }
  ],
  finalSong: "Canción 162: Mi necesidad espiritual",
  articleSummary: {
    keyPoints: [
      {
        order: 1,
        statement: "Jehová nos creó con **necesidades espirituales** además de las básicas; para ser felices debemos reconocerlas como **«mendigos del espíritu»**.",
        bibleReference: "Mateo 5:3",
        paragraphSource: 1
      },
      {
        order: 2,
        statement: "La **mujer fenicia** demostró **humildad, persistencia y fe**, tres cualidades imprescindibles para satisfacer nuestras necesidades espirituales.",
        bibleReference: "Mateo 15:21-28",
        paragraphSource: 5
      },
      {
        order: 3,
        statement: "Como **Pedro**, debemos alimentarnos del **alimento sólido** y aceptar los cambios de entendimiento **sin demora**.",
        bibleReference: "Hebreos 5:14-6:1",
        paragraphSource: 8
      },
      {
        order: 4,
        statement: "Como **Pablo**, debemos ponernos la **nueva personalidad** con esfuerzo continuo, dependiendo de **«la fuerza que Dios da»**.",
        bibleReference: "Colosenses 3:8-10",
        paragraphSource: 12
      },
      {
        order: 5,
        statement: "Como **David**, debemos buscar el **cobijo de Jehová** al tomar decisiones y refugiarnos en la **oración**.",
        bibleReference: "Salmo 27:5",
        paragraphSource: 16
      }
    ],
    centralIdea: "Para ser verdaderamente felices, debemos reconocer nuestras necesidades espirituales y seguir satisfaciéndolas con el alimento, la ropa y el cobijo espirituales que Jehová nos da."
  }
};
