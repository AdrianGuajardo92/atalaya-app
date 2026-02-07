import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS DEL ARTÍCULO 48
// "Cómo nos ayuda el libro de Job cuando estamos sufriendo"
// ============================================
export const biblicalTexts48: Record<string, { reference: string; text: string }[]> = {
  "LEE Job 1:20-22; 2:9, 10": [
    { reference: "Job 1:20", text: "Entonces Job se levantó, se rasgó la ropa y se rapó la cabeza. Luego se postró en el suelo y adoró." },
    { reference: "Job 1:21", text: "Dijo: 'Desnudo salí del vientre de mi madre y desnudo volveré. Jehová dio y Jehová quitó. Que el nombre de Jehová siga siendo bendecido'." },
    { reference: "Job 1:22", text: "En todo esto, Job no pecó ni acusó a Dios de haber hecho algo malo." },
    { reference: "Job 2:9", text: "Entonces su esposa le dijo: '¿Todavía te mantienes fiel? ¡Maldice a Dios y muérete!'." },
    { reference: "Job 2:10", text: "Pero él le contestó: 'Hablas como una mujer insensata. Si aceptamos las cosas buenas de Dios, ¿no deberíamos aceptar también las malas?'. En todo esto, Job no pecó con sus labios." }
  ],
  "LEE Santiago 5:11": [
    { reference: "Santiago 5:11", text: "Miren, consideramos felices a los que han aguantado. Ustedes han oído del aguante de Job y han visto el resultado que Jehová le dio, porque Jehová es muy cariñoso y misericordioso." }
  ],
  "LEE Hebreos 10:36": [
    { reference: "Hebreos 10:36", text: "Porque necesitan tener aguante para que, después de haber hecho la voluntad de Dios, reciban lo que se les ha prometido." }
  ],
  "LEE Job 34:12": [
    { reference: "Job 34:12", text: "Está claro que Dios no actúa con maldad; el Todopoderoso no pervierte la justicia." }
  ]
};

// ============================================
// DATOS DEL ARTÍCULO 48
// ============================================
export const article48: ArticleData = {
  metadata: {
    articleNumber: 48,
    week: "2-8 Feb",
    month: "Diciembre",
    year: 2025
  },
  song: "Canción 129: Servimos con aguante",
  title: "Cómo nos ayuda el libro de Job cuando estamos sufriendo",
  biblicalText: "\"Está claro que Dios no actúa con maldad\" (JOB 34:12).",
  theme: "Qué nos enseña el libro de Job sobre por qué permite Dios el sufrimiento y qué nos ayudará a aguantarlo.",
  questions: [
    {
      number: "1, 2",
      textEs: "¿Cuáles son algunas razones para leer el libro de Job?",
      textLSM: "",
      paragraphs: [1, 2],
      answer: [
        "Nos ayuda a entender **por qué permite Dios el sufrimiento** y responde otras grandes preguntas de la vida.",
        "Trata la cuestión más importante de todas: **la santificación del nombre de Jehová**.",
        "Nos enseña sobre las **cualidades de Dios**, como el **amor**, la **sabiduría**, la **justicia** y el **poder**.",
        "Nos muestra el poder de Jehová, a quien se llama **'el Todopoderoso' 31 veces**, más que en cualquier otro libro de la Biblia."
      ],
      answerContext: [
        "Aunque fue escrito hace unos **3.500 años**, sigue siendo considerado **una joya de la literatura universal** por su estructura y su estilo.",
        "Lo escribió **Moisés**, pero el verdadero autor es **Jehová**, pues 'toda la Escritura es inspirada por Dios' (2 Tim. 3:16)."
      ],
      flashcards: [
        {
          question: "¿Cuántas veces se llama a Jehová 'el Todopoderoso' en el libro de Job?",
          answer: "31 veces, más que en todos los demás libros de la Biblia juntos."
        },
        {
          question: "¿Quién escribió el libro de Job y quién es su verdadero autor?",
          answer: "Moisés fue quien lo escribió, pero su verdadero autor es Jehová (2 Tim. 3:16)."
        },
        {
          question: "¿Cuál es la importante cuestión que muestra el libro de Job?",
          answer: "La santificación del nombre de Jehová."
        }
      ],
      biblicalCards: [
        {
          reference: "2 Timoteo 3:16",
          purpose: "Toda la Escritura es inspirada por Dios",
          text: "Toda la Escritura es inspirada por Dios y es útil para enseñar, para disciplinar, para rectificar las cosas, para educar en la justicia."
        }
      ]
    },
    {
      number: "3",
      textEs: "¿Cuáles son algunos beneficios de estudiar el libro de Job?",
      textLSM: "",
      paragraphs: [3],
      answer: [
        "Nos permite ver nuestros problemas desde **el punto de vista de Jehová**, no solo desde el nuestro.",
        "Nos ayuda a entender lo que estamos pasando y nos da **fuerzas para aguantar** cuando estamos sufriendo."
      ],
      answerContext: [
        "El párrafo lo compara con **subir a lo alto de una montaña**: desde la cima se ve todo el panorama con más claridad.",
        "De la misma manera, al estudiar este libro podemos ver nuestras dificultades desde **una perspectiva más elevada**."
      ],
      flashcards: [
        {
          question: "¿Con qué compara el artículo la lectura del libro de Job?",
          answer: "Con subir a lo alto de una montaña, lo que nos permite ver el panorama desde una perspectiva más elevada."
        },
        {
          question: "¿Desde qué perspectiva podemos ver nuestros problemas al estudiar el libro de Job?",
          answer: "Desde la perspectiva de Jehová, una perspectiva más elevada."
        }
      ]
    },
    {
      number: "4",
      textEs: "¿Qué diferencia había entre Job y algunos de los israelitas que estaban en Egipto?",
      textLSM: "",
      paragraphs: [4],
      section: "DIOS PERMITE QUE JOB SUFRA",
      answer: [
        "La diferencia principal es que algunos israelitas habían empezado a **adorar ídolos** en Egipto, pero Job **se mantuvo fiel a Jehová**.",
        "Tan fiel era que Dios mismo lo elogió diciendo: **'No hay nadie como él en la tierra'**."
      ],
      answerContext: [
        "Job vivía en la **tierra de Uz** en la misma época en que los israelitas eran **esclavos en Egipto**.",
        "Además de ser fiel, era muy rico y **'el hombre más importante de todos los orientales'** (Job 1:3).",
        "A Satanás le enfurecía que alguien tan **prominente e influyente** sirviera a Dios **con integridad**."
      ],
      flashcards: [
        {
          question: "¿Dónde vivió Job y en qué época?",
          answer: "En la tierra de Uz, posiblemente al este de la Tierra Prometida y en el norte de Arabia, durante el tiempo en que los israelitas eran esclavos en Egipto."
        },
        {
          question: "¿Qué dijo Jehová sobre Job?",
          answer: "'No hay nadie como él en la tierra' (Job 1:8)."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 1:8",
          purpose: "Jehová elogia a Job",
          text: "Jehová le dijo a Satanás: '¿Te has fijado en mi siervo Job? No hay nadie como él en la tierra. Es un hombre intachable y recto que teme a Dios y huye del mal'."
        },
        {
          reference: "Josué 24:14",
          purpose: "Los israelitas habían adorado ídolos en Egipto",
          text: "Ahora, teman a Jehová y sírvanlo con integridad y con fidelidad. Quiten los dioses a los que sirvieron sus antepasados al otro lado del Río y en Egipto, y sirvan a Jehová."
        },
        {
          reference: "Ezequiel 20:8",
          purpose: "Los israelitas adoraron ídolos",
          text: "Pero ellos se rebelaron contra mí y no quisieron escucharme. Ninguno desechó las cosas detestables que atraían sus miradas, y no abandonaron los ídolos repugnantes de Egipto."
        }
      ]
    },
    {
      number: "5",
      textEs: "¿Por qué permitió Jehová que Job sufriera? (Job 1:20-22; 2:9, 10).",
      textLSM: "",
      paragraphs: [5],
      readText: "LEE Job 1:20-22; 2:9, 10",
      answer: [
        "Satanás acusó a Job de **servir a Dios solo por interés**, y dijo que lo abandonaría si sufría.",
        "Esa acusación puso en duda **la lealtad de todos los seres humanos**, así que Jehová permitió la prueba.",
        "Job **se mantuvo fiel**, demostrando que **Satanás estaba equivocado**."
      ],
      answerContext: [
        "Satanás le quitó a Job sus **rebaños**, mató a sus **10 hijos** y le envió una **enfermedad terrible** (Job 1:12-19; 2:6-8).",
        "A pesar de todo eso, **'Job no pecó ni acusó a Dios de haber hecho algo malo'** (Job 1:22).",
        "Después, Jehová le devolvió su **salud**, sus **riquezas**, su **reputación**, y le dio **10 hijos más** (Job 42:10-13).",
        "Job vivió otros **140 años** y pudo ver a **cuatro generaciones** de sus descendientes (Job 42:16)."
      ],
      flashcards: [
        {
          question: "¿Qué afirmó Satanás sobre Job?",
          answer: "Que Job le daría la espalda a Jehová si sufría."
        },
        {
          question: "¿Cuántos años más vivió Job después de sus pruebas?",
          answer: "Otros 140 años, y así pudo ver a cuatro generaciones de sus descendientes."
        },
        {
          question: "¿Qué le devolvió Jehová a Job después de sus pruebas?",
          answer: "Su salud, sus riquezas, su buena reputación y le dio 10 hijos más."
        },
        {
          question: "¿Qué demuestra el hecho de que Jehová permitiera la prueba de Job?",
          answer: "Que Jehová confiaba plenamente en que Job se mantendría fiel a pesar del sufrimiento."
        },
        {
          question: "¿Qué cosas perdió Job por los ataques de Satanás?",
          answer: "Sus rebaños, sus 10 hijos y su salud. Satanás le envió una enfermedad terrible que le cubría todo el cuerpo."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 1:20-22",
          purpose: "Job se mantuvo fiel",
          text: "Entonces Job se levantó, se rasgó la ropa y se rapó la cabeza. Luego se postró en el suelo y adoró, diciendo: 'Desnudo salí del vientre de mi madre y desnudo volveré. Jehová dio y Jehová quitó. Que el nombre de Jehová siga siendo bendecido'. En todo esto, Job no pecó ni acusó a Dios de haber hecho algo malo."
        },
        {
          reference: "Job 2:9, 10",
          purpose: "Job rechaza el mal consejo",
          text: "Entonces su esposa le dijo: '¿Todavía te mantienes fiel? ¡Maldice a Dios y muérete!'. Pero él le contestó: 'Hablas como una mujer insensata. Si aceptamos las cosas buenas de Dios, ¿no deberíamos aceptar también las malas?'. En todo esto, Job no pecó con sus labios."
        },
        {
          reference: "Job 42:10-13, 16",
          purpose: "Jehová bendice a Job",
          text: "Después de que Job oró por sus compañeros, Jehová lo liberó de su cautiverio y le devolvió el doble de todo lo que había tenido antes. Job vivió otros 140 años y vio a sus hijos y a sus nietos, hasta la cuarta generación."
        }
      ]
    },
    {
      number: "6",
      textEs: "¿Cómo podría haber ayudado la historia de Job a los israelitas? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [6],
      image: "https://i.imgur.com/7J57wEh.png",
      imageCaption: "Los israelitas, que fueron esclavos en Egipto por muchos años, con el tiempo conocieron la historia de Job y seguramente sacaron lecciones prácticas.",
      answer: [
        "Les ayudó a entender que **el causante principal del sufrimiento es Satanás, no Dios**.",
        "Les enseñó **por qué Dios permite el sufrimiento**.",
        "Les mostró lo importantes que son para Jehová **la integridad y la fidelidad** de las personas."
      ],
      answerContext: [
        "Los israelitas habían sufrido muchísimo como **esclavos en Egipto**, así que necesitaban entender el porqué.",
        "**Josué y Caleb**, por ejemplo, pasaron su juventud siendo esclavos y luego tuvieron que vagar **40 años por el desierto** por culpa de la desobediencia de otros."
      ],
      flashcards: [
        {
          question: "¿Qué pudieron entender los israelitas gracias a la historia de Job?",
          answer: "Quién es el principal causante del sufrimiento, por qué permite Dios el sufrimiento y lo importantes que son para él la integridad y la fidelidad."
        },
        {
          question: "¿Qué sufrieron Josué y Caleb en su juventud?",
          answer: "Pasaron su juventud siendo esclavos en Egipto y después tuvieron que estar 40 años vagando por el desierto por culpa de la desobediencia de otros."
        }
      ]
    },
    {
      number: "7",
      textEs: "¿Cómo puede ayudar el libro de Job a quienes sufren?",
      textLSM: "",
      paragraphs: [7],
      answer: [
        "Muchas personas **pierden su fe** porque **no entienden por qué** les pasan cosas malas."
      ],
      answerContext: [
        "**Hazel**, de Ruanda, sufrió el **divorcio** de sus padres, el **maltrato** de su padrastro y fue **violada** en su adolescencia.",
        "Buscó consuelo en su religión, pero **no lo recibió**. Le escribió a Dios: 'Tú solo me has pagado con sufrimientos. **He decidido dejarte**'."
      ],
      flashcards: [
        {
          question: "¿Por qué muchas personas pierden su fe en Dios?",
          answer: "Porque no entienden por qué les ocurren cosas malas a las personas buenas."
        }
      ]
    },
    {
      number: "8",
      textEs: "",
      textLSM: "",
      paragraphs: [8],
      answer: [
        "El libro de Job enseña que **el causante del sufrimiento no es Dios, sino Satanás**.",
        "También aprendemos a **no juzgar a quienes sufren**, porque a todos nos pueden pasar cosas malas (Ecl. 9:11).",
        "Si nos mantenemos fieles a pesar de las dificultades, **ayudamos a Jehová a demostrar que Satanás es un mentiroso**."
      ],
      answerContext: [
        "Cuando estudió con los Testigos, descubrió que **Dios no era el responsable** de su sufrimiento.",
        "Dijo: 'Le abrí mi corazón a Jehová y le dije que **nunca quise dejarlo**. Simplemente **no lo conocía de verdad**'."
      ],
      flashcards: [
        {
          question: "¿Qué enseña el libro de Job sobre quién causa el sufrimiento?",
          answer: "Que el causante del sufrimiento no es Dios, sino Satanás."
        },
        {
          question: "¿Cómo ayudamos a Jehová cuando seguimos sirviéndole fielmente en las dificultades?",
          answer: "Lo ayudamos a defender su reputación y a demostrar que Satanás es un mentiroso (Job 2:3; Prov. 27:11)."
        },
        {
          question: "¿Cuáles son las tres lecciones clave que aprendemos del libro de Job sobre el sufrimiento?",
          answer: "1) El causante es Satanás, no Dios. 2) No debemos juzgar a quienes sufren. 3) Nuestra fidelidad ayuda a Jehová a desmentir a Satanás."
        },
        {
          question: "¿Qué descubrió Hazel cuando estudió con los Testigos?",
          answer: "Que Dios no era el responsable de su sufrimiento. Dijo: 'Nunca quise dejarlo. Simplemente no lo conocía de verdad'."
        }
      ],
      biblicalCards: [
        {
          reference: "Eclesiastés 9:11",
          purpose: "A todos nos puede llegar algún suceso imprevisto",
          text: "He visto algo más debajo del sol: que no siempre ganan los veloces la carrera ni los fuertes la batalla, ni siempre los sabios tienen pan ni los inteligentes tienen riquezas ni los conocedores tienen favor, porque el tiempo y los sucesos imprevistos los alcanzan a todos."
        },
        {
          reference: "Proverbios 27:11",
          purpose: "Nuestra fidelidad alegra a Jehová",
          text: "Sé sabio, hijo mío, y alegra mi corazón, para que yo pueda responder al que me insulta."
        }
      ]
    },
    {
      number: "9",
      textEs: "¿Cómo describiría usted a Job mientras sufría? (Santiago 5:11).",
      textLSM: "",
      paragraphs: [9],
      section: "CÓMO NOS AYUDA EL RELATO DE JOB A AGUANTAR",
      readText: "LEE Santiago 5:11",
      answer: [
        "Job estaba en una situación desesperante: **solo, enfermo y sufriendo** un dolor terrible.",
        "Aunque parecía que solo estaba **sobreviviendo**, en realidad estaba **aguantando con fe**."
      ],
      answerContext: [
        "Tenía el cuerpo **cubierto de úlceras**, estaba en los huesos y su piel se le caía a tiras por la enfermedad (Job 2:7, 8; 19:20).",
        "Lo único que podía hacer era **rascarse las heridas con un trozo de vasija** y quejarse de dolor.",
        "Santiago 5:11 lo pone como **ejemplo de aguante** y muestra que Jehová recompensó su fidelidad porque **'es muy cariñoso y misericordioso'**."
      ],
      flashcards: [
        {
          question: "¿Qué texto bíblico describe a Job como ejemplo de aguante?",
          answer: "Santiago 5:11, que habla del aguante de Job y del resultado que Jehová le dio."
        },
        {
          question: "¿Qué hacía Job para aliviar sus heridas?",
          answer: "Se rascaba las heridas con un trozo de vasija."
        },
        {
          question: "¿Cuál es la diferencia entre sobrevivir y aguantar según este párrafo?",
          answer: "Sobrevivir es simplemente seguir adelante; aguantar es mantenerse fiel a Jehová a pesar de todo, como hizo Job."
        },
        {
          question: "¿Qué cualidades de Jehová destaca Santiago 5:11 al hablar de Job?",
          answer: "Que Jehová 'es muy cariñoso y misericordioso', y que recompensó el aguante de Job."
        }
      ],
      biblicalCards: [
        {
          reference: "Santiago 5:11",
          purpose: "El aguante de Job como ejemplo",
          text: "Miren, consideramos felices a los que han aguantado. Ustedes han oído del aguante de Job y han visto el resultado que Jehová le dio, porque Jehová es muy cariñoso y misericordioso."
        }
      ]
    },
    {
      number: "10",
      textEs: "¿Qué tipo de relación tenía Job con Jehová, y cómo lo sabemos?",
      textLSM: "",
      paragraphs: [10],
      answer: [
        "Job tenía una **relación tan cercana** con Jehová que se sentía **libre de contarle todo** lo que sentía.",
        "**Defendió su integridad** ante sus tres supuestos amigos, dirigiéndose en muchos casos directamente a Jehová.",
        "Quería que Jehová **lo escuchara y lo declarara inocente**."
      ],
      answerContext: [
        "Aunque su relación era cercana, por un tiempo **se creyó más justo que Dios** (Job 10:1-3; 32:1, 2; 35:1, 2).",
        "También admitió que en su afán por defenderse había **dicho cosas precipitadas** (Job 6:3, 26).",
        "Quería que Jehová **lo declarara inocente** (Job 31:35), aunque **no tenía derecho a exigirle explicaciones**."
      ],
      flashcards: [
        {
          question: "¿Qué admitió Job sobre sus propias palabras?",
          answer: "Que en su empeño por defenderse había dicho cosas precipitadas (Job 6:3, 26)."
        },
        {
          question: "¿Qué error cometió Job en cuanto a su justicia?",
          answer: "Por un tiempo se creyó más justo que Dios (Job 10:1-3; 32:1, 2; 35:1, 2)."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 10:1, 2",
          purpose: "Job le expresa sus sentimientos a Jehová",
          text: "Yo detesto mi vida. Voy a dar rienda suelta a mis quejas. Voy a hablar por la amargura de mi alma. Le diré a Dios: 'No me condenes. Dime por qué me atacas'."
        },
        {
          reference: "Job 6:3, 26",
          purpose: "Job admite que habló precipitadamente",
          text: "Pesaría más que la arena de los mares. Por eso mis palabras han sido impetuosas. ¿Es que piensan reprocharme mis palabras cuando el discurso de un desesperado se lo lleva el viento?"
        }
      ]
    },
    {
      number: "11",
      textEs: "¿Qué hizo Jehová cuando le respondió a Job?",
      textLSM: "",
      paragraphs: [11],
      answer: [
        "Le respondió desde **una tempestad de viento**.",
        "**No le explicó en detalle** por qué estaba sufriendo **ni le reclamó sus quejas**.",
        "Lo **corrigió con cariño**, como **un buen padre corrige a su hijo**, y así le llegó al corazón."
      ],
      answerContext: [
        "Detrás de las palabras de Job había una **relación muy estrecha** con Jehová y una **confianza total** en él.",
        "La corrección fue tan efectiva que Job dijo: **'Soy muy insignificante. Me pongo la mano en la boca'** (Job 40:4, 5), y **se retractó** de todo lo que había dicho sin pensar (Job 42:1-6)."
      ],
      flashcards: [
        {
          question: "¿Cómo le respondió Jehová a Job?",
          answer: "Desde una tempestad de viento, corrigiéndolo igual que un buen padre corrige a su hijo."
        },
        {
          question: "¿Qué NO hizo Jehová cuando le respondió a Job?",
          answer: "No le dio una explicación detallada de por qué estaba sufriendo ni le recriminó sus quejas."
        },
        {
          question: "¿Cómo reaccionó Job a la corrección de Jehová?",
          answer: "Reconoció humildemente lo limitado que era su conocimiento y se retractó de todas sus palabras irreflexivas."
        },
        {
          question: "¿Por qué es significativo que Jehová no le explicara a Job la razón de su sufrimiento?",
          answer: "Porque demuestra que Jehová no siempre nos da todas las respuestas, pero sí nos da su amor, su guía y su corrección."
        },
        {
          question: "¿Qué dijo Job después de que Jehová lo corrigió?",
          answer: "'Soy muy insignificante. Me pongo la mano en la boca' (Job 40:4, 5). Reconoció humildemente sus limitaciones y se retractó."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 40:4, 5",
          purpose: "Job reconoce su limitación",
          text: "Mira, soy muy insignificante. ¿Qué puedo contestarte? Me pongo la mano en la boca. Hablé una vez, y no responderé; dos veces, y no añadiré nada más."
        },
        {
          reference: "Job 42:1-6",
          purpose: "Job se retracta",
          text: "Entonces Job le respondió a Jehová: 'Sé que tú puedes hacer todas las cosas y que ningún plan tuyo puede ser frustrado. Por eso me retracto, y me arrepiento en polvo y ceniza'."
        }
      ]
    },
    {
      number: "12",
      textEs: "¿Qué posibles beneficios sacaron los israelitas del relato de Job?",
      textLSM: "",
      paragraphs: [12],
      answer: [
        "Les enseñó a **expresarle sus sentimientos a Jehová** en vez de quejarse de él, como hizo Moisés.",
        "Les mostró la importancia de **aceptar con humildad la disciplina** de Dios.",
        "Les ayudó a **no creerse más justos que Dios** y a ser humildes cuando recibieran corrección."
      ],
      answerContext: [
        "**Moisés** es un buen ejemplo: como líder de Israel tuvo que **aguantar muchas dificultades** y decepciones (Núm. 11:10-14).",
        "En Cades, **'habló precipitadamente con sus labios'** y no le dio a Jehová la gloria que merecía (Sal. 106:32, 33), por lo que **no pudo entrar en la Tierra Prometida** (Deut. 32:50-52).",
        "A pesar de eso, Moisés fue **humilde y aceptó la corrección** de Jehová."
      ],
      flashcards: [
        {
          question: "¿Qué hizo Moisés diferente a los israelitas que se quejaban?",
          answer: "Acudió a Jehová para contarle lo que le preocupaba, en vez de quejarse de él."
        },
        {
          question: "¿Por qué Jehová no permitió que Moisés entrara en la Tierra Prometida?",
          answer: "Porque 'habló precipitadamente con sus labios' y no le dio a Jehová la gloria que merecía."
        },
        {
          question: "¿Qué lecciones podían aprender los israelitas del relato de Job?",
          answer: "A expresarle sus sentimientos a Jehová, a no creerse más justos que Dios y a aceptar con humildad su disciplina."
        }
      ],
      biblicalCards: [
        {
          reference: "Salmo 106:32, 33",
          purpose: "Moisés habló precipitadamente",
          text: "Junto a las aguas de Meribá provocaron su enojo, y a Moisés le fue mal por culpa de ellos. Porque amargaron su espíritu y él habló precipitadamente con sus labios."
        },
        {
          reference: "Deuteronomio 32:50-52",
          purpose: "Moisés no pudo entrar en la Tierra Prometida",
          text: "Morirás en la montaña a la que subas y serás reunido con tu pueblo, así como tu hermano Aarón murió en el monte Hor. Porque ustedes dos me fueron infieles entre los israelitas, junto a las aguas de Meribá de Cades."
        },
        {
          reference: "Números 11:10-14",
          purpose: "Moisés expresó sus sentimientos a Jehová",
          text: "Moisés oyó llorar a la gente, familia por familia, cada uno a la entrada de su tienda. Jehová se enojó muchísimo, y Moisés también se disgustó. Entonces Moisés le dijo a Jehová: '¿Por qué le has causado este problema a tu siervo?'."
        }
      ]
    },
    {
      number: "13",
      textEs: "¿Cómo puede el relato de Job ayudarnos a aguantar? (Hebreos 10:36).",
      textLSM: "",
      paragraphs: [13],
      readText: "LEE Hebreos 10:36",
      answer: [
        "Podemos contarle a Jehová nuestros **sentimientos más profundos** con la confianza de que **nos escuchará**.",
        "**No se enojará** si al desahogarnos decimos algo fuera de lugar, como le pasó a Job.",
        "Nos dará **las fuerzas y la sabiduría** que necesitamos para aguantar."
      ],
      answerContext: [
        "Los cristianos enfrentamos pruebas difíciles: **problemas de salud**, situaciones familiares, **la muerte de un ser querido**, o que alguien empeore nuestra situación (Prov. 12:18).",
        "Jehová nos da fuerzas porque **'sus ojos recorren toda la tierra para mostrar su poder a favor de los que tienen un corazón completo para con él'** (2 Crón. 16:9).",
        "Si necesitamos corrección, nos la dará mediante **su Palabra**, **su organización**, **un anciano** o **un amigo maduro** (Heb. 12:5-7).",
        "Así como a Job le hizo bien escuchar a Jehová, a nosotros también nos hará bien **aceptar sus consejos con humildad** (2 Cor. 13:11)."
      ],
      flashcards: [
        {
          question: "¿Qué nos enseña el libro de Job sobre expresarle nuestros sentimientos a Jehová?",
          answer: "Que podemos expresarle nuestros sentimientos más profundos con la confianza de que nos escuchará, sin que se enoje."
        },
        {
          question: "¿Cómo nos corrige Jehová si lo necesitamos?",
          answer: "Mediante su Palabra, su organización, un anciano o un amigo maduro."
        },
        {
          question: "¿Qué nos enseña el ejemplo de Job sobre la corrección de Jehová?",
          answer: "Que cuando Jehová nos corrige, tenemos que mostrar aguante y ser humildes para aceptar los consejos."
        },
        {
          question: "Según 2 Crónicas 16:9, ¿qué hace Jehová por quienes le son fieles?",
          answer: "'Sus ojos recorren toda la tierra para mostrar su poder a favor de los que tienen un corazón completo para con él'."
        },
        {
          question: "¿Por qué no debemos tener miedo de desahogarnos con Jehová?",
          answer: "Porque él no se enojará si al desahogarnos decimos algo fuera de lugar, como le pasó a Job. Nos escuchará con amor."
        }
      ],
      biblicalCards: [
        {
          reference: "Hebreos 10:36",
          purpose: "Necesitamos aguante",
          text: "Porque necesitan tener aguante para que, después de haber hecho la voluntad de Dios, reciban lo que se les ha prometido."
        },
        {
          reference: "1 Juan 5:14",
          purpose: "Confianza en que Dios nos escucha",
          text: "Y esta es la confianza que tenemos en él: que él nos oye sin importar lo que le pidamos conforme a su voluntad."
        },
        {
          reference: "Hebreos 12:5-7",
          purpose: "Jehová disciplina a quienes ama",
          text: "Hijo mío, no menosprecies la disciplina de Jehová ni te desanimes cuando él te corrija. Porque Jehová disciplina al que ama, y azota a todo el que recibe como hijo."
        }
      ]
    },
    {
      number: "14",
      textEs: "¿Cuál es una manera de explicar por qué existe el sufrimiento?",
      textLSM: "",
      paragraphs: [14],
      section: "USEMOS EL LIBRO DE JOB PARA AYUDAR A OTROS",
      answer: [
        "Podemos explicar lo que pasó en **el jardín de Edén**: **Satanás les mintió** a Adán y Eva, y ellos **desobedecieron a Dios**.",
        "Por culpa de esa rebelión, **todos los seres humanos sufrimos y morimos**.",
        "Dios está permitiendo que pase el tiempo necesario para **desmentir a Satanás** y para **devolver la perfección** a los humanos."
      ],
      answerContext: [
        "**Satanás les mintió** a Adán y Eva en el jardín de Edén (Gen. 3:1-6), y por esa rebelión entró **el pecado y la muerte** para todos (Rom. 5:12).",
        "Dios promete que los seres humanos **volverán a ser perfectos** y que **'la muerte ya no existirá'** (Apoc. 21:3, 4)."
      ],
      flashcards: [
        {
          question: "¿Cuál es una explicación común de por qué existe el sufrimiento?",
          answer: "Lo que sucedió en el jardín de Edén: Satanás les mintió a Adán y Eva, y su rebelión trajo sufrimiento y muerte para todos."
        },
        {
          question: "¿Qué texto muestra que Dios restaurará la perfección humana?",
          answer: "Apocalipsis 21:3, 4, que promete que Dios eliminará el sufrimiento y la muerte."
        }
      ],
      biblicalCards: [
        {
          reference: "Génesis 3:1-6",
          purpose: "La rebelión en el Edén",
          text: "La serpiente le dijo a la mujer: 'Seguro que no morirán. Dios sabe que el mismo día que coman de él se les abrirán los ojos y serán como Dios, conociendo el bien y el mal'. Entonces la mujer vio que el árbol era bueno para comer y tomó de su fruto y comió."
        },
        {
          reference: "Romanos 5:12",
          purpose: "El pecado y la muerte entraron por Adán",
          text: "Por medio de un solo hombre el pecado entró en el mundo, y la muerte mediante el pecado, y así la muerte se extendió a todos los hombres porque todos habían pecado."
        },
        {
          reference: "Apocalipsis 21:3, 4",
          purpose: "Dios eliminará el sufrimiento",
          text: "Él les limpiará toda lágrima de los ojos, y la muerte ya no existirá. Tampoco habrá más llanto ni clamor ni dolor. Las cosas de antes han pasado."
        }
      ]
    },
    {
      number: "15",
      textEs: "¿Cómo podemos usar el libro de Job cuando alguien nos pregunta por qué existe el sufrimiento? (Vea también las imágenes).",
      textLSM: "",
      paragraphs: [15],
      image: "https://i.imgur.com/qXlNimY.png",
      answer: [
        "**Felicitar a la persona** por su pregunta y contarle que Job, un hombre de la antigüedad, **se preguntó lo mismo** hace miles de años.",
        "Explicarle que **la culpa no era de Dios sino del Diablo**, que quería demostrar que los humanos solo sirven a Dios por interés.",
        "Dios permitió el sufrimiento de Job porque **confía en que los humanos pueden mantenerse fieles**.",
        "Al final **Dios bendijo a Job por su fidelidad**, lo que nos permite consolar a otros diciéndoles que **su sufrimiento no viene de Jehová**."
      ],
      answerContext: [
        "Job incluso pensó que **Dios le estaba causando el sufrimiento** (Job 7:17-21), algo que muchas personas sienten hoy.",
        "A la persona podría llamarle la atención ver que **otros a lo largo de la historia** han hecho esa misma pregunta."
      ],
      flashcards: [
        {
          question: "¿Cómo podemos empezar a usar el libro de Job en la predicación?",
          answer: "Felicitando a la persona por su pregunta y contándole que Job se preguntó lo mismo hace miles de años."
        },
        {
          question: "¿Qué quiso demostrar Satanás al hacer sufrir a Job?",
          answer: "Que los seres humanos solo sirven a Dios porque les da cosas buenas y que lo abandonarían ante las desgracias."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 7:17-21",
          purpose: "Job pensó erróneamente que Dios le causaba el sufrimiento",
          text: "¿Qué es el hombre para que lo consideres tan importante, para que le prestes atención? ¿Por qué me has puesto como tu blanco, para ser una carga incluso para mí mismo?"
        }
      ]
    },
    {
      number: "16",
      textEs: "Cuente una experiencia que muestre cómo el libro de Job puede ayudar a alguien que está sufriendo.",
      textLSM: "",
      paragraphs: [16],
      answer: [
        "Mario estaba escribiendo **una nota de suicidio** cuando recibió una llamada de predicación.",
        "Dijo que creía en Dios, pero esa mañana **sintió que lo había abandonado**.",
        "Al conocer la historia de Job, **decidió leer todo el libro** y **aceptó un curso bíblico**.",
        "Le emocionó seguir aprendiendo sobre el Dios que **le demostró su amor**."
      ],
      answerContext: [
        "En **2021**, una hermana lo contactó **por teléfono** durante la predicación y le leyó un texto bíblico sobre **la esperanza** que Dios nos ofrece.",
        "La hermana le envió un enlace a **jw.org** para que pudiera leer el libro de Job en línea."
      ],
      flashcards: [
        {
          question: "¿Qué estaba haciendo Mario antes de recibir la llamada de predicación?",
          answer: "Estaba escribiendo una nota de suicidio porque sentía que Dios lo había abandonado."
        },
        {
          question: "¿Qué decidió hacer Mario después de hablar sobre los sufrimientos de Job?",
          answer: "Decidió leer todo el libro de Job y aceptó un curso bíblico."
        }
      ]
    },
    {
      number: "17",
      textEs: "¿Por qué agradece usted que Jehová incluyera el libro de Job en su Palabra? (Job 34:12).",
      textLSM: "",
      paragraphs: [17],
      readText: "LEE Job 34:12",
      answer: [
        "Porque nos asegura que **'Dios no actúa con maldad'** (Job 34:12).",
        "Nos enseña **por qué Dios permite el sufrimiento** y **cómo podemos aguantarlo**.",
        "Nos da **herramientas para consolar** a quienes están sufriendo."
      ],
      answerContext: [
        "La Biblia tiene un poder enorme: **'es viva y ejerce poder'** para cambiar la vida de las personas y **consolar a quienes sufren** (Heb. 4:12).",
        "Job mismo deseó que sus palabras **quedaran escritas para siempre** (Job 19:23, 24), y Jehová hizo que así fuera."
      ],
      flashcards: [
        {
          question: "¿Qué nos asegura el libro de Job según Job 34:12?",
          answer: "Que 'Dios no actúa con maldad'."
        },
        {
          question: "¿Cuáles son tres beneficios del libro de Job?",
          answer: "Nos enseña por qué permite Dios el sufrimiento, cómo podemos aguantar, y nos ayuda a consolar a quienes sufren."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 34:12",
          purpose: "Dios no actúa con maldad",
          text: "Está claro que Dios no actúa con maldad; el Todopoderoso no pervierte la justicia."
        },
        {
          reference: "Hebreos 4:12",
          purpose: "La Palabra de Dios tiene poder",
          text: "Porque la palabra de Dios es viva y ejerce poder, y es más afilada que cualquier espada de dos filos, y penetra hasta dividir el alma y el espíritu."
        },
        {
          reference: "Job 19:23, 24",
          purpose: "Las palabras de Job escritas para siempre",
          text: "¡Ojalá mis palabras quedaran escritas! ¡Ojalá se inscribieran en un libro! ¡Ojalá se grabaran con cincel de hierro y plomo, en la roca para siempre!"
        }
      ]
    }
  ],
  paragraphs: [
    {
      number: 1,
      content: "¿HA TENIDO usted últimamente el gusto de leer el libro de Job? Aunque se escribió hace unos 3.500 años, se lo sigue considerando una joya de la literatura universal. Se ha destacado la sencillez de su estructura, la belleza de su estilo, la expresividad de su lenguaje y la genialidad de su escritor. Es cierto que Moisés fue quien escribió este magnífico libro, pero su verdadero autor es Jehová (2 Tim. 3:16).",
      summary: "El libro de Job se escribió hace unos **3.500 años** y se lo sigue considerando una **joya de la literatura universal**. **Moisés** fue quien lo escribió, pero su verdadero autor es **Jehová** (2 Tim. 3:16)."
    },
    {
      number: 2,
      content: "El libro de Job es una parte clave de la Biblia. ¿Por qué? Una razón es que muestra claramente cuál es la importante cuestión a la que nos enfrentamos todos los seres inteligentes: la santificación del nombre de Jehová. Otra razón es que nos ayuda a conocer mejor las hermosas cualidades de Dios, como el amor, la sabiduría, la justicia y el poder. Por ejemplo, en este libro se llama a Jehová 31 veces el \"Todopoderoso\", más que en todos los demás libros de la Biblia juntos. Una tercera razón es que el libro de Job explica por qué permite Dios el sufrimiento y responde otras grandes preguntas de la vida.",
      summary: "El libro de Job muestra la cuestión de la **santificación del nombre de Jehová**. Nos ayuda a conocer las **cualidades de Dios**: amor, sabiduría, justicia y poder. Se llama a Jehová **31 veces** 'el **Todopoderoso**', más que en todos los demás libros juntos. También explica **por qué permite Dios el sufrimiento**."
    },
    {
      number: 3,
      content: "Podemos decir que leer el libro de Job es como subir a lo alto de una montaña. Al llegar a la cima podemos ver mejor todo el panorama que nos rodea. Igualmente, al estudiar este libro podemos ver nuestros problemas desde una perspectiva más elevada: la de Jehová. En este artículo analizaremos cómo nos ayuda el libro de Job cuando estamos sufriendo. Veremos cómo la historia de Job tal vez benefició a algunos israelitas en el pasado y cómo nos beneficia a nosotros hoy. Y también hablaremos de cómo usar este relato para ayudar a otros.",
      summary: "Leer el libro de Job es como **subir a lo alto de una montaña**: nos permite ver nuestros problemas desde la **perspectiva de Jehová**. Nos ayuda a entender lo que estamos pasando y nos da **fuerzas para aguantar**."
    },
    {
      number: 4,
      content: "Job vivió en la tierra de Uz —que posiblemente estaba en algún punto al este de la Tierra Prometida y en el norte de Arabia— durante el tiempo en que los israelitas eran esclavos en Egipto. A diferencia de algunos israelitas, que habían empezado a adorar ídolos en Egipto, Job sí sirvió fielmente a Jehová (Jos. 24:14; Ezeq. 20:8). De hecho, Dios dijo: \"No hay nadie como él en la tierra\" (Job 1:8). Job tenía muchísimas riquezas y era el hombre más importante y respetado de todos los orientales (Job 1:3). Seguro que Satanás estaba muy furioso al ver que este hombre tan prominente e influyente servía a Dios con integridad.",
      summary: "Job vivió en la **tierra de Uz** durante la esclavitud de los israelitas en Egipto. A diferencia de algunos que **adoraban ídolos**, Job sirvió **fielmente a Jehová**. Dios dijo: '**No hay nadie como él en la tierra**' (Job 1:8). Era el hombre **más importante de todos los orientales**."
    },
    {
      number: 5,
      content: "Satanás afirmó que Job le daría la espalda a Jehová si sufría (Job 1:7-11; 2:2-5). Con esa acusación, hizo surgir muchas preguntas importantes. Por esa razón, aunque Jehová amaba profundamente a Job, le permitió a Satanás que intentara demostrar si tenía razón o no (Job 1:12-19; 2:6-8). Así que el Diablo hizo que Job perdiera sus rebaños, mató a sus 10 hijos y le envió una terrible enfermedad que le cubría todo el cuerpo. Sin embargo, estos ataques crueles fracasaron, pues Job se mantuvo leal a Jehová (lea Job 1:20-22; 2:9, 10). Con el tiempo, Jehová hizo que Job recuperara su salud, sus riquezas y su buena reputación, y le dio 10 hijos más. También lo bendijo con una larga vida. Job vivió otros 140 años, y así pudo ver a cuatro generaciones de sus descendientes (Job 42:10-13, 16).",
      summary: "**Satanás** afirmó que Job le daría la espalda a Jehová si sufría. Jehová le **permitió** ponerlo a prueba. El Diablo le quitó sus **rebaños**, mató a sus **10 hijos** y le envió una **terrible enfermedad**. Pero Job se mantuvo **leal** y no pecó. Después, Jehová le devolvió su **salud**, sus **riquezas** y su **reputación**, le dio **10 hijos más** y vivió otros **140 años**."
    },
    {
      number: 6,
      content: "Los israelitas habían sufrido muchísimo en Egipto. Pensemos, por ejemplo, en Josué y Caleb. Ellos pasaron su juventud siendo esclavos, y después tuvieron que estar 40 años vagando por el desierto por culpa de la desobediencia de otros. Si los israelitas conocieron la historia sobre las pruebas de Job y en qué acabó todo, sin duda los ayudó a ellos —y también a las siguientes generaciones de israelitas— a entender quién es el principal causante del sufrimiento. Además, pudieron comprender mejor por qué permite Dios el sufrimiento y lo importantes que son para él la integridad y la fidelidad de los seres humanos.",
      summary: "La historia de Job ayudó a los **israelitas** a entender quién es el **principal causante del sufrimiento**. Comprendieron **por qué permite Dios el sufrimiento** y lo importantes que son la **integridad** y la **fidelidad** para Jehová. **Josué** y **Caleb** sufrieron como esclavos y vagaron **40 años** por el desierto."
    },
    {
      number: 7,
      content: "Por desgracia, en nuestros días muchas personas pierden su fe en Dios porque no entienden por qué les ocurren cosas malas a las personas buenas. Veamos el caso de una mujer de Ruanda llamada Hazel. Cuando era joven, ella creía en Dios. Pero luego le pasaron cosas que le hicieron cambiar de opinión. Sus padres se divorciaron y su madre se casó con otro hombre, que trataba muy mal a Hazel. En su adolescencia, un hombre la violó. Cuando Hazel trató de buscar consuelo en su religión, no lo recibió. Un día le escribió una carta a Dios en la que le decía: \"Te he orado, me he esforzado por hacer el bien, pero tú solo me has pagado con sufrimientos. Así que he decidido dejarte y hacer lo que me parezca bien para ser feliz\". Nos duele muchísimo ver a personas como Hazel, a las que han hecho creer que Dios es el responsable del sufrimiento.",
      summary: "Muchas personas **pierden su fe** porque no entienden por qué les ocurren **cosas malas**. **Hazel**, de Ruanda, sufrió el **divorcio** de sus padres, el **maltrato** de su padrastro y fue **violada** en su adolescencia. No encontró consuelo en su religión y le escribió a Dios: 'He decidido **dejarte**'."
    },
    {
      number: 8,
      content: "Pero nosotros hemos aprendido gracias al libro de Job que el causante del sufrimiento no es Dios, sino Satanás. También hemos aprendido a no asumir que quienes sufren están cosechando lo que sembraron, pues la Biblia explica que a todos nos puede llegar \"algún mal momento y algún suceso imprevisto\" (Ecl. 9:11; Job 4:1, 8). Y hemos aprendido que, si seguimos sirviendo fielmente a Jehová cuando pasamos por dificultades, lo ayudamos a defender su reputación y a demostrar que Satanás es un mentiroso (Job 2:3; Prov. 27:11). La Biblia nos ha enseñado la verdadera razón por la que sufrimos nosotros y nuestros seres queridos. ¡Qué agradecidos estamos! ¿Y qué pasó con Hazel? Ella empezó a estudiar con los Testigos y descubrió que Dios no era el responsable de sus sufrimientos. Dijo: \"Le abrí mi corazón a Jehová y le dije que en realidad nunca quise dejarlo. Simplemente es que no lo conocía de verdad. Ahora sé que Jehová me quiere y por fin soy muy feliz\".",
      summary: "El **causante del sufrimiento** no es Dios, sino **Satanás**. No debemos **juzgar** a quienes sufren, pues a todos nos puede llegar 'algún **suceso imprevisto**' (Ecl. 9:11). Si nos mantenemos **fieles**, ayudamos a Jehová a demostrar que Satanás es un **mentiroso**. **Hazel** estudió con los Testigos y descubrió que **Dios no era el responsable** de sus sufrimientos."
    },
    {
      number: 9,
      content: "Imaginemos a Job sentado en medio de las cenizas, solo, con el cuerpo cubierto de úlceras y encogido del dolor. Está en los huesos, y su piel se le cae a tiras, ennegrecida por la enfermedad. Con las pocas fuerzas que le quedan, lo único que logra hacer es rascarse las heridas con un trozo de vasija y quejarse con desesperación. Podría parecer que Job simplemente está sobreviviendo. Pero no es así, está aguantando (lea Santiago 5:11). ¿Qué lo ayudó a mantenerse fiel?",
      summary: "Job estaba **solo**, con el cuerpo cubierto de **úlceras**, en los huesos, y su piel se le caía a tiras. Lo único que podía hacer era **rascarse las heridas** con un trozo de vasija. Aunque parecía que solo estaba **sobreviviendo**, en realidad estaba **aguantando** con fe (Santiago 5:11)."
    },
    {
      number: 10,
      content: "Job se sentía con la libertad de contarle a Jehová todo lo que había en su interior (Job 10:1, 2; 16:20). Por ejemplo, en el capítulo 3 vemos que se quejó con amargura de todas sus tragedias, pensando erróneamente que venían de Jehová. Después, en las conversaciones que tuvo con sus tres supuestos amigos, defendió firmemente su integridad, dirigiéndose en muchos casos a Jehová. Sus palabras parecen dar a entender que por un tiempo se creyó más justo que Dios (Job 10:1-3; 32:1, 2; 35:1, 2). Pero Job también admitió que en su empeño por defenderse había dicho cosas precipitadas (Job 6:3, 26). En el capítulo 31 leemos que quería que Jehová lo escuchara y lo declarara inocente (Job 31:35). Claro está, Job no tenía derecho a exigirle explicaciones a Dios sobre por qué estaba sufriendo.",
      summary: "Job tenía una relación tan **cercana** con Jehová que se sentía libre de **contarle todo**. Por un tiempo se creyó **más justo que Dios** y admitió que había dicho cosas **precipitadas** (Job 6:3, 26). Quería que Jehová lo declarara **inocente**, aunque no tenía derecho a **exigirle explicaciones**."
    },
    {
      number: 11,
      content: "Ahora entendemos que detrás de las palabras que Job le dirigió a Jehová estaban su estrecha relación con él y su total confianza en que tomaría nota de su fidelidad. Cuando Jehová finalmente le respondió desde una tempestad de viento, no le dio una explicación detallada de por qué estaba sufriendo ni le recriminó sus quejas y sus insistentes proclamaciones de inocencia. Más bien, lo corrigió igual que un buen padre corrige a su hijo. Y así le llegó al corazón, pues Job reconoció humildemente lo limitado que era su conocimiento y se retractó de todas sus palabras irreflexivas (Job 31:6; 40:4, 5; 42:1-6).",
      summary: "Jehová le respondió a Job desde una **tempestad de viento**. No le explicó en detalle **por qué estaba sufriendo** ni le recriminó sus quejas. Lo **corrigió con cariño**, como un **buen padre** corrige a su hijo. Job reconoció **humildemente** sus limitaciones y se **retractó** de todas sus palabras irreflexivas (Job 40:4, 5; 42:1-6)."
    },
    {
      number: 12,
      content: "Pensemos en Moisés. Como líder de la nación de Israel, tuvo que aguantar muchas dificultades, decepciones y momentos de desánimo. Pero, a diferencia de los israelitas, que muchas veces se quejaron de Jehová, Moisés acudió a él para contarle lo que le preocupaba (Ex. 16:6-8; Núm. 11:10-14; 14:1-4, 11; 16:41, 49; 17:5). Además, tuvo que mostrar aguante al recibir disciplina de parte de Jehová. Por ejemplo, mientras los israelitas estaban acampados en Cadés, probablemente cuando ya llevaban 40 años viajando por el desierto, Moisés \"habló precipitadamente con sus labios\" y no le dio a Jehová la gloria que merecía (Sal. 106:32, 33). Como resultado, Jehová no le permitió entrar en la Tierra Prometida (Deut. 32:50-52). Seguro que eso le dolió muchísimo a Moisés, pero fue humilde y aceptó la corrección. Es posible que el relato de Job también ayudara a las siguientes generaciones de israelitas a soportar las dificultades. Si meditaban en la historia de Job, podrían aprender a expresarle sus sentimientos a Jehová, a no creerse más justos que Dios y a aceptar con humildad su disciplina.",
      summary: "**Moisés** tuvo que aguantar muchas **dificultades** como líder de Israel. A diferencia de los israelitas que se **quejaron de Jehová**, Moisés **acudió a él** para contarle sus preocupaciones. En Cadés, 'habló **precipitadamente**' y no le dio a Jehová la **gloria** que merecía (Sal. 106:32, 33), por lo que no pudo entrar en la **Tierra Prometida**. Pero fue **humilde** y aceptó la **corrección**."
    },
    {
      number: 13,
      content: "Los cristianos también necesitamos aguantar (lea Hebreos 10:36). Por ejemplo, puede que estemos lidiando con un problema físico o emocional, con una situación familiar complicada, con la muerte de un ser querido o con algún otro problema grave. Y quizás a veces alguien diga o haga algo que empeore la situación (Prov. 12:18). Sin embargo, el libro de Job nos enseña que podemos expresarle a Jehová nuestros sentimientos más profundos con la confianza de que nos escuchará (1 Juan 5:14). Él no se enojará si al desahogarnos decimos algo que esté fuera de lugar, como le ocurrió a Job. Al contrario, nos dará las fuerzas y la sabiduría que necesitamos para aguantar (2 Crón. 16:9; Sant. 1:5). Y, tal como hizo con Job, si ve que necesitamos algo de corrección, nos la dará mediante su Palabra, su organización, un anciano o un amigo maduro. El ejemplo de Job nos enseña que, cuando Jehová nos corrige, tenemos que mostrar aguante (Heb. 12:5-7). A Job le hizo bien escuchar a Jehová, y a nosotros también nos hará bien ser humildes y aceptar los consejos que recibamos (2 Cor. 13:11). ¡Cuántas lecciones valiosas nos enseña la historia de Job!",
      summary: "Los cristianos también necesitamos **aguantar** en las pruebas. Podemos expresarle a Jehová nuestros **sentimientos más profundos** con la confianza de que nos **escuchará**. Él no se **enojará** si decimos algo fuera de lugar. Nos dará **fuerzas** y **sabiduría** para aguantar (2 Crón. 16:9). Si necesitamos **corrección**, nos la dará mediante su **Palabra**, su **organización**, un anciano o un amigo maduro."
    },
    {
      number: 14,
      content: "Cuando vamos a predicar, algunas personas nos preguntan por qué existe el sufrimiento. Y nos encanta mostrarles lo que dice la Biblia. A menudo les explicamos lo que sucedió en el jardín de Edén. Tal vez empecemos diciendo que Satanás, un ángel malvado, les dijo una mentira a Adán y Eva, y como resultado ellos desobedecieron a Dios (Gen. 3:1-6). Quizás luego expliquemos que, por culpa de la rebelión de Adán y Eva, todos sufrimos y morimos (Rom. 5:12). Y, por último, puede que digamos que Dios está permitiendo que pase suficiente tiempo para desmentir a Satanás y para que la gente sepa que los seres humanos volverán a ser perfectos (Apoc. 21:3, 4). Sin duda, esa es una buena explicación y puede ayudar a muchas personas a entender por qué sufrimos.",
      summary: "Para explicar el sufrimiento, podemos hablar de lo que pasó en el **jardín de Edén**: **Satanás** les mintió a **Adán y Eva**, y ellos **desobedecieron** a Dios (Gén. 3:1-6). Por esa rebelión, todos **sufrimos y morimos** (Rom. 5:12). Dios permite que pase tiempo para **desmentir a Satanás** y para que los humanos vuelvan a ser **perfectos** (Apoc. 21:3, 4)."
    },
    {
      number: 15,
      content: "Otra manera útil de responder cuando alguien nos pregunta por qué existe el sufrimiento es hablando de Job. Para empezar, podríamos felicitarlo por hacer esa pregunta tan buena. Luego podemos decirle que un hombre de la antigüedad llamado Job se preguntó lo mismo al pasar por muchos sufrimientos. Incluso pensó que Dios de alguna manera se los estaba causando (Job 7:17-21). Es posible que a la persona le llame la atención ver que a lo largo de la historia otros han hecho esa misma pregunta. A continuación, podríamos explicarle que en el caso de Job la culpa no era de Dios, sino del Diablo. Lo estaba haciendo sufrir para demostrar que los seres humanos solo sirven a Dios porque les da cosas buenas y que lo abandonarían ante las desgracias. Entonces podríamos añadir que, aunque Dios no causó el sufrimiento de Job, lo permitió porque está convencido de que los seres humanos pueden mantenerse fieles y demostrar que Satanás es un mentiroso. Y podríamos acabar diciendo que al final Dios bendijo a Job por su fidelidad. Como vemos, siempre podemos consolar a otros diciéndoles que su sufrimiento no viene de Jehová.",
      summary: "Podemos hablar de **Job** cuando alguien pregunte por qué existe el sufrimiento. **Felicitarlo** por su pregunta y contarle que Job se preguntó lo mismo. La culpa no era de **Dios**, sino del **Diablo**, que quería demostrar que los humanos solo sirven a Dios **por interés**. Dios lo permitió porque confía en que podemos mantenernos **fieles**. Al final, Dios **bendijo** a Job por su fidelidad."
    },
    {
      number: 16,
      content: "Veamos cómo el libro de Job ayudó a un hombre llamado Mario. En el 2021, una hermana estaba predicando por teléfono, y la primera persona a la que llamó fue Mario. Le leyó un texto bíblico y le explicó que Dios no solo escucha nuestras oraciones, sino que también nos ofrece un futuro y una esperanza. Después le preguntó qué le parecía el versículo y Mario le contó que antes de recibir su llamada estaba escribiendo una nota de suicidio. Dijo: \"Creo en Dios, pero esta mañana sentí que me había abandonado\". Durante la segunda llamada hablaron sobre los sufrimientos de Job, y Mario decidió leer todo ese libro de la Biblia. Así que la hermana le envió un enlace a jw.org para que pudiera leerlo en línea. ¿Cuál fue el resultado? Mario aceptó un curso bíblico y le emocionó seguir aprendiendo sobre el Dios que le demostró su amor interesándose en él.",
      summary: "**Mario** estaba escribiendo una **nota de suicidio** cuando recibió una llamada de **predicación** en 2021. Dijo que creía en Dios, pero sentía que lo había **abandonado**. Al conocer la historia de **Job**, decidió leer todo el libro y aceptó un **curso bíblico**. Le emocionó aprender sobre el Dios que le demostró su **amor**."
    },
    {
      number: 17,
      content: "Está claro que la Biblia tiene muchísimo poder: ayuda a las personas y consuela a quienes sufren (Heb. 4:12). Estamos profundamente agradecidos de que Jehová incluyera la historia de Job en su Palabra (Job 19:23, 24). El libro de Job nos asegura que \"Dios no actúa con maldad\" (lea Job 34:12). También nos enseña por qué permite el sufrimiento y cómo podemos aguantar. Además, nos ayuda a consolar a quienes están sufriendo. En el siguiente artículo sacaremos más lecciones del libro de Job y nos centraremos en cómo dar buenos consejos.",
      summary: "La **Biblia** tiene muchísimo poder: ayuda a las personas y **consuela** a quienes sufren (Heb. 4:12). El libro de Job nos asegura que '**Dios no actúa con maldad**' (Job 34:12). Nos enseña **por qué** permite el sufrimiento, **cómo aguantar** y nos ayuda a **consolar** a otros."
    }
  ],
  reviewQuestions: [
    {
      question: "¿Cómo nos beneficia entender por qué permitió Dios que Job sufriera?",
      answer: [
        "Nos ayuda a entender quién es el principal causante del sufrimiento: **Satanás, no Dios**.",
        "Comprendemos mejor **por qué permite Dios el sufrimiento**.",
        "Aprendemos lo importantes que son para Jehová **la integridad y la fidelidad**.",
        "Podemos ver nuestros problemas desde **una perspectiva más elevada**."
      ]
    },
    {
      question: "¿Cómo puede el relato de Job ayudarnos a aguantar?",
      answer: [
        "Nos enseña a **expresarle nuestros sentimientos** a Jehová.",
        "Aprendemos a **no creernos más justos que Dios**.",
        "Nos ayuda a **aceptar con humildad la disciplina** de Jehová.",
        "Vemos que Jehová **recompensa la fidelidad**."
      ]
    },
    {
      question: "¿Cómo podemos usar el libro de Job para ayudar a otros?",
      image: "https://i.imgur.com/qXlNimY.png",
      answer: [
        "Podemos enseñarles que **el causante del sufrimiento es Satanás, no Dios**.",
        "Les ayudamos a ver que **no deben asumir que quienes sufren están cosechando lo que sembraron**.",
        "Los consolamos mostrándoles que Jehová **ve y recompensa la fidelidad**.",
        "Les mostramos que **'Dios no actúa con maldad'** (Job 34:12)."
      ]
    }
  ],
  finalSong: "Canción 156: Si tienes fe"
};

export default article48;
