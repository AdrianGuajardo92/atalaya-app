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
            paragraphs: [1]
          },
          {
            number: "2",
            textEs: "¿Por quiénes se interesa Jehová en especial?",
            textLSM: "",
            paragraphs: [2]
          },
          {
            number: "3",
            textEs: "¿Por qué este artículo nos beneficiará a todos?",
            textLSM: "",
            paragraphs: [3]
          },
          {
            number: "4",
            textEs: "¿Cómo sabemos que Santiago 5:14-16, 19, 20 se refiere a alguien enfermo en sentido espiritual? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [4],
            section: "CUÁNDO \"LLAMAR\" A LOS ANCIANOS"
          },
          {
            number: "5",
            textEs: "¿Cómo podemos revisar nuestro estado de salud espiritual?",
            textLSM: "",
            paragraphs: [5]
          },
          {
            number: "6",
            textEs: "¿Qué debe hacer alguien que ha cometido un pecado grave?",
            textLSM: "",
            paragraphs: [6]
          },
          {
            number: "7",
            textEs: "¿Quiénes necesitan también la ayuda de los ancianos?",
            textLSM: "",
            paragraphs: [7]
          },
          {
            number: "8",
            textEs: "¿Qué tipo de errores no es necesario contarles a los ancianos?",
            textLSM: "",
            paragraphs: [8]
          },
          {
            number: "9",
            textEs: "Aunque nos dé vergüenza hablar con los ancianos, ¿por qué debemos hacerlo? (Proverbios 28:13).",
            textLSM: "",
            paragraphs: [9],
            section: "POR QUÉ \"LLAMAR\" A LOS ANCIANOS"
          },
          {
            number: "10",
            textEs: "¿Qué puede pasar si intentamos esconder nuestros pecados?",
            textLSM: "",
            paragraphs: [10]
          },
          {
            number: "11",
            textEs: "¿Qué más puede pasar cuando se esconden pecados graves?",
            textLSM: "",
            paragraphs: [11]
          },
          {
            number: "12",
            textEs: "¿Cómo apoyan los ancianos a los que están débiles en sentido espiritual?",
            textLSM: "",
            paragraphs: [12],
            section: "CÓMO NOS AYUDAN LOS ANCIANOS"
          },
          {
            number: "13",
            textEs: "¿Qué más harán los ancianos para ayudarnos? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [13]
          },
          {
            number: "14",
            textEs: "Según Gálatas 6:1, ¿cómo ayudan los ancianos a quien da \"un paso en falso\"? (Mira también las imágenes).",
            textLSM: "",
            paragraphs: [14]
          },
          {
            number: "15",
            textEs: "¿Qué podemos hacer si tenemos un problema?",
            textLSM: "",
            paragraphs: [15]
          },
          {
            number: "16",
            textEs: "¿Qué responsabilidad tenemos?",
            textLSM: "",
            paragraphs: [16],
            section: "QUÉ RESPONSABILIDAD TENEMOS CADA UNO"
          },
          {
            number: "17",
            textEs: "¿A qué debemos estar decididos?",
            textLSM: "",
            paragraphs: [17]
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
            question: "¿Cuándo debemos \"llamar\" a los ancianos?"
          },
          {
            question: "¿Por qué debemos \"llamar\" a los ancianos?"
          },
          {
            question: "¿Cómo nos ayudan los ancianos?"
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
            paragraphs: [1, 2]
          },
          {
            number: "3",
            textEs: "¿Por qué es natural que nos sintamos indignados ante las injusticias? (Isaías 5:7).",
            textLSM: "",
            paragraphs: [3],
            section: "JEHOVÁ Y JESÚS ODIAN LAS INJUSTICIAS"
          },
          {
            number: "4",
            textEs: "¿Qué nos enseña sobre Jesús el relato del hombre que tenía una mano paralizada?",
            textLSM: "",
            paragraphs: [4]
          },
          {
            number: "5",
            textEs: "¿Qué debemos recordar si nos enojamos por una injusticia?",
            textLSM: "",
            paragraphs: [5]
          },
          {
            number: "6",
            textEs: "¿Qué injusticias vio Jesús cuando estuvo en la Tierra?",
            textLSM: "",
            paragraphs: [6],
            section: "CÓMO REACCIONÓ JESÚS ANTE LAS INJUSTICIAS"
          },
          {
            number: "7, 8",
            textEs: "¿Por qué no intentó Jesús acabar con las injusticias de su tiempo? (Juan 18:36).",
            textLSM: "",
            paragraphs: [7, 8]
          },
          {
            number: "9",
            textEs: "¿Por qué está usted convencido de que solo el Reino de Dios eliminará las injusticias?",
            textLSM: "",
            paragraphs: [9],
            section: "ANTE UNA INJUSTICIA, IMITEMOS A JESÚS"
          },
          {
            number: "10",
            textEs: "Según Mateo 5:43-48, ¿por qué no intentamos promover cambios sociales?",
            textLSM: "",
            paragraphs: [10]
          },
          {
            number: "11",
            textEs: "¿Por qué a veces nos puede resultar difícil seguir el ejemplo de Jesús?",
            textLSM: "",
            paragraphs: [11]
          },
          {
            number: "12",
            textEs: "¿Por qué debemos elegir con cuidado lo que vemos, leemos o escuchamos?",
            textLSM: "",
            paragraphs: [12]
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
