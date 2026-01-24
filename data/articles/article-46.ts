import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS DEL ARTÍCULO 46
// "Jesús es un Sumo Sacerdote compasivo"
// ============================================
export const biblicalTexts46: Record<string, { reference: string; text: string }[]> = {
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
  ]
};

// ============================================
// DATOS DEL ARTÍCULO 46
// ============================================
export const article46: ArticleData = {
  metadata: {
    articleNumber: 46,
    week: "19-25 Ene",
    month: "Noviembre",
    year: 2025
  },
  song: "Canción 17: \"Quiero\"",
  title: "Jesús es un Sumo Sacerdote compasivo",
  biblicalText: "\"No tenemos a un sumo sacerdote que no pueda compadecerse de nuestras debilidades\" (HEB. 4:15).",
  theme: "Por qué podemos decir que Jesús es un Sumo Sacerdote compasivo y de qué maneras nos ayuda hoy en día.",
  headerInfographic: "https://i.imgur.com/pRjuu2s.png",
  questions: [
    {
      number: "1, 2",
      textEs: "a) ¿Para qué envió Jehová a su Hijo a la Tierra? b) ¿Qué analizaremos en este artículo? (Hebreos 5:7-9).",
      textLSM: "",
      paragraphs: [1, 2],
      readText: "LEE Hebreos 5:7-9",
      answer: [
        "Jehová envió a Jesús para liberar a la humanidad de la maldición del pecado y la muerte.",
        "También para deshacer todo el daño causado por Satanás.",
        "Las vivencias de Jesús como humano lo prepararon para ser un Sumo Sacerdote compasivo.",
        "Analizaremos cómo lo que Jesús vivió en la Tierra contribuyó a que fuera 'perfeccionado' para su papel."
      ],
      flashcards: [
        {
          question: "¿Cuándo empezó Jesús a servir como Sumo Sacerdote?",
          answer: "Tras su bautismo, en el año 29."
        },
        {
          question: "¿Por qué es importante comprender el papel de Jesús como Sumo Sacerdote compasivo?",
          answer: "Porque así nos será más fácil acercarnos a Jehová y orarle, incluso cuando nos sintamos desanimados por nuestros pecados o debilidades."
        }
      ],
      biblicalCards: [
        {
          reference: "Hebreos 5:7-9",
          purpose: "Jesús fue perfeccionado por sus experiencias",
          text: "Durante sus días en la carne, Cristo ofreció ruegos y también súplicas al que podía salvarlo de la muerte, con fuertes clamores y lágrimas. Y fue escuchado favorablemente por su temor piadoso. Aunque era Hijo, aprendió la obediencia por las cosas que sufrió. Y después de haber sido perfeccionado, vino a ser responsable de la salvación eterna de todos los que le obedecen."
        },
        {
          reference: "Juan 3:16",
          purpose: "Dios envió a su Hijo por amor",
          text: "Porque Dios amó tanto al mundo que dio a su Hijo unigénito para que todo el que ejerce fe en él no sea destruido, sino que tenga vida eterna."
        },
        {
          reference: "1 Juan 3:8",
          purpose: "Jesús vino a deshacer las obras del Diablo",
          text: "El que practica el pecado se origina del Diablo, porque el Diablo ha estado pecando desde el principio. El Hijo de Dios se manifestó con este propósito: deshacer las obras del Diablo."
        }
      ]
    },
    {
      number: "3, 4",
      textEs: "¿Qué cambios afrontó Jesús cuando vino a la Tierra?",
      textLSM: "",
      paragraphs: [3, 4],
      section: "EL HIJO MÁS QUERIDO DE DIOS VIENE A LA TIERRA",
      answer: [
        "En el cielo, tenía el lugar más destacado entre los hijos espirituales de Dios.",
        "Con gusto 'dejó todo lo que tenía' para vivir entre seres humanos imperfectos.",
        "Nació en una familia pobre.",
        "El malvado rey Herodes quiso acabar con su vida, así que huyeron a Egipto como refugiados."
      ],
      flashcards: [
        {
          question: "¿Qué indica que Jesús nació en una familia pobre?",
          answer: "Sus padres ofrecieron un sacrificio humilde cuando él nació (dos tórtolas o pichones según Levítico 12:8)."
        },
        {
          question: "¿Por qué la familia de Jesús huyó a Egipto?",
          answer: "Porque el malvado rey Herodes quiso acabar con la vida de Jesús cuando se enteró de su nacimiento."
        }
      ],
      biblicalCards: [
        {
          reference: "Filipenses 2:7",
          purpose: "Jesús dejó todo lo que tenía",
          text: "Más bien, se despojó a sí mismo y tomó la forma de un esclavo y llegó a ser como los seres humanos."
        },
        {
          reference: "Salmo 16:11",
          purpose: "Jesús estaba feliz junto a Jehová",
          text: "Me darás a conocer el camino de la vida. Ante ti hay gran alegría; hay felicidad eterna a tu derecha."
        },
        {
          reference: "Mateo 2:13, 15",
          purpose: "La huida a Egipto",
          text: "Después que ellos se fueron, el ángel de Jehová se le apareció a José en un sueño y le dijo: 'Levántate, toma al niño y a su madre, y huye a Egipto'."
        }
      ]
    },
    {
      number: "5",
      textEs: "¿Qué vio Jesús cuando estuvo en la Tierra, y cómo lo preparó eso para ser Sumo Sacerdote? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [5],
      image: "https://i.imgur.com/QYbkA8f.png",
      answer: [
        "Jesús vio a muchas personas sufrir durante su vida en la Tierra.",
        "Vivió el dolor de perder a seres queridos, incluso por lo visto a José, su padre adoptivo.",
        "Trató con personas con lepra, ciegas, paralíticas o de duelo, y sintió compasión por todas ellas.",
        "Siendo humano, pudo ver el sufrimiento desde otra perspectiva.",
        "Sintió en carne propia la misma angustia, cansancio y tristeza que todos nosotros."
      ],
      flashcards: [
        {
          question: "¿Qué diferencia hay entre ver el sufrimiento desde el cielo y verlo siendo humano?",
          answer: "Siendo humano, Jesús pudo verlo desde otra perspectiva y sentir en carne propia la misma angustia, cansancio y tristeza que nosotros."
        },
        {
          question: "¿A qué ser querido probablemente perdió Jesús durante su vida?",
          answer: "A José, su padre adoptivo."
        }
      ],
      biblicalCards: [
        {
          reference: "Isaías 53:4",
          purpose: "Jesús cargó con nuestros dolores",
          text: "Verdaderamente él mismo cargó con nuestras enfermedades, y él mismo llevó nuestros dolores."
        },
        {
          reference: "Mateo 9:36",
          purpose: "Jesús sintió compasión por las multitudes",
          text: "Al ver a las multitudes, sintió compasión por ellas porque estaban maltratadas y desvalidas, como ovejas sin pastor."
        }
      ]
    },
    {
      number: "6",
      textEs: "¿Qué nos enseñan las comparaciones que usó el profeta Isaías? (Isaías 42:3).",
      textLSM: "",
      paragraphs: [6],
      section: "JESÚS TRATA A LAS PERSONAS CON EMPATÍA",
      readText: "LEE Isaías 42:3",
      answer: [
        "En las Escrituras, las personas fuertes y prósperas son comparadas con jardines fértiles y árboles majestuosos.",
        "Los pobres y oprimidos son comparados con cañas quebradas y mechas que apenas arden.",
        "Isaías predijo que Jesús trataría con mucho amor y compasión a las personas que otros consideraban de poco valor."
      ],
      flashcards: [
        {
          question: "¿A qué se compara a los pobres y oprimidos en las Escrituras?",
          answer: "A cañas que están quebradas y mechas que apenas arden, cosas de poca utilidad para la gente."
        },
        {
          question: "¿Qué predijo Isaías sobre cómo trataría Jesús a los desfavorecidos?",
          answer: "Que los trataría con mucho amor y compasión, no los despreciaría como otros hacían."
        }
      ],
      biblicalCards: [
        {
          reference: "Isaías 42:3",
          purpose: "Jesús no despreciaría a los débiles",
          text: "No romperá la caña que está quebrada ni apagará la mecha que apenas arde. Con fidelidad hará que la justicia se conozca."
        },
        {
          reference: "Salmo 92:12",
          purpose: "Los justos comparados a árboles",
          text: "El justo florecerá como la palmera, crecerá como el cedro del Líbano."
        }
      ]
    },
    {
      number: "7, 8",
      textEs: "¿Cómo cumplió Jesús la profecía de Isaías?",
      textLSM: "",
      paragraphs: [7, 8],
      answer: [
        "Muchos milagros de Jesús beneficiaron a los maltratados o a quienes tenían pocas esperanzas.",
        "Sanó al hombre cubierto de lepra que quizás había perdido la esperanza de estar con su familia.",
        "Curó al sordo con dificultades para hablar que no podía participar en conversaciones.",
        "En los días de Jesús, muchos judíos creían que las enfermedades eran castigo por los pecados.",
        "Jesús sanó a los marginados y reavivó su esperanza en Dios."
      ],
      flashcards: [
        {
          question: "¿Qué creencia errónea tenían muchos judíos sobre las enfermedades?",
          answer: "Que las enfermedades y discapacidades eran un castigo por los pecados de la persona o los de sus padres."
        },
        {
          question: "¿Cómo aplicó Mateo las palabras de Isaías a Jesús?",
          answer: "'No romperá la caña que está quebrada ni apagará la mecha que apenas arde' (Mateo 12:20)."
        }
      ],
      biblicalCards: [
        {
          reference: "Mateo 12:20",
          purpose: "Jesús cumplió la profecía de Isaías",
          text: "No romperá la caña que está quebrada ni apagará la mecha que apenas arde, hasta que lleve la justicia al éxito."
        },
        {
          reference: "Lucas 5:12, 13",
          purpose: "Jesús sanó al leproso",
          text: "Cuando estaba en una de las ciudades, ¡mire!, había un hombre lleno de lepra. Al ver a Jesús, cayó sobre su rostro y le rogó: 'Señor, si tan solo quieres, puedes limpiarme'. Entonces Jesús extendió la mano, lo tocó y dijo: 'Quiero. Queda limpio'."
        },
        {
          reference: "Juan 9:2",
          purpose: "Creencia errónea sobre enfermedades y pecado",
          text: "Y sus discípulos le preguntaron: 'Rabí, ¿quién pecó, este hombre o sus padres, para que naciera ciego?'."
        }
      ]
    },
    {
      number: "9",
      textEs: "¿Cómo enfatiza Hebreos 4:15, 16 que Jesús es un Sumo Sacerdote compasivo?",
      textLSM: "",
      paragraphs: [9],
      readText: "LEE Hebreos 4:15, 16",
      answer: [
        "Podemos estar seguros de que Jesús se compadece de nosotros.",
        "'Compadecerse' significa sentir en carne propia la tristeza y el dolor de otra persona.",
        "A Jesús le dolía profundamente el sufrimiento de los demás.",
        "No curaba por un simple sentido del deber, sino porque se preocupaba sinceramente por ellos.",
        "Tocó al leproso cuando otros lo evitaban, sanó al sordo en privado, y defendió a la mujer arrepentida."
      ],
      flashcards: [
        {
          question: "¿Qué significa la palabra griega traducida 'compadecerse'?",
          answer: "Sentir en carne propia la tristeza y el dolor de otra persona."
        },
        {
          question: "¿Por qué Jesús tocó al leproso en vez de curarlo a la distancia?",
          answer: "Porque se preocupaba sinceramente por él; probablemente era la primera vez que alguien lo tocaba en muchos años."
        },
        {
          question: "¿Por qué Jesús apartó al hombre sordo de la multitud antes de sanarlo?",
          answer: "Fue muy considerado con él, lo apartó del ruido de la multitud y lo sanó en privado."
        }
      ],
      biblicalCards: [
        {
          reference: "Hebreos 4:15, 16",
          purpose: "Jesús se compadece de nosotros",
          text: "Porque no tenemos a un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino a uno que ha sido probado en todo sentido igual que nosotros, pero sin pecado. Así que acerquémonos con franqueza al trono de la bondad inmerecida para recibir misericordia y hallar bondad inmerecida que nos ayude justo en el momento en que necesitemos ayuda."
        },
        {
          reference: "Mateo 8:3",
          purpose: "Jesús tocó al leproso",
          text: "Entonces Jesús extendió la mano, lo tocó y dijo: 'Quiero. Queda limpio'. E inmediatamente quedó limpio de su lepra."
        },
        {
          reference: "Lucas 7:44",
          purpose: "Jesús defendió a la mujer arrepentida",
          text: "Entonces se volvió hacia la mujer y le dijo a Simón: '¿Ves a esta mujer? Entré en tu casa y no me diste agua para los pies. Pero ella me ha mojado los pies con sus lágrimas y me los ha secado con su cabello'."
        }
      ]
    },
    {
      number: "10",
      textEs: "¿Con qué contamos para ayudar espiritualmente a las personas sordas y a las ciegas? (Vea también las imágenes).",
      textLSM: "",
      paragraphs: [10],
      section: "IMITAMOS A NUESTRO SUMO SACERDOTE",
      image: "https://i.imgur.com/NiwTozP.png",
      answer: [
        "Nuestras publicaciones están disponibles en más de 100 lenguas de señas.",
        "Contamos con publicaciones en braille para más de 60 idiomas.",
        "Hay videos con audiodescripciones en más de 100 idiomas.",
        "De esa manera, las personas sordas y ciegas pueden acercarse a Jehová y a su Hijo."
      ],
      flashcards: [
        {
          question: "¿En cuántas lenguas de señas están disponibles nuestras publicaciones?",
          answer: "En más de 100 lenguas de señas."
        },
        {
          question: "¿Qué recursos existen para las personas ciegas?",
          answer: "Publicaciones en braille para más de 60 idiomas y videos con audiodescripciones en más de 100 idiomas."
        }
      ],
      biblicalCards: [
        {
          reference: "1 Pedro 2:21",
          purpose: "Seguir los pasos de Jesús",
          text: "De hecho, ustedes fueron llamados a seguir este proceder, porque hasta Cristo sufrió por ustedes, dejándoles un modelo para que siguieran sus pasos con cuidado."
        },
        {
          reference: "1 Pedro 3:8",
          purpose: "Mostrar empatía y compasión",
          text: "Finalmente, todos ustedes tengan la misma actitud mental, sean compasivos, tengan cariño fraternal, sean tiernamente compasivos y sean humildes."
        }
      ]
    },
    {
      number: "11",
      textEs: "¿Cómo sigue la organización de Jehová el ejemplo de Jesús? (Hechos 2:5-7, 33; vea también las imágenes).",
      textLSM: "",
      paragraphs: [11],
      readText: "LEE Hechos 2:5-7, 33",
      image: "https://i.imgur.com/NJxRAs1.png",
      answer: [
        "Después de resucitar, Jesús derramó espíritu santo para que predicaran 'en su propio idioma'.",
        "La organización produce publicaciones bíblicas en más de 1.100 idiomas.",
        "Se prepara alimento espiritual en más de 160 lenguas indígenas del continente americano.",
        "Las publicaciones se traducen a más de 20 variantes del idioma romaní (gitano).",
        "Como resultado, muchos miles de personas han aceptado la verdad."
      ],
      flashcards: [
        {
          question: "¿En cuántos idiomas produce la organización publicaciones bíblicas?",
          answer: "En más de 1.100 idiomas."
        },
        {
          question: "¿Cuántas lenguas indígenas del continente americano tienen alimento espiritual?",
          answer: "Más de 160 lenguas indígenas."
        },
        {
          question: "¿Cuántas variantes del idioma romaní (gitano) tienen publicaciones?",
          answer: "Más de 20 variantes."
        }
      ],
      biblicalCards: [
        {
          reference: "Hechos 2:5-7, 33",
          purpose: "Las buenas noticias en el propio idioma",
          text: "Había judíos de todas las naciones bajo el cielo viviendo en Jerusalén. Cuando se oyó este sonido, se juntó una multitud, y estaban desconcertados porque cada uno los oía hablar en su propio idioma. Estaban totalmente asombrados y decían: '¿No son galileos todos estos que están hablando?'."
        }
      ]
    },
    {
      number: "12",
      textEs: "¿Qué más hace la organización de Jehová?",
      textLSM: "",
      paragraphs: [12],
      answer: [
        "Coordina labores de socorro para las víctimas de desastres naturales.",
        "Miles de voluntarios se ofrecen para ayudar a quienes lo necesitan.",
        "Proporciona lugares de adoración sencillos donde las personas pueden reunirse para aprender del amor de Dios."
      ],
      flashcards: [
        {
          question: "¿Qué hace la organización además de producir publicaciones?",
          answer: "Coordina labores de socorro para víctimas de desastres naturales y proporciona lugares de adoración."
        }
      ],
      biblicalCards: []
    },
    {
      number: "13",
      textEs: "¿Cuáles son algunas de las maneras en las que Jesús nos ayuda?",
      textLSM: "",
      paragraphs: [13],
      section: "NUESTRO SUMO SACERDOTE NOS AYUDA A CADA UNO DE NOSOTROS",
      answer: [
        "Jesús es nuestro Pastor excelente y se encarga de que tengamos lo necesario espiritualmente.",
        "Los golpes de la vida pueden hacernos sentir como una caña quebrada o una mecha que apenas arde.",
        "Jesús está al tanto de todo lo que nos pasa y comprende cómo nos sentimos.",
        "Puede utilizar el espíritu santo para darnos fuerzas.",
        "También puede valerse de los ancianos y de otros hermanos para darnos ánimo y apoyo."
      ],
      flashcards: [
        {
          question: "¿De qué maneras nos ayuda Jesús cuando estamos desanimados?",
          answer: "Puede usar el espíritu santo para darnos fuerzas y valerse de los ancianos y hermanos para darnos ánimo y apoyo."
        },
        {
          question: "¿A qué se comparan los golpes de la vida según el artículo?",
          answer: "Pueden hacernos sentir como una caña que está quebrada o una mecha que apenas arde."
        }
      ],
      biblicalCards: [
        {
          reference: "Juan 10:14",
          purpose: "Jesús es el Pastor excelente",
          text: "Yo soy el pastor excelente. Conozco a mis ovejas y mis ovejas me conocen a mí."
        },
        {
          reference: "Efesios 4:7, 8",
          purpose: "Jesús dio regalos a la congregación",
          text: "A cada uno de nosotros se nos concedió bondad inmerecida según la medida del regalo gratuito del Cristo. Por eso dice: 'Cuando ascendió a lo alto, se llevó cautivos; dio dones en hombres'."
        },
        {
          reference: "Juan 16:7",
          purpose: "Jesús envía el espíritu santo",
          text: "Sin embargo, les digo la verdad: les conviene que yo me vaya. Porque, si no me voy, el ayudante no vendrá a ustedes; pero, si me voy, se los enviaré."
        }
      ]
    },
    {
      number: "14",
      textEs: "¿Qué podemos hacer para luchar contra el desánimo?",
      textLSM: "",
      paragraphs: [14],
      answer: [
        "Meditar en el papel de Jesús como Sumo Sacerdote.",
        "Recordar que Jehová lo envió no solo para dar su vida, sino también para entender nuestros problemas.",
        "Cuando nos sentimos hundidos por nuestros pecados o debilidades, Jesús está listo para ayudarnos.",
        "Él nos da una mano 'justo en el momento en que necesitamos ayuda'."
      ],
      flashcards: [
        {
          question: "¿Cuándo nos ayuda Jesús según Hebreos 4:15, 16?",
          answer: "'Justo en el momento en que necesitamos ayuda'."
        },
        {
          question: "¿Qué debemos recordar cuando el desánimo nos vence?",
          answer: "Que Jehová envió a Jesús también para ayudarlo a entender mejor los problemas por los que pasamos los seres humanos imperfectos."
        }
      ],
      biblicalCards: [
        {
          reference: "Hebreos 4:15, 16",
          purpose: "Jesús nos ayuda en el momento oportuno",
          text: "Así que acerquémonos con franqueza al trono de la bondad inmerecida para recibir misericordia y hallar bondad inmerecida que nos ayude justo en el momento en que necesitemos ayuda."
        }
      ]
    },
    {
      number: "15",
      textEs: "¿Qué ayudó a un hermano a volver a la congregación?",
      textLSM: "",
      paragraphs: [15],
      answer: [
        "Stefano fue expulsado y después de 12 años decidió asistir a una reunión.",
        "Los ancianos lo hicieron sentir bienvenido.",
        "Los hermanos le recordaron que Jehová y Jesús querían que él perseverara.",
        "Cuando fue readmitido, toda la congregación lo recibió con los brazos abiertos.",
        "Con el tiempo su esposa empezó a estudiar y ahora sirven a Jehová todos juntos."
      ],
      flashcards: [
        {
          question: "¿Cuánto tiempo estuvo Stefano alejado de la congregación?",
          answer: "12 años."
        },
        {
          question: "¿Qué le recordaron los hermanos a Stefano cuando quería tirar la toalla?",
          answer: "Que Jehová y Jesús querían que él perseverara."
        },
        {
          question: "¿Qué resultado positivo tuvo la readmisión de Stefano?",
          answer: "Su esposa empezó a estudiar la Biblia y ahora sirven a Jehová todos juntos como familia."
        }
      ],
      biblicalCards: [
        {
          reference: "Mateo 18:12, 13",
          purpose: "Jesús busca a las ovejas perdidas",
          text: "¿Qué les parece? Si un hombre tiene 100 ovejas y una de ellas se extravía, ¿no dejará las 99 en las montañas y saldrá a buscar a la que se ha extraviado? Y si llega a encontrarla, les aseguro que se alegra más por ella que por las 99 que no se habían extraviado."
        }
      ]
    },
    {
      number: "16",
      textEs: "¿Por qué nos sentimos muy agradecidos de tener a un Sumo Sacerdote tan compasivo?",
      textLSM: "",
      paragraphs: [16],
      answer: [
        "Durante su vida en la Tierra, Jesús ayudó a muchas personas justo en el momento oportuno.",
        "Hoy podemos estar convencidos de que él estará con nosotros siempre que lo necesitemos.",
        "Pronto en el nuevo mundo ayudará a los seres humanos a liberarse de los efectos del pecado.",
        "Estamos agradecidos a Jehová quien por amor nombró a su Hijo como Sumo Sacerdote compasivo."
      ],
      flashcards: [
        {
          question: "¿Qué hará Jesús en el nuevo mundo?",
          answer: "Ayudará a los seres humanos obedientes a liberarse por completo de los efectos del pecado y la imperfección."
        }
      ],
      biblicalCards: []
    }
  ],
  paragraphs: [
    { number: 1, content: "HACE unos 2.000 años, Jehová envió a su Hijo más querido a la Tierra. ¿Para qué? Entre otras cosas, para liberar a la humanidad de la maldición del pecado y la muerte y para deshacer todo el daño causado por Satanás (Juan 3:16; 1 Juan 3:8). Jehová también sabía que las vivencias de Jesús como humano lo prepararían aún más para ser un Sumo Sacerdote que se compadezca de nosotros, es decir, que nos trate con compasión y empatía. Jesús empezó a servir como Sumo Sacerdote tras su bautismo, en el año 29." },
    { number: 2, content: "En este artículo analizaremos cómo lo que Jesús vivió en la Tierra contribuyó a que fuera \"perfeccionado\" para su papel, es decir, a que estuviera más capacitado para ser un Sumo Sacerdote compasivo. Es importante que comprendamos bien esto porque así nos será más fácil acercarnos a Jehová y orarle, incluso cuando nos sintamos desanimados por nuestros pecados o debilidades (lea Hebreos 5:7-9)." },
    { number: 3, content: "Muchos de nosotros experimentamos cambios en la vida, como por ejemplo tener que mudarnos de un lugar en el que estábamos a gusto y dejar atrás a nuestra querida familia y amigos. Esos cambios son difíciles; pero los cambios que tuvo que hacer Jesús no tienen comparación con los que haya hecho ningún ser humano. De todos los hijos espirituales de Dios, él tenía el lugar más destacado. En el cielo, vivía rodeado del amor de Jehová y siempre estaba feliz de servir a la \"derecha\" de su Padre (Sal. 16:11; Prov. 8:30). Sin embargo, Filipenses 2:7 muestra que con gusto \"dejó todo lo que tenía\" para vivir en la Tierra entre seres humanos imperfectos." },
    { number: 4, content: "Además, pensemos en cómo fueron los primeros años de Jesús en la Tierra. Él nació en una familia pobre, como lo indica el hecho de que sus padres ofrecieran un sacrificio humilde cuando él nació (Lev. 12:8; Luc. 2:24). Por otro lado, en cuanto el malvado rey Herodes se enteró de su nacimiento, quiso acabar con la vida de Jesús. Para evitarlo, huyeron a Egipto y vivieron como refugiados un tiempo (Mat. 2:13, 15). ¡Qué cambio de vida tan drástico!" },
    { number: 5, content: "Durante su vida en la Tierra, Jesús vio a muchas personas sufrir. Vivió el dolor de perder a seres queridos, incluso por lo visto a su padre adoptivo, José. Durante su ministerio trató con personas que tenían lepra, que eran ciegas, que estaban paralíticas o que estaban de duelo por haber perdido a un hijo, y sintió compasión por todas ellas (Mat. 9:2, 6; 15:30; 20:34; Mar. 1:40, 41; Luc. 7:13). Es verdad que en el cielo había visto a las personas sufrir, pero estando en la Tierra y siendo humano pudo verlo desde otra perspectiva (Is. 53:4). Lo que experimentó hizo que entendiera mejor los sentimientos, las frustraciones y las penas de la humanidad. Sintió en carne propia la misma angustia, cansancio y tristeza que todos nosotros.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025650/univ/art/2025650_univ_cnt_1_lg.jpg", imageCaption: "Jesús rodeado de personas que le suplican que las cure. Con mucha compasión, se acerca a un enfermo muy mayor y lo agarra de los brazos." },
    { number: 6, content: "Durante su ministerio, Jesús trató con extraordinaria empatía a los débiles y desfavorecidos. De esa manera, cumplió una profecía que Isaías escribió por inspiración. En las Escrituras Hebreas a veces se dice que las personas fuertes y prósperas son como jardines fértiles y árboles majestuosos (Sal. 92:12; Is. 61:3; Jer. 31:12). En cambio, se compara a los pobres y oprimidos con cañas que están quebradas y mechas que apenas arden, cosas que son de poca utilidad para la gente (lea Isaías 42:3). Con esas comparaciones, Isaías predijo que Jesús trataría con mucho amor y compasión a las personas que el resto de la gente consideraba de poco valor." },
    { number: 7, content: "Mateo le aplicó a Jesús las palabras de Isaías: \"No romperá la caña que está quebrada ni apagará la mecha que apenas arde\" (Mat. 12:20). Muchos de los milagros de Jesús beneficiaron a los maltratados o a quienes tenían pocas esperanzas de que su situación mejorara. Pensemos, por ejemplo, en el hombre que estaba cubierto de lepra. ¿Habría perdido la esperanza de recuperar su salud y de estar de nuevo con su familia y amigos? (Luc. 5:12, 13). O recordemos al sordo que además tenía dificultades para hablar. ¿Cómo se sentiría al ver a los demás teniendo conversaciones animadas en las que él no podía participar? (Mar. 7:32, 33). Pero la cosa no acababa ahí." },
    { number: 8, content: "En los días de Jesús, muchos judíos creían erróneamente que las enfermedades y las discapacidades eran un castigo por los pecados de la persona o los de sus padres (Juan 9:2). Por eso las personas enfermas o con alguna discapacidad solían ser marginadas. Pero Jesús las sanó y reavivó su esperanza en Dios, cumpliendo así la profecía de Isaías. ¿Qué nos enseña esto a nosotros?" },
    { number: 9, content: "(Lea Hebreos 4:15, 16). Podemos estar seguros de que Jesús se compadece de nosotros. La palabra griega que se tradujo \"compadecerse\" da la idea de sentir en carne propia la tristeza y el dolor de otra persona. Es interesante que en Hebreos 10:34 Pablo usó esa misma palabra cuando habló de mostrar compasión por los que están en prisión. Los relatos de los milagros de Jesús revelan que le dolía profundamente el sufrimiento de los demás. No los curaba por un simple sentido del deber, sino porque se preocupaba sinceramente por ellos y quería ayudarlos. Por ejemplo, pudo haber curado al hombre con lepra a la distancia. Pero en lugar de eso lo que hizo fue tocarlo. Probablemente era la primera vez que alguien lo tocaba en muchos años. También fue muy considerado con el hombre sordo, pues lo apartó del ruido de la multitud y lo sanó en privado. Y, cuando un fariseo despreció en su interior a una mujer arrepentida que le lavó los pies a Jesús y se los secó con su cabello, Jesús la defendió con firmeza (Mat. 8:3; Mar. 7:33; Luc. 7:44). Él jamás evitó a quienes estaban enfermos o habían pecado gravemente. Al contrario, los recibió con los brazos abiertos y los trató con compasión. Estamos totalmente convencidos de que hace lo mismo con nosotros." },
    { number: 10, content: "Como queremos seguir fielmente los pasos de Jesús, nos esforzamos por mostrar amor, empatía y compasión (1 Ped. 2:21; 3:8). Es cierto que no podemos curar a las personas sordas o ciegas, pero sí podemos ayudarlas espiritualmente. Por ejemplo, nuestras publicaciones están disponibles en más de 100 lenguas de señas. Además, contamos con publicaciones en braille para más de 60 idiomas y con videos que incluyen audiodescripciones en más de 100 idiomas. De esa manera, las personas sordas y las ciegas pueden acercarse a Jehová y a su Hijo.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025650/univ/art/2025650_univ_cnt_2_lg.jpg", imageCaption: "Hermanos cantando una canción del Reino en una congregación de lengua de señas. Una hermana ciega leyendo la Biblia en braille." },
    { number: 11, content: "Después de resucitar, Jesús derramó espíritu santo sobre sus discípulos para que les predicaran las buenas noticias \"en su propio idioma\" a quienes habían acudido a celebrar la Fiesta de Pentecostés (lea Hechos 2:5-7, 33). Siguiendo su ejemplo, la organización de Jehová pone todo su empeño en ayudar espiritualmente a personas de todas las culturas. Para ello, produce publicaciones bíblicas en más de 1.100 idiomas, algunos de los cuales tienen muy pocos hablantes. Ese es el caso, por ejemplo, de algunos idiomas indígenas del continente americano. La organización ha preparado alimento espiritual en más de 160 de esas lenguas para que las personas que las hablan puedan aprender sobre las buenas noticias. Además, nuestras publicaciones se traducen a más de 20 variantes del idioma romaní (o gitano). Como resultado, muchos miles de personas han aceptado la verdad.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025650/univ/art/2025650_univ_cnt_3_lg.jpg", imageCaption: "Una hermana indígena de América posa sonriente con una Biblia en su idioma. Una hermana y su hija romaníes asisten a una asamblea." },
    { number: 12, content: "Además de ayudar a las personas a conocer las buenas noticias, la organización de Jehová coordina labores de socorro para las víctimas de desastres naturales. Miles de voluntarios se ofrecen para ayudar a quienes lo necesitan. La organización también proporciona lugares de adoración sencillos donde las personas pueden reunirse para aprender más del amor que Dios les tiene." },
    { number: 13, content: "Jesús es nuestro Pastor excelente y por eso se encarga de que cada uno de nosotros tengamos lo necesario para estar espiritualmente fuertes (Juan 10:14; Efes. 4:7). Los golpes de la vida pueden hacernos sentir como una caña que está quebrada o una mecha que apenas arde. Quizás nos sintamos aplastados por una enfermedad grave, un error cometido o un desacuerdo con un hermano. En esas circunstancias tal vez nos resulte difícil ver más allá del dolor y centrarnos en nuestra esperanza. Pero recordemos que Jesús está al tanto de todo lo que nos pasa y comprende cómo nos sentimos. Y, como es compasivo, nos ayuda. Por ejemplo, puede utilizar el espíritu santo para darnos fuerzas (Juan 16:7; Tito 3:6). También puede valerse de los ancianos —que dio \"como regalos\" a la congregación— y de otros hermanos para darnos el ánimo y el apoyo necesarios (Efes. 4:8)." },
    { number: 14, content: "Si sentimos que el desánimo nos vence y que ya no nos quedan fuerzas, meditemos en el papel de Jesús como Sumo Sacerdote. Recordemos que Jehová lo envió a la Tierra no solo para dar su vida como rescate, sino también para ayudarlo a entender mejor los problemas por los que pasamos los seres humanos imperfectos. Cuando nos sentimos hundidos debido a nuestros pecados o debilidades, Jesús está listo para darnos una mano \"justo en el momento en que necesitamos ayuda\" (Heb. 4:15, 16)." },
    { number: 15, content: "Jesús también guía a sus seguidores para que encuentren y ayuden a quienes se han alejado del rebaño de Dios (Mat. 18:12, 13). Veamos la experiencia de Stefano. A él lo sacaron de la congregación y después de 12 años decidió asistir a una reunión. Él cuenta: \"Fue incómodo volver a entrar a un Salón, pero quería formar parte de la cariñosa familia de Jehová otra vez. Los ancianos que se reunieron conmigo me hicieron sentir bienvenido. A veces me sentía tan decepcionado conmigo mismo por haber dejado a Jehová que quería tirar la toalla. Pero los hermanos me recordaron que Jehová y Jesús querían que yo perseverara. Cuando me readmitieron, toda la congregación nos recibió a mí y a mi familia con los brazos abiertos. Con el tiempo mi esposa empezó a estudiar la Biblia y ahora servimos a Jehová todos juntos\". Nuestro cariñoso Sumo Sacerdote de seguro se siente muy feliz al ver que quienes se arrepienten reciben la ayuda que necesitan para volver a la congregación." },
    { number: 16, content: "Durante su vida en la Tierra, Jesús ayudó a un sinnúmero de personas justo en el momento oportuno. Hoy en día podemos estar totalmente convencidos de que él también estará con nosotros siempre que lo necesitemos. Y muy pronto en el nuevo mundo ayudará a los seres humanos obedientes a liberarse por completo de los efectos del pecado y la imperfección. Estamos muy agradecidos a nuestro Dios, Jehová, quien por puro amor y misericordia nombró a su Hijo para que sea un Sumo Sacerdote compasivo." }
  ],
  reviewQuestions: [
    {
      question: "¿Cómo preparó a Jesús para ser Sumo Sacerdote todo lo que vivió en la Tierra?",
      answer: [
        "Vio a muchas personas sufrir y sintió compasión por ellas.",
        "Vivió el dolor de perder a seres queridos.",
        "Pudo ver el sufrimiento desde la perspectiva humana.",
        "Sintió en carne propia la angustia, cansancio y tristeza que todos nosotros.",
        "Eso lo capacitó para compadecerse de nuestras debilidades."
      ]
    },
    {
      question: "¿Cómo cumplió Jesús las palabras de Isaías 42:3?",
      answer: [
        "No despreció a los débiles y desfavorecidos como otros hacían.",
        "Sanó a personas con lepra, ciegas, sordas y paralíticas.",
        "Reavivó la esperanza de los marginados.",
        "Los trató con amor y compasión, no como cosas de poco valor."
      ]
    },
    {
      question: "¿Cómo nos ayuda nuestro Sumo Sacerdote hoy en día?",
      answer: [
        "Utiliza el espíritu santo para darnos fuerzas.",
        "Se vale de los ancianos y hermanos para darnos ánimo y apoyo.",
        "Guía a sus seguidores para encontrar a quienes se han alejado.",
        "Está listo para ayudarnos 'justo en el momento en que necesitamos ayuda'."
      ]
    }
  ],
  finalSong: "Canción 13: Cristo es nuestro modelo"
};

export default article46;
