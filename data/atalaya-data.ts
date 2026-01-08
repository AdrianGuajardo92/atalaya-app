import { AtalayaDatabase, ArticleData } from '@/types/atalaya';
import { isArticleActive } from './articles-config';

// Base de datos completa con todos los artículos organizados por mes
export const atalayaDatabase: AtalayaDatabase = {
  // ========================================
  // NOVIEMBRE 2025 - ARTÍCULOS DE ESTUDIO
  // ========================================

  "2025-11": {
    articles: [
      // Artículo 44: "Cómo mantener la alegría en la vejez" (5-11 Ene)
      {
        metadata: {
          articleNumber: 44,
          week: "5-11 Ene",
          month: "Noviembre",
          year: 2025
        },
        song: "Canción 138: Los cabellos blancos, una hermosa corona",
        title: "Cómo mantener la alegría en la vejez",
        biblicalText: "\"En su vejez seguirán prosperando\" (SAL. 92:14).",
        theme: "Por qué es importante que los cristianos mayores mantengan la alegría y cómo pueden conseguirlo.",
        questions: [
          {
            number: "1, 2",
            textEs: "¿Cómo ve Jehová a los hermanos fieles que están envejeciendo? (Salmo 92:12-14; vea también la imagen).",
            textLSM: "",
            paragraphs: [1, 2],
            readText: "LEE Salmo 92:12-14",
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
            textLSM: "",
            paragraphs: [3],
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
            textLSM: "",
            paragraphs: [4],
            readText: "LEE Proverbios 15:15",
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
            textLSM: "",
            paragraphs: [5],
            section: "EL RETO DE MANTENER LA ALEGRÍA",
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
            textLSM: "",
            paragraphs: [6],
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
            textLSM: "",
            paragraphs: [7],
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
            textLSM: "",
            paragraphs: [8],
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
            textLSM: "",
            paragraphs: [9],
            section: "CONSEJOS PARA MANTENER LA ALEGRÍA",
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
            textLSM: "",
            paragraphs: [10],
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
            textLSM: "",
            paragraphs: [11],
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
            textLSM: "",
            paragraphs: [12],
            readText: "LEE Isaías 46:4",
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
            textLSM: "",
            paragraphs: [13],
            readText: "LEE 2 Corintios 4:16-18",
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
            textLSM: "",
            paragraphs: [14],
            section: "¿CÓMO PODEMOS AYUDAR A LOS MAYORES?",
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
            textLSM: "",
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
            textLSM: "",
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
            textLSM: "",
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
            textLSM: "",
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
          { number: 9, content: "Dejemos que nos ayuden (Gál. 6:2). Al principio, podría resultarnos difícil. Una hermana llamada Gretl dice: \"A veces me cuesta aceptar que me ayuden porque no quiero ser una carga para nadie. Me ha tomado tiempo aprender a ser humilde y admitir que necesito que me den una mano\". Pero, cuando aceptamos la ayuda de los demás, les damos la oportunidad de experimentar la felicidad que viene de dar (Hech. 20:35). Y nosotros también nos sentiremos felices al ver lo mucho que nos quieren y se preocupan por nosotros.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_4_lg.jpg", imageCaption: "Una hermana mayor va agarrada del brazo de una hermana joven mientras van juntas a comprar alimentos." },
          { number: 10, content: "Demostremos nuestro agradecimiento (Col. 3:15; 1 Tes. 5:18). Cuando los demás hacen cosas por nosotros, sentimos gratitud, aunque tal vez se nos olvide demostrarla. Pero con una sonrisa y un \"gracias\" lograremos que sientan que apreciamos mucho lo que hacen. Leah, que cuida hermanos mayores en Betel, dice: \"Una de las hermanas me deja notitas de agradecimiento. Son pocas palabras, pero están cargadas de cariño. ¡Me encantan! Me siento muy feliz de saber que valora mi ayuda\".", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_5_lg.jpg", imageCaption: "Una hermana mayor escribiendo una tarjeta de agradecimiento." },
          { number: 11, content: "Ayudemos a los demás. Cuando nos centramos en dar de nuestro tiempo y energías, será menos probable que nos centremos en nuestros propios problemas. Un proverbio africano compara a los mayores a bibliotecas que contienen un caudal de sabiduría. Pero los libros que se quedan en los estantes no enseñan nada ni cuentan historias. Así que seamos como \"bibliotecas andantes\" y compartamos con los más jóvenes nuestro conocimiento y experiencia. Hagámosles preguntas y luego escuchémoslos. Expliquémosles las razones por las que obedecer a Jehová es siempre lo mejor y es lo que los hará felices. Y seguro que nosotros también nos sentiremos felices al consolarlos y fortalecerlos (Sal. 71:18).", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_6_lg.jpg", imageCaption: "Un hermano mayor escuchando a un hermano joven que le está contando algo." },
          { number: 12, content: "Pidámosle fuerzas a Jehová. Aunque a veces nos sintamos agotados física o emocionalmente, Jehová \"jamás se cansa ni se agota\" (Is. 40:28). Él posee una energía infinita y, entre otras cosas, la usa para fortalecer a sus siervos fieles de edad avanzada (Is. 40:29-31). De hecho, promete sostenerlos (lea Isaías 46:4). Y Jehová siempre cumple sus promesas (Jos. 23:14; Is. 55:10, 11). Cada vez que experimentamos personalmente su amor y su apoyo, no podemos menos que sentirnos muy felices.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_7_lg.jpg", imageCaption: "Un hermano mayor haciendo una oración." },
          { number: 13, content: "Recordemos que la vejez y sus achaques son temporales. Comprender que algo negativo es temporal nos ayuda siempre a aguantarlo. Y la Biblia nos asegura que la vejez y la mala salud dejarán de existir (Job 33:25; Is. 33:24). ¡Cuánto nos alegra saber que nuestros mejores días no han quedado en el pasado, sino que están todavía por venir! (Lea 2 Corintios 4:16-18). Ahora bien, ¿cómo pueden los demás ayudar?", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025648/univ/art/2025648_univ_cnt_8_lg.jpg", imageCaption: "Una hermana mayor en silla de ruedas está leyendo la Biblia y se imagina a sí misma en el Paraíso siendo joven y levantándose de la silla." },
          { number: 14, content: "Visitándolos y llamándolos periódicamente (Heb. 13:16). Las personas mayores suelen sentirse solas. Un hermano llamado Pierre dice: \"Como no puedo salir de casa en todo el día, me aburro terriblemente. A veces me siento como un viejo león enjaulado: nervioso y agobiado\". Cuando visitamos a nuestros mayores, les demostramos que nos importan y que los queremos. Pero es probable que todos recordemos ocasiones en las que pensamos visitar o llamar a algún hermano de la congregación, y al final no lo hicimos. En vista de que todos llevamos vidas muy ocupadas, ¿qué nos ayudará a centrarnos en las \"cosas [...] más importantes\", como visitar a los mayores? (Filip. 1:10). Tal vez nos resulte útil ponernos un recordatorio en el calendario para enviarles un mensaje o llamarlos. Y, cuando queramos visitarlos, hagamos planes concretos y no lo dejemos a la casualidad." },
          { number: 15, content: "¿Eres una persona joven? Entonces, tal vez te preguntes de qué temas puedes hablar con los mayores y qué actividades pueden realizar juntos. Pero no le des tantas vueltas. Solo hay que ser un buen amigo (Prov. 17:17). Conversa con ellos antes o después de las reuniones. Podrías pedirles que te cuenten cuál es su texto favorito o alguna anécdota graciosa de su infancia. Otra opción es invitarlos a ver un programa de JW Broadcasting®. También podrías ayudarlos de maneras prácticas, como por ejemplo actualizándoles sus dispositivos electrónicos o descargándoles las últimas publicaciones de estudio. Una hermana que se llama Carol hace esta sugerencia: \"Invítalos a hacer lo que más te guste a ti. Aunque tengo mis añitos, sigo disfrutando de la vida. Me gusta ir de compras, salir a comer y ver la creación\". Y otra hermana, llamada Maira, cuenta: \"Una de mis amigas tiene 90 años, así que me lleva 57 años. Pero muchas veces ni pienso en eso, pues nos pasamos todo el tiempo riendo y viendo pelis juntas. Y acudimos la una a la otra siempre que necesitamos consejo\"." },
          { number: 16, content: "Acompañándolos al médico. Además de llevarlos a las citas, podemos ofrecernos a quedarnos con ellos para asegurarnos de que los tratan bien y les dan toda la atención que necesitan (Is. 1:17). Incluso podríamos tomar notas de lo que diga el médico. Una hermana llamada Ruth explica: \"Cuando voy sola, los doctores no suelen tomarme en serio. Quizás me hagan comentarios como 'El problema que usted tiene es psicológico; está solo en su cabeza'. Pero, cuando voy acompañada, el trato es muy diferente. Les estoy muy agradecida a los hermanos y hermanas que sacan tiempo para ir conmigo\"." },
          { number: 17, content: "Participando con ellos en el ministerio. A veces los hermanos mayores no tienen las fuerzas para predicar de casa en casa. ¿Hemos pensado en invitarlos a estar en el carrito con nosotros? Incluso podríamos llevarles una silla para que se sienten. ¿O qué tal invitarlos a que nos acompañen a un curso bíblico, tal vez hasta dirigiéndolo en su hogar? Los ancianos pueden organizar reuniones para la predicación en la casa de estos hermanos para que les resulte más fácil salir al ministerio. Valdrá la pena cualquier esfuerzo que hagamos por honrarlos (Prov. 3:27; Rom. 12:10)." },
          { number: 18, content: "Este artículo nos ha recordado que Jehová y toda la congregación aman y valoran a los mayores. Es cierto que envejecer es una etapa difícil, pero con la ayuda de Jehová es posible mantener la alegría (Sal. 37:25). ¡Cuánto nos anima saber que nuestros mejores días no han quedado en el pasado, sino que están todavía por venir! Ahora bien, ¿y si somos nosotros quienes estamos cuidando de un familiar mayor, un hijo o un amigo enfermo? ¿Qué nos ayudará a no perder la alegría? En el siguiente artículo de estudio veremos la respuesta." }
        ],
        reviewQuestions: [
          {
            question: "¿Qué cosas podrían desanimar a los hermanos mayores?",
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
      },

      // Artículo 45: "Cómo mantener la alegría al cuidar de un ser querido" (12-18 Ene)
      {
        metadata: {
          articleNumber: 45,
          week: "12-18 Ene",
          month: "Noviembre",
          year: 2025
        },
        song: "Canción 111: Los motivos de nuestro gozo",
        title: "Cómo mantener la alegría al cuidar de un ser querido",
        biblicalText: "\"Los que siembran con llanto cosecharán con gritos de alegría\" (SAL. 126:5).",
        theme: "Sugerencias que lo ayudarán a mantener la alegría al cuidar de un amigo o un familiar mayor o enfermo.",
        questions: [
          {
            number: "1, 2",
            textEs: "¿Qué piensa Jehová de sus esfuerzos por cuidar de un ser querido? (Proverbios 19:17; vea también las imágenes).",
            textLSM: "",
            paragraphs: [1, 2],
            readText: "LEE Proverbios 19:17",
            answer: [
              "Jehová sabe y comprende los sentimientos de los cuidadores.",
              "Cada una de sus lágrimas es muy valiosa para él.",
              "Jehová aprecia todos los sacrificios que hace por atender a su ser querido.",
              "Jehová considera que está en deuda con usted y promete recompensarlo."
            ],
            flashcards: [
              {
                question: "¿Qué cuenta Jin-yeol sobre el cuidado de su esposa con párkinson?",
                answer: "Lleva 5 años cuidándola. Todas las noches duermen agarrados de la mano, él en su cama y ella a su lado en una cama especial."
              },
              {
                question: "Según Salmo 56:8, ¿qué hace Jehová con nuestras lágrimas?",
                answer: "Son muy valiosas para él; las recoge y las guarda."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 19:17",
                purpose: "Jehová recompensa a quienes ayudan a otros",
                text: "El que le muestra favor al de condición humilde le presta a Jehová, y Él le pagará lo que haya hecho."
              },
              {
                reference: "Salmo 56:8",
                purpose: "Jehová valora nuestras lágrimas",
                text: "Tú llevas la cuenta de mis pasos de fugitivo. Recoge mis lágrimas en tu odre. ¿No están escritas en tu libro?"
              },
              {
                reference: "1 Timoteo 5:4, 8",
                purpose: "Cuidar de la familia es un deber cristiano",
                text: "Pero si alguna viuda tiene hijos o nietos, que ellos aprendan primero a practicar la devoción piadosa en su propia casa y a corresponder a sus padres y abuelos."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Por qué debió resultarles difícil a Abrahán y Sara cuidar de Taré?",
            textLSM: "",
            paragraphs: [3],
            answer: [
              "Taré tenía unos 200 años cuando salieron de Ur.",
              "Viajaron unos 960 kilómetros hasta Harán.",
              "Probablemente iban montados en camellos o burros, lo cual era especialmente incómodo para Taré.",
              "Abrahán y Sara a veces debieron sentirse muy cansados, incluso agotados.",
              "Pero Jehová les dio las fuerzas que necesitaban."
            ],
            flashcards: [
              {
                question: "¿Qué distancia recorrieron Abrahán, Sara y Taré desde Ur hasta Harán?",
                answer: "Unos 960 kilómetros (600 millas)."
              },
              {
                question: "¿Qué edad aproximada tenía Taré durante el viaje?",
                answer: "Unos 200 años."
              }
            ],
            biblicalCards: [
              {
                reference: "Génesis 11:31, 32",
                purpose: "Taré viajó con su familia",
                text: "Taré tomó a su hijo Abrán y a su nieto Lot y a su nuera Sarai y salieron juntos de Ur de los caldeos para ir a la tierra de Canaán. Con el tiempo llegaron a Harán y se establecieron allí."
              },
              {
                reference: "Salmo 55:22",
                purpose: "Jehová nos sostiene",
                text: "Echa tu carga sobre Jehová, y él te sostendrá. Nunca permitirá que el justo caiga."
              }
            ]
          },
          {
            number: "4",
            textEs: "¿Qué veremos en este artículo?",
            textLSM: "",
            paragraphs: [4],
            answer: [
              "Le resultará más fácil seguir cuidando de su ser querido si tiene una actitud alegre.",
              "La felicidad es una cualidad que no depende de las circunstancias.",
              "Podemos pedirle a Jehová que nos ayude a mantener una actitud positiva.",
              "Veremos sugerencias para no perder la alegría y qué pueden hacer los demás por los cuidadores."
            ],
            flashcards: [
              {
                question: "Según Santiago 1:2, 3, ¿de qué no depende la felicidad?",
                answer: "No depende de las circunstancias; es una cualidad que podemos cultivar."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 15:13",
                purpose: "Una actitud alegre nos ayuda",
                text: "Un corazón alegre le da alegría al rostro, pero el dolor del corazón aplasta el espíritu."
              },
              {
                reference: "Santiago 1:2, 3",
                purpose: "La felicidad no depende de las circunstancias",
                text: "Considérenlo todo un gozo, hermanos míos, cuando se enfrenten a diversas pruebas, sabiendo como saben que la fe probada produce aguante."
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Por qué es importante mantener la alegría?",
            textLSM: "",
            paragraphs: [5],
            section: "POR QUÉ PUEDE SER DIFÍCIL MANTENER LA ALEGRÍA",
            answer: [
              "Si los cuidadores pierden la alegría, es más fácil que se cansen.",
              "Si están cansados, puede que no sean tan amables ni ayuden tanto como les gustaría."
            ],
            flashcards: [
              {
                question: "¿Qué pasa si los cuidadores pierden la alegría?",
                answer: "Es más fácil que se cansen, y puede que no sean tan amables ni ayuden tanto como les gustaría."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 24:10",
                purpose: "Perder la alegría debilita",
                text: "Si te desanimas en el día de la angustia, tu fuerza será poca."
              }
            ]
          },
          {
            number: "6",
            textEs: "¿Por qué se queman algunos cuidadores?",
            textLSM: "",
            paragraphs: [6],
            answer: [
              "Los cuidadores pueden quemarse física y emocionalmente.",
              "Leah explica que cuidar de alguien implica un desgaste emocional tremendo.",
              "Les cuesta sacar tiempo para descansar bien y desconectar.",
              "Inés cuenta que no consigue dormir lo suficiente y lleva años sin vacaciones.",
              "Algunos tienen que rechazar invitaciones sociales y asignaciones teocráticas.",
              "Pueden sentirse aislados o atrapados por sus circunstancias."
            ],
            flashcards: [
              {
                question: "¿Qué dice Leah sobre el desgaste de cuidar a alguien?",
                answer: "«Incluso en los días buenos, cuidar de alguien implica un desgaste emocional tremendo. Al final del día, muchas veces siento que no me queda ni una gota de energía»."
              },
              {
                question: "¿Qué problema de sueño menciona Inés?",
                answer: "Tiene que levantarse cada dos horas para atender a su suegra, y lleva años sin poder tomarse vacaciones."
              }
            ],
            biblicalCards: []
          },
          {
            number: "7",
            textEs: "¿Por qué se sienten culpables o tristes algunos cuidadores?",
            textLSM: "",
            paragraphs: [7],
            answer: [
              "Jessica se frustra por no poder hacer más y se siente culpable cuando descansa.",
              "Algunos luchan con remordimientos porque a veces se sienten molestos por su situación.",
              "Otros temen que no están haciendo lo suficiente.",
              "Algunos se sienten mal porque han perdido los nervios y dicho algo fuera de lugar.",
              "Les duele ver cómo la persona va perdiendo el vigor y la salud."
            ],
            flashcards: [
              {
                question: "¿Por qué se siente culpable Jessica cuando descansa?",
                answer: "Porque siente que es egoísta tomarse tiempo para descansar."
              },
              {
                question: "¿Qué dice Bárbara sobre ver el deterioro de su amiga?",
                answer: "«Una de las cosas que peor llevo es ver a mi querida amiga deteriorarse cada día un poco más»."
              }
            ],
            biblicalCards: [
              {
                reference: "Santiago 3:2",
                purpose: "Todos cometemos errores",
                text: "Porque todos tropezamos muchas veces. Si alguien no tropieza en lo que dice, es un hombre perfecto, capaz también de controlar todo su cuerpo."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Cómo se han sentido algunos cuidadores cuando les han dado las gracias por su ayuda?",
            textLSM: "",
            paragraphs: [8],
            answer: [
              "Los cuidadores pueden sentir que no se valora lo que hacen.",
              "Unas palabras de gratitud pueden hacer mucho bien.",
              "Melissa dice que cuando le dicen 'Gracias por todo lo que haces por mí', siente una inyección de ánimo.",
              "Ahmadu cuenta que su corazón rebosa de alegría cuando su sobrina les da las gracias."
            ],
            flashcards: [
              {
                question: "¿Qué efecto tienen las palabras de gratitud en Melissa?",
                answer: "«Siento una inyección de ánimo. Eso me ayuda a levantarme al día siguiente lista y con muchas ganas de seguir cuidándolas»."
              },
              {
                question: "¿Qué hace la sobrina de Ahmadu que le llena el corazón de alegría?",
                answer: "Le da las gracias o garabatea en un papel 'Los quiero mucho'."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Tesalonicenses 5:18",
                purpose: "La importancia de dar gracias",
                text: "Den gracias por todo. Esta es la voluntad de Dios para ustedes mediante Cristo Jesús."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿De qué maneras demuestran los cuidadores que son modestos?",
            textLSM: "",
            paragraphs: [9],
            section: "SUGERENCIAS PARA MANTENER LA ALEGRÍA",
            answer: [
              "Ninguno de nosotros tiene fuerzas y tiempo sin límites.",
              "Tendrá que determinar lo que puede hacer y lo que no.",
              "A veces tendrá que decir que no a algunas cosas, y eso no tiene nada de malo.",
              "Si otros se ofrecen a darle una mano, acepte con gusto su ayuda.",
              "Jay explica: 'Tenemos que saber cuáles son nuestros límites y no intentar ir más allá'."
            ],
            flashcards: [
              {
                question: "¿Qué consejo da Jay para no perder la alegría?",
                answer: "«Es imposible hacer todo lo que nos gustaría. Para no perder la alegría, tenemos que saber cuáles son nuestros límites y no intentar ir más allá»."
              },
              {
                question: "¿Qué no tiene nada de malo hacer cuando somos cuidadores?",
                answer: "Decir que no a algunas cosas; solo estamos siendo modestos."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 11:2",
                purpose: "La modestia trae sabiduría",
                text: "Cuando llega la presunción, llega la deshonra, pero la sabiduría está con los modestos."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿Por qué necesitan tener perspicacia los cuidadores? (Proverbios 19:11).",
            textLSM: "",
            paragraphs: [10],
            readText: "LEE Proverbios 19:11",
            answer: [
              "La perspicacia ayuda a comprender por qué el ser querido hace o dice ciertas cosas.",
              "Algunas enfermedades crónicas pueden provocar cambios de comportamiento.",
              "Alguien amable puede volverse irritable, exigente o crítico.",
              "Investigar sobre la enfermedad ayuda a comprender que el culpable no es la persona, sino su enfermedad."
            ],
            flashcards: [
              {
                question: "¿Qué cambios de comportamiento pueden causar algunas enfermedades crónicas?",
                answer: "Alguien amable y bondadoso puede volverse irritable, conflictivo, exigente, crítico o difícil de complacer."
              },
              {
                question: "¿Qué ayuda a los cuidadores a mantener la calma en situaciones tensas?",
                answer: "La perspicacia para comprender que el culpable del comportamiento no es la persona, sino su enfermedad."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 19:11",
                purpose: "La perspicacia ayuda a mantener la calma",
                text: "La perspicacia del hombre ciertamente retarda su cólera, y es hermosura de su parte pasar por alto la transgresión."
              },
              {
                reference: "Eclesiastés 7:7",
                purpose: "La opresión puede afectar el comportamiento",
                text: "Porque la mera opresión puede hacer que el sabio actúe como loco."
              },
              {
                reference: "Proverbios 14:29",
                purpose: "Ser lento para enojarse",
                text: "El que es lento para la cólera tiene gran discernimiento, pero el impaciente pone de manifiesto su insensatez."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Para qué cosas importantes deben sacar tiempo los cuidadores todos los días? (Salmo 132:4, 5).",
            textLSM: "",
            paragraphs: [11],
            readText: "LEE Salmo 132:4, 5",
            answer: [
              "Deben sacar tiempo para fortalecer su amistad con Jehová.",
              "A veces tendrán que dejar a un lado algunas actividades para atender asuntos 'más importantes'.",
              "El rey David demostró que adorar a Jehová era lo principal en su vida.",
              "Es importante sacar tiempo todos los días para leer la Biblia y orar.",
              "Elisha dice: 'La oración ha sido mi salvavidas. Acudo a Jehová durante todo el día'."
            ],
            flashcards: [
              {
                question: "¿Cómo mantiene Elisha la alegría según su comentario?",
                answer: "«Consigo mantener la alegría orando y meditando en las palabras reconfortantes de algunos salmos. La oración ha sido mi salvavidas»."
              },
              {
                question: "¿Qué ejemplo dio el rey David sobre priorizar la adoración?",
                answer: "Aunque estaba muy ocupado, demostró que adorar a Jehová era lo principal en su vida (Salmo 132:4, 5)."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 132:4, 5",
                purpose: "Priorizar la adoración a Jehová",
                text: "No permitiré que mis ojos se duerman ni que mis párpados se cierren hasta que encuentre un lugar para Jehová, una magnífica morada para el Poderoso de Jacob."
              },
              {
                reference: "Filipenses 1:10",
                purpose: "Asegurarse de las cosas más importantes",
                text: "Para que se aseguren de cuáles son las cosas más importantes, a fin de que estén sin tacha y no hagan tropezar a otros hasta el día de Cristo."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Por qué tienen que apartar tiempo para cuidar su salud los cuidadores?",
            textLSM: "",
            paragraphs: [12],
            answer: [
              "Es posible que estén descuidando su alimentación por falta de tiempo.",
              "Una buena alimentación y una rutina de ejercicio son esenciales para la salud física y mental.",
              "Dormir ayuda a eliminar toxinas del cerebro y reduce la ansiedad.",
              "Es bueno buscar momentos para hacer actividades que les gusten."
            ],
            flashcards: [
              {
                question: "¿Qué beneficios tiene dormir lo suficiente según el artículo?",
                answer: "Ayuda a eliminar toxinas del cerebro, reduce la ansiedad y mejora la capacidad de procesar el estrés."
              },
              {
                question: "¿Qué hace una hermana cuidadora para no perder la alegría?",
                answer: "«Cuando hace buen tiempo, salgo al aire libre para disfrutar del sol. Y por lo menos una vez al mes quedo con alguna amiga para pasar juntas un día divertido»."
              }
            ],
            biblicalCards: [
              {
                reference: "Efesios 5:15, 16",
                purpose: "Aprovechar bien el tiempo",
                text: "Así que vigilen con cuidado cómo andan, no como insensatos, sino como sabios, aprovechando bien el tiempo, porque los días son malos."
              },
              {
                reference: "Eclesiastés 4:6",
                purpose: "Descansar es importante",
                text: "Mejor es un puñado de descanso que dos puñados de duro trabajo y de ir tras el viento."
              },
              {
                reference: "Eclesiastés 8:15",
                purpose: "Disfrutar de la vida",
                text: "Y recomendé el regocijo, porque el hombre no tiene nada mejor bajo el sol que comer y beber y regocijarse."
              }
            ]
          },
          {
            number: "13",
            textEs: "¿Por qué es buena la risa? (Proverbios 17:22).",
            textLSM: "",
            paragraphs: [13],
            readText: "LEE Proverbios 17:22",
            answer: [
              "La risa es buena para el cuerpo y la mente.",
              "Si logramos ver el lado divertido de las situaciones estresantes, será más fácil sobrellevarlas.",
              "Si nos reímos juntos con nuestro ser querido, nos sentiremos más unidos."
            ],
            flashcards: [
              {
                question: "¿Qué beneficios tiene la risa según el artículo?",
                answer: "Es buena para el cuerpo y la mente, ayuda a sobrellevar situaciones estresantes y nos une más a nuestros seres queridos."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 17:22",
                purpose: "La risa es buena medicina",
                text: "Un corazón alegre es buena medicina, pero el espíritu deprimido seca los huesos."
              },
              {
                reference: "Eclesiastés 3:1, 4",
                purpose: "Hay tiempo para reír",
                text: "Para todo hay un tiempo señalado... tiempo de llorar y tiempo de reír."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿Por qué es bueno hablar con un amigo de confianza?",
            textLSM: "",
            paragraphs: [14],
            answer: [
              "Habrá ocasiones en las que se sentirá superado y necesite desahogarse.",
              "Un buen amigo no lo juzgará ni se escandalizará por lo que le cuente.",
              "Lo escuchará con paciencia y le dirá palabras de consuelo.",
              "Eso es justo lo que necesita para mantener la alegría."
            ],
            flashcards: [
              {
                question: "¿Qué características debe tener el amigo con quien desahogarse?",
                answer: "Alguien que no lo juzgue ni se escandalice, que lo escuche con paciencia y le diga palabras de consuelo."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 17:17",
                purpose: "Un verdadero amigo ama en todo tiempo",
                text: "Un verdadero amigo ama en todo tiempo, y un hermano ha nacido para cuando hay angustia."
              },
              {
                reference: "Proverbios 12:25",
                purpose: "Las palabras de consuelo alivian la ansiedad",
                text: "La ansiedad en el corazón del hombre lo deprime, pero una buena palabra lo alegra."
              }
            ]
          },
          {
            number: "15",
            textEs: "¿Cuáles son los beneficios de hablar sobre la vida en el Paraíso?",
            textLSM: "",
            paragraphs: [15],
            answer: [
              "El propósito original de Jehová no incluía cuidar de enfermos y mayores.",
              "Esa es una tarea temporal.",
              "En el futuro nos espera 'la vida que realmente es vida'.",
              "Si hablamos con nuestro ser querido de lo que haremos juntos en el Paraíso, los dos nos sentiremos reconfortados.",
              "Heather cuenta: 'Pronto coseremos juntos, correremos juntos y pasearemos en bici juntos'."
            ],
            flashcards: [
              {
                question: "¿Qué le dice Heather a quienes cuida sobre el Paraíso?",
                answer: "«Pronto coseremos juntos, correremos juntos y pasearemos en bici juntos. Haremos pan y cocinaremos comidas ricas para nuestros seres queridos que resuciten»."
              },
              {
                question: "¿Por qué es temporal la tarea de cuidar de enfermos?",
                answer: "Porque el propósito original de Jehová no incluía la enfermedad ni la vejez; en el futuro nos espera 'la vida que realmente es vida'."
              }
            ],
            biblicalCards: [
              {
                reference: "2 Corintios 4:16-18",
                purpose: "Las dificultades presentes son temporales",
                text: "Por eso no nos damos por vencidos. Aunque nuestro hombre exterior se está desgastando, nuestro hombre interior va renovándose día a día."
              },
              {
                reference: "1 Timoteo 6:19",
                purpose: "La vida que realmente es vida",
                text: "Atesorando para sí mismos un fundamento excelente para el futuro, para que se aferren firmemente a la vida que realmente es vida."
              },
              {
                reference: "Isaías 33:24",
                purpose: "No habrá más enfermedad",
                text: "Y ningún habitante dirá: 'Estoy enfermo'. Al pueblo que viva en la tierra se le perdonará su pecado."
              },
              {
                reference: "Isaías 65:21",
                purpose: "Construiremos casas y plantaremos viñedos",
                text: "Construirán casas y vivirán en ellas, plantarán viñedos y comerán su fruto."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Qué podemos hacer si en nuestra congregación hay algún cuidador? (Vea también la imagen).",
            textLSM: "",
            paragraphs: [16],
            section: "QUÉ PODEMOS HACER POR LOS CUIDADORES",
            answer: [
              "Podemos ofrecernos para atender a la persona a la que están cuidando.",
              "Así le daremos al cuidador tiempo para despejar la mente y atender sus asuntos personales.",
              "Algunos hermanos han organizado turnos semanales.",
              "Natalya cuenta que un hermano viene a su casa una o dos veces por semana para pasar tiempo con su esposo.",
              "Incluso podríamos cuidar a la persona alguna noche para que el cuidador pueda dormir bien."
            ],
            flashcards: [
              {
                question: "¿Qué hace un hermano para ayudar a Natalya?",
                answer: "Viene a su casa una o dos veces por semana para pasar tiempo con su esposo. Predican, hablan e incluso ven películas."
              },
              {
                question: "¿Qué pueden organizar los hermanos para ayudar a los cuidadores?",
                answer: "Turnos semanales para atender a la persona que cuidan, dándole tiempo al cuidador para descansar."
              }
            ],
            biblicalCards: [
              {
                reference: "Gálatas 6:2",
                purpose: "Llevar las cargas los unos de los otros",
                text: "Sigan llevando las cargas los unos de los otros, y así cumplirán la ley del Cristo."
              }
            ]
          },
          {
            number: "17",
            textEs: "¿Cómo podemos ayudar a los cuidadores durante las reuniones?",
            textLSM: "",
            paragraphs: [17],
            answer: [
              "Los cuidadores pueden no concentrarse en las reuniones porque están atendiendo a su ser querido.",
              "Podemos ofrecernos para sentarnos con la persona a la que cuidan durante la reunión.",
              "Si la persona no puede salir de casa, podemos ir allí y conectarnos a la reunión con ella.",
              "Así el cuidador puede asistir en persona."
            ],
            flashcards: [
              {
                question: "¿Qué podemos hacer si la persona que cuidan no puede salir de casa?",
                answer: "Ofrecernos para ir a su casa y conectarnos a la reunión con ella para que el cuidador pueda asistir en persona."
              }
            ],
            biblicalCards: []
          },
          {
            number: "18",
            textEs: "¿Qué más podemos hacer por los cuidadores?",
            textLSM: "",
            paragraphs: [18],
            answer: [
              "Los ancianos deben pastorear con regularidad a estos hermanos.",
              "Todos debemos tener la costumbre de decirles palabras de ánimo y cariño.",
              "También podemos pedirle a Jehová que los siga fortaleciendo y ayudando a mantener la alegría."
            ],
            flashcards: [
              {
                question: "¿Qué tres cosas podemos hacer por los cuidadores según el párrafo 18?",
                answer: "Pastorearlos con regularidad (ancianos), decirles palabras de ánimo y cariño, y orar a Jehová por ellos."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 27:23",
                purpose: "Los ancianos deben pastorear",
                text: "Debes conocer bien el aspecto de tu rebaño. Pon tu corazón en tus manadas."
              },
              {
                reference: "2 Corintios 1:11",
                purpose: "Orar unos por otros",
                text: "Mientras ustedes también nos ayudan suplicando por nosotros, para que muchas personas den gracias por nosotros por el favor que nos ha sido mostrado gracias a las oraciones de muchos."
              }
            ]
          },
          {
            number: "19",
            textEs: "¿Qué esperamos que suceda pronto?",
            textLSM: "",
            paragraphs: [19],
            answer: [
              "Pronto Jehová secará todas las lágrimas de dolor.",
              "La enfermedad y la muerte ya no existirán.",
              "'El cojo trepará como un ciervo'.",
              "Los achaques de la vejez y el dolor de cuidar de un ser querido enfermo no serán recordados.",
              "Jehová nos ayudará a 'aguantar todo con paciencia y felicidad'."
            ],
            flashcards: [
              {
                question: "Según Isaías 35:5, 6, ¿qué pasará con los cojos?",
                answer: "«El cojo trepará como un ciervo»."
              },
              {
                question: "Según Colosenses 1:11, ¿cómo nos ayudará Jehová mientras esperamos?",
                answer: "Nos ayudará a «aguantar todo con paciencia y felicidad»."
              }
            ],
            biblicalCards: [
              {
                reference: "Apocalipsis 21:3, 4",
                purpose: "No más lágrimas ni dolor",
                text: "Y él limpiará toda lágrima de sus ojos, y la muerte ya no existirá, ni habrá más luto ni clamor ni dolor. Las cosas de antes han pasado."
              },
              {
                reference: "Isaías 35:5, 6",
                purpose: "Los enfermos sanarán",
                text: "En aquel tiempo se abrirán los ojos de los ciegos y se destaparán los oídos de los sordos. El cojo trepará como un ciervo."
              },
              {
                reference: "Isaías 65:17",
                purpose: "Las cosas del pasado no serán recordadas",
                text: "Porque voy a crear nuevos cielos y una nueva tierra; y las cosas del pasado no serán recordadas ni subirán al corazón."
              },
              {
                reference: "Colosenses 1:11",
                purpose: "Aguantar con paciencia y felicidad",
                text: "Que se les fortalezca con todo el poder según su gloriosa fuerza para que aguanten todo con paciencia y felicidad."
              }
            ]
          }
        ],
        paragraphs: [
          { number: 1, content: "UN HERMANO de Corea del Sur llamado Jin-yeol cuenta: \"Mi esposa y yo llevamos casados más de 32 años. Los últimos cinco he estado cuidando de ella, pues tiene párkinson y casi no puede moverse. La quiero muchísimo y me gusta cuidarla. Todas las noches dormimos agarrados de la mano, yo en mi cama y ella a mi lado en una cama especial\"." },
          { number: 2, content: "¿Está usted cuidando de un ser querido, tal vez un padre, un hijo, un amigo o su esposo o esposa? En ese caso, seguro que lo hace con mucho gusto por el amor que siente por esa persona. Y también lo hace porque ama a Jehová (1 Tim. 5:4, 8; Sant. 1:27). Aun así, sin duda se enfrenta a dificultades que quizás les pasen desapercibidas a los demás o incluso puede que sienta que es el único que está sufriendo. Por fuera tal vez sonría, pero puede que por dentro esté muy triste y se eche a llorar cuando está a solas (Sal. 6:6). Aunque otros quizás no sepan por lo que usted está pasando, Jehová sí lo sabe y comprende sus sentimientos (compare con Éxodo 3:7). Cada una de sus lágrimas es muy valiosa para él, y aprecia todos los sacrificios que hace por atender a su ser querido (Sal. 56:8; 126:5). De hecho, Jehová considera que está en deuda con usted y promete recompensarlo (lea Proverbios 19:17).", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025649/univ/art/2025649_univ_cnt_1_lg.jpg", imageCaption: "Cuidadores en diferentes circunstancias: una hermana da de comer a su madre, otra le pone los zapatos a su esposo en silla de ruedas, otra le pone un casco a su hijo, un hermano visita a su padre mayor." },
          { number: 3, content: "En la Biblia encontramos muchos relatos de hombres y mujeres que tuvieron que cuidar de otros. Por ejemplo, cuando Abrahán y Sara salieron de Ur, su padre, Taré, tenía unos 200 años. A pesar de su avanzada edad, fue con ellos. Viajaron unos 960 kilómetros (600 millas) hasta llegar a Harán (Gén. 11:31, 32). Sin duda, Abrahán y Sara querían mucho a Taré, pero debió resultarles difícil cuidar de él, sobre todo mientras viajaban. Probablemente iban montados en camellos o en burros, lo que tenía que ser especialmente incómodo para Taré. Así que lo más normal es que Abrahán y Sara a veces se sintieran muy cansados, incluso agotados. Pero seguro que Jehová les dio las fuerzas que necesitaban. Y lo mismo hará con usted (Sal. 55:22)." },
          { number: 4, content: "Le resultará más fácil seguir cuidando de su ser querido si tiene una actitud alegre (Prov. 15:13). Recuerde que la felicidad es una cualidad que no depende de las circunstancias (Sant. 1:2, 3). ¿Cómo puede cultivarla? Una manera es pidiéndole a Jehová que lo ayude a mantener una actitud positiva. En este artículo veremos más sugerencias para no perder la alegría. También analizaremos qué pueden hacer los demás por quienes están cuidando de un ser querido. Pero primero veamos por qué es indispensable que los cuidadores mantengan la alegría y qué cosas podrían robársela." },
          { number: 5, content: "Si los cuidadores pierden la alegría, es más fácil que se cansen (Prov. 24:10). Y, si están cansados, puede que no sean tan amables ni ayuden tanto como les gustaría. Veamos ahora algunas cosas que podrían robarles la alegría." },
          { number: 6, content: "Los cuidadores pueden quemarse física y emocionalmente. Una hermana llamada Leah explica: \"Incluso en los días buenos, cuidar de alguien implica un desgaste emocional tremendo. Al final del día, muchas veces siento que no me queda ni una gota de energía. Ni siquiera tengo fuerzas para responder un mensaje\". A otros les cuesta sacar tiempo para descansar bien y desconectar a pesar de lo mucho que lo necesitan. Una hermana que se llama Inés dice: \"No consigo dormir lo suficiente. Muchas noches tengo que levantarme cada dos horas para atender a mi suegra. Y mi esposo y yo llevamos años sin poder tomarnos unas vacaciones\". Algunos cuidadores tienen que rechazar invitaciones sociales e incluso asignaciones teocráticas porque no pueden dejar solo a su ser querido ni un momento. Por eso quizás se sientan aislados o atrapados por sus circunstancias." },
          { number: 7, content: "Los cuidadores pueden sentirse profundamente culpables o tristes. Jessica, que también es hermana, admite: \"Me frustra no poder hacer más. A veces necesito un tiempo para descansar, pero cuando me lo tomo me siento culpable y egoísta\". Algunos cuidadores luchan con remordimientos porque de vez en cuando se sienten molestos por su situación. Otros temen que no están haciendo lo suficiente. Y hay quienes se sienten fatal porque en algún momento han perdido los nervios y le han dicho algo fuera de lugar a su ser querido (Sant. 3:2). Es posible que también les duela ver cómo la persona va perdiendo el vigor y la salud que la caracterizaban. Una hermana llamada Bárbara dice: \"Una de las cosas que peor llevo es ver a mi querida amiga deteriorarse cada día un poco más\"." },
          { number: 8, content: "Los cuidadores pueden sentir que no se valora lo que hacen. ¿Por qué? Porque pocas veces les dan las gracias o los felicitan por sus esfuerzos y sacrificios. Pero todos sabemos que unas palabras de gratitud pueden hacer mucho bien (1 Tes. 5:18). Por ejemplo, una hermana llamada Melissa cuenta: \"En ocasiones me siento tan frustrada que me echo a llorar. Pero, cuando las personas a las que cuido me dicen 'Gracias por todo lo que haces por mí', siento una inyección de ánimo. Eso me ayuda a levantarme al día siguiente lista y con muchas ganas de seguir cuidándolas\". Y un hermano que se llama Ahmadu explica el efecto que tienen en él las muestras de aprecio. Él y su esposa están cuidando de su sobrina pequeña, que sufre ataques epilépticos. Dice: \"Aunque ella quizás no comprenda bien todos los sacrificios que hacemos para cuidarla, mi corazón rebosa de alegría cuando nos da las gracias o garabatea en un papel 'Los quiero mucho'\"." },
          { number: 9, content: "Sea modesto (Prov. 11:2). Ninguno de nosotros tiene fuerzas y tiempo sin límites. Así que usted tendrá que determinar lo que puede hacer y lo que no, y a veces tendrá que decir que no a algunas cosas. Y eso no tiene nada de malo; solo está siendo modesto. Si otros se ofrecen a darle una mano, acepte con gusto su ayuda. Un hermano que se llama Jay explica: \"Es imposible hacer todo lo que nos gustaría. Para no perder la alegría, tenemos que saber cuáles son nuestros límites y no intentar ir más allá\"." },
          { number: 10, content: "Trate de ver más allá de lo obvio (lea Proverbios 19:11). La perspicacia lo ayudará a comprender por qué su ser querido hace o dice ciertas cosas y así mantener la calma en situaciones tensas. Algunas enfermedades crónicas pueden provocar que la persona haga cosas que nunca antes había hecho (Ecl. 7:7). Por ejemplo, alguien que es amable y bondadoso puede volverse irritable o conflictivo. Quizás se vuelva exigente, crítico o difícil de complacer. Por otro lado, puede resultar útil investigar un poco sobre la enfermedad de la persona que usted está cuidando. Cuanto más la conozca, más fácil le resultará comprender que el culpable de su comportamiento no es la persona, sino su enfermedad (Prov. 14:29)." },
          { number: 11, content: "Saque tiempo para fortalecer su amistad con Jehová. En ocasiones tendrá que dejar a un lado algunas actividades para atender asuntos \"más importantes\", como por ejemplo fortalecer su relación con Jehová (Filip. 1:10). El rey David estaba muy ocupado, pero demostró que adorar a Jehová era lo principal en su vida (lea Salmo 132:4, 5). Igualmente, aunque usted esté muy ocupado, es importante que saque tiempo todos los días para leer la Biblia y orar. Una hermana llamada Elisha dice: \"Consigo mantener la alegría orando y meditando en las palabras reconfortantes de algunos salmos. La oración ha sido mi salvavidas. Acudo a Jehová durante todo el día para que me ayude a estar tranquila\"." },
          { number: 12, content: "Aparte tiempo para cuidar su salud. Como usted está muy ocupado atendiendo a su ser querido, es posible que esté descuidando su alimentación porque no tiene tiempo de ir a comprar alimentos saludables y cocinar platos nutritivos. Pero recuerde que una buena alimentación y una rutina de ejercicio son esenciales para la salud física y mental. Así que aproveche bien el poco tiempo que tiene comiendo alimentos saludables y haciendo ejercicio con regularidad (Efes. 5:15, 16). Además, procure descansar lo suficiente (Ecl. 4:6). Según algunos estudios, dormir ayuda a eliminar toxinas del cerebro. El artículo \"El impacto del sueño en el estrés\", publicado por la institución médica estadounidense Banner Health, afirma que dormir lo suficiente también puede reducir la ansiedad y mejorar la capacidad de procesar el estrés. Por otro lado, es bueno que busque momentos para hacer actividades que le gusten (Ecl. 8:15). Una hermana que cuida de un ser querido explica algo que la ayuda a no perder la alegría: \"Cuando hace buen tiempo, salgo al aire libre para disfrutar del sol. Y por lo menos una vez al mes quedo con alguna amiga para pasar juntas un día divertido\"." },
          { number: 13, content: "No pierda el sentido del humor (lea Proverbios 17:22; Ecl. 3:1, 4). La risa es buena para el cuerpo y la mente. Claro, al cuidar de alguien, las cosas muchas veces no salen como esperamos. Pero, si usted logra ver el lado divertido incluso de las situaciones estresantes, le será más fácil sobrellevarlas. Y, si usted y su ser querido se ríen juntos, se sentirán más unidos." },
          { number: 14, content: "Hable con un amigo de confianza. Aunque se esfuerce por no perder la alegría, habrá ocasiones en las que se sentirá superado por la situación y necesite desahogarse con un buen amigo, alguien que no lo juzgue ni se escandalice por lo que usted le cuente (Prov. 17:17). Él lo escuchará con paciencia y le dirá palabras de consuelo, justo lo que usted necesita para mantener la alegría (Prov. 12:25)." },
          { number: 15, content: "Imagine lo que harán juntos en el Paraíso. Recuerde que, cuando Jehová creó a los seres humanos, su propósito no incluía que tuviéramos que cuidar de enfermos y mayores. Esa es una tarea temporal (2 Cor. 4:16-18). En el futuro nos espera \"la vida que realmente es vida\" (1 Tim. 6:19). Si usted y su ser querido hablan de lo que harán juntos en el Paraíso, los dos se sentirán reconfortados (Is. 33:24; 65:21). Una hermana llamada Heather cuenta: \"Suelo decirles a quienes cuido que pronto coseremos juntos, correremos juntos y pasearemos en bici juntos. Haremos pan y cocinaremos comidas ricas para nuestros seres queridos que resuciten. Y siempre le damos las gracias a Jehová por nuestra esperanza\"." },
          { number: 16, content: "Ayudemos a los cuidadores a tener tiempo para descansar. Podemos ofrecernos para atender a la persona a la que están cuidando. Así le daremos al cuidador tiempo para despejar la mente y atender sus asuntos personales (Gál. 6:2). Algunos hermanos han organizado turnos semanales. Natalya, una hermana que está cuidando de su esposo, que no puede andar, dice: \"Un hermano de la congregación viene a nuestra casa una o dos veces por semana para pasar tiempo con él. Predican, hablan e incluso ven películas. Mi esposo aprecia mucho esos ratos que pasan juntos, y yo aprovecho para descansar o para hacer cosas que me gustan, como salir a dar un paseo\". En algunos casos, hasta podríamos ofrecernos para cuidar a la persona alguna noche para que así su cuidador pueda dormir bien.", image: "https://assetsnffrgf-a.akamaihd.net/assets/m/2025649/univ/art/2025649_univ_cnt_2_lg.jpg", imageCaption: "Dos hermanas jóvenes visitan a una hermana mayor para que su cuidadora pueda salir a dar un paseo." },
          { number: 17, content: "Ayudemos a los cuidadores durante las reuniones. Es posible que los cuidadores no puedan concentrarse mucho en lo que se dice en las reuniones y las asambleas porque están ocupados atendiendo a su ser querido. Así que podemos ofrecernos para sentarnos con la persona a la que cuidan durante una de estas reuniones o parte de ellas. Si la persona no puede salir de su casa, podríamos ofrecernos para ir allí y conectarnos a la reunión con ella para que el cuidador pueda asistir en persona." },
          { number: 18, content: "Animemos a los cuidadores y oremos por ellos. Los ancianos deben pastorear con regularidad a estos hermanos (Prov. 27:23). Y es bueno que todos nosotros, sin importar las circunstancias, tengamos la costumbre de decirles palabras de ánimo y cariño. También podemos pedirle a Jehová que los siga fortaleciendo y ayudando a mantener la alegría (2 Cor. 1:11)." },
          { number: 19, content: "Pronto Jehová secará todas las lágrimas de dolor. La enfermedad y la muerte ya no existirán (Apoc. 21:3, 4). \"El cojo trepará como un ciervo\" (Is. 35:5, 6). \"Las cosas del pasado no serán recordadas\", entre ellas los achaques de la vejez y el dolor de tener que cuidar de un ser querido que está enfermo (Is. 65:17). Mientras llega el día en que Jehová cumpla sus maravillosas promesas, sabemos que él siempre estará a nuestro lado. Si seguimos pidiéndole que nos dé fuerzas, Jehová nos ayudará a \"aguantar todo con paciencia y felicidad\" (Col. 1:11)." }
        ],
        reviewQuestions: [
          {
            question: "¿Qué cosas podrían robarles la alegría a los cuidadores?",
            answer: [
              "Quemarse física y emocionalmente por el desgaste de cuidar.",
              "No poder descansar ni desconectar.",
              "Sentirse culpables o tristes por no poder hacer más.",
              "Sentir que no se valora lo que hacen.",
              "Ver cómo el ser querido se deteriora cada día."
            ]
          },
          {
            question: "¿Qué pueden hacer los cuidadores para mantener la alegría?",
            answer: [
              "Ser modestos y conocer sus límites.",
              "Tener perspicacia para comprender el comportamiento del ser querido.",
              "Sacar tiempo para fortalecer su amistad con Jehová.",
              "Cuidar su salud: alimentación, ejercicio y descanso.",
              "No perder el sentido del humor.",
              "Hablar con un amigo de confianza.",
              "Imaginar lo que harán juntos en el Paraíso."
            ]
          },
          {
            question: "¿Qué podemos hacer por los cuidadores?",
            answer: [
              "Ofrecernos para atender a la persona que cuidan y darles tiempo para descansar.",
              "Ayudarlos durante las reuniones sentándonos con su ser querido.",
              "Animarlos con palabras de ánimo y cariño.",
              "Orar a Jehová por ellos."
            ]
          }
        ],
        finalSong: "Canción 155: Mi mayor felicidad"
      },

      // Artículo 46: "Jesús es un Sumo Sacerdote compasivo" (19-25 Ene)
      {
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
      },
      // Artículo 47: "Tú eres muy valioso" (26 Ene-1 Feb)
      {
        metadata: {
          articleNumber: 47,
          week: "26 Ene-1 Feb",
          month: "Noviembre",
          year: 2025
        },
        song: "Canción 38: Jehová te cuidará",
        title: "\"Tú eres muy valioso\"",
        biblicalText: "\"Tú eres muy valioso\" (DAN. 9:23).",
        theme: "Ayudar a quienes tienen baja autoestima a comprender que son muy valiosos para Jehová.",
        questions: [
          {
            number: "1, 2",
            textEs: "¿Qué nos ayudará a convencernos de que somos muy valiosos para Jehová?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: [
              "Analizar relatos bíblicos que muestran cómo Jehová quiere que nos tratemos unos a otros.",
              "Jesús trató a las personas con dignidad y respeto, demostrando que él y su Padre consideran de gran valor a las personas humildes.",
              "En este artículo veremos: 1) cómo ayudó Jesús a las personas a ver que son valiosas para Jehová y 2) qué puedes hacer para convencerte de que tú también lo eres."
            ],
            flashcards: [
              {
                question: "¿Qué demostró Jesús al tratar a las personas con dignidad y respeto?",
                answer: "Que tanto él como su Padre consideran de gran valor a las personas que son humildes y se sienten poco importantes."
              },
              {
                question: "¿Por qué algunos siervos de Jehová tienen baja autoestima?",
                answer: "Tal vez porque alguien los ha tratado con desprecio y les ha hecho sentir que no valen nada."
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 5:19",
                purpose: "Jesús imita a su Padre",
                text: "El Hijo no puede hacer nada por su propia iniciativa, sino solo lo que ve hacer al Padre. Porque todo lo que el Padre hace, también lo hace el Hijo."
              },
              {
                reference: "Hebreos 1:3",
                purpose: "Jesús es el reflejo de la gloria de Dios",
                text: "Él es el reflejo de la gloria de Dios y la imagen exacta de su ser, y sostiene todas las cosas mediante su poderosa palabra."
              },
              {
                reference: "Ageo 2:7",
                purpose: "Las cosas deseables de las naciones vendrán",
                text: "Sacudiré a todas las naciones, y las cosas deseables de todas las naciones vendrán, y llenaré esta casa de gloria."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Cómo trató Jesús a las personas de Galilea que acudieron a él?",
            textLSM: "",
            paragraphs: [3],
            section: "CÓMO AYUDÓ JESÚS A LAS PERSONAS A VER QUE SON VALIOSAS",
            answer: [
              "Jesús vio que estaban 'maltratadas y abandonadas como ovejas sin pastor'.",
              "Los líderes religiosos las consideraban ignorantes e insignificantes, las llamaban 'gente maldita'.",
              "Jesús las trató con dignidad, dedicó tiempo a enseñarles y curarlas.",
              "Para ayudar a más personas, capacitó a sus apóstoles para predicar y les dio autoridad para curar enfermedades."
            ],
            flashcards: [
              {
                question: "¿Cómo veían los líderes religiosos a las personas de Galilea?",
                answer: "Las consideraban demasiado ignorantes e insignificantes, y hasta las llamaban 'gente maldita'."
              },
              {
                question: "¿Qué hizo Jesús para ayudar a más personas además de enseñarles él mismo?",
                answer: "Capacitó a sus apóstoles para predicar y les dio autoridad para curar todo tipo de enfermedades."
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 9:36",
                purpose: "Jesús sintió lástima por las multitudes",
                text: "Al ver las multitudes, se compadeció de ellas, porque estaban maltratadas y abandonadas como ovejas sin pastor."
              },
              {
                reference: "Juan 7:47-49",
                purpose: "Los líderes despreciaban al pueblo",
                text: "Los fariseos les contestaron: '¿También ustedes se han dejado engañar? ¿Acaso alguno de los gobernantes o de los fariseos ha puesto fe en él? Pero esta gente que no conoce la Ley son unos malditos'."
              }
            ]
          },
          {
            number: "4",
            textEs: "¿Qué aprendemos de la manera como Jesús trató a las personas humildes?",
            textLSM: "",
            paragraphs: [4],
            answer: [
              "Al tratar con bondad y respeto a las personas que el mundo suele despreciar, Jesús mostró que tanto él como su Padre las consideran valiosas.",
              "Si sirves a Jehová pero sientes que no vales mucho, recuerda cómo Jesús trató a las personas humildes.",
              "Eso te ayudará a ver cuánto le importas a Jehová."
            ],
            flashcards: [
              {
                question: "¿Qué demostró Jesús al tratar con bondad a quienes el mundo despreciaba?",
                answer: "Que tanto él como su Padre las consideran valiosas."
              },
              {
                question: "¿Qué debe recordar quien sirve a Jehová pero siente que no vale mucho?",
                answer: "Cómo Jesús trató a las personas que eran humildes y querían aprender de él."
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Qué le pasaba a la mujer con la que se encontró Jesús en Galilea?",
            textLSM: "",
            paragraphs: [5],
            answer: [
              "Llevaba 12 años con hemorragias.",
              "Este problema médico la hacía ceremonialmente impura.",
              "Cualquiera que la tocara se volvería impuro, así que casi nunca pasaba tiempo con otras personas.",
              "No podía adorar a Jehová junto con el resto de la gente en la sinagoga ni en las fiestas.",
              "Sufría mucho no solo física, sino también emocionalmente."
            ],
            flashcards: [
              {
                question: "¿Cuántos años llevaba la mujer sufriendo hemorragias?",
                answer: "12 años."
              },
              {
                question: "¿Qué consecuencias sociales y espirituales tenía su enfermedad?",
                answer: "No podía pasar tiempo con otras personas ni adorar a Jehová en la sinagoga o las fiestas porque era ceremonialmente impura."
              }
            ],
            biblicalCards: [
              {
                reference: "Marcos 5:25",
                purpose: "La mujer llevaba 12 años enferma",
                text: "Y había una mujer que llevaba 12 años con hemorragias."
              },
              {
                reference: "Levítico 15:19, 25",
                purpose: "La ley sobre la impureza",
                text: "Cuando una mujer tenga flujo de sangre, será impura durante siete días. Si tiene un flujo de sangre durante muchos días fuera del periodo de su menstruación, será impura."
              }
            ]
          },
          {
            number: "6",
            textEs: "¿Cómo se curó la mujer que sufría hemorragias?",
            textLSM: "",
            paragraphs: [6],
            answer: [
              "No le pidió directamente a Jesús que la curara.",
              "Quizás se sentía muy avergonzada por su enfermedad o le daba miedo que Jesús la regañara por meterse entre la gente estando impura.",
              "Simplemente le tocó la ropa, pues tenía mucha fe en que así se curaría.",
              "¡Su enfermedad desapareció al instante!"
            ],
            flashcards: [
              {
                question: "¿Por qué la mujer no le pidió directamente a Jesús que la curara?",
                answer: "Quizás se sentía muy avergonzada por su enfermedad o le daba miedo que Jesús la regañara por haberse metido entre la gente estando impura."
              },
              {
                question: "¿Qué hizo la mujer para curarse y por qué?",
                answer: "Simplemente le tocó la ropa a Jesús porque tenía una fe muy fuerte en que así se curaría."
              }
            ],
            biblicalCards: [
              {
                reference: "Marcos 5:27, 28",
                purpose: "La fe de la mujer",
                text: "Cuando oyó hablar de Jesús, se acercó por detrás entre la gente y le tocó la ropa, porque se decía: 'Si le toco aunque sea la ropa, me curaré'."
              }
            ]
          },
          {
            number: "7",
            textEs: "¿Cómo trató Jesús a aquella mujer? (Marcos 5:34).",
            textLSM: "",
            paragraphs: [7],
            readText: "LEE Marcos 5:34",
            answer: [
              "Jesús se dio cuenta de que la mujer estaba 'temblando de miedo'.",
              "Le habló con mucho cariño, consideración y respeto.",
              "La llamó 'hija', lo cual no era una simple fórmula de cortesía, sino una muestra de cercanía y ternura.",
              "En vez de solo devolverle la salud, Jesús también la ayudó a ver que su Padre en el cielo la quería muchísimo."
            ],
            flashcards: [
              {
                question: "¿Por qué es significativo que Jesús llamara 'hija' a la mujer?",
                answer: "Es la única ocasión de la que hay registro en la que Jesús se dirige a una mujer llamándola 'hija'. No era una simple fórmula de cortesía, sino una muestra de cercanía y ternura."
              },
              {
                question: "Además de curarla, ¿qué más hizo Jesús por la mujer?",
                answer: "La ayudó a ver que su Padre en el cielo la quería muchísimo."
              }
            ],
            biblicalCards: [
              {
                reference: "Marcos 5:33",
                purpose: "La mujer temblaba de miedo",
                text: "La mujer, asustada y temblando, sabiendo lo que le había pasado, se acercó y se postró ante él y le dijo toda la verdad."
              },
              {
                reference: "Marcos 5:34",
                purpose: "Las palabras de cariño de Jesús",
                text: "Él le dijo: 'Hija, tu fe te ha sanado. Vete en paz y queda sana de tu terrible enfermedad'."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Qué dificultades afrontó una hermana de Brasil?",
            textLSM: "",
            paragraphs: [8],
            answer: [
              "Renata nació sin piernas y sin su mano izquierda debido a un defecto genético.",
              "En la escuela todo el tiempo le hacían bullying y se burlaban de ella con apodos crueles.",
              "Incluso sus propios familiares a veces la trataban con prejuicios."
            ],
            flashcards: [
              {
                question: "¿Qué defecto genético tiene Renata?",
                answer: "Nació sin piernas y sin su mano izquierda."
              },
              {
                question: "¿Cómo la trataban en la escuela y su familia?",
                answer: "En la escuela le hacían bullying y le ponían apodos crueles; incluso sus propios familiares a veces la trataban con prejuicios."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿Qué ayudó a Renata a sentirse muy valiosa?",
            textLSM: "",
            paragraphs: [9],
            answer: [
              "Cuando se hizo testigo de Jehová, los hermanos de su congregación la animaron con cariño.",
              "La ayudaron a verse a sí misma como la ve Jehová.",
              "Ella dice: 'Le doy las gracias a Dios de todo corazón por regalarme esta maravillosa familia espiritual'.",
              "Gracias a todo lo que hicieron por ella, Renata entendió que a los ojos de Jehová es muy valiosa."
            ],
            flashcards: [
              {
                question: "¿Qué hicieron los hermanos de la congregación por Renata?",
                answer: "La animaron con cariño y la ayudaron a verse a sí misma como la ve Jehová."
              },
              {
                question: "¿Qué conclusión sacó Renata gracias al apoyo de los hermanos?",
                answer: "Entendió que a los ojos de Jehová es muy valiosa."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿En qué situación terrible estuvo María Magdalena? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [10],
            image: "",
            imageCaption: "¿De qué maneras ayudó Jesús a María Magdalena a ver el gran valor que tenía a los ojos de Dios?",
            answer: [
              "María Magdalena estuvo poseída por siete demonios.",
              "Probablemente ellos la hacían comportarse de formas extrañas.",
              "El resto de la gente seguramente la evitaba.",
              "Debió de sentirse marginada, indefensa y asustada.",
              "Jesús la liberó de esos demonios y ella empezó a seguirlo con fe."
            ],
            flashcards: [
              {
                question: "¿Por cuántos demonios estuvo poseída María Magdalena?",
                answer: "Por siete demonios."
              },
              {
                question: "¿Cómo debió sentirse María Magdalena durante su posesión demoníaca?",
                answer: "Marginada, indefensa y asustada, ya que probablemente la gente la evitaba por su comportamiento extraño."
              }
            ],
            biblicalCards: [
              {
                reference: "Lucas 8:2",
                purpose: "María Magdalena había sido liberada de demonios",
                text: "Y también algunas mujeres que habían sido curadas de espíritus malvados y de enfermedades: María, la llamada Magdalena, de quien habían salido siete demonios."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Cómo le dejó claro Jesús a María Magdalena lo mucho que Jehová la apreciaba? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [11],
            answer: [
              "Jesús invitó a María Magdalena a acompañarlo en sus giras de predicación.",
              "Gracias a eso, tuvo el privilegio de escuchar lo que él iba enseñando.",
              "Jesús se le apareció el día que resucitó; fue una de las primeras personas con las que habló.",
              "Le encargó que fuera a decirles a los apóstoles que había resucitado."
            ],
            flashcards: [
              {
                question: "¿Qué privilegios recibió María Magdalena de parte de Jesús?",
                answer: "La invitó a acompañarlo en sus giras de predicación y fue una de las primeras personas a las que se apareció después de resucitar."
              },
              {
                question: "¿Qué encargo especial le dio Jesús a María Magdalena el día de su resurrección?",
                answer: "Le encargó que fuera a decirles a los apóstoles que había resucitado."
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 20:11-18",
                purpose: "Jesús se aparece a María Magdalena",
                text: "María se quedó afuera, junto a la tumba, llorando. Jesús le dijo: '¿Por qué lloras? ¿A quién buscas?'. Ella le dijo: 'Señor, si tú te lo has llevado, dime dónde lo has puesto'. Jesús le dijo: '¡María!'. Ella se volvió y le dijo: '¡Rabboni!'."
              },
              {
                reference: "Lucas 8:1-3",
                purpose: "María Magdalena acompañaba a Jesús",
                text: "Poco después, él iba viajando de ciudad en ciudad y de aldea en aldea, predicando y declarando las buenas noticias del Reino de Dios. Con él iban los Doce, así como algunas mujeres que habían sido curadas."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Por qué se sentía rechazada Lidia?",
            textLSM: "",
            paragraphs: [12],
            answer: [
              "Cuando su madre estaba embarazada de ella, estuvo planteándose abortar.",
              "Aunque al final no lo hizo, su madre nunca se ocupaba de ella y le decía cosas muy crueles.",
              "Lidia solo quería que los demás la aceptaran y la quisieran.",
              "Le daba miedo no conseguirlo porque su madre la había convencido de que era una mala persona y no lo merecía."
            ],
            flashcards: [
              {
                question: "¿Qué cosas crueles experimentó Lidia de parte de su madre?",
                answer: "Su madre nunca se ocupaba de ella, le decía cosas muy crueles y la había convencido de que era una mala persona que no merecía ser querida."
              },
              {
                question: "¿Qué era lo único que Lidia quería en la vida?",
                answer: "Que los demás la aceptaran y la quisieran."
              }
            ]
          },
          {
            number: "13",
            textEs: "¿Qué ayudó a Lidia a comprender el gran valor que tiene a los ojos de Jehová?",
            textLSM: "",
            paragraphs: [13],
            answer: [
              "Las cosas cambiaron cuando Lidia conoció la verdad.",
              "La oración, la lectura de la Biblia y el cariño de los hermanos la ayudaron.",
              "Su esposo le dice muy a menudo cuánto la quiere y siempre le recuerda sus buenas cualidades.",
              "También tiene amigos muy queridos que han hecho lo mismo."
            ],
            flashcards: [
              {
                question: "¿Qué tres cosas ayudaron a Lidia a comprender su valor a los ojos de Jehová?",
                answer: "La oración, la lectura de la Biblia y el cariño de los hermanos."
              },
              {
                question: "¿Cómo la ayuda su esposo a Lidia?",
                answer: "Le dice muy a menudo cuánto la quiere y siempre le está recordando sus buenas cualidades."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿Qué nos enseña 1 Samuel 16:7 sobre el punto de vista de Jehová? (Vea también el recuadro \"¿Por qué valora Jehová tanto a sus siervos?\").",
            textLSM: "",
            paragraphs: [14],
            section: "QUÉ PUEDES HACER PARA VERTE COMO JEHOVÁ TE VE",
            readText: "LEE 1 Samuel 16:7",
            answer: [
              "El punto de vista de Jehová es diferente al de las personas del mundo.",
              "Él no mide lo que vales según tu apariencia física, tu posición social o tu nivel de estudios.",
              "Al pensar en lo que vales, fíjate en las mismas cosas que Jehová.",
              "Lee en la Biblia relatos de personas que tuvieron baja autoestima y presta atención a cómo Jehová mostró que los valoraba."
            ],
            flashcards: [
              {
                question: "¿En qué NO se fija Jehová para medir lo que vales?",
                answer: "En tu apariencia física, tu posición social o tu nivel de estudios."
              },
              {
                question: "¿Qué ejemplos bíblicos de personas con baja autoestima menciona el artículo?",
                answer: "Elías, Noemí y Ana."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Samuel 16:7",
                purpose: "Jehová mira el corazón",
                text: "El hombre ve lo que aparece ante sus ojos, pero Jehová ve lo que hay en el corazón."
              },
              {
                reference: "Isaías 55:8, 9",
                purpose: "Los pensamientos de Jehová son superiores",
                text: "Porque mis pensamientos no son los pensamientos de ustedes, ni sus caminos son mis caminos. Porque, así como los cielos son más altos que la tierra, mis caminos son más altos que los caminos de ustedes."
              }
            ]
          },
          {
            number: "15",
            textEs: "¿Por qué le dijo Jehová a Daniel \"Tú eres muy valioso\"? (Daniel 9:23).",
            textLSM: "",
            paragraphs: [15],
            readText: "LEE Daniel 9:23",
            answer: [
              "Daniel tenía cerca de 100 años cuando se sintió 'muy agotado' y desanimado.",
              "Jehová le envió al ángel Gabriel para informarle que sus oraciones habían sido escuchadas.",
              "Jehová lo estimaba por sus muchas cualidades, como su amor por la justicia y su fidelidad.",
              "Al igual que con Daniel, Jehová escucha tus oraciones y te valora porque amas lo correcto y le sirves fielmente."
            ],
            flashcards: [
              {
                question: "¿Qué edad tenía Daniel cuando recibió el mensaje de Gabriel?",
                answer: "Cerca de 100 años."
              },
              {
                question: "¿Por qué cualidades valoraba Jehová a Daniel?",
                answer: "Por su amor por la justicia y su fidelidad."
              }
            ],
            biblicalCards: [
              {
                reference: "Daniel 9:23",
                purpose: "El mensaje de Gabriel a Daniel",
                text: "Al comienzo de tus súplicas, se dio una orden, y he venido a informarte, porque tú eres muy valioso. Así que presta atención al mensaje y entiende la visión."
              },
              {
                reference: "Daniel 9:20, 21",
                purpose: "Daniel estaba muy agotado",
                text: "Todavía estaba hablando y orando, confesando mi pecado y el pecado de mi pueblo Israel, cuando Gabriel, a quien había visto antes en la visión, se me acercó volando."
              },
              {
                reference: "Ezequiel 14:14",
                purpose: "Daniel era un hombre justo",
                text: "Aunque estuvieran en medio de ella estos tres hombres —Noé, Daniel y Job—, solo ellos se salvarían a sí mismos por su justicia."
              },
              {
                reference: "Hebreos 6:10",
                purpose: "Jehová no olvida nuestra fidelidad",
                text: "Porque Dios no es injusto para olvidarse de la obra de ustedes y del amor que le han demostrado a su nombre mediante el servicio que han dado a los santos."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Qué te puede ayudar a ver a Jehová como un padre que te quiere?",
            textLSM: "",
            paragraphs: [16],
            answer: [
              "Trata de ver a Jehová como un padre que te quiere.",
              "Él no se dedica a buscar defectos en ti, sino que desea ayudarte.",
              "Eliana, tras soportar años de maltrato verbal, se imagina que Jehová la lleva en sus brazos y le da su cariño y protección.",
              "Lauren se recuerda: 'Si Jehová me atrajo a él con las cuerdas del amor e incluso me ha utilizado para enseñar a otros, eso sin duda quiere decir que me considera útil y valiosa'."
            ],
            flashcards: [
              {
                question: "¿Qué hace Eliana cuando le invaden sentimientos de inutilidad?",
                answer: "Trata de imaginarse que Jehová la lleva en sus brazos y le da su cariño y protección."
              },
              {
                question: "¿Qué razonamiento usa Lauren para sentirse valiosa?",
                answer: "'Si Jehová me atrajo a él con las cuerdas del amor e incluso me ha utilizado para enseñar a otros, eso quiere decir que me considera útil y valiosa'."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 130:3",
                purpose: "Jehová no lleva cuenta de nuestros errores",
                text: "Si tú, oh Jah, tomaras en cuenta los errores, ¿quién podría mantenerse en pie, oh Jehová?"
              },
              {
                reference: "Mateo 7:11",
                purpose: "Jehová da cosas buenas a sus hijos",
                text: "Entonces, si ustedes, aunque son malos, saben dar buenos regalos a sus hijos, ¡con cuánta más razón el Padre que está en los cielos dará cosas buenas a los que le pidan!"
              },
              {
                reference: "Lucas 12:6, 7",
                purpose: "Jehová se preocupa por nosotros",
                text: "¿No se venden cinco gorriones por dos monedas de poco valor? Sin embargo, Dios no se olvida de ninguno de ellos. Ustedes valen más que muchos gorriones."
              },
              {
                reference: "Salmo 28:9",
                purpose: "Jehová lleva a su pueblo",
                text: "Salva a tu pueblo y bendice tu herencia. Pastoréalos y cárgalos para siempre."
              },
              {
                reference: "Oseas 11:4",
                purpose: "Jehová nos atrae con cuerdas de amor",
                text: "Los fui guiando con las cuerdas del amor humano, con las sogas del cariño. Les fui como los que levantan un yugo de sus quijadas, y me incliné hacia ellos para darles de comer."
              }
            ]
          },
          {
            number: "17",
            textEs: "¿Qué te puede convencer de que cuentas con la aprobación de Jehová? (Salmo 5:12; vea también la imagen).",
            textLSM: "",
            paragraphs: [17],
            readText: "LEE Salmo 5:12",
            image: "",
            imageCaption: "Saber que contamos con la aprobación de Jehová nos ayuda a luchar contra la baja autoestima.",
            answer: [
              "David dijo que la aprobación de Jehová es como 'un gran escudo' que protege a los justos.",
              "Estar convencido de que tienes el favor y el apoyo de Dios te protegerá cuando te asalten las dudas sobre tu valor como persona.",
              "En su Palabra, Jehová te confirma su amor.",
              "Él utiliza a los ancianos, a los amigos y a otros hermanos para recordarte lo valioso que eres."
            ],
            flashcards: [
              {
                question: "¿Con qué compara David la aprobación de Jehová en Salmo 5:12?",
                answer: "Con 'un gran escudo' que protege a los justos."
              },
              {
                question: "¿Cómo usa Jehová a otras personas para ayudarnos con la autoestima?",
                answer: "Utiliza a los ancianos, a los amigos y a otros hermanos para recordarnos lo valiosos que somos."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 5:12",
                purpose: "Jehová bendice al justo",
                text: "Porque tú bendices al justo, oh Jehová; con tu favor lo rodeas como con un gran escudo."
              }
            ]
          },
          {
            number: "18",
            textEs: "¿Por qué debes aceptar las palabras de ánimo que te dan?",
            textLSM: "",
            paragraphs: [18],
            answer: [
              "Si las personas que te conocen y te quieren te dicen cosas positivas, no las rechaces pensando que no son ciertas.",
              "Jehová puede estar usando a esas personas para confirmarte que cuentas con su aprobación.",
              "Eliana dice: 'Poco a poco estoy aprendiendo a creerme las palabras de ánimo que me dan, porque sé que Jehová quiere que las acepte'.",
              "Los ancianos la han ayudado con mucho cariño, y ahora es precursora y colabora como voluntaria a distancia para Betel."
            ],
            flashcards: [
              {
                question: "¿Qué puede estar haciendo Jehová cuando otras personas nos dicen cosas positivas?",
                answer: "Puede estar usando a esas personas para confirmarnos que contamos con su aprobación."
              },
              {
                question: "¿Qué privilegios tiene ahora Eliana gracias a aceptar el ánimo de los demás?",
                answer: "Es precursora y colabora como voluntaria a distancia para Betel."
              }
            ]
          },
          {
            number: "19",
            textEs: "¿Por qué puedes tener la seguridad de que eres de gran valor para Jehová?",
            textLSM: "",
            paragraphs: [19],
            answer: [
              "Jesús nos enseñó de manera muy tierna lo mucho que le importamos a nuestro Padre celestial.",
              "Puedes tener la seguridad de que eres de gran valor para Jehová.",
              "¡Nunca lo olvides!",
              "Haz todo lo posible por ayudar a otros a ver lo valiosos que son a los ojos de Dios."
            ],
            flashcards: [
              {
                question: "¿Qué nos enseñó Jesús sobre cuánto le importamos a Jehová?",
                answer: "Nos enseñó de manera muy tierna lo mucho que le importamos a nuestro Padre celestial."
              },
              {
                question: "¿Qué debemos hacer además de convencernos de nuestro propio valor?",
                answer: "Hacer todo lo posible por ayudar a otros a ver lo valiosos que son a los ojos de Dios."
              }
            ],
            biblicalCards: [
              {
                reference: "Lucas 12:24",
                purpose: "Jehová cuida de nosotros",
                text: "Fíjense bien en los cuervos: no siembran ni cosechan, y no tienen almacén ni granero; sin embargo, Dios les da de comer. ¿No valen ustedes mucho más que los pájaros?"
              }
            ]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "JEHOVÁ considera muy valiosos a todos sus siervos. Aun así, algunos de ellos tienen baja autoestima. ¿Por qué? Tal vez sea porque alguien los ha tratado con desprecio y les ha hecho sentir que no valen nada. Si ese es tu caso, ¿qué te ayudará a convencerte de que eres una persona muy valiosa para Jehová?"
          },
          {
            number: 2,
            content: "Algo que puedes hacer es analizar relatos bíblicos que muestran cómo Jehová quiere que nos tratemos unos a otros. Su Hijo, Jesús, trató a las personas con dignidad y respeto. Al hacer esto, demostró que tanto él como su Padre consideran de gran valor a las personas que son humildes y se sienten poco importantes (Juan 5:19; Heb. 1:3). En este artículo, analizaremos dos ideas principales: 1) cómo ayudó Jesús a las personas a ver que son valiosas para Jehová y 2) qué puedes hacer para convencerte de que tú también lo eres (Ageo 2:7)."
          },
          {
            number: 3,
            content: "Durante la tercera gira de predicación de Jesús por Galilea, vez tras vez muchas personas acudieron a él para que les enseñara y las curara. Jesús vio que \"estaban maltratadas y abandonadas como ovejas sin pastor\" (Mat. 9:36). Los líderes religiosos las consideraban demasiado ignorantes e insignificantes, y hasta las llamaban \"gente maldita\" (Juan 7:47-49). Pero Jesús las trató con dignidad, pues dedicó tiempo a enseñarles y curarlas (Mat. 9:35). Además, para ayudar a más personas, capacitó a sus apóstoles para predicar y les dio autoridad para curar todo tipo de enfermedades (Mat. 10:5-8)."
          },
          {
            number: 4,
            content: "Al tratar con bondad y respeto a las personas que el mundo suele despreciar, Jesús mostró que tanto él como su Padre las consideran valiosas. Por eso, si tú sirves a Jehová pero sientes que no vales mucho, recuerda cómo Jesús trató a las personas que eran humildes y querían aprender de él. Eso te ayudará a ver cuánto le importas a Jehová."
          },
          {
            number: 5,
            content: "Jesús no solo enseñó y ayudó a grupos en general, sino también a personas individuales. Por ejemplo, mientras predicaba en Galilea, se encontró con una mujer que llevaba 12 años con hemorragias (Mar. 5:25). Como este problema médico la hacía ceremonialmente impura, cualquiera que la tocara se volvería impuro, así que seguramente casi nunca pasaba tiempo con otras personas. Además, no podía adorar a Jehová junto con el resto de la gente en la sinagoga ni en las fiestas (Lev. 15:19, 25). ¿Podemos imaginar lo mucho que sufría no solo física, sino también emocionalmente? (Mar. 5:26)."
          },
          {
            number: 6,
            content: "Esta pobre mujer quería que Jesús la curara, pero no se lo pidió directamente. ¿Por qué no? Quizás es que se sentía muy avergonzada por su enfermedad. O tal vez le daba miedo que Jesús la regañara por haberse metido entre la gente estando impura. De modo que simplemente le tocó la ropa, pues tenía una fe muy fuerte en que así se curaría (Mar. 5:27, 28). Y tenía razón: ¡su enfermedad desapareció! Entonces Jesús preguntó quién lo había tocado, y ella lo confesó todo. ¿Cómo reaccionó él?"
          },
          {
            number: 7,
            content: "Jesús se dio cuenta de que la mujer estaba \"temblando de miedo\", así que le habló con mucho cariño, consideración y respeto (Mar. 5:33). Incluso la llamó \"hija\", lo cual no era una simple fórmula de cortesía, sino una muestra de cercanía y ternura (lee Marcos 5:34). La nota de estudio para esta palabra explica: \"Esta es la única ocasión de la que hay registro en la que Jesús se dirige a una mujer llamándola 'hija'. Tal vez lo hizo porque la situación era delicada y ella estaba 'temblando'\". ¡Qué alivio para ella! ¿Te imaginas que Jesús no le hubiera hablado con tanta bondad? Ella se habría curado de su enfermedad, pero quizás se habría quedado con unos enormes sentimientos de culpa. Por eso, en vez de solo devolverle la salud, Jesús también la ayudó a ver esta realidad: que su Padre en el cielo la quería muchísimo."
          },
          {
            number: 8,
            content: "Hoy día, algunos siervos de Dios también padecen problemas de salud que los pueden dejar deprimidos y sin autoestima. Veamos el caso de una precursora regular de Brasil llamada Renata. Debido a un defecto genético, nació sin piernas y sin su mano izquierda. Ella cuenta: \"En la escuela todo el tiempo me hacían bullying y se burlaban de mí poniéndome apodos crueles. Incluso mis propios familiares a veces me trataban con prejuicios\"."
          },
          {
            number: 9,
            content: "¿Qué ayuda recibió Renata? Cuando se hizo testigo de Jehová, los hermanos de su congregación la animaron con cariño y la ayudaron a verse a sí misma como la ve Jehová. Ella dice: \"Si tuviera que escribir una lista con los nombres de todos los que me han ayudado, ¡no terminaría nunca! Le doy las gracias a Dios de todo corazón por regalarme esta maravillosa familia espiritual\". Gracias a todo lo que hicieron por ella, Renata entendió que a los ojos de Jehová es muy valiosa."
          },
          {
            number: 10,
            content: "Hablemos de otra persona a la que Jesús ayudó de manera individual: María Magdalena. Ella estuvo poseída por siete demonios (Luc. 8:2). Probablemente ellos la hacían comportarse de formas extrañas, por lo que de seguro el resto de la gente la evitaba. En ese periodo tan oscuro de su vida, debió de sentirse marginada, indefensa y asustada. Parece que Jesús la liberó de esos demonios, y ella empezó a seguirlo con fe. De este modo, la ayudó a ver el inmenso valor que tenía a los ojos de Dios. Pero esto no fue lo único que hizo por ella."
          },
          {
            number: 11,
            content: "Jesús invitó a María Magdalena a acompañarlo en sus giras de predicación. Gracias a eso, tuvo el privilegio de escuchar lo que él iba enseñando. Además, Jesús se le apareció el día que resucitó; de hecho, ella fue una de las primeras personas con las que habló. Incluso le encargó que fuera a decirles a los apóstoles que había resucitado. De estas maneras, le dejó claro lo mucho que Jehová la apreciaba (Juan 20:11-18)."
          },
          {
            number: 12,
            content: "Al igual que María Magdalena, muchas personas hoy sufren el rechazo de los demás. Una hermana de España llamada Lidia cuenta que, cuando su madre estaba embarazada de ella, estuvo planteándose abortar. Aunque al final no lo hizo, Lidia recuerda que desde muy pequeñita su madre nunca se ocupaba de ella y le decía cosas muy crueles. Y añade: \"Lo único que yo quería en la vida era que los demás me aceptaran y me quisieran, pero me daba miedo no conseguirlo porque mi madre me había convencido de que era una mala persona y no lo merecía\"."
          },
          {
            number: 13,
            content: "Pero las cosas cambiaron cuando Lidia conoció la verdad. La oración, la lectura de la Biblia y el cariño de los hermanos la ayudaron a comprender el gran valor que tiene a los ojos de Jehová. Ella cuenta: \"Mi esposo me dice muy a menudo cuánto me quiere y siempre me está recordando mis buenas cualidades. También tengo amigos muy queridos que han hecho lo mismo\". ¿Se te viene a la mente alguien que necesite ayuda para convencerse de lo mucho que vale para Jehová? ¿Qué puedes hacer por él?"
          },
          {
            number: 14,
            content: "Recuerda que el punto de vista de Jehová es diferente al de las personas del mundo (lee 1 Samuel 16:7). A diferencia de la gente, él no mide lo que vales según tu apariencia física, tu posición social o tu nivel de estudios (Is. 55:8, 9). Así que, al pensar en lo que vales, fíjate en las mismas cosas que Jehová. ¿Qué te ayudará? Lee en la Biblia relatos de personas que a veces tuvieron baja autoestima, como Elías, Noemí y Ana, y presta atención a cómo Jehová mostró que los valoraba. También puedes poner por escrito momentos de tu vida en los que hayas visto que Jehová te ama y aprecia profundamente. Otra sugerencia es buscar información sobre la autoestima en nuestras publicaciones."
          },
          {
            number: 15,
            content: "No olvides que Jehová te considera muy valioso por tu fidelidad. Cuando el profeta Daniel tenía cerca de 100 años, hubo una ocasión en la que se sintió \"muy agotado\" y desanimado (Dan. 9:20, 21). ¿Qué hizo Jehová para animarlo? Le envió al ángel Gabriel para que le informara que sus oraciones habían sido escuchadas y le dijera: \"Tú eres muy valioso\" (lee Daniel 9:23). ¿Por qué lo estimaba tanto Jehová? Por sus muchas cualidades, como su amor por la justicia y su fidelidad (Ezeq. 14:14). Dios hizo que este relato se escribiera en su Palabra para consolarnos (Rom. 15:4). Al igual que hizo con Daniel, Jehová escucha tus oraciones y te valora porque amas lo correcto y le sirves fielmente (Miq. 6:8; Heb. 6:10)."
          },
          {
            number: 16,
            content: "Trata de ver a Jehová como un padre que te quiere. Él no se dedica a buscar defectos en ti, sino que desea ayudarte (Sal. 130:3; Mat. 7:11; Luc. 12:6, 7). Meditar en esto ha hecho que muchas personas que están luchando contra la baja autoestima se sientan mejor. Por ejemplo, veamos el caso de Eliana, una hermana de España que, tras soportar años de maltrato verbal por parte de su esposo, llegó a sentir que no valía para nada y que nadie la quería. Ella explica: \"Siempre que me invaden los sentimientos de inutilidad, trato de imaginarme que Jehová me lleva en sus brazos y me da su cariño y protección\" (Sal. 28:9). Y Lauren, una hermana de Sudáfrica, se recuerda a sí misma: \"Si Jehová me atrajo a él con las cuerdas del amor, me ha ayudado a mantenerme a su lado todos estos años e incluso me ha utilizado para enseñar a otros, eso sin duda quiere decir que me considera útil y valiosa\" (Os. 11:4)."
          },
          {
            number: 17,
            content: "Convéncete de que cuentas con la aprobación de Jehová (lee Salmo 5:12). David dijo que la aprobación de Jehová es como \"un gran escudo\" que protege a los justos. Estar convencido de que tienes el favor y el apoyo de Dios te protegerá cuando te asalten las dudas sobre tu valor como persona. ¿Y cómo puedes saber si Jehová está contento contigo? Como hemos visto, en su Palabra te confirma su amor. Además, utiliza a los ancianos, a los amigos y a otros hermanos para recordarte lo valioso que eres para él. Ahora bien, ¿cómo debes reaccionar ante las palabras de ánimo?"
          },
          {
            number: 18,
            content: "Si las personas que te conocen y te quieren te dicen cosas positivas sobre ti, no las rechaces pensando que no son ciertas. Ten presente que Jehová puede estar usando a esas personas para confirmarte que cuentas con su aprobación. Eliana, mencionada antes, dice: \"Aunque me cuesta mucho, poco a poco estoy aprendiendo a creerme las palabras de ánimo que me dan, porque sé que Jehová quiere que las acepte\". Los ancianos también la han ayudado con mucho cariño, y ahora es precursora y colabora como voluntaria a distancia para Betel."
          },
          {
            number: 19,
            content: "Jesús nos enseñó de manera muy tierna lo mucho que le importamos a nuestro Padre celestial (Luc. 12:24). Así que puedes tener la seguridad de que eres de gran valor para Jehová. ¡Nunca lo olvides! Además, haz todo lo posible por ayudar a otros a ver lo valiosos que son a los ojos de Dios."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Cómo ayudó Jesús a las personas a ver que eran valiosas a los ojos de Dios?",
            answer: [
              "Las trató con dignidad y respeto, dedicando tiempo a enseñarles y curarlas.",
              "Capacitó a sus apóstoles para predicar y curar, ayudando así a más personas.",
              "Mostró bondad especial a individuos como la mujer con hemorragias y María Magdalena.",
              "Les dejó claro que tanto él como su Padre las consideran valiosas."
            ]
          },
          {
            question: "¿Cómo ayudó Jesús a la mujer que sufría hemorragias?",
            answer: [
              "La curó cuando ella le tocó la ropa con fe.",
              "Le habló con mucho cariño, consideración y respeto.",
              "La llamó 'hija', mostrando cercanía y ternura.",
              "La ayudó a ver que su Padre en el cielo la quería muchísimo."
            ]
          },
          {
            question: "¿Qué podemos hacer para vernos como Jehová nos ve?",
            answer: [
              "Recordar que Jehová no mide lo que valemos según nuestra apariencia física, posición social o nivel de estudios.",
              "Leer relatos bíblicos de personas con baja autoestima y cómo Jehová mostró que los valoraba.",
              "Ver a Jehová como un padre que nos quiere y desea ayudarnos.",
              "Convencernos de que contamos con la aprobación de Jehová y aceptar las palabras de ánimo de los demás."
            ]
          }
        ],
        finalSong: "Canción 139: ¿Te ves en el nuevo mundo?"
      }
    ]
  },

  // ========================================
  // DICIEMBRE 2025 - ARTÍCULOS DE ESTUDIO
  // ========================================

  "2025-12": {
    articles: [
      // Artículo 48: "Cómo nos ayuda el libro de Job cuando estamos sufriendo" (2-8 Feb)
      {
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
              "Aunque se escribió hace unos 3.500 años, se lo sigue considerando una joya de la literatura universal.",
              "Muestra claramente la importante cuestión de la santificación del nombre de Jehová.",
              "Nos ayuda a conocer mejor las hermosas cualidades de Dios, como el amor, la sabiduría, la justicia y el poder.",
              "Se llama a Jehová 31 veces el 'Todopoderoso', más que en todos los demás libros de la Biblia juntos.",
              "Explica por qué permite Dios el sufrimiento y responde otras grandes preguntas de la vida."
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
              "Leer el libro de Job es como subir a lo alto de una montaña.",
              "Al llegar a la cima podemos ver mejor todo el panorama que nos rodea.",
              "Podemos ver nuestros problemas desde una perspectiva más elevada: la de Jehová.",
              "Nos ayuda cuando estamos sufriendo."
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
              "Job vivió en la tierra de Uz durante el tiempo en que los israelitas eran esclavos en Egipto.",
              "A diferencia de algunos israelitas que habían empezado a adorar ídolos en Egipto, Job sí sirvió fielmente a Jehová.",
              "Dios dijo: 'No hay nadie como él en la tierra'.",
              "Job tenía muchísimas riquezas y era el hombre más importante y respetado de todos los orientales.",
              "Satanás estaba muy furioso al ver que este hombre tan prominente servía a Dios con integridad."
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
              "Satanás afirmó que Job le daría la espalda a Jehová si sufría.",
              "Con esa acusación, hizo surgir muchas preguntas importantes.",
              "Aunque Jehová amaba profundamente a Job, le permitió a Satanás intentar demostrar si tenía razón o no.",
              "Los ataques crueles de Satanás fracasaron, pues Job se mantuvo leal a Jehová.",
              "Con el tiempo, Jehová hizo que Job recuperara su salud, sus riquezas, su buena reputación y le dio 10 hijos más."
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
            image: "",
            imageCaption: "Los israelitas, que fueron esclavos en Egipto por muchos años, con el tiempo conocieron la historia de Job y seguramente sacaron lecciones prácticas.",
            answer: [
              "Los israelitas habían sufrido muchísimo en Egipto.",
              "Josué y Caleb pasaron su juventud siendo esclavos y después tuvieron que estar 40 años vagando por el desierto.",
              "La historia de Job les ayudó a entender quién es el principal causante del sufrimiento.",
              "Pudieron comprender mejor por qué permite Dios el sufrimiento.",
              "Aprendieron lo importantes que son para él la integridad y la fidelidad de los seres humanos."
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
            number: "7, 8",
            textEs: "¿Cómo puede ayudar el libro de Job a quienes sufren? Cuente una experiencia.",
            textLSM: "",
            paragraphs: [7, 8],
            answer: [
              "Muchas personas pierden su fe en Dios porque no entienden por qué les ocurren cosas malas a las personas buenas.",
              "Hazel, de Ruanda, pasó por el divorcio de sus padres, maltrato de su padrastro y fue violada en su adolescencia.",
              "El libro de Job nos enseña que el causante del sufrimiento no es Dios, sino Satanás.",
              "No debemos asumir que quienes sufren están cosechando lo que sembraron.",
              "La Biblia explica que a todos nos puede llegar 'algún mal momento y algún suceso imprevisto' (Ecl. 9)."
            ],
            flashcards: [
              {
                question: "¿Por qué muchas personas pierden su fe en Dios?",
                answer: "Porque no entienden por qué les ocurren cosas malas a las personas buenas."
              },
              {
                question: "¿Qué enseña el libro de Job sobre quién causa el sufrimiento?",
                answer: "Que el causante del sufrimiento no es Dios, sino Satanás."
              },
              {
                question: "¿Qué admitió Job en Job 6:3, 26?",
                answer: "Que en su empeño por defenderse había dicho cosas precipitadas."
              }
            ],
            biblicalCards: [
              {
                reference: "Eclesiastés 9:11",
                purpose: "A todos nos puede llegar algún suceso imprevisto",
                text: "He visto algo más debajo del sol: que no siempre ganan los veloces la carrera ni los fuertes la batalla, ni siempre los sabios tienen pan ni los inteligentes tienen riquezas ni los conocedores tienen favor, porque el tiempo y los sucesos imprevistos los alcanzan a todos."
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
              "Detrás de las palabras de Job estaban su estrecha relación con Jehová y su total confianza en él.",
              "Jehová le respondió desde una tempestad de viento.",
              "No le dio una explicación detallada de por qué estaba sufriendo.",
              "No le recriminó sus quejas y sus insistentes proclamaciones de inocencia.",
              "Lo corrigió igual que un buen padre corrige a su hijo, y así le llegó al corazón.",
              "Job reconoció humildemente lo limitado que era su conocimiento y se retractó de sus palabras irreflexivas."
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
              "Moisés tuvo que aguantar muchas dificultades, decepciones y momentos de desánimo como líder de Israel.",
              "A diferencia de los israelitas que se quejaron de Jehová, Moisés acudió a él para contarle lo que le preocupaba.",
              "Moisés tuvo que mostrar aguante al recibir disciplina de Jehová.",
              "En Cadés, Moisés 'habló precipitadamente con sus labios' y no le dio a Jehová la gloria que merecía.",
              "Jehová no le permitió entrar en la Tierra Prometida, pero Moisés fue humilde y aceptó la corrección.",
              "El relato de Job ayudó a las generaciones de israelitas a expresarle sus sentimientos a Jehová y a aceptar con humildad su disciplina."
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
                text: "Morirás en la montaña a la que subas y serás reunido con tu pueblo, así como tu hermano Aarón murió en el monte Hor. Porque ustedes dos me fueron infieles entre los israelitas, junto a las aguas de Meribá de Cadés."
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
              "Los cristianos también necesitamos aguante.",
              "Una hermana estaba predicando por teléfono y llamó a Mario, quien estaba escribiendo una nota de suicidio.",
              "Mario dijo: 'Creo en Dios, pero esta mañana sentí que me había abandonado'.",
              "Hablaron sobre los sufrimientos de Job, y Mario decidió leer todo ese libro de la Biblia.",
              "Mario aceptó un curso bíblico y le emocionó seguir aprendiendo sobre el Dios que le demostró su amor."
            ],
            flashcards: [
              {
                question: "¿Qué estaba haciendo Mario antes de recibir la llamada de predicación?",
                answer: "Estaba escribiendo una nota de suicidio porque sentía que Dios lo había abandonado."
              },
              {
                question: "¿Qué decidió hacer Mario después de hablar sobre los sufrimientos de Job?",
                answer: "Decidió leer todo el libro de Job en la Biblia y aceptó un curso bíblico."
              }
            ],
            biblicalCards: [
              {
                reference: "Hebreos 10:36",
                purpose: "Necesitamos aguante",
                text: "Porque necesitan tener aguante para que, después de haber hecho la voluntad de Dios, reciban lo que se les ha prometido."
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
              "La Biblia tiene muchísimo poder: ayuda a las personas y consuela a quienes sufren.",
              "El libro de Job nos asegura que 'Dios no actúa con maldad'.",
              "Nos enseña por qué permite el sufrimiento y cómo podemos aguantar.",
              "Nos ayuda a consolar a quienes están sufriendo."
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
            content: "¿HA TENIDO usted últimamente el gusto de leer el libro de Job? Aunque se escribió hace unos 3.500 años, se lo sigue considerando una joya de la literatura universal. Se ha destacado la sencillez de su estructura, la belleza de su estilo, la expresividad de su lenguaje y la genialidad de su escritor. Es cierto que Moisés fue quien escribió este magnífico libro, pero su verdadero autor es Jehová (2 Tim. 3:16)."
          },
          {
            number: 2,
            content: "El libro de Job es una parte clave de la Biblia. ¿Por qué? Una razón es que muestra claramente cuál es la importante cuestión a la que nos enfrentamos todos los seres inteligentes: la santificación del nombre de Jehová. Otra razón es que nos ayuda a conocer mejor las hermosas cualidades de Dios, como el amor, la sabiduría, la justicia y el poder. Por ejemplo, en este libro se llama a Jehová 31 veces el \"Todopoderoso\", más que en todos los demás libros de la Biblia juntos. Una tercera razón es que el libro de Job explica por qué permite Dios el sufrimiento y responde otras grandes preguntas de la vida."
          },
          {
            number: 3,
            content: "Podemos decir que leer el libro de Job es como subir a lo alto de una montaña. Al llegar a la cima podemos ver mejor todo el panorama que nos rodea. Igualmente, al estudiar este libro podemos ver nuestros problemas desde una perspectiva más elevada: la de Jehová. En este artículo analizaremos cómo nos ayuda el libro de Job cuando estamos sufriendo. Veremos cómo la historia de Job tal vez benefició a algunos israelitas en el pasado y cómo nos beneficia a nosotros hoy. Y también hablaremos de cómo usar este relato para ayudar a otros."
          },
          {
            number: 4,
            content: "Job vivió en la tierra de Uz —que posiblemente estaba en algún punto al este de la Tierra Prometida y en el norte de Arabia— durante el tiempo en que los israelitas eran esclavos en Egipto. A diferencia de algunos israelitas, que habían empezado a adorar ídolos en Egipto, Job sí sirvió fielmente a Jehová (Jos. 24:14; Ezeq. 20:8). De hecho, Dios dijo: \"No hay nadie como él en la tierra\" (Job 1:8). Job tenía muchísimas riquezas y era el hombre más importante y respetado de todos los orientales (Job 1:3). Seguro que Satanás estaba muy furioso al ver que este hombre tan prominente e influyente servía a Dios con integridad."
          },
          {
            number: 5,
            content: "Satanás afirmó que Job le daría la espalda a Jehová si sufría (Job 1:7-11; 2:2-5). Con esa acusación, hizo surgir muchas preguntas importantes. Por esa razón, aunque Jehová amaba profundamente a Job, le permitió a Satanás que intentara demostrar si tenía razón o no (Job 1:12-19; 2:6-8). Así que el Diablo hizo que Job perdiera sus rebaños, mató a sus 10 hijos y le envió una terrible enfermedad que le cubría todo el cuerpo. Sin embargo, estos ataques crueles fracasaron, pues Job se mantuvo leal a Jehová (lea Job 1:20-22; 2:9, 10). Con el tiempo, Jehová hizo que Job recuperara su salud, sus riquezas y su buena reputación, y le dio 10 hijos más. También lo bendijo con una larga vida. Job vivió otros 140 años, y así pudo ver a cuatro generaciones de sus descendientes (Job 42:10-13, 16)."
          },
          {
            number: 6,
            content: "Los israelitas habían sufrido muchísimo en Egipto. Pensemos, por ejemplo, en Josué y Caleb. Ellos pasaron su juventud siendo esclavos, y después tuvieron que estar 40 años vagando por el desierto por culpa de la desobediencia de otros. Si los israelitas conocieron la historia sobre las pruebas de Job y en qué acabó todo, sin duda los ayudó a ellos —y también a las siguientes generaciones de israelitas— a entender quién es el principal causante del sufrimiento. Además, pudieron comprender mejor por qué permite Dios el sufrimiento y lo importantes que son para él la integridad y la fidelidad de los seres humanos."
          },
          {
            number: 7,
            content: "Por desgracia, en nuestros días muchas personas pierden su fe en Dios porque no entienden por qué les ocurren cosas malas a las personas buenas. Veamos el caso de una mujer de Ruanda llamada Hazel. Cuando era joven, ella creía en Dios. Pero luego le pasaron cosas que le hicieron cambiar de opinión. Sus padres se divorciaron y su madre se casó con otro hombre, que trataba muy mal a Hazel. En su adolescencia, un hombre la violó. Cuando Hazel trató de buscar consuelo en su religión, no lo recibió. Un día le escribió una carta a Dios en la que le decía: \"Te he orado, me he esforzado por hacer el bien, pero tú solo me has pagado con sufrimientos. Así que he decidido dejarte y hacer lo que me parezca bien para ser feliz\". Nos duele muchísimo ver a personas como Hazel, a las que han hecho creer que Dios es el responsable del sufrimiento."
          },
          {
            number: 8,
            content: "Pero nosotros hemos aprendido gracias al libro de Job que el causante del sufrimiento no es Dios, sino Satanás. También hemos aprendido a no asumir que quienes sufren están cosechando lo que sembraron, pues la Biblia explica que a todos nos puede llegar \"algún mal momento y algún suceso imprevisto\" (Ecl. 9). Pero Job también admitió que en su empeño por defenderse había dicho cosas precipitadas (Job 6:3, 26). En el capítulo 31 leemos que quería que Jehová lo escuchara y lo declarara inocente (Job 31:35). Claro está, Job no tenía derecho a exigirle explicaciones a Dios sobre por qué estaba sufriendo."
          },
          {
            number: 11,
            content: "Ahora entendemos que detrás de las palabras que Job le dirigió a Jehová estaban su estrecha relación con él y su total confianza en que tomaría nota de su fidelidad. Cuando Jehová finalmente le respondió desde una tempestad de viento, no le dio una explicación detallada de por qué estaba sufriendo ni le recriminó sus quejas y sus insistentes proclamaciones de inocencia. Más bien, lo corrigió igual que un buen padre corrige a su hijo. Y así le llegó al corazón, pues Job reconoció humildemente lo limitado que era su conocimiento y se retractó de todas sus palabras irreflexivas (Job 31:6; 40:4, 5; 42:1-6)."
          },
          {
            number: 12,
            content: "Pensemos en Moisés. Como líder de la nación de Israel, tuvo que aguantar muchas dificultades, decepciones y momentos de desánimo. Pero, a diferencia de los israelitas, que muchas veces se quejaron de Jehová, Moisés acudió a él para contarle lo que le preocupaba (Éx. 16:6-8; Núm. 11:10-14; 14:1-4, 11; 16:41, 49; 17:5). Además, tuvo que mostrar aguante al recibir disciplina de parte de Jehová. Por ejemplo, mientras los israelitas estaban acampados en Cadés, probablemente cuando ya llevaban 40 años viajando por el desierto, Moisés \"habló precipitadamente con sus labios\" y no le dio a Jehová la gloria que merecía (Sal. 106:32, 33). Como resultado, Jehová no le permitió entrar en la Tierra Prometida (Deut. 32:50-52). Seguro que eso le dolió muchísimo a Moisés, pero fue humilde y aceptó la corrección. Es posible que el relato de Job también ayudara a las siguientes generaciones de israelitas a soportar las dificultades. Si meditaban en la historia de Job, podrían aprender a expresarle sus sentimientos a Jehová, a no creerse más justos que Dios y a aceptar con humildad su disciplina."
          },
          {
            number: 13,
            content: "Los cristianos también necesitamos aguante. Una hermana estaba predicando por teléfono, y la primera persona a la que llamó fue Mario. Le leyó un texto bíblico y le explicó que Dios no solo escucha nuestras oraciones, sino que también nos ofrece un futuro y una esperanza. Después le preguntó qué le parecía el versículo y Mario le contó que antes de recibir su llamada estaba escribiendo una nota de suicidio. Dijo: \"Creo en Dios, pero esta mañana sentí que me había abandonado\". Durante la segunda llamada hablaron sobre los sufrimientos de Job, y Mario decidió leer todo ese libro de la Biblia. Así que la hermana le envió un enlace a jw.org para que pudiera leerlo en línea. ¿Cuál fue el resultado? Mario aceptó un curso bíblico y le emocionó seguir aprendiendo sobre el Dios que le demostró su amor interesándose en él."
          },
          {
            number: 17,
            content: "Está claro que la Biblia tiene muchísimo poder: ayuda a las personas y consuela a quienes sufren (Heb. 4:12). Estamos profundamente agradecidos de que Jehová incluyera la historia de Job en su Palabra (Job 19:23, 24). El libro de Job nos asegura que \"Dios no actúa con maldad\" (lea Job 34:12). También nos enseña por qué permite el sufrimiento y cómo podemos aguantar. Además, nos ayuda a consolar a quienes están sufriendo. En el siguiente artículo sacaremos más lecciones del libro de Job y nos centraremos en cómo dar buenos consejos."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Cómo nos beneficia entender por qué permitió Dios que Job sufriera?",
            answer: [
              "Nos ayuda a entender quién es el principal causante del sufrimiento: Satanás, no Dios.",
              "Comprendemos mejor por qué permite Dios el sufrimiento.",
              "Aprendemos lo importantes que son para Jehová la integridad y la fidelidad.",
              "Podemos ver nuestros problemas desde una perspectiva más elevada."
            ]
          },
          {
            question: "¿Cómo puede el relato de Job ayudarnos a aguantar?",
            answer: [
              "Nos enseña a expresarle nuestros sentimientos a Jehová.",
              "Aprendemos a no creernos más justos que Dios.",
              "Nos ayuda a aceptar con humildad la disciplina de Jehová.",
              "Vemos que Jehová recompensa la fidelidad."
            ]
          },
          {
            question: "¿Cómo podemos usar el libro de Job para ayudar a otros?",
            answer: [
              "Podemos enseñarles que el causante del sufrimiento es Satanás, no Dios.",
              "Les ayudamos a ver que no deben asumir que quienes sufren están cosechando lo que sembraron.",
              "Los consolamos mostrándoles que Jehová ve y recompensa la fidelidad.",
              "Les mostramos que 'Dios no actúa con maldad' (Job 34:12)."
            ]
          }
        ],
        finalSong: "Canción 156: Si tienes fe"
      },
      // Artículo 49: "Cómo nos ayuda el libro de Job a dar buenos consejos" (9-15 Feb)
      {
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
            textEs: "¿En qué situación difícil están Elihú y los tres conocidos de Job?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: [
              "Job, un hombre muy rico y famoso, lo ha perdido todo.",
              "Tres conocidos suyos —Elifaz, Bildad y Zofar— deciden ir a consolarlo.",
              "Job tiene el cuerpo lleno de úlceras dolorosas y está sentado entre unas cenizas.",
              "Los tres hombres se quedan siete días enteros totalmente callados.",
              "Finalmente, Job rompe el silencio para maldecir el día de su nacimiento y desear la muerte."
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
              "Jehová hizo que Moisés pusiera por escrito lo que hicieron y dijeron los tres conocidos de Job y Elihú.",
              "Las cosas que dijo Elihú fueron inspiradas por Jehová.",
              "Algunas de las cosas que dijo Elifaz fueron inspiradas por un espíritu malvado.",
              "El libro de Job contiene algunos de los mejores consejos de la historia, pero también algunos de los peores.",
              "Primero analizaremos el mal ejemplo de los tres conocidos de Job y luego el buen ejemplo de Elihú."
            ],
            flashcards: [
              {
                question: "¿Quién inspiró las palabras de Elihú?",
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
              "Primero, sacaron conclusiones precipitadas dando por sentado que Dios estaba castigando a Job por algún pecado.",
              "Segundo, muchos de sus consejos fueron de poca ayuda, insensibles e incluso hirientes.",
              "Tercero, muchas veces le hablaron con aires de superioridad y en un tono prepotente, sarcástico y condenatorio.",
              "Lo que estos hombres buscaban no era consolar a Job sino demostrar que estaba equivocado."
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
              "Sus consejos hicieron sentir aplastado a Job.",
              "Job sintió la necesidad de defender su reputación y eso lo llevó a decir cosas fuera de lugar.",
              "Expresaron ideas que no reflejaban el punto de vista de Dios y trataron a Job sin compasión.",
              "Sin darse cuenta se convirtieron en herramientas en manos de Satanás."
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
              "Los jueces o ancianos tenían que escuchar con mucha atención antes de dar un consejo.",
              "Debían investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocían todos los hechos.",
              "Tenían que hablarle con bondad y no con dureza a quienes les pedían ayuda.",
              "Si les hacían sentir que eran una molestia, no se atreverían a abrirles su corazón."
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
              "Cualquier persona —fuera joven o mayor, hombre o mujer— podía darle consejos a alguien que lo necesitara.",
              "Podían aconsejar para ayudar a acercarse más a Jehová o para corregir algún aspecto de la conducta.",
              "Eso es lo que se espera de un amigo de verdad.",
              "Al pensar en el mal ejemplo de los tres conocidos de Job, podrían aprender lo que no debían decir ni hacer al aconsejar a otros."
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
              "Primero, antes de decir nada tenemos que asegurarnos de conocer todos los hechos, y no sacar conclusiones precipitadas.",
              "Segundo, tenemos que basarnos siempre en la verdad de la Palabra de Dios y no en nuestra propia opinión o experiencia.",
              "Tercero, jamás debemos usar un tono duro o crítico.",
              "Nunca debemos darle a entender a la persona que Jehová es irrazonable o que es imposible que la quiera."
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
            section: "LOS CONSEJOS DE ELIHÚ",
            answer: [
              "El debate entre Job y sus tres conocidos fue tan largo que ocupa 28 capítulos de la Biblia.",
              "Job seguía sintiéndose muy desanimado y necesitando consuelo y corrección.",
              "Jehová utilizó a Elihú para aconsejarlo.",
              "Elihú esperó para intervenir porque era joven y los otros eran hombres de edad.",
              "Dijo: 'La edad por sí misma no hace a alguien sabio'."
            ],
            flashcards: [
              {
                question: "¿Por qué esperó tanto Elihú para intervenir?",
                answer: "Porque era joven y los otros eran hombres de edad. Dijo: 'Yo soy joven y ustedes son hombres de edad. Así que me quedé callado por respeto'."
              },
              {
                question: "¿Qué dijo Elihú sobre la edad y la sabiduría?",
                answer: "'La edad por sí misma no hace a alguien sabio ni son solo los hombres de edad los que comprenden lo que es correcto' (Job 32:9)."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿Qué hizo Elihú antes de aconsejar a Job? (Job 33:6, 7).",
            textLSM: "",
            paragraphs: [10],
            readText: "LEE Job 33:6, 7",
            answer: [
              "Elihú se aseguró de calmar el ambiente y preparar el terreno.",
              "Controló sus propias emociones, aunque al principio estaba muy enojado.",
              "En ningún momento le habló en un tono duro o cruel, sino con bondad y cariño.",
              "Resumió las ideas principales de Job dejando claro que le había estado prestando mucha atención."
            ],
            flashcards: [
              {
                question: "¿Qué hizo Elihú para preparar el terreno antes de aconsejar?",
                answer: "Controló sus emociones, habló con bondad y cariño, y resumió las ideas de Job mostrando que le había prestado atención."
              },
              {
                question: "¿Qué le dijo Elihú a Job para calmarlo?",
                answer: "'Mira, para el Dios verdadero, yo soy igual que tú' (Job 33:6)."
              }
            ],
            biblicalCards: [
              {
                reference: "Job 33:6, 7",
                purpose: "Elihú se presenta con humildad",
                text: "Mira, para el Dios verdadero, yo soy igual que tú; yo también fui formado de arcilla. Mira, no tienes por qué tenerme miedo; no te aplastaré con mi mano."
              },
              {
                reference: "Job 32:2-5",
                purpose: "Elihú estaba enojado pero se controló",
                text: "Entonces Elihú hijo de Baraquel el buzita, de la familia de Ram, se encendió de ira. Se enojó muchísimo con Job porque este pensaba que tenía más razón que Dios. También se enojó con los tres compañeros de Job porque no habían podido rebatirlo."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Cómo aconsejó Elihú a Job? (Job 33:1).",
            textLSM: "",
            paragraphs: [11],
            readText: "LEE Job 33:1",
            answer: [
              "Lo hizo con muchísimo respeto y sin humillarlo.",
              "Se dirigió a él por su nombre, cosa que los otros tres no hicieron.",
              "Le ofreció la oportunidad de responderle.",
              "Le recordó que Jehová es muy sabio, poderoso, justo, leal y amoroso.",
              "Las buenas palabras de Elihú hicieron que Job estuviera dispuesto a recibir más corrección de Jehová."
            ],
            flashcards: [
              {
                question: "¿Qué hizo Elihú que los otros tres conocidos no hicieron?",
                answer: "Se dirigió a Job por su nombre y le ofreció la oportunidad de responderle."
              },
              {
                question: "¿Qué efecto tuvieron las palabras de Elihú en Job?",
                answer: "Lo prepararon para estar dispuesto a recibir más corrección directamente de Jehová."
              }
            ],
            biblicalCards: [
              {
                reference: "Job 33:1",
                purpose: "Elihú se dirige a Job con respeto",
                text: "Ahora, Job, oye mis palabras, por favor, y escucha todo lo que digo."
              },
              {
                reference: "Job 33:32",
                purpose: "Elihú invita a Job a responder",
                text: "Si tienes algo que decir, respóndeme. Habla, porque quiero que se te declare justo."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Cómo utilizó Jehová a los profetas para ayudar a su pueblo, y qué podrían aprender los israelitas del buen ejemplo de Elihú?",
            textLSM: "",
            paragraphs: [12],
            answer: [
              "Jehová nombró profetas para enseñar su propósito y corregir a los israelitas.",
              "Utilizó a la profetisa Débora y a Samuel para dar guía e instrucciones a la nación.",
              "Envió profetas para fortalecer espiritualmente al pueblo y corregir a quienes se desviaban.",
              "Los hombres y mujeres fieles podrían aprender lo que debían decir y hacer al corregir y aconsejar a otros."
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
            textEs: "¿Cómo podemos imitar el ejemplo de Elihú al animar a nuestros hermanos?",
            textLSM: "",
            paragraphs: [13],
            answer: [
              "Los cristianos damos a conocer la voluntad de Dios y basamos lo que enseñamos en la Biblia.",
              "Cuando ofrecemos consejos, usamos palabras que animen y edifiquen.",
              "Los ancianos deben recordar siempre la importancia de hablar de manera cariñosa y reconfortante.",
              "Incluso con quienes estén alterados o suelan decir cosas sin pensar al pasar por momentos difíciles."
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
            textEs: "¿Cómo puede un anciano imitar a Elihú?",
            textLSM: "",
            paragraphs: [14, 15],
            answer: [
              "Primero, tratará de comprender mejor la situación y los motivos de la tristeza.",
              "Para ello tendrá que hacer preguntas y escuchar con atención.",
              "Segundo, buscará cosas positivas por las que animar a la persona.",
              "Por último, una vez que se haya hecho un cuadro completo de lo que ocurre, podrá usar la Biblia para ayudar."
            ],
            flashcards: [
              {
                question: "¿Cuáles son los tres pasos que debe seguir un anciano para imitar a Elihú?",
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
              "Podemos dar buenos consejos si evitamos el mal ejemplo de los tres conocidos de Job.",
              "Debemos copiar el buen ejemplo de Elihú.",
              "La próxima vez que tengamos que dar un consejo, repasemos las lecciones de este relato.",
              "Si hace ya tiempo que no hemos leído el libro de Job, pongámonos la meta de volver a hacerlo."
            ],
            flashcards: [
              {
                question: "¿Qué dos ejemplos del libro de Job debemos recordar al dar consejos?",
                answer: "Evitar el mal ejemplo de Elifaz, Bildad y Zofar, y copiar el buen ejemplo de Elihú."
              }
            ]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "POR toda la región, la noticia corre como la pólvora: Job, un hombre muy rico y famoso, lo ha perdido todo. Cuando tres conocidos suyos —Elifaz, Bildad y Zofar— se enteran, deciden viajar a Uz para consolarlo. Pero lo que encuentran al llegar los deja conmocionados."
          },
          {
            number: 2,
            content: "Imaginemos la escena. Job se ha quedado prácticamente sin nada. Todos sus camellos, ovejas, vacas y burros han muerto o se los han robado. También han asesinado a casi todos sus sirvientes, y todos los hijos de Job han fallecido cuando la casa en la que estaban se derrumbó sobre ellos. Por si esto fuera poco, Job está muy enfermo y tiene el cuerpo lleno de úlceras dolorosas. A medida que se acercan, los tres hombres lo ven sentado entre unas cenizas y completamente desolado. ¿Cómo reaccionan? Se sientan al lado de este hombre que está sufriendo tanto y se quedan siete días enteros totalmente callados, sin decirle una sola palabra (Job 2:12, 13). En algún momento llega un hombre joven llamado Elihú y se sienta por allí cerca. Finalmente, Job rompe el silencio para maldecir el día de su nacimiento y desear la muerte (Job 3:1-3, 11)."
          },
          {
            number: 3,
            content: "Jehová hizo que Moisés pusiera por escrito lo que hicieron y dijeron tanto los tres conocidos de Job como Elihú. Las cosas que dijo Elihú fueron inspiradas por Jehová, pero es interesante que, al parecer, algunas de las cosas que dijo Elifaz fueron inspiradas por un espíritu malvado (Job 4:12-16; 33:24, 25). Esto explica por qué el libro de Job contiene algunos de los mejores consejos de la historia, pero también algunos de los peores."
          },
          {
            number: 4,
            content: "La Biblia dice que, cuando los tres conocidos de Job se enteraron de todas sus desgracias, \"decidieron ir juntos a compartir el dolor de Job y consolarlo\" (Job 2:11). Pero hay al menos tres motivos por los que no consiguieron ese objetivo. Primero, sacaron conclusiones precipitadas. Por ejemplo, dieron por sentado erróneamente que Dios estaba castigando a Job por algún pecado (Job 4:7; 11:14). Segundo, muchos de sus consejos fueron de poca ayuda, insensibles e incluso hirientes. Por ejemplo, los tres en algún momento le dijeron palabras que sonaban bien pero estaban vacías (Job 13:12). Bildad fue muy desconsiderado y le dijo que hablaba demasiado (Job 8:2). Y Zofar tuvo el descaro de llamarlo disimuladamente \"cabeza hueca\" (Job 11:12). Tercero, aunque tal vez no le gritaron, muchas veces le hablaron con aires de superioridad y en un tono prepotente, sarcástico y condenatorio (Job 15:7-11). En el fondo, lo que estos hombres buscaban no era consolar a Job ni fortalecer su fe, sino demostrar que estaba equivocado."
          },
          {
            number: 5,
            content: "No es de extrañar que los consejos que estos tres hombres le dieron a Job no tuvieran buen resultado. De hecho, lo hicieron sentir aplastado (Job 19:2). También es comprensible que él sintiera la necesidad de defender su reputación y que eso lo llevara a perder el equilibrio y decir cosas fuera de lugar (Job 6:3, 26). Elifaz, Bildad y Zofar expresaron ideas que no reflejaban el punto de vista de Dios y trataron a Job sin compasión. Al hacer eso, sin darse cuenta se convirtieron en herramientas en manos de Satanás (Job 2:4, 6)."
          },
          {
            number: 6,
            content: "Cuando se formó la nación de Israel, Jehová eligió a ciertos hombres experimentados para que juzgaran a la nación de acuerdo con sus justas normas (Deut. 1:15-18; 27:1). Estos jueces o ancianos tenían que escuchar con mucha atención antes de dar un consejo o dictar una sentencia (2 Crón. 19:6). También debían investigar bien los asuntos y hacer preguntas sin dar por sentado que ya conocían todos los hechos (Deut. 19:18). Cuando alguien venía a pedirles ayuda, tenían que hablarle con bondad y no con dureza. ¿Por qué? Porque, si le hacían sentir que era una molestia, no se atrevería a abrirles su corazón (Éx. 22:22-24)."
          },
          {
            number: 7,
            content: "Claro está, aquellos ancianos no eran los únicos que podían dar consejos en Israel. En realidad, cualquier persona —fuera joven o mayor, hombre o mujer— podía darle consejos a alguien que lo necesitara para acercarse más a Jehová o para corregir algún aspecto de su conducta (Sal. 141:5). Eso es lo que se espera de un amigo de verdad (lea Proverbios 27:9). Al pensar en el mal ejemplo de los tres conocidos de Job, los israelitas podrían aprender lo que no debían decir ni hacer al aconsejar a otros."
          },
          {
            number: 8,
            content: "Como es natural, cuando nuestros hermanos pasan por situaciones difíciles, queremos ayudarlos. Ahora bien, no debemos caer en los mismos errores que los tres conocidos de Job. Primero, antes de decir nada tenemos que asegurarnos de conocer todos los hechos, y no sacar conclusiones precipitadas. Segundo, tenemos que basarnos siempre en la verdad de la Palabra de Dios y no en nuestra propia opinión o experiencia, como hizo Elifaz muchas veces (Job 4:8; 5:3, 27). Y, tercero, jamás debemos usar un tono duro o crítico. Recordemos que Elifaz y compañía dijeron algunas cosas que sí eran ciertas; de hecho, el apóstol Pablo citó por inspiración algunas de sus palabras (compare Job 5:13 con 1 Corintios 3:19). No obstante, la mayor parte de lo que afirmaron sobre Dios era mentira y le hicieron daño a Job, así que Jehová dijo que no habían dicho la verdad (Job 42:7, 8). Al dar un consejo, nunca debemos darle a entender a la persona que Jehová es irrazonable o que es imposible que la quiera."
          },
          {
            number: 9,
            content: "El debate entre Job y sus tres supuestos amigos fue tan largo que sus palabras ocupan 28 capítulos de la Biblia. Y los ánimos debían de estar bastante caldeados, pues la mayor parte del tiempo se dejaron llevar por el enojo y la frustración. Con razón Job seguía sintiéndose muy desanimado y necesitando consuelo y corrección. ¿Qué hizo Jehová para ayudarlo? Utilizó a Elihú para aconsejarlo. Pero ¿por qué esperó tanto Elihú para intervenir? Él mismo explicó: \"Yo soy joven y ustedes son hombres de edad. Así que me quedé callado por respeto\" (Job 32:6, 7). Era consciente de que, por lo general, los mayores cuentan con la sabiduría que viene con los años y la experiencia. Pero, después de escuchar con paciencia a Job y sus conocidos, Elihú decidió que no podía seguir callado. Por eso dijo: \"La edad por sí misma no hace a alguien sabio ni son solo los hombres de edad los que comprenden lo que es correcto\" (Job 32:9)."
          },
          {
            number: 10,
            content: "Antes de aconsejar a Job, Elihú se aseguró de calmar el ambiente y preparar el terreno. ¿Cómo? En primer lugar, controlando sus propias emociones. A fin de cuentas, la Biblia dice que al principio estaba muy enojado (Job 32:2-5). Pero luego en ningún momento le habló en un tono duro o cruel, sino al contrario, con bondad y cariño. Por ejemplo, le dijo: \"Mira, para el Dios verdadero, yo soy igual que tú\" (lea Job 33:6, 7). Entonces resumió las ideas principales de seis discursos de Job y así dejó claro que le había estado prestando mucha atención (Job 32:11; 33:8-11). Y volvió a hacer lo mismo cuando más tarde le dio otros consejos (Job 34:5, 6, 9; 35:1-4)."
          },
          {
            number: 11,
            content: "Cuando Elihú empezó a aconsejar a Job, lo hizo con muchísimo respeto y sin humillarlo. Por ejemplo, se dirigió a él por su nombre, cosa que los otros tres por lo visto no hicieron (lea Job 33:1). Además, con mucha bondad le ofreció la oportunidad de responderle, pues seguramente recordaba que él mismo había querido intervenir en varias ocasiones mientras Job y sus conocidos hablaban (Job 32:4; 33:32). También le advirtió que tuviera cuidado con algunos de sus argumentos y le recordó que Jehová es muy sabio, poderoso, justo, leal y amoroso (Job 36:18, 21-26; 37:23, 24). Sin duda, las buenas palabras de Elihú hicieron que Job estuviera dispuesto a recibir más corrección, ahora directamente de Jehová (Job 38:1-3)."
          },
          {
            number: 12,
            content: "A lo largo de la historia de Israel, Jehová muchas veces nombró profetas para enseñar su propósito y corregir a los israelitas. Por ejemplo, durante el periodo de los Jueces, utilizó a la profetisa Débora y a Samuel —incluso siendo muy joven— para que le dieran guía e instrucciones a la nación (Juec. 4:4-7; 5:7; 1 Sam. 3:19, 20). Y, durante el periodo de los reyes, envió a un profeta tras otro para fortalecer espiritualmente al pueblo y corregir a quienes se desviaban de la adoración pura (2 Sam. 12:1-4; Hech. 3:24). Al pensar en el buen ejemplo de Elihú, los hombres y mujeres fieles podrían aprender lo que debían decir y hacer al corregir y aconsejar a otros."
          },
          {
            number: 13,
            content: "Al igual que Elihú y los profetas de Israel, los cristianos damos a conocer la voluntad de Dios y basamos lo que enseñamos en la Biblia. Además, cuando ofrecemos consejos a nuestros hermanos, usamos palabras que los animen y edifiquen (1 Cor. 14:3). Los ancianos en especial tienen que recordar siempre la importancia de hablar de manera cariñosa y reconfortante a todos los hermanos y hermanas, incluso a quienes estén alterados o suelan decir cosas sin pensar al pasar por momentos difíciles (Job 6:3; 1 Tes. 5:14)."
          },
          {
            number: 14,
            content: "Imaginemos esta situación. En una congregación, un anciano se entera de que cierta hermana está deprimida, así que decide visitarla junto con otro hermano para animarla. Durante la visita, la hermana expresa algunas emociones negativas. Cuenta que, aunque asiste a las reuniones y sale a predicar, no se siente feliz. ¿Cómo debe reaccionar un anciano en una situación como esta?"
          },
          {
            number: 15,
            content: "En primer lugar, tratará de comprender mejor la situación y los motivos de su tristeza. Para ello tendrá que hacerle preguntas y escuchar con atención. ¿Será que la hermana piensa que no merece el amor de Dios? ¿Se siente tal vez aplastada por \"las preocupaciones de la vida\"? (Luc. 21:34). En segundo lugar, el anciano buscará cosas positivas por las que animarla. Por ejemplo, puede felicitarla porque está yendo a las reuniones y a predicar a pesar de estar deprimida. Y, por último, una vez que se haya hecho un cuadro completo de lo que le ocurre a la hermana y de por qué se siente desanimada, podrá usar la Biblia para ayudarla a convencerse de que Jehová la quiere (Gál. 2:20)."
          },
          {
            number: 16,
            content: "¡Cuántas cosas hemos aprendido al analizar el libro de Job! En el artículo anterior vimos que no solo nos enseña por qué permite Dios el sufrimiento, sino también cómo podemos aguantarlo. Y en este hemos visto que podemos dar buenos consejos si evitamos el mal ejemplo de los tres conocidos de Job y copiamos el buen ejemplo de Elihú. La próxima vez que tengamos que darle un consejo a alguien, ¿qué tal si repasamos las lecciones que nos enseña este relato? Y, si hace ya tiempo que no hemos tenido el gusto de leerlo, pongámonos la meta de volver a hacerlo. Seguro que comprobaremos que el maravilloso libro de Job sigue siendo tan valioso hoy como cuando se escribió."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Qué cosas que hicieron Elifaz, Bildad y Zofar debemos evitar al dar un consejo?",
            answer: [
              "Sacar conclusiones precipitadas sin conocer todos los hechos.",
              "Dar consejos insensibles, hirientes o vacíos.",
              "Hablar con aires de superioridad o en tono condenatorio.",
              "Buscar demostrar que la persona está equivocada en vez de consolarla."
            ]
          },
          {
            question: "¿Cómo podemos imitar a Elihú al dar un consejo?",
            answer: [
              "Controlar nuestras emociones antes de hablar.",
              "Escuchar con atención para entender la situación.",
              "Hablar con bondad, cariño y respeto.",
              "Usar la Biblia para ayudar a la persona.",
              "Ofrecer la oportunidad de responder."
            ]
          },
          {
            question: "¿Qué debemos hacer para seguir aprendiendo del libro de Job?",
            answer: [
              "Evitar el mal ejemplo de los tres conocidos de Job.",
              "Copiar el buen ejemplo de Elihú.",
              "Repasar las lecciones del libro antes de dar consejos.",
              "Ponernos la meta de leer el libro de Job si hace tiempo que no lo hemos leído."
            ]
          }
        ],
        finalSong: "Canción 125: Felices los misericordiosos"
      },
      // Artículo 50: "Imitemos la humildad de Jehová" (16-22 Feb)
      {
        metadata: {
          articleNumber: 50,
          week: "16-22 Feb",
          month: "Diciembre",
          year: 2025
        },
        song: "Canción 48: Caminemos diariamente con Jehová",
        title: "Imitemos la humildad de Jehová",
        biblicalText: "\"Imiten a Dios como hijos amados\" (EFES. 5:1).",
        theme: "Cuatro maneras prácticas de imitar la humildad de Jehová.",
        questions: [
          {
            number: "1",
            textEs: "¿Por qué es tan impresionante pensar en que Jehová es humilde?",
            textLSM: "",
            paragraphs: [1],
            answer: [
              "Las personas que tienen poder en el mundo no suelen ser humildes.",
              "Sin embargo, Jehová, quien es el Todopoderoso, sí lo es.",
              "La humildad impregna toda su personalidad; no hay ni el más mínimo rastro de orgullo en él.",
              "Analizaremos cuatro aspectos de la personalidad de Jehová donde se ve reflejada la humildad."
            ],
            flashcards: [
              {
                question: "¿Qué distingue a Jehová de las personas poderosas del mundo?",
                answer: "Aunque es el Todopoderoso, Jehová es humilde y no hay ni el más mínimo rastro de orgullo en él."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 113:5-8",
                purpose: "Jehová es humilde a pesar de su grandeza",
                text: "¿Quién es como Jehová nuestro Dios, que se sienta en las alturas, que se humilla para mirar al cielo y a la tierra? Levanta al de condición humilde del polvo."
              }
            ]
          },
          {
            number: "2",
            textEs: "¿Qué nos enseña Salmo 62:8 sobre Jehová? (Vea también la imagen).",
            textLSM: "",
            paragraphs: [2],
            section: "JEHOVÁ ES ACCESIBLE",
            readText: "LEE Salmo 62:8",
            image: "",
            imageCaption: "Un padre imita la humildad de Jehová y escucha a su hijo sin enojarse porque rompió un jarrón mientras jugaba.",
            answer: [
              "Las personas orgullosas no suelen ser accesibles.",
              "Jehová nos invita a acercarnos a él y a contarle todo lo que sentimos y pensamos.",
              "Así como un padre cariñoso escucha con atención las preocupaciones de sus hijos, nuestro Padre celestial escucha nuestras oraciones.",
              "Hizo que muchas oraciones quedaran registradas en la Biblia, lo que demuestra lo fácil que es hablar con él."
            ],
            flashcards: [
              {
                question: "¿Por qué la humildad de Jehová lo hace accesible?",
                answer: "Nos invita a acercarnos a él y a contarle todo lo que sentimos y pensamos, escuchando nuestras oraciones con atención."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 62:8",
                purpose: "Podemos confiar en Jehová",
                text: "Confíen en él en todo momento, oh pueblo. Derramen su corazón delante de él. Dios es un refugio para nosotros."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Por qué está usted seguro de que Jehová quiere que le ore siempre?",
            textLSM: "",
            paragraphs: [3],
            answer: [
              "Podemos orarle a Jehová incluso si sentimos que no merecemos su amor.",
              "La parábola del hijo pródigo muestra un padre compasivo que corrió a abrazar a su hijo que regresó.",
              "Jehová es como ese padre: cuando escucha la oración de alguien aplastado, su humildad lo motiva a prestarle toda su atención.",
              "Su compasión lo impulsa a 'correr' hacia él para consolarlo y confirmarle su amor."
            ],
            flashcards: [
              {
                question: "¿Cómo ilustra la parábola del hijo pródigo la accesibilidad de Jehová?",
                answer: "El padre corrió a abrazar a su hijo que regresó, así como Jehová está dispuesto a escuchar a quienes se sienten indignos."
              }
            ],
            biblicalCards: [
              {
                reference: "Lucas 15:17-20",
                purpose: "El padre del hijo pródigo",
                text: "Cuando todavía estaba lejos, su padre lo vio y se compadeció de él. Corrió a su encuentro, lo abrazó y lo besó con ternura."
              },
              {
                reference: "Isaías 57:15",
                purpose: "Jehová consuela a los humildes",
                text: "El Alto y Elevado, el que habita la eternidad, cuyo nombre es santo, dice: 'Habito en las alturas, en un lugar santo, pero también con el aplastado y humilde de espíritu'."
              }
            ]
          },
          {
            number: "4",
            textEs: "¿Cómo demostró Jesús que era accesible?",
            textLSM: "",
            paragraphs: [4],
            answer: [
              "Al igual que Jehová, Jesús es humilde.",
              "Las personas se sentían con la confianza de acercarse a él y hacerle preguntas con total libertad.",
              "Si cometían un error, no temblaban de miedo, porque sabían que Jesús era bueno, misericordioso y paciente.",
              "Sus seguidores llegaron a conocer mejor a Jehová gracias a que Jesús lo imitó a la perfección."
            ],
            flashcards: [
              {
                question: "¿Por qué las personas no temían acercarse a Jesús?",
                answer: "Porque sabían que era bueno, misericordioso y paciente, y no temblaban de miedo si cometían un error."
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 14:9",
                purpose: "Jesús reflejó a su Padre",
                text: "Jesús le dijo: 'El que me ha visto a mí ha visto también al Padre'."
              },
              {
                reference: "Mateo 17:24-27",
                purpose: "Jesús fue paciente con sus discípulos",
                text: "Jesús fue paciente al explicar sobre el impuesto del templo y proveyó la solución de manera bondadosa."
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Por qué nos ayuda la humildad a ser más accesibles?",
            textLSM: "",
            paragraphs: [5],
            answer: [
              "La humildad nos ayuda a evitar defectos que alejan a los demás: envidia, orgullo y rencor.",
              "Nos ayuda a tener cualidades que atraen: bondad, paciencia y perdón.",
              "Los ancianos deben esforzarse por ser accesibles asistiendo presencialmente a las reuniones.",
              "Deben salir a predicar con los hermanos para que los conozcan mejor y se sientan en confianza."
            ],
            flashcards: [
              {
                question: "¿Qué defectos evita la humildad y qué cualidades desarrolla?",
                answer: "Evita la envidia, el orgullo y el rencor. Desarrolla la bondad, la paciencia y el perdón."
              }
            ],
            biblicalCards: [
              {
                reference: "Colosenses 3:12-14",
                purpose: "Cualidades que debemos desarrollar",
                text: "Vístanse de tierna compasión, bondad, humildad, apacibilidad y paciencia. Sigan soportándose unos a otros y perdonándose."
              }
            ]
          },
          {
            number: "6, 7",
            textEs: "Mencione alguna ocasión en la que Jehová concedió las peticiones de sus siervos.",
            textLSM: "",
            paragraphs: [6, 7],
            section: "JEHOVÁ ES RAZONABLE",
            answer: [
              "Jehová curó a Míriam de la lepra cuando Moisés le rogó por ella.",
              "No se aferró a su decisión de castigarla porque es humilde.",
              "Cuando el rey Ezequías le rogó con lágrimas que lo curara, Jehová le añadió 15 años de vida.",
              "La humildad de Jehová lo impulsa a ser flexible y compasivo."
            ],
            flashcards: [
              {
                question: "¿Cómo demostró Jehová que es razonable en el caso de Míriam?",
                answer: "Aunque la castigó con lepra por hablar contra Moisés, la curó cuando Moisés le rogó por ella."
              },
              {
                question: "¿Cuántos años añadió Jehová a la vida del rey Ezequías?",
                answer: "15 años, después de que Ezequías le rogó con lágrimas que lo curara."
              }
            ],
            biblicalCards: [
              {
                reference: "Números 12:1-15",
                purpose: "Jehová curó a Míriam",
                text: "Míriam y Aarón empezaron a hablar contra Moisés. Jehová se enojó y la castigó con lepra. Moisés rogó a Jehová, y él la curó."
              },
              {
                reference: "2 Reyes 20:1, 5, 6",
                purpose: "Jehová añadió años a Ezequías",
                text: "Jehová dijo: 'He oído tu oración y he visto tus lágrimas. Te voy a curar y voy a añadir 15 años a tu vida'."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Qué ejemplos demuestran que Jesús es razonable? (Marcos 3:1-6).",
            textLSM: "",
            paragraphs: [8],
            readText: "LEE Marcos 3:1-6",
            answer: [
              "Jesús fue razonable y buscó la manera de ayudar a la gente siempre que fue posible.",
              "Sanó a las personas en sábado aunque los líderes religiosos se opusieron.",
              "Sigue demostrando esta cualidad como cabeza de la congregación cristiana.",
              "Cuando alguien comete un pecado grave, Jesús es paciente y le da muchas oportunidades de cambiar."
            ],
            flashcards: [
              {
                question: "¿Cómo demostró Jesús que era razonable respecto al sábado?",
                answer: "Sanó a las personas en sábado aunque los líderes religiosos se opusieron, porque buscaba la manera de ayudar."
              }
            ],
            biblicalCards: [
              {
                reference: "Marcos 3:1-6",
                purpose: "Jesús sanó en sábado",
                text: "Jesús sanó a un hombre con la mano seca en sábado. Les preguntó a los fariseos: '¿Es legal en sábado hacer algo bueno o hacer algo malo, salvar una vida o matarla?'."
              },
              {
                reference: "Apocalipsis 2:2-5",
                purpose: "Jesús da oportunidades de arrepentirse",
                text: "Jesús le dijo a la congregación de Éfeso: 'Recuerda de dónde has caído y arrepiéntete'. Da oportunidades de cambiar."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿Cómo podemos imitar a Jehová y ser razonables? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [9],
            image: "",
            imageCaption: "Los padres son razonables con sus hijos al no exigirles más de lo que pueden dar en la predicación.",
            answer: [
              "Los padres razonables no son permisivos, pero tampoco exigen a sus hijos más de lo que pueden dar.",
              "Jacob fue un buen ejemplo al ser considerado con sus hijos.",
              "Los padres humildes evitan hacer comparaciones injustas entre sus hijos.",
              "Los ancianos apoyan la decisión de la mayoría siempre que no vaya en contra de los principios bíblicos."
            ],
            flashcards: [
              {
                question: "¿Cómo pueden los padres ser razonables con sus hijos?",
                answer: "No siendo permisivos pero tampoco exigiendo más de lo que pueden dar, y evitando comparaciones injustas."
              }
            ],
            biblicalCards: [
              {
                reference: "Génesis 33:12-14",
                purpose: "Jacob fue considerado con sus hijos",
                text: "Jacob dijo: 'Mi señor sabe que los niños son delicados. No debo apresurarlos, sino que iré despacio'."
              },
              {
                reference: "Santiago 3:17",
                purpose: "La sabiduría de arriba es razonable",
                text: "La sabiduría de arriba es primero pura, luego pacífica, razonable, dispuesta a obedecer, llena de misericordia."
              },
              {
                reference: "Filipenses 4:5",
                purpose: "Sean personas razonables",
                text: "Que todos sepan que ustedes son personas razonables."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿De qué maneras ha demostrado Jehová que es paciente?",
            textLSM: "",
            paragraphs: [10],
            section: "JEHOVÁ ES PACIENTE",
            answer: [
              "Las personas orgullosas son impacientes; no les gusta que las hagan esperar.",
              "En los días de Noé, Jehová dijo que esperaría 120 años para destruir a los malvados.",
              "Jehová escuchó con paciencia a Abrahán mientras este le hacía preguntas sobre Sodoma y Gomorra.",
              "No hay nadie en el universo tan paciente como Jehová."
            ],
            flashcards: [
              {
                question: "¿Cuántos años esperó Jehová antes de destruir a los malvados en los días de Noé?",
                answer: "120 años, tiempo suficiente para que Noé criara a sus hijos y construyera el arca."
              },
              {
                question: "¿Cómo demostró Jehová paciencia con Abrahán?",
                answer: "Escuchó con paciencia sus preguntas sobre la decisión de destruir Sodoma y Gomorra sin decirle '¿Quién te crees para cuestionarme?'."
              }
            ],
            biblicalCards: [
              {
                reference: "Génesis 6:3",
                purpose: "Jehová esperó 120 años",
                text: "Entonces Jehová dijo: 'Mi espíritu no tolerará indefinidamente al hombre. Sus días serán 120 años'."
              },
              {
                reference: "Génesis 18:20-33",
                purpose: "Jehová escuchó a Abrahán",
                text: "Abrahán siguió preguntando a Jehová sobre Sodoma, y Jehová respondió pacientemente a cada una de sus preguntas."
              }
            ]
          },
          {
            number: "11",
            textEs: "De acuerdo con 2 Pedro 3:9, ¿por qué está siendo tan paciente Jehová hoy en día?",
            textLSM: "",
            paragraphs: [11],
            readText: "LEE 2 Pedro 3:9",
            answer: [
              "Jehová está esperando a que llegue el momento fijado para destruir este sistema malvado.",
              "'No desea que ninguno sea destruido, sino que todos lleguen a arrepentirse'.",
              "Millones de personas han llegado a conocerlo gracias a su paciencia.",
              "Sin embargo, la paciencia de Dios tiene límites. No dejará que la maldad dure para siempre."
            ],
            flashcards: [
              {
                question: "Según 2 Pedro 3:9, ¿por qué es paciente Jehová?",
                answer: "Porque no desea que ninguno sea destruido, sino que todos lleguen a arrepentirse."
              },
              {
                question: "¿Tiene límites la paciencia de Jehová?",
                answer: "Sí, no dejará que la maldad dure para siempre (Habacuc 2:3)."
              }
            ],
            biblicalCards: [
              {
                reference: "2 Pedro 3:9",
                purpose: "La paciencia de Jehová",
                text: "Jehová no es lento en cuanto a su promesa, sino que tiene paciencia con ustedes porque no desea que ninguno sea destruido, sino que todos lleguen a arrepentirse."
              },
              {
                reference: "Habacuc 2:3",
                purpose: "La paciencia tiene límites",
                text: "Porque la visión es todavía para el tiempo señalado. No mentirá. Aunque parezca tardar, espérala; porque sin falta vendrá. No se retrasará."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Cómo imita Jesús la paciencia de Jehová?",
            textLSM: "",
            paragraphs: [12],
            answer: [
              "Durante miles de años, Jesús ha imitado la paciencia de Jehová.",
              "Ha visto cómo Satanás ha esparcido mentiras terribles sobre Dios y los seres humanos fieles.",
              "Jesús tiene muchas ganas de 'deshacer las obras del Diablo'.",
              "Es humilde y reconoce que le corresponde a Jehová decidir cuándo es el mejor momento de actuar."
            ],
            flashcards: [
              {
                question: "¿Qué ayuda a Jesús a esperar con paciencia?",
                answer: "Es humilde y reconoce que le corresponde a Jehová decidir cuándo es el mejor momento de actuar."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Juan 3:8",
                purpose: "Jesús deshará las obras del Diablo",
                text: "El que practica el pecado se origina del Diablo, porque el Diablo ha estado pecando desde el principio. Para esto se manifestó el Hijo de Dios: para deshacer las obras del Diablo."
              },
              {
                reference: "Hechos 1:7",
                purpose: "Le corresponde a Jehová decidir",
                text: "Él les dijo: 'No les corresponde a ustedes conocer los tiempos ni las épocas que el Padre ha colocado en su propia jurisdicción'."
              }
            ]
          },
          {
            number: "13",
            textEs: "¿En qué situación demostró Jesús que era paciente con sus apóstoles, y por qué?",
            textLSM: "",
            paragraphs: [13],
            answer: [
              "Jesús fue paciente al ver a sus apóstoles discutir vez tras vez sobre quién era el más importante.",
              "No se desesperaba ni se frustraba.",
              "Estaba seguro de que con el tiempo cambiarían.",
              "Agradecemos que nuestro Rey sea tan humilde y paciente con nosotros."
            ],
            flashcards: [
              {
                question: "¿Cómo demostró Jesús paciencia con sus apóstoles?",
                answer: "No se desesperaba al verlos discutir sobre quién era el más importante, porque estaba seguro de que con el tiempo cambiarían."
              }
            ],
            biblicalCards: [
              {
                reference: "Lucas 22:24-27",
                purpose: "Los apóstoles discutían sobre quién era mayor",
                text: "Surgió una acalorada discusión entre ellos sobre quién de ellos era el mayor. Jesús pacientemente les enseñó sobre el servicio humilde."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿Qué nos ayudará a ser más pacientes?",
            textLSM: "",
            paragraphs: [14],
            answer: [
              "Para parecernos más a Jehová debemos desarrollar 'la mente de Cristo'.",
              "Hay que leer los Evangelios y meditar en cómo las acciones de Jesús reflejaban su manera de pensar.",
              "Debemos pedirle a Jehová que nos ayude a ser humildes como su Hijo.",
              "A medida que aprendamos a pensar como Cristo, seremos más pacientes con nosotros mismos y con los demás."
            ],
            flashcards: [
              {
                question: "¿Qué nos ayudará a ser más pacientes?",
                answer: "Desarrollar 'la mente de Cristo' leyendo los Evangelios, meditando en sus acciones y pidiéndole a Jehová que nos ayude a ser humildes."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Corintios 2:16",
                purpose: "Tener la mente de Cristo",
                text: "Porque '¿quién ha llegado a conocer la mente de Jehová para que lo instruya?'. Sin embargo, nosotros sí tenemos la mente de Cristo."
              },
              {
                reference: "Mateo 18:26-30, 35",
                purpose: "Debemos ser pacientes y perdonadores",
                text: "Jesús enseñó la parábola del esclavo que no quiso perdonar, mostrando que debemos ser pacientes con los demás como Dios lo es con nosotros."
              }
            ]
          },
          {
            number: "15",
            textEs: "¿Cómo ha cumplido Jehová las palabras de Salmo 138:6?",
            textLSM: "",
            paragraphs: [15],
            section: "JEHOVÁ DIGNIFICA A LOS HUMILDES",
            readText: "LEE Salmo 138:6",
            answer: [
              "Jehová les presta una atención especial a quienes suelen pasar desapercibidos.",
              "La nodriza Débora sirvió fielmente a Isaac y Jacob durante unos 125 años.",
              "Jehová escogió a David, un simple pastorcito, para que llegara a ser rey de Israel.",
              "Dio a unos humildes pastores el honor de ser los primeros en enterarse del nacimiento del Mesías."
            ],
            flashcards: [
              {
                question: "¿Qué ejemplos bíblicos muestran que Jehová dignifica a los humildes?",
                answer: "La nodriza Débora, David el pastorcito, los pastores en el nacimiento de Jesús, y Simeón y Ana en el templo."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 138:6",
                purpose: "Jehová se fija en el humilde",
                text: "Aunque Jehová es elevado, se fija en el humilde; pero al arrogante lo conoce desde lejos."
              },
              {
                reference: "Lucas 2:8-11",
                purpose: "Los pastores fueron los primeros en saber del Mesías",
                text: "Había unos pastores que vivían a la intemperie, cuidando sus rebaños de noche. Un ángel de Jehová se les apareció y les dijo que el Cristo había nacido."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Cómo imitó Jesús a su Padre?",
            textLSM: "",
            paragraphs: [16],
            answer: [
              "Jesús dignificó a los humildes enseñándoles a personas 'comunes y con poca educación'.",
              "Sanó a los enfermos con cariño, devolviéndoles no solo la salud sino también la dignidad.",
              "La noche antes de morir les lavó los pies a sus apóstoles, una tarea de sirvientes.",
              "Dio a sus seguidores el honor de llevar a cabo la labor más importante: ayudar a otros a conseguir la vida eterna."
            ],
            flashcards: [
              {
                question: "¿Cómo dignificó Jesús a los humildes?",
                answer: "Les enseñó a personas comunes, sanó enfermos con cariño, lavó los pies de sus apóstoles y les dio el honor de predicar."
              }
            ],
            biblicalCards: [
              {
                reference: "Hechos 4:13",
                purpose: "Jesús enseñó a personas comunes",
                text: "Cuando vieron la valentía de Pedro y Juan, y descubrieron que eran hombres del común y sin educación, se quedaron maravillados."
              },
              {
                reference: "Juan 13:5",
                purpose: "Jesús lavó los pies de sus discípulos",
                text: "Después echó agua en una palangana y empezó a lavarles los pies a los discípulos y a secárselos con la toalla."
              }
            ]
          },
          {
            number: "17",
            textEs: "¿Cómo podemos imitar a Jehová? (Vea también la imagen).",
            textLSM: "",
            paragraphs: [17],
            image: "",
            imageCaption: "Imitamos la humildad de Jehová cuando les predicamos a toda clase de personas.",
            answer: [
              "Seguimos su ejemplo al predicar a todas las personas sin importar su cultura, color de piel o nivel de educación.",
              "Consideramos a los hermanos como superiores a nosotros independientemente de sus habilidades o responsabilidades.",
              "Jehová se siente muy feliz de ver que somos humildes y tomamos la iniciativa de honrarnos unos a otros."
            ],
            flashcards: [
              {
                question: "¿Cómo podemos imitar la humildad de Jehová al predicar?",
                answer: "Predicando a todas las personas sin importar su cultura, color de piel o nivel de educación."
              }
            ],
            biblicalCards: [
              {
                reference: "Filipenses 2:3",
                purpose: "Considerar a otros como superiores",
                text: "No hagan nada por espíritu de rivalidad ni por presunción, sino que con humildad consideren a los demás como superiores a ustedes."
              },
              {
                reference: "Romanos 12:10",
                purpose: "Tomemos la iniciativa de honrar a otros",
                text: "En el amor fraternal, sean cariñosos unos con otros. En cuanto a honrarse unos a otros, tomen la iniciativa."
              }
            ]
          },
          {
            number: "18",
            textEs: "¿Por qué quiere usted imitar la humildad de Jehová?",
            textLSM: "",
            paragraphs: [18],
            answer: [
              "Al imitar la humildad de Jehová, nos convertiremos en personas más accesibles, razonables y pacientes.",
              "Trataremos a los demás de una manera que los honre, tal como hace Jehová.",
              "Cada esfuerzo que hacemos por copiar su humildad nos hace más valiosos a sus ojos."
            ],
            flashcards: [
              {
                question: "¿Qué beneficios trae imitar la humildad de Jehová?",
                answer: "Nos hace más accesibles, razonables y pacientes, y nos hace más valiosos a los ojos de Jehová."
              }
            ],
            biblicalCards: [
              {
                reference: "Isaías 43:4",
                purpose: "Somos valiosos para Jehová",
                text: "Porque eres precioso a mis ojos, has sido honrado y yo te amo."
              }
            ]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "CUANDO pensamos en las personas que tienen poder en el mundo, ¿diríamos que son humildes? Es muy probable que no. Sin embargo, Jehová, quien es el Todopoderoso, sí lo es (Sal. 113:5-8). La humildad impregna toda su personalidad; no hay ni el más mínimo rastro de orgullo en él. En este artículo analizaremos cuatro aspectos de la hermosa personalidad de Jehová y descubriremos cómo se ve reflejada la humildad en cada uno de ellos. También veremos cómo imitó Jesús esta cualidad de su Padre. Todo esto nos ayudará a acercarnos más a Jehová y a esforzarnos por ser más humildes."
          },
          {
            number: 2,
            content: "Las personas orgullosas no suelen ser accesibles. Se creen tan importantes que actúan de tal manera que el resto de la gente no se atreve a acercarse a ellas o incluso las evita por completo. ¡Pero qué diferente es Jehová! Como es tan humilde, nos invita a acercarnos a él y a contarle todo lo que sentimos y pensamos (lea Salmo 62:8). Así como un padre cariñoso escucha con atención las preocupaciones de sus hijos, nuestro Padre celestial escucha con atención las oraciones de sus siervos. De hecho, hizo que muchas de ellas quedaran registradas en la Biblia, lo que demuestra lo fácil que es hablar con él y lo abierto que está a escucharnos."
          },
          {
            number: 3,
            content: "Podemos orarle a Jehová incluso si sentimos que no merecemos su amor. ¿Por qué lo sabemos? Por la parábola del hijo pródigo. En ella, Jesús habló de un padre compasivo que tenía un hijo que se sentía indigno de volver a ser parte de la familia, pues había cometido muchos errores. ¿Cómo reaccionó el padre cuando el hijo regresó a casa? En cuanto lo vio, \"corrió a su encuentro, lo abrazó y lo besó con ternura\" (Luc. 15:17-20). Pues bien, Jehová es como ese padre. En cuanto escucha la oración de alguien que está aplastado por las preocupaciones o por la culpa, su humildad lo motiva a prestarle toda su atención (Lam. 3:19, 20). Y su compasión lo impulsa a \"correr\" hacia él para consolarlo y confirmarle su amor y su perdón (Is. 57:15). ¿Cómo lo hace? Muchas veces usa a los ancianos, a los familiares Testigos y a otros hermanos (Sant. 5:14, 15). Jehová nos ayuda porque quiere que estemos cerca de él."
          },
          {
            number: 4,
            content: "Jesús imita a su Padre. Al igual que Jehová, Jesús es humilde. Por eso, mientras estuvo en la Tierra, las personas se sentían con la confianza de acercarse a él. Le hacían preguntas con total libertad (Mar. 4:10, 11). Y, cuando él les preguntaba qué opinaban sobre cierto asunto, le decían abiertamente lo que pensaban (Mat. 16:13-16). Si cometían un error, no temblaban de miedo, porque sabían que Jesús era bueno, misericordioso y paciente (Mat. 17:24-27). Gracias a que Jesús imitó a su Padre a la perfección, sus seguidores llegaron a conocer mejor a Jehová (Juan 14:9). Aprendieron que Jehová no se parecía en nada a los líderes religiosos de aquel entonces, quienes eran duros, orgullosos e insensibles. Al contrario, es humilde y accesible."
          },
          {
            number: 5,
            content: "La humildad nos hace más accesibles. ¿Por qué? Por un lado, nos ayuda a evitar defectos que alejan a los demás de nosotros, como la envidia, el orgullo y el rencor. Por otro, nos ayuda a tener cualidades que atraen a los demás, como la bondad, la paciencia y el perdón (Col. 3:12-14). Los ancianos en especial deben esforzarse por ser accesibles. Claro está, para que los hermanos tengan la confianza de acercarse a ellos, primero tienen que poder verlos. Esto quiere decir que los ancianos prefieren asistir a las reuniones presencialmente en vez de conectarse por videoconferencia si no es necesario. Y, en la medida de lo posible, salen a predicar de casa en casa con los hermanos y las hermanas. Así les permiten conocerlos mejor y sentirse en la confianza de abordarlos siempre que lo necesiten."
          },
          {
            number: 6,
            content: "Las personas orgullosas suelen ser inflexibles e irrazonables. En cambio, Jehová —que siempre tiene la razón y es infinitamente sabio— es humilde y está dispuesto a ceder. Por ejemplo, pensemos en cómo reaccionó cuando Míriam, junto con Aarón, empezó a hablar en contra de su hermano Moisés, quien era el representante de Dios. Jehová se puso furioso con ella, porque en realidad le estaba faltando el respeto a él. Así que la castigó con lepra. Ahora bien, Aarón le suplicó a Moisés que la ayudara, y luego Moisés le rogó a Jehová que la curara. ¿Qué hizo Dios? ¿Se aferró a su decisión de castigarla? Eso es lo que habría hecho alguien orgulloso. Pero Jehová es humilde y por eso le concedió a Moisés su petición y curó a Míriam (Núm. 12:1-15)."
          },
          {
            number: 7,
            content: "Veamos otro caso en el que Jehová demostró que es humilde. Por medio de un profeta, le anunció al enfermo rey Ezequías que iba a morir. Entonces el rey le rogó a Jehová con los ojos llenos de lágrimas que lo curara. ¿Cuál fue la respuesta de Dios? Movido por la compasión, le añadió 15 años de vida (2 Rey. 20:1, 5, 6). Como vemos, la humildad de Jehová lo impulsa a ser flexible y compasivo."
          },
          {
            number: 8,
            content: "Mientras estuvo en la Tierra, Jesús fue razonable y buscó la manera de ayudar a la gente siempre que fue posible. Por ejemplo, sanó a las personas en sábado aunque los insensibles líderes religiosos se opusieron (lea Marcos 3:1-6). Y sigue demostrando esta cualidad como cabeza de la congregación cristiana. Por ejemplo, cuando alguien comete un pecado grave, Jesús es paciente con él y le da muchas oportunidades de cambiar (Apoc. 2:2-5)."
          },
          {
            number: 9,
            content: "Tenemos que desarrollar con humildad la manera tan razonable de pensar y actuar de Jehová (Sant. 3:17). Los padres que son razonables no son permisivos, pero tampoco les exigen a sus hijos más de lo que pueden dar. Un buen ejemplo de esto lo encontramos en Génesis 33:12-14, donde leemos que Jacob fue considerado con sus hijos. Además, los padres humildes y razonables evitan hacer comparaciones injustas entre sus hijos. Los ancianos también deben ser razonables. En lugar de insistir en su opinión, apoyan la decisión de la mayoría de los ancianos siempre y cuando no vaya en contra de los principios bíblicos (1 Tim. 3:2, 3). Y todos debemos esforzarnos por entender el punto de vista de los demás aunque sea diferente al nuestro (Rom. 14:1). Cada uno de nosotros procuramos seguir este consejo: \"Que todos sepan que ustedes son personas razonables\" (Filip. 4:5)."
          },
          {
            number: 10,
            content: "Probablemente hemos notado que las personas orgullosas son impacientes; no les gusta que las hagan esperar. ¡Qué distinto es Jehová! No hay nadie en el universo tan paciente como él. En los días de Noé, por ejemplo, dijo que esperaría 120 años para destruir a los malvados (Gén. 6:3). Noé alcanzó a criar a sus hijos y a construir el arca junto con su familia. Tiempo después, Jehová escuchó con paciencia a Abrahán mientras este le hacía preguntas sobre su decisión de destruir Sodoma y Gomorra. Una persona orgullosa tal vez le hubiera dicho a Abrahán: \"¿Quién te crees que eres para cuestionarme?\". Pero Jehová no hizo eso. Él es humilde y paciente (Gén. 18:20-33)."
          },
          {
            number: 11,
            content: "Hoy en día, Jehová también está demostrando que es paciente. Está esperando a que llegue el momento fijado para destruir este sistema malvado. ¿Por qué es tan paciente con los seres humanos? \"Porque no desea que ninguno sea destruido, sino que todos lleguen a arrepentirse\" (lea 2 Pedro 3:9). ¿Ha sido en vano la paciencia de Jehová? ¡Para nada! Millones de personas han llegado a conocerlo, y deseamos que millones más hagan lo mismo. Sin embargo, la paciencia de Dios tiene límites. Él ama a las personas, pero no es permisivo. No dejará que la maldad dure para siempre (Hab. 2:3)."
          },
          {
            number: 12,
            content: "Durante miles de años, Jesús ha imitado la paciencia de Jehová. Ha visto cómo Satanás ha esparcido mentiras terribles sobre Dios y los seres humanos fieles (Gén. 3:4, 5; Job 1:11; Apoc. 12:10). Jesús también ha visto a las personas sufrir cosas horribles. ¿Nos imaginamos las ganas que tiene de \"deshacer las obras del Diablo\"? (1 Juan 3:8). ¿Qué lo ayuda a esperar con paciencia hasta que Jehová le diga que es hora de acabar con las obras del Diablo por completo? Una de las razones principales es que Jesús es humilde y reconoce que le corresponde a Jehová decidir cuándo es el mejor momento de actuar (Hech. 1:7)."
          },
          {
            number: 13,
            content: "Cuando Jesús estuvo en la Tierra, también fue paciente con sus apóstoles. Al verlos discutir vez tras vez sobre quién era el más importante, no se desesperaba ni se frustraba. Todo lo contrario, era muy paciente con ellos (Luc. 9:46; 22:24-27). Estaba seguro de que con el tiempo cambiarían. ¿Y nosotros? ¿Hemos cometido el mismo error muchas veces? En ese caso, cuánto agradecemos que nuestro Rey sea tan humilde y paciente."
          },
          {
            number: 14,
            content: "Para parecernos más a Jehová debemos desarrollar \"la mente de Cristo\" (1 Cor. 2:16). ¿Qué nos ayudará a pensar como Jesús? No hay atajos. Hay que leer los Evangelios y sacar tiempo para meditar en cómo las acciones de Jesús reflejaban su manera de pensar. Además, es indispensable que le pidamos a Jehová que nos ayude a ser humildes como su Hijo. A medida que aprendamos a pensar como Cristo, nos pareceremos más a Dios y seremos más pacientes con nosotros mismos y con nuestros hermanos (Mat. 18:26-30, 35)."
          },
          {
            number: 15,
            content: "¿Cierto que es un honor que el Soberano del universo les preste una atención especial a quienes suelen pasar desapercibidos? Analicemos varios ejemplos de cómo lo ha hecho a lo largo de los siglos. Quizás algunos de ellos no nos resulten tan familiares, pero Jehová hizo que se incluyeran en la Biblia. En la época de los patriarcas vivió una nodriza llamada Débora, quien sirvió lealmente a las familias de Isaac y Jacob durante unos 125 años. No sabemos mucho más de esta fiel mujer, pero Jehová inspiró a Moisés para que registrara su nombre y un detalle que muestra lo querida que era (Gén. 24:59; 35:8, nota). Siglos después, Jehová escogió a David, un simple pastorcito, para que llegara a ser rey de Israel (2 Sam. 22:1, 36). Poco después de que Jesús nació, Dios les concedió a unos humildes pastores, por medio de un ángel, el honor de ser los primeros en enterarse de que el futuro Mesías había nacido en Belén (Luc. 2:8-11). Y, cuando José y María llevaron a Jesús al templo, Jehová dignificó a Simeón y a Ana —dos personas muy mayores— dándoles la oportunidad de ver a su Hijo (Luc. 2:25-30, 36-38). Sin duda, \"aunque Jehová es elevado, se fija en el humilde\"."
          },
          {
            number: 16,
            content: "Al igual que Jehová, Jesús dignificó a los humildes. Les enseñó a las personas \"comunes y con poca educación\" la verdad sobre el Reino de Dios (Hech. 4:13; Mat. 11:25). También sanó a los enfermos con cariño, y al hacerlo no solo les devolvió la salud, sino también la dignidad (Luc. 5:13). La noche antes de morir les lavó los pies a sus apóstoles, una tarea que realizaban los sirvientes (Juan 13:5). Y, antes de subir al cielo, les dio a sus seguidores —lo que nos incluye— el honor de llevar a cabo la labor más importante que un ser humano pudiera tener: ayudar a otros a conseguir la vida eterna (Mat. 28:19, 20)."
          },
          {
            number: 17,
            content: "Seguimos el ejemplo de Jehová al predicar. Les damos a todas las personas el honor de escuchar las buenas noticias, sin importar su cultura, su color de piel o su nivel de educación. También seguimos su ejemplo al tratar a los hermanos. Los consideramos superiores a nosotros independientemente de qué habilidades o responsabilidades tengamos (Filip. 2:3). Jehová se siente muy feliz de ver que somos humildes y tomamos la iniciativa de honrarnos unos a otros de estas y otras maneras (Sof. 3:12; Rom. 12:10)."
          },
          {
            number: 18,
            content: "Al hacer todo lo posible por imitar la humildad de nuestro cariñoso Padre celestial, nos convertiremos en personas más accesibles, razonables y pacientes. También trataremos a los demás de una manera que los honre, tal como hace Jehová. Recordemos que cada esfuerzo que hacemos por copiar su humildad nos hace más valiosos a sus ojos (Is. 43:4)."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Cómo puede la humildad ayudarnos a ser más accesibles?",
            answer: [
              "Nos ayuda a evitar defectos que alejan a los demás: envidia, orgullo y rencor.",
              "Nos ayuda a tener cualidades que atraen: bondad, paciencia y perdón.",
              "Los ancianos deben asistir presencialmente y predicar con los hermanos para ser más accesibles."
            ]
          },
          {
            question: "¿Cómo puede la humildad ayudarnos a ser más razonables?",
            answer: [
              "Los padres no exigen a sus hijos más de lo que pueden dar.",
              "Evitan hacer comparaciones injustas entre sus hijos.",
              "Los ancianos apoyan la decisión de la mayoría si no va contra los principios bíblicos.",
              "Nos esforzamos por entender el punto de vista de los demás."
            ]
          },
          {
            question: "¿Cómo puede la humildad ayudarnos a ser más pacientes?",
            answer: [
              "Desarrollamos 'la mente de Cristo' leyendo los Evangelios.",
              "Meditamos en cómo las acciones de Jesús reflejaban su manera de pensar.",
              "Pedimos a Jehová que nos ayude a ser humildes como su Hijo.",
              "Seremos más pacientes con nosotros mismos y con los demás."
            ]
          }
        ],
        finalSong: "Canción 159: Demos gloria a Jehová"
      },
      // Artículo 51: "Cómo planear una boda que honre a Jehová" (23 Feb-1 Mar)
      {
        metadata: {
          articleNumber: 51,
          week: "23 Feb-1 Mar",
          month: "Diciembre",
          year: 2025
        },
        song: "Canción 132: Ahora ya somos uno",
        title: "Cómo planear una boda que honre a Jehová",
        biblicalText: "\"Háganlo todo de forma digna y ordenada\" (1 COR. 14:40).",
        theme: "Cómo pueden las parejas de novios cristianos honrar a Jehová el día de su boda.",
        questions: [
          {
            number: "1, 2",
            textEs: "¿Qué desea Jehová para los novios?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: [
              "Jehová desea que los novios disfruten mucho el día de su boda y tengan un matrimonio muy feliz.",
              "Es muy importante que su boda honre a Jehová.",
              "Los principios del artículo ayudarán a todos a honrar a Jehová si asisten o si les piden consejos."
            ],
            flashcards: [
              {
                question: "¿Qué desea Jehová para las parejas que se casan?",
                answer: "Que disfruten mucho el día de su boda y tengan un matrimonio muy feliz."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 5:18",
                purpose: "Alegrarse con la esposa",
                text: "Alégrate con la esposa de tu juventud."
              },
              {
                reference: "Cantares 3:11",
                purpose: "El día de la boda es especial",
                text: "El día de su boda, el día en que su corazón se alegró."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Qué deben tomar en cuenta las parejas cristianas al organizar su boda, y por qué?",
            textLSM: "",
            paragraphs: [3],
            section: "POR QUÉ HONRAR A JEHOVÁ",
            answer: [
              "Las parejas cristianas deben tomar en cuenta los principios que Jehová ha establecido en su Palabra.",
              "Jehová es el Creador del matrimonio.",
              "Fue él quien casó a los dos primeros seres humanos, Adán y Eva.",
              "El punto de vista de Dios debe ser lo más importante para los novios."
            ],
            flashcards: [
              {
                question: "¿Por qué deben los novios tomar en cuenta el punto de vista de Jehová?",
                answer: "Porque Jehová es el Creador del matrimonio y fue él quien casó a Adán y Eva."
              }
            ],
            biblicalCards: [
              {
                reference: "Génesis 1:28; 2:24",
                purpose: "Jehová creó el matrimonio",
                text: "Dios los bendijo y les dijo: 'Sean fructíferos y multiplíquense'. Por eso el hombre dejará a su padre y a su madre y se unirá a su esposa, y los dos llegarán a ser una sola carne."
              }
            ]
          },
          {
            number: "4",
            textEs: "¿Cuál es otra buena razón para tomar en cuenta el punto de vista de Jehová al organizar una boda?",
            textLSM: "",
            paragraphs: [4],
            answer: [
              "Jehová es nuestro Padre celestial y nuestro mejor amigo.",
              "Queremos proteger nuestra amistad con él y evitar que algo lo hiera u ofenda.",
              "Al pensar en todo lo que ha hecho y hará por nosotros, merece que lo honremos en nuestra boda."
            ],
            flashcards: [
              {
                question: "¿Qué relación tenemos con Jehová que nos motiva a honrarlo en nuestra boda?",
                answer: "Es nuestro Padre celestial y nuestro mejor amigo, y queremos proteger esa amistad."
              }
            ],
            biblicalCards: [
              {
                reference: "Hebreos 12:9",
                purpose: "Jehová es nuestro Padre",
                text: "Además, teníamos padres terrenales que nos disciplinaban, y los respetábamos. ¿No deberíamos someternos mucho más al Padre de nuestra vida espiritual y vivir?"
              },
              {
                reference: "Salmo 25:14",
                purpose: "Jehová es nuestro amigo",
                text: "La amistad íntima con Jehová pertenece a los que le temen, y él les da a conocer su pacto."
              },
              {
                reference: "Salmo 116:12",
                purpose: "Agradecer a Jehová",
                text: "¿Qué le devolveré a Jehová por todos los beneficios que me ha dado?"
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Cómo puede ayudar la Biblia a los novios a tomar buenas decisiones sobre su boda?",
            textLSM: "",
            paragraphs: [5],
            section: "CÓMO HONRAR A JEHOVÁ",
            answer: [
              "La Biblia no contiene una lista de reglas sobre cómo debe ser una boda.",
              "Hay un abanico de posibilidades dentro de las circunstancias, costumbres y gustos personales.",
              "Los cristianos también respetamos las leyes locales.",
              "Si la pareja se guía por los principios bíblicos, su boda honrará a Jehová."
            ],
            flashcards: [
              {
                question: "¿Qué libertad tienen los cristianos al planear su boda?",
                answer: "Hay un abanico de posibilidades dentro de las circunstancias, costumbres y gustos personales, siempre que sigan los principios bíblicos."
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 22:21",
                purpose: "Respetar las leyes locales",
                text: "Devuelvan a César las cosas de César, y a Dios las cosas de Dios."
              }
            ]
          },
          {
            number: "6",
            textEs: "¿Por qué es importante que los novios cumplan con los requisitos legales para casarse? (Romanos 13:1, 2).",
            textLSM: "",
            paragraphs: [6],
            readText: "LEE Romanos 13:1, 2",
            answer: [
              "Las leyes establecen ciertos requisitos que los novios deben cumplir para poder casarse.",
              "Deben averiguar cuáles son los requisitos que aplican donde viven.",
              "Si necesitan ayuda, pueden pedírsela a los ancianos."
            ],
            flashcards: [
              {
                question: "¿Qué deben hacer los novios respecto a los requisitos legales?",
                answer: "Averiguar cuáles son los requisitos que aplican donde viven y cumplirlos. Pueden pedir ayuda a los ancianos."
              }
            ],
            biblicalCards: [
              {
                reference: "Romanos 13:1, 2",
                purpose: "Obedecer las autoridades",
                text: "Toda persona debe estar sujeta a las autoridades superiores, porque no hay autoridad que no venga de Dios."
              }
            ]
          },
          {
            number: "7",
            textEs: "¿Qué ambiente debe haber en las bodas?",
            textLSM: "",
            paragraphs: [7],
            answer: [
              "Debe haber un ambiente apropiado que refleje el fruto del espíritu de Dios, no el espíritu del mundo.",
              "El novio, como cabeza de la nueva familia, es responsable de que la ceremonia sea digna y alegre.",
              "Un discurso de boda basado en la Biblia beneficia a los asistentes.",
              "La mayoría de las parejas eligen que la ceremonia tenga lugar en un Salón del Reino."
            ],
            flashcards: [
              {
                question: "¿Quién es responsable de que la ceremonia sea digna y alegre?",
                answer: "El novio, como cabeza de la nueva familia."
              },
              {
                question: "¿Qué deben hacer las parejas que desean usar un Salón del Reino?",
                answer: "Pedírselo por escrito al cuerpo de ancianos con bastante antelación."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Corintios 10:31, 32",
                purpose: "Hacer todo para la gloria de Dios",
                text: "Ya sea que coman, ya sea que beban, ya sea que hagan cualquier otra cosa, háganlo todo para la gloria de Dios."
              },
              {
                reference: "Gálatas 5:19-26",
                purpose: "El fruto del espíritu vs las obras de la carne",
                text: "El fruto del espíritu es amor, alegría, paz, paciencia, bondad, fe, apacibilidad, autocontrol."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Qué pueden hacer los novios para que en la celebración haya un ambiente digno? (Romanos 13:13).",
            textLSM: "",
            paragraphs: [8],
            readText: "LEE Romanos 13:13",
            answer: [
              "Si deciden celebrar una fiesta, deben evitar que refleje el espíritu del mundo.",
              "Si sirven bebidas alcohólicas, deben tomar medidas para que nadie beba más de la cuenta.",
              "La música debe mantenerse a un volumen que permita conversar con comodidad.",
              "Deben revisar qué tipo de música pondrán y qué dicen las letras."
            ],
            flashcards: [
              {
                question: "¿Qué deben considerar los novios respecto a la música de la celebración?",
                answer: "Que sea a un volumen que permita conversar, y revisar el tipo de música y las letras para que nadie se sienta ofendido."
              }
            ],
            biblicalCards: [
              {
                reference: "Romanos 13:13",
                purpose: "Comportarse decentemente",
                text: "Comportémonos decentemente como de día, no en fiestas descontroladas ni en borracheras."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿Qué debe tomar en cuenta la pareja respecto a lo que se hará durante la celebración?",
            textLSM: "",
            paragraphs: [9],
            answer: [
              "Si planean que familiares o amigos les dediquen unas palabras, presenten imágenes o video, deben asegurarse de que todo sea apropiado y animador.",
              "Deben preguntarse si lo que se haga honrará a Jehová.",
              "Aunque puede haber espacio para algo de humor, deben evitar comentarios indecentes o con connotaciones sexuales.",
              "Deben asegurarse de que quienes participen conozcan sus deseos y los respeten."
            ],
            flashcards: [
              {
                question: "¿Qué preguntas deben hacerse los novios sobre el entretenimiento de la boda?",
                answer: "¿Les parecerá respetuoso a los asistentes? ¿Demostrará respeto por el matrimonio? ¿Honrará a Jehová?"
              }
            ],
            biblicalCards: [
              {
                reference: "Filipenses 4:8",
                purpose: "Pensar en cosas edificantes",
                text: "Todas las cosas que son verdaderas, que merecen serio respeto, que son justas, que son castas, que son amables... sigan pensando en estas cosas."
              },
              {
                reference: "Efesios 5:3",
                purpose: "Evitar inmoralidad",
                text: "Que entre ustedes ni siquiera se mencionen la inmoralidad sexual ni ninguna clase de inmundicia."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿Por qué deben ser modestas las parejas al organizar su boda? (1 Juan 2:15-17).",
            textLSM: "",
            paragraphs: [10],
            readText: "LEE 1 Juan 2:15-17",
            answer: [
              "Jehová valora que sus siervos procuren honrarlo a él en vez de atraer la atención sobre ellos mismos.",
              "Las parejas modestas evitan gastar una cantidad excesiva de dinero y hacer 'ostentación'.",
              "Una boda sencilla permite seguir sirviendo a Jehová sin deudas y deja recuerdos muy bonitos.",
              "Al no complicarse, tienen menos decisiones que tomar y menos estrés."
            ],
            flashcards: [
              {
                question: "¿Qué beneficios trae elegir una boda sencilla?",
                answer: "No endeudarse, poder seguir sirviendo a Jehová, menos estrés, menos desacuerdos, y recuerdos bonitos."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Juan 2:15-17",
                purpose: "No amar al mundo",
                text: "No amen al mundo ni las cosas del mundo. Si alguno ama al mundo, el amor del Padre no está en él. Porque todo lo que hay en el mundo —el deseo de la carne, el deseo de los ojos y la ostentación de los medios de vida— no se origina del Padre."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Cómo pueden el novio y la novia demostrar que son modestos en su manera de vestir y arreglarse? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [11],
            answer: [
              "Quieren lucir lo mejor posible, e incluso en tiempos bíblicos se prestaba atención al aspecto.",
              "La ropa debe ser decente y apropiada.",
              "No deben permitir que la ropa o cualquier cosa material se convierta en el aspecto más destacado de la boda."
            ],
            flashcards: [
              {
                question: "¿Qué deben recordar los novios sobre su vestimenta?",
                answer: "Debe ser decente y apropiada, sin que la ropa o cosas materiales se conviertan en lo más destacado de la boda."
              }
            ],
            biblicalCards: [
              {
                reference: "Isaías 61:10",
                purpose: "La vestimenta de la novia",
                text: "Como un novio se pone un turbante, como una novia se adorna con sus joyas."
              },
              {
                reference: "1 Timoteo 2:9",
                purpose: "Vestirse con modestia",
                text: "Que las mujeres se adornen con ropa apropiada, con modestia y buen juicio."
              },
              {
                reference: "1 Pedro 3:3, 4",
                purpose: "La belleza interior",
                text: "Que su adorno no sea el exterior... sino la persona interior del corazón, con el adorno incorruptible de un espíritu apacible y tranquilo."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Por qué deben los novios asegurarse de rechazar las costumbres que no están de acuerdo con lo que dice la Biblia?",
            textLSM: "",
            paragraphs: [12],
            answer: [
              "En el mundo de Satanás, las bodas suelen incluir muchas costumbres relacionadas con la religión falsa, el ocultismo y las supersticiones.",
              "Jehová nos advierte que debemos mantenernos alejados de todas esas cosas impuras.",
              "Si tienen dudas sobre ciertas costumbres, deben investigar su origen y buscar los principios bíblicos antes de decidir."
            ],
            flashcards: [
              {
                question: "¿Qué deben hacer los novios si tienen dudas sobre ciertas costumbres de boda?",
                answer: "Investigar su origen y buscar los principios bíblicos aplicables antes de decidir si las incluirán."
              }
            ],
            biblicalCards: [
              {
                reference: "Apocalipsis 18:4",
                purpose: "Salir de Babilonia la Grande",
                text: "Sálganse de ella, pueblo mío, si no quieren participar de sus pecados."
              },
              {
                reference: "2 Corintios 6:14-17",
                purpose: "Separarse de lo impuro",
                text: "No se unan bajo yugo desigual con los incrédulos. Sálganse de en medio de ellos y sepárense, dice Jehová, y dejen de tocar lo impuro."
              }
            ]
          },
          {
            number: "13",
            textEs: "¿Cómo pueden los novios demostrar que ven los regalos como Jehová los ve?",
            textLSM: "",
            paragraphs: [13],
            answer: [
              "Los novios no quieren que los invitados sientan que están obligados a hacer un regalo.",
              "Tampoco quieren que piensen que un obsequio sencillo no les parecería suficiente.",
              "Los siervos de Jehová agradecemos cualquier cosa que otros nos dan por amor y no por obligación."
            ],
            flashcards: [
              {
                question: "¿Cómo deben ver los novios los regalos de boda?",
                answer: "Deben agradecer cualquier cosa que otros les den por amor, sin hacer sentir obligados a los invitados."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 11:25",
                purpose: "El gozo de dar",
                text: "El alma generosa prosperará, y el que riega a otros también será regado."
              },
              {
                reference: "Hechos 20:35",
                purpose: "Hay más felicidad en dar",
                text: "Hay más felicidad en dar que en recibir."
              },
              {
                reference: "2 Corintios 9:7",
                purpose: "Dar con alegría",
                text: "Que cada uno haga como ha resuelto en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿A qué dificultades se enfrentan algunas parejas?",
            textLSM: "",
            paragraphs: [14],
            section: "CÓMO SOLUCIONAR CIERTAS SITUACIONES",
            answer: [
              "Algunas parejas enfrentan el reto de mantener la boda sencilla.",
              "Decidir a quién invitar puede ser difícil cuando tienen muchos amigos y en su cultura todo el mundo espera ser invitado.",
              "Algunas personas presionan para que la boda sea más espectacular.",
              "Lograr que los padres acepten decisiones diferentes a la tradición toma tiempo."
            ],
            flashcards: [
              {
                question: "¿Qué dificultades pueden enfrentar las parejas al planear su boda?",
                answer: "Presión para una boda grande, decidir a quién invitar, lograr que los padres acepten decisiones diferentes a la tradición."
              }
            ]
          },
          {
            number: "15",
            textEs: "¿Por qué es importante orar sobre todo lo relacionado con la boda?",
            textLSM: "",
            paragraphs: [15],
            answer: [
              "Pueden hablarle a Jehová de cualquier decisión que deban tomar y cualquier preocupación.",
              "Pueden pedirle que los ayude a tomar buenas decisiones, mantener la calma y ser valientes.",
              "A medida que vean cómo Jehová les responde, su confianza en él se hará más fuerte."
            ],
            flashcards: [
              {
                question: "¿Por qué es tan importante orar al planear la boda?",
                answer: "Jehová puede ayudarles a tomar buenas decisiones, mantener la calma, ser valientes, y ver sus respuestas fortalecerá su confianza en él."
              }
            ],
            biblicalCards: [
              {
                reference: "Filipenses 4:6, 7",
                purpose: "Orar sobre las preocupaciones",
                text: "No se inquieten por nada, sino que en toda ocasión, con oración y súplica junto con acción de gracias, presenten sus peticiones a Dios."
              },
              {
                reference: "1 Pedro 5:7",
                purpose: "Echar las ansiedades sobre Jehová",
                text: "Echen sobre él toda su ansiedad, porque él cuida de ustedes."
              }
            ]
          },
          {
            number: "16, 17",
            textEs: "¿Por qué es importante que haya buena comunicación al organizar una boda?",
            textLSM: "",
            paragraphs: [16, 17],
            answer: [
              "Organizar una boda requiere que la pareja tome muchas decisiones.",
              "Antes de tomar cada decisión, deben analizar juntos las opciones y los principios bíblicos.",
              "Al expresar sus opiniones, deben ser amables, comprensivos y flexibles.",
              "Si los padres no son Testigos, explicarles las decisiones con bondad ayudará."
            ],
            flashcards: [
              {
                question: "¿Cómo deben comunicarse los novios al planear la boda?",
                answer: "Analizando juntos las opciones y principios bíblicos, siendo amables, comprensivos y flexibles."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 15:22",
                purpose: "La importancia del consejo",
                text: "Los planes fracasan cuando no hay comunicación confidencial, pero con muchos consejeros tienen éxito."
              },
              {
                reference: "Colosenses 4:6",
                purpose: "Hablar con gracia",
                text: "Que sus palabras siempre sean agradables, sazonadas con sal, para que sepan cómo responder a cada persona."
              }
            ]
          },
          {
            number: "18",
            textEs: "¿Qué ayudará a los novios a que todo salga como está previsto? (1 Corintios 14:40; vea también la imagen).",
            textLSM: "",
            paragraphs: [18],
            readText: "LEE 1 Corintios 14:40",
            answer: [
              "Si planifican las cosas con cuidado, el día de la boda tendrán menos estrés.",
              "Pueden tener una pequeña reunión con quienes se ofrecieron para ayudar y repasar los preparativos.",
              "Por respeto a los invitados, deben hacer todo lo posible por cumplir el horario previsto."
            ],
            flashcards: [
              {
                question: "¿Qué pueden hacer los novios para que el día de la boda haya menos estrés?",
                answer: "Planificar con cuidado, reunirse con los ayudantes para repasar los preparativos, y cumplir el horario previsto."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Corintios 14:40",
                purpose: "Hacer todo de forma ordenada",
                text: "Háganlo todo de forma digna y ordenada."
              }
            ]
          },
          {
            number: "19",
            textEs: "¿Qué ayudará a los novios a controlar lo que pasa durante la recepción?",
            textLSM: "",
            paragraphs: [19],
            answer: [
              "Si son previsores, se evitarán muchos problemas.",
              "Si en su zona es común que se presenten personas no invitadas, deben pensar en cómo prevenirlo.",
              "Si van a asistir familiares no Testigos, deben explicarles cómo son las bodas de los Testigos.",
              "Pueden pedirle a un hermano maduro que sea el 'director del banquete' para ayudar a mantener todo según lo planeado."
            ],
            flashcards: [
              {
                question: "¿Qué pueden hacer los novios para controlar lo que pasa en la recepción?",
                answer: "Ser previsores, explicar a familiares no Testigos cómo son sus bodas, y nombrar a un hermano maduro como 'director del banquete'."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 22:3",
                purpose: "Ser previsores",
                text: "El prudente ve el peligro y se esconde, pero los inexpertos siguen adelante y sufren las consecuencias."
              },
              {
                reference: "Juan 2:8",
                purpose: "El director del banquete",
                text: "Jesús les dijo: 'Saquen un poco ahora y llévenlo al director del banquete'. Y se lo llevaron."
              }
            ]
          },
          {
            number: "20",
            textEs: "¿Qué deben tener en cuenta los novios?",
            textLSM: "",
            paragraphs: [20],
            answer: [
              "La boda es solo un día, el primero de lo que puede ser una maravillosa vida sirviendo juntos a Jehová.",
              "Deben hacer todo lo posible por que sea una ocasión digna y sencilla.",
              "Si se dejan guiar por Jehová, recordarán su boda con una sonrisa."
            ],
            flashcards: [
              {
                question: "¿Qué perspectiva deben tener los novios sobre su boda?",
                answer: "Es solo un día, el primero de una maravillosa vida sirviendo juntos a Jehová. Debe ser digna y sencilla."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 37:3, 4",
                purpose: "Confiar en Jehová",
                text: "Confía en Jehová y haz el bien; vive en la tierra y actúa con fidelidad. Deléitate profundamente en Jehová, y él te dará lo que tu corazón desea."
              }
            ]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "¿TIENES novio o novia? ¿Están comprometidos para casarse? Si es así, ¡felicidades! Claro, seguro que ahora están muy ocupados con los preparativos. Pueden estar seguros de que Jehová desea que disfruten mucho el día de su boda y que tengan un matrimonio muy feliz (Prov. 5:18; Cant. 3:11)."
          },
          {
            number: 2,
            content: "Es muy importante que su boda honre a Jehová. ¿Por qué? ¿Y cómo pueden asegurarse de ello? En este artículo responderemos estas dos preguntas. Aunque va dirigido principalmente a los novios que están planeando su boda, los principios que analizaremos nos ayudarán a todos a honrar a Jehová si asistimos o si nos piden consejos."
          },
          {
            number: 3,
            content: "A la hora de organizar su boda, las parejas cristianas deben tomar en cuenta los principios que Jehová ha establecido en su Palabra. ¿Por qué? Porque Jehová es el Creador del matrimonio. De hecho, fue él quien casó a los dos primeros seres humanos, Adán y Eva (Gén. 1:28; 2:24). Así que para ustedes, los novios, el punto de vista de Dios debe ser lo más importante."
          },
          {
            number: 4,
            content: "Otra buena razón por la que ustedes deben tomar en cuenta el punto de vista de Jehová al organizar su boda es que él es su Padre celestial y su mejor amigo (Heb. 12:9). Por supuesto, quieren proteger su amistad con él y evitar que algo que suceda ese día —o cualquier otro día— lo hiera u ofenda (Sal. 25:14). Al pensar en todo lo que ha hecho y hará por ustedes, ¿verdad que merece que lo honren en su boda? (Sal. 116:12)."
          },
          {
            number: 5,
            content: "La Biblia no contiene una lista de reglas sobre cómo debe ser una boda o la celebración que tal vez se realice después. Así que hay un abanico de posibilidades dentro de las circunstancias, las costumbres y los gustos personales. Claro, los cristianos verdaderos también respetamos las leyes locales relacionadas con este asunto (Mat. 22:21). Si la pareja se guía por los principios bíblicos, tome las decisiones que tome, su boda honrará a Jehová y lo hará feliz."
          },
          {
            number: 6,
            content: "En la mayoría de los países, las leyes establecen ciertos requisitos que los novios deben cumplir para poder casarse. Así que averigüen cuáles son los que aplican en el lugar donde ustedes viven. Si necesitan ayuda, pueden pedírsela a los ancianos."
          },
          {
            number: 7,
            content: "Procuren que su boda refleje el fruto del espíritu de Dios, y no el espíritu del mundo (Gál. 5:19-26). Como el novio será el cabeza de la nueva familia, él es responsable de que la ceremonia sea una ocasión digna y alegre. ¿Qué factores contribuirán a lograrlo? Un discurso de boda basado en la Biblia que se presenta con amor, cariño y dignidad beneficia a los asistentes porque pueden ver que el matrimonio es un regalo de Dios y que la boda es una ocasión importante y seria. Por ese motivo, la mayoría de las parejas eligen que la ceremonia tenga lugar en un Salón del Reino, si es posible. Si una pareja desea usar un Salón del Reino, debe pedírselo por escrito al cuerpo de ancianos con bastante antelación."
          },
          {
            number: 8,
            content: "Si ustedes deciden celebrar una fiesta, recepción o banquete, ¿qué pueden hacer para que no refleje el espíritu del mundo? La palabra griega que se traduce \"fiestas descontroladas\" se refería a reuniones sociales donde se bebía en exceso y había música hasta altas horas de la noche (vea la nota de estudio \"fiestas descontroladas\", de Romanos 13:13). Si deciden que servirán bebidas alcohólicas, tomen medidas de antemano para que nadie beba más de la cuenta. Si habrá música, asegúrense de que se mantenga a un volumen que permita a los asistentes conversar con comodidad. Además, revisen con cuidado qué tipo de música pondrán y qué dicen las letras de las canciones para que nadie se sienta ofendido."
          },
          {
            number: 9,
            content: "¿Tienen planeado que algunos familiares o amigos les dediquen unas palabras, presenten algunas imágenes o un video, o que haya algún otro tipo de entretenimiento? Estos detalles le pueden añadir un toque especial a la ocasión. Eso sí, asegúrense de que todo lo que se haga sea apropiado y animador (Filip. 4:8). Pregúntense: \"¿Les parecerá respetuoso y digno a los asistentes? ¿Demostrará respeto por el matrimonio?\". Y lo más importante: \"¿Honrará a Jehová?\". Aunque puede haber espacio para algo de humor, eviten cosas totalmente fuera de lugar, como los comentarios indecentes o que tengan connotaciones sexuales (Efes. 5:3). Asegúrense de que los familiares y amigos que vayan a decir unas palabras conozcan sus deseos y los respeten."
          },
          {
            number: 10,
            content: "Jehová valora que sus siervos procuren honrarlo a él en vez de atraer la atención sobre ellos mismos de una manera indebida. Por eso, las parejas modestas evitan gastar una cantidad excesiva de dinero y hacer \"ostentación\", es decir, andar presumiendo de lo que tienen. ¿Cómo se beneficiarán ustedes si eligen celebrar una boda sencilla? Fíjense en lo que dice un hermano de Noruega llamado Mike: \"No nos metimos en deudas y pudimos seguir con el precursorado. Aunque fue una boda sencilla, nos dejó recuerdos muy bonitos\". Y una hermana de la India llamada Tabitha explica: \"Como no nos complicamos, tuvimos menos decisiones que tomar y menos desacuerdos. Nos ahorramos un montón de estrés\"."
          },
          {
            number: 11,
            content: "¿Ya han decidido qué se van a poner? Sin duda, quieren lucir lo mejor posible. Incluso en tiempos bíblicos, el novio y la novia le prestaban mucha atención a su aspecto (Is. 61:10). Claro, la ropa que ustedes elijan tal vez sea más o menos diferente a la que se pondrían en otras ocasiones, pero de todos modos debe ser decente y apropiada (1 Tim. 2:9). No permitan que la ropa —o cualquier otra cosa material— se convierta en el aspecto más destacado de la boda (1 Ped. 3:3, 4)."
          },
          {
            number: 12,
            content: "En el mundo de Satanás, las bodas suelen incluir muchas costumbres relacionadas con la religión falsa, el ocultismo y las supersticiones. Pero Jehová nos advierte con claridad que debemos mantenernos alejados de todas esas cosas impuras (2 Cor. 6:14-17). Por eso, si tienen dudas sobre ciertas costumbres o tradiciones que son comunes donde ustedes viven, investiguen su origen y busquen los principios bíblicos aplicables antes de decidir si las incluirán o no en su boda."
          },
          {
            number: 13,
            content: "¿Donde ustedes viven existe la costumbre de que los invitados les hagan regalos a los novios? Es posible que el tipo de regalo que los invitados hagan dependa de su situación económica. Por supuesto, la Biblia anima a los cristianos a dar y dice que hacerlo nos hace felices (Prov. 11:25; Hech. 20:35). Ahora bien, los novios no quieren que los invitados sientan que están obligados a hacerles un regalo o que un obsequio sencillo no les parecería suficiente. Los siervos de Jehová nos esforzamos por ver los regalos como él los ve y agradecemos cualquier cosa que otros nos dan por amor y no por obligación (2 Cor. 9:7)."
          },
          {
            number: 14,
            content: "Organizar una boda que honre a Jehová tal vez no sea fácil para ustedes. Por ejemplo, mantenerla sencilla quizás se convierta en un reto. Veamos el caso de Charlie, que es de las Islas Salomón: \"Nos costó una barbaridad decidir a quién invitar a la recepción, porque tenemos muchos amigos y en nuestra cultura todo el mundo espera que lo inviten\". Tabitha, mencionada en el párrafo 10, cuenta: \"Donde vivo, lo normal es tener muchísimos invitados. Así que tomó tiempo conseguir que nuestros padres aceptaran nuestra decisión de invitar solamente a unas 100 personas\". Y Sarah, que es de la India, comenta: \"Hay quienes le dan mucha importancia a la posición social. Como mis primos tuvieron una boda muy lujosa, algunas personas me presionaban para que la mía fuera todavía más espectacular\"."
          },
          {
            number: 15,
            content: "Oren con frecuencia sobre todo lo relacionado con su boda. Pueden hablarle a Jehová de cualquier decisión que deban tomar y cualquier preocupación que tengan (Filip. 4:6, 7 y la nota de estudio \"en cualquier situación\"). También pueden pedirle que los ayude a tomar buenas decisiones, a mantener la calma cuando estén estresados y a ser valientes cuando sea necesario (1 Ped. 5:7). A medida que vean cómo él les responde, su confianza en él se hará más fuerte. Tabitha añade: \"A mi novio y a mí nos preocupaba tener desacuerdos entre nosotros y con nuestras familias. Por eso antes de hablar de nuestros planes siempre hacíamos una oración. Vimos de verdad cómo Jehová nos ayudaba a mantener la paz\"."
          },
          {
            number: 16,
            content: "Organizar una boda requiere que la pareja tome muchas decisiones, como la fecha, el presupuesto, la lista de invitados, etc. Antes de tomar cada decisión, analicen juntos las opciones, los principios bíblicos aplicables y los consejos que tal vez les den otros cristianos maduros. Al expresar sus opiniones, sean amables, comprensivos y flexibles. Si familiares cercanos —como sus padres— les hacen peticiones razonables, traten de complacerlos. A fin de cuentas, para ellos también es una ocasión especial. Y, si no pueden concederles lo que les piden, explíquenles las razones con tacto y cariño (Col. 4:6). Ayúdenlos a ver que su principal objetivo es disfrutar de un día muy feliz y honrar a Jehová."
          },
          {
            number: 17,
            content: "¿Y si sus padres no son Testigos? Explicarles sus decisiones puede ser especialmente difícil, pero les irá mejor si lo hacen con bondad. Un hermano de la India llamado Santhosh cuenta: \"Nuestras familias querían que siguiéramos algunos rituales del hinduismo. A mi novia y a mí nos tomó mucho tiempo lograr que entendieran nuestro punto de vista. Decidimos complacerlos en algunos asuntos que pensamos que no desagradarían a Jehová. Por ejemplo, cambiamos el menú y servimos la comida que ellos querían. Además, decidimos que no se cantara ni se bailara, porque ellos no estaban acostumbrados\"."
          },
          {
            number: 18,
            content: "Si planifican las cosas con cuidado, luego el día de la boda seguramente tendrán menos estrés (lea 1 Corintios 14:40). Wayne, que es de Taiwán, explica: \"Unos días antes de la boda tuvimos una pequeña reunión con quienes se ofrecieron para ayudarnos. Repasamos los preparativos y ensayamos algunas partes de la ceremonia para asegurarnos de que todo fuera sobre ruedas\". Por respeto a los invitados, hagan todo lo posible por cumplir el horario previsto."
          },
          {
            number: 19,
            content: "Si son previsores, se evitarán muchos problemas (Prov. 22:3). Por ejemplo, ¿en la zona donde ustedes viven es común que en las celebraciones de boda se presenten personas que no hayan sido invitadas? Piensen en lo que pueden hacer para que eso no suceda. Además, si van a asistir familiares que no son Testigos, explíquenles cómo son nuestras bodas y cómo vemos ciertas costumbres. Pueden mostrarles el artículo de jw.org \"¿Cómo son las bodas de los testigos de Jehová?\". Para que ustedes puedan controlar mejor lo que pasa durante la recepción, piensen en la posibilidad de pedirle a un hermano maduro que sea el \"director del banquete\" (Juan 2:8). Si le informan con claridad sus decisiones, podrá ayudarlos a asegurarse de que la boda sea una ocasión digna y todo vaya según lo planeado."
          },
          {
            number: 20,
            content: "Al pensar en todo lo que implica organizar su boda, tal vez se sientan un poco abrumados. Pero recuerden que la boda es solo un día, el primero de lo que puede ser una maravillosa vida sirviendo juntos a Jehová. Hagan todo lo posible por que sea una ocasión digna y sencilla. Confíen en Jehová. Si se dejan guiar por él, cuando el día de mañana miren atrás, recordarán su boda con una sonrisa y dirán: \"Me encantó, no cambiaría nada\" (Sal. 37:3, 4)."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Por qué quieren los novios que su boda honre a Jehová?",
            answer: [
              "Porque Jehová es el Creador del matrimonio.",
              "Porque Jehová es su Padre celestial y su mejor amigo.",
              "Porque quieren proteger su amistad con él.",
              "Porque Jehová merece ser honrado por todo lo que ha hecho por ellos."
            ]
          },
          {
            question: "¿Qué ayudará a la pareja a crear un ambiente digno y apropiado el día de su boda?",
            answer: [
              "Que la boda refleje el fruto del espíritu, no el espíritu del mundo.",
              "Un discurso de boda basado en la Biblia.",
              "Controlar las bebidas alcohólicas y la música.",
              "Asegurarse de que el entretenimiento sea apropiado y animador."
            ]
          },
          {
            question: "¿Cómo se beneficiarán los novios si eligen celebrar una boda sencilla?",
            answer: [
              "No se meterán en deudas.",
              "Podrán seguir sirviendo a Jehová.",
              "Tendrán menos decisiones que tomar y menos desacuerdos.",
              "Se ahorrarán mucho estrés.",
              "Les quedarán recuerdos muy bonitos."
            ]
          }
        ],
        finalSong: "Canción 107: Dios nos enseñó a amar"
      }
      // Agrega más artículos aquí...
    ]
  }

  // PUEDES SEGUIR AGREGANDO MÁS MESES:
  // "2026-01": { articles: [...] },
  // ... y así sucesivamente, SIN LÍMITE
};

// Helper para obtener un artículo específico por ID
export function getArticleById(articleId: string): ArticleData | undefined {
  // ID format: "2025-08-article-35"
  const parts = articleId.split('-');
  if (parts.length < 4) return undefined;

  const yearMonth = `${parts[0]}-${parts[1]}`; // "2025-08"
  const articleNum = parts[3]; // "35"

  const month = atalayaDatabase[yearMonth];
  if (!month) return undefined;

  const articleNumber = parseInt(articleNum);
  return month.articles.find(a => a.metadata.articleNumber === articleNumber);
}

// Helper para obtener el ID de un artículo
export function getArticleId(article: ArticleData): string {
  // Mapa de nombres de meses a números
  const monthMap: Record<string, string> = {
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
    "Diciembre": "12"
  };

  const monthNum = monthMap[article.metadata.month] || "01";
  return `${article.metadata.year}-${monthNum}-article-${article.metadata.articleNumber}`;
}

// Helper para listar todos los artículos de un mes (filtra solo los activos)
export function getMonthArticles(yearMonth: string): ArticleData[] {
  const allArticles = atalayaDatabase[yearMonth]?.articles || [];
  // Filtrar solo los artículos que están marcados como activos en la configuración
  return allArticles.filter(article => {
    // Si el artículo no tiene título (placeholder vacío), no lo incluyas
    if (!article.title || article.title === "") return false;
    // Solo incluir artículos activos según la configuración
    return isArticleActive(article.metadata.articleNumber);
  });
}

// Helper para obtener todos los meses disponibles
export function getAvailableMonths(): string[] {
  return Object.keys(atalayaDatabase).sort();
}

// Helper para obtener todos los artículos activos de todos los meses
export function getAllActiveArticles(): ArticleData[] {
  const allArticles: ArticleData[] = [];
  for (const month in atalayaDatabase) {
    const monthArticles = atalayaDatabase[month].articles.filter(article => {
      if (!article.title || article.title === "") return false;
      return isArticleActive(article.metadata.articleNumber);
    });
    allArticles.push(...monthArticles);
  }
  // Ordenar por número de artículo
  return allArticles.sort((a, b) => a.metadata.articleNumber - b.metadata.articleNumber);
}

// Helper para obtener el total de artículos en toda la base de datos
export function getTotalArticles(): number {
  let total = 0;
  for (const month in atalayaDatabase) {
    total += atalayaDatabase[month].articles.length;
  }
  return total;
}
