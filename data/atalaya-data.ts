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
            paragraphs: [13]
          },
          {
            number: "14",
            textEs: "¿Cuál es una de las cosas que podemos hacer ahora? (Colosenses 3:10, 11).",
            textLSM: "",
            paragraphs: [14],
            section: "¿QUÉ PODEMOS HACER AHORA?"
          },
          {
            number: "15",
            textEs: "¿Qué conseguimos al predicar?",
            textLSM: "",
            paragraphs: [15]
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

  // Ejemplo: Octubre 2025
  "2025-10": {
    articles: [
      // Artículo 41 (Placeholder)
      {
        metadata: {
          articleNumber: 41,
          week: "16-22 Dic",
          month: "Octubre",
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

      // Artículo 42 (Placeholder)
      {
        metadata: {
          articleNumber: 42,
          week: "23-29 Dic",
          month: "Octubre",
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
