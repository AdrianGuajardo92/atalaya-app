import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BIBLICOS DEL ARTICULO 49
// "Como nos ayuda el libro de Job a dar buenos consejos"
// ============================================
export const biblicalTexts49: Record<string, { reference: string; text: string }[]> = {
  "LEE Proverbios 27:9": [
    { reference: "Proverbios 27:9", text: "El aceite y el incienso alegran el corazon; lo mismo hace la dulzura de un amigo con su consejo sincero." }
  ],
  "LEE Job 33:6, 7": [
    { reference: "Job 33:6", text: "Mira, ante el Dios verdadero yo soy igual que tu; yo tambien fui formado de un pedazo de arcilla." },
    { reference: "Job 33:7", text: "Por eso no tienes que temerme ni sentirte abrumado por mi presencia." }
  ],
  "LEE Job 33:1": [
    { reference: "Job 33:1", text: "Sin embargo, Job, por favor, escucha lo que digo; presta atencion a todas mis palabras." }
  ]
};

// ============================================
// DATOS DEL ARTICULO 49
// ============================================
export const article49: ArticleData = {
  metadata: {
    articleNumber: 49,
    week: "9-15 Feb",
    month: "Diciembre",
    year: 2025
  },
  song: "Cancion 44: Una suplica ferviente",
  title: "Como nos ayuda el libro de Job a dar buenos consejos",
  biblicalText: "\"Ahora, Job, oye mis palabras, por favor\" (JOB 33:1).",
  theme: "El libro de Job nos ensena a dar buenos consejos.",
  questions: [
    {
      number: "1, 2",
      textEs: "¿En que situacion dificil estan Elihu y los tres conocidos de Job?",
      textLSM: "",
      paragraphs: [1, 2],
      answer: [
        "Job, un hombre muy rico y famoso, lo ha perdido todo.",
        "Tres conocidos suyos —Elifaz, Bildad y Zofar— deciden ir a consolarlo.",
        "Job tiene el cuerpo lleno de ulceras dolorosas y esta sentado entre unas cenizas.",
        "Los tres hombres se quedan siete dias enteros totalmente callados.",
        "Finalmente, Job rompe el silencio para maldecir el dia de su nacimiento y desear la muerte."
      ],
      flashcards: [
        {
          question: "¿Como reaccionaron los tres conocidos de Job al verlo?",
          answer: "Se sentaron al lado de el y se quedaron siete dias enteros totalmente callados, sin decirle una sola palabra."
        },
        {
          question: "¿Que hizo Job despues de los siete dias de silencio?",
          answer: "Rompio el silencio para maldecir el dia de su nacimiento y desear la muerte."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 2:12, 13",
          purpose: "Los amigos de Job guardan silencio",
          text: "Cuando levantaron la vista a cierta distancia, no reconocieron a Job. Se echaron a llorar en alta voz, se rasgaron la ropa y lanzaron polvo al aire. Luego se sentaron con el en el suelo siete dias y siete noches. Ninguno le dijo una palabra, porque podian ver que su dolor era muy intenso."
        }
      ]
    },
    {
      number: "3",
      textEs: "¿Que vamos a ver en este articulo?",
      textLSM: "",
      paragraphs: [3],
      answer: [
        "Jehova hizo que Moises pusiera por escrito lo que hicieron y dijeron los tres conocidos de Job y Elihu.",
        "Las cosas que dijo Elihu fueron inspiradas por Jehova.",
        "Algunas de las cosas que dijo Elifaz fueron inspiradas por un espiritu malvado.",
        "El libro de Job contiene algunos de los mejores consejos de la historia, pero tambien algunos de los peores.",
        "Primero analizaremos el mal ejemplo de los tres conocidos de Job y luego el buen ejemplo de Elihu."
      ],
      flashcards: [
        {
          question: "¿Quien inspiro las palabras de Elihu?",
          answer: "Jehova."
        },
        {
          question: "¿Quien inspiro algunas de las palabras de Elifaz?",
          answer: "Un espiritu malvado (Job 4:12-16)."
        }
      ]
    },
    {
      number: "4",
      textEs: "¿Por que los tres conocidos de Job no consiguieron consolarlo? (Vea tambien la imagen).",
      textLSM: "",
      paragraphs: [4],
      section: "LOS CONSEJOS DE ELIFAZ, BILDAD Y ZOFAR",
      image: "",
      imageCaption: "Al darle un consejo a alguien, no le hagamos sentir que nos creemos superiores; nuestro objetivo debe ser ayudarlo.",
      answer: [
        "Primero, sacaron conclusiones precipitadas dando por sentado que Dios estaba castigando a Job por algun pecado.",
        "Segundo, muchos de sus consejos fueron de poca ayuda, insensibles e incluso hirientes.",
        "Tercero, muchas veces le hablaron con aires de superioridad y en un tono prepotente, sarcastico y condenatorio.",
        "Lo que estos hombres buscaban no era consolar a Job sino demostrar que estaba equivocado."
      ],
      flashcards: [
        {
          question: "¿Cuales son los tres errores que cometieron los conocidos de Job?",
          answer: "1) Sacaron conclusiones precipitadas, 2) dieron consejos insensibles e hirientes, 3) le hablaron con aires de superioridad."
        },
        {
          question: "¿Que buscaban en realidad los tres conocidos de Job?",
          answer: "No buscaban consolar a Job ni fortalecer su fe, sino demostrar que estaba equivocado."
        }
      ]
    },
    {
      number: "5",
      textEs: "¿Que consiguieron Elifaz, Bildad y Zofar con sus consejos?",
      textLSM: "",
      paragraphs: [5],
      answer: [
        "Sus consejos hicieron sentir aplastado a Job.",
        "Job sintio la necesidad de defender su reputacion y eso lo llevo a decir cosas fuera de lugar.",
        "Expresaron ideas que no reflejaban el punto de vista de Dios y trataron a Job sin compasion.",
        "Sin darse cuenta se convirtieron en herramientas en manos de Satanas."
      ],
      flashcards: [
        {
          question: "¿Como hicieron sentir a Job los consejos de sus tres conocidos?",
          answer: "Lo hicieron sentir aplastado (Job 19:2)."
        },
        {
          question: "¿En que se convirtieron Elifaz, Bildad y Zofar sin darse cuenta?",
          answer: "En herramientas en manos de Satanas."
        }
      ]
    },
    {
      number: "6",
      textEs: "¿Que es posible que aprendieran los ancianos de Israel del mal ejemplo de Elifaz, Bildad y Zofar?",
      textLSM: "",
      paragraphs: [6],
      answer: [
        "Los jueces o ancianos tenian que escuchar con mucha atencion antes de dar un consejo.",
        "Debian investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocian todos los hechos.",
        "Tenian que hablarle con bondad y no con dureza a quienes les pedian ayuda.",
        "Si les hacian sentir que eran una molestia, no se atreverian a abrirles su corazon."
      ],
      flashcards: [
        {
          question: "¿Que debian hacer los ancianos de Israel antes de dar un consejo?",
          answer: "Escuchar con mucha atencion, investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocian todos los hechos."
        }
      ],
      biblicalCards: [
        {
          reference: "Deuteronomio 1:15-18",
          purpose: "Los jueces debian juzgar con justicia",
          text: "Asi que tome a los hombres principales de sus tribus, hombres sabios y experimentados, y los designe lideres sobre ustedes. Les ordene a sus jueces: 'Escuchen con cuidado a sus hermanos y juzguen con justicia'."
        },
        {
          reference: "Exodo 22:22-24",
          purpose: "Jehova escucha a los afligidos",
          text: "No deben maltratar a ninguna viuda ni a ningun huerfano. Si los maltratan y ellos claman a mi, yo sin falta escuchare su clamor."
        }
      ]
    },
    {
      number: "7",
      textEs: "Ademas de los ancianos, ¿quienes en Israel podian aconsejar a otros, y que podrian aprender del relato de Job? (Proverbios 27:9).",
      textLSM: "",
      paragraphs: [7],
      readText: "LEE Proverbios 27:9",
      answer: [
        "Cualquier persona —fuera joven o mayor, hombre o mujer— podia darle consejos a alguien que lo necesitara.",
        "Podian aconsejar para ayudar a acercarse mas a Jehova o para corregir algun aspecto de la conducta.",
        "Eso es lo que se espera de un amigo de verdad.",
        "Al pensar en el mal ejemplo de los tres conocidos de Job, podrian aprender lo que no debian decir ni hacer al aconsejar a otros."
      ],
      flashcards: [
        {
          question: "¿Quienes en Israel podian dar consejos?",
          answer: "Cualquier persona —fuera joven o mayor, hombre o mujer— podia darle consejos a alguien que lo necesitara."
        }
      ],
      biblicalCards: [
        {
          reference: "Proverbios 27:9",
          purpose: "El consejo sincero es valioso",
          text: "El aceite y el incienso alegran el corazon; de igual manera, el consejo sincero de un amigo es dulce para el alma."
        },
        {
          reference: "Salmo 141:5",
          purpose: "El consejo del justo es beneficioso",
          text: "Que el justo me golpee —sera un acto leal— y que me corrija. Es como aceite sobre la cabeza; mi cabeza no lo rechazara."
        }
      ]
    },
    {
      number: "8",
      textEs: "¿Que errores debemos evitar al dar un consejo? (Vea tambien las imagenes).",
      textLSM: "",
      paragraphs: [8],
      image: "",
      imageCaption: "Cuando hablemos con alguien, 1) aseguremonos de conocer todos los hechos, 2) usemos la Palabra de Dios y 3) expresemonos con carino.",
      answer: [
        "Primero, antes de decir nada tenemos que asegurarnos de conocer todos los hechos, y no sacar conclusiones precipitadas.",
        "Segundo, tenemos que basarnos siempre en la verdad de la Palabra de Dios y no en nuestra propia opinion o experiencia.",
        "Tercero, jamas debemos usar un tono duro o critico.",
        "Nunca debemos darle a entender a la persona que Jehova es irrazonable o que es imposible que la quiera."
      ],
      flashcards: [
        {
          question: "¿Cuales son los tres errores que debemos evitar al dar un consejo?",
          answer: "1) Sacar conclusiones precipitadas, 2) basarnos en nuestra opinion en vez de la Palabra de Dios, 3) usar un tono duro o critico."
        },
        {
          question: "¿Que dijo Jehova sobre lo que afirmaron Elifaz, Bildad y Zofar?",
          answer: "Que no habian dicho la verdad sobre el (Job 42:7, 8)."
        }
      ]
    },
    {
      number: "9",
      textEs: "¿Por que seguia Job necesitando ayuda, y como se la dio Jehova?",
      textLSM: "",
      paragraphs: [9],
      section: "LOS CONSEJOS DE ELIHU",
      answer: [
        "El debate entre Job y sus tres conocidos fue tan largo que ocupa 28 capitulos de la Biblia.",
        "Job seguia sintiendose muy desanimado y necesitando consuelo y correccion.",
        "Jehova utilizo a Elihu para aconsejarlo.",
        "Elihu espero para intervenir porque era joven y los otros eran hombres de edad.",
        "Dijo: 'La edad por si misma no hace a alguien sabio'."
      ],
      flashcards: [
        {
          question: "¿Por que espero tanto Elihu para intervenir?",
          answer: "Porque era joven y los otros eran hombres de edad. Dijo: 'Yo soy joven y ustedes son hombres de edad. Asi que me quede callado por respeto'."
        },
        {
          question: "¿Que dijo Elihu sobre la edad y la sabiduria?",
          answer: "'La edad por si misma no hace a alguien sabio ni son solo los hombres de edad los que comprenden lo que es correcto' (Job 32:9)."
        }
      ]
    },
    {
      number: "10",
      textEs: "¿Que hizo Elihu antes de aconsejar a Job? (Job 33:6, 7).",
      textLSM: "",
      paragraphs: [10],
      readText: "LEE Job 33:6, 7",
      answer: [
        "Elihu se aseguro de calmar el ambiente y preparar el terreno.",
        "Controlo sus propias emociones, aunque al principio estaba muy enojado.",
        "En ningun momento le hablo en un tono duro o cruel, sino con bondad y carino.",
        "Resumio las ideas principales de Job dejando claro que le habia estado prestando mucha atencion."
      ],
      flashcards: [
        {
          question: "¿Que hizo Elihu para preparar el terreno antes de aconsejar?",
          answer: "Controlo sus emociones, hablo con bondad y carino, y resumio las ideas de Job mostrando que le habia prestado atencion."
        },
        {
          question: "¿Que le dijo Elihu a Job para calmarlo?",
          answer: "'Mira, para el Dios verdadero, yo soy igual que tu' (Job 33:6)."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 33:6, 7",
          purpose: "Elihu se presenta con humildad",
          text: "Mira, para el Dios verdadero, yo soy igual que tu; yo tambien fui formado de arcilla. Mira, no tienes por que tenerme miedo; no te aplastare con mi mano."
        },
        {
          reference: "Job 32:2-5",
          purpose: "Elihu estaba enojado pero se controlo",
          text: "Entonces Elihu hijo de Baraquel el buzita, de la familia de Ram, se encendio de ira. Se enojo muchisimo con Job porque este pensaba que tenia mas razon que Dios. Tambien se enojo con los tres companeros de Job porque no habian podido rebatirlo."
        }
      ]
    },
    {
      number: "11",
      textEs: "¿Como aconsejo Elihu a Job? (Job 33:1).",
      textLSM: "",
      paragraphs: [11],
      readText: "LEE Job 33:1",
      answer: [
        "Lo hizo con muchisimo respeto y sin humillarlo.",
        "Se dirigio a el por su nombre, cosa que los otros tres no hicieron.",
        "Le ofrecio la oportunidad de responderle.",
        "Le recordo que Jehova es muy sabio, poderoso, justo, leal y amoroso.",
        "Las buenas palabras de Elihu hicieron que Job estuviera dispuesto a recibir mas correccion de Jehova."
      ],
      flashcards: [
        {
          question: "¿Que hizo Elihu que los otros tres conocidos no hicieron?",
          answer: "Se dirigio a Job por su nombre y le ofrecio la oportunidad de responderle."
        },
        {
          question: "¿Que efecto tuvieron las palabras de Elihu en Job?",
          answer: "Lo prepararon para estar dispuesto a recibir mas correccion directamente de Jehova."
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
          text: "Si tienes algo que decir, respondeme. Habla, porque quiero que se te declare justo."
        }
      ]
    },
    {
      number: "12",
      textEs: "¿Como utilizo Jehova a los profetas para ayudar a su pueblo, y que podrian aprender los israelitas del buen ejemplo de Elihu?",
      textLSM: "",
      paragraphs: [12],
      answer: [
        "Jehova nombro profetas para ensenar su proposito y corregir a los israelitas.",
        "Utilizo a la profetisa Debora y a Samuel para dar guia e instrucciones a la nacion.",
        "Envio profetas para fortalecer espiritualmente al pueblo y corregir a quienes se desviaban.",
        "Los hombres y mujeres fieles podrian aprender lo que debian decir y hacer al corregir y aconsejar a otros."
      ],
      flashcards: [
        {
          question: "¿Que profetas uso Jehova durante el periodo de los Jueces?",
          answer: "La profetisa Debora y Samuel, incluso siendo muy joven."
        }
      ],
      biblicalCards: [
        {
          reference: "1 Samuel 3:19, 20",
          purpose: "Samuel fue profeta desde joven",
          text: "Samuel siguio creciendo, y Jehova estaba con el, y no dejo sin cumplir ninguna de sus palabras. Todo Israel, desde Dan hasta Beerseba, llego a saber que a Samuel se lo habia nombrado profeta de Jehova."
        },
        {
          reference: "Jueces 4:4-7",
          purpose: "Debora dio instrucciones a Israel",
          text: "En aquel tiempo, la profetisa Debora, esposa de Lapidot, estaba juzgando a Israel. Ella dijo: 'Ve, porque Jehova te ha ordenado que vayas al monte Tabor'."
        }
      ]
    },
    {
      number: "13",
      textEs: "¿Como podemos imitar el ejemplo de Elihu al animar a nuestros hermanos?",
      textLSM: "",
      paragraphs: [13],
      answer: [
        "Los cristianos damos a conocer la voluntad de Dios y basamos lo que ensenamos en la Biblia.",
        "Cuando ofrecemos consejos, usamos palabras que animen y edifiquen.",
        "Los ancianos deben recordar siempre la importancia de hablar de manera carinosa y reconfortante.",
        "Incluso con quienes esten alterados o suelan decir cosas sin pensar al pasar por momentos dificiles."
      ],
      flashcards: [
        {
          question: "¿Que tipo de palabras debemos usar al dar consejos?",
          answer: "Palabras que animen y edifiquen (1 Cor. 14:3)."
        }
      ],
      biblicalCards: [
        {
          reference: "1 Corintios 14:3",
          purpose: "El proposito de las palabras edificantes",
          text: "Pero el que profetiza edifica, anima y consuela a la gente con lo que dice."
        },
        {
          reference: "1 Tesalonicenses 5:14",
          purpose: "Hablar reconfortantemente a todos",
          text: "Los exhortamos, hermanos: amonesten a los desordenados, consuelen a los abatidos, apoyen a los debiles, sean pacientes con todos."
        }
      ]
    },
    {
      number: "14, 15",
      textEs: "¿Como puede un anciano imitar a Elihu?",
      textLSM: "",
      paragraphs: [14, 15],
      answer: [
        "Primero, tratara de comprender mejor la situacion y los motivos de la tristeza.",
        "Para ello tendra que hacer preguntas y escuchar con atencion.",
        "Segundo, buscara cosas positivas por las que animar a la persona.",
        "Por ultimo, una vez que se haya hecho un cuadro completo de lo que ocurre, podra usar la Biblia para ayudar."
      ],
      flashcards: [
        {
          question: "¿Cuales son los tres pasos que debe seguir un anciano para imitar a Elihu?",
          answer: "1) Comprender la situacion haciendo preguntas, 2) buscar cosas positivas por las que animar, 3) usar la Biblia para ayudar."
        },
        {
          question: "¿Que preguntas podria hacerse un anciano sobre una hermana deprimida?",
          answer: "¿Piensa que no merece el amor de Dios? ¿Se siente aplastada por 'las preocupaciones de la vida'?"
        }
      ],
      biblicalCards: [
        {
          reference: "Galatas 2:20",
          purpose: "Cristo nos amo y dio su vida por nosotros",
          text: "Ya no soy yo el que vive, sino que es Cristo el que vive unido a mi. Y esta vida que ahora vivo en el cuerpo la vivo por la fe que tengo en el Hijo de Dios, que me amo y se entrego por mi."
        },
        {
          reference: "Lucas 21:34",
          purpose: "Las preocupaciones de la vida",
          text: "Pero tengan cuidado de si mismos, para que su corazon nunca se les haga pesado por comer demasiado, por beber mucho y por las preocupaciones de la vida."
        }
      ]
    },
    {
      number: "16",
      textEs: "¿Que debemos hacer para seguir aprendiendo del libro de Job?",
      textLSM: "",
      paragraphs: [16],
      section: "SIGAMOS APRENDIENDO DEL LIBRO DE JOB",
      answer: [
        "Podemos dar buenos consejos si evitamos el mal ejemplo de los tres conocidos de Job.",
        "Debemos copiar el buen ejemplo de Elihu.",
        "La proxima vez que tengamos que dar un consejo, repasemos las lecciones de este relato.",
        "Si hace ya tiempo que no hemos leido el libro de Job, pongamonos la meta de volver a hacerlo."
      ],
      flashcards: [
        {
          question: "¿Que dos ejemplos del libro de Job debemos recordar al dar consejos?",
          answer: "Evitar el mal ejemplo de Elifaz, Bildad y Zofar, y copiar el buen ejemplo de Elihu."
        }
      ]
    }
  ],
  paragraphs: [
    {
      number: 1,
      content: "POR toda la region, la noticia corre como la polvora: Job, un hombre muy rico y famoso, lo ha perdido todo. Cuando tres conocidos suyos —Elifaz, Bildad y Zofar— se enteran, deciden viajar a Uz para consolarlo. Pero lo que encuentran al llegar los deja conmocionados."
    },
    {
      number: 2,
      content: "Imaginemos la escena. Job se ha quedado practicamente sin nada. Todos sus camellos, ovejas, vacas y burros han muerto o se los han robado. Tambien han asesinado a casi todos sus sirvientes, y todos los hijos de Job han fallecido cuando la casa en la que estaban se derrumbo sobre ellos. Por si esto fuera poco, Job esta muy enfermo y tiene el cuerpo lleno de ulceras dolorosas. A medida que se acercan, los tres hombres lo ven sentado entre unas cenizas y completamente desolado. ¿Como reaccionan? Se sientan al lado de este hombre que esta sufriendo tanto y se quedan siete dias enteros totalmente callados, sin decirle una sola palabra (Job 2:12, 13). En algun momento llega un hombre joven llamado Elihu y se sienta por alli cerca. Finalmente, Job rompe el silencio para maldecir el dia de su nacimiento y desear la muerte (Job 3:1-3, 11)."
    },
    {
      number: 3,
      content: "Jehova hizo que Moises pusiera por escrito lo que hicieron y dijeron tanto los tres conocidos de Job como Elihu. Las cosas que dijo Elihu fueron inspiradas por Jehova, pero es interesante que, al parecer, algunas de las cosas que dijo Elifaz fueron inspiradas por un espiritu malvado (Job 4:12-16; 33:24, 25). Esto explica por que el libro de Job contiene algunos de los mejores consejos de la historia, pero tambien algunos de los peores."
    },
    {
      number: 4,
      content: "La Biblia dice que, cuando los tres conocidos de Job se enteraron de todas sus desgracias, \"decidieron ir juntos a compartir el dolor de Job y consolarlo\" (Job 2:11). Pero hay al menos tres motivos por los que no consiguieron ese objetivo. Primero, sacaron conclusiones precipitadas. Por ejemplo, dieron por sentado erroneamente que Dios estaba castigando a Job por algun pecado (Job 4:7; 11:14). Segundo, muchos de sus consejos fueron de poca ayuda, insensibles e incluso hirientes. Por ejemplo, los tres en algun momento le dijeron palabras que sonaban bien pero estaban vacias (Job 13:12). Bildad fue muy desconsiderado y le dijo que hablaba demasiado (Job 8:2). Y Zofar tuvo el descaro de llamarlo disimuladamente \"cabeza hueca\" (Job 11:12). Tercero, aunque tal vez no le gritaron, muchas veces le hablaron con aires de superioridad y en un tono prepotente, sarcastico y condenatorio (Job 15:7-11). En el fondo, lo que estos hombres buscaban no era consolar a Job ni fortalecer su fe, sino demostrar que estaba equivocado."
    },
    {
      number: 5,
      content: "No es de extranar que los consejos que estos tres hombres le dieron a Job no tuvieran buen resultado. De hecho, lo hicieron sentir aplastado (Job 19:2). Tambien es comprensible que el sintiera la necesidad de defender su reputacion y que eso lo llevara a perder el equilibrio y decir cosas fuera de lugar (Job 6:3, 26). Elifaz, Bildad y Zofar expresaron ideas que no reflejaban el punto de vista de Dios y trataron a Job sin compasion. Al hacer eso, sin darse cuenta se convirtieron en herramientas en manos de Satanas (Job 2:4, 6)."
    },
    {
      number: 6,
      content: "Cuando se formo la nacion de Israel, Jehova eligio a ciertos hombres experimentados para que juzgaran a la nacion de acuerdo con sus justas normas (Deut. 1:15-18; 27:1). Estos jueces o ancianos tenian que escuchar con mucha atencion antes de dar un consejo o dictar una sentencia (2 Cron. 19:6). Tambien debian investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocian todos los hechos (Deut. 19:18). Cuando alguien venia a pedirles ayuda, tenian que hablarle con bondad y no con dureza. ¿Por que? Porque, si le hacian sentir que era una molestia, no se atreveria a abrirles su corazon (Ex. 22:22-24)."
    },
    {
      number: 7,
      content: "Claro esta, aquellos ancianos no eran los unicos que podian dar consejos en Israel. En realidad, cualquier persona —fuera joven o mayor, hombre o mujer— podia darle consejos a alguien que lo necesitara para acercarse mas a Jehova o para corregir algun aspecto de su conducta (Sal. 141:5). Eso es lo que se espera de un amigo de verdad (lea Proverbios 27:9). Al pensar en el mal ejemplo de los tres conocidos de Job, los israelitas podrian aprender lo que no debian decir ni hacer al aconsejar a otros."
    },
    {
      number: 8,
      content: "Como es natural, cuando nuestros hermanos pasan por situaciones dificiles, queremos ayudarlos. Ahora bien, no debemos caer en los mismos errores que los tres conocidos de Job. Primero, antes de decir nada tenemos que asegurarnos de conocer todos los hechos, y no sacar conclusiones precipitadas. Segundo, tenemos que basarnos siempre en la verdad de la Palabra de Dios y no en nuestra propia opinion o experiencia, como hizo Elifaz muchas veces (Job 4:8; 5:3, 27). Y, tercero, jamas debemos usar un tono duro o critico. Recordemos que Elifaz y compania dijeron algunas cosas que si eran ciertas; de hecho, el apostol Pablo cito por inspiracion algunas de sus palabras (compare Job 5:13 con 1 Corintios 3:19). No obstante, la mayor parte de lo que afirmaron sobre Dios era mentira y le hicieron dano a Job, asi que Jehova dijo que no habian dicho la verdad (Job 42:7, 8). Al dar un consejo, nunca debemos darle a entender a la persona que Jehova es irrazonable o que es imposible que la quiera."
    },
    {
      number: 9,
      content: "El debate entre Job y sus tres supuestos amigos fue tan largo que sus palabras ocupan 28 capitulos de la Biblia. Y los animos debian de estar bastante caldeados, pues la mayor parte del tiempo se dejaron llevar por el enojo y la frustracion. Con razon Job seguia sintiendose muy desanimado y necesitando consuelo y correccion. ¿Que hizo Jehova para ayudarlo? Utilizo a Elihu para aconsejarlo. Pero ¿por que espero tanto Elihu para intervenir? El mismo explico: \"Yo soy joven y ustedes son hombres de edad. Asi que me quede callado por respeto\" (Job 32:6, 7). Era consciente de que, por lo general, los mayores cuentan con la sabiduria que viene con los anos y la experiencia. Pero, despues de escuchar con paciencia a Job y sus conocidos, Elihu decidio que no podia seguir callado. Por eso dijo: \"La edad por si misma no hace a alguien sabio ni son solo los hombres de edad los que comprenden lo que es correcto\" (Job 32:9)."
    },
    {
      number: 10,
      content: "Antes de aconsejar a Job, Elihu se aseguro de calmar el ambiente y preparar el terreno. ¿Como? En primer lugar, controlando sus propias emociones. A fin de cuentas, la Biblia dice que al principio estaba muy enojado (Job 32:2-5). Pero luego en ningun momento le hablo en un tono duro o cruel, sino al contrario, con bondad y carino. Por ejemplo, le dijo: \"Mira, para el Dios verdadero, yo soy igual que tu\" (lea Job 33:6, 7). Entonces resumio las ideas principales de seis discursos de Job y asi dejo claro que le habia estado prestando mucha atencion (Job 32:11; 33:8-11). Y volvio a hacer lo mismo cuando mas tarde le dio otros consejos (Job 34:5, 6, 9; 35:1-4)."
    },
    {
      number: 11,
      content: "Cuando Elihu empezo a aconsejar a Job, lo hizo con muchisimo respeto y sin humillarlo. Por ejemplo, se dirigio a el por su nombre, cosa que los otros tres por lo visto no hicieron (lea Job 33:1). Ademas, con mucha bondad le ofrecio la oportunidad de responderle, pues seguramente recordaba que el mismo habia querido intervenir en varias ocasiones mientras Job y sus conocidos hablaban (Job 32:4; 33:32). Tambien le advirtio que tuviera cuidado con algunos de sus argumentos y le recordo que Jehova es muy sabio, poderoso, justo, leal y amoroso (Job 36:18, 21-26; 37:23, 24). Sin duda, las buenas palabras de Elihu hicieron que Job estuviera dispuesto a recibir mas correccion, ahora directamente de Jehova (Job 38:1-3)."
    },
    {
      number: 12,
      content: "A lo largo de la historia de Israel, Jehova muchas veces nombro profetas para ensenar su proposito y corregir a los israelitas. Por ejemplo, durante el periodo de los Jueces, utilizo a la profetisa Debora y a Samuel —incluso siendo muy joven— para que le dieran guia e instrucciones a la nacion (Juec. 4:4-7; 5:7; 1 Sam. 3:19, 20). Y, durante el periodo de los reyes, envio a un profeta tras otro para fortalecer espiritualmente al pueblo y corregir a quienes se desviaban de la adoracion pura (2 Sam. 12:1-4; Hech. 3:24). Al pensar en el buen ejemplo de Elihu, los hombres y mujeres fieles podrian aprender lo que debian decir y hacer al corregir y aconsejar a otros."
    },
    {
      number: 13,
      content: "Al igual que Elihu y los profetas de Israel, los cristianos damos a conocer la voluntad de Dios y basamos lo que ensenamos en la Biblia. Ademas, cuando ofrecemos consejos a nuestros hermanos, usamos palabras que los animen y edifiquen (1 Cor. 14:3). Los ancianos en especial tienen que recordar siempre la importancia de hablar de manera carinosa y reconfortante a todos los hermanos y hermanas, incluso a quienes esten alterados o suelan decir cosas sin pensar al pasar por momentos dificiles (Job 6:3; 1 Tes. 5:14)."
    },
    {
      number: 14,
      content: "Imaginemos esta situacion. En una congregacion, un anciano se entera de que cierta hermana esta deprimida, asi que decide visitarla junto con otro hermano para animarla. Durante la visita, la hermana expresa algunas emociones negativas. Cuenta que, aunque asiste a las reuniones y sale a predicar, no se siente feliz. ¿Como debe reaccionar un anciano en una situacion como esta?"
    },
    {
      number: 15,
      content: "En primer lugar, tratara de comprender mejor la situacion y los motivos de su tristeza. Para ello tendra que hacerle preguntas y escuchar con atencion. ¿Sera que la hermana piensa que no merece el amor de Dios? ¿Se siente tal vez aplastada por \"las preocupaciones de la vida\"? (Luc. 21:34). En segundo lugar, el anciano buscara cosas positivas por las que animarla. Por ejemplo, puede felicitarla porque esta yendo a las reuniones y a predicar a pesar de estar deprimida. Y, por ultimo, una vez que se haya hecho un cuadro completo de lo que le ocurre a la hermana y de por que se siente desanimada, podra usar la Biblia para ayudarla a convencerse de que Jehova la quiere (Gal. 2:20)."
    },
    {
      number: 16,
      content: "¡Cuantas cosas hemos aprendido al analizar el libro de Job! En el articulo anterior vimos que no solo nos ensena por que permite Dios el sufrimiento, sino tambien como podemos aguantarlo. Y en este hemos visto que podemos dar buenos consejos si evitamos el mal ejemplo de los tres conocidos de Job y copiamos el buen ejemplo de Elihu. La proxima vez que tengamos que darle un consejo a alguien, ¿que tal si repasamos las lecciones que nos ensena este relato? Y, si hace ya tiempo que no hemos tenido el gusto de leerlo, pongamonos la meta de volver a hacerlo. Seguro que comprobaremos que el maravilloso libro de Job sigue siendo tan valioso hoy como cuando se escribio."
    }
  ],
  reviewQuestions: [
    {
      question: "¿Que cosas que hicieron Elifaz, Bildad y Zofar debemos evitar al dar un consejo?",
      answer: [
        "Sacar conclusiones precipitadas sin conocer todos los hechos.",
        "Dar consejos insensibles, hirientes o vacios.",
        "Hablar con aires de superioridad o en tono condenatorio.",
        "Buscar demostrar que la persona esta equivocada en vez de consolarla."
      ]
    },
    {
      question: "¿Como podemos imitar a Elihu al dar un consejo?",
      answer: [
        "Controlar nuestras emociones antes de hablar.",
        "Escuchar con atencion para entender la situacion.",
        "Hablar con bondad, carino y respeto.",
        "Usar la Biblia para ayudar a la persona.",
        "Ofrecer la oportunidad de responder."
      ]
    },
    {
      question: "¿Que debemos hacer para seguir aprendiendo del libro de Job?",
      answer: [
        "Evitar el mal ejemplo de los tres conocidos de Job.",
        "Copiar el buen ejemplo de Elihu.",
        "Repasar las lecciones del libro antes de dar consejos.",
        "Ponernos la meta de leer el libro de Job si hace tiempo que no lo hemos leido."
      ]
    }
  ],
  finalSong: "Cancion 125: Felices los misericordiosos"
};

export default article49;
