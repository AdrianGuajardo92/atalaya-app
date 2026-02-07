import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS DEL ARTÍCULO 49
// "Cómo nos ayuda el libro de Job a dar buenos consejos"
// ============================================
export const biblicalTexts49: Record<string, { reference: string; text: string }[]> = {
  "LEE Proverbios 27:9": [
    { reference: "Proverbios 27:9", text: "El aceite y el incienso alegran el corazón; lo mismo hace la dulzura de un amigo con su consejo sincero." }
  ],
  "LEE Job 33:6, 7": [
    { reference: "Job 33:6", text: "Mira, ante el Dios verdadero yo soy igual que tú; yo también fui formado de un pedazo de arcilla." },
    { reference: "Job 33:7", text: "Por eso no tienes que temerme ni sentirte abrumado por mi presencia." }
  ],
  "LEE Job 33:1": [
    { reference: "Job 33:1", text: "Sin embargo, Job, por favor, escucha lo que digo; presta atención a todas mis palabras." }
  ]
};

// ============================================
// DATOS DEL ARTÍCULO 49
// ============================================
export const article49: ArticleData = {
  metadata: {
    articleNumber: 49,
    week: "9-15 Feb",
    month: "Diciembre",
    year: 2025
  },
  song: "Canción 44: Una súplica ferviente",
  title: "Cómo nos ayuda el libro de Job a dar buenos consejos",
  biblicalText: "\"Ahora, Job, oye mis palabras, por favor\" (JOB 33:1).",
  theme: "El libro de Job nos enseña a dar buenos consejos.",
  questions: [
    {
      number: "1, 2",
      textEs: "¿En qué situación difícil están Elihu y los tres conocidos de Job?",
      textLSM: "",
      paragraphs: [1, 2],
      answer: [
        "**Job**, un hombre muy rico y famoso, **lo ha perdido todo**.",
        "Tres conocidos suyos —**Elifaz, Bildad y Zofar**— deciden ir a consolarlo.",
        "Job tiene el cuerpo lleno de **úlceras dolorosas** y está sentado entre unas cenizas.",
        "Los tres hombres se quedan **siete días enteros totalmente callados**.",
        "Finalmente, Job **rompe el silencio** para maldecir el día de su nacimiento y **desear la muerte**."
      ],
      flashcards: [
        {
          question: "¿Cómo reaccionaron los tres conocidos de Job al verlo?",
          answer: "Se sentaron al lado de él y se quedaron siete días enteros totalmente callados, sin decirle una sola palabra."
        },
        {
          question: "¿Qué hizo Job después de los siete días de silencio?",
          answer: "Rompió el silencio para maldecir el día de su nacimiento y desear la muerte."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 2:12, 13",
          purpose: "Los amigos de Job guardan silencio",
          text: "Cuando levantaron la vista a cierta distancia, no reconocieron a Job. Se echaron a llorar en alta voz, se rasgaron la ropa y lanzaron polvo al aire. Luego se sentaron con él en el suelo siete días y siete noches. Ninguno le dijo una palabra, porque podían ver que su dolor era muy intenso."
        }
      ]
    },
    {
      number: "3",
      textEs: "¿Qué vamos a ver en este artículo?",
      textLSM: "",
      paragraphs: [3],
      answer: [
        "**Jehová** hizo que **Moisés** pusiera por escrito lo que hicieron y dijeron los tres conocidos de Job y **Elihu**.",
        "Las cosas que dijo Elihu fueron **inspiradas por Jehová**.",
        "Algunas de las cosas que dijo Elifaz fueron **inspiradas por un espíritu malvado**.",
        "El libro de Job contiene algunos de **los mejores consejos** de la historia, pero también algunos de **los peores**.",
        "Primero analizaremos el **mal ejemplo** de los tres conocidos de Job y luego el **buen ejemplo de Elihu**."
      ],
      flashcards: [
        {
          question: "¿Quién inspiró las palabras de Elihu?",
          answer: "Jehová."
        },
        {
          question: "¿Quién inspiró algunas de las palabras de Elifaz?",
          answer: "Un espíritu malvado (Job 4:12-16)."
        }
      ]
    },
    {
      number: "4",
      textEs: "¿Por qué los tres conocidos de Job no consiguieron consolarlo? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [4],
      section: "LOS CONSEJOS DE ELIFAZ, BILDAD Y ZOFAR",
      image: "",
      imageCaption: "Al darle un consejo a alguien, no le hagamos sentir que nos creemos superiores; nuestro objetivo debe ser ayudarlo.",
      answer: [
        "Primero, sacaron **conclusiones precipitadas** dando por sentado que Dios estaba **castigando a Job** por algún pecado.",
        "Segundo, muchos de sus consejos fueron de **poca ayuda, insensibles e incluso hirientes**.",
        "Tercero, muchas veces le hablaron con **aires de superioridad** y en un tono **prepotente, sarcástico y condenatorio**.",
        "Lo que estos hombres buscaban no era **consolar a Job** sino **demostrar que estaba equivocado**."
      ],
      flashcards: [
        {
          question: "¿Cuáles son los tres errores que cometieron los conocidos de Job?",
          answer: "1) Sacaron conclusiones precipitadas, 2) dieron consejos insensibles e hirientes, 3) le hablaron con aires de superioridad."
        },
        {
          question: "¿Qué buscaban en realidad los tres conocidos de Job?",
          answer: "No buscaban consolar a Job ni fortalecer su fe, sino demostrar que estaba equivocado."
        }
      ]
    },
    {
      number: "5",
      textEs: "¿Qué consiguieron Elifaz, Bildad y Zofar con sus consejos?",
      textLSM: "",
      paragraphs: [5],
      answer: [
        "Sus consejos hicieron sentir **aplastado** a Job.",
        "Job sintió la necesidad de **defender su reputación** y eso lo llevó a decir **cosas fuera de lugar**.",
        "Expresaron ideas que **no reflejaban el punto de vista de Dios** y trataron a Job **sin compasión**.",
        "Sin darse cuenta se convirtieron en **herramientas en manos de Satanás**."
      ],
      flashcards: [
        {
          question: "¿Cómo hicieron sentir a Job los consejos de sus tres conocidos?",
          answer: "Lo hicieron sentir aplastado (Job 19:2)."
        },
        {
          question: "¿En qué se convirtieron Elifaz, Bildad y Zofar sin darse cuenta?",
          answer: "En herramientas en manos de Satanás."
        }
      ]
    },
    {
      number: "6",
      textEs: "¿Qué es posible que aprendieran los ancianos de Israel del mal ejemplo de Elifaz, Bildad y Zofar?",
      textLSM: "",
      paragraphs: [6],
      answer: [
        "Los jueces o ancianos tenían que **escuchar con mucha atención** antes de dar un consejo.",
        "Debían **investigar bien** los asuntos y hacer preguntas **sin dar por sentado** que ya conocían todos los hechos.",
        "Tenían que hablarle **con bondad y no con dureza** a quienes les pedían ayuda.",
        "Si les hacían sentir que eran una molestia, **no se atreverían a abrirles su corazón**."
      ],
      flashcards: [
        {
          question: "¿Qué debían hacer los ancianos de Israel antes de dar un consejo?",
          answer: "Escuchar con mucha atención, investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocían todos los hechos."
        }
      ],
      biblicalCards: [
        {
          reference: "Deuteronomio 1:15-18",
          purpose: "Los jueces debían juzgar con justicia",
          text: "Así que tomé a los hombres principales de sus tribus, hombres sabios y experimentados, y los designé líderes sobre ustedes. Les ordené a sus jueces: 'Escuchen con cuidado a sus hermanos y juzguen con justicia'."
        },
        {
          reference: "Éxodo 22:22-24",
          purpose: "Jehová escucha a los afligidos",
          text: "No deben maltratar a ninguna viuda ni a ningún huérfano. Si los maltratan y ellos claman a mí, yo sin falta escucharé su clamor."
        }
      ]
    },
    {
      number: "7",
      textEs: "Además de los ancianos, ¿quiénes en Israel podían aconsejar a otros, y qué podrían aprender del relato de Job? (Proverbios 27:9).",
      textLSM: "",
      paragraphs: [7],
      readText: "LEE Proverbios 27:9",
      answer: [
        "**Cualquier persona** —fuera joven o mayor, hombre o mujer— podía darle consejos a alguien que lo necesitara.",
        "Podían aconsejar para ayudar a **acercarse más a Jehová** o para **corregir algún aspecto** de la conducta.",
        "Eso es lo que se espera de **un amigo de verdad**.",
        "Al pensar en el **mal ejemplo** de los tres conocidos de Job, podrían aprender **lo que no debían decir ni hacer** al aconsejar a otros."
      ],
      flashcards: [
        {
          question: "¿Quiénes en Israel podían dar consejos?",
          answer: "Cualquier persona —fuera joven o mayor, hombre o mujer— podía darle consejos a alguien que lo necesitara."
        }
      ],
      biblicalCards: [
        {
          reference: "Proverbios 27:9",
          purpose: "El consejo sincero es valioso",
          text: "El aceite y el incienso alegran el corazón; de igual manera, el consejo sincero de un amigo es dulce para el alma."
        },
        {
          reference: "Salmo 141:5",
          purpose: "El consejo del justo es beneficioso",
          text: "Que el justo me golpee —será un acto leal— y que me corrija. Es como aceite sobre la cabeza; mi cabeza no lo rechazará."
        }
      ]
    },
    {
      number: "8",
      textEs: "¿Qué errores debemos evitar al dar un consejo? (Vea también las imágenes).",
      textLSM: "",
      paragraphs: [8],
      image: "",
      imageCaption: "Cuando hablemos con alguien, 1) asegurémonos de conocer todos los hechos, 2) usemos la Palabra de Dios y 3) expresémonos con cariño.",
      answer: [
        "Primero, antes de decir nada tenemos que asegurarnos de **conocer todos los hechos**, y no sacar **conclusiones precipitadas**.",
        "Segundo, tenemos que basarnos siempre en la verdad de **la Palabra de Dios** y no en nuestra propia **opinión o experiencia**.",
        "Tercero, **jamás debemos usar un tono duro o crítico**.",
        "Nunca debemos darle a entender a la persona que **Jehová es irrazonable** o que es **imposible que la quiera**."
      ],
      flashcards: [
        {
          question: "¿Cuáles son los tres errores que debemos evitar al dar un consejo?",
          answer: "1) Sacar conclusiones precipitadas, 2) basarnos en nuestra opinión en vez de la Palabra de Dios, 3) usar un tono duro o crítico."
        },
        {
          question: "¿Qué dijo Jehová sobre lo que afirmaron Elifaz, Bildad y Zofar?",
          answer: "Que no habían dicho la verdad sobre él (Job 42:7, 8)."
        }
      ]
    },
    {
      number: "9",
      textEs: "¿Por qué seguía Job necesitando ayuda, y cómo se la dio Jehová?",
      textLSM: "",
      paragraphs: [9],
      section: "LOS CONSEJOS DE ELIHU",
      answer: [
        "El debate entre Job y sus tres conocidos fue tan largo que ocupa **28 capítulos** de la Biblia.",
        "Job seguía sintiéndose muy **desanimado** y necesitando **consuelo y corrección**.",
        "**Jehová** utilizó a **Elihu** para aconsejarlo.",
        "Elihu esperó para intervenir porque era **joven** y los otros eran **hombres de edad**.",
        "Dijo: **'La edad por sí misma no hace a alguien sabio'**."
      ],
      flashcards: [
        {
          question: "¿Por qué esperó tanto Elihu para intervenir?",
          answer: "Porque era joven y los otros eran hombres de edad. Dijo: 'Yo soy joven y ustedes son hombres de edad. Así que me quedé callado por respeto'."
        },
        {
          question: "¿Qué dijo Elihu sobre la edad y la sabiduría?",
          answer: "'La edad por sí misma no hace a alguien sabio ni son solo los hombres de edad los que comprenden lo que es correcto' (Job 32:9)."
        }
      ]
    },
    {
      number: "10",
      textEs: "¿Qué hizo Elihu antes de aconsejar a Job? (Job 33:6, 7).",
      textLSM: "",
      paragraphs: [10],
      readText: "LEE Job 33:6, 7",
      answer: [
        "Elihu se aseguró de **calmar el ambiente** y **preparar el terreno**.",
        "**Controló sus propias emociones**, aunque al principio estaba muy enojado.",
        "En ningún momento le habló en un tono **duro o cruel**, sino con **bondad y cariño**.",
        "Resumió las **ideas principales de Job** dejando claro que le había estado **prestando mucha atención**."
      ],
      flashcards: [
        {
          question: "¿Qué hizo Elihu para preparar el terreno antes de aconsejar?",
          answer: "Controló sus emociones, habló con bondad y cariño, y resumió las ideas de Job mostrando que le había prestado atención."
        },
        {
          question: "¿Qué le dijo Elihu a Job para calmarlo?",
          answer: "'Mira, para el Dios verdadero, yo soy igual que tú' (Job 33:6)."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 33:6, 7",
          purpose: "Elihu se presenta con humildad",
          text: "Mira, para el Dios verdadero, yo soy igual que tú; yo también fui formado de arcilla. Mira, no tienes por qué tenerme miedo; no te aplastaré con mi mano."
        },
        {
          reference: "Job 32:2-5",
          purpose: "Elihu estaba enojado pero se controló",
          text: "Entonces Elihu hijo de Baraquel el buzita, de la familia de Ram, se encendió de ira. Se enojó muchísimo con Job porque este pensaba que tenía más razón que Dios. También se enojó con los tres compañeros de Job porque no habían podido rebatirlo."
        }
      ]
    },
    {
      number: "11",
      textEs: "¿Cómo aconsejó Elihu a Job? (Job 33:1).",
      textLSM: "",
      paragraphs: [11],
      readText: "LEE Job 33:1",
      answer: [
        "Lo hizo con **muchísimo respeto** y **sin humillarlo**.",
        "Se dirigió a él **por su nombre**, cosa que los otros tres no hicieron.",
        "Le ofreció la **oportunidad de responderle**.",
        "Le recordó que **Jehová** es muy **sabio, poderoso, justo, leal y amoroso**.",
        "Las buenas palabras de Elihu hicieron que Job estuviera dispuesto a recibir **más corrección de Jehová**."
      ],
      flashcards: [
        {
          question: "¿Qué hizo Elihu que los otros tres conocidos no hicieron?",
          answer: "Se dirigió a Job por su nombre y le ofreció la oportunidad de responderle."
        },
        {
          question: "¿Qué efecto tuvieron las palabras de Elihu en Job?",
          answer: "Lo prepararon para estar dispuesto a recibir más corrección directamente de Jehová."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 33:1",
          purpose: "Elihu se dirige a Job con respeto",
          text: "Ahora, Job, oye mis palabras, por favor, y escucha todo lo que digo."
        },
        {
          reference: "Job 33:32",
          purpose: "Elihu invita a Job a responder",
          text: "Si tienes algo que decir, respóndeme. Habla, porque quiero que se te declare justo."
        }
      ]
    },
    {
      number: "12",
      textEs: "¿Cómo utilizó Jehová a los profetas para ayudar a su pueblo, y qué podrían aprender los israelitas del buen ejemplo de Elihu?",
      textLSM: "",
      paragraphs: [12],
      answer: [
        "**Jehová** nombró **profetas** para enseñar su propósito y corregir a los israelitas.",
        "Utilizó a la profetisa **Débora** y a **Samuel** para dar guía e instrucciones a la nación.",
        "Envió profetas para **fortalecer espiritualmente** al pueblo y **corregir** a quienes se desviaban.",
        "Los hombres y mujeres fieles podrían aprender **lo que debían decir y hacer** al corregir y aconsejar a otros."
      ],
      flashcards: [
        {
          question: "¿Qué profetas usó Jehová durante el periodo de los Jueces?",
          answer: "La profetisa Débora y Samuel, incluso siendo muy joven."
        }
      ],
      biblicalCards: [
        {
          reference: "1 Samuel 3:19, 20",
          purpose: "Samuel fue profeta desde joven",
          text: "Samuel siguió creciendo, y Jehová estaba con él, y no dejó sin cumplir ninguna de sus palabras. Todo Israel, desde Dan hasta Beerseba, llegó a saber que a Samuel se lo había nombrado profeta de Jehová."
        },
        {
          reference: "Jueces 4:4-7",
          purpose: "Débora dio instrucciones a Israel",
          text: "En aquel tiempo, la profetisa Débora, esposa de Lapidot, estaba juzgando a Israel. Ella dijo: 'Ve, porque Jehová te ha ordenado que vayas al monte Tabor'."
        }
      ]
    },
    {
      number: "13",
      textEs: "¿Cómo podemos imitar el ejemplo de Elihu al animar a nuestros hermanos?",
      textLSM: "",
      paragraphs: [13],
      answer: [
        "Los cristianos damos a conocer **la voluntad de Dios** y basamos lo que enseñamos en **la Biblia**.",
        "Cuando ofrecemos consejos, usamos palabras que **animen y edifiquen**.",
        "Los **ancianos** deben recordar siempre la importancia de hablar de manera **cariñosa y reconfortante**.",
        "Incluso con quienes estén **alterados** o suelan decir cosas sin pensar al pasar por **momentos difíciles**."
      ],
      flashcards: [
        {
          question: "¿Qué tipo de palabras debemos usar al dar consejos?",
          answer: "Palabras que animen y edifiquen (1 Cor. 14:3)."
        }
      ],
      biblicalCards: [
        {
          reference: "1 Corintios 14:3",
          purpose: "El propósito de las palabras edificantes",
          text: "Pero el que profetiza edifica, anima y consuela a la gente con lo que dice."
        },
        {
          reference: "1 Tesalonicenses 5:14",
          purpose: "Hablar reconfortantemente a todos",
          text: "Los exhortamos, hermanos: amonesten a los desordenados, consuelen a los abatidos, apoyen a los débiles, sean pacientes con todos."
        }
      ]
    },
    {
      number: "14, 15",
      textEs: "¿Cómo puede un anciano imitar a Elihu?",
      textLSM: "",
      paragraphs: [14, 15],
      answer: [
        "Primero, tratará de **comprender mejor la situación** y los motivos de la tristeza.",
        "Para ello tendrá que **hacer preguntas** y **escuchar con atención**.",
        "Segundo, buscará **cosas positivas** por las que animar a la persona.",
        "Por último, una vez que se haya hecho un **cuadro completo** de lo que ocurre, podrá usar **la Biblia** para ayudar."
      ],
      flashcards: [
        {
          question: "¿Cuáles son los tres pasos que debe seguir un anciano para imitar a Elihu?",
          answer: "1) Comprender la situación haciendo preguntas, 2) buscar cosas positivas por las que animar, 3) usar la Biblia para ayudar."
        },
        {
          question: "¿Qué preguntas podría hacerse un anciano sobre una hermana deprimida?",
          answer: "¿Piensa que no merece el amor de Dios? ¿Se siente aplastada por 'las preocupaciones de la vida'?"
        }
      ],
      biblicalCards: [
        {
          reference: "Gálatas 2:20",
          purpose: "Cristo nos amó y dio su vida por nosotros",
          text: "Ya no soy yo el que vive, sino que es Cristo el que vive unido a mí. Y esta vida que ahora vivo en el cuerpo la vivo por la fe que tengo en el Hijo de Dios, que me amó y se entregó por mí."
        },
        {
          reference: "Lucas 21:34",
          purpose: "Las preocupaciones de la vida",
          text: "Pero tengan cuidado de sí mismos, para que su corazón nunca se les haga pesado por comer demasiado, por beber mucho y por las preocupaciones de la vida."
        }
      ]
    },
    {
      number: "16",
      textEs: "¿Qué debemos hacer para seguir aprendiendo del libro de Job?",
      textLSM: "",
      paragraphs: [16],
      section: "SIGAMOS APRENDIENDO DEL LIBRO DE JOB",
      answer: [
        "Podemos dar **buenos consejos** si evitamos el **mal ejemplo** de los tres conocidos de Job.",
        "Debemos copiar el **buen ejemplo de Elihu**.",
        "La próxima vez que tengamos que dar un consejo, **repasemos las lecciones** de este relato.",
        "Si hace ya tiempo que no hemos leído el **libro de Job**, pongámonos la meta de **volver a hacerlo**."
      ],
      flashcards: [
        {
          question: "¿Qué dos ejemplos del libro de Job debemos recordar al dar consejos?",
          answer: "Evitar el mal ejemplo de Elifaz, Bildad y Zofar, y copiar el buen ejemplo de Elihu."
        }
      ]
    }
  ],
  paragraphs: [
    {
      number: 1,
      content: "POR toda la región, la noticia corre como la pólvora: Job, un hombre muy rico y famoso, lo ha perdido todo. Cuando tres conocidos suyos —Elifaz, Bildad y Zofar— se enteran, deciden viajar a Uz para consolarlo. Pero lo que encuentran al llegar los deja conmocionados.",
      summary: "**Job**, un hombre muy rico y famoso, **lo ha perdido todo**. Tres conocidos suyos —**Elifaz, Bildad y Zofar**— deciden viajar a **Uz** para consolarlo, pero lo que encuentran los deja **conmocionados**."
    },
    {
      number: 2,
      content: "Imaginemos la escena. Job se ha quedado prácticamente sin nada. Todos sus camellos, ovejas, vacas y burros han muerto o se los han robado. También han asesinado a casi todos sus sirvientes, y todos los hijos de Job han fallecido cuando la casa en la que estaban se derrumbó sobre ellos. Por si esto fuera poco, Job está muy enfermo y tiene el cuerpo lleno de úlceras dolorosas. A medida que se acercan, los tres hombres lo ven sentado entre unas cenizas y completamente desolado. ¿Cómo reaccionan? Se sientan al lado de este hombre que está sufriendo tanto y se quedan siete días enteros totalmente callados, sin decirle una sola palabra (Job 2:12, 13). En algún momento llega un hombre joven llamado Elihu y se sienta por allí cerca. Finalmente, Job rompe el silencio para maldecir el día de su nacimiento y desear la muerte (Job 3:1-3, 11).",
      summary: "Job ha perdido **todos sus animales, sirvientes e hijos**, y tiene el cuerpo lleno de **úlceras dolorosas**. Los tres hombres se sientan a su lado y se quedan **siete días callados** (Job 2:12, 13). Llega un joven llamado **Elihu**, y finalmente Job **rompe el silencio** para maldecir el día de su nacimiento."
    },
    {
      number: 3,
      content: "Jehová hizo que Moisés pusiera por escrito lo que hicieron y dijeron tanto los tres conocidos de Job como Elihu. Las cosas que dijo Elihu fueron inspiradas por Jehová, pero es interesante que, al parecer, algunas de las cosas que dijo Elifaz fueron inspiradas por un espíritu malvado (Job 4:12-16; 33:24, 25). Esto explica por qué el libro de Job contiene algunos de los mejores consejos de la historia, pero también algunos de los peores.",
      summary: "**Jehová** hizo que **Moisés** pusiera por escrito lo que dijeron los conocidos de Job y **Elihu**. Las palabras de Elihu fueron **inspiradas por Jehová**, pero algunas de Elifaz fueron **inspiradas por un espíritu malvado** (Job 4:12-16). Por eso el libro contiene **los mejores y los peores consejos**."
    },
    {
      number: 4,
      content: "La Biblia dice que, cuando los tres conocidos de Job se enteraron de todas sus desgracias, \"decidieron ir juntos a compartir el dolor de Job y consolarlo\" (Job 2:11). Pero hay al menos tres motivos por los que no consiguieron ese objetivo. Primero, sacaron conclusiones precipitadas. Por ejemplo, dieron por sentado erróneamente que Dios estaba castigando a Job por algún pecado (Job 4:7; 11:14). Segundo, muchos de sus consejos fueron de poca ayuda, insensibles e incluso hirientes. Por ejemplo, los tres en algún momento le dijeron palabras que sonaban bien pero estaban vacías (Job 13:12). Bildad fue muy desconsiderado y le dijo que hablaba demasiado (Job 8:2). Y Zofar tuvo el descaro de llamarlo disimuladamente \"cabeza hueca\" (Job 11:12). Tercero, aunque tal vez no le gritaron, muchas veces le hablaron con aires de superioridad y en un tono prepotente, sarcástico y condenatorio (Job 15:7-11). En el fondo, lo que estos hombres buscaban no era consolar a Job ni fortalecer su fe, sino demostrar que estaba equivocado.",
      summary: "Hay **tres motivos** por los que no consiguieron consolar a Job: **1)** Sacaron **conclusiones precipitadas** dando por sentado que Dios lo castigaba. **2)** Dieron consejos **insensibles e hirientes**; **Bildad** le dijo que hablaba demasiado y **Zofar** lo llamó \"**cabeza hueca**\". **3)** Le hablaron con **aires de superioridad** y tono **condenatorio**. Lo que buscaban era **demostrar que estaba equivocado**."
    },
    {
      number: 5,
      content: "No es de extrañar que los consejos que estos tres hombres le dieron a Job no tuvieran buen resultado. De hecho, lo hicieron sentir aplastado (Job 19:2). También es comprensible que él sintiera la necesidad de defender su reputación y que eso lo llevara a perder el equilibrio y decir cosas fuera de lugar (Job 6:3, 26). Elifaz, Bildad y Zofar expresaron ideas que no reflejaban el punto de vista de Dios y trataron a Job sin compasión. Al hacer eso, sin darse cuenta se convirtieron en herramientas en manos de Satanás (Job 2:4, 6).",
      summary: "Los consejos de los tres hombres hicieron sentir **aplastado** a Job (Job 19:2) y lo llevaron a **decir cosas fuera de lugar** al defender su reputación. **Elifaz, Bildad y Zofar** expresaron ideas que **no reflejaban el punto de vista de Dios** y, sin darse cuenta, se convirtieron en **herramientas en manos de Satanás**."
    },
    {
      number: 6,
      content: "Cuando se formó la nación de Israel, Jehová eligió a ciertos hombres experimentados para que juzgaran a la nación de acuerdo con sus justas normas (Deut. 1:15-18; 27:1). Estos jueces o ancianos tenían que escuchar con mucha atención antes de dar un consejo o dictar una sentencia (2 Cron. 19:6). También debían investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocían todos los hechos (Deut. 19:18). Cuando alguien venía a pedirles ayuda, tenían que hablarle con bondad y no con dureza. ¿Por qué? Porque, si le hacían sentir que era una molestia, no se atrevería a abrirles su corazón (Ex. 22:22-24).",
      summary: "**Jehová** eligió **jueces y ancianos** para juzgar a Israel según sus normas. Estos debían **escuchar con atención**, **investigar bien** los asuntos y **no dar por sentado** que ya conocían los hechos. Debían hablar **con bondad y no con dureza**, para que las personas se atrevieran a **abrirles su corazón**."
    },
    {
      number: 7,
      content: "Claro está, aquellos ancianos no eran los únicos que podían dar consejos en Israel. En realidad, cualquier persona —fuera joven o mayor, hombre o mujer— podía darle consejos a alguien que lo necesitara para acercarse más a Jehová o para corregir algún aspecto de su conducta (Sal. 141:5). Eso es lo que se espera de un amigo de verdad (lea Proverbios 27:9). Al pensar en el mal ejemplo de los tres conocidos de Job, los israelitas podrían aprender lo que no debían decir ni hacer al aconsejar a otros.",
      summary: "**Cualquier persona** en Israel podía dar consejos para ayudar a otros a **acercarse a Jehová** o **corregir su conducta** (Sal. 141:5). Eso es lo que se espera de **un amigo de verdad** (Proverbios 27:9). El **mal ejemplo** de los tres conocidos de Job enseñaba lo que **no debían hacer** al aconsejar."
    },
    {
      number: 8,
      content: "Como es natural, cuando nuestros hermanos pasan por situaciones difíciles, queremos ayudarlos. Ahora bien, no debemos caer en los mismos errores que los tres conocidos de Job. Primero, antes de decir nada tenemos que asegurarnos de conocer todos los hechos, y no sacar conclusiones precipitadas. Segundo, tenemos que basarnos siempre en la verdad de la Palabra de Dios y no en nuestra propia opinión o experiencia, como hizo Elifaz muchas veces (Job 4:8; 5:3, 27). Y, tercero, jamás debemos usar un tono duro o crítico. Recordemos que Elifaz y compañía dijeron algunas cosas que sí eran ciertas; de hecho, el apóstol Pablo citó por inspiración algunas de sus palabras (compare Job 5:13 con 1 Corintios 3:19). No obstante, la mayor parte de lo que afirmaron sobre Dios era mentira y le hicieron daño a Job, así que Jehová dijo que no habían dicho la verdad (Job 42:7, 8). Al dar un consejo, nunca debemos darle a entender a la persona que Jehová es irrazonable o que es imposible que la quiera.",
      summary: "Debemos evitar **tres errores**: **1)** Sacar **conclusiones precipitadas** sin conocer los hechos. **2)** Basarnos en nuestra **opinión o experiencia** en vez de la **Palabra de Dios**. **3)** Usar un tono **duro o crítico**. **Jehová** dijo que los tres conocidos **no habían dicho la verdad** sobre él (Job 42:7, 8). Nunca debemos darle a entender que **Jehová es irrazonable**."
    },
    {
      number: 9,
      content: "El debate entre Job y sus tres supuestos amigos fue tan largo que sus palabras ocupan 28 capítulos de la Biblia. Y los ánimos debían de estar bastante caldeados, pues la mayor parte del tiempo se dejaron llevar por el enojo y la frustración. Con razón Job seguía sintiéndose muy desanimado y necesitando consuelo y corrección. ¿Qué hizo Jehová para ayudarlo? Utilizó a Elihu para aconsejarlo. Pero ¿por qué esperó tanto Elihu para intervenir? Él mismo explicó: \"Yo soy joven y ustedes son hombres de edad. Así que me quedé callado por respeto\" (Job 32:6, 7). Era consciente de que, por lo general, los mayores cuentan con la sabiduría que viene con los años y la experiencia. Pero, después de escuchar con paciencia a Job y sus conocidos, Elihu decidió que no podía seguir callado. Por eso dijo: \"La edad por sí misma no hace a alguien sabio ni son solo los hombres de edad los que comprenden lo que es correcto\" (Job 32:9).",
      summary: "El debate ocupa **28 capítulos** de la Biblia. Job seguía **desanimado** y necesitando **consuelo y corrección**. **Jehová** utilizó a **Elihu** para aconsejarlo. Elihu esperó porque era **joven** y los otros eran de **edad**, pero dijo: \"**La edad por sí misma no hace a alguien sabio**\" (Job 32:9)."
    },
    {
      number: 10,
      content: "Antes de aconsejar a Job, Elihu se aseguró de calmar el ambiente y preparar el terreno. ¿Cómo? En primer lugar, controlando sus propias emociones. A fin de cuentas, la Biblia dice que al principio estaba muy enojado (Job 32:2-5). Pero luego en ningún momento le habló en un tono duro o cruel, sino al contrario, con bondad y cariño. Por ejemplo, le dijo: \"Mira, para el Dios verdadero, yo soy igual que tú\" (lea Job 33:6, 7). Entonces resumió las ideas principales de seis discursos de Job y así dejó claro que le había estado prestando mucha atención (Job 32:11; 33:8-11). Y volvió a hacer lo mismo cuando más tarde le dio otros consejos (Job 34:5, 6, 9; 35:1-4).",
      summary: "**Elihu** primero **calmó el ambiente** y **preparó el terreno**. **Controló sus emociones** aunque estaba muy enojado (Job 32:2-5). Le habló con **bondad y cariño**, diciendo: \"**Para el Dios verdadero, yo soy igual que tú**\" (Job 33:6, 7). Resumió las ideas de **seis discursos de Job** mostrando que le había **prestado mucha atención**."
    },
    {
      number: 11,
      content: "Cuando Elihu empezó a aconsejar a Job, lo hizo con muchísimo respeto y sin humillarlo. Por ejemplo, se dirigió a él por su nombre, cosa que los otros tres por lo visto no hicieron (lea Job 33:1). Además, con mucha bondad le ofreció la oportunidad de responderle, pues seguramente recordaba que él mismo había querido intervenir en varias ocasiones mientras Job y sus conocidos hablaban (Job 32:4; 33:32). También le advirtió que tuviera cuidado con algunos de sus argumentos y le recordó que Jehová es muy sabio, poderoso, justo, leal y amoroso (Job 36:18, 21-26; 37:23, 24). Sin duda, las buenas palabras de Elihu hicieron que Job estuviera dispuesto a recibir más corrección, ahora directamente de Jehová (Job 38:1-3).",
      summary: "**Elihu** aconsejó a Job con **muchísimo respeto** y **sin humillarlo**. Se dirigió a él **por su nombre** (Job 33:1), cosa que los otros tres **no hicieron**. Le ofreció la **oportunidad de responder** (Job 33:32) y le recordó que **Jehová** es **sabio, poderoso, justo, leal y amoroso**. Sus palabras prepararon a Job para recibir **corrección directa de Jehová**."
    },
    {
      number: 12,
      content: "A lo largo de la historia de Israel, Jehová muchas veces nombró profetas para enseñar su propósito y corregir a los israelitas. Por ejemplo, durante el periodo de los Jueces, utilizó a la profetisa Débora y a Samuel —incluso siendo muy joven— para que le dieran guía e instrucciones a la nación (Juec. 4:4-7; 5:7; 1 Sam. 3:19, 20). Y, durante el periodo de los reyes, envió a un profeta tras otro para fortalecer espiritualmente al pueblo y corregir a quienes se desviaban de la adoración pura (2 Sam. 12:1-4; Hech. 3:24). Al pensar en el buen ejemplo de Elihu, los hombres y mujeres fieles podrían aprender lo que debían decir y hacer al corregir y aconsejar a otros.",
      summary: "**Jehová** nombró **profetas** para enseñar y corregir a Israel. Durante los **Jueces**, usó a la profetisa **Débora** y a **Samuel** siendo muy joven (1 Sam. 3:19, 20). Durante los **reyes**, envió profetas para **fortalecer** al pueblo y **corregir** a quienes se desviaban. El **buen ejemplo de Elihu** enseñaba cómo corregir y aconsejar."
    },
    {
      number: 13,
      content: "Al igual que Elihu y los profetas de Israel, los cristianos damos a conocer la voluntad de Dios y basamos lo que enseñamos en la Biblia. Además, cuando ofrecemos consejos a nuestros hermanos, usamos palabras que los animen y edifiquen (1 Cor. 14:3). Los ancianos en especial tienen que recordar siempre la importancia de hablar de manera cariñosa y reconfortante a todos los hermanos y hermanas, incluso a quienes estén alterados o suelan decir cosas sin pensar al pasar por momentos difíciles (Job 6:3; 1 Tes. 5:14).",
      summary: "Los cristianos damos a conocer **la voluntad de Dios** y nos basamos en **la Biblia**. Usamos palabras que **animen y edifiquen** (1 Cor. 14:3). Los **ancianos** deben hablar de manera **cariñosa y reconfortante**, incluso con quienes estén **alterados** o digan cosas sin pensar por **momentos difíciles** (1 Tes. 5:14)."
    },
    {
      number: 14,
      content: "Imaginemos esta situación. En una congregación, un anciano se entera de que cierta hermana está deprimida, así que decide visitarla junto con otro hermano para animarla. Durante la visita, la hermana expresa algunas emociones negativas. Cuenta que, aunque asiste a las reuniones y sale a predicar, no se siente feliz. ¿Cómo debe reaccionar un anciano en una situación como esta?",
      summary: "Un **anciano** se entera de que una hermana está **deprimida** y decide **visitarla** con otro hermano. La hermana cuenta que, aunque **asiste a las reuniones** y **sale a predicar**, **no se siente feliz**. La pregunta es: **¿cómo debe reaccionar el anciano?**"
    },
    {
      number: 15,
      content: "En primer lugar, tratará de comprender mejor la situación y los motivos de su tristeza. Para ello tendrá que hacerle preguntas y escuchar con atención. ¿Será que la hermana piensa que no merece el amor de Dios? ¿Se siente tal vez aplastada por \"las preocupaciones de la vida\"? (Luc. 21:34). En segundo lugar, el anciano buscará cosas positivas por las que animarla. Por ejemplo, puede felicitarla porque está yendo a las reuniones y a predicar a pesar de estar deprimida. Y, por último, una vez que se haya hecho un cuadro completo de lo que le ocurre a la hermana y de por qué se siente desanimada, podrá usar la Biblia para ayudarla a convencerse de que Jehová la quiere (Gal. 2:20).",
      summary: "**Tres pasos**: **1)** **Comprender la situación** haciendo preguntas y escuchando. ¿Piensa que **no merece el amor de Dios**? ¿Se siente aplastada por \"**las preocupaciones de la vida**\"? (Luc. 21:34). **2)** Buscar **cosas positivas** por las que animarla. **3)** Usar **la Biblia** para ayudarla a convencerse de que **Jehová la quiere** (Gál. 2:20)."
    },
    {
      number: 16,
      content: "¡Cuántas cosas hemos aprendido al analizar el libro de Job! En el artículo anterior vimos que no solo nos enseña por qué permite Dios el sufrimiento, sino también cómo podemos aguantarlo. Y en este hemos visto que podemos dar buenos consejos si evitamos el mal ejemplo de los tres conocidos de Job y copiamos el buen ejemplo de Elihu. La próxima vez que tengamos que darle un consejo a alguien, ¿qué tal si repasamos las lecciones que nos enseña este relato? Y, si hace ya tiempo que no hemos tenido el gusto de leerlo, pongámonos la meta de volver a hacerlo. Seguro que comprobaremos que el maravilloso libro de Job sigue siendo tan valioso hoy como cuando se escribió.",
      summary: "Del **libro de Job** aprendemos **por qué permite Dios el sufrimiento** y cómo **dar buenos consejos**. Debemos evitar el **mal ejemplo** de los tres conocidos y copiar el **buen ejemplo de Elihu**. Si hace tiempo que no lo hemos leído, debemos **ponernos la meta** de hacerlo, pues sigue siendo **tan valioso hoy** como cuando se escribió."
    }
  ],
  reviewQuestions: [
    {
      question: "¿Qué cosas que hicieron Elifaz, Bildad y Zofar debemos evitar al dar un consejo?",
      answer: [
        "Sacar **conclusiones precipitadas** sin conocer todos los hechos.",
        "Dar consejos **insensibles, hirientes o vacíos**.",
        "Hablar con **aires de superioridad** o en tono **condenatorio**.",
        "Buscar **demostrar que la persona está equivocada** en vez de **consolarla**."
      ]
    },
    {
      question: "¿Cómo podemos imitar a Elihu al dar un consejo?",
      answer: [
        "**Controlar nuestras emociones** antes de hablar.",
        "**Escuchar con atención** para entender la situación.",
        "Hablar con **bondad, cariño y respeto**.",
        "Usar **la Biblia** para ayudar a la persona.",
        "Ofrecer la **oportunidad de responder**."
      ]
    },
    {
      question: "¿Qué debemos hacer para seguir aprendiendo del libro de Job?",
      answer: [
        "Evitar el **mal ejemplo** de los tres conocidos de Job.",
        "Copiar el **buen ejemplo de Elihu**.",
        "**Repasar las lecciones** del libro antes de dar consejos.",
        "Ponernos la meta de **leer el libro de Job** si hace tiempo que no lo hemos leído."
      ]
    }
  ],
  finalSong: "Canción 125: Felices los misericordiosos"
};

export default article49;
