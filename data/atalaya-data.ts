import { AtalayaDatabase, ArticleData } from '@/types/atalaya';
import { isArticleActive } from './articles-config';

// Base de datos completa con todos los artículos organizados por mes
export const atalayaDatabase: AtalayaDatabase = {
  "2025-08": {
    articles: [
      // Artículo 34 (Placeholder - agregar contenido después)
      {
        metadata: {
          articleNumber: 34,
          week: "27 Oct - 2 Nov",
          month: "Agosto",
          year: 2025
        },
        song: "",
        title: "",
        biblicalText: "",
        theme: "",
        questions: [],
        paragraphs: [],
        reviewQuestions: [],
        finalSong: ""
      },

      // Artículo 36 (Placeholder)
      {
        metadata: {
          articleNumber: 36,
          week: "11-17 Nov",
          month: "Agosto",
          year: 2025
        },
        song: "",
        title: "",
        biblicalText: "",
        theme: "",
        questions: [],
        paragraphs: [],
        reviewQuestions: [],
        finalSong: ""
      },

      // Artículo 37 (Placeholder)
      {
        metadata: {
          articleNumber: 37,
          week: "18-24 Nov",
          month: "Agosto",
          year: 2025
        },
        song: "",
        title: "",
        biblicalText: "",
        theme: "",
        questions: [],
        paragraphs: [],
        reviewQuestions: [],
        finalSong: ""
      },

      // Artículo 38 (Placeholder)
      {
        metadata: {
          articleNumber: 38,
          week: "25 Nov - 1 Dic",
          month: "Agosto",
          year: 2025
        },
        song: "",
        title: "",
        biblicalText: "",
        theme: "",
        questions: [],
        paragraphs: [],
        reviewQuestions: [],
        finalSong: ""
      }
    ]
  },

  // ========================================
  // PUEDES AGREGAR TANTOS MESES COMO QUIERAS
  // ========================================

  // Septiembre 2025 - ARTÍCULOS DE ESTUDIO COMPLETOS
  "2025-09": {
    articles: [
      // Artículo 36: "Que llame a los ancianos" (10-16 Nov)
      {
        metadata: {
          articleNumber: 36,
          week: "10-16 Nov",
          month: "Septiembre",
          year: 2025
        },
        song: "Canción 103: Nuestros pastores son un regalo de Dios",
        title: "Que llame a los ancianos",
        biblicalText: "\"Que llame a los ancianos de la congregación\" (SANT. 5:14).",
        theme: "La importancia de pedirles ayuda espiritual a los ancianos cuando la necesitamos.",
        questions: [
          {
            number: "1",
            textEs: "¿Cómo ha demostrado Jehová que quiere mucho a todas sus ovejas?",
            textLSM: "",
            paragraphs: [1],
            answer: "Jehová demostró su amor comprando a sus ovejas con la sangre de Jesús. Además, les encargó a los ancianos que las cuiden con mucho cariño y las protejan de los peligros espirituales.",
            answerBullets: [
              "Jehová compró a sus ovejas con la sangre de Jesús",
              "Encargó a los ancianos el cuidado de las ovejas",
              "Los ancianos deben tratarlas con mucho cariño",
              "Siguen las instrucciones de Jesús, cabeza de la congregación",
              "Dos funciones principales: Animan al rebaño y protegen de los peligros espirituales"
            ],
            flashcards: [
              "Según este párrafo, ¿quién es la cabeza de la congregación?",
              "¿Qué dos funciones principales realizan los ancianos al seguir las instrucciones de Jesús?",
              "¿Cómo te ayuda personalmente saber que Jehová compró a sus ovejas con la sangre de Jesús?"
            ],
            biblicalCards: [
              {
                reference: "Hechos 20:28",
                purpose: "Jehová compró a sus ovejas con la sangre de Jesús",
                text: "Presten atención a sí mismos y a todo el rebaño, en medio del cual el espíritu santo los ha nombrado supervisores para pastorear la congregación de Dios, que él compró con la sangre de su propio Hijo."
              },
              {
                reference: "Isaías 32:1, 2",
                purpose: "Los ancianos protegen y animan al rebaño",
                text: "Miren, un rey reinará por la causa de la justicia, y los príncipes gobernarán por la causa de la justicia. Cada uno será como un escondite contra el viento, como un refugio contra la tormenta de lluvia, como corrientes de agua en tierra seca, como la sombra de una roca pesada en tierra agotada."
              }
            ]
          },
          {
            number: "2",
            textEs: "¿Por quiénes se interesa Jehová en especial?",
            textLSM: "",
            paragraphs: [2],
            readText: "LEE Ezequiel 34:15, 16",
            answer: "Jehová se interesa profundamente por todas sus ovejas, pero tiene especial interés por las que están sufriendo. Utiliza a los ancianos para ayudar a las que están sufriendo en sentido espiritual. Cuando necesitamos ayuda, debemos orar a Dios y también acudir a los pastores y maestros de la congregación.",
            answerBullets: [
              "Jehová se interesa profundamente por todas sus ovejas",
              "Tiene especial interés por las que están sufriendo",
              "Utiliza a los ancianos para ayudar a las que sufren espiritualmente",
              "Dios quiere que le oremos cuando necesitamos ayuda",
              "También debemos acudir a los \"pastores y maestros\" de la congregación",
              "Los ancianos son instrumentos que Jehová usa para cuidarnos"
            ],
            flashcards: [
              {
                question: "Según Ezequiel 34:15, 16, ¿qué tres cosas hace Jehová por sus ovejas que sufren?",
                answer: "Buscar a la perdida, traer de vuelta a la extraviada, y vendar a la herida"
              },
              {
                question: "¿Qué dos acciones debemos tomar cuando necesitamos ayuda espiritual?",
                answer: "Orar a Jehová y acudir a los ancianos de la congregación"
              },
              {
                question: "Según Efesios 4:11, 12, ¿cómo llama la Biblia a los ancianos?",
                answer: "Pastores y maestros"
              }
            ],
            biblicalCards: [
              {
                reference: "Ezequiel 34:15, 16",
                purpose: "Jehová cuida especialmente a sus ovejas que sufren",
                text: "'Yo mismo apacentaré a mis ovejas y yo mismo haré que se echen', dice el Señor Soberano Jehová. 'Buscaré a la oveja perdida, traeré de vuelta a la que se haya extraviado, vendaré a la que esté herida y fortaleceré a la que esté enferma, pero eliminaré a la gorda y a la fuerte. Las apacentaré con justicia'."
              },
              {
                reference: "Efesios 4:11, 12",
                purpose: "Los ancianos son pastores y maestros dados por Dios",
                text: "Y dio algunos como apóstoles, algunos como profetas, algunos como evangelizadores, algunos como pastores y maestros, con el fin de preparar a los santos para la obra de servicio, para edificar el cuerpo de Cristo."
              }
            ],
            reflectionQuestions: [
              "¿Cómo me hace sentir saber que Jehová tiene especial interés por los que sufren?",
              "Si estoy pasando por dificultades espirituales, ¿he pensado en acudir a los ancianos o solo en orar?",
              "¿Qué me impide buscar ayuda de los ancianos cuando la necesito?"
            ],
            practicalApplications: [
              "Esta semana voy a orar a Jehová por cualquier lucha espiritual que esté enfrentando",
              "Si estoy sufriendo espiritualmente, voy a acercarme a un anciano de confianza esta semana",
              "Voy a recordar que los ancianos no son solo para disciplina, sino para ayudarme cuando sufro"
            ]
          },
          {
            number: "3",
            textEs: "¿Por qué este artículo nos beneficiará a todos?",
            textLSM: "",
            paragraphs: [3],
            answer: "Este artículo beneficiará a todos porque responderá tres preguntas importantes: cuándo debemos acudir a los ancianos, por qué debemos hacerlo y cómo nos ayudan. Incluso los que están espiritualmente fuertes se beneficiarán porque aprenderán a valorar más la ayuda que Dios da por medio de los ancianos y sabrán qué hacer si en el futuro necesitan acudir a ellos.",
            answerBullets: [
              "El artículo responde tres preguntas clave sobre los ancianos",
              "Primera pregunta: ¿Cuándo debemos acudir a los ancianos?",
              "Segunda pregunta: ¿Por qué debemos acudir a ellos?",
              "Tercera pregunta: ¿Cómo nos ayudan los ancianos?",
              "Beneficia incluso a quienes están espiritualmente fuertes ahora",
              "Nos enseña a valorar más la ayuda que Dios da por medio de los ancianos",
              "Nos prepara para saber qué hacer si en el futuro necesitamos su ayuda"
            ],
            flashcards: [
              {
                question: "¿Cuáles son las tres preguntas que responde este artículo sobre los ancianos?",
                answer: "Cuándo acudir, por qué hacerlo, y cómo nos ayudan"
              },
              {
                question: "¿Por qué este artículo beneficia incluso a los que están espiritualmente fuertes?",
                answer: "Porque les enseña a valorar más la ayuda de los ancianos y los prepara para el futuro"
              },
              {
                question: "¿Cómo se vale Jehová de los ancianos para ayudarnos espiritualmente?",
                answer: "Los usa como instrumentos para cuidar y ayudar a sus ovejas"
              }
            ],
            reflectionQuestions: [
              "Si estoy espiritualmente fuerte ahora, ¿he pensado en prepararme para saber qué hacer si en el futuro necesito ayuda?",
              "¿Valoro realmente la ayuda que Jehová da por medio de los ancianos, o solo los veo como figuras de autoridad?",
              "¿Estoy dispuesto a aprender de este artículo aunque ahora me sienta fuerte espiritualmente?"
            ],
            practicalApplications: [
              "Voy a leer este artículo con mente abierta, pensando en cómo puede ayudarme ahora o en el futuro",
              "Esta semana voy a reflexionar sobre cómo valoro a los ancianos de mi congregación",
              "Voy a guardar las respuestas a estas tres preguntas para tenerlas presentes cuando las necesite"
            ]
          },
          {
            number: "4",
            textEs: "¿Cómo sabemos que Santiago 5:14-16, 19, 20 se refiere a alguien enfermo en sentido espiritual? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [4],
            section: "CUÁNDO \"LLAMAR\" A LOS ANCIANOS",
            readText: "LEE Santiago 5:14-16, 19, 20",
            answer: "Sabemos que Santiago se refiere a enfermedad espiritual por el contexto. Primero, Santiago no le dice al enfermo que llame a un médico, sino a los ancianos. Segundo, explica que la persona se sana cuando se le perdonan los pecados. Así como acudimos al médico cuando nos enfermamos físicamente, debemos acudir a los ancianos cuando nos enfermamos espiritualmente.",
            answerBullets: [
              "Santiago dice \"que llame a los ancianos\", no a un médico",
              "La sanación se relaciona con el perdón de pecados",
              "El contexto muestra que habla de enfermedad espiritual",
              "Hay muchos parecidos entre enfermedad física y espiritual",
              "Con el médico: explicamos síntomas y seguimos instrucciones",
              "Con los ancianos: explicamos la situación y seguimos consejos bíblicos",
              "Ambos casos requieren que busquemos ayuda activamente"
            ],
            flashcards: [
              {
                question: "Según el párrafo, ¿cuáles son las dos evidencias del contexto que demuestran que Santiago habla de enfermedad espiritual?",
                answer: "No dice que llame a un médico sino a los ancianos, y la sanación se da cuando se perdonan los pecados"
              },
              {
                question: "¿Qué tres pasos seguimos cuando vamos al médico que son similares a acudir a un anciano?",
                answer: "Acudimos a él, explicamos nuestros síntomas/situación, y seguimos sus instrucciones/consejos"
              },
              {
                question: "¿Por qué es importante que Santiago diga \"que llame\" en lugar de \"que espere\" a los ancianos?",
                answer: "Porque muestra que la iniciativa debe ser nuestra, debemos buscar activamente la ayuda"
              }
            ],
            biblicalCards: [
              {
                reference: "Santiago 5:14-16",
                purpose: "Los ancianos ayudan a sanar espiritualmente",
                text: "¿Hay alguien enfermo entre ustedes? Que llame a los ancianos de la congregación, y que ellos oren por él y lo unjan con aceite en el nombre de Jehová. Y la oración de fe hará que el enfermo se ponga bien, y Jehová lo levantará. Además, si ha cometido pecados, se le perdonarán. Por lo tanto, confiésense abiertamente sus pecados unos a otros y oren unos por otros, para que sean sanados. La súplica del justo, cuando está en acción, tiene mucho poder."
              },
              {
                reference: "Santiago 5:19, 20",
                purpose: "Ayudar al pecador salva su alma",
                text: "Hermanos míos, si alguno de ustedes se ha extraviado de la verdad y otro lo hace volver, sepan esto: el que hace volver a un pecador del error de su camino salvará su alma de la muerte y cubrirá una multitud de pecados."
              }
            ],
            reflectionQuestions: [
              "¿Me cuesta tanto acudir a los ancianos como me costaría no ir al médico si estuviera muy enfermo físicamente?",
              "Cuando tengo problemas espirituales, ¿espero a que los ancianos me busquen o tomo la iniciativa de llamarlos como dice Santiago?",
              "¿Veo a los ancianos como \"médicos espirituales\" que quieren ayudarme, o solo como figuras que disciplinan?"
            ],
            practicalApplications: [
              "Esta semana voy a reflexionar si tengo algún síntoma de \"enfermedad espiritual\" que deba atender antes de que empeore",
              "Si identifico alguna debilidad espiritual, voy a tomar la iniciativa de hablar con un anciano en lugar de esperar",
              "Voy a cambiar mi perspectiva: la próxima vez que necesite ayuda espiritual, voy a recordar que es como ir al médico, algo normal y necesario"
            ]
          },
          {
            number: "5",
            textEs: "¿Cómo podemos revisar nuestro estado de salud espiritual?",
            textLSM: "",
            paragraphs: [5],
            answer: "Podemos revisar nuestra salud espiritual comparando el entusiasmo que tenemos ahora con el que teníamos cuando nos bautizamos. Debemos hacernos preguntas sobre nuestra lectura y meditación de la Biblia, asistencia y preparación para las reuniones, importancia de la predicación, y el lugar que ocupan las diversiones y cosas materiales en nuestra vida.",
            answerBullets: [
              "No debemos esperar a que la relación con Dios se haya dañado",
              "La Biblia advierte que podemos engañarnos sobre nuestra condición espiritual",
              "Los cristianos de Sardis creían estar saludables pero no era así",
              "Comparar el entusiasmo actual con el que teníamos al bautizarnos",
              "Pregunta clave 1: ¿Disfruto como antes al leer la Biblia y meditar?",
              "Pregunta clave 2: ¿Sigo asistiendo y preparándome bien para las reuniones?",
              "Pregunta clave 3: ¿Sigue siendo la predicación igual de importante?",
              "Pregunta clave 4: ¿Han ganado protagonismo las diversiones y cosas materiales?",
              "Las respuestas indican si hay debilidades que pueden empeorar",
              "Si no logramos corregir la debilidad solos, debemos acudir a los ancianos"
            ],
            flashcards: [
              {
                question: "Según Santiago 1:22, ¿de qué manera podemos engañarnos a nosotros mismos espiritualmente?",
                answer: "Pensando que nuestra amistad con Jehová está mejor de lo que realmente está"
              },
              {
                question: "¿Qué les dijo Jesús a los cristianos de Sardis en Apocalipsis 3:1, 2 sobre su condición espiritual?",
                answer: "Que creían estar saludables pero no era así, tenían nombre de que vivían pero estaban muertos"
              },
              {
                question: "El párrafo menciona 4 preguntas de autoevaluación espiritual, ¿cuáles son?",
                answer: "Disfrute al leer la Biblia, asistencia y preparación para reuniones, importancia de la predicación, y lugar de diversiones/cosas materiales"
              },
              {
                question: "¿Cuál es el punto de comparación que sugiere el párrafo para evaluar nuestra salud espiritual?",
                answer: "El entusiasmo que teníamos cuando nos bautizamos comparado con el actual"
              }
            ],
            biblicalCards: [
              {
                reference: "Santiago 1:22",
                purpose: "Podemos engañarnos sobre nuestra condición espiritual",
                text: "Sin embargo, háganse hacedores de la palabra y no solo oyentes, engañándose a sí mismos con falsos razonamientos."
              },
              {
                reference: "Apocalipsis 3:1, 2",
                purpose: "Los cristianos de Sardis creían estar bien pero no era así",
                text: "Esto es lo que dice el que tiene los siete espíritus de Dios y las siete estrellas: 'Conozco tus obras, que tienes nombre de que vives, pero estás muerto. Despierta y fortalece las cosas que quedan, que están a punto de morir, porque no he hallado tus obras plenamente realizadas delante de mi Dios'."
              },
              {
                reference: "Apocalipsis 2:4, 5",
                purpose: "Jesús advierte sobre perder el primer amor",
                text: "Sin embargo, tengo esto contra ti: que has dejado el amor que tenías al principio. Así que recuerda de dónde has caído, y arrepiéntete y haz las obras que hacías al principio. De lo contrario, vendré a ti y quitaré tu candelabro de su lugar, a menos que te arrepientas."
              }
            ],
            reflectionQuestions: [
              "Si comparo mi entusiasmo espiritual actual con el que tenía cuando me bauticé, ¿qué diferencias noto y por qué han ocurrido?",
              "¿He sido honesto conmigo mismo al responder estas cuatro preguntas de autoevaluación, o he intentado justificar mi condición actual?",
              "Si identifico que algo ha cambiado negativamente en mi vida espiritual, ¿estoy dispuesto a buscar ayuda antes de que empeore?"
            ],
            practicalApplications: [
              "Esta semana voy a tomarme 30 minutos para responder honestamente las 4 preguntas de autoevaluación y anotar mis respuestas",
              "Voy a buscar una foto o recuerdo de mi bautismo y reflexionar sobre el entusiasmo que tenía en ese momento comparado con ahora",
              "Si descubro alguna debilidad al hacer esta autoevaluación, voy a hablar con un anciano esta misma semana antes de que empeore"
            ]
          },
          {
            number: "6",
            textEs: "¿Qué debe hacer alguien que ha cometido un pecado grave?",
            textLSM: "",
            paragraphs: [6],
            answer: "Alguien que ha cometido un pecado grave debe hablar con un anciano de inmediato, porque necesita ayuda espiritual para reparar su amistad con Jehová. El arrepentimiento genuino no es solo sentir pesar, sino demostrarlo con \"obras\" concretas, y una de esas obras esenciales es confesar el pecado grave a los ancianos para recibir la ayuda necesaria.",
            answerBullets: [
              "Si alguien comete un pecado grave que podría llevarlo a ser expulsado, tiene que hablar con un anciano",
              "La persona necesita ayuda para reparar su amistad con Dios",
              "Jehová solo nos perdonará si demostramos con \"obras\" que estamos verdaderamente arrepentidos (Hechos 26:20)",
              "Confesarles a los ancianos que hemos cometido un pecado grave es una de esas \"obras\" requeridas",
              "La expulsión es una posibilidad real si no se busca ayuda a tiempo (1 Corintios 5:11-13)",
              "El arrepentimiento genuino va más allá del simple pesar emocional",
              "Los ancianos están capacitados para brindar ayuda espiritual en momentos de crisis moral",
              "La confesión a los ancianos no es opcional cuando se trata de pecados graves",
              "Buscar ayuda pronto demuestra humildad y deseo genuino de restaurar la relación con Jehová",
              "El silencio o la demora en buscar ayuda puede poner en peligro nuestra salvación"
            ],
            flashcards: [
              {
                question: "Según 1 Corintios 5:11-13, ¿qué puede suceder si alguien comete un pecado grave y no busca ayuda?",
                answer: "Podría ser sacado de la congregación (expulsado)"
              },
              {
                question: "¿Qué dice Hechos 26:20 que debemos hacer para que Jehová nos perdone?",
                answer: "Demostrar con \"obras\" que estamos realmente arrepentidos"
              },
              {
                question: "¿Por qué necesita ayuda alguien que ha cometido un pecado grave?",
                answer: "Para reparar su amistad con Dios"
              },
              {
                question: "¿Cuál es una de las \"obras\" esenciales que debe hacer alguien que cometió un pecado grave?",
                answer: "Confesarles a los ancianos que ha cometido el pecado grave"
              }
            ],
            biblicalCards: [
              {
                reference: "1 Corintios 5:11-13",
                purpose: "Muestra que los pecados graves pueden llevar a ser expulsado de la congregación",
                text: "Pero ahora les escribo que dejen de juntarse con cualquiera que, llamándose hermano, sea fornicador, codicioso, idólatra, injuriador, borracho o ladrón, y ni siquiera coman con tal hombre. Pues, ¿acaso tengo algo que ver con juzgar a los de afuera? ¿No juzgan ustedes a los de adentro, mientras Dios juzga a los de afuera? 'Saquen al hombre malvado de entre ustedes.'"
              },
              {
                reference: "Hechos 26:20",
                purpose: "Explica que el verdadero arrepentimiento se demuestra con obras",
                text: "Sino que, tanto a los de Damasco primero como a los de Jerusalén, y por todo el país de Judea, y también a las naciones, les enseñé que se arrepintieran y se volvieran a Dios haciendo obras propias del arrepentimiento."
              },
              {
                reference: "Santiago 5:14, 15",
                purpose: "Muestra el papel de los ancianos en ayudar espiritualmente a los que están en problemas",
                text: "¿Hay alguno enfermo entre ustedes? Que llame a los ancianos de la congregación, y que ellos oren por él, aplicándole aceite en el nombre de Jehová. Y la oración de fe sanará al indispuesto, y Jehová lo levantará. También, si hubiera cometido pecados, se le perdonará."
              }
            ],
            reflectionQuestions: [
              "Si yo cometiera un pecado grave, ¿tendría el valor de hablar inmediatamente con un anciano, o me sentiría tentado a ocultarlo esperando que \"se me pase\" el sentimiento de culpa?",
              "¿Realmente creo que los ancianos están ahí para ayudarme y no solo para juzgarme? ¿Qué me impediría buscar su ayuda si la necesitara?",
              "¿Entiendo claramente la diferencia entre sentir pesar por un pecado y demostrar arrepentimiento genuino con \"obras\"? ¿Qué obras concretas demostraría mi arrepentimiento?"
            ],
            practicalApplications: [
              "Voy a cultivar una relación de confianza con al menos un anciano de la congregación ahora, antes de necesitar ayuda urgentemente, para que sea más fácil acudir a él si alguna vez enfrento una crisis espiritual.",
              "Esta semana voy a meditar en Hechos 26:20 y hacer una lista personal de qué \"obras\" concretas demostraría si necesitara arrepentirme de algo grave.",
              "Voy a orar específicamente por tener humildad y valor para buscar ayuda inmediatamente si alguna vez cometo un error grave, en lugar de intentar ocultarlo o manejarlo solo."
            ]
          },
          {
            number: "7",
            textEs: "¿Quiénes necesitan también la ayuda de los ancianos?",
            textLSM: "",
            paragraphs: [7],
            answer: "No solo los que han cometido un pecado grave necesitan ayuda de los ancianos. También los que están débiles espiritualmente deben acudir a ellos. Por ejemplo, si estás luchando contra algún mal deseo y sientes que vas a perder la batalla, un anciano puede escucharte, darte consejos prácticos y recordarte que cuentas con la aprobación de Jehová mientras no cedas.",
            answerBullets: [
              "Los ancianos no solo ayudan a quienes han cometido un pecado grave",
              "**También ayudan a quienes están débiles espiritualmente**",
              "Ejemplos de luchas: drogas, pornografía o vida inmoral del pasado",
              "No estás solo en tu lucha contra los malos deseos",
              "Puedes desahogarte con un anciano que te escuchará con atención",
              "Los ancianos te darán consejos prácticos",
              "Te recordarán que cuentas con la aprobación de Jehová mientras no cedas a los malos deseos",
              "Si te sientes desanimado por seguir teniendo malos deseos, los ancianos pueden ayudarte",
              "Tener malos deseos demuestra que te tomas en serio tu amistad con Jehová",
              "También demuestra que no confías en tus propias fuerzas"
            ],
            flashcards: [
              {
                question: "Según este párrafo, ¿qué tres luchas específicas del pasado pueden hacer más dura la batalla contra los malos deseos?",
                answer: "Drogas, pornografía o vida inmoral"
              },
              {
                question: "Según Eclesiastés 4:12, ¿cómo te ayuda tener a un anciano de tu lado cuando luchas contra malos deseos?",
                answer: "Un cordón triple no se rompe tan rápido - no estás solo"
              },
              {
                question: "Si te sientes desanimado porque sigues teniendo malos deseos, ¿qué dos cosas positivas demuestran esos deseos según este párrafo?",
                answer: "Que te tomas en serio tu amistad con Jehová y que no confías en tus propias fuerzas"
              },
              {
                question: "¿Cómo te ayuda personalmente saber que seguirás contando con la aprobación de Jehová mientras no cedas a los malos deseos?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Hechos 20:35",
                purpose: "Los ancianos ayudan a los débiles espiritualmente",
                text: "En todas las cosas les he mostrado que trabajando duro de este modo tienen que ayudar a los que son débiles, y tienen que tener presentes las palabras del Señor Jesús, cuando él mismo dijo: 'Hay más felicidad en dar que en recibir'."
              },
              {
                reference: "Eclesiastés 4:12",
                purpose: "No estás solo en tu lucha contra malos deseos",
                text: "Y, si alguien pudiera vencer a uno solo, dos juntos podrían hacer frente a él. Y un cordón triple no se rompe tan rápido."
              },
              {
                reference: "1 Corintios 10:12",
                purpose: "No confiar en nuestras propias fuerzas es bueno",
                text: "Así que el que piensa que está en pie, tenga cuidado de no caer."
              }
            ],
            reflectionQuestions: [
              "Si estoy luchando contra algún mal deseo del pasado, ¿he considerado desahogarme con un anciano de confianza?",
              "¿Cómo me hace sentir saber que seguir teniendo malos deseos no significa que he perdido la aprobación de Jehová?",
              "¿Qué me impide buscar ayuda de los ancianos cuando me siento débil espiritualmente: vergüenza, orgullo o pensar que puedo solo?"
            ],
            practicalApplications: [
              "Esta semana voy a identificar cualquier lucha espiritual que tenga y considerar seriamente hablar con un anciano sobre ella",
              "Voy a recordar que tener malos deseos no me descalifica, sino que muestra que me tomo en serio mi amistad con Jehová",
              "Si me siento débil espiritualmente, voy a desahogarme con un anciano esta semana en lugar de luchar solo"
            ]
          },
          {
            number: "8",
            textEs: "¿Qué tipo de errores no es necesario contarles a los ancianos?",
            textLSM: "",
            paragraphs: [8],
            answer: "No es necesario contarles a los ancianos cada error que cometemos. Por ejemplo, si le dijiste algo hiriente a un hermano o te enojaste mucho, puedes seguir el consejo de Jesús sobre hacer las paces y buscar información en las publicaciones sobre apacibilidad, paciencia y autocontrol. Pero si ves que no has podido solucionar el problema por ti mismo, entonces podrías pedirle ayuda a un anciano.",
            answerBullets: [
              "No es necesario contarles a los ancianos cada error que cometemos",
              "Ejemplo: decir algo hiriente a un hermano o enojarte muchísimo",
              "En lugar de hablar con un anciano, puedes seguir el consejo de Jesús sobre hacer las paces",
              "También puedes buscar información en las publicaciones sobre apacibilidad, paciencia y autocontrol",
              "Si aun así ves que no has podido solucionar el problema, podrías pedirle ayuda a un anciano",
              "Pablo le dijo a un hermano que ayudara a Evodia y a Síntique a resolver sus diferencias",
              "Un anciano puede hacer lo mismo por ti si tienes un problema con otro hermano"
            ],
            flashcards: [
              {
                question: "Según Mateo 5:23, 24, ¿qué tres pasos debes dar si ofendiste a un hermano?",
                answer: "Dejar tu ofrenda, ir primero a hacer las paces, y luego volver a presentar tu ofrenda"
              },
              {
                question: "En Filipenses 4:2, 3, ¿qué dos hermanas tenían diferencias que necesitaban resolver?",
                answer: "Evodia y Síntique"
              },
              {
                question: "¿Cómo te ayuda personalmente saber que hay problemas que puedes resolver tú mismo sin necesidad de involucrar a los ancianos?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 5:23, 24",
                purpose: "Cómo hacer las paces con un hermano",
                text: "Por lo tanto, si estás llevando tu ofrenda al altar y allí recuerdas que tu hermano tiene algo contra ti, deja tu ofrenda allí delante del altar y vete. Primero haz las paces con tu hermano, y luego, cuando vuelvas, presenta tu ofrenda."
              },
              {
                reference: "Filipenses 4:2, 3",
                purpose: "Un anciano puede ayudar a resolver diferencias",
                text: "Le ruego a Evodia y también le ruego a Síntique que se pongan de acuerdo en el Señor. Sí, y a ti también, verdadero compañero, te pido que ayudes a estas mujeres que se han esforzado conmigo promoviendo las buenas noticias junto con Clemente y los demás colaboradores míos, cuyos nombres están en el libro de la vida."
              }
            ],
            reflectionQuestions: [
              "¿Tengo algún problema sin resolver con un hermano que necesito arreglar directamente antes de buscar ayuda de un anciano?",
              "¿Cuándo fue la última vez que busqué información en nuestras publicaciones sobre cómo mejorar una cualidad que me falta?",
              "¿Tiendo a acudir demasiado rápido a los ancianos en lugar de intentar resolver problemas menores por mí mismo?"
            ],
            practicalApplications: [
              "Si tengo algún problema con un hermano, voy a seguir Mateo 5:23, 24 esta semana e ir directamente a hacer las paces",
              "Voy a buscar un artículo en JW Library sobre apacibilidad, paciencia o autocontrol para trabajar en áreas donde necesito mejorar",
              "Antes de acudir a un anciano por un problema, voy a intentar resolverlo yo mismo aplicando principios bíblicos, y solo buscaré ayuda si no lo logro"
            ]
          },
          {
            number: "9",
            textEs: "Aunque nos dé vergüenza hablar con los ancianos, ¿por qué debemos hacerlo? (Proverbios 28:13).",
            textLSM: "",
            paragraphs: [9],
            section: "POR QUÉ \"LLAMAR\" A LOS ANCIANOS",
            readText: "LEE Proverbios 28:13",
            answer: "Debemos superar la vergüenza porque Jehová nos dio a los ancianos específicamente para ayudarnos a estar fuertes y sanos espiritualmente. Al acudir a ellos demostramos que confiamos en Dios y en sus instrucciones. Además, confiamos en que Jehová nos ayudará en nuestra lucha y que, si confesamos y abandonamos nuestros pecados, recibiremos su misericordia y su perdón.",
            answerBullets: [
              "Puede que necesitemos fe y valor para hablar con los ancianos",
              "No debemos dejar que la vergüenza nos impida acudir a ellos",
              "**Jehová nos los ha dado para ayudarnos a estar fuertes y sanos espiritualmente**",
              "Al acudir a ellos demostramos que confiamos en Dios",
              "También demostramos que confiamos en las instrucciones de Dios",
              "Confiamos en que Jehová nos ayudará en nuestra lucha",
              "Si confesamos y abandonamos nuestros pecados, recibiremos su misericordia y su perdón",
              "La vergüenza no debe ser una barrera para buscar ayuda espiritual"
            ],
            flashcards: [
              {
                question: "Según Salmo 94:18, ¿cómo nos ayuda Jehová cuando sentimos que vamos a caer en nuestra lucha espiritual?",
                answer: "Su amor leal nos sigue sosteniendo"
              },
              {
                question: "Según Proverbios 28:13, ¿qué dos acciones específicas debemos tomar con nuestros pecados para recibir misericordia?",
                answer: "Confesarlos y abandonarlos"
              },
              {
                question: "¿Qué dos cosas demostramos cuando acudimos a los ancianos a pesar de sentir vergüenza?",
                answer: "Que confiamos en Dios y en sus instrucciones"
              },
              {
                question: "¿Cómo te ayuda personalmente recordar que Jehová nos dio a los ancianos específicamente para ayudarnos espiritualmente, no para juzgarnos?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 94:18",
                purpose: "Jehová nos sostiene cuando sentimos que vamos a caer",
                text: "Cuando yo decía: 'Mi pie está resbalando', tu amor leal, oh Jehová, me seguía sosteniendo."
              },
              {
                reference: "Proverbios 28:13",
                purpose: "Confesar y abandonar pecados lleva a misericordia",
                text: "El que encubre sus transgresiones no tendrá éxito, pero al que las confiesa y las abandona se le mostrará misericordia."
              }
            ],
            reflectionQuestions: [
              "¿Qué me da más vergüenza: admitir un error a los ancianos o permanecer en una situación que daña mi amistad con Jehová?",
              "Si la vergüenza me impide buscar ayuda, ¿estoy confiando más en mi orgullo que en las instrucciones de Jehová?",
              "¿Cómo cambiaría mi perspectiva si viera a los ancianos como un regalo de Jehová para mi bienestar espiritual y no como jueces?"
            ],
            practicalApplications: [
              "Esta semana voy a meditar en Proverbios 28:13 y recordar que confesar y abandonar pecados lleva a misericordia, no a condenación",
              "Voy a orar específicamente pidiendo fe y valor para superar la vergüenza si necesito hablar con un anciano sobre alguna lucha",
              "Voy a cambiar mi perspectiva sobre los ancianos: no son jueces que me condenarán, sino ayudantes que Jehová me ha dado para mi bienestar espiritual"
            ]
          },
          {
            number: "10",
            textEs: "¿Qué puede pasar si intentamos esconder nuestros pecados?",
            textLSM: "",
            paragraphs: [10],
            answer: "Si intentamos esconder nuestros pecados, podemos perjudicarnos de muchas maneras. El ejemplo del rey David muestra que cuando ocultó sus errores, sufrió espiritual, emocional e incluso físicamente. Los problemas espirituales son como lesiones físicas: si no se tratan, van de mal en peor. Por eso Jehová nos invita a acudir a los ancianos y arreglar las cosas.",
            answerBullets: [
              "Pedirles ayuda a los ancianos nos beneficia de muchas maneras",
              "Si intentamos esconder nuestros pecados, podemos perjudicarnos",
              "El rey David ocultó sus errores",
              "**David sufrió de tres maneras: espiritualmente, emocionalmente e incluso físicamente**",
              "Los problemas espirituales son como lesiones físicas",
              "Si no se tratan, van de mal en peor",
              "Jehová sabe que los problemas empeoran si no se tratan",
              "Jehová nos invita a acudir a los ancianos",
              "Jehová nos invita a \"arreglar las cosas\""
            ],
            flashcards: [
              {
                question: "Según Salmo 32:3-5, ¿de qué tres maneras específicas sufrió David cuando ocultó sus errores?",
                answer: "Espiritualmente, emocionalmente e incluso físicamente"
              },
              {
                question: "¿Con qué compara este párrafo los problemas espirituales no tratados, y qué les pasa si no se atienden?",
                answer: "Con lesiones físicas, y van de mal en peor"
              },
              {
                question: "Según Isaías 1:5, 6, 18, ¿qué invitación específica nos hace Jehová cuando tenemos problemas espirituales?",
                answer: "Vengan ahora y arreglemos las cosas entre nosotros"
              },
              {
                question: "¿Cómo te ayuda personalmente la comparación de que los problemas espirituales son como lesiones físicas que empeoran si no se tratan?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 32:3-5",
                purpose: "David sufrió al ocultar sus pecados",
                text: "Cuando me quedaba callado, mis huesos se iban consumiendo por mi gemido todo el día. Porque de día y de noche tu mano pesaba sobre mí. Mis fuerzas se agotaban como en el calor seco del verano. Por fin te confesé mi pecado, y no encubrí mi error. Dije: 'Confesaré mis transgresiones a Jehová'. Y tú perdonaste el error de mis pecados."
              },
              {
                reference: "Isaías 1:5, 6, 18",
                purpose: "Jehová nos invita a arreglar las cosas",
                text: "¿Por qué seguir recibiendo más golpes? ¿Por qué siguen rebelándose? Toda la cabeza está enferma y todo el corazón desfallece. Desde la planta del pie hasta la cabeza no hay en él nada sano, solo heridas, moretones y llagas supurantes. No han sido tratadas ni vendadas, y no se les ha aplicado aceite. 'Vengan ahora y arreglemos las cosas entre nosotros', dice Jehová."
              }
            ],
            reflectionQuestions: [
              "¿He experimentado alguna vez sufrimiento espiritual, emocional o incluso físico al intentar ocultar algo? ¿Qué me enseñó esa experiencia?",
              "Si un problema espiritual sin tratar es como una lesión física que empeora, ¿qué 'lesión espiritual' necesito tratar ahora antes de que empeore?",
              "¿Por qué a veces prefiero sufrir en silencio como David en lugar de aceptar la invitación de Jehová de 'arreglar las cosas'?"
            ],
            practicalApplications: [
              "Esta semana voy a meditar en la experiencia de David en Salmo 32:3-5 y reflexionar sobre las graves consecuencias físicas, emocionales y espirituales de ocultar pecados",
              "Si tengo algún problema espiritual 'sin tratar' como una lesión sin atender, voy a acudir a un anciano esta semana antes de que empeore",
              "Voy a aceptar la invitación personal de Jehová en Isaías 1:18 de 'arreglar las cosas' y no dejar que el orgullo o la vergüenza me impidan buscar ayuda"
            ]
          },
          {
            number: "11",
            textEs: "¿Qué más puede pasar cuando se esconden pecados graves?",
            textLSM: "",
            paragraphs: [11],
            answer: "Cuando se esconden pecados graves, no solo nos perjudicamos a nosotros mismos, sino también a otras personas. Podemos provocar que el espíritu de Dios deje de fluir libremente en la congregación y que la paz se vea amenazada. Además, si sabemos de un pecado grave de otro hermano y lo ocultamos, nos hacemos culpables también. Por eso, nuestro amor a Jehová debe impulsarnos a ayudar a esa persona para que hable con los ancianos.",
            answerBullets: [
              "Si escondemos nuestros pecados, también podemos perjudicar a otras personas",
              "**Podemos provocar que el espíritu de Dios deje de fluir libremente en la congregación**",
              "La paz de la congregación se puede ver amenazada",
              "Si nos enteramos de que alguien ha cometido un pecado grave, debemos aconsejarle que hable con los ancianos",
              "Ocultar el pecado de otro nos haría culpables a nosotros también",
              "Nuestro amor a Jehová debe impulsarnos a dar el paso de contar la verdad",
              "Así contribuiremos a mantener limpia la congregación",
              "Así ayudamos a que la persona recupere su buena relación con Dios"
            ],
            flashcards: [
              {
                question: "Según Efesios 4:30, ¿qué dos cosas pueden pasar en la congregación cuando se esconden pecados graves?",
                answer: "El espíritu de Dios deja de fluir libremente y la paz se ve amenazada"
              },
              {
                question: "Según Levítico 5:1, ¿qué nos pasa si sabemos del pecado grave de otro hermano y lo ocultamos?",
                answer: "Nos hacemos culpables también"
              },
              {
                question: "¿Qué dos beneficios específicos se logran cuando ayudamos a alguien a hablar con los ancianos sobre un pecado grave?",
                answer: "Mantener limpia la congregación y ayudar a que la persona recupere su relación con Dios"
              },
              {
                question: "¿Cómo te ayuda personalmente entender que tu amor a Jehová debe ser más fuerte que una lealtad mal entendida hacia un hermano que ha pecado?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Efesios 4:30",
                purpose: "Ocultar pecados entristece el espíritu santo",
                text: "Además, no entristezcan el espíritu santo de Dios, con el que ustedes fueron sellados para el día de la liberación por rescate."
              },
              {
                reference: "Levítico 5:1",
                purpose: "Ocultar el pecado de otro nos hace culpables",
                text: "'Si alguien peca porque, aunque es testigo, se niega a declarar sobre algo que ha visto u oído, tendrá que responder por su error."
              }
            ],
            reflectionQuestions: [
              "Si sé que alguien ha cometido un pecado grave, ¿soy más leal a esa persona o a Jehová y al bienestar de la congregación?",
              "¿Cómo me afecta personalmente saber que ocultar el pecado de otro me hace culpable también ante Jehová?",
              "¿Entiendo que ayudar a alguien a hablar con los ancianos no es traición ni chisme, sino amor verdadero que busca su recuperación espiritual?"
            ],
            practicalApplications: [
              "Si sé de alguien que ha cometido un pecado grave, voy a aconsejarle con amor esta semana que hable con los ancianos, explicándole que es para su bien y el de la congregación",
              "Voy a meditar en Efesios 4:30 y recordar que mi silencio ante pecados graves puede entristecer el espíritu santo de Jehová en la congregación",
              "Voy a entender que mantener limpia la congregación es responsabilidad de todos, no solo de los ancianos, y actuaré en consecuencia con amor"
            ]
          },
          {
            number: "12",
            textEs: "¿Cómo apoyan los ancianos a los que están débiles en sentido espiritual?",
            textLSM: "",
            paragraphs: [12],
            section: "CÓMO NOS AYUDAN LOS ANCIANOS",
            answer: "Los ancianos apoyan a los débiles haciendo preguntas bien pensadas que ayudan a sacar lo que piensan y sienten. No sacan conclusiones apresuradas, sino que escuchan con atención y se hacen un cuadro completo antes de dar consejo. Ellos saben que pastorear al rebaño toma tiempo y que algunas situaciones no se resuelven con una sola conversación. Podemos facilitarles su labor expresándonos abiertamente, sin preocuparnos si no controlamos perfectamente lo que decimos.",
            answerBullets: [
              "La Biblia les dice a los ancianos que apoyen a los débiles espiritualmente",
              "**Hacen preguntas bien pensadas para ayudarte a sacar lo que piensas y sientes**",
              "Puedes facilitarles su labor expresándote abiertamente",
              "Puede costarte expresarte por tu cultura, personalidad o vergüenza",
              "No te preocupes si no eres capaz de controlar todo lo que dices o cómo lo dices",
              "Los ancianos no sacarán conclusiones apresuradas",
              "Se esforzarán por escucharte con atención",
              "Se harán un cuadro completo antes de darte consejo",
              "Saben que pastorear al rebaño toma tiempo",
              "Saben que algunas situaciones no se resuelven con una sola conversación"
            ],
            flashcards: [
              {
                question: "Según Proverbios 20:5, ¿cómo compara la Biblia los pensamientos del corazón, y qué necesitas para sacarlos?",
                answer: "Como aguas profundas, y necesitas entendimiento para sacarlos"
              },
              {
                question: "Según Proverbios 18:13, ¿qué debe hacer un anciano antes de dar consejo, y qué es si no lo hace?",
                answer: "Debe oír el asunto completo, de lo contrario es una tontería y una humillación"
              },
              {
                question: "Según Job 6:3, ¿por qué las palabras de Job fueron imprudentes cuando estaba sufriendo?",
                answer: "Porque su sufrimiento pesaba más que la arena de los mares"
              },
              {
                question: "¿Cómo te ayuda personalmente saber que los ancianos entienden que algunas situaciones requieren varias conversaciones y no se resuelven de inmediato?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "1 Tesalonicenses 5:14",
                purpose: "Los ancianos deben apoyar a los débiles",
                text: "Por otro lado, hermanos, los instamos a amonestar a los desordenados, a consolar a los deprimidos, a apoyar a los débiles y a ser pacientes con todos."
              },
              {
                reference: "Proverbios 20:5",
                purpose: "Preguntas bien pensadas sacan lo que piensas",
                text: "El consejo en el corazón del hombre es como aguas profundas, pero el hombre de entendimiento lo saca."
              },
              {
                reference: "Job 6:3",
                purpose: "No controlar lo que dices cuando sufres",
                text: "Ahora pesarían más que la arena de los mares. Por eso he hablado imprudentemente."
              },
              {
                reference: "Proverbios 18:13",
                purpose: "Escuchar antes de sacar conclusiones",
                text: "Responder a un asunto antes de oírlo es una tontería y una humillación."
              }
            ],
            reflectionQuestions: [
              "¿He sido completamente abierto con los ancianos cuando he necesitado ayuda, o he guardado información por vergüenza o miedo a ser juzgado?",
              "¿Cómo me hace sentir saber que los ancianos no sacarán conclusiones apresuradas sino que me escucharán con paciencia y atención?",
              "¿Entiendo que expresar lo que pienso y siento sin filtros, incluso si mis palabras no son perfectas, puede ser parte del proceso de sanación espiritual?"
            ],
            practicalApplications: [
              "Si necesito hablar con un anciano, voy a prepararme mentalmente para expresarme abiertamente esta semana, sin guardar información por vergüenza o miedo",
              "Voy a confiar en que los ancianos se tomarán el tiempo necesario para entenderme completamente y no me juzgarán apresuradamente",
              "No voy a esperar que mi situación se resuelva en una sola conversación; voy a ser paciente, confiar en el proceso de pastoreo y estar dispuesto a tener varias conversaciones si es necesario"
            ]
          },
          {
            number: "13",
            textEs: "¿Qué más harán los ancianos para ayudarnos? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [13],
            answer: "Los ancianos procurarán no hacer nada que te haga sentir más culpable. En cambio, orarán por ti, y esas oraciones pueden tener un \"efecto poderoso\" en tu ánimo. También te aplicarán \"aceite en el nombre de Jehová\", que es la verdad de la Palabra de Dios, usando con habilidad la Biblia para aliviarte, consolarte y ayudarte a recuperar tu relación con Jehová. Por medio de ellos oirás la voz de Jehová diciéndote: \"Este es el camino. Anda en él\".",
            answerBullets: [
              "Los ancianos procurarán no hacer nada que te haga sentir más culpable",
              "Orarán por ti",
              "Esas oraciones pueden tener un \"efecto poderoso\" en tu ánimo",
              "Te ayudarán aplicándote \"aceite en el nombre de Jehová\"",
              "**Este \"aceite\" es la verdad de la Palabra de Dios**",
              "Usarán con habilidad la Biblia para aliviarte",
              "Usarán con habilidad la Biblia para consolarte",
              "Usarán con habilidad la Biblia para ayudarte a recuperar tu relación con Jehová",
              "Sus consejos bíblicos te darán las fuerzas para seguir haciendo lo correcto",
              "Por medio de ellos oirás la voz de Jehová diciéndote: \"Este es el camino. Anda en él\""
            ],
            flashcards: [
              {
                question: "Según Santiago 5:14-16, ¿qué representa el 'aceite en el nombre de Jehová' que los ancianos aplican cuando ayudan espiritualmente?",
                answer: "La verdad de la Palabra de Dios"
              },
              {
                question: "Según Isaías 57:18, ¿qué tres cosas específicas hace Jehová por medio de los ancianos cuando usan su Palabra?",
                answer: "Sanar, guiar y dar pleno consuelo"
              },
              {
                question: "Según Isaías 30:21, ¿qué mensaje específico oirás por medio de los ancianos cuando te están guiando espiritualmente?",
                answer: "Este es el camino. Anda en él"
              },
              {
                question: "¿Cómo te ayuda personalmente saber que los ancianos orarán por ti y que esas oraciones pueden tener un 'efecto poderoso' en tu ánimo?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Santiago 5:14-16",
                purpose: "Aplicar aceite espiritual (la verdad de Dios)",
                text: "¿Hay alguien enfermo entre ustedes? Que llame a los ancianos de la congregación, y que ellos oren por él y le apliquen aceite en el nombre de Jehová. Y la oración de fe hará que el enfermo se ponga bien, y Jehová lo levantará. Además, si ha cometido pecados, se le perdonará. Por lo tanto, confiesen abiertamente sus pecados unos a otros y oren unos por otros, para que sean sanados. La súplica del justo, cuando está en acción, tiene mucho poder."
              },
              {
                reference: "Isaías 57:18",
                purpose: "Aliviar, consolar y recuperar",
                text: "He visto sus caminos, pero lo sanaré. Lo guiaré y le daré pleno consuelo, a él y a los que están de duelo por él."
              },
              {
                reference: "Isaías 30:21",
                purpose: "Oír la voz de Jehová por medio de los ancianos",
                text: "Y tus propios oídos oirán una palabra detrás de ti que dice: 'Este es el camino. Anda en él', en caso de que ustedes vayan a la derecha o en caso de que vayan a la izquierda."
              }
            ],
            reflectionQuestions: [
              "¿He experimentado alguna vez el 'efecto poderoso' de las oraciones de los ancianos en mi ánimo cuando he pasado por dificultades?",
              "¿Cómo me ayuda saber que el objetivo de los ancianos no es hacerme sentir más culpable, sino aliviarme, consolarme y ayudarme a recuperarme?",
              "¿Puedo ver a los ancianos como instrumentos por medio de los cuales Jehová me habla, me guía y me dice: 'Este es el camino. Anda en él'?"
            ],
            practicalApplications: [
              "Esta semana voy a pedirle específicamente a un anciano que ore por mí si estoy pasando por alguna dificultad espiritual, confiando en el 'efecto poderoso' de esas oraciones",
              "Voy a meditar en Isaías 30:21 y recordar que cuando los ancianos me aconsejan con la Biblia, es Jehová quien me está diciendo: 'Este es el camino. Anda en él'",
              "Voy a ver los consejos bíblicos de los ancianos no como críticas que me hacen sentir peor, sino como 'aceite' sanador que Jehová aplica para mi recuperación y alivio espiritual"
            ]
          },
          {
            number: "14",
            textEs: "Según Gálatas 6:1, ¿cómo ayudan los ancianos a quien da \"un paso en falso\"? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [14],
            readText: "LEE Gálatas 6:1",
            answer: "Los ancianos ayudan a quien da \"un paso en falso\" corrigiéndolo \"con espíritu apacible\", impulsados por el amor. La palabra griega para \"corregir\" significa reajustar, como cuando un médico recoloca un hueso dislocado causando el mínimo dolor posible. Los ancianos tratan al hermano con mucha bondad y compasión para no causarle más dolor. También se vigilan a sí mismos, siendo humildes y no tratando al hermano con actitud crítica o superior.",
            answerBullets: [
              "Dar \"un paso en falso\" significa no actuar de acuerdo con las normas de Dios",
              "Puede ser un simple error de juicio o una grave violación",
              "El amor impulsa a los ancianos a corregir",
              "Corrigen \"con espíritu apacible\"",
              "**La palabra \"corregir\" significa reajustar, como recolocar un hueso dislocado**",
              "Como un médico que recoloca un hueso causando el mínimo dolor posible",
              "Tratan de corregir con mucha bondad para no causar más dolor",
              "Cada anciano debe \"vigilarse a sí mismo\" cuando aconseja",
              "Los ancianos también son imperfectos y pueden dar pasos en falso",
              "No tratan al hermano con actitud crítica o superior",
              "Se esfuerzan por ser humildes",
              "Muestran compasión"
            ],
            flashcards: [
              {
                question: "Según Gálatas 6:1, ¿con qué espíritu específico deben los ancianos corregir a quien da un paso en falso?",
                answer: "Con espíritu apacible"
              },
              {
                question: "¿Con qué acción médica específica compara este párrafo el trabajo de 'corregir' o 'reajustar' a un hermano?",
                answer: "Recolocar un hueso dislocado para evitar una lesión permanente"
              },
              {
                question: "Según Gálatas 6:1, ¿qué debe hacer cada anciano consigo mismo cuando aconseja a otros, y por qué?",
                answer: "Vigilarse a sí mismo, porque también es imperfecto y puede dar pasos en falso"
              },
              {
                question: "¿Cómo te ayuda personalmente la comparación de que corregir es como recolocar un hueso dislocado con el mínimo dolor posible?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Gálatas 6:1",
                purpose: "Corregir con espíritu apacible y vigilarse",
                text: "Hermanos, aunque un hombre dé un paso en falso antes de darse cuenta, ustedes, los que tienen cualidades espirituales, traten de corregir a ese hombre con espíritu apacible. Pero vigílate a ti mismo para que tú también no seas tentado."
              },
              {
                reference: "1 Pedro 3:8",
                purpose: "Ser humilde y mostrar compasión",
                text: "Por último, todos ustedes sean de una misma mente, mostrando compasión, teniendo cariño fraternal, siendo tiernos en sus sentimientos y humildes en su manera de pensar."
              }
            ],
            reflectionQuestions: [
              "Si alguna vez he necesitado corrección, ¿he visto a los ancianos como médicos espirituales que me reajustan con cuidado y amor, o como jueces críticos?",
              "¿Cómo me ayuda saber que los ancianos también son imperfectos y pueden dar pasos en falso, igual que yo, y por eso deben vigilarse a sí mismos?",
              "¿Puedo confiar en que los ancianos me tratarán con bondad, humildad y compasión en lugar de con actitud crítica o sintiéndose superiores?"
            ],
            practicalApplications: [
              "Si alguna vez me corrigen los ancianos, voy a recordar que su objetivo es 'reajustarme' espiritualmente con el mínimo dolor posible, como un médico cuida a su paciente, no lastimarme más",
              "Voy a apreciar la humildad de los ancianos que se vigilan a sí mismos cuando me aconsejan, sabiendo que también son imperfectos y vulnerables",
              "Si necesito corrección, voy a enfocarme en el amor y la compasión detrás de la corrección, no en el dolor temporal del momento, confiando en que es para evitar una lesión espiritual permanente"
            ]
          },
          {
            number: "15",
            textEs: "¿Qué podemos hacer si tenemos un problema?",
            textLSM: "",
            paragraphs: [15],
            answer: "Si tenemos un problema, podemos acudir a cualquier anciano de la congregación porque podemos confiar en ellos. Ellos saben que no deben revelar asuntos confidenciales y han sido capacitados para basar sus consejos en la Biblia en lugar de en sus opiniones personales. Aunque tienen personalidades diferentes y algunos tienen más experiencia que otros, todos están preparados para ayudarnos a llevar nuestras cargas. Sin embargo, no debemos ir de anciano en anciano buscando que nos digan lo que queremos oír.",
            answerBullets: [
              "Podemos confiar en los ancianos de la congregación",
              "Ellos saben que no deben revelar asuntos confidenciales",
              "Han recibido capacitación para basar sus consejos en la Biblia, no en opiniones personales",
              "Siguen pendientes de ayudarnos a llevar nuestras cargas",
              "Los ancianos tienen personalidades diferentes",
              "Algunos tienen más experiencia que otros",
              "**Podemos hablar con cualquiera de ellos si tenemos un problema**",
              "No debemos ir de anciano en anciano pidiendo consejo hasta que uno nos diga lo que queremos oír",
              "No queremos que \"nos regalen los oídos\"",
              "Preferimos aprender la \"enseñanza sana\" de la Palabra de Dios",
              "Un anciano puede preguntar si ya hablaste con otros ancianos",
              "Por modestia, un anciano puede pedir la opinión de otro anciano"
            ],
            flashcards: [
              {
                question: "Según Proverbios 11:13, ¿qué característica específica de los ancianos nos da confianza para hablar con ellos sobre asuntos personales?",
                answer: "Son dignos de confianza y guardan secretos"
              },
              {
                question: "Según Gálatas 6:2, ¿qué responsabilidad continua tienen los ancianos hacia nosotros cuando tenemos problemas?",
                answer: "Seguir llevando nuestras cargas"
              },
              {
                question: "Según 2 Timoteo 4:3, ¿qué actitud incorrecta debemos evitar cuando buscamos consejo de los ancianos?",
                answer: "Acumular maestros para que nos regalen los oídos en lugar de aceptar la enseñanza sana"
              },
              {
                question: "Según Proverbios 13:10, ¿qué cualidad impulsa a un anciano a pedir la opinión de otro anciano?",
                answer: "La modestia o humildad"
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 11:13",
                purpose: "Los ancianos no revelan asuntos confidenciales",
                text: "El que anda chismeando revela información confidencial, pero el que es digno de confianza guarda un secreto."
              },
              {
                reference: "Gálatas 6:2",
                purpose: "Ayudar a llevar las cargas",
                text: "Sigan llevando las cargas los unos de los otros, y así cumplan la ley del Cristo."
              },
              {
                reference: "2 Timoteo 4:3",
                purpose: "No buscar que nos regalen los oídos",
                text: "Porque habrá un período en que no soportarán la enseñanza sana, sino que según sus propios deseos acumularán maestros para sí mismos, para que les regalen los oídos."
              },
              {
                reference: "Proverbios 13:10",
                purpose: "La modestia impulsa a buscar consejo",
                text: "El orgullo solo lleva a peleas, pero la sabiduría está con los que aceptan consejo."
              }
            ],
            reflectionQuestions: [
              "Cuando busco consejo de los ancianos, ¿estoy buscando honestamente la 'enseñanza sana' de la Biblia o solo quiero que me digan lo que me hace sentir mejor?",
              "¿Confío plenamente en que los ancianos mantendrán la confidencialidad de mis asuntos privados, o ese temor infundado me impide buscar ayuda cuando la necesito?",
              "¿Aprecio que los ancianos tengan personalidades diferentes, viendo eso como una ventaja que me permite conectar mejor con diferentes personas, en lugar de verlo como un problema?"
            ],
            practicalApplications: [
              "Si tengo un problema esta semana, voy a acudir con plena confianza a un anciano, sabiendo que mantendrá la confidencialidad y me dará consejo basado en la Biblia, no en opiniones personales",
              "Voy a comprometer mi corazón desde ahora a aceptar la 'enseñanza sana' de la Biblia aunque no sea lo que quiero oír, en lugar de buscar ancianos que 'me regalen los oídos'",
              "Voy a apreciar que los ancianos tienen personalidades y experiencias diferentes, reconociendo que puedo hablar con cualquiera de ellos porque todos han sido capacitados para ayudarme"
            ]
          },
          {
            number: "16",
            textEs: "¿Qué responsabilidad tenemos?",
            textLSM: "",
            paragraphs: [16],
            section: "QUÉ RESPONSABILIDAD TENEMOS CADA UNO",
            answer: "Cada uno de nosotros tenemos la responsabilidad de demostrarle a Jehová cada día, con lo que decimos y hacemos, que lo amamos y queremos agradarle. Los ancianos nos cuidan y dan consejos, pero no nos dicen lo que tenemos que hacer. Ellos usan la Biblia para ayudarnos a entender cómo ve Jehová los asuntos, y luego dejan que tomemos nuestra propia decisión. Esto nos permite entrenar nuestra \"capacidad de discernimiento\".",
            answerBullets: [
              "Los ancianos nos cuidan y nos dan consejos",
              "Pero no nos dicen lo que tenemos que hacer",
              "**Cada uno tenemos la responsabilidad de demostrarle a Jehová cada día que lo amamos**",
              "Lo demostramos con lo que decimos y hacemos",
              "Queremos agradarle",
              "Renderemos cuentas a Dios",
              "Él nos ayudará a tomar buenas decisiones",
              "Él nos ayudará a serle fieles",
              "Los ancianos usan la Biblia para ayudarnos a entender cómo ve Jehová los asuntos",
              "Luego dejan que tomemos nuestra propia decisión",
              "Esto nos permite entrenar nuestra \"capacidad de discernimiento\""
            ],
            flashcards: [
              {
                question: "Según Romanos 14:12, ¿ante quién tenemos que rendir cuentas de nuestras decisiones espirituales?",
                answer: "Ante Dios"
              },
              {
                question: "Según Hebreos 5:14, ¿qué capacidad entrenamos cuando tomamos nuestras propias decisiones después de entender los principios bíblicos?",
                answer: "La capacidad de discernimiento"
              },
              {
                question: "¿Qué dos cosas usan los ancianos para ayudarnos, y qué dejan que hagamos después?",
                answer: "Usan la Biblia para ayudarnos a entender cómo ve Jehová los asuntos, y luego dejan que tomemos nuestra propia decisión"
              },
              {
                question: "¿Cómo te ayuda personalmente entender que los ancianos no te dicen qué hacer, sino que te ayudan a entender los principios bíblicos para que tú decidas?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Romanos 14:12",
                purpose: "Renderemos cuentas a Dios",
                text: "Así que cada uno de nosotros rendirá cuentas de sí mismo a Dios."
              },
              {
                reference: "Hebreos 5:14",
                purpose: "Entrenar la capacidad de discernimiento",
                text: "Pero el alimento sólido es para las personas maduras, para los que tienen la capacidad de discernimiento entrenada por el uso para distinguir tanto lo correcto como lo incorrecto."
              }
            ],
            reflectionQuestions: [
              "¿Asumo la plena responsabilidad de mis propias decisiones espirituales, o espero que los ancianos me digan exactamente qué hacer en cada situación?",
              "¿Estoy entrenando activamente mi 'capacidad de discernimiento' al tomar decisiones basadas en principios bíblicos, o prefiero que otros decidan por mí para no asumir responsabilidad?",
              "¿Demuestro realmente cada día con lo que digo y hago que amo a Jehová y quiero agradarle, sabiendo que renderé cuentas directamente a él?"
            ],
            practicalApplications: [
              "Esta semana voy a tomar una decisión importante usando principios bíblicos que entienda, recordando que renderé cuentas a Jehová, no a los ancianos",
              "Voy a entrenar mi 'capacidad de discernimiento' estudiando cómo ve Jehová los asuntos y aplicándolo a situaciones reales, en lugar de esperar que siempre me digan exactamente qué hacer",
              "Cada día voy a demostrar conscientemente con mis palabras y acciones que amo a Jehová y quiero agradarle, asumiendo mi responsabilidad personal ante él"
            ]
          },
          {
            number: "17",
            textEs: "¿A qué debemos estar decididos?",
            textLSM: "",
            paragraphs: [17],
            answer: "Debemos estar decididos a aprovechar al máximo el regalo que Jehová nos ha dado por medio de los ancianos. Jehová cumplió su promesa de darnos pastores que actúan de acuerdo con su voluntad y nos alimentan con conocimiento y entendimiento. Por eso, si estamos débiles o enfermos en sentido espiritual, no debemos dudar en \"llamar\" a los ancianos para pedirles ayuda. Es un privilegio ser ovejas de Jehová y contar con Jesús como \"el pastor excelente\" y con los ancianos como pastores de la congregación.",
            answerBullets: [
              "Es un privilegio ser ovejas de Jehová",
              "Jehová envió a Jesús, \"el pastor excelente\", para rescatarnos",
              "Jesús nos dio la oportunidad de vivir para siempre",
              "Jehová cumplió su promesa de darnos pastores (ancianos)",
              "Estos pastores actúan de acuerdo con su voluntad",
              "Nos alimentan con conocimiento y entendimiento",
              "**Si estamos débiles o enfermos espiritualmente, no debemos dudar en \"llamar\" a los ancianos**",
              "Debemos estar decididos a aprovechar al máximo este regalo de Jehová",
              "Los ancianos son un regalo que Jehová nos ha dado"
            ],
            flashcards: [
              {
                question: "Según Juan 10:11, ¿cómo llama la Biblia a Jesús en relación con su cuidado por las ovejas?",
                answer: "El pastor excelente"
              },
              {
                question: "Según Jeremías 3:15, ¿con qué dos cosas específicas alimentan los pastores (ancianos) que Jehová nos da?",
                answer: "Con conocimiento y entendimiento"
              },
              {
                question: "¿Cuál es la decisión específica a la que nos insta el párrafo final del artículo?",
                answer: "Estar decididos a aprovechar al máximo el regalo de los ancianos que Jehová nos ha dado"
              },
              {
                question: "¿Cómo te ayuda personalmente ver a los ancianos como un 'regalo' que Jehová nos ha dado en lugar de verlos de otra manera?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 10:11",
                purpose: "Jesús es el pastor excelente que nos rescató",
                text: "Yo soy el pastor excelente. El pastor excelente entrega su vida por las ovejas."
              },
              {
                reference: "Jeremías 3:15",
                purpose: "Pastores que alimentan con conocimiento",
                text: "Y les daré pastores que actúen de acuerdo con mi voluntad, y ellos los alimentarán con conocimiento y entendimiento."
              }
            ],
            reflectionQuestions: [
              "¿Veo realmente a los ancianos como un 'regalo' de Jehová que debo aprovechar, o los veo como una carga, una amenaza o algo opcional?",
              "Si estoy débil o enfermo espiritualmente en este momento, ¿estoy decidido a no dudar en 'llamar' a los ancianos como dice Santiago 5:14, o sigo resistiéndome por orgullo, vergüenza o desconfianza?",
              "¿Aprecio profundamente el privilegio de ser una oveja de Jehová con Jesús como mi pastor excelente que dio su vida por mí y los ancianos como pastores de la congregación?"
            ],
            practicalApplications: [
              "Esta semana voy a agradecer específicamente a Jehová en oración por el regalo de los ancianos, cambiando mi perspectiva sobre ellos si he sido negativo o desconfiado",
              "Voy a estar firmemente decidido desde hoy a 'llamar' a los ancianos sin dudarlo si alguna vez estoy débil o enfermo espiritualmente, sin dejar que el orgullo, la vergüenza o el temor me lo impidan",
              "Voy a aprovechar al máximo este regalo buscando consejo y ayuda de los ancianos cuando lo necesite, recordando que actúan de acuerdo con la voluntad de Jehová y me alimentan con conocimiento y entendimiento bíblico"
            ]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "JEHOVÁ quiere mucho a todas sus ovejas. Las compró con la sangre de Jesús y les encargó a los ancianos de las congregaciones que las cuiden (Hech. 20:28). Dios quiere que las traten con mucho cariño. Y ellos, siguiendo las instrucciones de Jesús —que es la cabeza de la congregación—, animan al rebaño y lo protegen de los peligros espirituales (Is. 32:1, 2)."
          },
          {
            number: 2,
            content: "Jehová se interesa profundamente por todas sus ovejas, pero en especial por las que sufren. Él utiliza a los ancianos para ayudar a las que están sufriendo en sentido espiritual (lea Ezequiel 34:15, 16). Entonces, ¿qué debemos hacer si necesitamos ayuda? Dios quiere que le oremos, pero también que acudamos a los \"pastores y maestros\" de la congregación (Efes. 4:11, 12)."
          },
          {
            number: 3,
            content: "En este artículo hablaremos de cómo se vale Jehová de los ancianos para ayudarnos en sentido espiritual. Responderemos estas preguntas: ¿cuándo debemos acudir a los ancianos?, ¿por qué debemos hacerlo? y ¿cómo nos ayudan ellos? Este análisis también beneficiará a quienes ahora están espiritualmente fuertes, pues hará que todos valoremos más la ayuda que Dios nos da por medio de los ancianos y nos enseñará qué hacer si en el futuro tenemos que acudir a ellos."
          },
          {
            number: 4,
            content: "El discípulo Santiago explicó cómo se vale Jehová de los ancianos para ayudarnos. Escribió: \"¿Hay alguien enfermo entre ustedes? Que llame a los ancianos de la congregación\" (lea Santiago 5:14-16, 19, 20). Aquí Santiago estaba hablando de alguien enfermo en sentido espiritual. ¿Cómo lo sabemos? Por el contexto. Por un lado, no le dice al enfermo que llame a un médico, sino a los ancianos. Por otro, explica que la persona enferma se sana cuando se le perdonan los pecados. Lo cierto es que hay muchos parecidos entre una enfermedad física y una espiritual. Cuando nos enfermamos, acudimos al médico, le explicamos nuestros síntomas y seguimos sus instrucciones. De manera parecida, cuando nos enfermamos espiritualmente, deberíamos acudir a un anciano, explicarle nuestra situación y seguir sus consejos bíblicos.",
            image: "https://i.imgur.com/7XIZRnj.png",
            imageCaption: "Cuando nos enfermamos espiritualmente, deberíamos acudir a un anciano. (Vea el párrafo 4)."
          },
          {
            number: 5,
            content: "El capítulo 5 de Santiago nos anima a pedirles ayuda a los ancianos cuando notamos que tenemos un problema de salud espiritual. Pero no hay por qué esperar a que nuestra relación con Dios se haya dañado; sin duda, es bueno pedirles ayuda antes de que eso suceda. Y debemos tener cuidado, pues la Biblia nos advierte que podemos engañarnos pensando que nuestra amistad con Jehová está mejor de lo que realmente está (Sant. 1:22). Eso fue lo que les pasó a algunos cristianos de Sardis: creían que estaban saludables, pero Jesús les dijo que no era así (Apoc. 3:1, 2). ¿Cómo podemos revisar nuestro estado de salud espiritual? Una forma es comparando el entusiasmo que tenemos ahora con el que teníamos cuando nos bautizamos (Apoc. 2:4, 5). Podemos preguntarnos: \"¿Disfruto como antes al leer la Biblia y meditar en ella? ¿Sigo asistiendo a todas las reuniones y preparándome bien para ellas? ¿Sigue siendo la predicación igual de importante para mí? ¿Han ganado protagonismo en mi vida las diversiones y las cosas materiales?\". Las respuestas a estas preguntas indicarán si tenemos una debilidad que puede empeorar si no la tratamos. Si no logramos corregirla por nosotros mismos o si ya nos ha llevado a hacer algo que Jehová desaprueba, debemos acudir a los ancianos."
          },
          {
            number: 6,
            content: "Claro está, si alguien comete un pecado grave que pudiera llevarlo a ser sacado de la congregación, tiene que hablar con un anciano (1 Cor. 5:11-13). Esa persona necesita ayuda para reparar su amistad con Dios. Jehová solo nos perdonará si demostramos con \"obras\" que estamos realmente arrepentidos (Hech. 26:20). Y una de esas obras es confesarles a los ancianos que hemos cometido un pecado grave."
          },
          {
            number: 7,
            content: "Los ancianos no solo ayudan a quienes han cometido un pecado grave. También están ahí para quienes están débiles espiritualmente (Hech. 20:35). Supongamos que estás luchando contra algún mal deseo y sientes que vas a perder la batalla. Quizás esa lucha se te haga especialmente dura si antes de conocer la verdad consumías drogas, veías pornografía o llevabas una vida inmoral. Lo bueno es que no estás solo en tu lucha. Puedes desahogarte con un anciano que sabes que te escuchará con atención. Seguro que te dará consejos prácticos y te recordará que seguirás contando con la aprobación de Jehová siempre y cuando no cedas a los malos deseos (Ecl. 4:12). Si te sientes desanimado porque sigues teniendo malos deseos, los ancianos pueden recordarte que eso demuestra que te tomas en serio tu amistad con Jehová y que no confías en tus propias fuerzas (1 Cor. 10:12)."
          },
          {
            number: 8,
            content: "No es necesario contarles a los ancianos cada error que cometemos. Por ejemplo, imaginemos que le dijiste algo hiriente a un hermano e incluso te enojaste muchísimo. En lugar de hablar con un anciano, podrías seguir el consejo de Jesús sobre cómo hacer las paces (Mat. 5:23, 24). También podrías buscar información en nuestras publicaciones sobre cómo tener más apacibilidad, paciencia y autocontrol. Pero, si aun así ves que no has podido solucionar el problema, quizás podrías pedirle ayuda a un anciano. En la carta que les escribió a los filipenses, el apóstol Pablo le dijo a un hermano de la congregación que ayudara a Evodia y a Síntique a resolver sus diferencias. Un anciano de tu congregación puede hacer lo mismo por ti (Filip. 4:2, 3)."
          },
          {
            number: 9,
            content: "Si sentimos que vamos a perder la batalla contra los malos deseos o si hemos cometido un pecado grave, puede que necesitemos fe y valor para hablar con los ancianos. Pero no debemos dejar que la vergüenza nos impida acudir a ellos. ¿Por qué no? Recordemos que Jehová nos los ha dado para que nos ayuden a estar fuertes y sanos espiritualmente. Así que al acudir a ellos demostramos que confiamos en Dios y en sus instrucciones. Confiamos en que Jehová nos ayudará en nuestra lucha (Sal. 94:18). Y confiamos en que, si confesamos y abandonamos nuestros pecados, recibiremos su misericordia y su perdón (lea Proverbios 28:13)."
          },
          {
            number: 10,
            content: "Como hemos visto, pedirles ayuda a los ancianos nos beneficia de muchas maneras. En cambio, si intentamos esconder nuestros pecados, podemos perjudicarnos. Pensemos en el rey David. Cuando ocultó sus errores, sufrió espiritual, emocional e incluso físicamente (Sal. 32:3-5). Los problemas espirituales son como las lesiones físicas: si no se tratan, van de mal en peor. Jehová lo sabe y por eso nos invita a que acudamos a los ancianos y \"arreglemos las cosas\" (Is. 1:5, 6, 18)."
          },
          {
            number: 11,
            content: "Si escondemos nuestros pecados, también podemos perjudicar a otras personas. Podemos provocar que en la congregación el espíritu de Dios deje de fluir libremente y la paz se vea amenazada (Efes. 4:30). Por otra parte, si nos enteramos de que alguien de la congregación ha cometido un pecado grave, debemos aconsejarle que hable con los ancianos. No olvidemos que ocultarlo nos haría culpables a nosotros también (Lev. 5:1). Nuestro amor a Jehová debe impulsarnos a dar el paso de contar la verdad. Así contribuiremos a mantener limpia la congregación y a que la persona recupere su buena relación con Dios."
          },
          {
            number: 12,
            content: "La Biblia les dice a los ancianos que apoyen a los que están débiles en sentido espiritual (1 Tes. 5:14). Si has dañado de algún modo tu relación con Jehová, ellos tal vez te hagan preguntas bien pensadas para ayudarte a sacar lo que piensas y sientes (Prov. 20:5). Puedes facilitarles su labor expresándote abiertamente aunque te cueste hacerlo debido a tu cultura, tu personalidad o la vergüenza que sientes por lo que pasó. No te preocupes si no eres capaz de controlar todo lo que dices o cómo lo dices (Job 6:3). Los ancianos no sacarán conclusiones apresuradas, sino que se esforzarán por escucharte con atención y por hacerse un cuadro completo antes de darte cualquier consejo (Prov. 18:13). Ellos saben que pastorear al rebaño toma tiempo y que algunas situaciones no se pueden resolver con una sola conversación."
          },
          {
            number: 13,
            content: "Los ancianos procurarán no hacer nada que te haga sentir todavía más culpable. Más bien, orarán por ti. Tal vez te sorprenda el \"efecto poderoso\" que esas oraciones pueden tener en tu ánimo. Ellos también te ayudarán aplicándote \"aceite en el nombre de Jehová\" (Sant. 5:14-16). Este \"aceite\" es la verdad de la Palabra de Dios. Así que usarán con habilidad la Biblia para aliviarte, consolarte y ayudarte a recuperar tu relación con Jehová (Is. 57:18). Sus consejos bíblicos te darán las fuerzas para seguir haciendo lo correcto. Por medio de ellos oirás la voz de Jehová diciéndote: \"Este es el camino. Anda en él\" (Is. 30:21).",
            image: "https://i.imgur.com/XfbY8NQ.png",
            imageCaption: "Los ancianos usan con habilidad la Biblia para ayudarnos a recuperar nuestra relación con Jehová. (Vea los párrafos 13 y 14)."
          },
          {
            number: 14,
            content: "(Lea Gálatas 6:1). Dar \"un paso en falso\" significa no actuar de acuerdo con las justas normas de Dios. Ese paso en falso puede ser un simple error de juicio o una grave violación de la ley de Dios. El amor impulsa a los ancianos a tratar de \"corregir al hombre con espíritu apacible\". La palabra griega que se traduce \"corregir\" (o \"reajustar\", según la nota) también puede referirse a la acción de recolocar un hueso dislocado para evitar una lesión permanente. Tal como un buen médico tiene mucho cuidado para recolocar el hueso causando el mínimo dolor posible al paciente, los ancianos tratan de corregir al hermano con mucha bondad para no causarle más dolor todavía. Además, la Biblia le dice a cada anciano que al aconsejar a otros \"se vigile a sí mismo\", pues también es imperfecto y puede dar pasos en falso. Así que, en vez de tratar al hermano con una actitud crítica o como si se creyeran superiores, los ancianos se esfuerzan por ser humildes y mostrar compasión (1 Ped. 3:8).",
            image: "https://i.imgur.com/XfbY8NQ.png",
            imageCaption: "Los ancianos corrigen al hermano con mucha bondad y compasión. (Vea el párrafo 14)."
          },
          {
            number: 15,
            content: "Podemos confiar en los ancianos de la congregación. Ellos saben que no deben revelar los asuntos confidenciales, y han recibido capacitación para que basen sus consejos en la Biblia en vez de en sus opiniones personales y para que sigan pendientes de ayudarnos a llevar nuestras cargas (Prov. 11:13; Gál. 6:2). Es cierto que los ancianos tienen personalidades diferentes y algunos tienen más experiencia que otros, pero si tenemos un problema podemos hablar con cualquiera de ellos. Claro, no iremos de anciano en anciano pidiendo consejo hasta que alguno nos diga lo que queremos oír. No queremos ser como los que prefieren que \"les regalen los oídos\" en lugar de aprender \"la enseñanza sana\" de la Palabra de Dios (2 Tim. 4:3). Cuando le contamos un problema a un anciano, tal vez nos pregunte si ya hemos hablado del tema con otros ancianos y qué consejo nos han dado. Y la modestia tal vez lo impulse a pedirle la opinión a otro anciano (Prov. 13:10)."
          },
          {
            number: 16,
            content: "Los ancianos nos cuidan y nos dan consejos, pero no nos dicen lo que tenemos que hacer. Cada uno de nosotros tenemos la responsabilidad de demostrarle a Jehová cada día con lo que decimos y hacemos que lo amamos y queremos agradarle (Rom. 14:12). Él nos ayudará a tomar buenas decisiones y a serle fieles. Por eso, los ancianos usan la Biblia para ayudarnos a entender cómo ve Jehová los asuntos y luego dejan que tomemos nuestra propia decisión. Eso nos permite entrenar nuestra \"capacidad de discernimiento\" (Heb. 5:14)."
          },
          {
            number: 17,
            content: "¡Qué privilegio tan bonito es ser ovejas de Jehová! Él envió a Jesús, \"el pastor excelente\", para rescatarnos y darnos la oportunidad de vivir para siempre (Juan 10:11). Además, por medio de los ancianos de las congregaciones ha cumplido esta promesa: \"Les daré pastores que actúen de acuerdo con mi voluntad, y ellos los alimentarán con conocimiento y entendimiento\" (Jer. 3:15). Así pues, si estamos débiles o enfermos en sentido espiritual, no dudemos en \"llamar\" a los ancianos para pedirles ayuda. Estemos decididos a aprovechar al máximo este regalo que nos ha dado Jehová."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Cuándo debemos \"llamar\" a los ancianos?",
            answer: "Debemos llamar a los ancianos cuando estamos enfermos espiritualmente, cuando pasamos por situaciones difíciles que afectan nuestra espiritualidad, cuando sentimos que nuestra fe se está debilitando o cuando necesitamos ánimo y fortaleza espiritual. También cuando enfrentamos tentaciones fuertes o cuando hemos cometido un pecado grave y necesitamos ayuda para recuperarnos.",
            answerBullets: [
              "**Situaciones para llamar a los ancianos:**",
              "Cuando estamos enfermos espiritualmente",
              "Cuando nuestra fe se está debilitando",
              "Cuando pasamos por situaciones difíciles",
              "Cuando necesitamos ánimo y fortaleza espiritual",
              "Cuando enfrentamos tentaciones fuertes",
              "Cuando hemos cometido un pecado grave",
              "Cuando necesitamos ayuda para recuperarnos espiritualmente",
              "Cuando nos sentimos desanimados o deprimidos",
              "Cuando tenemos dudas o preguntas profundas"
            ]
          },
          {
            question: "¿Por qué debemos \"llamar\" a los ancianos?",
            answer: "Porque Jehová los ha designado como pastores para cuidar de sus ovejas con amor. Ellos siguen las instrucciones de Jesús, el pastor excelente, y tienen la responsabilidad de alimentarnos espiritualmente y protegernos de los peligros. Además, Jehová cumple su promesa de darnos pastores que actúan según su voluntad y nos alimentan con conocimiento y entendimiento.",
            answerBullets: [
              "**Razones para llamar a los ancianos:**",
              "Jehová los ha designado como pastores",
              "Siguen las instrucciones de Jesús, el pastor excelente",
              "Tienen la responsabilidad de cuidar las ovejas",
              "Son un regalo de Jehová para ayudarnos",
              "Actúan según la voluntad de Dios",
              "Nos alimentan con conocimiento y entendimiento",
              "Tienen experiencia y sabiduría bíblica",
              "Muestran el amor de Jehová por nosotros",
              "Cumplen la promesa de Jeremías 3:15"
            ]
          },
          {
            question: "¿Cómo nos ayudan los ancianos?",
            answer: "Los ancianos nos ayudan orando con nosotros y por nosotros, animándonos con textos bíblicos específicos para nuestra situación, dándonos consejos prácticos basados en las Escrituras y su experiencia. También nos protegen de peligros espirituales, nos fortalecen cuando estamos débiles, nos corrigen con amor cuando es necesario y nos muestran el cariño que Jehová siente por nosotros.",
            answerBullets: [
              "**Formas en que los ancianos nos ayudan:**",
              "Oran con nosotros y por nosotros",
              "Nos animan con textos bíblicos específicos",
              "Dan consejos prácticos basados en las Escrituras",
              "Comparten su experiencia personal",
              "Nos protegen de peligros espirituales",
              "Nos fortalecen cuando estamos débiles",
              "Nos corrigen con amor cuando es necesario",
              "Muestran el cariño de Jehová por nosotros",
              "Nos visitan cuando estamos enfermos",
              "Nos ayudan a recuperar el gozo"
            ]
          }
        ],
        finalSong: "Canción 31: Camina siempre con Jehová"
      },

      // Artículo 37: "La mejor manera de reaccionar ante las injusticias" (17-23 Nov)
      {
        metadata: {
          articleNumber: 37,
          week: "17-23 Nov",
          month: "Septiembre",
          year: 2025
        },
        song: "Canción 114: Demostremos paciencia",
        title: "La mejor manera de reaccionar ante las injusticias",
        biblicalText: "\"Él esperaba justicia, pero resultó que hubo injusticia\" (IS. 5:7).",
        theme: "Cómo nos enseña el ejemplo de Jesús a reaccionar ante las injusticias como Jehová quiere.",
        questions: [
          {
            number: "1, 2",
            textEs: "¿Cómo reaccionan muchas personas ante las injusticias, y qué es posible que nos preguntemos?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: "Muchas personas reaccionan con indignación y se unen a movimientos sociales, campañas o manifestaciones para intentar cambiar las cosas. Sin embargo, los cristianos nos preguntamos cómo debemos reaccionar ante estas situaciones y si hay algo que podamos hacer ahora mismo para mejorar la situación, sabiendo que el Reino de Dios es la solución definitiva.",
            answerBullets: [
              "Muchas personas se indignan al ver injusticias",
              "Se unen a movimientos sociales para cambiar las cosas",
              "Apoyan campañas, manifestaciones y líderes políticos",
              "Los cristianos sabemos que no debemos ser parte del mundo",
              "Nos duele y enoja ver a personas sufriendo",
              "**Nos preguntamos: ¿Cómo debo reaccionar?**",
              "**Nos preguntamos: ¿Hay algo que pueda hacer ahora?**"
            ],
            flashcards: [
              {
                question: "Según el párrafo 1, ¿cuáles son las 5 razones mencionadas por las que se trata injustamente a las personas?",
                answer: "Posición económica, sexo, cultura, lugar de origen y raza"
              },
              {
                question: "¿Qué dos tipos de personas menciona el párrafo 1 que toman decisiones egoístas que dañan al planeta?",
                answer: "Gobernantes y empresarios"
              },
              {
                question: "Según Juan 17:16, ¿cuál es la postura fundamental del cristiano ante los movimientos del mundo?",
                answer: "No ser parte del mundo"
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 17:16",
                purpose: "Los cristianos no son parte del mundo",
                text: "Ellos no son parte del mundo, igual que yo no soy parte del mundo."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Por qué es natural que nos sintamos indignados ante las injusticias? (Isaías 5:7).",
            textLSM: "",
            paragraphs: [3],
            section: "JEHOVÁ Y JESÚS ODIAN LAS INJUSTICIAS",
            readText: "LEE Isaías 5:7",
            answer: "Es natural sentirnos indignados porque fuimos creados a la imagen de Jehová, y él \"ama la rectitud y la justicia\". Dios nunca comete injusticias y odia ver que otros las cometan. Por ejemplo, en tiempos de Isaías, Jehová escuchó el \"grito de angustia\" de los israelitas maltratados y castigó a quienes desobedecían su Ley tratando injustamente a los demás.",
            answerBullets: [
              "Fuimos creados a la imagen de Jehová",
              "**Jehová \"ama la rectitud y la justicia\"**",
              "Dios nunca comete injusticias",
              "No quiere que nadie cometa injusticias",
              "Jehová escuchó el \"grito de angustia\" de los israelitas",
              "Castigó a quienes trataban injustamente a los demás",
              "Es natural que nos sintamos como nuestro Creador"
            ],
            flashcards: [
              {
                question: "Según Deuteronomio 32:4, ¿qué cualidad de Jehová garantiza que nunca cometerá una injusticia?",
                answer: "Es la Roca y todas sus obras son perfectas"
              },
              {
                question: "Según Miqueas 6:8, ¿qué tres cosas pide Jehová de nosotros en relación con la justicia?",
                answer: "Practicar la justicia, amar la lealtad y andar con modestia junto a Dios"
              },
              {
                question: "En Isaías 5:7, ¿qué esperaba Jehová de su pueblo y qué encontró en su lugar?",
                answer: "Esperaba justicia pero hubo injusticia; esperaba rectitud pero hubo un grito de angustia"
              }
            ],
            biblicalCards: [
              {
                reference: "Isaías 5:7",
                purpose: "Jehová esperaba justicia de su pueblo",
                text: "Porque la viña de Jehová de los ejércitos es la casa de Israel; los hombres de Judá son la plantación que él amaba. Él esperaba justicia, pero resultó que hubo injusticia; esperaba rectitud, pero resultó que hubo un grito de angustia."
              },
              {
                reference: "Salmo 33:5",
                purpose: "Jehová ama la rectitud y la justicia",
                text: "Él ama la rectitud y la justicia. La tierra está llena del amor leal de Jehová."
              },
              {
                reference: "Deuteronomio 32:3, 4",
                purpose: "Todas las obras de Dios son perfectas",
                text: "Porque yo proclamaré el nombre de Jehová. ¡Engrandezcan a nuestro Dios! La Roca, todas sus obras son perfectas, porque todos sus caminos son justicia. Dios de fidelidad, que nunca comete injusticias; él es justo y recto."
              },
              {
                reference: "Miqueas 6:8",
                purpose: "Jehová pide que practiquemos la justicia",
                text: "Él te ha dicho, oh hombre, lo que es bueno. ¿Y qué es lo que Jehová pide de ti? ¡Solo que practiques la justicia, ames la lealtad y andes con modestia junto a tu Dios!"
              },
              {
                reference: "Zacarías 7:9",
                purpose: "Juzgar con verdadera justicia",
                text: "Esto es lo que dice Jehová de los ejércitos: 'Juzguen con verdadera justicia y traten a los demás con amor leal y misericordia'."
              }
            ]
          },
          {
            number: "4",
            textEs: "¿Qué nos enseña sobre Jesús el relato del hombre que tenía una mano paralizada?",
            textLSM: "",
            paragraphs: [4],
            answer: "Nos enseña que Jesús, al igual que Jehová, ama la justicia y odia las injusticias. Él se compadeció del hombre y lo curó, pero se sintió muy dolido e indignado al ver la dureza de corazón de los líderes religiosos, a quienes les importaba más cumplir sus reglas inflexibles que ayudar a alguien que sufría.",
            answerBullets: [
              "Jesús ama la justicia y odia las injusticias",
              "Siente lo mismo que Jehová",
              "Se compadeció del hombre y lo curó",
              "Los líderes religiosos se enojaron",
              "A ellos les importaban más sus reglas inflexibles",
              "Jesús se sintió **\"muy dolido\"** por su dureza de corazón",
              "Su reacción combina compasión por la víctima e indignación por la injusticia"
            ],
            flashcards: [
              {
                question: "Según Marcos 3:5, ¿qué dos sentimientos experimentó Jesús al ver la actitud de los fariseos?",
                answer: "Indignación y profunda tristeza (dolor)"
              },
              {
                question: "¿Qué era más importante para los líderes religiosos que ayudar a un hombre que sufría?",
                answer: "Cumplir con su interpretación inflexible de la ley del sábado"
              },
              {
                question: "¿Qué nos enseña este relato sobre cómo ve Jesús la falta de compasión disfrazada de religiosidad?",
                answer: "Que le causa dolor y lo considera dureza de corazón"
              }
            ],
            biblicalCards: [
              {
                reference: "Marcos 3:1-6",
                purpose: "Jesús sana en sábado y se duele por la dureza de corazón",
                text: "Entró otra vez en una sinagoga, y había allí un hombre que tenía una mano paralizada. Así que ellos estaban observando a Jesús con atención para ver si curaba al hombre en sábado y tener de qué acusarlo. Él le dijo al hombre que tenía la mano paralizada: 'Levántate y ponte ahí en medio'. Luego les dijo a ellos: '¿Qué está permitido en sábado: hacer un buen acto, o uno malo? ¿Salvar una vida, o matarla?'. Pero ellos se quedaron callados. Entonces él los miró a todos con indignación, muy dolido al ver que tenían el corazón tan duro, y le dijo al hombre: 'Extiende la mano'. Él la extendió, y la mano se le curó. En cuanto los fariseos salieron, se pusieron a conspirar con los partidarios de Herodes contra Jesús para matarlo."
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Qué debemos recordar si nos enojamos por una injusticia?",
            textLSM: "",
            paragraphs: [5],
            answer: "Debemos recordar que nuestro enfado, aunque esté justificado, no eliminará la injusticia. Si sentimos ira durante mucho tiempo o no la controlamos, podemos perjudicar nuestra salud emocional y física. Por eso es importante analizar el ejemplo de Jesús para saber cómo debemos reaccionar.",
            answerBullets: [
              "No está mal enojarse por una injusticia (Jehová y Jesús también se enojan)",
              "**Nuestro enfado —aunque esté justificado— no eliminará esa injusticia**",
              "Sentir ira durante mucho tiempo perjudica nuestra salud emocional",
              "No controlar la ira perjudica nuestra salud física",
              "Debemos analizar el ejemplo de Jesús para saber cómo reaccionar"
            ],
            flashcards: [
              {
                question: "Según Efesios 4:26, ¿está mal enojarse cuando vemos una injusticia?",
                answer: "No, no está mal, ya que Jehová y Jesús también se enojan ante las injusticias"
              },
              {
                question: "¿Qué debemos recordar sobre nuestro enfado aunque esté justificado?",
                answer: "Que no eliminará esa injusticia"
              },
              {
                question: "Según Salmo 37:1, 8 y Santiago 1:20, ¿qué puede pasar si sentimos ira durante mucho tiempo o no la controlamos?",
                answer: "Podemos perjudicar nuestra salud emocional y física"
              },
              {
                question: "¿A quién debemos imitar para saber cómo reaccionar ante las injusticias?",
                answer: "A Jesús"
              }
            ],
            biblicalCards: [
              {
                reference: "Efesios 4:26",
                purpose: "No está mal enojarse por una injusticia",
                text: "Cuando se enojen, no pequen. Que no se ponga el sol estando ustedes todavía enojados."
              },
              {
                reference: "Salmo 37:1, 8",
                purpose: "La ira prolongada nos hace daño",
                text: "No te inquietes por los malvados ni envidies a los que hacen el mal... Deja la ira y abandona la furia; no te inquietes, pues eso solo conduce al mal."
              },
              {
                reference: "Santiago 1:20",
                purpose: "La ira del hombre no logra lo que Dios quiere",
                text: "Porque la ira del hombre no produce lo que es justo ante Dios."
              }
            ]
          },
          {
            number: "6",
            textEs: "¿Qué injusticias vio Jesús cuando estuvo en la Tierra?",
            textLSM: "",
            paragraphs: [6],
            section: "CÓMO REACCIONÓ JESÚS ANTE LAS INJUSTICIAS",
            answer: "Jesús vio que los líderes religiosos le hacían la vida imposible a la gente con un sinfín de reglas. También era consciente de lo mal que las autoridades romanas trataban al pueblo. A pesar de ver estas injusticias, no lideró ni apoyó ningún movimiento social a favor del cambio.",
            answerBullets: [
              "Los líderes religiosos le hacían la vida imposible a la gente",
              "Imponían un sinfín de reglas injustas",
              "Las autoridades romanas trataban mal al pueblo",
              "Muchos judíos querían independencia de Roma",
              "Los zelotes estaban dispuestos a combatir por la independencia",
              "**Jesús no lideró ni apoyó ningún movimiento social**",
              "Cuando querían hacerlo rey, se fue enseguida"
            ],
            flashcards: [
              {
                question: "Según Mateo 23:2-4, ¿cómo le hacían la vida imposible los líderes religiosos a la gente?",
                answer: "Con un sinfín de reglas y cargas pesadas que ponían sobre sus hombros"
              },
              {
                question: "Además de los líderes religiosos, ¿qué otro grupo maltrataba al pueblo judío en tiempos de Jesús?",
                answer: "Las autoridades romanas"
              },
              {
                question: "¿Cómo se llamaba el grupo de judíos que estaba dispuesto a combatir por la independencia de Roma?",
                answer: "Los zelotes"
              },
              {
                question: "¿Cuál fue la postura de Jesús frente a los movimientos sociales que buscaban un cambio político o la independencia?",
                answer: "No lideró ni apoyó ningún movimiento social a favor del cambio"
              },
              {
                question: "Según Juan 6:15, ¿qué hizo Jesús cuando se enteró de que la gente quería hacerlo rey?",
                answer: "Se fue enseguida y se retiró a la montaña él solo"
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 23:2-4",
                purpose: "Los líderes religiosos imponían cargas pesadas",
                text: "Los maestros de la Ley y los fariseos se han sentado en el asiento de Moisés. Así que hagan y obedezcan todo lo que ellos les digan, pero no los imiten, porque ellos no practican lo que dicen. Atan cargas pesadas y las ponen sobre los hombros de la gente, pero ellos no las quieren mover ni siquiera con un dedo."
              },
              {
                reference: "Juan 6:15",
                purpose: "Jesús rechazó ser hecho rey",
                text: "Entonces Jesús, al darse cuenta de que estaban a punto de venir y llevárselo a la fuerza para hacerlo rey, se retiró otra vez a la montaña él solo."
              }
            ]
          },
          {
            number: "7, 8",
            textEs: "¿Por qué no intentó Jesús acabar con las injusticias de su tiempo? (Juan 18:36).",
            textLSM: "",
            paragraphs: [7, 8],
            readText: "LEE Juan 18:36",
            answer: "Jesús no intentó acabar con las injusticias porque sabía que los seres humanos no tienen ni el derecho ni la capacidad de gobernarse. Tampoco pueden eliminar las verdaderas causas de las injusticias: Satanás y la imperfección. Jesús sabía que únicamente el Reino de Dios podrá eliminar de raíz estas causas, por eso dedicó su tiempo a predicar las buenas noticias del Reino.",
            answerBullets: [
              "Jesús no participó en asuntos políticos para acabar con las injusticias",
              "Los seres humanos no tienen el derecho ni la capacidad de gobernarse",
              "**Las dos verdaderas causas de las injusticias son: Satanás y la imperfección**",
              "Satanás controla este mundo y hace que la gente sea cruel",
              "La imperfección nos impide actuar siempre de manera justa",
              "**Solo el Reino de Dios puede eliminar de raíz las causas de las injusticias**",
              "Jesús dedicó su tiempo a predicar las buenas noticias del Reino",
              "Les aseguró a quienes tienen \"hambre y sed de justicia\" que las injusticias desaparecerían",
              "El Reino de Dios \"no es parte de este mundo\""
            ],
            flashcards: [
              {
                question: "¿Por qué motivo principal Jesús no participó en los asuntos políticos de su tiempo?",
                answer: "Porque sabía que los seres humanos no tienen ni el derecho ni la capacidad de gobernarse a sí mismos"
              },
              {
                question: "Según el texto, ¿qué dos cosas les faltan a los seres humanos para poder gobernarse?",
                answer: "Les falta derecho y la capacidad"
              },
              {
                question: "¿Qué dos referencias bíblicas se citan para apoyar la idea de que los humanos no pueden gobernarse?",
                answer: "Salmo 146:3 y Jeremías 10:23"
              },
              {
                question: "Además de la incapacidad humana, ¿qué no pueden eliminar los humanos para acabar con la injusticia?",
                answer: "Las verdaderas causas de las injusticias"
              },
              {
                question: "El texto identifica a _____ como la primera causa de las injusticias, ya que controla este mundo.",
                answer: "Satanás"
              },
              {
                question: "¿Cómo usa Satanás su autoridad, según el texto?",
                answer: "La usa para hacer que la gente sea tan cruel como él"
              },
              {
                question: "¿Qué dos versículos se usan para demostrar la influencia de Satanás en el mundo?",
                answer: "Juan 8:44 y Efesios 2:2"
              },
              {
                question: "¿Cuál es la segunda causa de las injusticias que se menciona en el texto?",
                answer: "La imperfección humana"
              },
              {
                question: "Según Eclesiastés 7:20, ¿qué nos impide actuar siempre de manera justa?",
                answer: "La imperfección"
              },
              {
                question: "¿Qué sabía Jesús que era lo único que podría eliminar de raíz las causas de las injusticias?",
                answer: "El Reino de Dios"
              },
              {
                question: "¿Cuál es la mejor manera en la que Jesús decidió usar su tiempo y sus energías?",
                answer: "Predicando y anunciando las buenas noticias del Reino de Dios"
              },
              {
                question: "¿Qué escritura describe la principal actividad de Jesús como la predicación del Reino de Dios?",
                answer: "Lucas 8:1"
              },
              {
                question: "¿A quiénes les aseguró Jesús que la corrupción y las injusticias desaparecerían para siempre?",
                answer: "A quienes tenían \"hambre y sed de justicia\""
              },
              {
                question: "¿Qué referencia bíblica se da para la promesa a los que tienen \"hambre y sed de justicia\"?",
                answer: "Mateo 5:6"
              },
              {
                question: "¿Mediante qué se conseguirá la eliminación de las injusticias, en contraste con los gobiernos humanos?",
                answer: "Gracias al Reino de Dios"
              },
              {
                question: "El Reino de Dios \"no es parte de _____\", según Juan 18:36.",
                answer: "este mundo"
              },
              {
                question: "¿Qué escritura se cita para demostrar que el Reino de Dios no es un gobierno terrenal?",
                answer: "Juan 18:36"
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 146:3",
                purpose: "No confíes en los humanos para salvación",
                text: "No confíen en los nobles ni en nadie nacido de humano, que no puede ofrecer salvación."
              },
              {
                reference: "Jeremías 10:23",
                purpose: "El hombre no puede dirigir sus pasos",
                text: "Bien sé, oh Jehová, que el camino del hombre no es suyo. No le corresponde al hombre que está andando dirigir sus pasos."
              },
              {
                reference: "Juan 8:44",
                purpose: "Satanás es mentiroso y asesino",
                text: "Ustedes proceden de su padre el Diablo, y quieren hacer los deseos de su padre. Ese fue un asesino cuando comenzó, y no permaneció firme en la verdad, porque la verdad no está en él. Cuando dice una mentira, habla según su propia disposición, porque es mentiroso y el padre de la mentira."
              },
              {
                reference: "Efesios 2:2",
                purpose: "Satanás controla este mundo",
                text: "En los cuales en algún tiempo anduvieron conforme a la índole de este mundo, conforme al gobernante de la autoridad del aire, el espíritu que ahora está operando en los hijos de la desobediencia."
              },
              {
                reference: "Eclesiastés 7:20",
                purpose: "No hay hombre justo en la tierra",
                text: "Porque no hay hombre justo en la tierra que siempre haga el bien y nunca peque."
              },
              {
                reference: "Lucas 8:1",
                purpose: "Jesús predicaba el Reino de Dios",
                text: "Poco después, él recorría ciudades y aldeas predicando y anunciando las buenas noticias del Reino de Dios. Y los Doce iban con él."
              },
              {
                reference: "Mateo 5:6",
                purpose: "Los que tienen hambre de justicia serán saciados",
                text: "Felices son los que tienen hambre y sed de justicia, porque ellos serán saciados."
              },
              {
                reference: "Lucas 18:7, 8",
                purpose: "Dios hará justicia a los que claman",
                text: "Entonces, ¿no hará justicia Dios a los que él ha elegido y que le claman día y noche, aunque parezca que tarda en ayudarlos? Les digo que hará justicia a ellos sin demora. Sin embargo, cuando el Hijo del Hombre llegue, ¿encontrará realmente esta fe en la tierra?"
              },
              {
                reference: "Juan 18:36",
                purpose: "El Reino de Jesús no es de este mundo",
                text: "Jesús contestó: 'Mi Reino no es parte de este mundo. Si mi Reino fuera parte de este mundo, mis sirvientes habrían peleado para que yo no fuera entregado a los judíos. Pero mi Reino no es de aquí'."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿Por qué está usted convencido de que solo el Reino de Dios eliminará las injusticias?",
            textLSM: "",
            paragraphs: [9],
            section: "ANTE UNA INJUSTICIA, IMITEMOS A JESÚS",
            answer: "Estamos convencidos porque las causas de las injusticias siguen siendo las mismas que en tiempos de Jesús: Satanás y las personas imperfectas que lo imitan. Al igual que Jesús, sabemos que solo el Reino de Dios eliminará de raíz estas verdaderas causas. Los esfuerzos humanos no funcionan, como lo experimentó Stacy, quien se preguntaba si estaba defendiendo la mejor solución al participar en protestas.",
            answerBullets: [
              "Vivimos en \"los últimos días\" y vemos más injusticias que Jesús",
              "**Las causas siguen siendo las mismas: Satanás y las personas imperfectas**",
              "Solo el Reino de Dios eliminará de raíz las verdaderas causas",
              "El Reino de Dios es el único gobierno que apoyamos",
              "No participamos en protestas, manifestaciones ni iniciativas sociales",
              "Stacy participaba en actividades a favor del cambio social antes de la verdad",
              "Empezó a preguntarse si estaba defendiendo la mejor solución",
              "**Ahora está convencida de que Jehová hará más de lo que ella jamás podría**"
            ],
            flashcards: [
              {
                question: "¿Por qué vemos todavía más injusticias que las que vio Jesús?",
                answer: "Porque vivimos en \"los últimos días\""
              },
              {
                question: "Según 2 Timoteo 3:1-5, 13 y Apocalipsis 12:12, ¿cuáles son las causas de las injusticias hoy en día?",
                answer: "Satanás y las personas imperfectas que lo imitan"
              },
              {
                question: "¿Qué es lo único que eliminará de raíz las verdaderas causas de las injusticias?",
                answer: "El Reino de Dios"
              },
              {
                question: "Como el Reino de Dios es el único gobierno que apoyamos, ¿en qué no participamos?",
                answer: "En protestas, manifestaciones ni otros tipos de iniciativas que pretenden luchar contra las injusticias"
              },
              {
                question: "¿Qué hacía la hermana Stacy antes de conocer la verdad?",
                answer: "Participaba en actividades a favor del cambio social"
              },
              {
                question: "¿Qué se preguntaba Stacy cuando estaba en las protestas?",
                answer: "Si estaba defendiendo la mejor solución"
              },
              {
                question: "Según Salmo 72:1, 4, ¿de qué está convencida Stacy ahora?",
                answer: "De que Jehová hará por los desfavorecidos mucho más de lo que ella jamás podría"
              }
            ],
            biblicalCards: [
              {
                reference: "2 Timoteo 3:1-5, 13",
                purpose: "En los últimos días habrá tiempos difíciles",
                text: "Pero ten presente esto: en los últimos días vendrán tiempos difíciles de manejar. Porque los hombres serán amantes de sí mismos, amantes del dinero, presumidos, arrogantes, blasfemos, desobedientes a los padres, desagradecidos, desleales, sin cariño natural, inflexibles, calumniadores, sin autocontrol, violentos, sin amor por la bondad, traicioneros, testarudos, hinchados de orgullo, amantes de los placeres más bien que amantes de Dios, teniendo una apariencia de devoción a Dios pero demostrando ser falsos respecto a su poder; y de estos apártate... Pero los hombres malvados e impostores avanzarán de mal en peor, extraviando a otros y siendo extraviados."
              },
              {
                reference: "Apocalipsis 12:12",
                purpose: "Satanás tiene gran ira en los últimos días",
                text: "Por esto alégrense, cielos, y los que residen en ellos. ¡Ay de la tierra y del mar!, porque el Diablo ha descendido a ustedes, teniendo gran ira, sabiendo que tiene un corto período de tiempo."
              },
              {
                reference: "Salmo 72:1, 4",
                purpose: "El Rey de Dios defenderá a los pobres",
                text: "Oh Dios, dale al rey tus propias decisiones judiciales, y tu justicia al hijo del rey. Que juzgue a tu pueblo con justicia y a tus afligidos con decisiones judiciales justas... Él defenderá a los afligidos del pueblo, salvará a los hijos del pobre y aplastará al defraudador."
              }
            ]
          },
          {
            number: "10",
            textEs: "Según Mateo 5:43-48, ¿por qué no intentamos promover cambios sociales?",
            textLSM: "",
            paragraphs: [10],
            readText: "LEE Mateo 5:43-48",
            answer: "No intentamos promover cambios sociales porque muchos de estos grupos tienen una actitud rebelde y conflictiva que va en contra de lo que hizo y enseñó Jesús. En lugar de eso, Jesús nos enseña a tratar con amor a todas las personas, incluidas las que no piensan como nosotros o nos persiguen, y nosotros nos esforzamos por seguir su ejemplo en todo aspecto de la vida.",
            answerBullets: [
              "Muchos grupos sociales tienen actitud rebelde y conflictiva",
              "Esto va en contra de lo que hizo y dijo Jesús (Efesios 4:31)",
              "Jeffrey: \"Protestas pacíficas pueden volverse violentas en segundos\"",
              "**Jesús nos enseña a tratar con amor a TODAS las personas**",
              "Incluye a quienes no piensan como nosotros",
              "Incluye a quienes nos persiguen",
              "Los cristianos seguimos fielmente el ejemplo de Jesús",
              "Lo aplicamos en todo aspecto de la vida"
            ],
            flashcards: [
              {
                question: "Según Efesios 4:31, ¿qué actitudes deben eliminarse que muchos grupos sociales muestran?",
                answer: "Enojo, ira, gritos y lenguaje ofensivo"
              },
              {
                question: "¿Qué observó el hermano Jeffrey sobre las protestas que empiezan siendo pacíficas?",
                answer: "Pueden dar paso en cuestión de segundos a la violencia y los saqueos"
              },
              {
                question: "Según Mateo 5:43-48, ¿a quiénes debemos amar, incluso cuando es difícil?",
                answer: "A todas las personas, incluidas las que no piensan como nosotros o nos persiguen"
              },
              {
                question: "¿Cómo te ayuda personalmente el mandato de Jesús de amar incluso a quienes te persiguen cuando enfrentas injusticias?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Efesios 4:31",
                purpose: "Actitudes que debemos eliminar",
                text: "Eliminen de ustedes todo enojo, ira, gritos y lenguaje ofensivo, junto con toda forma de maldad."
              },
              {
                reference: "Mateo 5:43-48",
                purpose: "Jesús enseña a amar a todos, incluso enemigos",
                text: "Ustedes oyeron que se dijo: 'Tienes que amar a tu prójimo y odiar a tu enemigo'. Sin embargo, yo les digo: Sigan amando a sus enemigos y orando por los que los persiguen, para que demuestren ser hijos de su Padre que está en los cielos, ya que él hace que salga el sol sobre malos y buenos y hace que llueva sobre justos e injustos. Porque, si aman a los que los aman, ¿qué recompensa tienen? ¿No hacen eso mismo los recaudadores de impuestos? Y, si saludan solo a sus hermanos, ¿qué están haciendo de extraordinario? ¿No hacen eso mismo las personas de las naciones? Por lo tanto, tienen que ser perfectos, como su Padre celestial es perfecto."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Por qué a veces nos puede resultar difícil seguir el ejemplo de Jesús?",
            textLSM: "",
            paragraphs: [11],
            answer: "A veces resulta difícil seguir el ejemplo de Jesús cuando nos tratan de manera injusta porque es natural sentir rabia, tristeza y deseos de que los culpables paguen. Como le pasó a Janiya, podemos sentirnos tentados a buscar soluciones humanas y apoyar grupos que protestan contra las injusticias, pero debemos recordar confiar en Jehová y mantener nuestra neutralidad en asuntos sociales y políticos.",
            answerBullets: [
              "Aunque sabemos que el Reino acabará con las injusticias, puede ser difícil seguir a Jesús cuando nos tratan injustamente",
              "**Ejemplo de Janiya:** Fue discriminada por su color de piel",
              "Se sentía muy triste y enojada",
              "Quería que los culpables pagaran por lo que le hicieron",
              "Pensó en apoyar un grupo que protestaba contra el racismo",
              "Creía que sería una buena manera de canalizar su rabia",
              "**Se dio cuenta:** Otros estaban influyendo en ella",
              "**Cambió su enfoque:** En vez de confiar en Jehová, confiaba en soluciones humanas",
              "Decidió cortar todo contacto con ese grupo",
              "Es normal sentir rabia ante injusticias",
              "No debemos perder nuestra neutralidad en asuntos sociales y políticos"
            ],
            flashcards: [
              {
                question: "¿Qué tipo de injusticia sufrió la hermana Janiya?",
                answer: "Fue discriminada por el color de su piel"
              },
              {
                question: "¿Qué sentía Janiya hacia los culpables de la discriminación?",
                answer: "Quería que pagaran por lo que le habían hecho"
              },
              {
                question: "¿Qué se dio cuenta Janiya sobre su forma de pensar?",
                answer: "Que otros estaban influyendo en ella y estaba empezando a confiar en soluciones humanas en vez de en Jehová"
              },
              {
                question: "¿Qué acción tomó Janiya después de darse cuenta de su error?",
                answer: "Decidió cortar todo contacto con el grupo que protestaba"
              },
              {
                question: "¿Cómo te ayuda el ejemplo de Janiya cuando sientes rabia por una injusticia que sufriste?",
                answer: ""
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 15:19",
                purpose: "Los cristianos no son parte del mundo",
                text: "Si ustedes fueran parte del mundo, el mundo sentiría cariño por lo que es suyo. Ahora bien, porque ustedes no son parte del mundo, sino que yo los he escogido del mundo, por esto el mundo los odia."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Por qué debemos elegir con cuidado lo que vemos, leemos o escuchamos?",
            textLSM: "",
            paragraphs: [12],
            answer: "Debemos elegir con cuidado lo que consumimos en medios porque las redes sociales están llenas de historias exageradas para alarmarnos, y los reporteros a menudo presentan noticias influidos por su propia opinión. Si pasamos mucho tiempo viendo, leyendo o escuchando noticias sobre injusticias, podríamos frustrarnos, desanimarnos cada vez más y olvidar que el Reino de Dios es la única solución.",
            answerBullets: [
              "Una cosa que ayuda a mantener la calma: elegir con cuidado lo que vemos, leemos o escuchamos",
              "**Redes sociales:** Llenas de historias exageradas para alarmar",
              "Muchas se quejan de líderes políticos",
              "**Reporteros:** A menudo no son objetivos",
              "Presentan noticias influidos por su propia opinión",
              "Incluso si la información es correcta, ¿de qué sirve darle vueltas?",
              "**Si pasamos mucho tiempo en noticias sobre injusticias:**",
              "Podemos frustrarnos más y más",
              "Podemos desanimarnos cada vez más (Proverbios 24:10)",
              "**Lo peor:** Podríamos olvidar la única solución: el Reino de Dios"
            ],
            flashcards: [
              {
                question: "Según el párrafo, ¿qué tipo de historias están llenas las redes sociales?",
                answer: "Historias exageradas para alarmar a la gente y quejarse de los líderes políticos"
              },
              {
                question: "¿Qué problema menciona el párrafo sobre los reporteros de noticias?",
                answer: "A menudo no son objetivos, sino que presentan las noticias influidos por su propia opinión"
              },
              {
                question: "Según Proverbios 24:10, ¿qué puede pasar si pasamos mucho tiempo viendo noticias sobre injusticias?",
                answer: "Podemos frustrarnos o desanimarnos más y más"
              },
              {
                question: "¿Qué es lo peor que podríamos olvidar si nos enfocamos demasiado en noticias sobre injusticias?",
                answer: "Que el Reino de Dios es la única solución a las injusticias"
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 24:10",
                purpose: "Desanimarse en tiempos difíciles muestra debilidad",
                text: "Si te desanimas en tiempos de angustia, tu fuerza es poca."
              }
            ]
          },
          {
            number: "13",
            textEs: "¿Cómo nos ayuda la lectura diaria de la Biblia?",
            textLSM: "",
            paragraphs: [13],
            answer: "Leer la Biblia todos los días y meditar en ella nos ayuda a mantener la calma y recordar que es Jehová quien solucionará los problemas. Nos asegura que nadie puede esconderse de él, que solo él tiene un sentido perfecto de la justicia y que solo él puede arreglar las cosas realmente.",
            answerBullets: [
              "Leer la Biblia y meditar en ella nos ayuda a mantener la calma",
              "**Nos recuerda que es Jehová quien va a solucionar los problemas**",
              "Ejemplo de Alia: se sentía indignada por el maltrato impune en su comunidad",
              "Al leer Job 34:22-29, recordó que nadie puede esconderse de Jehová",
              "Solo Jehová tiene un sentido perfecto de la justicia",
              "Solo él puede solucionar las cosas realmente"
            ],
            flashcards: [
              {
                question: "¿Qué sentía la hermana Alia al ver las injusticias en su comunidad?",
                answer: "Se sentía profundamente indignada porque no se castigaba a los culpables"
              },
              {
                question: "Según Job 34:22-29, ¿qué dos verdades sobre la justicia de Jehová aprendió Alia?",
                answer: "Que nadie puede esconderse de Jehová y que solo él tiene un sentido perfecto de la justicia"
              },
              {
                question: "¿Qué efecto tuvo en Alia recordar que es Jehová quien va a solucionar los problemas?",
                answer: "Le ayudó a manejar su indignación y recordar que solo Dios puede solucionar las cosas"
              }
            ],
            biblicalCards: [
              {
                reference: "Job 34:22-29",
                purpose: "Nadie puede esconderse de la justicia de Jehová",
                text: "No hay oscuridad ni sombras profundas donde puedan esconderse los que practican el mal. Porque él no tiene que fijar un tiempo para que el hombre se presente ante el Dios verdadero para ser juzgado. Él aplasta a los poderosos sin investigarlos y pone a otros en su lugar. Porque él conoce sus obras, y de noche los derriba, y son aplastados. Los castiga por su maldad en un lugar visible para todos. Porque se han apartado de él y no han tomado en cuenta ninguno de sus caminos. Hacen que el clamor del desdichado llegue a él, y él oye el grito de angustia de los afligidos. Cuando él da tranquilidad, ¿quién puede entonces causar problemas? Cuando él esconde su rostro, ¿quién puede entonces verlo? Tanto a una nación como a un solo hombre."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿Cuál es una de las cosas que podemos hacer ahora? (Colosenses 3:10, 11).",
            textLSM: "",
            paragraphs: [14],
            section: "¿QUÉ PODEMOS HACER AHORA?",
            readText: "LEE Colosenses 3:10, 11",
            answer: "Aunque no podemos impedir que otros cometan injusticias, sí podemos decidir cómo tratar a los demás. Imitamos a Jesús demostrando amor y tratando con respeto a todas las personas, incluso a las que actúan injustamente. Jehová se siente feliz cuando ve que somos amables y justos con todos sin hacer distinciones.",
            answerBullets: [
              "No podemos impedir que otros cometan injusticias",
              "**Sí está en nuestra mano decidir cómo vamos a tratar a los demás**",
              "Imitamos a Jesús demostrando amor",
              "Tratamos con respeto a todas las personas",
              "Incluimos a las que actúan injustamente",
              "Jehová se siente feliz cuando somos amables y justos con todos"
            ],
            flashcards: [
              {
                question: "Según Mateo 7:12, ¿qué regla de oro debe guiar nuestro trato hacia los demás?",
                answer: "Hacer por los demás lo que queremos que ellos hagan por nosotros"
              },
              {
                question: "Según Romanos 12:17, ¿cómo debemos reaccionar ante quienes nos tratan mal?",
                answer: "No devolviendo mal por mal a nadie"
              },
              {
                question: "Según Colosenses 3:10, 11, ¿qué debemos hacer para agradar a Jehová en nuestro trato con otros?",
                answer: "Vestirnos de la nueva personalidad que se va renovando mediante el conocimiento exacto"
              },
              {
                question: "¿Por qué se siente feliz Jehová cuando tratamos con respeto incluso a los injustos?",
                answer: "Porque demostramos que somos sus hijos y que imitamos su imparcialidad"
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 7:12",
                purpose: "La Regla de Oro",
                text: "Por lo tanto, hagan por los demás todo lo que les gustaría que hicieran por ustedes. De hecho, en esto se resumen la Ley y los Profetas."
              },
              {
                reference: "Romanos 12:17",
                purpose: "No devolver mal por mal",
                text: "No devuelvan mal por mal a nadie. Tengan en cuenta lo que toda la gente piensa que está bien."
              },
              {
                reference: "Colosenses 3:10, 11",
                purpose: "Vestirse de la nueva personalidad imparcial",
                text: "Y vístanse de la nueva personalidad, que mediante el conocimiento exacto se va renovando según la imagen de Aquel que la creó. Aquí no hay griego ni judío, circuncisión ni incircuncisión, extranjero, escita, esclavo ni hombre libre; más bien, Cristo es todas las cosas y en todos."
              }
            ]
          },
          {
            number: "15",
            textEs: "¿Qué conseguimos al predicar?",
            textLSM: "",
            paragraphs: [15],
            answer: "Al predicar, conseguimos luchar contra las injusticias de la mejor manera posible. El \"conocimiento de Jehová\" tiene el poder de transformar a personas agresivas y violentas en personas amables y pacíficas. Cada persona que cambia gracias a la Biblia es una persona menos que contribuye a las injusticias de este mundo.",
            answerBullets: [
              "La mejor manera de luchar contra las injusticias es predicando",
              "**El \"conocimiento de Jehová\" puede cambiar a las personas**",
              "Transforma a violentos en pacíficos (Isaías 11:6, 7, 9)",
              "Ejemplo de Jemal: pertenecía a un grupo rebelde armado",
              "Aprendió que la fuerza no cambia a la gente, pero la Biblia sí",
              "Cada persona transformada es una menos que causa injusticias"
            ],
            flashcards: [
              {
                question: "Según Isaías 11:9, ¿qué es lo que logra que no se haga daño ni se cause ruina?",
                answer: "Que la tierra esté llena del conocimiento de Jehová"
              },
              {
                question: "¿Qué lección importante aprendió Jemal sobre cómo cambiar a la gente?",
                answer: "Que no se puede cambiar a la gente usando la fuerza, pero sí usando la Biblia"
              },
              {
                question: "¿Cómo contribuye cada estudiante de la Biblia a reducir las injusticias del mundo?",
                answer: "Al dejarse transformar, es una persona menos que contribuye a las injusticias"
              }
            ],
            biblicalCards: [
              {
                reference: "Isaías 11:6, 7, 9",
                purpose: "El conocimiento de Jehová transforma personalidades",
                text: "El lobo residirá por un tiempo con el cordero, y el leopardo se echará con el cabrito, y el becerro y el león y el animal engordado estarán todos juntos; y un niño pequeño los guiará. La vaca y la osa pacerán juntas, y sus crías se echarán juntas. El león comerá paja como el toro. No causarán ningún daño ni destrucción en toda mi santa montaña, porque la tierra de seguro estará llena del conocimiento de Jehová tal como las aguas cubren el mar."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Por qué quiere usted predicar el mensaje del Reino?",
            textLSM: "",
            paragraphs: [16]
          },
          {
            number: "17",
            textEs: "¿Cómo nos ayuda Jehová a sobrellevar las injusticias de este mundo?",
            textLSM: "",
            paragraphs: [17]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "EN EL mundo en el que vivimos se trata injustamente a muchas personas, ya sea por su posición económica, su sexo, su cultura o lugar de origen, su raza o por otras razones. Además, algunos gobernantes y empresarios toman decisiones egoístas sin preocuparse por el daño que puedan causar al planeta y a sus habitantes. Estas y otras injusticias nos afectan a todos, ya sea de forma directa o indirecta."
          },
          {
            number: 2,
            content: "Claro, todos queremos vivir en paz y que se nos trate bien. Por eso es normal que al ver tantas injusticias muchas personas se indignen. Algunas se unen a movimientos sociales con el objetivo de cambiar las cosas. Apoyan campañas, manifestaciones y a líderes políticos que prometen luchar contra las injusticias. Pero los cristianos sabemos que no debemos ser \"parte del mundo\" y que el Reino de Dios acabará con todas las injusticias (Juan 17:16). Aun así, nos duele e incluso nos enoja ver a personas sufriendo una injusticia. Quizás nos preguntemos: \"¿Cómo debo reaccionar? ¿Hay algo que pueda hacer ahora para mejorar la situación?\". En este artículo vamos a responder esas preguntas. Pero primero veamos qué sienten Jehová y Jesús al ver las injusticias."
          },
          {
            number: 3,
            content: "La Biblia explica por qué es natural que nos sintamos indignados ante las injusticias: Jehová nos creó a su imagen y \"él ama la rectitud y la justicia\" (Sal. 33:5; Gén. 1:26). Nunca comete injusticias y no quiere que nadie las cometa tampoco (Deut. 32:3, 4; Miq. 6:8; Zac. 7:9). Por ejemplo, en la época del profeta Isaías, Jehová escuchó el \"grito de angustia\" de muchos israelitas que estaban siendo maltratados por otros israelitas (lea Isaías 5:7). Castigó a aquellas personas que se empeñaban en desobedecer su Ley y en tratar injustamente a los demás (Is. 5:5, 13)."
          },
          {
            number: 4,
            content: "Al igual que Jehová, Jesús ama la justicia y odia las injusticias. Pensemos en algo que ocurrió cuando estuvo en la Tierra. Un día vio a un hombre que tenía una mano paralizada. Entonces se compadeció de él y se la curó. Pero, cuando los líderes religiosos lo vieron, se enojaron. Para aquellos hombres insensibles, era más importante cumplir con su interpretación inflexible de la ley del sábado que ayudar a un hombre que estaba sufriendo. Cuando Jesús vio su reacción, se sintió \"muy dolido al ver que tenían el corazón tan duro\" (Mar. 3:1-6).",
            image: "https://i.imgur.com/V2keqGc.png",
            imageCaption: "Jesús se compadeció del hombre y curó su mano paralizada. (Vea el párrafo 4)."
          },
          {
            number: 5,
            content: "Dado que Jehová y Jesús se enojan cuando ven una injusticia, no está mal que nosotros sintamos lo mismo (Efes. 4:26 y la nota de estudio \"Cuando se enojen\"). Sin embargo, debemos recordar que nuestro enfado —aunque esté justificado— no eliminará esa injusticia. De hecho, si sentimos ira durante mucho tiempo o no la controlamos, podemos perjudicar nuestra salud emocional y física (Sal. 37:1, 8; Sant. 1:20). Así que, para saber cómo debemos reaccionar ante las injusticias, analicemos el ejemplo de Jesús."
          },
          {
            number: 6,
            content: "Jesús vio muchas injusticias cuando estuvo en la Tierra. Por ejemplo, sabía que los líderes religiosos le hacían la vida imposible a la gente con un sinfín de reglas (Mat. 23:2-4). También era consciente de lo mal que trataban las autoridades romanas al pueblo. Había muchos judíos que querían la independencia de Roma, y algunos —como los zelotes— estaban dispuestos a combatir por ella. Ahora bien, Jesús no lideró ni apoyó ningún movimiento social a favor del cambio. Cuando se enteró de que la gente quería hacerlo rey, se fue enseguida (Juan 6:15).",
            image: "https://i.imgur.com/o8p6CdP.png",
            imageCaption: "Jesús no apoyó ningún movimiento social a favor del cambio. (Vea el párrafo 6)."
          },
          {
            number: 7,
            content: "Jesús no participó en los asuntos políticos para tratar de acabar con las injusticias de su tiempo. ¿Por qué no? Porque sabía que los seres humanos no tienen ni el derecho ni la capacidad de gobernarse (Sal. 146:3; Jer. 10:23). Y tampoco pueden eliminar las verdaderas causas de las injusticias. Por un lado está Satanás, que controla este mundo y usa su autoridad para hacer que la gente sea tan cruel como él (Juan 8:44; Efes. 2:2). Por otro lado está la imperfección, que nos impide actuar siempre de manera justa por muy buenas que sean nuestras intenciones (Ecl. 7:20)."
          },
          {
            number: 8,
            content: "Jesús sabía que únicamente el Reino de Dios podrá eliminar de raíz las verdaderas causas de las injusticias. Por eso decidió que la mejor manera de usar su tiempo y sus energías era \"predicando y anunciando las buenas noticias del Reino de Dios\" (Luc. 8:1). Les aseguró a quienes tenían \"hambre y sed de justicia\" que la corrupción y las injusticias desaparecerían para siempre (Mat. 5:6 y la nota de estudio; Luc. 18:7, 8). Eso no se conseguirá gracias a ningún gobierno humano, sino gracias al Reino de Dios, que \"no es parte de este mundo\" (lea Juan 18:36)."
          },
          {
            number: 9,
            content: "Como vivimos en \"los últimos días\", vemos todavía más injusticias que las que vio Jesús. Pero las causas siguen siendo las mismas: Satanás y las personas imperfectas que lo imitan (2 Tim. 3:1-5, 13; Apoc. 12:12). Al igual que Jesús, sabemos que solo el Reino de Dios eliminará de raíz las verdaderas causas de las injusticias. Como ese es el único gobierno que apoyamos, no participamos en protestas, manifestaciones ni otros tipos de iniciativas que pretenden luchar contra las injusticias. Veamos el caso de una hermana llamada Stacy. Antes de conocer la verdad, solía participar en actividades a favor del cambio social. Pero al cabo de un tiempo empezó a tener dudas sobre si lo que hacía servía para algo. Ella cuenta: \"Cuando estaba en las protestas, me preguntaba si estaba defendiendo la mejor solución. Ahora que apoyo el Reino de Dios, sé que estoy defendiendo la mejor solución. Estoy convencida de que Jehová hará por los desfavorecidos mucho más de lo que yo jamás podría\" (Sal. 72:1, 4)."
          },
          {
            number: 10,
            content: "Muchos de los grupos que se forman para promover cambios sociales tienen una actitud rebelde y conflictiva, que va en contra de lo que hizo y dijo Jesús (Efes. 4:31). Un hermano llamado Jeffrey dice: \"Sé que algunas protestas que empiezan siendo pacíficas pueden dar paso en cuestión de segundos a la violencia y los saqueos\". Ahora bien, Jesús nos enseña a tratar con amor a todas las personas, incluidas las que no piensan como nosotros o nos persiguen (lea Mateo 5:43-48). Y los cristianos nos esforzamos por seguir fielmente su ejemplo y sus enseñanzas en todo aspecto de la vida.",
            image: "https://i.imgur.com/yiwgCrE.png",
            imageCaption: "Los cristianos tratamos con amor a todas las personas. (Vea el párrafo 10)."
          },
          {
            number: 11,
            content: "Aunque sabemos que el Reino de Dios acabará para siempre con todas las injusticias, puede que nos resulte difícil seguir el ejemplo de Jesús cuando nos tratan de manera injusta. Veamos lo que le pasó a Janiya, que fue discriminada por el color de su piel. Ella dice: \"Me sentía muy triste. También estaba muy enojada y quería que los culpables pagaran por lo que me habían hecho. Entonces pensé en apoyar un grupo que protestaba contra el racismo y la discriminación. Creía que esa sería una buena manera de canalizar mi rabia\". Sin embargo, con el tiempo se dio cuenta de que tenía que corregir su manera de pensar. Explica: \"Vi que otros estaban influyendo en mí y que en vez de confiar en Jehová estaba empezando a confiar en las soluciones humanas, y decidí cortar todo contacto con ese grupo\". Cuando sufrimos o vemos una injusticia, es normal que sintamos rabia. Pero no permitamos que eso nos lleve a perder nuestra neutralidad en los asuntos sociales y políticos de este mundo (Juan 15:19)."
          },
          {
            number: 12,
            content: "¿Qué puede ayudarnos a mantener la calma cuando vemos o sufrimos una injusticia? Una cosa que podemos hacer es elegir con cuidado lo que vemos, leemos o escuchamos. Algunas redes sociales están llenas de historias exageradas para alarmar a la gente y quejarse de los líderes políticos. Por otro lado, los reporteros a menudo no son objetivos, sino que presentan las noticias influidos por su propia opinión. Incluso si la información sobre una injusticia es correcta, ¿de qué nos sirve darle vueltas y vueltas? Si pasamos mucho tiempo viendo, leyendo o escuchando noticias sobre ese asunto, es posible que acabemos frustrándonos o desanimándonos más y más (Prov. 24:10). Y, lo que es peor, podríamos olvidar cuál es la única solución a las injusticias: el Reino de Dios."
          },
          {
            number: 13,
            content: "Otra cosa que nos ayudará es leer la Biblia todos los días y meditar en lo que leemos. Una hermana llamada Alia se sintió profundamente indignada al ver que se maltrataba a algunas personas de su comunidad y que no se castigaba a los culpables. Ella cuenta: \"Tuve que recordarme a mí misma que es Jehová quien va a solucionar estos problemas. Entonces leí Job 34:22-29, que nos asegura que nadie puede esconderse de Jehová. Solo él tiene un sentido perfecto de la justicia y solo él puede solucionar las cosas\". Ahora bien, ¿hay algo que podamos hacer ahora, mientras esperamos a que el Reino de Dios acabe con todas las injusticias?"
          },
          {
            number: 14,
            content: "No podemos impedir que otros cometan injusticias, pero sí está en nuestra mano decidir cómo vamos a tratar a los demás. Como ya hemos visto, imitamos a Jesús demostrando amor. Y ese amor nos impulsa a tratar con respeto a todas las personas, incluidas las que actúan injustamente (Mat. 7:12; Rom. 12:17). Jehová se siente feliz cuando ve que somos amables y justos con todos (lea Colosenses 3:10, 11)."
          },
          {
            number: 15,
            content: "La mejor manera de luchar contra las injusticias es predicando el mensaje de la Biblia. ¿Por qué lo decimos? Porque el \"conocimiento de Jehová\" puede hacer que alguien agresivo y violento cambie y llegue a ser amable y pacífico (Is. 11:6, 7, 9). Antes de conocer la verdad, un hombre llamado Jemal se unió a un grupo rebelde que luchaba contra un Gobierno que le parecía opresivo. Dice: \"No se puede cambiar a la gente usando la fuerza, pero sí usando la Biblia. Eso es lo que me hizo cambiar a mí\". Lo que aprendía al estudiar la Palabra de Dios lo motivó a abandonar la lucha. Cada persona que se deja transformar por la Biblia es una persona menos que contribuye a las injusticias de este mundo."
          },
          {
            number: 16,
            content: "Igual que Jesús, deseamos contarles a las personas que el Reino de Dios es la única solución permanente a las injusticias. Así podemos darles esperanza a quienes han sufrido alguna injusticia en este mundo (Jer. 29:11). Stacy, mencionada en el párrafo 9, explica: \"Conocer la verdad me ha ayudado a sobrellevar las injusticias que he visto y vivido. Mediante la Biblia, Jehová nos consuela\". Para poder consolar a las personas con las promesas de la Biblia, tenemos que prepararnos bien. Cuanto más convencidos estemos de que el Reino de Dios acabará con todas las injusticias, más fácil nos resultará hablar con tacto de este tema si surge en la escuela o en el trabajo."
          },
          {
            number: 17,
            content: "Sabemos que, mientras Satanás siga siendo \"el gobernante de este mundo\", continuarán existiendo las injusticias. Pero Jehová nos va a ayudar y nos promete que pronto Satanás \"será echado afuera\" (Juan 12:31). Además, en la Biblia nos explica por qué hay tantas injusticias y nos asegura que le duele vernos sufrir (Sal. 34:17-19). Y por medio de su Hijo nos enseña cómo debemos reaccionar ante las injusticias de este mundo y cómo su Reino pronto acabará con ellas de una vez por todas (2 Ped. 3:13). Así pues, sigamos predicando con entusiasmo las buenas noticias del Reino mientras esperamos con anhelo que llegue el día en que \"la justicia y la rectitud\" llenen la Tierra (Is. 9:7)."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Por qué nos indignan tanto las injusticias?"
          },
          {
            question: "¿Por qué no apoyamos las iniciativas humanas que pretenden luchar contra las injusticias?"
          },
          {
            question: "¿Qué podemos hacer ahora ante una injusticia?"
          }
        ],
        finalSong: "Canción 158: Danos paciencia"
      },

      // Artículo 38: "Mostremos que respetamos a los demás" (24-30 Nov)
      {
        metadata: {
          articleNumber: 38,
          week: "24-30 Nov",
          month: "Septiembre",
          year: 2025
        },
        song: "Canción 120: Seamos apacibles y humildes como Cristo",
        title: "Mostremos que respetamos a los demás",
        biblicalText: "\"Ser respetado es mejor que tener plata y oro\" (PROV. 22:1).",
        theme: "Por qué tenemos que respetar a los demás y cómo hacerlo incluso en situaciones difíciles.",
        questions: [
          {
            number: "1",
            textEs: "¿Por qué es tan importante sentirnos respetados? (Proverbios 22:1).",
            textLSM: "",
            paragraphs: [1]
          },
          {
            number: "2, 3",
            textEs: "¿Por qué no siempre es fácil respetar a los demás, y qué veremos en este artículo?",
            textLSM: "",
            paragraphs: [2, 3]
          },
          {
            number: "4",
            textEs: "¿Qué significa respetar a los demás?",
            textLSM: "",
            paragraphs: [4],
            section: "¿QUÉ SIGNIFICA RESPETAR A LOS DEMÁS?"
          },
          {
            number: "5",
            textEs: "¿Qué nos motiva a respetar a los demás?",
            textLSM: "",
            paragraphs: [5]
          },
          {
            number: "6",
            textEs: "¿Es posible respetar a alguien que nos falte el respeto? (Vea también la imagen de la portada).",
            textLSM: "",
            paragraphs: [6]
          },
          {
            number: "7",
            textEs: "¿Qué cosas pueden hacer difícil tratar con respeto a nuestra familia?",
            textLSM: "",
            paragraphs: [7],
            section: "RESPETEMOS A NUESTROS FAMILIARES"
          },
          {
            number: "8",
            textEs: "¿Por qué debemos mostrarles respeto a nuestros familiares? (1 Timoteo 5:4, 8).",
            textLSM: "",
            paragraphs: [8]
          },
          {
            number: "9",
            textEs: "¿Cómo se pueden tratar con respeto el esposo y la esposa? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [9]
          },
          {
            number: "10",
            textEs: "¿Cómo pueden los jóvenes demostrar que respetan a sus padres?",
            textLSM: "",
            paragraphs: [10]
          },
          {
            number: "11",
            textEs: "¿Por qué puede resultarnos a veces difícil tratar con respeto a los hermanos?",
            textLSM: "",
            paragraphs: [11],
            section: "RESPETEMOS A LOS HERMANOS"
          },
          {
            number: "12",
            textEs: "¿Por qué es importante respetar a nuestros hermanos? (2 Pedro 2:9-12).",
            textLSM: "",
            paragraphs: [12]
          },
          {
            number: "13, 14",
            textEs: "¿De qué maneras demostramos que respetamos a los hermanos? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [13, 14]
          },
          {
            number: "15",
            textEs: "¿Por qué puede resultarnos a veces difícil tratar con respeto a quienes no son Testigos?",
            textLSM: "",
            paragraphs: [15],
            section: "RESPETEMOS A QUIENES NO SON TESTIGOS"
          },
          {
            number: "16",
            textEs: "¿Por qué es importante respetar a quienes todavía no sirven a Jehová? (1 Pedro 2:12; 3:15).",
            textLSM: "",
            paragraphs: [16]
          },
          {
            number: "17",
            textEs: "¿De qué maneras demostramos que respetamos a quienes no son Testigos?",
            textLSM: "",
            paragraphs: [17]
          },
          {
            number: "18",
            textEs: "¿Por qué vale la pena tratar con respeto a los demás?",
            textLSM: "",
            paragraphs: [18]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "¿VERDAD que a todos nos gusta y hace sentir felices que nos traten con respeto? Y no solo eso, lo necesitamos. Con razón la Biblia dice que \"ser respetado es mejor que tener plata y oro\" (lea Proverbios 22:1)."
          },
          {
            number: 2,
            content: "Aun así, puede que a veces nos cueste respetar a los demás. ¿Por qué? Por un lado, vemos sus imperfecciones y, por otro, vivimos en una época en la que el respeto brilla por su ausencia. Pero nosotros sí queremos ser respetuosos porque Jehová nos pide que honremos —es decir, que tratemos con respeto— \"a gente de toda clase\" (1 Ped. 2:17)."
          },
          {
            number: 3,
            content: "En este artículo veremos qué significa respetar a los demás y cómo demostrar esta cualidad con 1) la familia, 2) los hermanos y 3) los que no son Testigos. Nos centraremos en cómo ser respetuosos en situaciones difíciles."
          },
          {
            number: 4,
            content: "¿Cómo definiría usted el respeto? En la Biblia, las palabras respeto y honra están relacionadas. El respeto se refiere principalmente a cómo vemos a una persona. Cuando respetamos a los demás, consideramos que merecen nuestra atención y estima, quizás por sus cualidades, sus logros o su posición. La honra se refiere a cómo tratamos a una persona. Cuando honramos a los demás, los tratamos con dignidad y hacemos cosas que demuestran que los valoramos. Claro está, para que la honra sea sincera, debe nacer del corazón (Mat. 15:8)."
          },
          {
            number: 5,
            content: "Jehová quiere que respetemos a los demás. Por ejemplo, nos manda honrar a \"las autoridades superiores\" (Rom. 13:1, 7). Sin embargo, quizás alguien diga: \"Yo le doy mi respeto a quien se lo gana\". ¿Pero está bien pensar así? No. Como siervos de Jehová, entendemos que debemos respetar a los demás, pero no por las cosas que hagan o no hagan, sino por una razón mucho más importante: porque amamos a Jehová y queremos complacerlo (Jos. 4:14; 1 Ped. 3:15)."
          },
          {
            number: 6,
            content: "Puede que nos preguntemos: \"¿Es posible respetar a alguien que nos falte el respeto?\". Sí. Pensemos en los siguientes ejemplos. El rey Saúl humilló a su hijo Jonatán al frente de otras personas (1 Sam. 20:30-34). A pesar de eso, Jonatán siguió respetando a su padre y luchó junto a él hasta el día de su muerte (Éx. 20:12; 2 Sam. 1:23). El sumo sacerdote Elí acusó a Ana de estar borracha (1 Sam. 1:12-14). Sin embargo, ella le respondió con respeto, aunque todo Israel sabía que Elí no estaba cumpliendo bien con su responsabilidad de padre y sumo sacerdote (1 Sam. 1:15-18; 2:22-24). Y unos hombres de Atenas insultaron a Pablo llamándolo \"charlatán\" (Hech. 17:18). Pero él les siguió hablando con respeto (Hech. 17:22). Estos ejemplos muestran que el amor profundo por Jehová y el temor a desagradarle pueden motivarnos a respetar a los demás incluso cuando no es fácil hacerlo. Veamos ahora a quiénes debemos respetar y por qué.",
            image: "https://i.imgur.com/1Gdk88z.png",
            imageCaption: "Pablo siguió hablando con respeto a los atenienses. (Vea el párrafo 6 y la imagen de la portada)."
          },
          {
            number: 7,
            content: "El desafío. Como pasamos tanto tiempo con la familia, conocemos muy bien las virtudes y los defectos de cada uno. Por otro lado, quizás tengamos familiares que padezcan una enfermedad que haga que sea difícil cuidarlos, o sufran mucho de ansiedad. O algunos tal vez nos hagan o digan cosas hirientes. Y otros tratan a la familia con falta de respeto y hacen que el hogar no sea un refugio de paz, sino un campo de batalla. Todo esto hace que las cosas no vayan bien en la familia. Por poner un ejemplo: tal como la artritis hace que el cuerpo sufra y dificulta los movimientos, la falta de respeto hace que la familia sufra y dificulta la convivencia. Eso sí, aunque la artritis quizás no tenga cura, la falta de respeto sí."
          },
          {
            number: 8,
            content: "Por qué mostrar respeto (lea 1 Timoteo 5:4, 8). En la primera carta que Pablo le escribió a Timoteo explicó qué tenían que hacer los miembros de la familia para cuidarse unos a otros. También dijo que debemos honrar a la familia no por simple obligación, sino principalmente por \"devoción a Dios\", es decir, porque amamos a Jehová y lo vemos como parte de nuestra adoración a él. Jehová es el Creador de la familia (Efes. 3:14, 15). Así que, cuando honramos a nuestros familiares, en realidad lo estamos honrando a él. ¡Qué razón tan importante para mostrar respeto!"
          },
          {
            number: 9,
            content: "Cómo mostrar respeto. El esposo que honra a su esposa demuestra tanto en público como en privado que la valora (Prov. 31:28; 1 Ped. 3:7). Jamás la golpea ni la humilla ni la hace sentir que vale poco. Un hermano de Argentina llamado Ariel dice: \"Debido a la enfermedad de mi esposa, a veces dice cosas que me duelen. Lo que hago es recordar que sus palabras no reflejan lo que de verdad siente. En los momentos más difíciles pienso en 1 Corintios 13:5, y eso me ayuda a hablarle con respeto y calma\" (Prov. 19:11). Por otro lado, la esposa que honra a su esposo les habla bien de él a los demás (Efes. 5:33). Evita el sarcasmo, las burlas, los nombres ofensivos y los insultos, pues comprende que esas cosas son como el óxido: corroen el matrimonio (Prov. 14:1). Una hermana de Italia que tiene un esposo que sufre de ansiedad explica: \"A veces siento que él se preocupa demasiado por las cosas. En el pasado yo le demostraba falta de respeto con las cosas que le decía y con las caras que le ponía. Pero me he dado cuenta de que juntarme con personas que hablan con respeto de los demás me ayuda a ser respetuosa con mi esposo\".",
            image: "https://i.imgur.com/Z9Vxy2Z.png",
            imageCaption: "El esposo y la esposa se tratan con respeto. (Vea el párrafo 9 y las imágenes)."
          },
          {
            number: 10,
            content: "Jóvenes, obedezcan a sus padres y háblenles con respeto (Éx. 21:17; Efes. 6:1-3). A medida que ellos se vayan haciendo mayores, tal vez necesiten más cuidados. Así que hagan todo lo posible por atenderlos bien. Hablemos del ejemplo de una hermana llamada María. Cuando su padre, que no es Testigo, se enfermó, ella empezó a cuidarlo, pero él no se lo puso fácil. María explica: \"Le pedía a Jehová que me ayudara a sentir respeto por mi padre y a ser capaz de demostrárselo. Me decía a mí misma que, si Jehová me pide que honre a mis padres, él me dará las fuerzas para hacerlo. Con el tiempo comprendí que tengo que respetar a mi padre aunque él no cambie su forma de tratarme\". Cuando honramos a nuestros familiares a pesar de sus defectos, demostramos respeto por Jehová, quien creó la familia."
          },
          {
            number: 11,
            content: "El desafío. Es cierto que los hermanos se esfuerzan por poner en práctica lo que dice la Biblia. Sin embargo, puede que a veces no sean amables con nosotros, nos juzguen injustamente o nos irriten. Si alguno de nosotros \"tiene una razón para quejarse de otro\", quizás nos cueste seguir respetándolo (Col. 3:13). Ahora bien, ¿qué nos puede ayudar?"
          },
          {
            number: 12,
            content: "Por qué mostrar respeto (lea 2 Pedro 2:9-12). En su segunda carta inspirada, Pedro dijo que algunos cristianos del primer siglo estaban hablando de manera irrespetuosa de \"los gloriosos\", es decir, los ancianos. ¿Cómo reaccionaron los ángeles al ver esa situación? Pedro explicó que \"por respeto a Jehová\" no dijeron ninguna palabra ofensiva contra aquellos hombres irrespetuosos y arrogantes. Qué interesante que los ángeles, que son perfectos, se aseguraron de no decir nada malo de ellos. Al contrario, dejaron que Jehová se encargara de juzgarlos y reprenderlos (Rom. 14:10-12; compare con Judas 9). Podemos aprender mucho de los ángeles. Si no somos irrespetuosos con quienes nos persiguen, mucho menos vamos a serlo con nuestros hermanos. Más bien debemos tomar \"la iniciativa\" de honrarlos (Rom. 12:10). Así mostramos que respetamos a Jehová."
          },
          {
            number: 13,
            content: "Cómo mostrar respeto. Ancianos, enseñen siempre con amor (Filem. 8, 9). Si tienen que corregir a alguien, no se dejen llevar por la frustración, sino que sean amables. Hermanas, eviten el chisme y la calumnia, y así contribuirán a crear y mantener un ambiente de respeto en la congregación (Tito 2:3-5). Y todos podemos demostrar que respetamos a los ancianos. ¿Cómo? Colaborando con ellos y diciendo cuánto agradecemos todo lo que hacen por dirigir las reuniones, organizar la predicación y ayudar a quienes han dado \"un paso en falso\" (Gál. 6:1; 1 Tim. 5:17).",
            image: "https://i.imgur.com/1OL2zVw.png",
            imageCaption: "Demostramos respeto a los hermanos colaborando y agradeciendo su trabajo. (Vea los párrafos 13 y 14 y las imágenes)."
          },
          {
            number: 14,
            content: "A una hermana llamada Rocío le costaba respetar a un anciano que la había aconsejado. Ella cuenta: \"Sentí que él no había sido para nada amoroso conmigo. En casa hablaba mal de él. Intentaba que no se me notara, pero por dentro dudaba de sus motivos y me negaba a aplicar su consejo\". ¿Qué la ayudó? Ella explica: \"Leí 1 Tesalonicenses 5:12, 13 y me di cuenta de que no estaba respetando al hermano. Entonces la conciencia empezó a molestarme. Le oré a Jehová y busqué en nuestras publicaciones información que me ayudara a cambiar de actitud. Con el tiempo comprendí que el problema no era el hermano, sino mi orgullo. Ahora entiendo que, si quiero mostrar respeto, tengo que ser humilde. Sé que tengo que seguir trabajando en ello, pero me siento tranquila porque Jehová ve que me estoy esforzando\"."
          },
          {
            number: 15,
            content: "El desafío. Muchas veces en la predicación nos encontramos con personas que no tienen ningún interés por Dios ni por la Biblia (Efes. 4:18). Algunos se niegan a escuchar nuestro mensaje por lo que les enseñaron a creer desde niños. Por otro lado, quizás nos toque lidiar con jefes o maestros muy duros y exigentes, o tengamos compañeros de trabajo o de clase difíciles de tratar. Puede que poco a poco les perdamos el respeto y nos cueste tratarlos como nos gustaría que los demás nos trataran."
          },
          {
            number: 16,
            content: "Por qué mostrar respeto. Recordemos que Jehová está pendiente de cómo tratamos a quienes no son Testigos. El apóstol Pedro les recordó a los cristianos que su conducta ejemplar podía llevar a algunas personas a darle gloria a Dios. Por eso les aconsejó presentar una defensa de su fe \"con apacibilidad y profundo respeto\" (lea 1 Pedro 2:12; 3:15). Cuando estuvieran defendiendo su fe ante un juez o ante cualquier otra persona, siempre debían tratar a los demás con respeto, como si Dios estuviera allí con ellos. A fin de cuentas, Jehová escucha todo lo que decimos y ve cómo lo hacemos. Sin duda, esta es una razón de peso para respetar a quienes no son Testigos."
          },
          {
            number: 17,
            content: "Cómo mostrar respeto. En la predicación, nunca queremos dar la impresión de creernos superiores a aquellos que saben menos de la Biblia. Al contrario, recordamos que son valiosos para Dios y los vemos superiores a nosotros (Ageo 2:7; Filip. 2:3). Si alguien nos insulta por nuestras creencias, resistimos el impulso de pagar con la misma moneda. Por eso nunca daríamos una respuesta ingeniosa pero sarcástica (1 Ped. 2:23). Si se nos escapa algo que no deberíamos haber dicho, nos disculpamos de inmediato. ¿Y cómo podemos mostrar respeto en el trabajo? Siendo diligentes y esforzándonos por centrarnos en las cosas positivas de los compañeros y los jefes (Tito 2:9, 10). También es importante que seamos honrados y trabajemos con toda el alma. Así, aunque no siempre complazcamos a los demás, siempre complaceremos a Jehová (Col. 3:22, 23)."
          },
          {
            number: 18,
            content: "Tenemos muy buenas razones para respetar a los demás. Vimos que, si respetamos a nuestros familiares, estaremos honrando a Jehová, el Creador de la familia. De manera parecida, si respetamos a nuestra familia espiritual, estaremos honrando a nuestro Padre celestial. Y, si respetamos a quienes no son Testigos, estaremos contribuyendo a que tal vez lleguen a darle gloria, u honra, a nuestro gran Dios. Incluso si algunas personas no nos tratan con respeto, vale la pena que nosotros sí lo hagamos porque Jehová nos bendecirá por ello. Él promete: \"Honraré a los que me honran\" (1 Sam. 2:30)."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Cómo podemos mostrar que respetamos a nuestros familiares?"
          },
          {
            question: "¿Cómo podemos mostrar que respetamos a los hermanos?"
          },
          {
            question: "¿Cómo podemos mostrar que respetamos a quienes no son Testigos?"
          }
        ],
        finalSong: "Canción 129: Servimos con aguante"
      },

      // Artículo 39: "Ayudemos de inmediato a quienes tienen 'la actitud correcta'" (1-7 Dic)
      {
        metadata: {
          articleNumber: 39,
          week: "1-7 Dic",
          month: "Septiembre",
          year: 2025
        },
        song: "Canción 54: \"Este es el camino\"",
        title: "Ayudemos de inmediato a quienes tienen \"la actitud correcta\"",
        biblicalText: "\"Todos los que tenían la actitud correcta para obtener vida eterna se hicieron creyentes\" (HECH. 13:48).",
        theme: "Cuándo ofrecerle a una persona un curso bíblico y cuándo invitarla a nuestras reuniones.",
        questions: [
          {
            number: "1",
            textEs: "¿De qué maneras reaccionan las personas cuando les predicamos? (Hechos 13:47, 48; 16:14, 15).",
            textLSM: "",
            paragraphs: [1]
          },
          {
            number: "2",
            textEs: "¿En qué sentido puede decirse que predicar es como cuidar de una huerta?",
            textLSM: "",
            paragraphs: [2]
          },
          {
            number: "3",
            textEs: "Si estamos predicando y encontramos a una persona interesada en el mensaje, ¿qué podemos hacer? (1 Corintios 9:26).",
            textLSM: "",
            paragraphs: [3],
            section: "SI LA PERSONA ESTÁ INTERESADA EN EL MENSAJE"
          },
          {
            number: "4",
            textEs: "¿Qué experiencia muestra que hay personas dispuestas a aceptar un curso bíblico desde el primer momento?",
            textLSM: "",
            paragraphs: [4]
          },
          {
            number: "5",
            textEs: "¿Qué debemos tener presente al ofrecer un curso bíblico? (Vea también las imágenes).",
            textLSM: "",
            paragraphs: [5]
          },
          {
            number: "6",
            textEs: "¿Qué podemos hacer para que la persona nos permita volver para seguir hablando de la Biblia?",
            textLSM: "",
            paragraphs: [6]
          },
          {
            number: "7",
            textEs: "¿Cuándo se dan cuenta algunas personas de que han encontrado la verdad? (1 Corintios 14:23-25).",
            textLSM: "",
            paragraphs: [7]
          },
          {
            number: "8",
            textEs: "Si invitamos a una persona a una reunión, ¿qué podemos explicarle? (Isaías 54:13).",
            textLSM: "",
            paragraphs: [8]
          },
          {
            number: "9, 10",
            textEs: "Si invitamos a alguien a una reunión, ¿qué podemos decirle para ayudarlo a vencer sus posibles temores? (Vea también la imagen).",
            textLSM: "",
            paragraphs: [9, 10]
          },
          {
            number: "11",
            textEs: "¿Cómo mostramos que respetamos el tiempo de la persona?",
            textLSM: "",
            paragraphs: [11],
            section: "SI EMPEZAMOS UN CURSO BÍBLICO"
          },
          {
            number: "12",
            textEs: "¿Cuál debe ser nuestro objetivo desde la primera clase?",
            textLSM: "",
            paragraphs: [12]
          },
          {
            number: "13",
            textEs: "¿Cómo podemos ser pacientes y comprensivos con el estudiante? (2 Corintios 10:4, 5; vea también la imagen).",
            textLSM: "",
            paragraphs: [13]
          },
          {
            number: "14",
            textEs: "¿Cómo debemos tratar a quienes vienen a nuestras reuniones?",
            textLSM: "",
            paragraphs: [14],
            section: "SI LA PERSONA ASISTE A UNA REUNIÓN"
          },
          {
            number: "15, 16",
            textEs: "¿Qué podemos hacer para que los nuevos se sientan a gusto?",
            textLSM: "",
            paragraphs: [15, 16]
          },
          {
            number: "17",
            textEs: "¿Cuál debe ser nuestra meta si encontramos a alguien que tiene \"la actitud correcta\"?",
            textLSM: "",
            paragraphs: [17]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "EN EL siglo primero, muchas personas aceptaron la verdad tan pronto como les predicaron el mensaje (lea Hechos 13:47, 48; 16:14, 15). Hoy día también hay quienes aceptan con alegría las buenas noticias desde el primer momento en que las oyen. Puede que incluso los que al principio no muestran interés luego abran su corazón y sí quieran aprender sobre Dios. ¿Qué debemos hacer cuando al predicar encontramos personas que tienen \"la actitud correcta\"?"
          },
          {
            number: 2,
            content: "En cierto sentido, podría decirse que predicar es como cuidar de una huerta. Mientras un agricultor está sembrando y cultivando plantas, quizás vea que otra ya tiene fruto maduro, así que de inmediato va a cosecharlo. De forma parecida, mientras cultivamos el interés de las personas para ayudarlas a comprender el valor de lo que enseña la Biblia, tal vez encontremos a alguien que está listo para aceptar el mensaje, así que de inmediato hacemos todo lo posible por ayudarlo (Juan 4:35, 36). Si somos observadores, podremos diferenciar entre los dos tipos de personas y sabremos cómo atender a cada una. En este artículo veremos qué podemos hacer durante la primera conversación si vemos que la persona está ya dispuesta a aceptar el mensaje. También hablaremos de cómo ayudarla a seguir progresando."
          },
          {
            number: 3,
            content: "Si estamos predicando y encontramos a una persona interesada en el mensaje, queremos ayudarla de inmediato a empezar a andar por el camino que lleva a la vida. No hay por qué esperar: durante la primera conversación, lo mejor es ofrecerle un curso de la Biblia e invitarla a asistir a nuestras reuniones (lea 1 Corintios 9:26)."
          },
          {
            number: 4,
            content: "Ofrézc ale un curso. Hay personas dispuestas a aceptar un curso bíblico desde el primer momento. Veamos un caso que sucedió en Canadá. Cierto jueves, una chica se acercó a un carrito y tomó un folleto Disfrute de la vida. La hermana que estaba allí le explicó que el folleto incluía un curso bíblico gratis. La chica le dijo que estaba interesada y le dio su número de teléfono. Además, ese mismo día le envió un mensaje preguntándole por el curso. La hermana le propuso quedar ese fin de semana, pero la chica le respondió: \"¿Y por qué no mañana? Estoy disponible\". Al día siguiente empezaron el curso, ese mismo fin de semana asistió a su primera reunión y luego siguió progresando muy rápido."
          },
          {
            number: 5,
            content: "Por supuesto, no todos los que nos escuchan son como esta chica. Debemos tener presente que, en muchos casos, puede que sea necesario conversar primero sobre algún tema que llame la atención de la persona para lograr que se interese. Aun así, si mantenemos una actitud positiva y mostramos interés personal, puede que no tardemos en empezar un curso. ¿Qué podemos decir para ofrecerlo? Eso mismo se les preguntó a varios hermanos y hermanas que son muy hábiles empezando cursos de la Biblia. Veamos qué respondieron.",
            image: "https://i.imgur.com/lYaiiCE.png",
            imageCaption: "Mostramos interés personal al predicar. (Vea el párrafo 5 y las imágenes)."
          },
          {
            number: 6,
            content: "Estos publicadores y precursores explicaron que en algunos lugares quizás es mejor no decirle a la persona palabras como clase, curso o estudio. Les da mejor resultado usar expresiones como conversar, hablar y conocer mejor la Biblia. Para sacar el tema de que nos gustaría volver, sugieren decir cosas como \"Es sorprendente que la Biblia responde preguntas que uno se ha hecho toda la vida\" o \"La Biblia no solo habla de cosas religiosas, también da consejos muy prácticos y útiles\". Y tal vez añadir: \"En solo 10 o 15 minutos puede aprender cosas que lo pueden ayudar mucho\". No es necesario incluir que queremos ir todas las semanas, pues así evitaremos que la persona se agobie o se sienta comprometida."
          },
          {
            number: 7,
            content: "Invítela a una reunión. Al parecer, en tiempos del apóstol Pablo había personas que se daban cuenta de que habían encontrado la verdad cuando asistían a su primera reunión cristiana (lea 1 Corintios 14:23-25). Hoy día ocurre lo mismo. Muchas personas progresan más rápido cuando empiezan a asistir a nuestras reuniones. Ahora bien, ¿en qué momento invitar a la persona? El libro Disfrute de la vida incluye una invitación en la lección 10, pero no es necesario esperar hasta ese punto. Podemos animarla a ir a la reunión del fin de semana incluso en la primera conversación, quizás mencionando el título del discurso público o algún punto del artículo de La Atalaya de esa semana."
          },
          {
            number: 8,
            content: "Cuando invitemos a la persona, expliquémosle las diferencias entre lo que hacemos en nuestras reuniones y lo que se hace en otras religiones que quizás conozca. Después de asistir por primera vez al Estudio de La Atalaya, una estudiante le preguntó a su maestra de la Biblia: \"¿El que hace las preguntas se sabe el nombre de cada persona?\". La hermana le explicó que la congregación es como una familia, así que todos procuramos conocer el nombre de todos. La estudiante le contestó que en su iglesia casi nadie sabe cómo se llaman los demás. Muchos tal vez tampoco sepan cuál es el propósito de nuestras reuniones, así que convendría explicárselo (lea Isaías 54:13). Nos reunimos para adorar a Jehová, aprender de él y animarnos unos a otros (Heb. 2:12; 10:24, 25). Por eso nuestras reuniones se caracterizan por ser didácticas y organizadas, pero no ceremoniosas (1 Cor. 14:40). Como al Salón del Reino vamos a aprender, procuramos que los auditorios estén bien iluminados. Además, somos neutrales, así que no hablamos de temas políticos ni apoyamos a ningún partido. En las reuniones tampoco hacemos debates ni discutimos a gritos. Para que la persona se haga una idea de qué esperar, podemos enseñarle el video ¿Cómo son nuestras reuniones?"
          },
          {
            number: 9,
            content: "Algunos no se atreven a ir a una reunión porque temen que les dirán que tienen que hacerse testigos de Jehová. Por eso, aseguremos a la persona que quienes no son Testigos son bienvenidos; si ella quiere, puede ir y sentarse a escuchar, y nadie la va a presionar para que participe ni para que cambie de religión. No se hacen reuniones separadas para los niños, así que las familias pueden asistir y sentarse juntas para aprender. De esa manera los padres saben en todo momento dónde están sus hijos y qué se les está enseñando (Deut. 31:12). Tampoco hacemos colectas ni pedimos dinero, pues hacemos lo que dijo Jesús: \"Recibieron gratis, den gratis\" (Mat. 10:8). Además, podemos decirle que no es necesario que se ponga ropa cara. Dios no se fija en la apariencia, sino en el corazón (1 Sam. 16:7).",
            image: "https://i.imgur.com/i4qDbKD.png",
            imageCaption: "Ayudamos a la persona a sentirse cómoda en las reuniones. (Vea los párrafos 9 y 10 y la imagen)."
          },
          {
            number: 10,
            content: "Si la persona asiste, hagamos todo lo posible para que se sienta cómoda. Podemos presentarle a los ancianos y a otros hermanos. Si logramos que se sienta a gusto, es más probable que vuelva. Durante la reunión, si no tiene biblia, mostrémosle los textos en la nuestra y cómo seguir lo que se está analizando."
          },
          {
            number: 11,
            content: "Si empezamos un curso bíblico con alguien, ¿qué cosas debemos tomar en cuenta? Es importante respetar el tiempo de la persona. Por ejemplo, si le decimos que vamos a ir a cierta hora, cumplamos nuestra palabra, aunque la gente de la zona no le dé mucha importancia a la puntualidad. Además, tal vez sea buena idea que la primera sesión sea razonablemente corta. Algunos hermanos hábiles sugieren no extendernos más de lo acordado aunque la persona quiera seguir. Y evitemos hablar mucho; dejemos que sea ella la que se exprese (Prov. 10:19)."
          },
          {
            number: 12,
            content: "Al darle clases de la Biblia a una persona, nuestro objetivo desde la primera sesión debe ser que llegue a conocer y amar a Jehová y a Jesús. Para lograr eso debemos enseñar todas las cosas con la Biblia y no basarnos en nuestro propio conocimiento (Hech. 10:25, 26). El apóstol Pablo centró su enseñanza en Jesucristo, la persona a la que Jehová envió para ayudarnos a conocerlo y amarlo (1 Cor. 2:1, 2). Pablo también dejó claro que era muy importante ayudar a los nuevos discípulos a cultivar cualidades que son tan valiosas como el oro, la plata y las piedras preciosas (1 Cor. 3:11-15). Algunas de ellas son la fe, la sabiduría, el discernimiento y el temor de Jehová (Sal. 19:9, 10; Prov. 3:13-15; 1 Ped. 1:7). Sigamos su ejemplo y ayudemos a los estudiantes a cultivar una fe fuerte y una estrecha amistad con su cariñoso Padre celestial (2 Cor. 1:24)."
          },
          {
            number: 13,
            content: "Imitemos la forma de enseñar de Jesús siendo pacientes y comprensivos. No le hagamos al estudiante preguntas que le hagan sentir incómodo. Si notamos que no logra entender algún punto, sigamos con la lección y volvamos a tratarlo más adelante. Y, si vemos que le cuesta aceptar alguna enseñanza, no intentemos presionarlo, sino que dejemos tiempo para que la verdad le llegue al corazón (Juan 16:12; Col. 2:6, 7). La Biblia compara las enseñanzas falsas a una fortaleza que hay que derrumbar (lea 2 Corintios 10:4, 5; vea la nota de estudio \"derrumbar cosas fuertemente atrincheradas\"). Para que la persona pueda derribar creencias muy arraigadas, primero tenemos que ayudarla a hacer que Jehová sea su refugio (Sal. 91:9).",
            image: "https://i.imgur.com/gdhRbsV.png",
            imageCaption: "Seamos pacientes y comprensivos con el estudiante. (Vea el párrafo 13 y la imagen)."
          },
          {
            number: 14,
            content: "Jehová quiere que seamos imparciales y tratemos con amor a todas las personas que vienen a nuestras reuniones, sin importar su cultura, posición económica o lugar de origen (Sant. 2:1-4, 9). Veamos algunas maneras prácticas de hacerlo."
          },
          {
            number: 15,
            content: "Hay personas que asisten a una reunión simplemente por curiosidad o porque alguien que vive en otra zona las ha animado a ir. Así que, si vemos entrar a alguien nuevo, acerquémonos para darle la bienvenida. Seamos amigables, pero sin llegar a agobiarlo. Podemos invitarlo a sentarse con nosotros. Consigamos para él una biblia y las publicaciones, o compartamos con él las nuestras. Pensemos en otras maneras de hacer que se sienta a gusto. Por ejemplo, un hombre que fue a un Salón del Reino recuerda que estaba nervioso porque le parecía que su ropa era demasiado informal. Para tranquilizarlo, el hermano que lo recibió le dijo que no se preocupara, que los testigos de Jehová somos personas normales. Aquel hombre llegó a bautizarse y nunca olvidó la reacción del hermano. Eso sí, aunque les mostramos interés personal a quienes vienen a nuestras reuniones, debemos tener mucho cuidado para no entrometernos en sus asuntos privados (1 Ped. 4:15)."
          },
          {
            number: 16,
            content: "¿Qué más podemos hacer para que las personas se sientan bienvenidas? Por ejemplo, ser respetuosos si decimos algo sobre quienes no son Testigos o sobre sus creencias en nuestras conversaciones, comentarios e intervenciones en la reunión. No digamos nada que pudiera ofender a quienes nos visitan y hacer que no quieran volver (Tito 2:8; 3:2). Por ejemplo, no estaría bien menospreciar las creencias de los demás (2 Cor. 6:3). Los hermanos que están presentando discursos públicos deben tener muchísimo cuidado con esto. También deben mostrar que toman en cuenta a los visitantes explicando las palabras y los conceptos que solemos usar y que tal vez no entiendan."
          },
          {
            number: 17,
            content: "Cada día la predicación se hace más urgente y seguimos encontrando personas que tienen \"la actitud correcta para obtener vida eterna\" (Hech. 13:48). Así que, si le predicamos a alguien dispuesto a aceptar el mensaje, no dudemos en ofrecerle un curso bíblico y en invitarlo a nuestras reuniones. Así lo ayudaremos a empezar a andar por \"el camino que lleva a la vida\" (Mat. 7:14)."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Qué podemos hacer durante la primera conversación si vemos que la persona tiene \"la actitud correcta\"?"
          },
          {
            question: "Si empezamos a darle clases de la Biblia a una persona, ¿qué sugerencias podemos aplicar desde la primera lección?"
          },
          {
            question: "¿Qué podemos hacer para que las personas que vienen a nuestras reuniones se sientan a gusto?"
          }
        ],
        finalSong: "Canción 64: Participemos con gozo en la cosecha"
      }
    ]
  },

  // Octubre 2025
  "2025-10": {
    articles: [
      // Artículo 40: "Jehová es nuestra 'máxima alegría'" (8-14 Dic)
      {
        metadata: {
          articleNumber: 40,
          week: "8-14 Dic",
          month: "Octubre",
          year: 2025
        },
        song: "Canción 111: Los motivos de nuestro gozo",
        title: "Jehová es nuestra \"máxima alegría\"",
        biblicalText: "\"Iré [...] a Dios, mi máxima alegría\" (SAL. 43:4).",
        theme: "Qué cosas pueden robarnos la alegría y qué podemos hacer para recuperarla.",
        questions: [
          {
            number: "1, 2",
            textEs: "a) ¿Cómo se sienten muchas personas hoy en día? b) ¿Qué veremos en este artículo?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: "Muchas personas hoy en día se sienten terriblemente tristes y vacías, a pesar de estar obsesionadas con la idea de ser felices. La felicidad que consiguen es pasajera. Incluso algunos siervos de Jehová pueden sentirse así debido a las situaciones y emociones «difíciles de soportar» de los últimos días. En este artículo veremos qué cosas pueden robarnos la alegría, qué podemos hacer para recuperarla, y quién puede darnos la verdadera felicidad.",
            answerBullets: [
              "**Muchas personas se sienten tristes y vacías** - A pesar de buscar la felicidad, solo consiguen una felicidad pasajera",
              "**Los siervos de Jehová no son inmunes** - También pueden sentirse así por vivir en los últimos días",
              "**Tiempos difíciles de soportar** - 2 Timoteo 3:1 describe las situaciones y emociones de estos días",
              "**El artículo analizará tres cosas** - Qué roba la alegría, cómo recuperarla, y quién da la verdadera felicidad"
            ],
            flashcards: [
              {
                question: "¿Cómo se sienten muchas personas hoy en día a pesar de buscar la felicidad?",
                answer: "Se sienten terriblemente tristes y vacías, y la felicidad que consiguen es pasajera"
              },
              {
                question: "¿Por qué incluso los siervos de Jehová pueden sentirse tristes?",
                answer: "Porque vivimos en los últimos días y tenemos que hacer frente a situaciones y emociones difíciles de soportar (2 Tim. 3:1)"
              },
              {
                question: "¿Qué tres cosas analizará este artículo?",
                answer: "1) Qué cosas pueden robarnos la alegría, 2) Qué podemos hacer para recuperarla, 3) Quién puede darnos la verdadera felicidad"
              }
            ],
            biblicalCards: [
              {
                reference: "2 Timoteo 3:1",
                purpose: "Explica por qué es difícil mantener la alegría en estos tiempos",
                text: "Pero ten presente que en los últimos días habrá tiempos muy difíciles de soportar."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Qué nos enseña la creación sobre Jehová? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [3],
            image: "https://i.imgur.com/pSYxoHm.png",
            imageCaption: "La creación nos enseña que Jehová siempre ha sido feliz y quiere que nosotros también lo seamos. (Vea el párrafo 3).",
            answer: "La creación nos enseña que Jehová siempre ha sido feliz y quiere que nosotros también lo seamos. Por eso ha creado tantas cosas que nos llenan de alegría: nuestro hermoso planeta, una inmensa variedad de colores, deliciosos alimentos y animales que nos hacen reír con sus juegos. Sin duda, Jehová nos ama y desea que disfrutemos de la vida.",
            answerBullets: [
              "**Jehová siempre ha sido feliz** - Y quiere que nosotros también lo seamos",
              "**Creó cosas que nos llenan de alegría** - Nuestro hermoso planeta, variedad de colores, deliciosos alimentos",
              "**Los animales nos hacen reír** - Jehová creó animales que nos divierten con sus juegos",
              "**Jehová nos ama** - Y desea que disfrutemos de la vida"
            ],
            flashcards: [
              {
                question: "¿Qué nos enseña la creación sobre la personalidad de Jehová?",
                answer: "Que Jehová siempre ha sido feliz y quiere que nosotros también lo seamos. Creó cosas que nos llenan de alegría."
              },
              {
                question: "¿Qué cosas ha creado Jehová para que disfrutemos?",
                answer: "Nuestro hermoso planeta, una inmensa variedad de colores, deliciosos alimentos y animales que nos hacen reír con sus juegos."
              }
            ],
            biblicalCards: []
          },
          {
            number: "4",
            textEs: "a) ¿Por qué Jehová se siente feliz a pesar de todo el sufrimiento que ve en el mundo? b) ¿Qué hace Jehová por nosotros? (Salmo 16:11).",
            textLSM: "",
            paragraphs: [4],
            readText: "LEE Salmo 16:11",
            answer: "Jehová es el «Dios feliz» y conoce muy bien todo el sufrimiento del mundo, pero no deja que eso le robe la alegría. Sabe que el sufrimiento es temporal porque él mismo le ha puesto fecha de caducidad. Mientras espera con paciencia, está muy pendiente de cómo nos sentimos y nos ayuda a estar alegres y felices (Salmo 16:11).",
            answerBullets: [
              "**Jehová es el «Dios feliz»** - Aunque conoce muy bien todo el sufrimiento del mundo (1 Tim. 1:11)",
              "**No deja que el sufrimiento le robe la alegría** - Sabe que es temporal y tiene fecha de caducidad",
              "**Espera con paciencia** - El día de acabar para siempre con el dolor y la tristeza",
              "**Está pendiente de nosotros** - Nos ayuda a estar alegres y felices (Salmo 16:11)"
            ],
            flashcards: [
              {
                question: "¿Por qué Jehová no deja que el sufrimiento del mundo le robe la alegría?",
                answer: "Porque sabe que todo ese sufrimiento es temporal; él mismo le ha puesto fecha de caducidad."
              },
              {
                question: "¿Qué hace Jehová mientras espera el fin del sufrimiento?",
                answer: "Está muy pendiente de cómo nos sentimos y nos ayuda a estar alegres y felices (Salmo 16:11)."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 16:11",
                purpose: "Muestra cómo Jehová nos ayuda a estar alegres",
                text: "Me darás a conocer el camino de la vida. En tu presencia hay alegría de sobra; a tu derecha hay felicidad para siempre."
              },
              {
                reference: "1 Timoteo 1:11",
                purpose: "Identifica a Jehová como el «Dios feliz»",
                text: "Según las gloriosas buenas noticias del feliz Dios, que me fueron confiadas."
              }
            ]
          },
          {
            number: "5, 6",
            textEs: "¿Por qué se siente feliz Jesús?",
            textLSM: "",
            paragraphs: [5, 6],
            answer: "Jesús es la persona más feliz después de Jehová por varias razones: 1) Es «la imagen del Dios invisible» y refleja a la perfección todas las cualidades de su Padre. 2) Ha pasado más tiempo que nadie junto a Jehová, la única fuente de la verdadera felicidad. 3) Siempre hace lo que su Padre quiere que haga. Debido a su obediencia, cuenta con el favor y la aprobación de Jehová.",
            answerBullets: [
              "**Es la imagen del Dios invisible** - Refleja a la perfección todas las cualidades de Jehová (Col. 1:15; 1 Tim. 6:15)",
              "**Ha pasado más tiempo junto a Jehová** - La única fuente de la verdadera felicidad",
              "**Siempre hace la voluntad de su Padre** - Se siente feliz por obedecer a Jehová (Prov. 8:30, 31; Juan 8:29)",
              "**Cuenta con el favor de Jehová** - Su obediencia le da la aprobación de su Padre (Mat. 3:17)"
            ],
            flashcards: [
              {
                question: "¿Quién es la persona más feliz después de Jehová y por qué?",
                answer: "Jesús, porque es la imagen de Dios, ha pasado más tiempo con Jehová y siempre hace Su voluntad."
              },
              {
                question: "¿Qué relación hay entre la obediencia de Jesús y su felicidad?",
                answer: "Jesús se siente feliz porque siempre hace lo que su Padre quiere, y debido a eso cuenta con el favor y la aprobación de Jehová."
              }
            ],
            biblicalCards: [
              {
                reference: "Colosenses 1:15",
                purpose: "Explica por qué Jesús refleja las cualidades de Jehová",
                text: "Él es la imagen del Dios invisible, el primogénito de toda la creación."
              },
              {
                reference: "Juan 8:29",
                purpose: "Muestra la obediencia de Jesús a su Padre",
                text: "Y el que me envió está conmigo; él no me ha dejado solo, porque yo siempre hago las cosas que le agradan."
              },
              {
                reference: "Mateo 3:17",
                purpose: "Muestra la aprobación de Jehová hacia Jesús",
                text: "Además, se oyó una voz del cielo que decía: «Este es mi Hijo, el amado, a quien he aprobado»."
              }
            ]
          },
          {
            number: "7",
            textEs: "¿Qué tenemos que hacer para sentirnos realmente felices?",
            textLSM: "",
            paragraphs: [7],
            image: "https://i.imgur.com/I1i4eNg.png",
            imageCaption: "Para sentirnos realmente felices debemos acercarnos cada vez más a Jehová. (Vea el párrafo 7).",
            answer: "Para sentirnos realmente felices debemos acercarnos cada vez más a Jehová. Cuanto más tiempo pasemos aprendiendo de él, mejor lo imitaremos y más felices seremos. Hacer su voluntad y saber que contamos con su aprobación también nos llena de alegría. Aunque a veces sintamos que hemos perdido la alegría, eso no significa que hayamos perdido la aprobación de Dios. Jehová entiende que somos imperfectos.",
            answerBullets: [
              "**Acercarnos cada vez más a Jehová** - Cuanto más tiempo aprendamos de él, más felices seremos",
              "**Imitar a Jehová** - Al conocerlo mejor, lo imitaremos mejor",
              "**Hacer su voluntad** - Saber que contamos con su aprobación nos llena de alegría (Sal. 33:12)",
              "**Jehová entiende nuestra imperfección** - Perder la alegría temporalmente no significa perder su aprobación (Sal. 103:14)"
            ],
            flashcards: [
              {
                question: "¿Qué debemos hacer para sentirnos realmente felices?",
                answer: "Acercarnos cada vez más a Jehová, pasar tiempo aprendiendo de él, imitarlo y hacer su voluntad."
              },
              {
                question: "Si a veces perdemos la alegría, ¿significa que hemos perdido la aprobación de Dios?",
                answer: "No. Jehová entiende que somos imperfectos y que a veces sentimos dolor, tristeza y depresión (Sal. 103:14)."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 33:12",
                purpose: "Muestra la felicidad de quienes tienen la aprobación de Jehová",
                text: "Feliz es la nación cuyo Dios es Jehová, el pueblo que él ha elegido como herencia."
              },
              {
                reference: "Salmo 103:14",
                purpose: "Muestra que Jehová entiende nuestras limitaciones",
                text: "Pues él conoce bien cómo estamos formados, recuerda que somos polvo."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Cómo pueden afectarnos los problemas de la vida?",
            textLSM: "",
            paragraphs: [8],
            section: "LADRÓN NÚMERO 1: LOS PROBLEMAS DE LA VIDA",
            answer: "Los problemas de la vida son como el ladrón número 1 que puede robarnos la alegría. Podemos sufrir por persecución, un desastre natural, la pobreza, una enfermedad o la edad avanzada. Estas situaciones pueden robarnos la alegría, especialmente si no podemos hacer nada para cambiarlas. La Biblia dice que «un corazón angustiado aplasta el ánimo». Los golpes de la vida pueden hundirnos física y emocionalmente.",
            answerBullets: [
              "**Ladrón número 1: los problemas de la vida** - Pueden robarnos la alegría",
              "**Ejemplos de problemas** - Persecución, desastres naturales, pobreza, enfermedad, edad avanzada",
              "**Especialmente difíciles** - Cuando no podemos hacer nada para cambiar las cosas",
              "**Un corazón angustiado aplasta el ánimo** - Los golpes nos hunden física y emocionalmente (Prov. 15:13)"
            ],
            flashcards: [
              {
                question: "¿Cuál es el 'ladrón número 1' que puede robarnos la alegría?",
                answer: "Los problemas de la vida: persecución, desastres naturales, pobreza, enfermedad o edad avanzada."
              },
              {
                question: "¿Qué dice Proverbios 15:13 sobre cómo nos afectan los problemas?",
                answer: "«Un corazón angustiado aplasta el ánimo». Los golpes de la vida pueden hundirnos física y emocionalmente."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 15:13",
                purpose: "Describe el efecto de los problemas en nuestro ánimo",
                text: "El corazón alegre hace que el rostro sea radiante, pero un corazón angustiado aplasta el ánimo."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿Qué podemos hacer para recuperar la alegría? (Jeremías 29:4-7, 10).",
            textLSM: "",
            paragraphs: [9],
            readText: "LEE Jeremías 29:4-7, 10",
            answer: "Para recuperar la alegría debemos ser realistas y estar agradecidos. Aunque el mundo promueve la idea de que para ser felices nuestra vida tiene que ser perfecta, eso no es verdad. Jehová les dijo a los judíos en Babilonia que, aunque la situación fuera difícil, trataran de aceptarla y llevarla lo mejor posible. Debemos aceptar nuestras circunstancias, agradecer las cosas buenas y recordar que Jehová está a nuestro lado.",
            answerBullets: [
              "**Ser realistas y estar agradecidos** - No necesitamos una vida perfecta para ser felices",
              "**Aceptar nuestras circunstancias** - Como los judíos en Babilonia (Jer. 29:4-7, 10)",
              "**Agradecer las cosas buenas** - Enfocarnos en lo que tenemos",
              "**Recordar que Jehová está con nosotros** - Él es nuestro refugio y ayuda (Sal. 63:7; 146:5)"
            ],
            flashcards: [
              {
                question: "¿Qué consejo les dio Jehová a los judíos desterrados en Babilonia?",
                answer: "Que trataran de aceptar la situación difícil y llevarla lo mejor posible (Jeremías 29:4-7, 10)."
              },
              {
                question: "¿Qué podemos hacer para recuperar la alegría según el párrafo 9?",
                answer: "Ser realistas, aceptar nuestras circunstancias, agradecer las cosas buenas y recordar que Jehová está a nuestro lado."
              }
            ],
            biblicalCards: [
              {
                reference: "Jeremías 29:4-7, 10",
                purpose: "Ejemplo de cómo afrontar situaciones difíciles",
                text: "Construyan casas y vivan en ellas; planten jardines y coman de sus frutos... Busquen la paz de la ciudad... Cuando se cumplan los 70 años en Babilonia, yo les prestaré atención."
              },
              {
                reference: "Salmo 146:5",
                purpose: "Muestra que Jehová es nuestra fuente de felicidad",
                text: "Feliz es el que tiene al Dios de Jacob como su ayudador, el que espera en Jehová su Dios."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿Por qué podemos mantener la alegría incluso cuando tenemos problemas?",
            textLSM: "",
            paragraphs: [10],
            answer: "Podemos mantener la alegría incluso cuando nuestra vida no es ideal o nos pasan cosas terribles porque nuestra felicidad no depende de nuestras circunstancias. Cuando pasamos por problemas, no perdemos la alegría porque tenemos presentes las promesas de Jehová. Nuestro Padre nos ayuda a seguir siendo felices pase lo que pase. Todos nuestros problemas son temporales, como huellas en la orilla del mar que el agua borra sin dejar rastro.",
            answerBullets: [
              "**Nuestra felicidad no depende de las circunstancias** - Podemos ser felices aunque la vida no sea ideal",
              "**Tenemos presentes las promesas de Jehová** - Esto nos ayuda a no perder la alegría",
              "**Podemos expresar nuestras emociones** - No significa que no podamos llorar, pero Jehová nos ayuda",
              "**Los problemas son temporales** - Como huellas en la orilla del mar que el agua borra (Sal. 126:5)"
            ],
            flashcards: [
              {
                question: "¿Por qué podemos mantener la alegría incluso con problemas?",
                answer: "Porque nuestra felicidad no depende de nuestras circunstancias y tenemos presentes las promesas de Jehová."
              },
              {
                question: "¿A qué se comparan nuestros problemas en el párrafo 10?",
                answer: "A huellas en la orilla del mar que el agua borra sin dejar rastro. Son temporales."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 126:5",
                purpose: "Muestra que podemos tener alegría a pesar de las dificultades",
                text: "Los que siembran con lágrimas cosecharán con gritos de alegría."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Cómo te anima el ejemplo del apóstol Pablo?",
            textLSM: "",
            paragraphs: [11],
            answer: "El ejemplo de Pablo nos anima porque aunque Jesús le encomendó una labor muy importante (llevar la verdad a las naciones, reyes e hijos de Israel), su vida estuvo llena de dificultades. Pero eso no significaba que había perdido la aprobación de Dios. Precisamente el hecho de que aguantara era prueba de que Jehová estaba con él. Si estamos aguantando con fidelidad a pesar de nuestros problemas, podemos estar seguros de que contamos con la aprobación de Jehová.",
            answerBullets: [
              "**Pablo recibió una labor importante** - Llevar la verdad a las naciones, reyes e hijos de Israel (Hech. 9:15)",
              "**Su vida estuvo llena de dificultades** - Sufrió muchos problemas (2 Cor. 11:23-27)",
              "**No perdió la aprobación de Dios** - Sus problemas no significaban que Jehová lo había abandonado",
              "**Aguantar es prueba de aprobación** - Si aguantamos con fidelidad, Jehová está con nosotros (Rom. 5:3-5)"
            ],
            flashcards: [
              {
                question: "¿Qué labor le encomendó Jesús a Pablo?",
                answer: "Llevar la verdad «a las naciones, así como a reyes y a los hijos de Israel» (Hechos 9:15)."
              },
              {
                question: "¿Qué prueba el ejemplo de Pablo sobre los problemas y la aprobación de Dios?",
                answer: "Que tener dificultades no significa perder la aprobación de Dios. Aguantar con fidelidad es prueba de que Jehová está con nosotros."
              }
            ],
            biblicalCards: [
              {
                reference: "Hechos 9:15",
                purpose: "Muestra la importante asignación de Pablo",
                text: "Pero el Señor le dijo: «¡Ponte en camino! porque este hombre es mi instrumento elegido para llevar mi nombre a las naciones, así como a reyes y a los hijos de Israel»."
              },
              {
                reference: "Romanos 5:3-5",
                purpose: "Explica cómo el aguante produce esperanza",
                text: "No solo eso, sino que también nos gloriamos en las dificultades, sabiendo que la dificultad produce aguante; el aguante, una condición aprobada; la condición aprobada, esperanza."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Por qué podrían robarnos la alegría las expectativas que no se cumplen?",
            textLSM: "",
            paragraphs: [12],
            section: "LADRÓN NÚMERO 2: LAS EXPECTATIVAS QUE NO SE CUMPLEN",
            answer: "Las expectativas que no se cumplen son el ladrón número 2 que puede robarnos la alegría. Nos ponemos metas para demostrarle amor y gratitud a Jehová, pero si no son realistas podríamos desanimarnos. Por ejemplo, algunos querían ir a la Escuela para Evangelizadores del Reino, servir en el extranjero o trabajar en construcción, pero sus circunstancias cambiaron. Es muy frustrante querer hacer cosas pero no poder lograrlas.",
            answerBullets: [
              "**Ladrón número 2: expectativas que no se cumplen** - Puede robarnos la alegría (Prov. 13:12)",
              "**Nos ponemos metas por amor a Jehová** - Pero deben adaptarse a nuestras circunstancias",
              "**Metas no realistas causan desánimo** - «Un corazón enfermo» por la esperanza aplazada (Prov. 17:22)",
              "**Frustrante querer y no poder** - Las circunstancias pueden cambiar e impedir nuestras metas"
            ],
            flashcards: [
              {
                question: "¿Cuál es el 'ladrón número 2' que puede robarnos la alegría?",
                answer: "Las expectativas que no se cumplen. Si nuestras metas no son realistas, podríamos desanimarnos."
              },
              {
                question: "¿Por qué debemos adaptar nuestras metas a nuestras circunstancias?",
                answer: "Porque si no son realistas podríamos desanimarnos. Las circunstancias pueden cambiar y es frustrante querer hacer cosas pero no poder lograrlas."
              }
            ],
            biblicalCards: [
              {
                reference: "Proverbios 13:12",
                purpose: "Describe el efecto de la esperanza aplazada",
                text: "Una esperanza aplazada enferma el corazón, pero un deseo cumplido es un árbol de vida."
              },
              {
                reference: "Proverbios 17:22",
                purpose: "Muestra el efecto del desánimo en nuestra salud",
                text: "Un corazón alegre es buena medicina, pero un espíritu desalentado seca los huesos."
              }
            ]
          },
          {
            number: "13",
            textEs: "Si nuestras circunstancias no nos permiten hacer tanto como nos gustaría, ¿qué metas sí están a nuestro alcance?",
            textLSM: "",
            paragraphs: [13],
            answer: "Jehová no es exigente y no nos pide más de lo que podemos hacer. Lo que nos hace valiosos para él no son las responsabilidades, sino nuestras cualidades. Metas que sí están a nuestro alcance: hacernos amigos de algún joven para ayudarlo a progresar, ser apoyo para los hermanos mayores, ponernos la meta de animar a alguien en persona, por teléfono o con mensajes. Podemos reservar algunas metas para el nuevo mundo, donde podremos hacer muchísimas más cosas.",
            answerBullets: [
              "**Jehová no es exigente** - No nos pide más de lo que podemos hacer",
              "**Lo que somos vale más que lo que hacemos** - Nuestras cualidades pesan más que las responsabilidades",
              "**Metas al alcance** - Ayudar a jóvenes, apoyar a mayores, animar a otros (Miq. 6:8; 1 Cor. 4:2)",
              "**Reservar metas para el nuevo mundo** - Tenemos toda una eternidad por delante"
            ],
            flashcards: [
              {
                question: "¿Qué metas están a nuestro alcance si no podemos hacer tanto como nos gustaría?",
                answer: "Hacernos amigos de jóvenes para ayudarlos, apoyar a hermanos mayores, animar a otros en persona, por teléfono o con mensajes."
              },
              {
                question: "¿Qué hace que los siervos de Jehová seamos valiosos para él?",
                answer: "No son las responsabilidades que tenemos, sino nuestras bonitas cualidades. Lo que somos por dentro pesa más que lo que hacemos."
              }
            ],
            biblicalCards: [
              {
                reference: "Miqueas 6:8",
                purpose: "Muestra lo que Jehová espera de nosotros",
                text: "Él te ha dicho lo que es bueno. ¿Y qué te pide Jehová? Que practiques la justicia, que ames la lealtad y que seas modesto al andar con tu Dios."
              },
              {
                reference: "1 Corintios 4:2",
                purpose: "Destaca la importancia de ser fieles",
                text: "En este caso, además, lo que se espera de los mayordomos es que se los encuentre fieles."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿Qué otra cosa puede robarnos la alegría?",
            textLSM: "",
            paragraphs: [14],
            section: "LADRÓN NÚMERO 3: CENTRARTE SOLO EN TI Y EN TUS DESEOS",
            answer: "El ladrón número 3 es centrarte solo en ti y en tus deseos. Las redes sociales promueven la idea de que la clave para ser feliz está en viajar, ir de compras, dedicarte a tus hobbies y darte todos los caprichos. No está mal disfrutar de lo que nos gusta, pero muchas personas han visto que esas cosas en realidad les han robado la felicidad. Cuando te centras solo en ti, nunca tienes suficiente, siempre te quedas con ganas de más. Esa actitud produce tristeza y decepción.",
            answerBullets: [
              "**Ladrón número 3: centrarte en ti mismo** - Enfocarte solo en tus deseos roba la alegría",
              "**Las redes sociales promueven esto** - Viajar, compras, hobbies, caprichos como clave de felicidad",
              "**Disfrutar está bien** - Jehová nos creó para disfrutar, pero no debe ser el centro",
              "**Nunca tienes suficiente** - Centrarte en ti produce tristeza y decepción, siempre quieres más"
            ],
            flashcards: [
              {
                question: "¿Cuál es el 'ladrón número 3' que puede robarnos la alegría?",
                answer: "Centrarte solo en ti y en tus deseos. Cuando te enfocas solo en ti, nunca tienes suficiente y siempre quieres más."
              },
              {
                question: "¿Qué promueven las redes sociales como clave de la felicidad?",
                answer: "Viajar, ir de compras, dedicarte a tus hobbies y darte todos los caprichos que puedas."
              }
            ],
            biblicalCards: []
          },
          {
            number: "15",
            textEs: "¿Qué nos enseña lo que le pasó al rey Salomón?",
            textLSM: "",
            paragraphs: [15],
            answer: "Salomón quiso comprobar si podía conseguir la felicidad centrándose en satisfacer sus deseos personales. Se dedicó a disfrutar de buena comida, música y todos los lujos de su época. El resultado fue que acabó tan decepcionado que escribió: «El ojo no se satisface con lo que ve ni se llena el oído con lo que oye». Las ideas del mundo sobre cómo conseguir la felicidad son como billetes falsos: parecen tener valor pero en realidad no sirven de nada.",
            answerBullets: [
              "**Salomón hizo un experimento** - Quiso ver si satisfacer sus deseos le daba felicidad",
              "**Disfrutó de todo** - Buena comida, música y todos los lujos de su época",
              "**El resultado fue decepción** - «El ojo no se satisface con lo que ve» (Ecl. 1:8; 2:1-11)",
              "**Ideas del mundo como billetes falsos** - Parecen tener valor pero no sirven de nada"
            ],
            flashcards: [
              {
                question: "¿Qué experimento hizo el rey Salomón y cuál fue el resultado?",
                answer: "Se dedicó a satisfacer todos sus deseos personales (comida, música, lujos). Acabó tan decepcionado que escribió que «el ojo no se satisface con lo que ve»."
              },
              {
                question: "¿A qué se comparan las ideas del mundo sobre la felicidad?",
                answer: "A billetes falsos: parecen tener valor pero en realidad no sirven de nada."
              }
            ],
            biblicalCards: [
              {
                reference: "Eclesiastés 1:8",
                purpose: "Muestra la decepción de Salomón al buscar la felicidad en cosas materiales",
                text: "Todas las cosas son fatigosas; nadie puede expresarlo del todo. El ojo no se satisface con lo que ve ni se llena el oído con lo que oye."
              },
              {
                reference: "Eclesiastés 2:1-11",
                purpose: "Describe el experimento de Salomón buscando la felicidad",
                text: "Dije en mi corazón: «Vamos, déjame probarte con el placer. Disfruta de las cosas buenas»... Amasé para mí plata y oro... y todo resultó ser vanidad."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Por qué seremos felices si hacemos cosas por otros? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [16],
            image: "https://i.imgur.com/ICyhoBS.png",
            imageCaption: "Hay más felicidad en dar que en recibir. (Vea el párrafo 16).",
            answer: "Jesús nos enseñó que «hay más felicidad en dar que en recibir». Cuanto más pensamos en otros, menos pensamos en nosotros mismos, y eso nos hace felices. Podemos: animar a alguien que pasa por dificultades, escucharlo con empatía, demostrarle compasión, recordarle que puede desahogarse con Jehová, asegurarle que Jehová no lo ha abandonado, prepararle algo de comer, dar un paseo con él, o invitarlo a predicar. Al concentrarnos en otros, somos una herramienta en manos de Jehová.",
            answerBullets: [
              "**Hay más felicidad en dar** - Jesús lo enseñó (Hech. 20:35)",
              "**Pensar en otros nos hace felices** - Cuanto más pensamos en otros, menos en nosotros",
              "**Maneras de ayudar** - Escuchar con empatía, compasión, animar, cocinar, pasear, predicar juntos",
              "**Somos herramienta de Jehová** - Al concentrarnos en otros y no en nosotros (Prov. 11:25)"
            ],
            flashcards: [
              {
                question: "¿Qué principio enseñó Jesús sobre la felicidad?",
                answer: "«Hay más felicidad en dar que en recibir» (Hechos 20:35)."
              },
              {
                question: "¿Qué cosas prácticas podemos hacer por otros para ser felices?",
                answer: "Escucharlos con empatía, demostrar compasión, animarlos, prepararles comida, dar un paseo, invitarlos a predicar."
              }
            ],
            biblicalCards: [
              {
                reference: "Hechos 20:35",
                purpose: "Principio de Jesús sobre la felicidad",
                text: "En todo les he mostrado que trabajando así deben ayudar a los débiles y tener presentes las palabras del Señor Jesús, que él mismo dijo: «Hay más felicidad en dar que en recibir»."
              },
              {
                reference: "Proverbios 11:25",
                purpose: "Muestra la bendición de dar a otros",
                text: "El alma generosa será prosperada, y el que refresca a otros será refrescado él también."
              },
              {
                reference: "Salmo 55:22",
                purpose: "Recordarle a otros que pueden desahogarse con Jehová",
                text: "Echa tu carga sobre Jehová, y él te sostendrá. Él nunca permitirá que el justo caiga."
              }
            ]
          },
          {
            number: "17",
            textEs: "Si queremos sentirnos realmente felices, ¿qué debemos hacer? (Salmo 43:4).",
            textLSM: "",
            paragraphs: [17],
            readText: "LEE Salmo 43:4",
            answer: "Para sentirnos realmente felices debemos acercarnos cada vez más a nuestro Padre celestial. La Biblia dice que Jehová es nuestra «máxima alegría». Sin importar los problemas que tengamos, podemos estar tranquilos. Si nos aferramos siempre a Jehová, él nos ayudará a ser felices por toda la eternidad.",
            answerBullets: [
              "**Acercarnos más a Jehová** - Es la clave para la verdadera felicidad",
              "**Jehová es nuestra «máxima alegría»** - Salmo 43:4 lo declara",
              "**Podemos estar tranquilos** - Sin importar los problemas que tengamos",
              "**Felicidad eterna** - Si nos aferramos a Jehová, él nos ayudará para siempre (Sal. 144:15)"
            ],
            flashcards: [
              {
                question: "Según Salmo 43:4, ¿quién es nuestra «máxima alegría»?",
                answer: "Jehová es nuestra «máxima alegría». Si nos acercamos a él, seremos felices."
              },
              {
                question: "¿Qué promesa tenemos si nos aferramos a Jehová?",
                answer: "Él nos ayudará a ser felices por toda la eternidad, sin importar los problemas que tengamos ahora."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 43:4",
                purpose: "Texto temático del artículo - Jehová es nuestra máxima alegría",
                text: "Iré al altar de Dios, a Dios, mi máxima alegría. Te alabaré con el arpa, oh Dios, mi Dios."
              },
              {
                reference: "Salmo 144:15",
                purpose: "Muestra la felicidad de quienes tienen a Jehová como su Dios",
                text: "¡Feliz el pueblo que tiene estas cosas! ¡Feliz el pueblo cuyo Dios es Jehová!"
              }
            ]
          }
        ],
        paragraphs: [
          { number: 1, content: "EN EL mundo en el que vivimos, las personas están obsesionadas con la idea de ser felices. Pero, a pesar de sus esfuerzos, la felicidad que consiguen es pasajera. Es más, muchos se sienten terriblemente tristes y vacíos. Y es posible que algunos siervos de Jehová también se sientan así. Como estamos viviendo \"en los últimos días\", tenemos que hacer frente a situaciones y emociones \"difíciles de soportar\" (2 Tim. 3:1)." },
          { number: 2, content: "En este artículo veremos qué cosas pueden robarnos la alegría y qué podemos hacer para recuperarla. Pero primero vamos a hablar de quién puede darnos la verdadera felicidad." },
          { number: 3, content: "Jehová siempre ha sido feliz y quiere que nosotros también lo seamos. Por eso ha creado tantas cosas que nos llenan de alegría, como nuestro hermoso planeta, una inmensa variedad de colores, deliciosos alimentos y animales que nos hacen reír con sus juegos. Sin duda, Jehová nos ama y desea que disfrutemos de la vida." },
          { number: 4, content: "Aunque Jehová es el \"Dios feliz\", conoce muy bien todo el sufrimiento que hay en el mundo (1 Tim. 1:11). Pero no deja que eso le robe la alegría. Sabe que todo ese sufrimiento es temporal; de hecho, él mismo le ha puesto fecha de caducidad. Y espera con paciencia a que llegue el día de acabar para siempre con todo el dolor y la tristeza. Mientras tanto, está muy pendiente de cómo nos sentimos y hace algo por nosotros: nos ayuda a estar alegres y felices (lee Salmo 16:11). Veamos cómo hizo eso con su Hijo, Jesús." },
          { number: 5, content: "Después de Jehová, la persona más feliz que existe es Jesús. ¿Por qué? Una razón es que \"él es la imagen del Dios invisible\" y refleja a la perfección todas las cualidades de su Padre (Col. 1:15; 1 Tim. 6:15). Otra razón es que ha pasado más tiempo que nadie junto a Jehová, la única fuente de la verdadera felicidad." },
          { number: 6, content: "Además, Jesús se siente feliz porque siempre hace lo que su Padre quiere que haga (Prov. 8:30, 31; Juan 8:29). Debido a su obediencia, cuenta con el favor y con la aprobación de Jehová (Mat. 3:17)." },
          { number: 7, content: "Nosotros también podemos sentirnos realmente felices si nos acercamos cada vez más a Jehová. Cuanto más tiempo pasemos aprendiendo acerca de él, mejor lo imitaremos y más felices seremos. Otra cosa que nos llena de alegría es hacer su voluntad y saber que contamos con su aprobación (Sal. 33:12). Aun así, puede que haya momentos o épocas de nuestra vida en los que sintamos que hemos perdido la alegría. ¿Significa eso que ya no tenemos la aprobación de Dios? Por supuesto que no. Jehová entiende que somos imperfectos y que a veces sentimos dolor, tristeza y depresión (Sal. 103:14). Veamos ahora qué cosas son como ladrones que pueden robarnos la alegría y qué podemos hacer para recuperarla." },
          { number: 8, content: "Ladrón número 1: los problemas de la vida. Quizás estemos sufriendo a causa de la persecución, un desastre natural, la pobreza, una enfermedad o la edad avanzada. Esas situaciones pueden robarnos la alegría, sobre todo si no podemos hacer nada para cambiar las cosas. La Biblia dice que \"un corazón angustiado aplasta el ánimo\" (Prov. 15:13). Veamos el caso de un anciano llamado Babis, que perdió a su hermano y a sus padres en solo cuatro años. Él cuenta cómo se sentía mientras ellos todavía vivían: \"Sentía que estaba solo y que nadie podía ayudarme. Tenía que lidiar con tantas cosas que me partía el corazón no poder pasar tanto tiempo con ellos como quería\". Como vemos, los golpes de la vida pueden hundirnos física y emocionalmente." },
          { number: 9, content: "¿Qué podemos hacer para recuperar la alegría? Ser realistas y estar agradecidos. El mundo promueve la idea de que para ser felices nuestra vida tiene que ser de color de rosa, pero eso no es verdad. Por ejemplo, Jehová les dijo a los judíos desterrados en Babilonia que, aunque la situación fuera difícil, trataran de aceptarla y llevarla lo mejor posible (lee Jeremías 29:4-7, 10). ¿Qué puedes aprender? Trata de aceptar que tus circunstancias son las que son y agradecer las cosas buenas que tienes. Y recuerda que Jehová está a tu lado y te va a ayudar (Sal. 63:7; 146:5). Una hermana llamada Efi, que quedó paralítica a causa de un accidente, dice: \"Jehová, mi familia y la congregación me ayudaron y me apoyaron muchísimo. Siento que rendirme sería una falta de gratitud hacia ellos, así que me esfuerzo por mantener una actitud positiva y alegre\"." },
          { number: 10, content: "Incluso cuando nuestra vida no es ideal o nos pasan cosas terribles a nosotros o a nuestra familia, podemos mantener la alegría (Sal. 126:5). ¿Por qué? Porque nuestra felicidad no depende de nuestras circunstancias. Una precursora llamada María dice: \"Cuando pasamos por problemas, no perdemos la alegría porque tenemos presentes las promesas de Jehová. Eso no significa que no podamos llorar o expresar lo que sentimos. Pero nuestro Padre nos ayuda a seguir siendo felices pase lo que pase\". Aunque ahora nuestra vida sea muy difícil, recordemos que todos nuestros problemas son tan temporales como unas huellas en la orilla del mar que el agua borra sin dejar rastro. Dentro de poco, Jehová hará lo mismo con nuestros problemas." },
          { number: 11, content: "¿Y si empezamos a pensar que tenemos problemas porque hemos perdido la aprobación de Jehová? Algo que puede ayudarnos es meditar en siervos fieles de Jehová que se enfrentaron a situaciones muy difíciles. Pensemos por ejemplo en el apóstol Pablo. El propio Jesús le encomendó una labor muy importante: llevar la verdad \"a las naciones, así como a reyes y a los hijos de Israel\" (Hech. 9:15). Sin embargo, la vida de Pablo estuvo llena de dificultades (2 Cor. 11:23-27). ¿Significa eso que había perdido la aprobación de Dios? ¡Claro que no! Precisamente el hecho de que aguantara era prueba de que Jehová estaba con él (Rom. 5:3-5). Ahora piensa en tu situación. Como estás aguantando con fidelidad a pesar de todos tus problemas, puedes estar seguro de que cuentas con la aprobación de Jehová." },
          { number: 12, content: "Ladrón número 2: las expectativas que no se cumplen (Prov. 13:12). Los siervos de Jehová nos ponemos metas para demostrarle el amor y la gratitud que sentimos por él. Ahora bien, esas metas tienen que adaptarse a nuestras circunstancias. Si no son realistas, podríamos desanimarnos (Prov. 17:22). Una precursora llamada Holly explica: \"Quería ir a la Escuela para Evangelizadores del Reino, servir en el extranjero o trabajar en el proyecto de construcción de Ramapo. Pero mis circunstancias cambiaron y me dio una tristeza enorme no poder alcanzar ninguna de esas metas. Es muy frustrante querer hacer cosas pero no poder lograrlo\". Muchos hermanos se sienten igual." },
          { number: 13, content: "¿Qué podemos hacer para recuperar la alegría? Recordar que Jehová no es exigente y no nos pide más de lo que podemos hacer. Lo que hace que sus siervos seamos valiosos para él no son las responsabilidades que tenemos, sino nuestras bonitas cualidades. Lo que somos por dentro pesa más que lo que hacemos en nuestro servicio a Jehová. Él quiere que seamos modestos y fieles (Miq. 6:8; 1 Cor. 4:2). Entonces, ¿sería razonable exigirnos más de lo que Jehová nos pide que hagamos? Por supuesto que no. Así que, si tus circunstancias no te permiten hacer tanto como te gustaría, procura centrarte en lo que sí puedes hacer. Por ejemplo, ¿podrías hacerte amigo de algún joven de la congregación para ayudarlo a progresar? ¿Podrías ser un apoyo para los hermanos mayores? ¿Podrías ponerte la meta de animar a alguien, ya sea en persona, por teléfono o con mensajes? Si buscas maneras que estén a tu alcance de ayudar a los demás, Jehová bendecirá tus esfuerzos. Y piensa que muy pronto, en el nuevo mundo, podremos hacer muchísimas más cosas por Jehová... cosas que ahora ni siquiera imaginamos. Holly, mencionada en el párrafo anterior, dice: \"Cuando me siento un poco desanimada, me paro a pensar y me recuerdo a mí misma que tengo toda una eternidad por delante. Tengo reservadas algunas metas para el nuevo mundo, y Jehová me ayudará a cumplirlas\"." },
          { number: 14, content: "Ladrón número 3: centrarte solo en ti y en tus deseos. Algunos usan las redes sociales para promover la idea de que la clave para ser feliz y sentirte realizado está en viajar, ir de compras, dedicarte a tus hobbies y darte todos los caprichos que puedas. No está mal disfrutar de lo que nos gusta. A fin de cuentas, es Jehová quien nos ha creado así. Sin embargo, muchas personas han visto que las cosas que creían que les iban a dar la felicidad en realidad se la han robado. Una precursora llamada Eva dice: \"Cuando te centras solo en ti y en tus deseos, nunca tienes suficiente, siempre te quedas con ganas de más\". Esa actitud produce tristeza y decepción." },
          { number: 15, content: "Pensemos en lo que le pasó al rey Salomón. Él quiso comprobar si podía conseguir la felicidad centrándose en satisfacer sus deseos personales. Así que se dedicó a disfrutar de buena comida y música, y de todos los lujos que existían en su época. ¿Cuál fue el resultado? Acabó tan decepcionado que escribió: \"El ojo no se satisface con lo que ve ni se llena el oído con lo que oye\" (Ecl. 1:8; 2:1-11). Las ideas del mundo sobre cómo conseguir la felicidad verdadera son como los billetes falsos: parecen tener valor pero en realidad no sirven de nada." },
          { number: 16, content: "¿Qué podemos hacer para recuperar la alegría? Jesús nos enseñó que \"hay más felicidad en dar que en recibir\" (Hech. 20:35). Un anciano llamado Alekos explica: \"Me centro en hacer cosas sencillas por los demás. Cuanto más pienso en otros, menos pienso en mí, y eso me hace feliz\". ¿Qué cosas puedes hacer tú por los demás? Si sabes de alguien que está pasando por una situación difícil, trata de animarlo. Quizás no puedas solucionar sus problemas, pero le harás mucho bien si lo escuchas con empatía, le demuestras compasión y le recuerdas que puede desahogarse con Jehová (Sal. 55:22; 68:19). También es bueno que le asegures que Jehová no lo ha abandonado (Sal. 37:28; Is. 59:1). Incluso podrías ofrecerte a prepararle algo de comer o a dar un paseo con él. Invítalo a predicar contigo, eso seguro que le levantará el ánimo. Al concentrarte en otros y no en ti mismo, serás como una herramienta en manos de Jehová y además te sentirás feliz de verdad (Prov. 11:25)." },
          { number: 17, content: "Podemos sentirnos realmente felices si nos acercamos cada vez más a nuestro Padre celestial. La Biblia dice que Jehová es nuestra \"máxima alegría\" (lee Salmo 43:4). Así que, sin importar los problemas que tengamos, podemos estar tranquilos. Aferrémonos siempre a Jehová, y él nos ayudará a ser felices por toda la eternidad (Sal. 144:15)." }
        ],
        reviewQuestions: [
          {
            question: "¿Por qué son felices Jehová y Jesús?"
          },
          {
            question: "¿Qué tres \"ladrones\" pueden robarnos la alegría?"
          },
          {
            question: "¿Qué podemos hacer para recuperar la alegría?"
          }
        ],
        finalSong: "Canción 155: Mi mayor felicidad"
      },

      // Artículo 41: "El amor de Dios dura para siempre" (15-21 Dic)
      {
        metadata: {
          articleNumber: 41,
          week: "15-21 Dic",
          month: "Octubre",
          year: 2025
        },
        song: "Canción 108: El amor leal de Jehová",
        title: "El amor de Dios dura para siempre",
        biblicalText: "\"Denle gracias a Jehová porque él es bueno; su amor leal dura para siempre\" (SAL. 136:1).",
        theme: "Tener presente que el amor de Jehová es una enseñanza básica de la Biblia nos puede ayudar a luchar contra el desánimo.",
        questions: [
          {
            number: "1, 2",
            textEs: "¿Cómo se sienten muchos hermanos ante los golpes de la vida?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: "Los golpes de la vida pueden hacer que nuestras emociones suban y bajen, como un barco en una tempestad. Un día estamos convencidos de que Jehová nos ama, y al siguiente pensamos que ni siquiera se fija en nosotros. Aunque palabras de ánimo nos hacen sentir mejor por un tiempo, las dudas pueden regresar. Quizás hasta nos parezca que Jehová ya no se preocupa por nosotros. Necesitamos «echar el ancla» para no perder nunca la seguridad de que Jehová nos ama.",
            answerBullets: [
              "**Como un barco en tempestad** - Los golpes de la vida hacen que las emociones suban y bajen",
              "**Dudas sobre el amor de Jehová** - Un día convencidos, al siguiente pensamos que no se fija en nosotros (Sal. 10:1; 13:1)",
              "**Las palabras de ánimo ayudan** - Pero las dudas pueden regresar (Prov. 17:17; 25:11)",
              "**Necesitamos «echar el ancla»** - Tener la seguridad de que Jehová nos ama y no perderla nunca"
            ],
            flashcards: [
              {
                question: "¿A qué se compara nuestra situación cuando los golpes de la vida nos afectan?",
                answer: "A un barco en medio de una furiosa tempestad. Las olas nos hacen subir y bajar emocionalmente."
              },
              {
                question: "¿Qué significa «echar el ancla» ante los problemas?",
                answer: "Tener la seguridad de que Jehová nos ama y nos ayuda, y no perderla nunca."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 13:1",
                purpose: "Expresa cómo podemos sentirnos cuando dudamos del amor de Jehová",
                text: "¿Hasta cuándo, oh, Jehová? ¿Me olvidarás para siempre? ¿Hasta cuándo me ocultarás tu rostro?"
              }
            ]
          },
          {
            number: "3",
            textEs: "a) ¿Qué es el amor leal? (Salmo 31:7; 136:1). b) ¿Por qué decimos que nadie muestra esta cualidad mejor que Jehová? (Mira también la imagen).",
            textLSM: "",
            paragraphs: [3],
            readText: "LEE Salmo 31:7; 136:1",
            answer: "El amor leal es un apego profundo y duradero que una persona le tiene a otra. Nadie muestra esta cualidad mejor que Jehová porque la Biblia dice que él está «lleno de amor leal» y que su amor leal por sus siervos «es inmenso». Esto significa que Jehová nunca abandona a sus siervos fieles. Recordar esto nos ayuda a mantener la estabilidad ante las tormentas de la vida.",
            answerBullets: [
              "**Amor leal = apego profundo y duradero** - Una persona lo tiene hacia otra",
              "**Jehová está «lleno de amor leal»** - Nadie muestra esta cualidad mejor que él (Éx. 34:6, 7)",
              "**Su amor leal «es inmenso»** - Por sus siervos (Sal. 86:5)",
              "**Nunca abandona a sus siervos fieles** - Nos da estabilidad ante las tormentas (Sal. 23:4)"
            ],
            flashcards: [
              {
                question: "¿Qué es el amor leal?",
                answer: "Es un apego profundo y duradero que una persona le tiene a otra."
              },
              {
                question: "¿Por qué nadie muestra el amor leal mejor que Jehová?",
                answer: "Porque la Biblia dice que él está «lleno de amor leal» y su amor leal por sus siervos «es inmenso». Nunca abandona a sus siervos fieles."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 136:1",
                purpose: "Texto temático - El amor leal de Jehová dura para siempre",
                text: "Denle gracias a Jehová porque él es bueno; su amor leal dura para siempre."
              },
              {
                reference: "Salmo 31:7",
                purpose: "Muestra la confianza en el amor leal de Jehová",
                text: "Estaré muy feliz y me alegraré por tu amor leal, porque tú has visto mi aflicción; conoces bien las angustias de mi alma."
              },
              {
                reference: "Éxodo 34:6, 7",
                purpose: "Describe a Jehová como lleno de amor leal",
                text: "Jehová, Jehová, un Dios compasivo y misericordioso, lento para la ira y lleno de amor leal y de verdad."
              }
            ]
          },
          {
            number: "4",
            textEs: "¿Cuáles son algunas enseñanzas básicas de la Biblia? ¿Por qué no dejamos que nada nos haga creer lo contrario?",
            textLSM: "",
            paragraphs: [4],
            answer: "Las enseñanzas básicas de la Biblia son verdades fundamentales: el nombre de Dios es Jehová, Jesús es su Hijo unigénito, los muertos están inconscientes, la Tierra será un paraíso y los humanos vivirán en ella para siempre. Una vez convencidos de que estas enseñanzas son ciertas porque están basadas en hechos y pruebas, ya no dejamos que nada nos haga creer lo contrario. Si vemos el amor de Jehová como una enseñanza básica, nos será más fácil rechazar la idea de que él no se fija en nosotros.",
            answerBullets: [
              "**El nombre de Dios es Jehová** - Verdad fundamental (Sal. 83:18)",
              "**Jesús es el Hijo unigénito** - No es igual a Dios (Juan 3:16)",
              "**Los muertos están inconscientes** - No hay infierno de fuego (Ecl. 9:5)",
              "**La Tierra será un paraíso** - Los humanos vivirán para siempre (Apoc. 21:3, 4)",
              "**El amor de Jehová es enseñanza básica** - Rechazamos la idea de que no se fija en nosotros"
            ],
            flashcards: [
              {
                question: "¿Cuáles son algunas enseñanzas básicas de la Biblia?",
                answer: "El nombre de Dios es Jehová, Jesús es su Hijo unigénito, los muertos están inconscientes, la Tierra será un paraíso y los humanos vivirán para siempre."
              },
              {
                question: "¿Por qué debemos ver el amor de Jehová como una enseñanza básica?",
                answer: "Porque así nos será más fácil rechazar la idea de que él no se fija en nosotros o no se preocupa por lo que nos pasa."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 83:18",
                purpose: "Enseñanza básica: el nombre de Dios",
                text: "Para que la gente sepa que tú, cuyo nombre es Jehová, solo tú eres el Altísimo sobre toda la tierra."
              },
              {
                reference: "Apocalipsis 21:3, 4",
                purpose: "Enseñanza básica: la Tierra será un paraíso",
                text: "Él les secará toda lágrima de los ojos, y la muerte ya no existirá, ni tampoco el luto, el llanto ni el dolor."
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Cómo llega una persona a rechazar las creencias falsas?",
            textLSM: "",
            paragraphs: [5],
            answer: "Cuando empezamos a estudiar la Biblia, comparamos lo que enseñaba nuestra religión con lo que enseña la Biblia. Si antes creíamos algo falso (por ejemplo, que Jesús es Dios), analizamos lo que dice la Biblia, nos dimos cuenta de que era falso, lo dejamos a un lado y aceptamos la verdad. Las enseñanzas falsas pueden estar «fuertemente atrincheradas», pero una vez que logramos dejarlas atrás, no permitimos que nada nos haga volver a ellas.",
            answerBullets: [
              "**Comparar con la Biblia** - Lo que enseñaba nuestra religión vs. lo que enseña la Biblia",
              "**Preguntarse: «¿Es eso cierto?»** - Analizar lo que dice la Palabra de Dios",
              "**Aceptar la verdad** - Jesús es «el primogénito de toda la creación» (Col. 1:15; Juan 3:18)",
              "**No volver atrás** - Una vez dejadas las falsedades, no permitir que nada nos haga volver (Filip. 3:13)"
            ],
            flashcards: [
              {
                question: "¿Cómo llegamos a rechazar las creencias falsas al estudiar la Biblia?",
                answer: "Comparando lo que enseñaba nuestra religión con la Biblia, preguntándonos si era cierto, y aceptando la verdad bíblica."
              },
              {
                question: "¿Qué actitud debemos tener hacia las creencias falsas que dejamos atrás?",
                answer: "No permitir que nada nos haga volver a ellas, aunque estuvieran «fuertemente atrincheradas» (2 Cor. 10:4, 5)."
              }
            ],
            biblicalCards: [
              {
                reference: "Colosenses 1:15",
                purpose: "La verdad sobre Jesús: el primogénito de la creación",
                text: "Él es la imagen del Dios invisible, el primogénito de toda la creación."
              },
              {
                reference: "2 Corintios 10:4, 5",
                purpose: "Derrumbar creencias falsas fuertemente atrincheradas",
                text: "Las armas de nuestra guerra no son físicas, sino que tienen el poder de Dios para derrumbar cosas fuertemente atrincheradas."
              }
            ]
          },
          {
            number: "6",
            textEs: "¿Por qué en el Salmo 136 se repite tantas veces la frase \"su amor leal dura para siempre\"?",
            textLSM: "",
            paragraphs: [6],
            answer: "La frase «su amor leal dura para siempre» se repite 26 veces en el Salmo 136 porque el hecho de que Dios siente amor leal por su pueblo es una verdad bíblica tan fundamental como las otras enseñanzas básicas que llegamos a hacer nuestras. Si empezamos a pensar que Jehová no nos ama, debemos preguntarnos: «¿Es eso cierto?» y comparar nuestras dudas con lo que la Biblia enseña. La idea de que a Jehová no le importamos no es cierta, así que debemos rechazarla con firmeza.",
            answerBullets: [
              "**26 veces se repite** - «Su amor leal dura para siempre» en el Salmo 136",
              "**Es una verdad fundamental** - Tan básica como otras enseñanzas que hacemos nuestras",
              "**Preguntarse: «¿Es cierto que no me ama?»** - Comparar dudas con lo que enseña la Biblia",
              "**Rechazar la idea falsa** - Que a Jehová no le importamos, con la misma firmeza que otras falsedades"
            ],
            flashcards: [
              {
                question: "¿Cuántas veces se repite «su amor leal dura para siempre» en el Salmo 136?",
                answer: "26 veces. Esto enfatiza que el amor leal de Jehová es una verdad bíblica fundamental."
              },
              {
                question: "Si empezamos a pensar que Jehová no nos ama, ¿qué debemos hacer?",
                answer: "Preguntarnos «¿Es eso cierto?» y comparar nuestras dudas con lo que la Biblia enseña. Luego rechazar esa idea falsa con firmeza."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 136:1",
                purpose: "Inicio del salmo que repite 26 veces el amor leal",
                text: "Denle gracias a Jehová porque él es bueno; su amor leal dura para siempre."
              }
            ]
          },
          {
            number: "7",
            textEs: "¿Cuáles son algunos textos que nos confirman que Jehová sí nos ama?",
            textLSM: "",
            paragraphs: [7],
            answer: "Jesús dijo a sus discípulos: «Ustedes valen más que muchos gorriones» (Mat. 10:31) - no dijo «quizás valen más». Jehová dijo: «Yo te daré fuerzas. Sí, yo te ayudaré» (Is. 41:10) - no dijo «quizás te ayudaré». Estos textos no hablan de posibilidades, sino de certezas. Si al pasar por un problema dudamos del amor de Dios, debemos meditar en estos textos y hablarle a Jehová de nuestras dudas. Así podremos decir: «Hemos llegado a conocer el amor que Dios nos tiene y creemos en ese amor».",
            answerBullets: [
              "**«Ustedes valen más que muchos gorriones»** - Jesús lo dijo como certeza, no posibilidad (Mat. 10:31)",
              "**«Yo te daré fuerzas. Sí, yo te ayudaré»** - Jehová lo afirmó con certeza (Is. 41:10)",
              "**Meditar en estos textos** - Nos convencen de que Jehová sí nos ama",
              "**Hablar a Jehová de nuestras dudas** - Llegaremos a creer en su amor (1 Juan 4:16)"
            ],
            flashcards: [
              {
                question: "¿Qué textos nos confirman con certeza que Jehová nos ama?",
                answer: "Mateo 10:31: «Ustedes valen más que muchos gorriones». Isaías 41:10: «Yo te daré fuerzas. Sí, yo te ayudaré». No son posibilidades, son certezas."
              },
              {
                question: "¿Qué debemos hacer si dudamos del amor de Dios cuando pasamos por problemas?",
                answer: "Meditar en textos que confirman su amor y hablarle a Jehová de nuestras dudas."
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 10:31",
                purpose: "Certeza del valor que tenemos para Dios",
                text: "Así que no tengan miedo: ustedes valen más que muchos gorriones."
              },
              {
                reference: "Isaías 41:10",
                purpose: "Promesa de ayuda de Jehová",
                text: "No tengas miedo, porque estoy contigo. No mires con desconfianza, porque soy tu Dios. Yo te daré fuerzas. Sí, yo te ayudaré. Con mi mano derecha de justicia, de veras te sostendré."
              },
              {
                reference: "1 Juan 4:16",
                purpose: "Conocer y creer en el amor de Dios",
                text: "Y nosotros hemos llegado a conocer el amor que Dios nos tiene y creemos en ese amor. Dios es amor."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Qué podemos hacer si seguimos dudando de que Jehová nos quiere?",
            textLSM: "",
            paragraphs: [8],
            answer: "Si nos siguen entrando dudas, debemos comparar lo que sentimos con lo que sabemos. Aunque sintamos que no tenemos el amor de Dios, sabemos que eso no es cierto porque la Biblia nos enseña que Jehová nos ama. La Biblia siempre dice la verdad; en cambio, los sentimientos nos pueden engañar. Si creyéramos que Dios no nos ama, estaríamos pasando por alto que el amor es la esencia de su personalidad.",
            answerBullets: [
              "**Comparar sentimientos con conocimiento** - Lo que sentimos vs. lo que sabemos",
              "**La Biblia siempre dice la verdad** - Los sentimientos nos pueden engañar",
              "**Jehová nos ama** - Es lo que la Biblia enseña claramente",
              "**El amor es la esencia de Dios** - No podemos pasar por alto este hecho (1 Juan 4:8)"
            ],
            flashcards: [
              {
                question: "¿Qué debemos hacer si seguimos dudando de que Jehová nos quiere?",
                answer: "Comparar lo que sentimos con lo que sabemos. La Biblia dice la verdad; los sentimientos pueden engañarnos."
              },
              {
                question: "¿Por qué no debemos creer que Dios no nos ama?",
                answer: "Porque estaríamos pasando por alto que el amor es la esencia de su personalidad (1 Juan 4:8)."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Juan 4:8",
                purpose: "El amor es la esencia de la personalidad de Dios",
                text: "El que no ama no ha llegado a conocer a Dios, porque Dios es amor."
              }
            ]
          },
          {
            number: "9, 10",
            textEs: "¿De qué estaba hablando Jesús cuando dijo \"A ustedes el Padre mismo los quiere\"? (Juan 16:26, 27; mira también la imagen).",
            textLSM: "",
            paragraphs: [9, 10],
            readText: "LEE Juan 16:26, 27",
            section: "¿QUÉ QUISO DECIR JESÚS?",
            answer: "Jesús estaba hablando de la oración. Les explicó a sus discípulos que debían orar al Padre en nombre de él, pero no a él. Los discípulos podrían haber pensado que, como eran muy amigos de Jesús, él escucharía sus peticiones y se las transmitiría al Padre. Pero Jesús dejó claro que «el Padre mismo» los quería y escucharía personalmente sus oraciones. Esta es una verdad básica sobre la oración: Jehová nos quiere tanto que se encarga personalmente de escucharnos.",
            answerBullets: [
              "**Jesús hablaba de la oración** - Debían orar al Padre en su nombre, no a él",
              "**No usar a Jesús como intermediario** - No orarle a él para que transmita las peticiones",
              "**«El Padre mismo los quiere»** - Jehová escucha personalmente nuestras oraciones",
              "**Verdad básica sobre la oración** - Cada vez que oramos demostramos fe en que el Padre nos quiere (1 Juan 5:14)"
            ],
            flashcards: [
              {
                question: "¿De qué hablaba Jesús cuando dijo «A ustedes el Padre mismo los quiere»?",
                answer: "De la oración. Estaba explicando que debemos orar al Padre en nombre de Jesús, y que Jehová personalmente escucha nuestras oraciones porque nos quiere."
              },
              {
                question: "¿Qué verdad básica sobre la oración aprendemos de Juan 16:26, 27?",
                answer: "Que Jehová nos quiere tanto que se encarga personalmente de escuchar nuestras oraciones. No necesitamos que Jesús sea intermediario."
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 16:26, 27",
                purpose: "Jesús explica que el Padre mismo nos quiere y nos escucha",
                text: "Aquel día pedirán en mi nombre, y no les digo que les rogaré al Padre, porque a ustedes el Padre mismo los quiere, pues ustedes me han querido a mí y han creído que yo salí como representante de Dios."
              },
              {
                reference: "1 Juan 5:14",
                purpose: "Confianza de que Jehová escucha nuestras oraciones",
                text: "Esta es la confianza que tenemos en él: que él nos oye sin importar lo que le pidamos conforme a su voluntad."
              }
            ]
          },
          {
            number: "11",
            textEs: "¿Por qué se alegra Satanás si empezamos a dudar del amor de Jehová?",
            textLSM: "",
            paragraphs: [11],
            section: "¿DE DÓNDE VIENEN LAS DUDAS?",
            answer: "Satanás está «tratando de devorar» a cada uno de nosotros y desea que pensemos que Jehová no nos quiere. Fue el amor lo que impulsó a Jehová a dar el rescate, y Satanás quiere que sintamos que no merecemos ese regalo. Si dudamos del amor de Jehová o nos rendimos, Satanás se alegra. Pero él es quien ya no tiene el amor de Dios, así que es una de sus trampas más astutas hacernos creer que nosotros tampoco lo tenemos. Conocer sus intenciones nos motiva a oponernos a él con más fuerzas.",
            answerBullets: [
              "**Satanás quiere devorarnos** - Desea que pensemos que Jehová no nos quiere (1 Ped. 5:8)",
              "**El rescate vino del amor** - Satanás quiere que sintamos que no lo merecemos (Heb. 2:9)",
              "**¡Él ya no tiene el amor de Dios!** - Quiere hacernos creer que nosotros tampoco",
              "**Es una trampa astuta** - Conocer sus intenciones nos ayuda a oponernos (Efes. 6:11; Sant. 4:7)"
            ],
            flashcards: [
              {
                question: "¿Por qué se alegra Satanás si dudamos del amor de Jehová?",
                answer: "Porque quiere devorarnos y hacer que pensemos que Jehová no nos quiere. Si nos rendimos, él gana."
              },
              {
                question: "¿Por qué es irónico que Satanás quiera hacernos dudar del amor de Dios?",
                answer: "Porque él mismo es quien ya no tiene el amor de Dios, y ahora quiere que nosotros pensemos lo mismo."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Pedro 5:8",
                purpose: "Satanás trata de devorar a los siervos de Dios",
                text: "Mantengan la mente despejada y estén alerta. Su adversario, el Diablo, anda por ahí como un león rugiente, tratando de devorar a alguien."
              },
              {
                reference: "Santiago 4:7",
                purpose: "Cómo oponernos al Diablo",
                text: "Así que sométanse a Dios. Opónganse al Diablo, y él huirá de ustedes."
              }
            ]
          },
          {
            number: "12, 13",
            textEs: "¿Por qué el pecado heredado nos puede hacer dudar del amor de Jehová?",
            textLSM: "",
            paragraphs: [12, 13],
            answer: "El pecado heredado nos ha alejado de nuestro Creador y ha dañado nuestra mente, corazón y cuerpo. Ha tenido un efecto muy negativo en nuestras emociones: nos hace sentir culpabilidad, ansiedad, inseguridad y vergüenza. Estos sentimientos surgen cuando pecamos o porque somos conscientes de nuestra imperfección. Somos como un vehículo con una rueda desinflada: no funcionamos a plena capacidad. Por eso a veces dudamos del amor de Jehová, pero debemos recordar que él «les muestra amor leal a los que lo aman y obedecen sus mandamientos».",
            answerBullets: [
              "**El pecado nos alejó del Creador** - Ha dañado mente, corazón y cuerpo (Sal. 51:5; Rom. 5:12)",
              "**Efecto negativo en emociones** - Culpabilidad, ansiedad, inseguridad, vergüenza",
              "**Conscientes de nuestra imperfección** - Como un vehículo con rueda desinflada (Rom. 8:20, 21)",
              "**Jehová muestra amor leal** - A los que lo aman y obedecen sus mandamientos (Neh. 1:5)"
            ],
            flashcards: [
              {
                question: "¿Cómo nos afecta el pecado heredado emocionalmente?",
                answer: "Nos hace sentir culpabilidad, ansiedad, inseguridad y vergüenza. Estamos alejados de cómo Jehová nos diseñó."
              },
              {
                question: "¿A qué se compara nuestra condición imperfecta?",
                answer: "A un vehículo con una rueda desinflada: no podemos funcionar a plena capacidad como fuimos diseñados."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 51:5",
                purpose: "El pecado heredado desde el nacimiento",
                text: "Mira, nací culpable, mi madre me concibió en pecado."
              },
              {
                reference: "Romanos 8:20, 21",
                purpose: "La creación fue sometida a futilidad pero será liberada",
                text: "Porque la creación fue sometida a futilidad... con la esperanza de que la creación misma también será liberada de la esclavitud de la decadencia."
              },
              {
                reference: "Nehemías 1:5",
                purpose: "Jehová muestra amor leal a quienes lo aman",
                text: "Oh, Jehová, Dios del cielo, el Dios grande e imponente que les muestra amor leal a los que lo aman y obedecen sus mandamientos."
              }
            ]
          },
          {
            number: "14",
            textEs: "¿Por qué pensar en el rescate nos ayuda a dejar de dudar del amor de Jehová? (Romanos 5:8; mira también el recuadro \"Cuidado con el 'poder engañoso del pecado'\").",
            textLSM: "",
            paragraphs: [14],
            readText: "LEE Romanos 5:8",
            answer: "Puede que a veces sintamos que no merecemos el amor de Jehová. Y en sentido estricto eso es cierto, pero justamente por esa razón es tan especial el amor que nos tiene. No hay nada que podamos hacer para ganarnos su amor. Aun así, él nos quiere tanto que dio el rescate para poder perdonarnos. Jesús no vino para salvar a personas perfectas, sino a personas pecadoras (Rom. 5:8). Jehová no espera que hagamos las cosas perfectamente. Comprender que el pecado heredado nos puede hacer dudar nos motiva a luchar contra ese pensamiento.",
            answerBullets: [
              "**No merecemos el amor de Jehová** - Y justamente por eso es tan especial",
              "**No podemos ganárnoslo** - Pero él nos quiere y dio el rescate (1 Juan 4:10)",
              "**Jesús vino para pecadores** - No para personas perfectas (Rom. 5:8)",
              "**Jehová no espera perfección** - Sabe que no somos capaces (Rom. 7:24, 25)"
            ],
            flashcards: [
              {
                question: "¿Por qué es tan especial el amor de Jehová hacia nosotros?",
                answer: "Porque no lo merecemos y no hay nada que podamos hacer para ganárnoslo, pero aun así él nos lo da y dio el rescate."
              },
              {
                question: "¿A quiénes vino a salvar Jesús según Romanos 5:8?",
                answer: "A personas pecadoras, no perfectas. «Mientras todavía éramos pecadores, Cristo murió por nosotros»."
              }
            ],
            biblicalCards: [
              {
                reference: "Romanos 5:8",
                purpose: "Jehová demostró su amor dando a Jesús por pecadores",
                text: "Pero Dios nos demuestra su amor a nosotros en que, mientras todavía éramos pecadores, Cristo murió por nosotros."
              },
              {
                reference: "1 Juan 4:10",
                purpose: "El amor de Dios al enviar a su Hijo como sacrificio",
                text: "Él amor consiste en esto: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros y envió a su Hijo como sacrificio propiciatorio por nuestros pecados."
              },
              {
                reference: "Romanos 7:24, 25",
                purpose: "Liberación de la condición pecaminosa por medio de Cristo",
                text: "¡Miserable de mí! ¿Quién me rescatará de este cuerpo que me lleva a la muerte? ¡Gracias a Dios, por medio de Jesucristo nuestro Señor!"
              }
            ]
          },
          {
            number: "15, 16",
            textEs: "Si le somos leales a Jehová, ¿de qué podemos estar seguros, y por qué? (2 Samuel 22:26).",
            textLSM: "",
            paragraphs: [15, 16],
            readText: "LEE 2 Samuel 22:26",
            answer: "Si le somos leales a Jehová, podemos estar seguros de que él también lo será y no nos abandonará pase lo que pase. Cuando pasamos por situaciones difíciles, lo mejor es «echar el ancla»: recordar que Jehová nos ama y va a estar ahí para ayudarnos. Si alguna vez dudamos de su amor, recordemos que una cosa es lo que sentimos y otra cosa es lo que sabemos que es cierto. Nunca perdamos la confianza en esta verdad básica: el amor leal de Jehová dura para siempre.",
            answerBullets: [
              "**Si somos leales, él lo será** - No nos abandonará pase lo que pase (2 Sam. 22:26)",
              "**«Echar el ancla»** - Recordar que Jehová nos ama y nos ayudará",
              "**Sentimientos vs. verdad** - Lo que sentimos puede diferir de lo que sabemos",
              "**Verdad básica** - El amor leal de Jehová dura para siempre (Deut. 30:19, 20)"
            ],
            flashcards: [
              {
                question: "¿De qué podemos estar seguros si le somos leales a Jehová?",
                answer: "De que él también nos será leal y no nos abandonará pase lo que pase (2 Samuel 22:26)."
              },
              {
                question: "¿Qué verdad básica nunca debemos perder de vista?",
                answer: "El amor leal de Jehová dura para siempre. Una cosa es lo que sentimos y otra lo que sabemos que es cierto."
              }
            ],
            biblicalCards: [
              {
                reference: "2 Samuel 22:26",
                purpose: "Jehová es leal con quienes le son leales",
                text: "Con el leal tú actúas con lealtad, con el poderoso, con integridad."
              },
              {
                reference: "Deuteronomio 30:19, 20",
                purpose: "Aferrarnos a Jehová es elegir la vida",
                text: "Escoge la vida para que vivas, tú y tu descendencia, amando a Jehová tu Dios, escuchando su voz y aferrándote a él."
              }
            ]
          }
        ],
        paragraphs: [
          { number: 1, content: "IMAGÍNATE un barco en medio de una furiosa tempestad. Las olas del mar embravecido lo hacen subir y bajar, golpeándolo con fuerza y amenazando con llevarlo a la deriva. La única manera de evitarlo y de mantener el barco estable es echando un ancla." },
          { number: 2, content: "¿Estás pasando por una situación difícil? Entonces tal vez te sientas como ese barco. Los golpes de la vida pueden hacer que tus emociones suban y bajen. Un día estás convencido de que Jehová te ama y te ayuda, y al siguiente piensas que ni siquiera se fija en lo que te está pasando (Sal. 10:1; 13:1). Puede que un amigo te diga unas palabras de ánimo, y eso te haga sentir mejor por un tiempo (Prov. 17:17; 25:11). Pero luego las dudas regresan. Quizás hasta te parezca que Jehová ya no se preocupa por ti. Si estás en esta situación, ¿cómo puedes \"echar el ancla\", es decir, tener la seguridad —y no perderla nunca— de que Jehová te ama y te ayuda?" },
          { number: 3, content: "Cuando pasamos por una situación difícil, una manera de \"echar el ancla\" es recordar el amor leal de Jehová (lee Salmo 31:7; 136:1). La expresión \"amor leal\" transmite la idea de un apego profundo y duradero que una persona le tiene a otra. Nadie muestra esta cualidad mejor que Jehová. De hecho, la Biblia dice que él está \"lleno de amor leal\" y que el amor leal que siente por sus siervos \"es inmenso\" (Éx. 34:6, 7; Sal. 86:5). Piensa en lo que eso significa: ¡Jehová nunca abandona a sus siervos fieles! Recordar esto te puede ayudar a mantener la estabilidad ante las tormentas de la vida (Sal. 23:4)." },
          { number: 4, content: "Otra manera de \"echar el ancla\" ante los problemas es ver el amor de Jehová como una enseñanza básica de la Biblia. ¿Qué son para ti las enseñanzas básicas de la Biblia? Son las verdades fundamentales que aprendemos en la Palabra de Dios. Por ejemplo, que el nombre de Dios es Jehová, que Jesús es su Hijo unigénito, que los muertos están inconscientes, que la Tierra va a ser un paraíso y que los seres humanos vivirán en ella para siempre (Sal. 83:18; Ecl. 9:5; Juan 3:16; Apoc. 21:3, 4). Una vez que estás convencido de que esas enseñanzas son ciertas porque están basadas en hechos y pruebas, ¿verdad que ya no dejas que nada te haga creer lo contrario? De manera parecida, si ves el amor de Jehová como una enseñanza básica de la Biblia, te será más fácil rechazar la idea de que él no se fija en ti o no se preocupa por lo que te pasa. Hablemos más de ello." },
          { number: 5, content: "Cuando empezaste a estudiar la Biblia, ¿qué te ayudó a rechazar las creencias falsas que tal vez tuvieras? Probablemente comparaste lo que enseñaba tu religión con lo que enseña la Biblia. Supongamos que antes creías que Jesús es Dios. A medida que estudiabas, te preguntaste: \"¿Es eso cierto?\". Entonces analizaste lo que dice la Biblia y te diste cuenta de que esa creencia es falsa. Así que la dejaste a un lado y aceptaste esta verdad: Jesús es \"el primogénito de toda la creación\" y el \"Hijo unigénito de Dios\" (Col. 1:15; Juan 3:18). Claro, las enseñanzas falsas pueden estar \"fuertemente atrincheradas\", así que tal vez no nos resulte fácil derrumbarlas (2 Cor. 10:4, 5). Ahora bien, una vez que logramos dejarlas atrás, no permitimos que nada nos haga volver a ellas (Filip. 3:13)." },
          { number: 6, content: "Puedes utilizar el mismo método si estás pasando por un problema y empiezas a pensar que Jehová tal vez no te ama. Pregúntate: \"¿Es eso cierto?\". Luego compara tus dudas con lo que la Biblia enseña sobre el amor de Jehová en Salmo 136:1, que es el texto temático de este artículo. ¿Por qué dice Jehová que su amor es \"leal\"? ¿Y por qué en ese salmo se repite 26 veces la frase \"su amor leal dura para siempre\"? Como vemos, el hecho de que Dios siente amor leal por su pueblo es una verdad bíblica tan fundamental como las otras enseñanzas básicas que llegaste a hacer tuyas. La idea de que a Jehová no le importas no es cierta, así que recházala con tanta firmeza como cualquier otra creencia falsa." },
          { number: 7, content: "En la Biblia encontramos muchos otros textos que nos confirman que Jehová sí nos ama. Veamos dos ejemplos muy claros. Jesús les dijo a sus discípulos: \"Ustedes valen más que muchos gorriones\" (Mat. 10:31). Él no dijo: \"Ustedes quizás valen más que muchos gorriones\". Y el propio Jehová le dijo a su pueblo: \"Yo te daré fuerzas. Sí, yo te ayudaré. Con mi mano derecha de justicia, de veras te sostendré\" (Is. 41:10). Él no dijo: \"Quizás yo te ayudaré\". Como ves, estos textos no están hablando de posibilidades, sino de certezas. Así que, si al pasar por un problema empiezas a dudar del amor de Dios, este tipo de textos no solo te harán sentir mejor, sino que te convencerán de que Jehová sí te ama. Medita en ellos y háblale a Jehová de tus dudas. Si lo haces, podrás decir lo mismo que dijeron los cristianos del siglo primero: \"Hemos llegado a conocer el amor que Dios nos tiene y creemos en ese amor\" (1 Juan 4:16)." },
          { number: 8, content: "¿Y si te siguen entrando dudas de que Jehová te quiere? Compara lo que sientes con lo que sabes. Aunque sientas que no tienes el amor de Dios, sabes que eso no es cierto, porque la Biblia nos enseña que Jehová nos ama. Recuerda que la Biblia siempre dice la verdad; en cambio, los sentimientos nos pueden engañar. Si creyéramos que Dios no nos ama, estaríamos pasando por alto que el amor es la esencia de su personalidad (1 Juan 4:8)." },
          { number: 9, content: "Algo más que nos ayudará a convencernos de que Jehová nos ama es analizar esta frase que Jesús les dijo a sus discípulos: \"A ustedes el Padre mismo los quiere\" (lee Juan 16:26, 27). ¿Por qué les dijo eso? ¿Fue solo para que se sintieran bien? No, el contexto indica que en ese momento no estaba hablando de los sentimientos de sus discípulos, sino de un tema diferente: la oración." },
          { number: 10, content: "Jesús acababa de decirles a sus discípulos que debían orar en nombre de él, pero no a él (Juan 16:23, 24). Era muy importante que tuvieran eso claro. ¿Por qué? Porque, como habían llegado a ser muy amigos de Jesús, después de que resucitó podrían haber sentido la tentación de orarle a él. Podrían haber razonado que, como Jesús les tenía mucho cariño, tal vez se sentiría impulsado a escuchar él mismo sus peticiones y transmitírselas al Padre. Pero Jesús dejó claro que ese razonamiento sería incorrecto, pues les dijo: \"A ustedes el Padre mismo los quiere\". En efecto, Jehová nos quiere tanto que se encarga personalmente de escuchar nuestras oraciones, y esta es una verdad básica que enseña la Biblia sobre la oración. Piensa en lo que esto significa para ti. Al estudiar la Biblia, tú también has llegado a conocer y amar a Jesús (Juan 14:21). Pero, al igual que los discípulos del siglo primero, puedes dirigirle tus oraciones a Dios con la confianza de que te escucha y te quiere. Cada vez que le oras a Jehová estás demostrando que tienes fe en que \"el Padre mismo\" te quiere (1 Juan 5:14)." },
          { number: 11, content: "¿De dónde vienen las dudas sobre el amor de Jehová? Tal vez pensemos que vienen de Satanás, y eso es cierto. El Diablo está \"tratando de devorar\" a cada uno de nosotros, y desea que pensemos que Jehová no nos quiere (1 Ped. 5:8). A fin de cuentas, fue precisamente el amor lo que impulsó a Jehová a dar el rescate, y Satanás quiere que sintamos que no merecemos ese regalo (Heb. 2:9). ¿Quién se alegra si dudamos del amor de Jehová? Satanás. ¿Y quién se alegra si nos rendimos cuando pasamos por problemas? También Satanás. Pero un momento: ¡es él quien ya no tiene el amor de Dios! ¡¿Y ahora quiere que pensemos que somos nosotros quienes no contamos con el amor y la aprobación de Jehová?! Sin duda, esa es una de sus trampas más astutas (Efes. 6:11). Conocer sus intenciones nos motiva a oponernos a él con más fuerzas aún (Sant. 4:7)." },
          { number: 12, content: "Ahora bien, las dudas sobre el amor de Jehová no solo vienen de Satanás. También pueden venir del pecado heredado, es decir, nuestra tendencia a pecar (Sal. 51:5; Rom. 5:12). El pecado nos ha alejado de nuestro Creador, y también ha dañado nuestra mente, nuestro corazón y nuestro cuerpo." },
          { number: 13, content: "El pecado ha tenido un efecto muy negativo en nuestras emociones: nos hace sentir culpabilidad, ansiedad, inseguridad y vergüenza. Estos sentimientos pueden surgir cuando pecamos. Pero también pueden surgir porque siempre somos conscientes de que somos imperfectos, de que nos encontramos en un estado completamente alejado de la manera en que Jehová nos diseñó (Rom. 8:20, 21). Debido a nuestra imperfección, en cierto sentido somos como un vehículo que tiene una rueda desinflada: no podemos funcionar a plena capacidad, tal y como hemos sido diseñados. Así que no es de extrañar que a veces nos entren dudas de que Jehová nos ama. En esos casos, recordemos que Jehová es \"el Dios grande e imponente que [...] les muestra amor leal a los que lo aman y obedecen sus mandamientos\" (Neh. 1:5)." },
          { number: 14, content: "Puede que de vez en cuando sintamos que no merecemos el amor de Jehová. Y en sentido estricto eso es cierto, pero justamente por esa razón es tan especial el amor que nos tiene. No hay nada que podamos hacer para ganarnos su amor. Aun así, él nos quiere tanto que dio el rescate para poder perdonarnos los pecados (1 Juan 4:10). Recordemos también que Jesús no vino para salvar a personas perfectas, sino a personas pecadoras (lee Romanos 5:8). Jehová no espera que hagamos las cosas perfectamente, pues sabe que no somos capaces. Comprender que el pecado heredado nos puede hacer dudar del amor de Dios nos motiva a luchar contra ese pensamiento con más fuerzas aún (Rom. 7:24, 25)." },
          { number: 15, content: "Ante las tormentas de la vida, Jehová desea que tomemos la decisión correcta y nos aferremos a él (Deut. 30:19, 20). Si le somos leales, podemos estar seguros de que él también lo será y no nos abandonará pase lo que pase (lee 2 Samuel 22:26)." },
          { number: 16, content: "Como hemos visto, cuando pasamos por situaciones difíciles, lo mejor que podemos hacer es \"echar el ancla\": recordar que Jehová nos ama y va a estar ahí para ayudarnos. Y, si alguna vez dudamos de su amor, no olvidemos que una cosa es lo que sentimos y otra cosa es lo que sabemos que es cierto. Nunca perdamos la confianza en esta verdad básica que enseña la Biblia: el amor leal de Jehová dura para siempre." }
        ],
        reviewQuestions: [
          {
            question: "¿Por qué es bueno ver el amor de Jehová como una enseñanza básica de la Biblia?"
          },
          {
            question: "¿Por qué el pecado heredado nos puede hacer dudar del amor de Jehová?"
          },
          {
            question: "¿Qué nos ayudará a dejar de dudar del amor de Jehová?"
          }
        ],
        finalSong: "Canción 159: Demos gloria a Jehová"
      },

      // Artículo 42: "Cómo mejorar las oraciones" (22-28 Dic)
      {
        metadata: {
          articleNumber: 42,
          week: "22-28 Dic",
          month: "Octubre",
          year: 2025
        },
        song: "Canción 44: Una súplica ferviente",
        title: "Cómo mejorar las oraciones",
        biblicalText: "\"Llamo con todo mi corazón. Respóndeme, oh, Jehová\" (SAL. 119:145).",
        theme: "Meditar en las oraciones que encontramos en la Biblia nos puede ayudar a mejorar las nuestras.",
        questions: [
          {
            number: "1, 2",
            textEs: "a) ¿Qué puede hacer que nuestras oraciones se vuelvan monótonas o superficiales? b) ¿Cómo sabemos que Jehová presta atención a todo lo que le decimos?",
            textLSM: "",
            paragraphs: [1, 2],
            answer: "Nuestras oraciones pueden volverse monótonas o superficiales por el ajetreo de la vida (haciendo solo oraciones breves) o porque nos sentimos indignos de contarle a Jehová todo lo que sentimos. Sin embargo, lo más importante para Jehová es que le hablemos desde el corazón y con humildad. No hay que preocuparnos por usar palabras elegantes. Él escucha «el ruego de los mansos» y presta atención porque se preocupa por nosotros.",
            answerBullets: [
              "**El ajetreo de la vida** - Nos lleva a hacer solo oraciones breves",
              "**Sentirnos indignos** - Pensamos que no merecemos contarle todo",
              "**Lo importante es el corazón** - No las palabras elegantes ni expresarnos perfectamente",
              "**Jehová escucha a los mansos** - Presta atención porque se preocupa por nosotros (Sal. 10:17; 139:1-3)"
            ],
            flashcards: [
              {
                question: "¿Qué puede hacer que nuestras oraciones se vuelvan monótonas o superficiales?",
                answer: "El ajetreo de la vida (haciendo solo oraciones breves) o sentirnos indignos de contarle a Jehová todo lo que sentimos."
              },
              {
                question: "¿Qué es lo más importante para Jehová en nuestras oraciones?",
                answer: "Que le hablemos desde el corazón y con humildad. No importan las palabras elegantes, él escucha «el ruego de los mansos»."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 10:17",
                purpose: "Jehová escucha el ruego de los mansos",
                text: "Jehová, tú oirás los ruegos de los mansos. Tú fortalecerás su corazón. Les prestarás atención."
              },
              {
                reference: "Salmo 139:1-3",
                purpose: "Jehová conoce todo sobre nosotros",
                text: "Oh, Jehová, tú me has examinado y me conoces. Sabes cuándo me siento y cuándo me levanto. Percibes mis pensamientos desde lejos."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Qué preguntas responderemos en este artículo?",
            textLSM: "",
            paragraphs: [3],
            answer: "En este artículo responderemos: 1) ¿Por qué no debemos tener miedo de contarle a Jehová nuestros pensamientos y sentimientos? 2) ¿Qué podemos hacer para que nuestras oraciones sean más profundas? 3) ¿Cómo nos ayudan las oraciones de la Biblia a mejorar las nuestras? 4) ¿Qué podemos hacer si estamos tan angustiados que no nos salen las palabras?",
            answerBullets: [
              "**¿Por qué no tener miedo de orar?** - Contarle a Jehová pensamientos y sentimientos",
              "**¿Cómo hacer oraciones más profundas?** - Técnicas para mejorar",
              "**¿Cómo nos ayudan las oraciones bíblicas?** - Aprender de personajes bíblicos",
              "**¿Qué hacer si no salen las palabras?** - Cuando estamos muy angustiados"
            ],
            flashcards: [
              {
                question: "¿Qué cuatro preguntas responderá el artículo sobre las oraciones?",
                answer: "1) Por qué no tener miedo de orar, 2) Cómo hacer oraciones más profundas, 3) Cómo nos ayudan las oraciones bíblicas, 4) Qué hacer si no salen las palabras."
              }
            ],
            biblicalCards: []
          },
          {
            number: "4",
            textEs: "¿Qué nos ayudará a abrirle nuestro corazón a Jehová? (Salmo 119:145).",
            textLSM: "",
            paragraphs: [4],
            readText: "LEE Salmo 119:145",
            section: "ABRAMOS NUESTRO CORAZÓN A JEHOVÁ",
            answer: "Nos será más fácil contarle a Jehová nuestros pensamientos y sentimientos si lo vemos como un amigo fiel que quiere lo mejor para nosotros. El escritor del Salmo 119 pasó por muchos problemas: dijeron mentiras de él y tuvo que cargar con sus imperfecciones. Pero procuró tener una relación estrecha con Dios, así que no tuvo miedo de abrirle su corazón.",
            answerBullets: [
              "**Ver a Jehová como amigo fiel** - Que quiere lo mejor para nosotros",
              "**El salmista tuvo problemas** - Mentiras sobre él, imperfecciones propias (Sal. 119:23, 69, 78)",
              "**Procuró relación estrecha con Dios** - A pesar de sus dificultades",
              "**No tuvo miedo** - De abrirle su corazón a Jehová (Sal. 119:145)"
            ],
            flashcards: [
              {
                question: "¿Qué nos ayudará a abrirle nuestro corazón a Jehová?",
                answer: "Verlo como un amigo fiel que quiere lo mejor para nosotros, como hizo el escritor del Salmo 119."
              },
              {
                question: "¿Qué problemas tuvo el escritor del Salmo 119?",
                answer: "Dijeron mentiras terribles de él y tuvo que cargar con sus propias imperfecciones, pero aun así no tuvo miedo de orar."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 119:145",
                purpose: "Texto temático - Orar con todo el corazón",
                text: "Llamo con todo mi corazón. Respóndeme, oh, Jehová. Voy a obedecer tus decretos."
              }
            ]
          },
          {
            number: "5",
            textEs: "¿Por qué no debemos dejar que los sentimientos negativos nos frenen de orar? Pon un ejemplo.",
            textLSM: "",
            paragraphs: [5],
            answer: "Jehová quiere que incluso quienes han cometido pecados graves le oren. No hay que dejar que los sentimientos negativos nos frenen. Ejemplo: un piloto de avión que ha cometido un error o se ha desviado de su rumbo sabe que puede contactarse con los controladores aéreos para pedir ayuda. No decidiría no hacerlo por vergüenza. De manera parecida, aunque a veces cometamos un pecado o nos desviemos, no debemos sentir miedo ni vergüenza de hablar con Jehová.",
            answerBullets: [
              "**Jehová quiere que oremos** - Incluso quienes han cometido pecados graves (Is. 55:6, 7)",
              "**Ejemplo del piloto** - Aunque cometa un error, contacta a los controladores para pedir ayuda",
              "**No evita pedir ayuda por vergüenza** - Sería peligroso no hacerlo",
              "**No sentir miedo ni vergüenza** - Aunque nos desviemos, podemos hablar con Jehová (Sal. 119:25, 176)"
            ],
            flashcards: [
              {
                question: "¿A qué se compara no orar por sentirse indigno?",
                answer: "A un piloto que no contacta a los controladores aéreos después de cometer un error por vergüenza. Sería peligroso no pedir ayuda."
              },
              {
                question: "¿Por qué no debemos dejar que los sentimientos negativos nos frenen de orar?",
                answer: "Porque Jehová quiere que incluso quienes han cometido pecados graves le oren. No debemos sentir miedo ni vergüenza."
              }
            ],
            biblicalCards: [
              {
                reference: "Isaías 55:6, 7",
                purpose: "Jehová quiere que los pecadores lo busquen",
                text: "Busquen a Jehová mientras se deje hallar. Llámenlo mientras esté cerca. Que el malvado abandone su camino... Que regrese a Jehová, quien tendrá compasión de él."
              }
            ]
          },
          {
            number: "6, 7",
            textEs: "¿Qué nos ayudará a hacer oraciones más profundas? Pon un ejemplo.",
            textLSM: "",
            paragraphs: [6, 7],
            section: "CÓMO PUEDES HACER ORACIONES MÁS PROFUNDAS",
            answer: "Cuando le hablamos a Jehová con total franqueza de nuestros pensamientos y sentimientos más íntimos, nos acercamos más a él. Reflexionar en las cualidades de Jehová nos ayuda a hacer oraciones más profundas. Ejemplo: una hermana llamada Kristine tenía un padre violento y le costaba ver a Jehová como padre. Pero meditar en el amor leal de Jehová la hizo sentir segura: «Sé que siempre me llevará de la mano y que si caigo me levantará con mucho cariño».",
            answerBullets: [
              "**Hablar con total franqueza** - De nuestros pensamientos y sentimientos más íntimos",
              "**Reflexionar en las cualidades de Jehová** - Nos acercamos más a él (Sal. 145:8, 9, 18)",
              "**Ejemplo de Kristine** - Le costaba ver a Jehová como padre por su padre violento",
              "**El amor leal la ayudó** - La hace sentir segura para contarle todo a Jehová"
            ],
            flashcards: [
              {
                question: "¿Qué nos ayudará a hacer oraciones más profundas?",
                answer: "Reflexionar en las cualidades de Jehová. Cuanto más reflexionemos en ellas, más fácil será expresarnos abiertamente."
              },
              {
                question: "¿Cómo ayudó a Kristine meditar en el amor leal de Jehová?",
                answer: "La hizo sentir segura para contarle tanto sus mayores alegrías como sus penas más profundas, aunque le costaba ver a Jehová como padre."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 145:8, 9, 18",
                purpose: "Las cualidades de Jehová que nos ayudan a orar",
                text: "Jehová es compasivo y misericordioso, lento para la ira y lleno de amor leal. Jehová es bueno con todos... Jehová está cerca de todos los que lo invocan."
              }
            ]
          },
          {
            number: "8, 9",
            textEs: "¿Cuáles son algunos beneficios de pensar de antemano en qué decirle a Jehová? Pon un ejemplo.",
            textLSM: "",
            paragraphs: [8, 9],
            answer: "Antes de orar podemos hacernos preguntas como: ¿Con qué problemas estoy luchando? ¿Hay alguien a quien no he perdonado? ¿Necesito ayuda en alguna situación? También podemos pedir por el nombre de Jehová, su Reino y su voluntad. Ejemplo: una hermana llamada Aliska no sabía qué decir cuando su esposo tuvo cáncer terminal. Sacar momentos para organizar sus pensamientos la ayudó a que sus oraciones no giraran solo en torno a ella y a tener la mente más calmada.",
            answerBullets: [
              "**Hacerse preguntas antes de orar** - ¿Problemas? ¿Perdón pendiente? ¿Situación que necesita ayuda?",
              "**Seguir el ejemplo de Jesús** - Pedir por el nombre de Jehová, su Reino y su voluntad (Mat. 6:9, 10)",
              "**Ejemplo de Aliska** - Su esposo con cáncer terminal, estaba muy angustiada",
              "**Organizar pensamientos** - Sus oraciones no giran solo en torno a ella, mente más calmada"
            ],
            flashcards: [
              {
                question: "¿Qué preguntas podemos hacernos antes de orar?",
                answer: "¿Con qué problemas estoy luchando? ¿Hay alguien a quien no he perdonado? ¿Necesito ayuda de Jehová en alguna situación?"
              },
              {
                question: "¿Cómo ayudó a Aliska organizar sus pensamientos antes de orar?",
                answer: "Sus oraciones no giraban solo en torno a ella y sus problemas, y su mente estaba más centrada y calmada al hablar con Jehová."
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 6:9, 10",
                purpose: "Ejemplo de Jesús sobre qué incluir en la oración",
                text: "Ustedes deben orar así: Padre nuestro que estás en los cielos, que tu nombre sea santificado. Que venga tu Reino. Que se haga tu voluntad."
              },
              {
                reference: "2 Reyes 19:15-19",
                purpose: "Ejemplo de prepararse para orar en situaciones difíciles",
                text: "Ezequías oró delante de Jehová diciendo... Oh, Jehová, Dios nuestro, sálvanos de su mano, para que todos los reinos de la tierra sepan que solo tú eres Dios."
              }
            ]
          },
          {
            number: "10",
            textEs: "¿Por qué es bueno que nos tomemos nuestro tiempo para orar? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [10],
            answer: "Aunque las oraciones cortas nos pueden acercar a Jehová, si hacemos oraciones más largas es más probable que le contemos con más detalle todo lo que sentimos. Jehová nunca está mirando el reloj, así que podemos extendernos. Podemos buscar un momento y lugar sin distracciones para orar largo y tendido, quizás en voz alta, y convertirlo en costumbre.",
            answerBullets: [
              "**Oraciones cortas ayudan** - Pero las más largas permiten contar más detalles",
              "**Jehová nunca mira el reloj** - Podemos extendernos todo lo que queramos",
              "**Buscar momento y lugar** - Sin distracciones, para orar largo y tendido",
              "**Convertirlo en costumbre** - Quizás en voz alta, habitualmente"
            ],
            flashcards: [
              {
                question: "¿Por qué es bueno hacer oraciones más largas?",
                answer: "Porque es más probable que le contemos a Jehová con más detalle todo lo que sentimos. Él nunca está mirando el reloj."
              },
              {
                question: "¿Qué meta podemos ponernos para mejorar nuestras oraciones?",
                answer: "Buscar un momento y lugar sin distracciones para orar largo y tendido, quizás en voz alta, y convertirlo en costumbre."
              }
            ],
            biblicalCards: []
          },
          {
            number: "11",
            textEs: "¿Cómo nos ayuda meditar en las oraciones de algunos siervos de Jehová de tiempos bíblicos?",
            textLSM: "",
            paragraphs: [11],
            section: "MEDITA EN LAS ORACIONES DE PERSONAJES BÍBLICOS",
            answer: "Meditar en las oraciones sentidas y canciones de alabanza de siervos de Jehová de tiempos bíblicos nos puede dar ideas de cómo expresarnos nosotros. Tal vez descubramos expresiones que podemos usar para alabar a Jehová. Y es probable que encontremos oraciones con las que nos sintamos identificados.",
            answerBullets: [
              "**Nos da ideas** - De cómo expresarnos en nuestras oraciones",
              "**Expresiones para alabar** - Podemos descubrir cómo alabar a Jehová",
              "**Oraciones con las que identificarnos** - Situaciones similares a las nuestras",
              "**Oraciones sentidas y canciones de alabanza** - De los siervos de tiempos bíblicos"
            ],
            flashcards: [
              {
                question: "¿Cómo nos ayuda meditar en las oraciones de personajes bíblicos?",
                answer: "Nos da ideas de cómo expresarnos, descubrimos expresiones para alabar a Jehová, y encontramos oraciones con las que nos identificamos."
              }
            ],
            biblicalCards: []
          },
          {
            number: "12",
            textEs: "¿Qué preguntas podemos hacernos al leer una oración?",
            textLSM: "",
            paragraphs: [12],
            answer: "Cuando leemos una oración de la Biblia, podemos preguntarnos: ¿Quién dijo esas palabras? ¿Cuáles eran sus circunstancias? ¿Estoy pasando por alguna situación parecida? ¿Qué lecciones saco? Quizás tengamos que investigar un poco para encontrar las respuestas, pero valdrá la pena.",
            answerBullets: [
              "**¿Quién dijo esas palabras?** - Identificar al personaje",
              "**¿Cuáles eran sus circunstancias?** - Contexto de la oración",
              "**¿Estoy en situación parecida?** - Aplicación personal",
              "**¿Qué lecciones saco?** - Puede requerir investigar, pero vale la pena"
            ],
            flashcards: [
              {
                question: "¿Qué preguntas podemos hacernos al leer una oración de la Biblia?",
                answer: "¿Quién dijo esas palabras? ¿Cuáles eran sus circunstancias? ¿Estoy en situación parecida? ¿Qué lecciones saco?"
              }
            ],
            biblicalCards: []
          },
          {
            number: "13",
            textEs: "¿Cuál es una lección que sacamos de la oración de Ana? (1 Samuel 1:10, 11; mira también la imagen de la portada).",
            textLSM: "",
            paragraphs: [13],
            readText: "LEE 1 Samuel 1:10, 11",
            answer: "Ana tenía dos problemas graves: era estéril y la otra esposa de Elcaná le hacía la vida imposible. Ella se tomó su tiempo para contarle a Jehová todo lo que la inquietaba, y después se sintió mucho mejor. La lección: si estamos pasando por un problema que no desaparece, debemos «arrojar nuestra carga sobre Jehová», explicarle cuáles son nuestras preocupaciones y cómo nos hacen sentir.",
            answerBullets: [
              "**Problemas de Ana** - Era estéril y la otra esposa la acosaba (1 Sam. 1:4-7)",
              "**Se tomó su tiempo** - Le contó a Jehová todo lo que la inquietaba",
              "**Se sintió mucho mejor** - Después de orar (1 Sam. 1:12, 18)",
              "**Lección: arrojar nuestra carga** - Explicarle a Jehová nuestras preocupaciones y cómo nos hacen sentir (Sal. 55:22)"
            ],
            flashcards: [
              {
                question: "¿Qué problemas tenía Ana cuando oró a Jehová?",
                answer: "Era estéril y la otra esposa de Elcaná le estaba haciendo la vida imposible."
              },
              {
                question: "¿Qué lección sacamos de la oración de Ana?",
                answer: "Tomarnos tiempo para contarle a Jehová todo lo que nos inquieta, «arrojar nuestra carga sobre él» y explicarle cómo nos sentimos."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Samuel 1:10, 11",
                purpose: "La oración sincera de Ana",
                text: "Ella estaba muy angustiada y se puso a orar a Jehová, llorando amargamente. E hizo un voto: Oh, Jehová de los ejércitos... si me das un hijo varón, te lo daré."
              },
              {
                reference: "Salmo 55:22",
                purpose: "Arrojar nuestra carga sobre Jehová",
                text: "Echa tu carga sobre Jehová, y él te sostendrá. Él nunca permitirá que el justo caiga."
              }
            ]
          },
          {
            number: "14",
            textEs: "a) ¿Qué otra lección sacamos del ejemplo de Ana? b) ¿Cómo puede enriquecer nuestras oraciones meditar en la Biblia?",
            textLSM: "",
            paragraphs: [14],
            answer: "Ana, años después de que nació Samuel, le dio gracias a Jehová porque vio que él protege y cuida a sus siervos leales. Aunque sus problemas quizás no habían desaparecido, ella se centró en cómo la había bendecido Jehová. Lección: nos resultará más fácil sobrellevar las dificultades si nos centramos en cómo nos ha apoyado Jehová. Meditar en la Biblia enriquece nuestras oraciones al darnos expresiones y perspectivas.",
            answerBullets: [
              "**Ana agradeció a Jehová** - Porque vio que él protege y cuida a sus siervos leales (1 Sam. 2:1, 8, 9)",
              "**Se centró en las bendiciones** - Aunque sus problemas quizás no habían desaparecido",
              "**Lección: centrarse en el apoyo de Jehová** - Nos ayuda a sobrellevar las dificultades",
              "**Meditar en la Biblia** - Enriquece nuestras oraciones con expresiones y perspectivas"
            ],
            flashcards: [
              {
                question: "¿Qué otra lección sacamos del ejemplo de Ana?",
                answer: "Aunque sus problemas quizás no desaparecieron, ella se centró en cómo la había bendecido Jehová. Eso nos ayuda a sobrellevar dificultades."
              },
              {
                question: "¿Cómo enriquece nuestras oraciones meditar en la Biblia?",
                answer: "Nos da expresiones para usar, perspectivas nuevas y nos ayuda a ver cómo Jehová ha ayudado a otros."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Samuel 2:1, 8, 9",
                purpose: "La oración de gratitud de Ana",
                text: "Ana oró y dijo: Mi corazón se alegra por Jehová... Él levanta al pobre del polvo... Él protegerá a sus leales."
              }
            ]
          },
          {
            number: "15",
            textEs: "¿Qué aprendemos de la oración de Jeremías? (Jeremías 12:1).",
            textLSM: "",
            paragraphs: [15],
            readText: "LEE Jeremías 12:1",
            answer: "Jeremías se sintió muy desanimado porque veía que a los malos les iba bien y que los israelitas se burlaban de él. Es fácil identificarnos porque la gente también se burla de nosotros y parece que los malos disfrutan de la vida. Pero Jeremías, aunque expresó su frustración, jamás acusó a Dios de ser injusto. Se convenció de que Jehová actúa con justicia. Nosotros también podemos contarle a Jehová nuestras frustraciones, confiando en que él solucionará las injusticias.",
            answerBullets: [
              "**Jeremías estaba desanimado** - A los malos les iba bien, los israelitas se burlaban de él (Jer. 20:7, 8)",
              "**Fácil identificarnos** - También nos burlan y los malos parecen disfrutar",
              "**No acusó a Dios de injusto** - Aunque expresó su frustración",
              "**Confiar en la justicia de Jehová** - Él solucionará las injusticias al debido tiempo (Jer. 32:19)"
            ],
            flashcards: [
              {
                question: "¿Por qué estaba desanimado Jeremías?",
                answer: "Veía que a los malos les iba bien y que los israelitas se burlaban de él."
              },
              {
                question: "¿Qué aprendemos de cómo Jeremías manejó su frustración?",
                answer: "Aunque expresó su frustración, jamás acusó a Dios de ser injusto. Se convenció de que Jehová actúa con justicia."
              }
            ],
            biblicalCards: [
              {
                reference: "Jeremías 12:1",
                purpose: "Jeremías expresa su frustración a Jehová",
                text: "Tú eres justo, oh, Jehová, cuando me quejo ante ti. Sin embargo, quisiera hablar contigo de justicia. ¿Por qué tiene éxito el camino de los malvados?"
              },
              {
                reference: "Jeremías 32:19",
                purpose: "Confianza en la justicia de Jehová",
                text: "Grande en consejos y poderoso en obras, tú, cuyos ojos están abiertos a todos los caminos de los hijos de los hombres, para darle a cada uno según sus caminos."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Qué aprendemos de la oración de un levita exiliado? (Salmo 42:1-4; mira también las imágenes).",
            textLSM: "",
            paragraphs: [16],
            readText: "LEE Salmo 42:1-4",
            answer: "Un levita expresó cómo se sentía por estar exiliado y no poder reunirse con sus hermanos. Quizás nos sintamos como él si no podemos salir de nuestras casas o estamos en prisión por nuestra fe. En esas circunstancias nuestras emociones pueden ser una montaña rusa. Pero hablarle a Jehová nos ayuda a comprender mejor nuestros sentimientos, ver las cosas de otra manera y tener fuerzas para aguantar.",
            answerBullets: [
              "**El levita estaba exiliado** - No podía reunirse con sus hermanos (Sal. 42:1-4)",
              "**Aplicación actual** - Si no podemos salir o estamos en prisión por nuestra fe",
              "**Emociones como montaña rusa** - Hablar con Jehová ayuda a comprenderlas",
              "**Ver las cosas de otra manera** - Recuperar equilibrio y fuerzas para aguantar (Sal. 42:5, 8)"
            ],
            flashcards: [
              {
                question: "¿Qué aprendemos del levita exiliado del Salmo 42?",
                answer: "Que hablarle a Jehová de nuestros sentimientos nos ayuda a comprenderlos mejor, ver las cosas de otra manera y tener fuerzas para aguantar."
              },
              {
                question: "¿En qué situaciones actuales podríamos sentirnos como el levita exiliado?",
                answer: "Si no podemos salir de nuestras casas o estamos en prisión por nuestra fe y no podemos reunirnos con los hermanos."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 42:1-4",
                purpose: "El anhelo del levita exiliado",
                text: "Como el ciervo anhela los arroyos de agua, así te anhelo a ti, oh, Dios. Mi alma tiene sed de Dios, del Dios vivo."
              },
              {
                reference: "Salmo 42:5, 8",
                purpose: "Cómo el levita recuperó la esperanza",
                text: "¿Por qué estás desanimada, alma mía?... Espera en Dios, porque todavía lo alabaré... De día Jehová ordenará su amor leal."
              }
            ]
          },
          {
            number: "17",
            textEs: "a) ¿Qué aprendemos de la oración de Jonás? (Jonás 2:1, 2). b) ¿Cómo nos pueden ayudar algunas expresiones de los Salmos cuando pasamos por momentos difíciles?",
            textLSM: "",
            paragraphs: [17],
            readText: "LEE Jonás 2:1, 2",
            answer: "Jonás oró desde el vientre de un gran pez. Aunque había desobedecido a Jehová, estaba seguro de que Dios escucharía su voz. En su súplica usó muchas expresiones de los Salmos porque los conocía muy bien. Recordarlos y meditar en ellos lo convenció de que Jehová lo ayudaría. De manera parecida, si memorizamos textos bíblicos, puede que se nos vengan a la mente y nos consuelen cuando oremos en momentos difíciles.",
            answerBullets: [
              "**Jonás oró desde el pez** - Aunque había desobedecido, estaba seguro de que Dios lo escucharía",
              "**Usó expresiones de los Salmos** - Los conocía muy bien",
              "**Los Salmos lo convencieron** - De que Jehová lo ayudaría",
              "**Memorizar textos** - Pueden venirnos a la mente y consolarnos en momentos difíciles"
            ],
            flashcards: [
              {
                question: "¿Qué aprendemos de la oración de Jonás?",
                answer: "Aunque había desobedecido, estaba seguro de que Dios lo escucharía. Usó expresiones de los Salmos que conocía bien."
              },
              {
                question: "¿Por qué es bueno memorizar textos bíblicos para nuestras oraciones?",
                answer: "Porque pueden venirnos a la mente y consolarnos cuando estemos orando en momentos difíciles, como le pasó a Jonás."
              }
            ],
            biblicalCards: [
              {
                reference: "Jonás 2:1, 2",
                purpose: "Jonás oró desde el vientre del pez",
                text: "Entonces Jonás oró a Jehová su Dios desde el vientre del pez, diciendo: En mi angustia llamé a Jehová, y él me respondió."
              }
            ]
          },
          {
            number: "18, 19",
            textEs: "¿Cómo nos ayuda Romanos 8:26, 27 si no nos salen las palabras para expresarle a Jehová lo que sentimos? Pon un ejemplo.",
            textLSM: "",
            paragraphs: [18, 19],
            readText: "LEE Romanos 8:26, 27",
            section: "SIGUE ORÁNDOLE A JEHOVÁ PARA ACERCARTE MÁS A ÉL",
            answer: "A veces estamos tan angustiados que no nos salen las palabras. Pero el espíritu santo acude en nuestra ayuda y «ruega» por nosotros. Mediante su espíritu, Jehová se encargó de que muchas oraciones quedaran registradas en la Biblia. Así que, cuando no conseguimos expresar claramente lo que pensamos, Jehová puede aceptar esas peticiones como si las hubiéramos hecho nosotros. Ejemplo: una hermana rusa arrestada por orar recordó este texto y eso la consoló mucho.",
            answerBullets: [
              "**Muy angustiados para expresarnos** - No nos salen las palabras",
              "**El espíritu santo ruega por nosotros** - Acude en nuestra ayuda (Rom. 8:26, 27)",
              "**Oraciones registradas en la Biblia** - Jehová puede aceptarlas como nuestras",
              "**Ejemplo de Elena** - Hermana rusa arrestada, este texto la consoló mucho"
            ],
            flashcards: [
              {
                question: "¿Cómo nos ayuda Romanos 8:26, 27 si no nos salen las palabras?",
                answer: "El espíritu santo «ruega» por nosotros. Jehová puede aceptar las oraciones de la Biblia como si las hubiéramos hecho nosotros."
              },
              {
                question: "¿Cómo consoló Romanos 8:26, 27 a Elena cuando fue arrestada?",
                answer: "Recordó que si no sabe qué pedir, Jehová puede aceptar las oraciones de otros siervos en la Biblia como si fueran suyas."
              }
            ],
            biblicalCards: [
              {
                reference: "Romanos 8:26, 27",
                purpose: "El espíritu santo nos ayuda cuando no sabemos qué orar",
                text: "El espíritu también viene en nuestra ayuda en nuestra debilidad, porque no sabemos qué debemos pedir, pero el espíritu mismo ruega por nosotros."
              }
            ]
          },
          {
            number: "20",
            textEs: "¿Qué nos ayudará a preparar nuestra mente para orar cuando estamos bajo mucho estrés?",
            textLSM: "",
            paragraphs: [20],
            answer: "Cuando estamos bajo mucho estrés puede ser difícil mantenernos concentrados mientras oramos. Para preparar nuestra mente podemos escuchar los audios de los Salmos o hacer como el rey David y poner por escrito lo que sentimos. Como todos somos diferentes, cada cristiano puede buscar el método que le resulte más eficaz.",
            answerBullets: [
              "**Difícil concentrarse bajo estrés** - Necesitamos preparar la mente",
              "**Escuchar audios de los Salmos** - Nos prepara para orar",
              "**Escribir lo que sentimos** - Como hizo el rey David (Sal. 18, 34, 142)",
              "**Cada uno es diferente** - Buscar el método más eficaz para nosotros (Sal. 141:2)"
            ],
            flashcards: [
              {
                question: "¿Qué nos ayudará a preparar nuestra mente para orar bajo estrés?",
                answer: "Escuchar los audios de los Salmos o poner por escrito lo que sentimos, como hizo el rey David."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 141:2",
                purpose: "La oración como incienso ante Jehová",
                text: "Que mi oración sea preparada como incienso delante de ti; el alzar de mis manos, como la ofrenda de grano del atardecer."
              }
            ]
          },
          {
            number: "21",
            textEs: "¿Por qué podemos abrirle nuestro corazón a Jehová?",
            textLSM: "",
            paragraphs: [21],
            answer: "Podemos abrirle nuestro corazón a Jehová porque él entiende nuestros sentimientos incluso antes de contárselos. Pero a él le encanta escucharnos y ver que confiamos en él. Jehová es un amigo verdadero y siempre estará a nuestro lado. Podemos usar expresiones e ideas de las oraciones que encontramos en su Palabra y compartir con él nuestras penas y alegrías.",
            answerBullets: [
              "**Jehová entiende antes de contarle** - Conoce nuestros sentimientos (Sal. 139:4)",
              "**Le encanta escucharnos** - Y ver que confiamos en él",
              "**Es un amigo verdadero** - Siempre estará a nuestro lado",
              "**Usar expresiones de la Biblia** - Compartir penas y alegrías con él"
            ],
            flashcards: [
              {
                question: "¿Por qué podemos abrirle nuestro corazón a Jehová?",
                answer: "Porque él entiende nuestros sentimientos incluso antes de contárselos, le encanta escucharnos, y es un amigo verdadero que siempre estará a nuestro lado."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 139:4",
                purpose: "Jehová conoce nuestros pensamientos",
                text: "Porque aún no tengo una palabra en mi lengua y ya tú, oh, Jehová, la conoces toda."
              }
            ]
          }
        ],
        paragraphs: [
          { number: 1, content: "¿TE HA parecido alguna vez que tus oraciones se han vuelto monótonas o superficiales? Eso es algo que nos puede pasar a todos. Quizás el ajetreo de la vida nos lleva a hacer únicamente oraciones breves. O tal vez nos sentimos indignos de contarle a Jehová todo lo que sentimos." },
          { number: 2, content: "La Biblia nos asegura que lo más importante para Jehová es que en nuestras oraciones le hablemos desde el corazón y con humildad. Así que no hay que preocuparnos por usar palabras elegantes o por expresarnos perfectamente. Él escucha \"el ruego de los mansos\" (Sal. 10:17). Presta atención a todo lo que le decimos porque de verdad se preocupa por nosotros (Sal. 139:1-3)." },
          { number: 3, content: "En este artículo responderemos las siguientes preguntas: ¿por qué no debemos tener miedo de contarle a Jehová nuestros pensamientos y sentimientos?, ¿qué podemos hacer para que nuestras oraciones sean más profundas?, ¿cómo nos ayudan las oraciones que encontramos en la Biblia a mejorar las nuestras? y ¿qué podemos hacer si estamos tan angustiados que no nos salen las palabras para expresar lo que sentimos?" },
          { number: 4, content: "Nos resultará más fácil contarle a Jehová nuestros pensamientos y sentimientos si lo vemos como un amigo fiel que quiere lo mejor para nosotros. Pensemos en el escritor del Salmo 119, quien por desgracia pasó por muchos problemas. Por ejemplo, algunos dijeron mentiras terribles de él (Sal. 119:23, 69, 78). También tuvo que cargar con sus propias imperfecciones (Sal. 119:5). Pero él procuró tener una relación estrecha con Dios, así que no tuvo miedo de abrirle su corazón (lee Salmo 119:145)." },
          { number: 5, content: "Jehová quiere que incluso quienes han cometido pecados graves le oren (Is. 55:6, 7). Así que no hay que dejar que los sentimientos negativos nos frenen de hacerlo. Para entenderlo mejor, piensa en un piloto de avión que ha cometido un error o se ha desviado de su rumbo. Él sabe que puede contactarse con los controladores aéreos para pedir ayuda. ¿Crees que decidiría no hacerlo porque quizás le dé vergüenza? ¡Para nada! De manera parecida, aunque a veces cometamos un pecado o nos desviemos de nuestro rumbo, no debemos sentir miedo ni vergüenza de hablar con Jehová (Sal. 119:25, 176)." },
          { number: 6, content: "Cuando le hablamos a Jehová con total franqueza de nuestros pensamientos y sentimientos más íntimos, nos acercamos más a él. Veamos qué nos puede ayudar a hacer oraciones más profundas." },
          { number: 7, content: "Reflexionemos en las cualidades de Jehová. Cuanto más reflexionemos en ellas, más fácil será expresarnos abiertamente (Sal. 145:8, 9, 18). Eso hizo Kristine, una hermana que tenía un padre violento. Ella cuenta: \"Ver a Jehová como un padre me hacía muy difícil hablar con él. Sentía que mis imperfecciones harían que él se alejara de mí\". ¿Qué cualidad de Dios la ayudó? Ella explica: \"El amor leal de Jehová me hace sentir segura. Sé que siempre me llevará de la mano y que si caigo me levantará con mucho cariño. Meditar en su amor me ayuda a contarle tanto mis mayores alegrías como mis penas más profundas\"." },
          { number: 8, content: "Pensemos de antemano en qué decirle. Antes de orar, podemos hacernos preguntas como estas: \"¿Con qué problemas estoy luchando ahora? ¿Hay alguien a quien no he perdonado? ¿Me ha surgido recientemente alguna situación en la que necesite la ayuda de Jehová?\" (2 Rey. 19:15-19). También podemos seguir el ejemplo de Jesús y pedir cosas relacionadas con el nombre de Jehová, su Reino y su voluntad (Mat. 6:9, 10)." },
          { number: 9, content: "A una hermana llamada Aliska se le hizo muy difícil orar cuando se enteró de que su esposo tenía cáncer cerebral terminal. Ella cuenta: \"Estaba tan angustiada que no lograba pensar con claridad y no sabía qué decir\". ¿Qué la ha ayudado? Ella explica: \"Antes de empezar, saco unos momentos para organizar mis pensamientos. Eso me ha ayudado a que mis oraciones no giren solo en torno a mí y mis problemas, y a que mi mente esté más centrada y calmada cuando le hablo a Jehová\"." },
          { number: 10, content: "Tomémonos nuestro tiempo para orar. Es cierto que las oraciones cortas nos pueden acercar a Jehová; pero, si hacemos oraciones más largas, es más probable que le contemos con más detalle todo lo que sentimos. El esposo de Aliska, Elijah, dice: \"Intento orar muchas veces al día, y he visto que, cuando hablo un rato largo con Jehová, me siento más cerca de él. Él nunca está mirando el reloj, así que sé que puedo extenderme\". ¿Por qué no intentas esto? Busca un momento y un lugar en el que puedas orar largo y tendido, sin distracciones, quizás incluso en voz alta, y ponte la meta de que se convierta en una costumbre." },
          { number: 11, content: "Quizás te ayude meditar en lo que dijeron algunos siervos de Jehová de tiempos bíblicos en sus oraciones sentidas y canciones de alabanza. Fijarte en cómo se expresaron ellos te puede dar ideas de cómo hacer tú lo mismo. Tal vez descubras expresiones que puedes usar para alabar a Jehová. Y es probable que encuentres oraciones con las que te sientas identificado." },
          { number: 12, content: "Cuando leas una oración de la Biblia, pregúntate: \"¿Quién dijo esas palabras? ¿Cuáles eran sus circunstancias? ¿Estoy pasando por alguna situación parecida? ¿Qué lecciones saco?\". Claro, quizás tengas que investigar un poco para encontrar las respuestas, pero valdrá la pena. Veamos algunos ejemplos." },
          { number: 13, content: "(Lee 1 Samuel 1:10, 11). Cuando Ana hizo esta oración, tenía dos problemas graves: era estéril y la otra esposa de Elcaná le estaba haciendo la vida imposible (1 Sam. 1:4-7). Si estás pasando por un problema que no desaparece, ¿qué puedes aprender de la oración de Ana? Ella se tomó su tiempo para contarle a Jehová todo lo que la inquietaba, y después se sintió mucho mejor (1 Sam. 1:12, 18). Haz lo mismo y \"arroja tu carga sobre Jehová\", es decir, explícale cuáles son tus preocupaciones y cómo te hacen sentir (Sal. 55:22)." },
          { number: 14, content: "Unos años después de que nació su hijo, Samuel, Ana se lo llevó al sumo sacerdote Elí (1 Sam. 1:24-28). En una oración llena de sentimiento le dio las gracias a Jehová porque había visto que él protege y cuida a sus siervos leales (1 Sam. 2:1, 8, 9). Sus problemas tal vez no habían desaparecido, pero ella se centró en cómo la había bendecido Jehová. ¿La lección? Nos resultará más fácil sobrellevar las dificultades si nos centramos en cómo nos ha apoyado Jehová." },
          { number: 15, content: "(Lee Jeremías 12:1). En algún momento de su vida, el profeta Jeremías se sintió muy desanimado porque veía que a los malos les iba bien y que los israelitas se burlaban de él (Jer. 20:7, 8). Es fácil ponernos en su lugar porque la gente también se burla de nosotros y parece que quienes hacen cosas malas disfrutan de la vida. Notemos que, aunque Jeremías expresó su frustración, jamás acusó a Dios de ser injusto. Al contrario, al ver cómo disciplinaba a su pueblo rebelde, se convenció cada vez más de que Jehová actúa con justicia (Jer. 32:19). Nosotros también podemos hacer lo mismo y contarle a Jehová nuestras frustraciones, con la confianza de que él solucionará las injusticias al debido tiempo." },
          { number: 16, content: "(Lee Salmo 42:1-4). En esta canción, un levita expresó cómo se sentía debido a que estaba exiliado y no podía reunirse con sus hermanos. Quizás nos sintamos como él si no podemos salir de nuestras casas o estamos en prisión por nuestra fe. En esas circunstancias puede que nuestras emociones sean una montaña rusa, pero lo mejor es hablarle a Jehová de cómo nos sentimos. Eso nos ayudará a comprender mejor nuestros sentimientos y a ver las cosas de otra manera. Por ejemplo, el levita se dio cuenta de que tendría nuevas oportunidades de alabar a Dios (Sal. 42:5). También meditó en que Jehová lo estaba cuidando (Sal. 42:8). Abrirle nuestro corazón a Jehová nos puede ayudar a analizar nuestros sentimientos, recuperar el equilibro y tener las fuerzas para aguantar." },
          { number: 17, content: "(Lee Jonás 2:1, 2). El profeta Jonás hizo esta oración mientras estaba en el vientre de un gran pez. Aunque había desobedecido a Jehová, estaba seguro de que Dios escucharía su voz. En su súplica usó muchas expresiones que encontramos en los Salmos, así que de seguro los conocía muy bien. Recordarlos y meditar en ellos lo convenció de que Jehová lo ayudaría. De manera parecida, si nos esforzamos por memorizar textos bíblicos, puede que se nos vengan a la mente y nos consuelen cuando estemos orando al pasar por momentos difíciles." },
          { number: 18, content: "(Lee Romanos 8:26, 27). Puede que en ocasiones estemos tan angustiados que no nos salgan las palabras para expresar lo que sentimos. Pero, en esos momentos, el espíritu santo acude en nuestra ayuda y \"ruega\" por nosotros. ¿Y eso qué quiere decir? Mediante su espíritu, Jehová se encargó de que muchas oraciones quedaran registradas en la Biblia. Así que, cuando no conseguimos expresar claramente lo que pensamos, Jehová puede aceptar algunas de esas peticiones como si las hubiéramos hecho nosotros, y luego responderlas." },
          { number: 19, content: "Tener esto presente fue de mucha ayuda para una hermana rusa llamada Elena, a quien arrestaron por orar y leer la Biblia. Estaba tan angustiada que le costaba orar. Ella explica: \"Recordé que, si siento que una situación me supera y no sé qué pedir en oración, Jehová puede aceptar las oraciones de otros siervos suyos que aparecen en la Biblia como si fueran mías\". Y añadió: \"Eso me consoló mucho en esos momentos tan tan difíciles\"." },
          { number: 20, content: "Cuando estamos bajo mucho estrés, puede ser difícil mantenernos concentrados mientras oramos. Para preparar nuestra mente, podemos escuchar los audios de los Salmos o hacer como el rey David y poner por escrito lo que sentimos (Sal. 18, 34, 142 y encabezamientos). Claro, como todos somos muy diferentes, cada cristiano puede buscar el método que le resulte más eficaz a la hora de prepararse para orar (Sal. 141:2). ¿Cuál te funciona mejor a ti?" },
          { number: 21, content: "Nos consuela que Jehová entienda nuestros sentimientos incluso antes de contárselos (Sal. 139:4). Pero a él le encanta escucharnos y ver que confiamos en él. Así que no dudemos en orarle a nuestro Padre celestial. Usemos expresiones e ideas de las oraciones que encontramos en su Palabra. Abrámosle nuestro corazón y compartamos con él nuestras penas y alegrías. Jehová es un amigo verdadero y siempre estará a nuestro lado." }
        ],
        reviewQuestions: [
          {
            question: "¿Qué nos ayudará a no sentir miedo de orarle a Jehová?"
          },
          {
            question: "¿Qué podemos hacer para que nuestras oraciones sean más profundas?"
          },
          {
            question: "¿Cómo nos beneficia meditar en las oraciones de personajes bíblicos?"
          }
        ],
        finalSong: "Canción 45: \"La meditación de mi corazón\""
      },

      // Artículo 43: "No nos olvidemos de orar por otros" (29 Dic - 4 Ene)
      {
        metadata: {
          articleNumber: 43,
          week: "29 Dic - 4 Ene",
          month: "Octubre",
          year: 2025
        },
        song: "Canción 41: Padre, escucha mi oración",
        title: "No nos olvidemos de orar por otros",
        biblicalText: "\"Oren unos por otros [...]. El ruego del hombre justo tiene un efecto poderoso\" (SANT. 5:16).",
        theme: "Razones por las que es importante orar por los demás y algunas sugerencias sobre cómo hacerlo.",
        questions: [
          {
            number: "1",
            textEs: "¿Cómo sabemos que para Jehová nuestras oraciones son importantes?",
            textLSM: "",
            paragraphs: [1],
            answer: "La oración es un regalo extraordinario. Aunque Jehová ha delegado tareas en los ángeles y le ha confiado a su Hijo grandes responsabilidades, escuchar las oraciones es una tarea que se ha reservado solo para él. Jehová es «el que escucha las oraciones» y quiere escuchar personalmente nuestras oraciones.",
            answerBullets: [
              "**La oración es un regalo extraordinario** - Muy especial para Jehová",
              "**Delegó otras tareas** - A los ángeles y a su Hijo (Sal. 91:11; Mat. 28:18)",
              "**Escuchar oraciones es solo suyo** - Es una tarea reservada para él",
              "**«El que escucha las oraciones»** - Jehová quiere escucharnos personalmente (Sal. 65:2)"
            ],
            flashcards: [
              {
                question: "¿Por qué sabemos que nuestras oraciones son importantes para Jehová?",
                answer: "Porque escuchar las oraciones es una tarea que se ha reservado solo para él. Aunque delegó otras tareas, él personalmente quiere escucharnos."
              }
            ],
            biblicalCards: [
              {
                reference: "Salmo 65:2",
                purpose: "Jehová es el que escucha las oraciones",
                text: "Oh, Oyente de la oración, a ti vendrá gente de toda clase."
              }
            ]
          },
          {
            number: "2",
            textEs: "¿Qué buen ejemplo nos dejó el apóstol Pablo?",
            textLSM: "",
            paragraphs: [2],
            answer: "Pablo nos dejó el ejemplo de orar por otros. Les dijo a los cristianos de Éfeso: «Sigo mencionándolos en mis oraciones». También oraba por algunos en particular, como Timoteo: «Siempre me acuerdo de ti en los ruegos que hago día y noche». Aunque Pablo tenía muchas preocupaciones propias por las que orar, sacó tiempo para orar por otras personas.",
            answerBullets: [
              "**Oraba por congregaciones** - «Sigo mencionándolos en mis oraciones» a los de Éfeso (Efes. 1:16)",
              "**Oraba por personas específicas** - Como Timoteo, «día y noche» (2 Tim. 1:3)",
              "**Tenía muchas preocupaciones propias** - Pero aun así oraba por otros (2 Cor. 11:23; 12:7, 8)",
              "**Sacó tiempo para orar por otros** - A pesar de sus problemas personales"
            ],
            flashcards: [
              {
                question: "¿Qué buen ejemplo nos dejó Pablo sobre la oración?",
                answer: "Aunque tenía muchas preocupaciones propias, sacó tiempo para orar por otros, tanto congregaciones como personas específicas."
              },
              {
                question: "¿Por quién oraba Pablo específicamente según 2 Timoteo 1:3?",
                answer: "Por Timoteo: «Siempre me acuerdo de ti en los ruegos que hago día y noche»."
              }
            ],
            biblicalCards: [
              {
                reference: "Efesios 1:16",
                purpose: "Pablo oraba por congregaciones",
                text: "No dejo de dar gracias por ustedes. Sigo mencionándolos en mis oraciones."
              },
              {
                reference: "2 Timoteo 1:3",
                purpose: "Pablo oraba por personas específicas",
                text: "Le estoy agradecido a Dios, a quien sirvo con conciencia limpia como mis antepasados, y siempre me acuerdo de ti en los ruegos que hago día y noche."
              }
            ]
          },
          {
            number: "3",
            textEs: "¿Por qué puede que a veces se nos olvide orar por otros?",
            textLSM: "",
            paragraphs: [3],
            answer: "La vida en este sistema es un no parar. Podemos centrarnos tanto en nuestros problemas que solo oremos por lo que necesitamos nosotros. Si nos damos cuenta de que eso nos está pasando, este artículo nos ayudará a ver por qué es importante orar por los demás y cómo hacerlo.",
            answerBullets: [
              "**La vida es un no parar** - El sistema nos mantiene ocupados",
              "**Centrarnos en nuestros problemas** - Solo oramos por nosotros mismos",
              "**Olvidamos a los demás** - Nos enfocamos en nuestras necesidades",
              "**El artículo ayuda** - Por qué es importante y cómo orar por otros"
            ],
            flashcards: [
              {
                question: "¿Por qué puede que se nos olvide orar por otros?",
                answer: "La vida en este sistema es un no parar y podemos centrarnos tanto en nuestros problemas que solo oremos por lo que necesitamos nosotros."
              }
            ],
            biblicalCards: []
          },
          {
            number: "4, 5",
            textEs: "¿En qué sentido tienen \"un efecto poderoso\" las oraciones que hacemos por otros? (Santiago 5:16).",
            textLSM: "",
            paragraphs: [4, 5],
            readText: "LEE Santiago 5:16",
            section: "¿POR QUÉ ES IMPORTANTE?",
            answer: "Nuestras oraciones por otros pueden influir en lo que les pase. Jesús rogó por Pedro para que su fe no decayera. Pablo esperaba ser liberado gracias a las oraciones de Filemón, y así fue. Aunque no podemos obligar a Jehová a actuar, él toma en cuenta lo que nos preocupa y a veces decide hacer lo que le pedimos. Esto nos motiva a orar con intensidad y confiar en que él hará lo mejor.",
            answerBullets: [
              "**Podemos influir en otros** - Las oraciones tienen efecto poderoso (Sant. 5:16)",
              "**Jesús rogó por Pedro** - Para que su fe no decayera (Luc. 22:32)",
              "**Pablo fue liberado** - Gracias a las oraciones de Filemón (Filem. 22)",
              "**Jehová toma en cuenta lo que pedimos** - A veces decide hacer lo que le pedimos (Sal. 37:5)"
            ],
            flashcards: [
              {
                question: "¿Cómo tienen «un efecto poderoso» nuestras oraciones por otros?",
                answer: "Pueden influir en lo que les pase. Jesús rogó por Pedro, Pablo fue liberado gracias a oraciones. Jehová toma en cuenta lo que nos preocupa."
              },
              {
                question: "¿Qué ejemplo muestra que nuestras oraciones pueden cambiar situaciones?",
                answer: "Pablo fue liberado de su arresto domiciliario gracias a las oraciones de Filemón (Filemón 22)."
              }
            ],
            biblicalCards: [
              {
                reference: "Santiago 5:16",
                purpose: "Texto temático - Las oraciones tienen efecto poderoso",
                text: "Oren unos por otros para que se curen. El ruego del hombre justo tiene un efecto poderoso."
              },
              {
                reference: "Lucas 22:32",
                purpose: "Jesús rogó por Pedro",
                text: "Pero he rogado por ti para que tu fe no decaiga; y tú, una vez que hayas vuelto, fortalece a tus hermanos."
              }
            ]
          },
          {
            number: "6",
            textEs: "¿Qué efecto tiene en nuestros sentimientos orar por otros? (1 Pedro 3:8).",
            textLSM: "",
            paragraphs: [6],
            readText: "LEE 1 Pedro 3:8",
            answer: "Orar por otros nos ayuda a cultivar «tierna compasión». Cuando oramos por las necesidades de los demás, nos volvemos más conscientes de sus luchas, y eso hace que los queramos todavía más. Aunque ellos no lo sepan, nos sentimos más cerca de ellos. Además, cuando oramos por alguien, nos entran más ganas de ayudarlo, como si estuviéramos contribuyendo a contestar nuestra propia oración.",
            answerBullets: [
              "**Cultivamos «tierna compasión»** - Nos fijamos en el sufrimiento de otros (1 Ped. 3:8)",
              "**Más conscientes de sus luchas** - Y los queremos más",
              "**Nos sentimos más cerca** - Aunque ellos no lo sepan",
              "**Más ganas de ayudar** - Contribuimos a contestar nuestra propia oración"
            ],
            flashcards: [
              {
                question: "¿Qué efecto tiene en nuestros sentimientos orar por otros?",
                answer: "Cultivamos «tierna compasión», nos volvemos más conscientes de sus luchas, los queremos más y nos entran más ganas de ayudarlos."
              }
            ],
            biblicalCards: [
              {
                reference: "1 Pedro 3:8",
                purpose: "Cultivar tierna compasión",
                text: "En conclusión, todos ustedes tengan la misma actitud mental, tengan empatía, cariño fraternal, tierna compasión y humildad."
              },
              {
                reference: "Marcos 1:40, 41",
                purpose: "Ejemplo de compasión que lleva a actuar",
                text: "También vino a él un leproso y, de rodillas, le suplicó: «Si quieres, puedes limpiarme». Entonces él, movido a compasión, extendió la mano y lo tocó."
              }
            ]
          },
          {
            number: "7",
            textEs: "¿Por qué orar por otros nos ayuda a ver nuestros problemas desde la perspectiva correcta? (Filipenses 2:3, 4; mira también las imágenes).",
            textLSM: "",
            paragraphs: [7],
            readText: "LEE Filipenses 2:3, 4",
            answer: "Como vivimos en un mundo controlado por el Diablo, todos afrontamos dificultades. Tener la costumbre de orar por los demás nos recuerda que «toda la hermandad en el mundo está pasando por los mismos sufrimientos». Esto nos ayuda a no centrarnos demasiado en nosotros mismos y ver que no somos los únicos que estamos pasando por problemas.",
            answerBullets: [
              "**El mundo está controlado por el Diablo** - Todos afrontamos dificultades (1 Juan 5:19; Apoc. 12:12)",
              "**Orar por otros nos recuerda** - Que toda la hermandad pasa por sufrimientos (1 Ped. 5:9)",
              "**No somos los únicos** - Con problemas, nos ayuda a tener perspectiva",
              "**No centrarnos demasiado en nosotros** - Filipenses 2:3, 4 lo enseña"
            ],
            flashcards: [
              {
                question: "¿Por qué orar por otros nos ayuda a ver nuestros problemas correctamente?",
                answer: "Nos recuerda que «toda la hermandad en el mundo está pasando por los mismos sufrimientos». No somos los únicos con problemas."
              }
            ],
            biblicalCards: [
              {
                reference: "Filipenses 2:3, 4",
                purpose: "Pensar en los intereses de los demás",
                text: "No hagan nada por espíritu de rivalidad ni por presunción, sino que con humildad consideren a los demás como superiores a ustedes. No busquen solo sus propios intereses, sino también los de los demás."
              },
              {
                reference: "1 Pedro 5:9",
                purpose: "Toda la hermandad pasa por sufrimientos",
                text: "Opónganse a él firmes en la fe, sabiendo que toda la hermandad en el mundo está pasando por los mismos sufrimientos."
              }
            ]
          },
          {
            number: "8",
            textEs: "¿Por quiénes podemos orar?",
            textLSM: "",
            paragraphs: [8],
            section: "¿QUIÉNES NECESITAN NUESTRAS ORACIONES?",
            answer: "Podemos orar por diferentes grupos: los que tienen problemas de salud, los jóvenes que enfrentan burlas y presiones en la escuela, los que se van haciendo mayores, los que afrontan oposición de su familia o de gobiernos, los que han tenido que dejar sus casas por inestabilidad política, y los que sufren por desastres naturales. Aunque no los conozcamos en persona, al orar demostramos amor.",
            answerBullets: [
              "**Problemas de salud** - Los enfermos crónicos",
              "**Jóvenes** - Que enfrentan burlas y presiones en la escuela",
              "**Mayores** - Los que se van haciendo ancianos",
              "**Oposición** - De familia o gobiernos (Mat. 10:18, 36; Hech. 12:5)",
              "**Desplazados y víctimas** - Por inestabilidad política o desastres naturales"
            ],
            flashcards: [
              {
                question: "¿Por qué grupos de hermanos podemos orar?",
                answer: "Los enfermos, jóvenes con presiones, ancianos, los que enfrentan oposición, desplazados por política, víctimas de desastres."
              },
              {
                question: "¿Qué demostramos cuando oramos por hermanos que no conocemos?",
                answer: "Demostramos que obedecemos el mandato de Jesús de amarnos unos a otros (Juan 13:34)."
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 13:34",
                purpose: "El mandato de amarnos unos a otros",
                text: "Les doy un mandamiento nuevo: que se amen unos a otros. Así como yo los he amado, también ustedes deben amarse unos a otros."
              },
              {
                reference: "Hechos 12:5",
                purpose: "La congregación oraba por Pedro en prisión",
                text: "De modo que Pedro estaba detenido en la cárcel; pero la congregación oraba fervientemente a Dios por él."
              }
            ]
          },
          {
            number: "9",
            textEs: "¿Por qué debemos orar por los hermanos que tienen responsabilidades dentro de la organización de Jehová y por sus esposas?",
            textLSM: "",
            paragraphs: [9],
            answer: "Podemos orar por el Cuerpo Gobernante, sus ayudantes, los Comités de Sucursal, superintendentes de circuito, ancianos y siervos ministeriales. Muchos tienen que lidiar con sus propias preocupaciones a la vez que se desgastan por nosotros. Por ejemplo, un superintendente de circuito dijo que lo más difícil es estar lejos de sus padres mayores y enfermos. Es bueno orar por ellos y por sus esposas, que los apoyan lealmente.",
            answerBullets: [
              "**Cuerpo Gobernante y ayudantes** - Necesitan nuestras oraciones",
              "**Comités de Sucursal, superintendentes** - Ancianos y siervos ministeriales",
              "**Tienen preocupaciones propias** - Y se desgastan por nosotros (2 Cor. 12:15)",
              "**Ejemplo de Mark** - Lo más difícil es estar lejos de sus padres mayores y enfermos",
              "**Sus esposas** - Las que los apoyan lealmente (1 Tes. 5:12, 13)"
            ],
            flashcards: [
              {
                question: "¿Por qué debemos orar por los que tienen responsabilidades en la organización?",
                answer: "Tienen que lidiar con sus propias preocupaciones a la vez que se desgastan por nosotros. También debemos orar por sus esposas."
              }
            ],
            biblicalCards: [
              {
                reference: "2 Corintios 12:15",
                purpose: "Los siervos se desgastan por los hermanos",
                text: "De buena gana gastaré todo, y me desgastaré completamente por ustedes."
              },
              {
                reference: "1 Tesalonicenses 5:12, 13",
                purpose: "Valorar a los que trabajan duro por nosotros",
                text: "Les pedimos, hermanos, que respeten a los que trabajan duro entre ustedes y los dirigen en el Señor y los amonestan; téngales en altísima consideración con amor por su trabajo."
              }
            ]
          },
          {
            number: "10, 11",
            textEs: "¿Le gustan a Jehová las oraciones que abarcan a muchos hermanos?",
            textLSM: "",
            paragraphs: [10, 11],
            answer: "¡Por supuesto que sí! Muchas veces hacemos oraciones «paraguas» para no dejarnos a nadie, pidiendo por hermanos en la cárcel o los que han perdido a un ser querido sin pensar en alguien en particular. A Jehová le gustan estas oraciones porque no conocemos las necesidades concretas de todos. Las oraciones generales demuestran que tenemos «amor a toda la hermandad».",
            answerBullets: [
              "**Oraciones «paraguas»** - Para no dejarnos a nadie (Juan 17:20)",
              "**Por grupos generales** - Hermanos en cárcel, los que han perdido seres queridos",
              "**A Jehová le gustan** - No conocemos las necesidades de todos (Efes. 6:18)",
              "**Demuestran amor** - «Amor a toda la hermandad» (1 Ped. 2:17)"
            ],
            flashcards: [
              {
                question: "¿Le gustan a Jehová las oraciones generales por muchos hermanos?",
                answer: "¡Por supuesto! Porque no conocemos las necesidades de todos. Demuestran que tenemos «amor a toda la hermandad»."
              },
              {
                question: "¿Qué son las oraciones «paraguas»?",
                answer: "Peticiones generales que abarcan a muchos hermanos para no dejarnos a nadie, como por los que están en prisión o han perdido seres queridos."
              }
            ],
            biblicalCards: [
              {
                reference: "Juan 17:20",
                purpose: "Jesús oró por todos los que creerían",
                text: "No ruego solo por estos, sino también por los que pongan fe en mí mediante la palabra de ellos."
              },
              {
                reference: "1 Pedro 2:17",
                purpose: "Amor a toda la hermandad",
                text: "Honren a hombres de toda clase, tengan amor a toda la hermandad, teman a Dios, honren al rey."
              }
            ]
          },
          {
            number: "12",
            textEs: "¿Por qué ser observadores nos ayuda a hacer oraciones más específicas?",
            textLSM: "",
            paragraphs: [12],
            section: "¿QUÉ HACER CUANDO ORAMOS POR HERMANOS CONCRETOS?",
            answer: "Además de oraciones generales, es bueno orar por hermanos específicos. Ser observadores nos da más empatía y nos motiva a orar por ellos. Podemos fijarnos en quién lucha con una enfermedad crónica, qué joven está desanimado por presiones de clase, o qué padre o madre cría solo a un hijo «de acuerdo con la disciplina y los consejos de Jehová».",
            answerBullets: [
              "**Ser observadores** - Nos da más empatía (Rom. 12:15)",
              "**¿Quién lucha con enfermedad crónica?** - Podemos orar específicamente",
              "**¿Qué joven está desanimado?** - Por presiones de clase",
              "**¿Padres o madres solos?** - Criando según los consejos de Jehová (Efes. 6:4)"
            ],
            flashcards: [
              {
                question: "¿Por qué ser observadores nos ayuda a hacer oraciones más específicas?",
                answer: "Nos da más empatía y nos motiva a orar por hermanos específicos: los enfermos crónicos, jóvenes desanimados, padres solos."
              }
            ],
            biblicalCards: [
              {
                reference: "Romanos 12:15",
                purpose: "Empatía con los hermanos",
                text: "Alégrense con los que se alegran; lloren con los que lloran."
              },
              {
                reference: "Efesios 6:4",
                purpose: "Criar hijos según Jehová",
                text: "Y padres, no irriten a sus hijos, sino críenlos de acuerdo con la disciplina y los consejos de Jehová."
              }
            ]
          },
          {
            number: "13",
            textEs: "¿Podemos orar por hermanos que no conocemos?",
            textLSM: "",
            paragraphs: [13],
            answer: "Sí, podemos mencionarlos por nombre, incluso si no los conocemos en persona. Por ejemplo, en jw.org encontramos los nombres de hermanos encarcelados en Crimea, Eritrea, Rusia y Singapur. Un superintendente de circuito llamado Brian explica: «Cuando escribo el nombre de un hermano encarcelado y luego lo digo en voz alta, me resulta más fácil recordarlo y mencionarlo en mis oraciones».",
            answerBullets: [
              "**Mencionarlos por nombre** - Incluso sin conocerlos en persona",
              "**Encontrar nombres en jw.org** - De hermanos encarcelados en varios países",
              "**Ejemplo de Brian** - Escribir el nombre y decirlo en voz alta",
              "**Más fácil recordarlos** - Y mencionarlos en nuestras oraciones"
            ],
            flashcards: [
              {
                question: "¿Podemos orar por hermanos que no conocemos?",
                answer: "Sí, podemos mencionarlos por nombre. En jw.org encontramos nombres de hermanos encarcelados. Escribir el nombre y decirlo en voz alta ayuda a recordarlos."
              }
            ],
            biblicalCards: []
          },
          {
            number: "14, 15",
            textEs: "¿Qué nos ayudará a hacer oraciones más específicas?",
            textLSM: "",
            paragraphs: [14, 15],
            answer: "Hacer peticiones específicas. Podemos leer experiencias de hermanos en prisión en jw.org e imaginar cómo nos sentiríamos en su situación. Por ejemplo, pedir que los guardias sean amables con ellos, que las autoridades les permitan adorar a Dios, que su buen ejemplo anime a la congregación local y motive a no Testigos a escuchar. Estas sugerencias aplican para cualquier hermano, no solo los presos.",
            answerBullets: [
              "**Leer experiencias en jw.org** - E imaginar cómo nos sentiríamos (Heb. 13:3)",
              "**Pedir por cosas específicas** - Guardias amables, libertad de adoración",
              "**Que su ejemplo anime** - A la congregación local (1 Ped. 2:12)",
              "**Motive a otros a escuchar** - A quienes no son Testigos",
              "**Aplicar para cualquier hermano** - No solo los presos (1 Tes. 3:12; 1 Tim. 2:1, 2)"
            ],
            flashcards: [
              {
                question: "¿Qué nos ayudará a hacer oraciones más específicas por hermanos en prisión?",
                answer: "Imaginar cómo nos sentiríamos en su situación. Pedir que los guardias sean amables, que puedan adorar a Dios, que su ejemplo anime a otros."
              },
              {
                question: "¿Solo debemos aplicar estas sugerencias para los hermanos presos?",
                answer: "No, las sugerencias (ser observadores, mencionar nombres, hacer peticiones específicas) aplican para cualquier hermano."
              }
            ],
            biblicalCards: [
              {
                reference: "Hebreos 13:3",
                purpose: "Recordar a los que están en prisión",
                text: "Sigan acordándose de los que están en prisión, como si estuvieran presos junto con ellos, y de los que están siendo maltratados, ya que ustedes también tienen un cuerpo."
              },
              {
                reference: "1 Timoteo 2:1, 2",
                purpose: "Orar por los que están en autoridad",
                text: "Los exhorto a que hagan ruegos, oraciones, intercesiones y acciones de gracias por hombres de toda clase, por reyes y por todos los que están en puestos de autoridad."
              }
            ]
          },
          {
            number: "16",
            textEs: "¿Qué debemos tener en cuenta a la hora de orar? (Mateo 6:8).",
            textLSM: "",
            paragraphs: [16],
            readText: "LEE Mateo 6:8",
            section: "SEAMOS EQUILIBRADOS",
            answer: "Debemos ser equilibrados. Cuando oramos, no le estamos contando a Jehová algo que él no sepa. Tampoco deberíamos darle consejos sobre cómo manejar una situación. Él sabe lo que sus siervos necesitan incluso antes de que se den cuenta. ¿Por qué orar por otros entonces? Porque eso es lo que hacen las personas que se interesan por los demás. Oramos porque los queremos, y Jehová se alegra de ver que imitamos su amor.",
            answerBullets: [
              "**No le contamos algo nuevo** - Jehová ya lo sabe todo (Mat. 6:8)",
              "**No darle consejos** - Sobre cómo manejar situaciones",
              "**Él sabe lo que necesitan** - Antes de que se den cuenta",
              "**Oramos porque los queremos** - Es lo que hacen los que se interesan por otros",
              "**Jehová se alegra** - De ver que imitamos su amor"
            ],
            flashcards: [
              {
                question: "¿Por qué orar por otros si Jehová ya sabe lo que necesitan?",
                answer: "Porque eso es lo que hacen las personas que se interesan por los demás. Oramos porque los queremos, y Jehová se alegra de ver que imitamos su amor."
              }
            ],
            biblicalCards: [
              {
                reference: "Mateo 6:8",
                purpose: "Jehová sabe lo que necesitamos antes de pedirle",
                text: "No sean como ellos, porque su Padre sabe lo que ustedes necesitan incluso antes de que se lo pidan."
              }
            ]
          },
          {
            number: "17, 18",
            textEs: "Explique con un ejemplo por qué sabemos que nuestras oraciones no le pasan desapercibidas a Jehová.",
            textLSM: "",
            paragraphs: [17, 18],
            answer: "Pensemos en un padre con un niño y una niña. El niño está enfermo, y la niña insiste: «Ayuda a mi hermanito». El padre tiene la situación bajo control y está cuidando al hijo, pero se alegra de ver que ella quiere tanto a su hermano. De manera parecida, Jehová quiere que nos interesemos por los demás y oremos por ellos. Demostraremos que nos preocupamos por los hermanos, y Jehová tomará nota de ello. Además, nuestras oraciones pueden cambiar el rumbo de una situación.",
            answerBullets: [
              "**Ejemplo del padre y sus hijos** - La niña pide ayuda para su hermano enfermo",
              "**El padre ya tiene la situación controlada** - Pero se alegra del amor de la niña",
              "**Jehová quiere que nos interesemos** - Y oremos por los demás",
              "**Demostraremos preocupación** - Jehová tomará nota (2 Tes. 1:3; Heb. 6:10)",
              "**Las oraciones pueden cambiar situaciones** - No debemos olvidar incluir a los hermanos"
            ],
            flashcards: [
              {
                question: "¿Por qué nuestras oraciones por otros no le pasan desapercibidas a Jehová?",
                answer: "Como un padre que se alegra cuando su hija pide ayuda para su hermano, Jehová se alegra de ver que nos interesamos por los demás."
              },
              {
                question: "¿Qué beneficios tiene orar por los hermanos?",
                answer: "Demostramos que nos preocupamos por ellos, Jehová toma nota, y nuestras oraciones pueden incluso cambiar el rumbo de una situación."
              }
            ],
            biblicalCards: [
              {
                reference: "Hebreos 6:10",
                purpose: "Jehová no olvida nuestro amor",
                text: "Porque Dios no es injusto como para olvidarse de la obra de ustedes y del amor que le mostraron a su nombre al servir a los santos y seguir sirviéndoles."
              },
              {
                reference: "2 Tesalonicenses 1:3",
                purpose: "El amor que crece entre hermanos",
                text: "Estamos obligados a darle siempre gracias a Dios por ustedes, hermanos. Es lo que corresponde, porque su fe está creciendo mucho y el amor de cada uno de ustedes hacia los demás está aumentando."
              }
            ]
          }
        ],
        paragraphs: [
          { number: 1, content: "LA ORACIÓN es un regalo extraordinario. Pensemos en lo siguiente: Jehová ha delegado ciertas tareas en los ángeles y le ha confiado a su Hijo grandes responsabilidades (Sal. 91:11; Mat. 28:18). Sin embargo, Jehová es \"el que escucha las oraciones\"; esa es una tarea que se ha reservado solo para él (Sal. 65:2). Él quiere escuchar personalmente nuestras oraciones." },
          { number: 2, content: "Podemos contarle a Jehová todo lo que nos preocupa, pero además debemos orar por otros. Eso es lo que hizo el apóstol Pablo. Por ejemplo, les dijo a todos los cristianos de la congregación de Éfeso: \"Sigo mencionándolos en mis oraciones\" (Efes. 1:16). Pero también oraba por algunos en particular. Le escribió a Timoteo: \"Le estoy agradecido a Dios [...] y siempre me acuerdo de ti en los ruegos que hago día y noche\" (2 Tim. 1:3). Pablo tenía muchas preocupaciones propias por las que orar; aun así, sacó tiempo para orar por otras personas (2 Cor. 11:23; 12:7, 8)." },
          { number: 3, content: "Puede que a veces se nos olvide orar por otros. ¿Por qué? Una hermana llamada Sabrina explica: \"La vida en este sistema es un no parar. Podemos centrarnos tanto en nuestros problemas que solo oremos por lo que necesitamos nosotros\". Si nos damos cuenta de que eso nos está pasando, este artículo nos ayudará muchísimo. Por un lado, analizaremos por qué es importante que oremos por los demás. Y, por otro, veremos algunas sugerencias sobre cómo hacerlo." },
          { number: 4, content: "Orar por otros \"tiene un efecto poderoso\" (lee Santiago 5:16). ¿Pero de verdad podemos influir en lo que les pase a otros al orar por ellos? Pues sí. Jesús, que sabía que el apóstol Pedro pronto negaría conocerlo, le dijo: \"He rogado por ti para que tu fe no decaiga\" (Luc. 22:32). Pablo también era consciente del poder de la oración. Por eso, cuando de manera injusta fue puesto bajo arresto domiciliario en Roma, le escribió a Filemón: \"Espero ser devuelto a ustedes gracias a sus oraciones\" (Filem. 22). Y así fue: en poco tiempo fue liberado y pudo retomar la predicación." },
          { number: 5, content: "Claro está, eso no significa que con nuestras oraciones podamos obligar a Jehová a actuar. Ahora bien, él toma en cuenta lo que nos preocupa y a veces decide hacer lo que le pedimos. Saber esto nos motiva a orarle con intensidad cuando algo nos inquieta y luego confiar en que él hará lo que sea mejor (Sal. 37:5; mira 2 Corintios 1:11 y las notas de estudio)." },
          { number: 6, content: "Orar por otros nos ayuda a cultivar \"tierna compasión\" (lee 1 Pedro 3:8). La persona compasiva se fija en el sufrimiento de los demás y desea hacer algo para ayudarlos (Mar. 1:40, 41). Un anciano llamado Michael dice: \"Cuando oro por las necesidades de los demás, me vuelvo más consciente de sus luchas, y eso hace que los quiera todavía más. Aunque ellos no lo sepan, me siento más cerca de ellos\". Richard, que también es anciano, explica otro beneficio: \"Cuando oramos por alguien, nos entran más ganas de ayudarlo\". Y añade: \"Al darle ayuda práctica a la persona por la que estamos orando, es como si estuviéramos contribuyendo a contestar nuestra propia oración\"." },
          { number: 7, content: "Orar por otros nos ayuda a ver nuestros problemas desde la perspectiva correcta (lee Filipenses 2:3, 4). Como vivimos en un mundo que está controlado por el Diablo, todos afrontamos dificultades (1 Juan 5:19; Apoc. 12:12). Tener la costumbre de orar por los demás nos recuerda que \"toda la hermandad en el mundo está pasando por los mismos sufrimientos\" (1 Ped. 5:9). Una precursora llamada Katherine dice: \"Orar por los demás me recuerda que no soy la única que está pasando por problemas. Eso evita que me centre demasiado en mí misma\"." },
          { number: 8, content: "¿Por quiénes podemos orar? Por diferentes grupos. Por ejemplo, podemos orar por los que tienen problemas de salud, por los jóvenes que se enfrentan a burlas y presiones en la escuela o por quienes se van haciendo mayores. Muchos hermanos afrontan oposición, unas veces de su propia familia y otras de los gobiernos (Mat. 10:18, 36; Hech. 12:5). Algunos han tenido que dejar sus casas debido a la inestabilidad política y otros sufren por culpa de los desastres naturales. Quizás no conozcamos en persona a esos hermanos. Pero, cuando oramos por ellos, demostramos que obedecemos el mandato de Jesús de amarnos unos a otros (Juan 13:34)." },
          { number: 9, content: "También podemos orar por los hermanos que tienen responsabilidades dentro de la organización de Jehová: el Cuerpo Gobernante y sus ayudantes, los Comités de Sucursal, los encargados de los departamentos de las sucursales, los superintendentes de circuito, los ancianos de congregación y los siervos ministeriales. Muchos de ellos tienen que lidiar con sus propias preocupaciones a la vez que se desgastan por nosotros (2 Cor. 12:15). Por ejemplo, Mark, que es superintendente de circuito, explica: \"Una de las cosas más difíciles para mí es estar lejos de mis padres. Ya son mayores y están enfermos. Sé que mi hermana y su esposo los cuidan con cariño, pero me duele no poder hacer más por ellos\". Aunque no estemos al tanto de todas las inquietudes que tienen estos hermanos, es bueno que oremos por ellos (1 Tes. 5:12, 13). También podemos orar por sus esposas, que los apoyan lealmente para que puedan seguir trabajando duro por los hermanos." },
          { number: 10, content: "Como hemos visto, muchas veces oramos por grandes grupos de hermanos. Sin pensar en alguien en particular, tal vez le pidamos a Jehová que ayude a los hermanos que están en la cárcel o que consuele a los que han perdido a un ser querido. Un anciano llamado Donald dice: \"Hay tantos hermanos y hermanas que están pasando por dificultades que a veces hacemos una oración 'paraguas' para no dejarnos a nadie y que todos estén cubiertos\"." },
          { number: 11, content: "¿Le gustan a Jehová esas oraciones? ¡Por supuesto que sí! A fin de cuentas, no conocemos las necesidades concretas de todos y cada uno de sus siervos. Así que está bien que hagamos peticiones generales que abarquen a muchos hermanos (Juan 17:20; Efes. 6:18). Esas oraciones demuestran que le tenemos \"amor a toda la hermandad\" (1 Ped. 2:17)." },
          { number: 12, content: "Seamos observadores. Además de hacer oraciones generales, es bueno que oremos por hermanos específicos. ¿Hay alguien en la congregación que esté luchando con una enfermedad crónica? ¿Hay algún joven que esté desanimado por las presiones de sus compañeros de clase? ¿Hay algún padre o madre que esté criando solo a un hijo \"de acuerdo con la disciplina y los consejos de Jehová\"? (Efes. 6:4). Si somos observadores, tendremos más empatía, y eso nos motivará a orar por los hermanos (Rom. 12:15)." },
          { number: 13, content: "Mencionémoslos por nombre. Eso es algo que podemos hacer incluso en el caso de hermanos que no conocemos en persona. Pensemos, por ejemplo, en los hermanos que están encarcelados en Crimea, Eritrea, Rusia y Singapur. En jw.org podemos encontrar sus nombres. Un superintendente de circuito que se llama Brian explica: \"Cuando escribo el nombre de un hermano que está encarcelado y luego lo digo en voz alta, me resulta más fácil recordarlo y mencionarlo en mis oraciones\"." },
          { number: 14, content: "Hagamos peticiones específicas. Michael, mencionado en el párrafo 6, nos da esta buena sugerencia: \"Cuando leo en jw.org las experiencias de los hermanos que están en la cárcel, trato de imaginar cómo me sentiría yo en su situación. Sé que estaría preocupado por mi esposa y querría saber que está bien cuidada. Eso me ayuda a hacer peticiones específicas cuando oro por hermanos casados que están presos\" (Heb. 13:3, nota)." },
          { number: 15, content: "Cuando pensamos en el día a día de nuestros hermanos que están en prisión, se nos ocurren más detalles que incluir en nuestras oraciones. Por ejemplo, podemos pedirle a Jehová que los guardias de prisión sean amables con ellos o que quienes estén en puestos de autoridad les permitan adorar a Dios (1 Tim. 2:1, 2). También podemos orar para que el buen ejemplo de estos fieles hermanos anime a la congregación de la zona y motive a quienes no son Testigos a escuchar nuestro mensaje (1 Ped. 2:12). Claro, todas estas sugerencias (ser observadores, mencionar a los hermanos por nombre y hacer peticiones específicas) las podemos aplicar al pedir por cualquier hermano, y no solo por quienes están en prisión. Así demostraremos que \"abunda nuestro amor\" (1 Tes. 3:12)." },
          { number: 16, content: "Como hemos visto, nuestras oraciones tienen mucho poder, pues pueden influir en lo que les pase a otros. Sin embargo, debemos ser equilibrados. Cuando oramos, no le estamos contando a Jehová algo que él no sepa. Tampoco deberíamos darle consejos sobre cómo manejar cierta situación. Él sabe lo que sus siervos necesitan incluso antes de que ellos o nosotros nos demos cuenta (lee Mateo 6:8). Entonces, ¿por qué orar por otros? En este artículo hemos visto varias razones. Pero hay otra más: eso es lo que hacen las personas que se interesan por los demás. Oramos por ellos porque los queremos. Y Jehová se siente muy feliz al ver que imitamos su amor." },
          { number: 17, content: "Incluso si nuestras oraciones no parecen influir en lo que les pase a otros, lo cierto es que demuestran que amamos a nuestros hermanos, y eso no le pasa desapercibido a Jehová. Pensemos en un padre que tiene un niño y una niña. El niño está enfermo en cama, y la niña le dice con insistencia a su padre: \"Ayuda a mi hermanito, por favor. Es que está muy enfermo\". Su padre tiene la situación bajo control, ama a su hijo y lo está cuidando muy bien, pero aun así se siente feliz al ver que ella quiere tanto a su hermano que le pide a su padre que haga algo por él." },
          { number: 18, content: "De manera parecida, Jehová quiere que nos interesemos por los demás y oremos por ellos. Así demostraremos que no solo nos preocupamos por nosotros mismos, sino también por los hermanos, y Jehová tomará nota de ello (2 Tes. 1:3; Heb. 6:10). Además, como vimos, en algunas ocasiones nuestras oraciones incluso pueden cambiar el rumbo de una situación. ¡Que nunca se nos olvide, entonces, incluir a los hermanos en nuestras oraciones!" }
        ],
        reviewQuestions: [
          {
            question: "¿En qué sentido tienen \"un efecto poderoso\" nuestras oraciones?"
          },
          {
            question: "¿Por qué debemos hacer oraciones por grupos de hermanos?"
          },
          {
            question: "¿Qué podemos hacer cuando oramos por hermanos concretos?"
          }
        ],
        finalSong: "Canción 101: Sirvamos a Dios en unidad"
      }
      // Agrega más artículos si lo necesitas...
    ]
  }

  // PUEDES SEGUIR AGREGANDO MÁS MESES:
  // "2025-11": { articles: [...] },
  // "2025-12": { articles: [...] },
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

// Helper para obtener el total de artículos en toda la base de datos
export function getTotalArticles(): number {
  let total = 0;
  for (const month in atalayaDatabase) {
    total += atalayaDatabase[month].articles.length;
  }
  return total;
}

// Export temporal para retrocompatibilidad (se puede eliminar después)
// Por defecto, exporta el artículo 35
export const atalayaData = atalayaDatabase["2025-08"].articles[1];
