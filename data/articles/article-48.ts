import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BIBLICOS DEL ARTICULO 48
// "Como nos ayuda el libro de Job cuando estamos sufriendo"
// ============================================
export const biblicalTexts48: Record<string, { reference: string; text: string }[]> = {
  "LEE Job 1:20-22; 2:9, 10": [
    { reference: "Job 1:20", text: "Entonces Job se levanto, se rasgo la ropa y se rapo la cabeza. Luego se postro en el suelo y adoro." },
    { reference: "Job 1:21", text: "Dijo: 'Desnudo sali del vientre de mi madre y desnudo volvere. Jehova dio y Jehova quito. Que el nombre de Jehova siga siendo bendecido'." },
    { reference: "Job 1:22", text: "En todo esto, Job no peco ni acuso a Dios de haber hecho algo malo." },
    { reference: "Job 2:9", text: "Entonces su esposa le dijo: '¿Todavia te mantienes fiel? ¡Maldice a Dios y muerete!'." },
    { reference: "Job 2:10", text: "Pero el le contesto: 'Hablas como una mujer insensata. Si aceptamos las cosas buenas de Dios, ¿no deberiamos aceptar tambien las malas?'. En todo esto, Job no peco con sus labios." }
  ],
  "LEE Hebreos 10:36": [
    { reference: "Hebreos 10:36", text: "Porque necesitan tener aguante para que, despues de haber hecho la voluntad de Dios, reciban lo que se les ha prometido." }
  ],
  "LEE Job 34:12": [
    { reference: "Job 34:12", text: "Esta claro que Dios no actua con maldad; el Todopoderoso no pervierte la justicia." }
  ]
};

// ============================================
// DATOS DEL ARTICULO 48
// ============================================
export const article48: ArticleData = {
  metadata: {
    articleNumber: 48,
    week: "2-8 Feb",
    month: "Diciembre",
    year: 2025
  },
  song: "Cancion 129: Servimos con aguante",
  title: "Como nos ayuda el libro de Job cuando estamos sufriendo",
  biblicalText: "\"Esta claro que Dios no actua con maldad\" (JOB 34:12).",
  theme: "Que nos ensena el libro de Job sobre por que permite Dios el sufrimiento y que nos ayudara a aguantarlo.",
  questions: [
    {
      number: "1, 2",
      textEs: "¿Cuales son algunas razones para leer el libro de Job?",
      textLSM: "",
      paragraphs: [1, 2],
      answer: [
        "Aunque se escribio hace unos 3.500 anos, se lo sigue considerando una joya de la literatura universal.",
        "Muestra claramente la importante cuestion de la santificacion del nombre de Jehova.",
        "Nos ayuda a conocer mejor las hermosas cualidades de Dios, como el amor, la sabiduria, la justicia y el poder.",
        "Se llama a Jehova 31 veces el 'Todopoderoso', mas que en todos los demas libros de la Biblia juntos.",
        "Explica por que permite Dios el sufrimiento y responde otras grandes preguntas de la vida."
      ],
      flashcards: [
        {
          question: "¿Cuantas veces se llama a Jehova 'el Todopoderoso' en el libro de Job?",
          answer: "31 veces, mas que en todos los demas libros de la Biblia juntos."
        },
        {
          question: "¿Quien escribio el libro de Job y quien es su verdadero autor?",
          answer: "Moises fue quien lo escribio, pero su verdadero autor es Jehova (2 Tim. 3:16)."
        },
        {
          question: "¿Cual es la importante cuestion que muestra el libro de Job?",
          answer: "La santificacion del nombre de Jehova."
        }
      ],
      biblicalCards: [
        {
          reference: "2 Timoteo 3:16",
          purpose: "Toda la Escritura es inspirada por Dios",
          text: "Toda la Escritura es inspirada por Dios y es util para ensenar, para disciplinar, para rectificar las cosas, para educar en la justicia."
        }
      ]
    },
    {
      number: "3",
      textEs: "¿Cuales son algunos beneficios de estudiar el libro de Job?",
      textLSM: "",
      paragraphs: [3],
      answer: [
        "Leer el libro de Job es como subir a lo alto de una montana.",
        "Al llegar a la cima podemos ver mejor todo el panorama que nos rodea.",
        "Podemos ver nuestros problemas desde una perspectiva mas elevada: la de Jehova.",
        "Nos ayuda cuando estamos sufriendo."
      ],
      flashcards: [
        {
          question: "¿Con que compara el articulo la lectura del libro de Job?",
          answer: "Con subir a lo alto de una montana, lo que nos permite ver el panorama desde una perspectiva mas elevada."
        },
        {
          question: "¿Desde que perspectiva podemos ver nuestros problemas al estudiar el libro de Job?",
          answer: "Desde la perspectiva de Jehova, una perspectiva mas elevada."
        }
      ]
    },
    {
      number: "4",
      textEs: "¿Que diferencia habia entre Job y algunos de los israelitas que estaban en Egipto?",
      textLSM: "",
      paragraphs: [4],
      section: "DIOS PERMITE QUE JOB SUFRA",
      answer: [
        "Job vivio en la tierra de Uz durante el tiempo en que los israelitas eran esclavos en Egipto.",
        "A diferencia de algunos israelitas que habian empezado a adorar idolos en Egipto, Job si sirvio fielmente a Jehova.",
        "Dios dijo: 'No hay nadie como el en la tierra'.",
        "Job tenia muchisimas riquezas y era el hombre mas importante y respetado de todos los orientales.",
        "Satanas estaba muy furioso al ver que este hombre tan prominente servia a Dios con integridad."
      ],
      flashcards: [
        {
          question: "¿Donde vivio Job y en que epoca?",
          answer: "En la tierra de Uz, posiblemente al este de la Tierra Prometida y en el norte de Arabia, durante el tiempo en que los israelitas eran esclavos en Egipto."
        },
        {
          question: "¿Que dijo Jehova sobre Job?",
          answer: "'No hay nadie como el en la tierra' (Job 1:8)."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 1:8",
          purpose: "Jehova elogia a Job",
          text: "Jehova le dijo a Satanas: '¿Te has fijado en mi siervo Job? No hay nadie como el en la tierra. Es un hombre intachable y recto que teme a Dios y huye del mal'."
        },
        {
          reference: "Josue 24:14",
          purpose: "Los israelitas habian adorado idolos en Egipto",
          text: "Ahora, teman a Jehova y sirvanlo con integridad y con fidelidad. Quiten los dioses a los que sirvieron sus antepasados al otro lado del Rio y en Egipto, y sirvan a Jehova."
        },
        {
          reference: "Ezequiel 20:8",
          purpose: "Los israelitas adoraron idolos",
          text: "Pero ellos se rebelaron contra mi y no quisieron escucharme. Ninguno desecho las cosas detestables que atraian sus miradas, y no abandonaron los idolos repugnantes de Egipto."
        }
      ]
    },
    {
      number: "5",
      textEs: "¿Por que permitio Jehova que Job sufriera? (Job 1:20-22; 2:9, 10).",
      textLSM: "",
      paragraphs: [5],
      readText: "LEE Job 1:20-22; 2:9, 10",
      answer: [
        "Satanas afirmo que Job le daria la espalda a Jehova si sufria.",
        "Con esa acusacion, hizo surgir muchas preguntas importantes.",
        "Aunque Jehova amaba profundamente a Job, le permitio a Satanas intentar demostrar si tenia razon o no.",
        "Los ataques crueles de Satanas fracasaron, pues Job se mantuvo leal a Jehova.",
        "Con el tiempo, Jehova hizo que Job recuperara su salud, sus riquezas, su buena reputacion y le dio 10 hijos mas."
      ],
      flashcards: [
        {
          question: "¿Que afirmo Satanas sobre Job?",
          answer: "Que Job le daria la espalda a Jehova si sufria."
        },
        {
          question: "¿Cuantos anos mas vivio Job despues de sus pruebas?",
          answer: "Otros 140 anos, y asi pudo ver a cuatro generaciones de sus descendientes."
        },
        {
          question: "¿Que le devolvio Jehova a Job despues de sus pruebas?",
          answer: "Su salud, sus riquezas, su buena reputacion y le dio 10 hijos mas."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 1:20-22",
          purpose: "Job se mantuvo fiel",
          text: "Entonces Job se levanto, se rasgo la ropa y se rapo la cabeza. Luego se postro en el suelo y adoro, diciendo: 'Desnudo sali del vientre de mi madre y desnudo volvere. Jehova dio y Jehova quito. Que el nombre de Jehova siga siendo bendecido'. En todo esto, Job no peco ni acuso a Dios de haber hecho algo malo."
        },
        {
          reference: "Job 2:9, 10",
          purpose: "Job rechaza el mal consejo",
          text: "Entonces su esposa le dijo: '¿Todavia te mantienes fiel? ¡Maldice a Dios y muerete!'. Pero el le contesto: 'Hablas como una mujer insensata. Si aceptamos las cosas buenas de Dios, ¿no deberiamos aceptar tambien las malas?'. En todo esto, Job no peco con sus labios."
        },
        {
          reference: "Job 42:10-13, 16",
          purpose: "Jehova bendice a Job",
          text: "Despues de que Job oro por sus companeros, Jehova lo libero de su cautiverio y le devolvio el doble de todo lo que habia tenido antes. Job vivio otros 140 anos y vio a sus hijos y a sus nietos, hasta la cuarta generacion."
        }
      ]
    },
    {
      number: "6",
      textEs: "¿Como podria haber ayudado la historia de Job a los israelitas? (Vea tambien la imagen).",
      textLSM: "",
      paragraphs: [6],
      image: "",
      imageCaption: "Los israelitas, que fueron esclavos en Egipto por muchos anos, con el tiempo conocieron la historia de Job y seguramente sacaron lecciones practicas.",
      answer: [
        "Los israelitas habian sufrido muchisimo en Egipto.",
        "Josue y Caleb pasaron su juventud siendo esclavos y despues tuvieron que estar 40 anos vagando por el desierto.",
        "La historia de Job les ayudo a entender quien es el principal causante del sufrimiento.",
        "Pudieron comprender mejor por que permite Dios el sufrimiento.",
        "Aprendieron lo importantes que son para el la integridad y la fidelidad de los seres humanos."
      ],
      flashcards: [
        {
          question: "¿Que pudieron entender los israelitas gracias a la historia de Job?",
          answer: "Quien es el principal causante del sufrimiento, por que permite Dios el sufrimiento y lo importantes que son para el la integridad y la fidelidad."
        },
        {
          question: "¿Que sufrieron Josue y Caleb en su juventud?",
          answer: "Pasaron su juventud siendo esclavos en Egipto y despues tuvieron que estar 40 anos vagando por el desierto por culpa de la desobediencia de otros."
        }
      ]
    },
    {
      number: "7, 8",
      textEs: "¿Como puede ayudar el libro de Job a quienes sufren? Cuente una experiencia.",
      textLSM: "",
      paragraphs: [7, 8],
      answer: [
        "Muchas personas pierden su fe en Dios porque no entienden por que les ocurren cosas malas a las personas buenas.",
        "Hazel, de Ruanda, paso por el divorcio de sus padres, maltrato de su padrastro y fue violada en su adolescencia.",
        "El libro de Job nos ensena que el causante del sufrimiento no es Dios, sino Satanas.",
        "No debemos asumir que quienes sufren estan cosechando lo que sembraron.",
        "La Biblia explica que a todos nos puede llegar 'algun mal momento y algun suceso imprevisto' (Ecl. 9)."
      ],
      flashcards: [
        {
          question: "¿Por que muchas personas pierden su fe en Dios?",
          answer: "Porque no entienden por que les ocurren cosas malas a las personas buenas."
        },
        {
          question: "¿Que ensena el libro de Job sobre quien causa el sufrimiento?",
          answer: "Que el causante del sufrimiento no es Dios, sino Satanas."
        },
        {
          question: "¿Que admitio Job en Job 6:3, 26?",
          answer: "Que en su empeno por defenderse habia dicho cosas precipitadas."
        }
      ],
      biblicalCards: [
        {
          reference: "Eclesiastes 9:11",
          purpose: "A todos nos puede llegar algun suceso imprevisto",
          text: "He visto algo mas debajo del sol: que no siempre ganan los veloces la carrera ni los fuertes la batalla, ni siempre los sabios tienen pan ni los inteligentes tienen riquezas ni los conocedores tienen favor, porque el tiempo y los sucesos imprevistos los alcanzan a todos."
        },
        {
          reference: "Job 6:3, 26",
          purpose: "Job admite que hablo precipitadamente",
          text: "Pesaria mas que la arena de los mares. Por eso mis palabras han sido impetuosas. ¿Es que piensan reprocharme mis palabras cuando el discurso de un desesperado se lo lleva el viento?"
        }
      ]
    },
    {
      number: "11",
      textEs: "¿Que hizo Jehova cuando le respondio a Job?",
      textLSM: "",
      paragraphs: [11],
      answer: [
        "Detras de las palabras de Job estaban su estrecha relacion con Jehova y su total confianza en el.",
        "Jehova le respondio desde una tempestad de viento.",
        "No le dio una explicacion detallada de por que estaba sufriendo.",
        "No le recrimino sus quejas y sus insistentes proclamaciones de inocencia.",
        "Lo corrigio igual que un buen padre corrige a su hijo, y asi le llego al corazon.",
        "Job reconocio humildemente lo limitado que era su conocimiento y se retracto de sus palabras irreflexivas."
      ],
      flashcards: [
        {
          question: "¿Como le respondio Jehova a Job?",
          answer: "Desde una tempestad de viento, corrigiendolo igual que un buen padre corrige a su hijo."
        },
        {
          question: "¿Que NO hizo Jehova cuando le respondio a Job?",
          answer: "No le dio una explicacion detallada de por que estaba sufriendo ni le recrimino sus quejas."
        },
        {
          question: "¿Como reacciono Job a la correccion de Jehova?",
          answer: "Reconocio humildemente lo limitado que era su conocimiento y se retracto de todas sus palabras irreflexivas."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 40:4, 5",
          purpose: "Job reconoce su limitacion",
          text: "Mira, soy muy insignificante. ¿Que puedo contestarte? Me pongo la mano en la boca. Hable una vez, y no respondere; dos veces, y no anadire nada mas."
        },
        {
          reference: "Job 42:1-6",
          purpose: "Job se retracta",
          text: "Entonces Job le respondio a Jehova: 'Se que tu puedes hacer todas las cosas y que ningun plan tuyo puede ser frustrado. Por eso me retracto, y me arrepiento en polvo y ceniza'."
        }
      ]
    },
    {
      number: "12",
      textEs: "¿Que posibles beneficios sacaron los israelitas del relato de Job?",
      textLSM: "",
      paragraphs: [12],
      answer: [
        "Moises tuvo que aguantar muchas dificultades, decepciones y momentos de desanimo como lider de Israel.",
        "A diferencia de los israelitas que se quejaron de Jehova, Moises acudio a el para contarle lo que le preocupaba.",
        "Moises tuvo que mostrar aguante al recibir disciplina de Jehova.",
        "En Cades, Moises 'hablo precipitadamente con sus labios' y no le dio a Jehova la gloria que merecia.",
        "Jehova no le permitio entrar en la Tierra Prometida, pero Moises fue humilde y acepto la correccion.",
        "El relato de Job ayudo a las generaciones de israelitas a expresarle sus sentimientos a Jehova y a aceptar con humildad su disciplina."
      ],
      flashcards: [
        {
          question: "¿Que hizo Moises diferente a los israelitas que se quejaban?",
          answer: "Acudio a Jehova para contarle lo que le preocupaba, en vez de quejarse de el."
        },
        {
          question: "¿Por que Jehova no permitio que Moises entrara en la Tierra Prometida?",
          answer: "Porque 'hablo precipitadamente con sus labios' y no le dio a Jehova la gloria que merecia."
        },
        {
          question: "¿Que lecciones podian aprender los israelitas del relato de Job?",
          answer: "A expresarle sus sentimientos a Jehova, a no creerse mas justos que Dios y a aceptar con humildad su disciplina."
        }
      ],
      biblicalCards: [
        {
          reference: "Salmo 106:32, 33",
          purpose: "Moises hablo precipitadamente",
          text: "Junto a las aguas de Meriba provocaron su enojo, y a Moises le fue mal por culpa de ellos. Porque amargaron su espiritu y el hablo precipitadamente con sus labios."
        },
        {
          reference: "Deuteronomio 32:50-52",
          purpose: "Moises no pudo entrar en la Tierra Prometida",
          text: "Moriras en la montana a la que subas y seras reunido con tu pueblo, asi como tu hermano Aaron murio en el monte Hor. Porque ustedes dos me fueron infieles entre los israelitas, junto a las aguas de Meriba de Cades."
        },
        {
          reference: "Numeros 11:10-14",
          purpose: "Moises expreso sus sentimientos a Jehova",
          text: "Moises oyo llorar a la gente, familia por familia, cada uno a la entrada de su tienda. Jehova se enojo muchisimo, y Moises tambien se disgusto. Entonces Moises le dijo a Jehova: '¿Por que le has causado este problema a tu siervo?'."
        }
      ]
    },
    {
      number: "13",
      textEs: "¿Como puede el relato de Job ayudarnos a aguantar? (Hebreos 10:36).",
      textLSM: "",
      paragraphs: [13],
      readText: "LEE Hebreos 10:36",
      answer: [
        "Los cristianos tambien necesitamos aguante.",
        "Una hermana estaba predicando por telefono y llamo a Mario, quien estaba escribiendo una nota de suicidio.",
        "Mario dijo: 'Creo en Dios, pero esta manana senti que me habia abandonado'.",
        "Hablaron sobre los sufrimientos de Job, y Mario decidio leer todo ese libro de la Biblia.",
        "Mario acepto un curso biblico y le emociono seguir aprendiendo sobre el Dios que le demostro su amor."
      ],
      flashcards: [
        {
          question: "¿Que estaba haciendo Mario antes de recibir la llamada de predicacion?",
          answer: "Estaba escribiendo una nota de suicidio porque sentia que Dios lo habia abandonado."
        },
        {
          question: "¿Que decidio hacer Mario despues de hablar sobre los sufrimientos de Job?",
          answer: "Decidio leer todo el libro de Job en la Biblia y acepto un curso biblico."
        }
      ],
      biblicalCards: [
        {
          reference: "Hebreos 10:36",
          purpose: "Necesitamos aguante",
          text: "Porque necesitan tener aguante para que, despues de haber hecho la voluntad de Dios, reciban lo que se les ha prometido."
        }
      ]
    },
    {
      number: "17",
      textEs: "¿Por que agradece usted que Jehova incluyera el libro de Job en su Palabra? (Job 34:12).",
      textLSM: "",
      paragraphs: [17],
      readText: "LEE Job 34:12",
      answer: [
        "La Biblia tiene muchisimo poder: ayuda a las personas y consuela a quienes sufren.",
        "El libro de Job nos asegura que 'Dios no actua con maldad'.",
        "Nos ensena por que permite el sufrimiento y como podemos aguantar.",
        "Nos ayuda a consolar a quienes estan sufriendo."
      ],
      flashcards: [
        {
          question: "¿Que nos asegura el libro de Job segun Job 34:12?",
          answer: "Que 'Dios no actua con maldad'."
        },
        {
          question: "¿Cuales son tres beneficios del libro de Job?",
          answer: "Nos ensena por que permite Dios el sufrimiento, como podemos aguantar, y nos ayuda a consolar a quienes sufren."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 34:12",
          purpose: "Dios no actua con maldad",
          text: "Esta claro que Dios no actua con maldad; el Todopoderoso no pervierte la justicia."
        },
        {
          reference: "Hebreos 4:12",
          purpose: "La Palabra de Dios tiene poder",
          text: "Porque la palabra de Dios es viva y ejerce poder, y es mas afilada que cualquier espada de dos filos, y penetra hasta dividir el alma y el espiritu."
        },
        {
          reference: "Job 19:23, 24",
          purpose: "Las palabras de Job escritas para siempre",
          text: "¡Ojala mis palabras quedaran escritas! ¡Ojala se inscribieran en un libro! ¡Ojala se grabaran con cincel de hierro y plomo, en la roca para siempre!"
        }
      ]
    }
  ],
  paragraphs: [
    {
      number: 1,
      content: "¿HA TENIDO usted ultimamente el gusto de leer el libro de Job? Aunque se escribio hace unos 3.500 anos, se lo sigue considerando una joya de la literatura universal. Se ha destacado la sencillez de su estructura, la belleza de su estilo, la expresividad de su lenguaje y la genialidad de su escritor. Es cierto que Moises fue quien escribio este magnifico libro, pero su verdadero autor es Jehova (2 Tim. 3:16)."
    },
    {
      number: 2,
      content: "El libro de Job es una parte clave de la Biblia. ¿Por que? Una razon es que muestra claramente cual es la importante cuestion a la que nos enfrentamos todos los seres inteligentes: la santificacion del nombre de Jehova. Otra razon es que nos ayuda a conocer mejor las hermosas cualidades de Dios, como el amor, la sabiduria, la justicia y el poder. Por ejemplo, en este libro se llama a Jehova 31 veces el \"Todopoderoso\", mas que en todos los demas libros de la Biblia juntos. Una tercera razon es que el libro de Job explica por que permite Dios el sufrimiento y responde otras grandes preguntas de la vida."
    },
    {
      number: 3,
      content: "Podemos decir que leer el libro de Job es como subir a lo alto de una montana. Al llegar a la cima podemos ver mejor todo el panorama que nos rodea. Igualmente, al estudiar este libro podemos ver nuestros problemas desde una perspectiva mas elevada: la de Jehova. En este articulo analizaremos como nos ayuda el libro de Job cuando estamos sufriendo. Veremos como la historia de Job tal vez beneficio a algunos israelitas en el pasado y como nos beneficia a nosotros hoy. Y tambien hablaremos de como usar este relato para ayudar a otros."
    },
    {
      number: 4,
      content: "Job vivio en la tierra de Uz —que posiblemente estaba en algun punto al este de la Tierra Prometida y en el norte de Arabia— durante el tiempo en que los israelitas eran esclavos en Egipto. A diferencia de algunos israelitas, que habian empezado a adorar idolos en Egipto, Job si sirvio fielmente a Jehova (Jos. 24:14; Ezeq. 20:8). De hecho, Dios dijo: \"No hay nadie como el en la tierra\" (Job 1:8). Job tenia muchisimas riquezas y era el hombre mas importante y respetado de todos los orientales (Job 1:3). Seguro que Satanas estaba muy furioso al ver que este hombre tan prominente e influyente servia a Dios con integridad."
    },
    {
      number: 5,
      content: "Satanas afirmo que Job le daria la espalda a Jehova si sufria (Job 1:7-11; 2:2-5). Con esa acusacion, hizo surgir muchas preguntas importantes. Por esa razon, aunque Jehova amaba profundamente a Job, le permitio a Satanas que intentara demostrar si tenia razon o no (Job 1:12-19; 2:6-8). Asi que el Diablo hizo que Job perdiera sus rebanos, mato a sus 10 hijos y le envio una terrible enfermedad que le cubria todo el cuerpo. Sin embargo, estos ataques crueles fracasaron, pues Job se mantuvo leal a Jehova (lea Job 1:20-22; 2:9, 10). Con el tiempo, Jehova hizo que Job recuperara su salud, sus riquezas y su buena reputacion, y le dio 10 hijos mas. Tambien lo bendijo con una larga vida. Job vivio otros 140 anos, y asi pudo ver a cuatro generaciones de sus descendientes (Job 42:10-13, 16)."
    },
    {
      number: 6,
      content: "Los israelitas habian sufrido muchisimo en Egipto. Pensemos, por ejemplo, en Josue y Caleb. Ellos pasaron su juventud siendo esclavos, y despues tuvieron que estar 40 anos vagando por el desierto por culpa de la desobediencia de otros. Si los israelitas conocieron la historia sobre las pruebas de Job y en que acabo todo, sin duda los ayudo a ellos —y tambien a las siguientes generaciones de israelitas— a entender quien es el principal causante del sufrimiento. Ademas, pudieron comprender mejor por que permite Dios el sufrimiento y lo importantes que son para el la integridad y la fidelidad de los seres humanos."
    },
    {
      number: 7,
      content: "Por desgracia, en nuestros dias muchas personas pierden su fe en Dios porque no entienden por que les ocurren cosas malas a las personas buenas. Veamos el caso de una mujer de Ruanda llamada Hazel. Cuando era joven, ella creia en Dios. Pero luego le pasaron cosas que le hicieron cambiar de opinion. Sus padres se divorciaron y su madre se caso con otro hombre, que trataba muy mal a Hazel. En su adolescencia, un hombre la violo. Cuando Hazel trato de buscar consuelo en su religion, no lo recibio. Un dia le escribio una carta a Dios en la que le decia: \"Te he orado, me he esforzado por hacer el bien, pero tu solo me has pagado con sufrimientos. Asi que he decidido dejarte y hacer lo que me parezca bien para ser feliz\". Nos duele muchisimo ver a personas como Hazel, a las que han hecho creer que Dios es el responsable del sufrimiento."
    },
    {
      number: 8,
      content: "Pero nosotros hemos aprendido gracias al libro de Job que el causante del sufrimiento no es Dios, sino Satanas. Tambien hemos aprendido a no asumir que quienes sufren estan cosechando lo que sembraron, pues la Biblia explica que a todos nos puede llegar \"algun mal momento y algun suceso imprevisto\" (Ecl. 9). Pero Job tambien admitio que en su empeno por defenderse habia dicho cosas precipitadas (Job 6:3, 26). En el capitulo 31 leemos que queria que Jehova lo escuchara y lo declarara inocente (Job 31:35). Claro esta, Job no tenia derecho a exigirle explicaciones a Dios sobre por que estaba sufriendo."
    },
    {
      number: 11,
      content: "Ahora entendemos que detras de las palabras que Job le dirigio a Jehova estaban su estrecha relacion con el y su total confianza en que tomaria nota de su fidelidad. Cuando Jehova finalmente le respondio desde una tempestad de viento, no le dio una explicacion detallada de por que estaba sufriendo ni le recrimino sus quejas y sus insistentes proclamaciones de inocencia. Mas bien, lo corrigio igual que un buen padre corrige a su hijo. Y asi le llego al corazon, pues Job reconocio humildemente lo limitado que era su conocimiento y se retracto de todas sus palabras irreflexivas (Job 31:6; 40:4, 5; 42:1-6)."
    },
    {
      number: 12,
      content: "Pensemos en Moises. Como lider de la nacion de Israel, tuvo que aguantar muchas dificultades, decepciones y momentos de desanimo. Pero, a diferencia de los israelitas, que muchas veces se quejaron de Jehova, Moises acudio a el para contarle lo que le preocupaba (Ex. 16:6-8; Num. 11:10-14; 14:1-4, 11; 16:41, 49; 17:5). Ademas, tuvo que mostrar aguante al recibir disciplina de parte de Jehova. Por ejemplo, mientras los israelitas estaban acampados en Cades, probablemente cuando ya llevaban 40 anos viajando por el desierto, Moises \"hablo precipitadamente con sus labios\" y no le dio a Jehova la gloria que merecia (Sal. 106:32, 33). Como resultado, Jehova no le permitio entrar en la Tierra Prometida (Deut. 32:50-52). Seguro que eso le dolio muchisimo a Moises, pero fue humilde y acepto la correccion. Es posible que el relato de Job tambien ayudara a las siguientes generaciones de israelitas a soportar las dificultades. Si meditaban en la historia de Job, podrian aprender a expresarle sus sentimientos a Jehova, a no creerse mas justos que Dios y a aceptar con humildad su disciplina."
    },
    {
      number: 13,
      content: "Los cristianos tambien necesitamos aguante. Una hermana estaba predicando por telefono, y la primera persona a la que llamo fue Mario. Le leyo un texto biblico y le explico que Dios no solo escucha nuestras oraciones, sino que tambien nos ofrece un futuro y una esperanza. Despues le pregunto que le parecia el versiculo y Mario le conto que antes de recibir su llamada estaba escribiendo una nota de suicidio. Dijo: \"Creo en Dios, pero esta manana senti que me habia abandonado\". Durante la segunda llamada hablaron sobre los sufrimientos de Job, y Mario decidio leer todo ese libro de la Biblia. Asi que la hermana le envio un enlace a jw.org para que pudiera leerlo en linea. ¿Cual fue el resultado? Mario acepto un curso biblico y le emociono seguir aprendiendo sobre el Dios que le demostro su amor interesandose en el."
    },
    {
      number: 17,
      content: "Esta claro que la Biblia tiene muchisimo poder: ayuda a las personas y consuela a quienes sufren (Heb. 4:12). Estamos profundamente agradecidos de que Jehova incluyera la historia de Job en su Palabra (Job 19:23, 24). El libro de Job nos asegura que \"Dios no actua con maldad\" (lea Job 34:12). Tambien nos ensena por que permite el sufrimiento y como podemos aguantar. Ademas, nos ayuda a consolar a quienes estan sufriendo. En el siguiente articulo sacaremos mas lecciones del libro de Job y nos centraremos en como dar buenos consejos."
    }
  ],
  reviewQuestions: [
    {
      question: "¿Como nos beneficia entender por que permitio Dios que Job sufriera?",
      answer: [
        "Nos ayuda a entender quien es el principal causante del sufrimiento: Satanas, no Dios.",
        "Comprendemos mejor por que permite Dios el sufrimiento.",
        "Aprendemos lo importantes que son para Jehova la integridad y la fidelidad.",
        "Podemos ver nuestros problemas desde una perspectiva mas elevada."
      ]
    },
    {
      question: "¿Como puede el relato de Job ayudarnos a aguantar?",
      answer: [
        "Nos ensena a expresarle nuestros sentimientos a Jehova.",
        "Aprendemos a no creernos mas justos que Dios.",
        "Nos ayuda a aceptar con humildad la disciplina de Jehova.",
        "Vemos que Jehova recompensa la fidelidad."
      ]
    },
    {
      question: "¿Como podemos usar el libro de Job para ayudar a otros?",
      answer: [
        "Podemos ensenarles que el causante del sufrimiento es Satanas, no Dios.",
        "Les ayudamos a ver que no deben asumir que quienes sufren estan cosechando lo que sembraron.",
        "Los consolamos mostrandoles que Jehova ve y recompensa la fidelidad.",
        "Les mostramos que 'Dios no actua con maldad' (Job 34:12)."
      ]
    }
  ],
  finalSong: "Cancion 156: Si tienes fe"
};

export default article48;
