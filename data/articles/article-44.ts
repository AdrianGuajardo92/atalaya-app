import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS DEL ARTÍCULO 44
// "Cómo mantener la alegría en la vejez"
// ============================================
export const biblicalTexts44: Record<string, { reference: string; text: string }[]> = {
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
  ]
};

// ============================================
// DATOS DEL ARTÍCULO 44
// ============================================
export const article44: ArticleData = {
  metadata: {
    articleNumber: 44,
    week: "5-11 Ene",
    month: "Noviembre",
    year: 2025
  },
  song: "Canción 138: Los cabellos blancos, una hermosa corona",
  title: "Cómo mantener la alegría en la vejez",
  titleLSM: "Tú, anciano, contento. Disfrutar, seguir.",
  biblicalText: "\"En su vejez seguirán prosperando\" (SAL. 92:14).",
  theme: "Por qué es importante que los cristianos mayores mantengan la alegría y cómo pueden conseguirlo.",
  questions: [
    {
      number: "1, 2",
      textEs: "¿Cómo ve Jehová a los hermanos fieles que están envejeciendo? (Salmo 92:12-14; vea también la imagen).",
      textLSM: "¿Ellos, testigos de Jehová? ¿Ancianos Jehová los ve a ellos y los valora?",
      paragraphs: [1, 2],
      readText: "LEE Salmo 92:12-14",
      image: "https://i.imgur.com/5AoDTVt.png",
      infographic: "https://i.imgur.com/jzr4XuK.png",
      answer: [
        "Jehová compara a los hermanos mayores con árboles prósperos.",
        "Los cristianos de edad avanzada son bellísimos a los ojos de Dios.",
        "Jehová ve más allá de las canas y se fija en sus extraordinarias cualidades.",
        "Ellos le han servido fielmente durante muchos años tanto en las buenas como en las malas."
      ],
      flashcards: [
        {
          question: "¿Con qué compara Jehová a los hermanos que están envejeciendo?",
          answer: "Con árboles prósperos, como el cerezo de flor japonés que puede superar los 1.000 años."
        },
        {
          question: "¿En qué se fija Jehová cuando mira a los cristianos mayores?",
          answer: "Ve más allá de las canas y se fija en sus extraordinarias cualidades y su servicio fiel durante muchos años."
        }
      ],
      biblicalCards: [
        {
          reference: "Salmo 92:12-14",
          purpose: "Cómo ve Jehová a los mayores fieles",
          text: "El justo florecerá como la palmera, crecerá como el cedro del Líbano. Plantados en la casa de Jehová, florecerán en los patios de nuestro Dios. En su vejez seguirán prosperando; estarán llenos de vitalidad y frescura."
        },
        {
          reference: "Proverbios 16:31",
          purpose: "Las canas son una corona de hermosura",
          text: "Las canas son una corona de hermosura cuando se hallan en el camino de la justicia."
        }
      ]
    },
    {
      number: "3",
      textEs: "Mencione cómo usó Jehová a alguno de sus siervos de edad avanzada para cumplir su voluntad.",
      textLSM: "¿Ellos, ancianos Jehová, les da asignaciones?",
      paragraphs: [3],
      infographic: "https://i.imgur.com/3EjZoaJ.png",
      answer: [
        "Jehová no piensa que perdamos valor con los años.",
        "Sara ya era mayor cuando se le anunció que tendría un hijo del que saldría una nación poderosa.",
        "Moisés estaba muy entrado en años cuando se le encargó sacar a los israelitas de Egipto.",
        "El apóstol Juan escribió cinco libros bíblicos en su vejez."
      ],
      flashcards: [
        {
          question: "¿Qué edad tenían Moisés y Aarón cuando recibieron la comisión de sacar a Israel de Egipto?",
          answer: "Moisés tenía 80 años y Aarón 83 años (Éxodo 7:6, 7)."
        },
        {
          question: "¿Cuántos libros bíblicos escribió el apóstol Juan en su vejez?",
          answer: "Cinco libros: el Evangelio de Juan, tres cartas (1, 2 y 3 Juan) y Revelación."
        }
      ],
      biblicalCards: [
        {
          reference: "Génesis 17:15-19",
          purpose: "Sara recibiría un hijo en su vejez",
          text: "Dios también le dijo a Abrahán: 'En cuanto a Sarai tu esposa, no la llamarás más Sarai, porque Sara será su nombre. La bendeciré y también te daré un hijo de ella'."
        },
        {
          reference: "Éxodo 7:6, 7",
          purpose: "Moisés y Aarón eran mayores cuando recibieron su comisión",
          text: "Moisés y Aarón hicieron exactamente lo que Jehová les había mandado. Moisés tenía 80 años y Aarón 83 cuando hablaron con el faraón."
        }
      ]
    },
    {
      number: "4",
      textEs: "Según Proverbios 15:15, ¿qué cualidad ayuda a los hermanos mayores a encarar las dificultades? (Vea también la imagen).",
      textLSM: "Imágenes de ellos mayores de edad, problemas aguantar.",
      paragraphs: [4],
      readText: "LEE Proverbios 15:15",
      image: "https://i.imgur.com/lDs25TK.png",
      infographic: "https://i.imgur.com/R5LL55G.png",
      answer: [
        "La alegría es la cualidad que ayuda a los mayores a encarar las dificultades.",
        "La alegría está estrechamente relacionada con la felicidad, que forma parte del fruto del espíritu.",
        "La clave para vivir alegres y felices es tener una amistad cercana con Jehová."
      ],
      flashcards: [
        {
          question: "¿Qué dijo una hermana sobre hacerse viejo?",
          answer: "\"Hacerse viejo no es para gallinas\", ilustrando que la vejez trae muchos desafíos."
        },
        {
          question: "¿Cuál es la clave para vivir alegres y felices según la nota del artículo?",
          answer: "Tener una amistad cercana con Jehová, ya que la alegría forma parte del fruto del espíritu."
        }
      ],
      biblicalCards: [
        {
          reference: "Proverbios 15:15",
          purpose: "La alegría ayuda a encarar dificultades",
          text: "Todos los días del afligido son malos, pero el que tiene un corazón alegre disfruta de un banquete continuo."
        },
        {
          reference: "Gálatas 5:22",
          purpose: "La alegría forma parte del fruto del espíritu",
          text: "En cambio, el fruto del espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fe."
        }
      ]
    },
    {
      number: "5",
      textEs: "¿Qué cosas podrían desanimarnos al hacernos mayores?",
      textLSM: "Ancianos a veces entristecer, porque.",
      paragraphs: [5],
      section: "EL RETO DE MANTENER LA ALEGRÍA",
      sectionLSM: "Ancianos disfrutar siempre, no porque.",
      infographic: "https://i.imgur.com/gTX2505.png",
      answer: [
        "Nos puede entristecer ser incapaces de hacer lo mismo que antes.",
        "Quizás extrañemos la juventud y la buena salud de otros tiempos.",
        "Ruby cuenta que vestirse es muy difícil porque le duele todo el cuerpo y tiene las manos deformadas por la artrosis.",
        "Harold, que sirvió en Betel, dice que ya no reconoce a la persona en la que se ha convertido."
      ],
      flashcards: [
        {
          question: "¿Qué tareas sencillas se vuelven difíciles para Ruby debido a su artrosis?",
          answer: "Vestirse, levantar los pies para ponerse las medias, y cualquier tarea que requiera usar las manos."
        },
        {
          question: "¿Qué actividad disfrutaba Harold antes y por qué le frustra no poder hacerla ahora?",
          answer: "El béisbol era su afición; los demás decían '¡Pásale la pelota a Harold, que nunca falla!'. Ahora cree que ni sería capaz de lanzarla."
        }
      ],
      biblicalCards: [
        {
          reference: "Eclesiastés 7:10",
          purpose: "No añorar los tiempos pasados",
          text: "No digas: '¿Por qué los tiempos pasados fueron mejores que estos?'. Porque no es sabio preguntar eso."
        }
      ]
    },
    {
      number: "6",
      textEs: "a) ¿Qué otras cosas podrían desanimarnos? b) ¿Qué deben tomar en cuenta los hermanos mayores para saber si deberían dejar de conducir?",
      textLSM: "a) ¿Necesario otros que les ayuden? ¿Cómo se sienten? b) ¿Carro conducir, seguir o dejar?",
      paragraphs: [6],
      infographic: "https://i.imgur.com/5zjT0MT.png",
      answer: [
        "Nos puede desanimar ir perdiendo nuestra autonomía.",
        "Es difícil depender de un cuidador o tener que irnos a vivir con algún hijo.",
        "Quizás ya no podamos conducir o ir solos a los sitios.",
        "Aunque no podamos valernos por nosotros mismos, seguimos siendo muy valiosos para Jehová.",
        "Jehová se fija en cómo somos por dentro: en el amor que le tenemos a él y a nuestros hermanos."
      ],
      flashcards: [
        {
          question: "¿Qué nos puede ayudar cuando ya no podemos valernos por nosotros mismos?",
          answer: "Recordar que seguimos siendo muy valiosos para Jehová y que él se fija en cómo somos por dentro."
        },
        {
          question: "¿En qué se fija Jehová según 1 Samuel 16:7?",
          answer: "Jehová se fija en cómo somos por dentro: en el gran amor y aprecio que les tenemos a él y a nuestros hermanos."
        }
      ],
      biblicalCards: [
        {
          reference: "1 Samuel 16:7",
          purpose: "Jehová mira el corazón",
          text: "El hombre ve lo que aparece ante sus ojos, pero Jehová ve lo que hay en el corazón."
        }
      ]
    },
    {
      number: "7",
      textEs: "¿Qué nos ayudará si nos entristece la posibilidad de no ver el fin de este sistema?",
      textLSM: "Importante que tú recuerdes que.",
      paragraphs: [7],
      infographic: "https://i.imgur.com/k4cobxP.png",
      answer: [
        "Recordar que Jehová está esperando pacientemente antes de ponerle fin a este mundo malvado.",
        "Esa paciencia tiene un objetivo: darles tiempo a millones de personas para que conozcan a Dios.",
        "Podemos pensar en todas las personas que se beneficiarán de la paciencia de Jehová.",
        "Tal vez personas de nuestra propia familia se beneficien antes de que venga el fin."
      ],
      flashcards: [
        {
          question: "¿Por qué está esperando Jehová pacientemente antes de ponerle fin a este sistema?",
          answer: "Para darles tiempo a millones de personas para que conozcan a Dios y le sirvan (2 Pedro 3:9)."
        },
        {
          question: "¿En qué podemos pensar cuando nos venza el desánimo por no ver el fin?",
          answer: "En todas las personas —tal vez hasta de nuestra propia familia— que se beneficiarán de la paciencia de Jehová."
        }
      ],
      biblicalCards: [
        {
          reference: "Isaías 30:18",
          purpose: "Jehová espera pacientemente",
          text: "Pero Jehová sigue esperando para mostrarles su favor, y se levantará para tenerles misericordia. Porque Jehová es un Dios de justicia. Felices son todos los que siguen esperando en él."
        },
        {
          reference: "2 Pedro 3:9",
          purpose: "Jehová quiere que todos alcancen el arrepentimiento",
          text: "Jehová no es lento en cuanto a su promesa, como algunos consideran la lentitud, sino que es paciente con ustedes porque no desea que nadie sea destruido; más bien, desea que todos alcancen el arrepentimiento."
        }
      ]
    },
    {
      number: "8",
      textEs: "¿Cómo podrían afectar a los mayores los problemas de la edad?",
      textLSM: "Mayores de edad a veces se entrometen y explicar y atacar a todos por qué.",
      paragraphs: [8],
      infographic: "https://i.imgur.com/cQuApEL.png",
      answer: [
        "Cuando no nos sentimos bien, probablemente digamos o hagamos cosas que después lamentemos.",
        "Eso le pasó al fiel Job: el sufrimiento lo empujó a usar palabras 'impetuosas'.",
        "Un problema médico podría llevarnos a hacer o decir cosas que no son habituales en nosotros.",
        "Nadie debería tomar la edad o la salud como excusas para ser grosero o demasiado exigente.",
        "Si hacemos un comentario poco amable, no deberíamos dudar en pedir perdón."
      ],
      flashcards: [
        {
          question: "¿Qué ejemplo bíblico muestra cómo el sufrimiento puede afectar nuestras palabras?",
          answer: "Job usó palabras 'impetuosas' debido a su sufrimiento (Job 6:1-3)."
        },
        {
          question: "¿Qué debemos hacer si hacemos un comentario poco amable?",
          answer: "No deberíamos dudar en pedir perdón (Mateo 5:23, 24)."
        }
      ],
      biblicalCards: [
        {
          reference: "Job 6:1-3",
          purpose: "El sufrimiento puede afectar nuestras palabras",
          text: "Job respondió: 'Si tan solo pudiera pesarse mi angustia, si mi desgracia pudiera ponerse en la balanza, pesaría más que la arena de los mares. Por eso mis palabras han sido impetuosas'."
        },
        {
          reference: "Mateo 5:23, 24",
          purpose: "Hacer las paces cuando ofendemos a alguien",
          text: "Si llevas tu ofrenda al altar y allí recuerdas que tu hermano tiene algo contra ti, deja tu ofrenda allí delante del altar y ve primero a hacer las paces con tu hermano."
        }
      ]
    },
    {
      number: "9",
      textEs: "¿Por qué es bueno dejarnos ayudar? (Vea también las imágenes).",
      textLSM: "Imágenes de consejo 1, ¿qué significa?",
      paragraphs: [9],
      section: "CONSEJOS PARA MANTENER LA ALEGRÍA",
      sectionLSM: "Consejos 5, ayudarte a ti ya está contento, seguir.",
      image: "https://i.imgur.com/pxPuV59.png",
      answer: [
        "Al principio, podría resultarnos difícil aceptar ayuda.",
        "Gretl dice que le cuesta aceptar ayuda porque no quiere ser una carga para nadie.",
        "Cuando aceptamos la ayuda de los demás, les damos la oportunidad de experimentar la felicidad de dar.",
        "Nosotros también nos sentiremos felices al ver lo mucho que nos quieren y se preocupan por nosotros."
      ],
      flashcards: [
        {
          question: "¿Por qué le costaba a Gretl aceptar ayuda?",
          answer: "Porque no quería ser una carga para nadie. Le tomó tiempo aprender a ser humilde y admitir que necesitaba que le dieran una mano."
        },
        {
          question: "¿Qué beneficio reciben los que nos ayudan cuando aceptamos su ayuda?",
          answer: "Les damos la oportunidad de experimentar la felicidad que viene de dar (Hechos 20:35)."
        }
      ],
      biblicalCards: [
        {
          reference: "Gálatas 6:2",
          purpose: "Llevar las cargas los unos de los otros",
          text: "Sigan llevando las cargas los unos de los otros, y así cumplirán la ley del Cristo."
        },
        {
          reference: "Hechos 20:35",
          purpose: "Hay más felicidad en dar que en recibir",
          text: "En todo les he mostrado que trabajando así deben ayudar a los débiles y deben recordar las palabras del Señor Jesús, que dijo: 'Hay más felicidad en dar que en recibir'."
        }
      ]
    },
    {
      number: "10",
      textEs: "¿Por qué no debemos olvidarnos de demostrar nuestro agradecimiento? (Vea también la imagen).",
      textLSM: "Imágenes de consejo 2, ¿qué significa?",
      paragraphs: [10],
      image: "https://i.imgur.com/KBIKebB.png",
      answer: [
        "Cuando los demás hacen cosas por nosotros, sentimos gratitud, aunque tal vez se nos olvide demostrarla.",
        "Con una sonrisa y un 'gracias' lograremos que sientan que apreciamos mucho lo que hacen.",
        "Leah cuenta que una hermana le deja notitas de agradecimiento cargadas de cariño.",
        "Leah se siente muy feliz de saber que la hermana valora su ayuda."
      ],
      flashcards: [
        {
          question: "¿Qué hace una hermana mayor para demostrar su agradecimiento a Leah?",
          answer: "Le deja notitas de agradecimiento. Son pocas palabras, pero están cargadas de cariño."
        },
        {
          question: "¿Qué cosas sencillas podemos hacer para demostrar agradecimiento?",
          answer: "Una sonrisa y un 'gracias' lograrán que los demás sientan que apreciamos mucho lo que hacen."
        }
      ],
      biblicalCards: [
        {
          reference: "Colosenses 3:15",
          purpose: "Demostrar agradecimiento",
          text: "Además, que la paz del Cristo controle sus corazones, porque a esa paz fueron llamados en un solo cuerpo. Y demuéstrense agradecidos."
        },
        {
          reference: "1 Tesalonicenses 5:18",
          purpose: "Dar gracias en todo",
          text: "Den gracias por todo. Esta es la voluntad de Dios para ustedes mediante Cristo Jesús."
        }
      ]
    },
    {
      number: "11",
      textEs: "¿De qué maneras podemos ayudar a los demás? (Vea también la imagen).",
      textLSM: "Consejo 3, ¿qué significa?",
      paragraphs: [11],
      image: "https://i.imgur.com/SnOMDRy.png",
      answer: [
        "Cuando nos centramos en dar de nuestro tiempo y energías, será menos probable que nos centremos en nuestros propios problemas.",
        "Un proverbio africano compara a los mayores a bibliotecas que contienen un caudal de sabiduría.",
        "Seamos como 'bibliotecas andantes' y compartamos con los más jóvenes nuestro conocimiento y experiencia.",
        "Hagámosles preguntas, escuchémoslos y expliquémosles por qué obedecer a Jehová es siempre lo mejor."
      ],
      flashcards: [
        {
          question: "¿Con qué compara un proverbio africano a los mayores?",
          answer: "A bibliotecas que contienen un caudal de sabiduría."
        },
        {
          question: "¿Por qué los libros que se quedan en los estantes no son útiles?",
          answer: "Porque no enseñan nada ni cuentan historias. Debemos ser 'bibliotecas andantes' y compartir nuestro conocimiento."
        }
      ],
      biblicalCards: [
        {
          reference: "Salmo 71:18",
          purpose: "Transmitir sabiduría a la siguiente generación",
          text: "Y ahora que soy viejo y canoso, no me abandones, oh Dios, hasta que haya hablado de tu fuerza a esta generación, de tu poderío a todos los que han de venir."
        }
      ]
    },
    {
      number: "12",
      textEs: "¿Qué les promete Jehová en Isaías 46:4 a sus siervos de edad avanzada? (Vea también la imagen).",
      textLSM: "Ahí en la Biblia, Isaías 46:4. Promete que.",
      paragraphs: [12],
      readText: "LEE Isaías 46:4",
      image: "https://i.imgur.com/22ephk8.png",
      answer: [
        "Aunque a veces nos sintamos agotados física o emocionalmente, Jehová 'jamás se cansa ni se agota'.",
        "Jehová posee una energía infinita y la usa para fortalecer a sus siervos fieles de edad avanzada.",
        "Jehová promete sostener a sus siervos mayores.",
        "Cada vez que experimentamos personalmente su amor y su apoyo, no podemos menos que sentirnos muy felices."
      ],
      flashcards: [
        {
          question: "¿Qué promete Jehová en Isaías 46:4 a sus siervos mayores?",
          answer: "Promete sostenerlos: 'Hasta su vejez yo seré el mismo, y hasta que tengan canas los seguiré cargando'."
        },
        {
          question: "Según Isaías 40:28-31, ¿qué hace Jehová con su energía infinita?",
          answer: "La usa para fortalecer a sus siervos fieles de edad avanzada."
        }
      ],
      biblicalCards: [
        {
          reference: "Isaías 46:4",
          purpose: "Jehová promete sostener a los mayores",
          text: "Hasta su vejez yo seré el mismo, y hasta que tengan canas los seguiré cargando. Yo los he hecho, yo los llevaré, sí, yo los cargaré y los salvaré."
        },
        {
          reference: "Isaías 40:28-31",
          purpose: "Jehová da fuerzas a los cansados",
          text: "¿Es que no lo sabes? ¿No lo has oído? Jehová, el Creador de los confines de la tierra, es un Dios eterno. Él no se cansa ni se agota. Su entendimiento es insondable. Él da fuerzas al cansado y llena de energía al que no tiene fuerzas."
        },
        {
          reference: "Josué 23:14",
          purpose: "Jehová siempre cumple sus promesas",
          text: "Miren, hoy me voy por el camino de toda la tierra, y ustedes saben de todo corazón y con toda su alma que no ha fallado ni una sola de todas las cosas buenas que Jehová su Dios les prometió."
        }
      ]
    },
    {
      number: "13",
      textEs: "De acuerdo con 2 Corintios 4:16-18, ¿qué debemos recordar? (Vea también la imagen).",
      textLSM: "De ahí, de la Biblia, Segunda a los Corintios, capítulo 4, versículos 16 al 18. Al 18, extraemos un consejo y el quinto, ¿qué significa?",
      paragraphs: [13],
      readText: "LEE 2 Corintios 4:16-18",
      image: "https://i.imgur.com/XhPICeM.png",
      answer: [
        "La vejez y sus achaques son temporales.",
        "Comprender que algo negativo es temporal nos ayuda siempre a aguantarlo.",
        "La Biblia nos asegura que la vejez y la mala salud dejarán de existir.",
        "Nuestros mejores días no han quedado en el pasado, sino que están todavía por venir."
      ],
      flashcards: [
        {
          question: "Según Job 33:25, ¿qué le pasará a nuestra carne en el futuro?",
          answer: "Se volverá más tierna que cuando éramos jóvenes; volveremos a los días de nuestra juventud."
        },
        {
          question: "¿Qué nos ayuda siempre a aguantar algo negativo?",
          answer: "Comprender que es temporal."
        }
      ],
      biblicalCards: [
        {
          reference: "2 Corintios 4:16-18",
          purpose: "Las dificultades presentes son temporales",
          text: "Por eso no nos damos por vencidos. Aunque nuestro hombre exterior se está desgastando, nuestro hombre interior va renovándose día a día. Porque, aunque la tribulación es momentánea y leve, produce en nosotros una gloria que es de un peso cada vez más extraordinario y es eterna."
        },
        {
          reference: "Job 33:25",
          purpose: "Recuperaremos la juventud",
          text: "Que su carne se vuelva más tierna que cuando era joven; que vuelva a los días de su juventud."
        },
        {
          reference: "Isaías 33:24",
          purpose: "No habrá más enfermedad",
          text: "Y ningún habitante dirá: 'Estoy enfermo'. Al pueblo que viva en la tierra se le perdonará su pecado."
        }
      ]
    },
    {
      number: "14",
      textEs: "¿Por qué es importante llamar y visitar a los hermanos mayores?",
      textLSM: "Igual, mayores de edad van a visitarlos y les regalan videollamadas constantemente. No es muy importante, porque.",
      paragraphs: [14],
      section: "¿CÓMO PODEMOS AYUDAR A LOS MAYORES?",
      sectionLSM: "Ellos mayores de edad, congregación, es ayudan y la congregación, ¿qué hace?",
      answer: [
        "Las personas mayores suelen sentirse solas.",
        "Pierre dice que como no puede salir de casa en todo el día, se aburre terriblemente.",
        "A veces se siente como un viejo león enjaulado: nervioso y agobiado.",
        "Cuando visitamos a nuestros mayores, les demostramos que nos importan y que los queremos.",
        "Puede ser útil ponernos un recordatorio en el calendario para llamarlos o visitarlos."
      ],
      flashcards: [
        {
          question: "¿Cómo describe Pierre su situación cuando no puede salir de casa?",
          answer: "\"Me aburro terriblemente. A veces me siento como un viejo león enjaulado: nervioso y agobiado\"."
        },
        {
          question: "¿Qué consejo práctico da el artículo para no olvidar visitar a los mayores?",
          answer: "Ponernos un recordatorio en el calendario para enviarles un mensaje o llamarlos, y hacer planes concretos para visitarlos."
        }
      ],
      biblicalCards: [
        {
          reference: "Hebreos 13:16",
          purpose: "No olvidar hacer el bien",
          text: "Además, no se olviden de hacer el bien y de compartir lo que tienen con los demás, porque a Dios le agradan mucho esos sacrificios."
        },
        {
          reference: "Filipenses 1:10",
          purpose: "Centrarse en las cosas más importantes",
          text: "Para que se aseguren de cuáles son las cosas más importantes, a fin de que estén sin tacha y no hagan tropezar a otros hasta el día de Cristo."
        }
      ]
    },
    {
      number: "15",
      textEs: "¿Qué pueden hacer juntos jóvenes y ancianos?",
      textLSM: "Jóvenes y mayores de edad juntos, ¿qué hacer?",
      paragraphs: [15],
      answer: [
        "No hay que darle tantas vueltas; solo hay que ser un buen amigo.",
        "Conversar con ellos antes o después de las reuniones.",
        "Pedirles que cuenten cuál es su texto favorito o alguna anécdota graciosa de su infancia.",
        "Invitarlos a ver un programa de JW Broadcasting.",
        "Ayudarlos actualizándoles sus dispositivos electrónicos o descargándoles publicaciones.",
        "Invitarlos a hacer lo que más nos guste: ir de compras, salir a comer, ver la creación."
      ],
      flashcards: [
        {
          question: "¿Qué sugiere Carol que pueden hacer juntos jóvenes y mayores?",
          answer: "\"Invítalos a hacer lo que más te guste a ti. Aunque tengo mis añitos, sigo disfrutando de la vida. Me gusta ir de compras, salir a comer y ver la creación\"."
        },
        {
          question: "¿Qué cuenta Maira sobre su amistad con una hermana de 90 años?",
          answer: "\"Nos lleva 57 años de diferencia, pero muchas veces ni pienso en eso, pues nos pasamos todo el tiempo riendo y viendo pelis juntas. Y acudimos la una a la otra siempre que necesitamos consejo\"."
        }
      ],
      biblicalCards: [
        {
          reference: "Proverbios 17:17",
          purpose: "Un verdadero amigo ama en todo tiempo",
          text: "Un verdadero amigo ama en todo tiempo, y un hermano ha nacido para cuando hay angustia."
        }
      ]
    },
    {
      number: "16",
      textEs: "¿Por qué puede ser conveniente acompañar a los mayores al médico?",
      textLSM: "Mayores de edad, es necesario que vayan al doctor. Tú los puedes acompañar y les va a beneficiar, porque.",
      paragraphs: [16],
      answer: [
        "Podemos ofrecernos a quedarnos con ellos para asegurarnos de que los tratan bien.",
        "Incluso podríamos tomar notas de lo que diga el médico.",
        "Ruth explica que cuando va sola, los doctores no suelen tomarla en serio.",
        "Pero cuando va acompañada, el trato es muy diferente."
      ],
      flashcards: [
        {
          question: "¿Qué experiencia comparte Ruth sobre ir al médico?",
          answer: "Cuando va sola, los doctores no suelen tomarla en serio y le dicen que el problema es psicológico. Pero cuando va acompañada, el trato es muy diferente."
        },
        {
          question: "¿Qué podemos hacer para ayudar a los mayores durante las citas médicas?",
          answer: "Quedarnos con ellos para asegurarnos de que los tratan bien y tomar notas de lo que diga el médico."
        }
      ],
      biblicalCards: [
        {
          reference: "Isaías 1:17",
          purpose: "Defender a los que lo necesitan",
          text: "Aprendan a hacer el bien; busquen la justicia, corrijan al opresor, hagan justicia al huérfano, defiendan la causa de la viuda."
        }
      ]
    },
    {
      number: "17",
      textEs: "¿En qué facetas del ministerio podemos participar con los mayores?",
      textLSM: "Ellos mayores de edad predicar, nosotros les podemos ayudar como.",
      paragraphs: [17],
      answer: [
        "Invitarlos a estar en el carrito con nosotros, incluso llevándoles una silla.",
        "Invitarlos a que nos acompañen a un curso bíblico, tal vez dirigiéndolo en su hogar.",
        "Los ancianos pueden organizar reuniones para la predicación en la casa de estos hermanos.",
        "Valdrá la pena cualquier esfuerzo que hagamos por honrarlos."
      ],
      flashcards: [
        {
          question: "¿Qué pueden hacer los ancianos para facilitar que los mayores participen en el ministerio?",
          answer: "Organizar reuniones para la predicación en la casa de estos hermanos para que les resulte más fácil salir al ministerio."
        },
        {
          question: "¿Cómo podemos incluir a los mayores en la predicación con el carrito?",
          answer: "Invitarlos a estar en el carrito con nosotros, incluso llevándoles una silla para que se sienten."
        }
      ],
      biblicalCards: [
        {
          reference: "Proverbios 3:27",
          purpose: "No retener el bien cuando podemos darlo",
          text: "No retengas el bien de quienes lo merecen cuando esté a tu alcance darlo."
        },
        {
          reference: "Romanos 12:10",
          purpose: "Honrarnos unos a otros",
          text: "En amor fraternal, tengan tierno cariño unos por otros. En cuanto a mostrarse honra unos a otros, lleven la delantera."
        }
      ]
    },
    {
      number: "18",
      textEs: "¿De qué tratará el siguiente artículo de estudio?",
      textLSM: "Pregunta próximamente en la atalaya que se va a explicar, las preguntas de repaso.",
      paragraphs: [18],
      answer: [
        "Jehová y toda la congregación aman y valoran a los mayores.",
        "Envejecer es una etapa difícil, pero con la ayuda de Jehová es posible mantener la alegría.",
        "Nuestros mejores días no han quedado en el pasado, sino que están todavía por venir.",
        "El siguiente artículo hablará de cómo mantener la alegría al cuidar de un ser querido enfermo."
      ],
      flashcards: [
        {
          question: "¿Qué nos anima saber según el párrafo 18?",
          answer: "Que nuestros mejores días no han quedado en el pasado, sino que están todavía por venir."
        }
      ],
      biblicalCards: [
        {
          reference: "Salmo 37:25",
          purpose: "Jehová no abandona a los justos",
          text: "Fui joven y ahora soy viejo, pero nunca he visto al justo abandonado ni a sus hijos mendigando pan."
        }
      ]
    }
  ],
  paragraphs: [
    { number: 1, content: "EN ALGUNAS partes del mundo se considera todo un honor envejecer. Sin embargo, en otras, las personas hacen lo imposible por disimular el paso de los años. Por ejemplo, tan pronto ven la primera cana, se la arrancan. Pero, no porque se arranquen las canas, van a dejar de aparecer. Este ejemplo ilustra lo difícil que puede ser aceptar que nos estamos haciendo mayores." },
    { number: 2, content: "Ahora bien, ¿cómo ve nuestro Padre celestial a los hermanos que están envejeciendo? (Prov. 16:31). Él los compara a árboles prósperos (lea Salmo 92:12-14). Y es una comparación muy adecuada. Los árboles que están repletos de hojas y fragantes flores suelen tener décadas de edad. Una de las especies más impresionantes y hermosas es el cerezo de flor japonés, que puede llegar a superar los 1.000 años. Al igual que estos árboles tan maduros, los cristianos de edad avanzada son bellísimos, sobre todo a los ojos de Dios. Jehová ve más allá de las canas y se fija en sus extraordinarias cualidades. Ellos le han servido fielmente durante muchos años tanto en las buenas como en las malas.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_1_lg.jpg", imageCaption: "Un matrimonio de edad avanzada está sentado en un banco al aire libre rodeado de cerezos en flor. Como florecientes árboles maduros, los hermanos mayores son muy hermosos y siguen prosperando." },
    { number: 3, content: "Jehová no piensa que perdamos valor con los años. Al contrario, muchas veces usa a sus siervos de edad avanzada para cumplir su voluntad. Por ejemplo, Sara ya era bastante mayor cuando se le anunció que tendría un hijo del que saldría una nación poderosa y que sería antepasada del Mesías (Gén. 17:15-19). Igualmente, Moisés estaba muy entrado en años cuando se le encargó sacar a los israelitas de Egipto (Éx. 7:6, 7). Y también fue en su vejez cuando el apóstol Juan escribió por inspiración cinco libros bíblicos." },
    { number: 4, content: "La edad avanzada trae muchos desafíos. Una hermana dijo chistosamente: \"Hacerse viejo no es para gallinas\". Pero hay una cualidad que ayuda a los hermanos mayores a encarar las dificultades: la alegría (lea Proverbios 15:15). En este artículo veremos qué pueden hacer estos hermanos para no perderla. También analizaremos cómo puede apoyarlos el resto de la congregación. Pero antes hablaremos de por qué es un reto mantener la alegría con el paso de los años.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_2_lg.jpg", imageCaption: "El matrimonio de la imagen anterior, abrazados y sonrientes bajo las ramas de un cerezo en flor. Una actitud alegre y positiva ayuda a los hermanos mayores a encarar las dificultades que vienen con los años." },
    { number: 5, content: "¿Qué cosas podrían desanimarnos al hacernos mayores? Tal vez nos entristezca ser incapaces de hacer lo mismo que antes. O quizás extrañemos la juventud y la buena salud de otros tiempos (Ecl. 7:10). Una hermana que se llama Ruby cuenta: \"Me resulta muy difícil vestirme porque me cuesta una barbaridad moverme y me duele todo el cuerpo. Algo tan sencillo como levantar los pies para ponerme las medias es una tortura. Como tengo las manos torpes y deformadas por la artrosis, hasta la tarea más pequeña se vuelve una odisea\". Harold, que sirvió en Betel, dice: \"Me he convertido en una persona que ya no reconozco, y eso a veces me da mucha rabia. Siempre he sido muy atlético, y el béisbol era mi afición. Cuando jugábamos, los demás decían '¡Pásale la pelota a Harold, que nunca falla!'. Pero ahora creo que ni sería capaz de lanzarla\"." },
    { number: 6, content: "Puede que también nos desanime el hecho de ir perdiendo nuestra autonomía. Esto es así sobre todo cuando dependemos de un cuidador o tenemos que irnos a vivir con algún hijo. O puede que debido a nuestra mala salud o la pérdida de vista ya no podamos conducir o ir solos a los sitios. ¡Qué deprimente! Pero algo que nos puede ayudar es recordar que, aunque tal vez no podamos valernos por nosotros mismos, vivir solos o conducir, seguimos siendo muy valiosos para Jehová y los demás. Además, sabemos que Jehová comprende nuestros sentimientos. Él se fija en cómo somos por dentro: en el gran amor y aprecio que les tenemos a él y a nuestros hermanos (1 Sam. 16:7)." },
    { number: 7, content: "Otra cosa que podría entristecernos es pensar que quizás no vivamos para ver el fin de este sistema. Si nos sentimos así, nos ayudará recordar que Jehová está esperando pacientemente antes de ponerle fin a este mundo malvado (Is. 30:18). Y esa paciencia tiene un objetivo: darles tiempo a millones de personas para que conozcan a Dios y le sirvan (2 Ped. 3:9). Así que, cuando nos venza el desánimo, procuremos pensar en todas las personas —tal vez hasta de nuestra propia familia— que se beneficiarán de la paciencia de Jehová antes de que venga el fin." },
    { number: 8, content: "Cuando no nos sentimos bien, todos —seamos jóvenes o mayores— probablemente digamos o hagamos cosas que después lamentemos (Ecl. 7:7; Sant. 3:2). Eso fue lo que le pasó al fiel Job. El sufrimiento lo empujó a usar palabras \"impetuosas\" (Job 6:1-3, nota). Por otro lado, un problema médico podría llevarnos a hacer o decir cosas que no son habituales en nosotros. Claro está, nadie debería tomar la edad o la salud como excusas para ser grosero o demasiado exigente. Y, si nos damos cuenta de que hemos hecho un comentario poco amable, no deberíamos dudar en pedir perdón (Mat. 5:23, 24)." },
    { number: 9, content: "Dejemos que nos ayuden (Gál. 6:2). Al principio, podría resultarnos difícil. Una hermana llamada Gretl dice: \"A veces me cuesta aceptar que me ayuden porque no quiero ser una carga para nadie. Me ha tomado tiempo aprender a ser humilde y admitir que necesito que me den una mano\". Pero, cuando aceptamos la ayuda de los demás, les damos la oportunidad de experimentar la felicidad que viene de dar (Hech. 20:35). Y nosotros también nos sentiremos felices al ver lo mucho que nos quieren y se preocupan por nosotros.", image: "https://i.imgur.com/N0rmkX0.png", imageCaption: "Una hermana mayor va agarrada del brazo de una hermana joven mientras van juntas a comprar alimentos." },
    { number: 10, content: "Demostremos nuestro agradecimiento (Col. 3:15; 1 Tes. 5:18). Cuando los demás hacen cosas por nosotros, sentimos gratitud, aunque tal vez se nos olvide demostrarla. Pero con una sonrisa y un \"gracias\" lograremos que sientan que apreciamos mucho lo que hacen. Leah, que cuida hermanos mayores en Betel, dice: \"Una de las hermanas me deja notitas de agradecimiento. Son pocas palabras, pero están cargadas de cariño. ¡Me encantan! Me siento muy feliz de saber que valora mi ayuda\".", image: "https://i.imgur.com/KBIKebB.png", imageCaption: "Una hermana mayor escribiendo una tarjeta de agradecimiento." },
    { number: 11, content: "Ayudemos a los demás. Cuando nos centramos en dar de nuestro tiempo y energías, será menos probable que nos centremos en nuestros propios problemas. Un proverbio africano compara a los mayores a bibliotecas que contienen un caudal de sabiduría. Pero los libros que se quedan en los estantes no enseñan nada ni cuentan historias. Así que seamos como \"bibliotecas andantes\" y compartamos con los más jóvenes nuestro conocimiento y experiencia. Hagámosles preguntas y luego escuchémoslos. Expliquémosles las razones por las que obedecer a Jehová es siempre lo mejor y es lo que los hará felices. Y seguro que nosotros también nos sentiremos felices al consolarlos y fortalecerlos (Sal. 71:18).", image: "https://i.imgur.com/SnOMDRy.png", imageCaption: "Un hermano mayor escuchando a un hermano joven que le está contando algo." },
    { number: 12, content: "Pidámosle fuerzas a Jehová. Aunque a veces nos sintamos agotados física o emocionalmente, Jehová \"jamás se cansa ni se agota\" (Is. 40:28). Él posee una energía infinita y, entre otras cosas, la usa para fortalecer a sus siervos fieles de edad avanzada (Is. 40:29-31). De hecho, promete sostenerlos (lea Isaías 46:4). Y Jehová siempre cumple sus promesas (Jos. 23:14; Is. 55:10, 11). Cada vez que experimentamos personalmente su amor y su apoyo, no podemos menos que sentirnos muy felices.", image: "https://i.imgur.com/22ephk8.png", imageCaption: "Un hermano mayor haciendo una oración." },
    { number: 13, content: "Recordemos que la vejez y sus achaques son temporales. Comprender que algo negativo es temporal nos ayuda siempre a aguantarlo. Y la Biblia nos asegura que la vejez y la mala salud dejarán de existir (Job 33:25; Is. 33:24). ¡Cuánto nos alegra saber que nuestros mejores días no han quedado en el pasado, sino que están todavía por venir! (Lea 2 Corintios 4:16-18). Ahora bien, ¿cómo pueden los demás ayudar?", image: "https://i.imgur.com/XhPICeM.png", imageCaption: "Una hermana mayor en silla de ruedas está leyendo la Biblia y se imagina a sí misma en el Paraíso siendo joven y levantándose de la silla." },
    { number: 14, content: "Visitándolos y llamándolos periódicamente (Heb. 13:16). Las personas mayores suelen sentirse solas. Un hermano llamado Pierre dice: \"Como no puedo salir de casa en todo el día, me aburro terriblemente. A veces me siento como un viejo león enjaulado: nervioso y agobiado\". Cuando visitamos a nuestros mayores, les demostramos que nos importan y que los queremos. Pero es probable que todos recordemos ocasiones en las que pensamos visitar o llamar a algún hermano de la congregación, y al final no lo hicimos. En vista de que todos llevamos vidas muy ocupadas, ¿qué nos ayudará a centrarnos en las \"cosas [...] más importantes\", como visitar a los mayores? (Filip. 1:10). Tal vez nos resulte útil ponernos un recordatorio en el calendario para enviarles un mensaje o llamarlos. Y, cuando queramos visitarlos, hagamos planes concretos y no lo dejemos a la casualidad." },
    { number: 15, content: "¿Eres una persona joven? Entonces, tal vez te preguntes de qué temas puedes hablar con los mayores y qué actividades pueden realizar juntos. Pero no le des tantas vueltas. Solo hay que ser un buen amigo (Prov. 17:17). Conversa con ellos antes o después de las reuniones. Podrías pedirles que te cuenten cuál es su texto favorito o alguna anécdota graciosa de su infancia. Otra opción es invitarlos a ver un programa de JW Broadcasting®. También podrías ayudarlos de maneras prácticas, como por ejemplo actualizándoles sus dispositivos electrónicos o descargándoles las últimas publicaciones de estudio. Una hermana que se llama Carol hace esta sugerencia: \"Invítalos a hacer lo que más te guste a ti. Aunque tengo mis añitos, sigo disfrutando de la vida. Me gusta ir de compras, salir a comer y ver la creación\". Y otra hermana, llamada Maira, cuenta: \"Una de mis amigas tiene 90 años, así que me lleva 57 años. Pero muchas veces ni pienso en eso, pues nos pasamos todo el tiempo riendo y viendo pelis juntas. Y acudimos la una a la otra siempre que necesitamos consejo\"." },
    { number: 16, content: "Acompañándolos al médico. Además de llevarlos a las citas, podemos ofrecernos a quedarnos con ellos para asegurarnos de que los tratan bien y les dan toda la atención que necesitan (Is. 1:17). Incluso podríamos tomar notas de lo que diga el médico. Una hermana llamada Ruth explica: \"Cuando voy sola, los doctores no suelen tomarme en serio. Quizás me hagan comentarios como 'El problema que usted tiene es psicológico; está solo en su cabeza'. Pero, cuando voy acompañada, el trato es muy diferente. Les estoy muy agradecida a los hermanos y hermanas que sacan tiempo para ir conmigo\"." },
    { number: 17, content: "Participando con ellos en el ministerio. A veces los hermanos mayores no tienen las fuerzas para predicar de casa en casa. ¿Hemos pensado en invitarlos a estar en el carrito con nosotros? Incluso podríamos llevarles una silla para que se sienten. ¿O qué tal invitarlos a que nos acompañen a un curso bíblico, tal vez hasta dirigiéndolo en su hogar? Los ancianos pueden organizar reuniones para la predicación en la casa de estos hermanos para que les resulte más fácil salir al ministerio. Valdrá la pena cualquier esfuerzo que hagamos por honrarlos (Prov. 3:27; Rom. 12:10)." },
    { number: 18, content: "Este artículo nos ha recordado que Jehová y toda la congregación aman y valoran a los mayores. Es cierto que envejecer es una etapa difícil, pero con la ayuda de Jehová es posible mantener la alegría (Sal. 37:25). ¡Cuánto nos anima saber que nuestros mejores días no han quedado en el pasado, sino que están todavía por venir! Ahora bien, ¿y si somos nosotros quienes estamos cuidando de un familiar mayor, un hijo o un amigo enfermo? ¿Qué nos ayudará a no perder la alegría? En el siguiente artículo de estudio veremos la respuesta." }
  ],
  reviewQuestions: [
    {
      question: "¿Qué cosas podrían desanimar a los hermanos mayores?",
      questionLSM: "Mayores de edad a veces se sienten tristes, porque.",
      answer: [
        "Ser incapaces de hacer lo mismo que antes.",
        "Extrañar la juventud y la buena salud de otros tiempos.",
        "Ir perdiendo la autonomía y depender de otros.",
        "Pensar que quizás no vivamos para ver el fin de este sistema.",
        "Problemas médicos que afectan nuestro estado de ánimo."
      ]
    },
    {
      question: "¿Qué pueden hacer los mayores para mantener la alegría?",
      questionLSM: "Tú contento, seguir, o sea, que si tú eres mayor, tú eres anciano, tú, contento, disfrutar, siempre, no, porque.",
      answer: [
        "Dejarse ayudar por los demás.",
        "Demostrar agradecimiento con una sonrisa y un 'gracias'.",
        "Ayudar a otros compartiendo su sabiduría y experiencia.",
        "Pedirle fuerzas a Jehová en oración.",
        "Recordar que la vejez y sus achaques son temporales."
      ]
    },
    {
      question: "¿Cómo podemos ayudar a los cristianos de edad avanzada?",
      questionLSM: "La con la congregación, ayudarles, salud a ellos, la congregación, ¿qué hace?",
      answer: [
        "Visitándolos y llamándolos periódicamente.",
        "Siendo buenos amigos y pasando tiempo con ellos.",
        "Acompañándolos al médico.",
        "Participando con ellos en el ministerio.",
        "Ayudándolos con la tecnología y sus dispositivos."
      ]
    }
  ],
  finalSong: "Canción 30: Mi Amigo, mi Padre, mi Dios"
};

export default article44;
