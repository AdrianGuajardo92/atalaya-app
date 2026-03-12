import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS PARA CAMPOS readText
// ============================================
export const biblicalTexts53: Record<string, { reference: string; text: string }[]> = {
  "LEE Romanos 7:21-24": [
    { reference: "Romanos 7:21", text: "Por lo tanto, me doy cuenta de que existe esta ley en mi caso: cuando deseo hacer lo que es correcto, lo que es malo está conmigo." },
    { reference: "Romanos 7:22", text: "Al hombre que soy por dentro de veras le agrada la ley de Dios," },
    { reference: "Romanos 7:23", text: "pero en mi cuerpo veo otra ley que lucha contra la ley de mi mente y que me hace prisionero de la ley del pecado que está en mi cuerpo." },
    { reference: "Romanos 7:24", text: "¡Qué desdichado soy! ¿Quién me librará del cuerpo que está sufriendo esta muerte?" },
  ],
  "LEE Romanos 7:18, 19": [
    { reference: "Romanos 7:18", text: "Porque sé que no hay nada bueno en mí —es decir, en mi carne—, pues, aunque deseo hacer lo que está bien, no soy capaz de hacerlo." },
    { reference: "Romanos 7:19", text: "Porque no hago las cosas buenas que deseo hacer, sino que practico las cosas malas que no deseo." },
  ],
  "LEE Efesios 1:7": [
    { reference: "Efesios 1:7", text: "Por medio de él conseguimos la liberación por rescate mediante su sangre, sí, el perdón de nuestras ofensas, según las riquezas de la bondad inmerecida de Dios." },
  ],
  "LEE Salmo 139:1-4, 23, 24": [
    { reference: "Salmo 139:1", text: "Oh, Jehová, tú me has examinado a fondo, tú me conoces." },
    { reference: "Salmo 139:2", text: "Sabes cuándo me siento y cuándo me levanto. De lejos percibes mis pensamientos." },
    { reference: "Salmo 139:3", text: "Me observas cuando viajo y cuando me acuesto; conoces bien todos mis caminos." },
    { reference: "Salmo 139:4", text: "Todavía no ha llegado una sola palabra a mi lengua, pero resulta que tú, oh, Jehová, ya la conoces bien." },
    { reference: "Salmo 139:23", text: "Examíname a fondo, oh, Dios, y conoce mi corazón. Mira dentro de mí y conoce mis pensamientos angustiosos." },
    { reference: "Salmo 139:24", text: "Observa si hay en mí alguna mala tendencia, y llévame por el camino de la eternidad." },
  ],
};

// ============================================
// DATOS DEL ARTÍCULO 53
// ============================================
export const article53: ArticleData = {
  metadata: {
    articleNumber: 53,
    week: "9-15 Mar",
    month: "Enero",
    year: 2026,
  },
  song: "Canción 45: La meditación de mi corazón",
  title: "Cómo vencer los sentimientos negativos",
  biblicalText: "\"¡Qué desdichado soy!\" (Rom. 7:24).",
  theme: "Qué podemos hacer cuando nos asaltan pensamientos y sentimientos negativos.",
  questions: [
    // ==========================================
    // PREGUNTA 1, 2
    // ==========================================
    {
      number: "1, 2",
      textEs: "¿Cómo se sentía a veces el apóstol Pablo, y por qué es posible que nos identifiquemos con él? (Romanos 7:21-24).",
      textLSM: "",
      paragraphs: [1, 2],
      readText: "LEE Romanos 7:21-24",
      keyPoint: "Pablo luchaba contra sentimientos negativos a pesar de ser un cristiano fiel, y nosotros podemos identificarnos con él.",
      guidingQuestion: "¿Qué lucha interna tenía Pablo según Romanos 7:21-24?",
      answer: [
        "Pablo fue un misionero valiente y maestro hábil, pero también un hombre de **emociones intensas** que luchó contra sentimientos negativos.",
        "Tenía una **lucha interna** entre su deseo sincero de hacer la voluntad de Dios y su **inclinación imperfecta** a hacer cosas malas.",
        "A veces se sentía mal al recordar su **pasado** y frustrado porque tenía un **problema que no mejoraba**.",
      ],
      flashcards: [
        {
          question: "¿Qué lucha interna describió Pablo en Romanos 7:21-24?",
          answer: "Una lucha entre su deseo sincero de hacer la voluntad de Dios y su inclinación imperfecta a hacer cosas malas.",
        },
        {
          question: "Además de la lucha con su naturaleza imperfecta, ¿qué otras cosas lo hacían sentir mal?",
          answer: "Se sentía mal al recordar su pasado y frustrado porque tenía un problema que no mejoraba.",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 7:21-24",
          purpose: "Pablo describe su lucha interna entre hacer lo correcto y su inclinación al pecado",
          text: "Me doy cuenta de que existe esta ley en mi caso: cuando deseo hacer lo que es correcto, lo que es malo está conmigo. Al hombre que soy por dentro de veras le agrada la ley de Dios, pero en mi cuerpo veo otra ley que lucha contra la ley de mi mente y que me hace prisionero de la ley del pecado que está en mi cuerpo. ¡Qué desdichado soy! ¿Quién me librará del cuerpo que está sufriendo esta muerte?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 3
    // ==========================================
    {
      number: "3",
      textEs: "¿Qué veremos en este artículo? (Vea también la \"Idea importante\").",
      textLSM: "",
      paragraphs: [3],
      keyPoint: "El artículo examinará por qué Pablo se sentía 'desdichado', qué lo ayudó y qué podemos hacer nosotros.",
      guidingQuestion: "¿Qué tres aspectos sobre Pablo analizaremos en este artículo?",
      answer: [
        "**Él a veces se sentía triste porque...** (Veremos por qué el apóstol a veces se sentía \"desdichado\").",
        "**Él contento seguir, ¿cómo?** (Analizaremos qué lo ayudó a lidiar con los sentimientos negativos).",
        "**Tú puedes contento seguir, ¿qué tienes que hacer?** (Examinaremos qué podemos hacer nosotros para ganar también la batalla).",
      ],
      flashcards: [
        {
          question: "¿A qué tipo de sentimientos negativos se refiere este artículo?",
          answer: "A sentimientos como la tristeza, la frustración o el desánimo que tal vez tengamos de vez en cuando, no a una depresión crónica.",
        },
      ],
      biblicalCards: [],
    },
    // ==========================================
    // PREGUNTA 4
    // ==========================================
    {
      number: "4",
      textEs: "¿Cuál es una de las razones por las que Pablo tuvo sentimientos negativos?",
      textLSM: "",
      paragraphs: [4],
      section: "RAZONES POR LAS QUE PABLO TUVO SENTIMIENTOS NEGATIVOS",
      keyPoint: "Antes de hacerse cristiano, Pablo hizo cosas que después lamentó, como aprobar el asesinato de Esteban y perseguir a los cristianos.",
      guidingQuestion: "¿Qué cosas específicas hizo Pablo antes de hacerse cristiano que lo hicieron sentir mal?",
      answer: [
        "Antes de hacerse cristiano, **Saulo** hizo cosas que después **lamentó**.",
        "Vio con buenos ojos el **asesinato de Esteban** (Hech. 7:58; 8:1).",
        "**Persiguió ferozmente** a muchos cristianos (Hech. 8:3; 26:9-11).",
      ],
      flashcards: [
        {
          question: "¿Qué papel tuvo Saulo en la muerte de Esteban?",
          answer: "Vio con buenos ojos su asesinato. Los testigos pusieron sus mantos a los pies de Saulo.",
        },
        {
          question: "¿Hasta dónde llegó Saulo en su persecución a los cristianos?",
          answer: "Invadía casas para arrastrar afuera a hombres y mujeres y llevarlos a prisión, e incluso los persiguió hasta en ciudades apartadas.",
        },
      ],
      biblicalCards: [
        {
          reference: "Hechos 7:58",
          purpose: "Saulo estuvo presente y aprobó el asesinato de Esteban",
          text: "Después de sacarlo de la ciudad, empezaron a apedrearlo. Los testigos pusieron sus mantos a los pies de un joven llamado Saulo.",
        },
        {
          reference: "Hechos 8:1",
          purpose: "Saulo aprobó el asesinato de Esteban",
          text: "Y Saulo aprobaba su asesinato. En aquel día comenzó una gran persecución contra la congregación que estaba en Jerusalén. Todos, menos los apóstoles, fueron esparcidos por las regiones de Judea y Samaria.",
        },
        {
          reference: "Hechos 8:3",
          purpose: "Saulo perseguía ferozmente a la congregación",
          text: "Saulo, por su parte, empezó a atacar ferozmente a la congregación. Invadía una casa tras otra para arrastrar afuera a hombres y mujeres y llevarlos a prisión.",
        },
        {
          reference: "Hechos 26:9-11",
          purpose: "Pablo recuerda cómo persiguió a los cristianos con furia",
          text: "Yo mismo estaba convencido de que debía usar todos los medios posibles para luchar contra el nombre de Jesús el Nazareno. Eso es exactamente lo que hice en Jerusalén. Con la autorización de los sacerdotes principales, encerré en prisión a muchos de los santos. Y, cuando iban a ser ejecutados, yo daba mi voto de aprobación. A menudo los castigaba en todas las sinagogas para tratar de obligarlos a renunciar a su fe. Como estaba sumamente furioso con ellos, llegué al punto de perseguirlos hasta en ciudades apartadas.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 5
    // ==========================================
    {
      number: "5",
      textEs: "¿Qué sentía Pablo al recordar su pasado?",
      textLSM: "",
      paragraphs: [5],
      keyPoint: "Con el paso de los años, Pablo sintió cada vez más la culpa por lo que había hecho antes de ser cristiano.",
      guidingQuestion: "¿Cómo se fue expresando Pablo sobre sí mismo en sus diferentes cartas?",
      answer: [
        "Pablo en ocasiones se sintió **culpable** al recordar su pasado, y esos sentimientos se volvieron más **intensos** con los años.",
        "En el año 55 escribió: **\"No merezco ser llamado apóstol\"** (1 Cor. 15:9).",
        "Unos cinco años después se consideró **\"inferior al menor de todos los santos\"** (Efes. 3:8).",
        "Admitió que antes era **\"blasfemo, perseguidor e insolente\"** (1 Tim. 1:13).",
      ],
      flashcards: [
        {
          question: "¿Cómo demuestran las cartas de Pablo que su sentimiento de culpa fue creciendo con los años?",
          answer: "Primero dijo que no merecía ser apóstol, luego se consideró inferior a todos los santos, y finalmente admitió haber sido blasfemo y perseguidor.",
        },
      ],
      biblicalCards: [
        {
          reference: "1 Corintios 15:9",
          purpose: "Pablo se consideró indigno de ser apóstol por haber perseguido a la congregación",
          text: "Porque yo soy el menor de los apóstoles, y no merezco ser llamado apóstol, pues perseguí a la congregación de Dios.",
        },
        {
          reference: "Efesios 3:8",
          purpose: "Pablo se consideraba inferior a todos los santos",
          text: "Yo, que soy inferior al menor de todos los santos, recibí esta bondad inmerecida para anunciarles a las naciones las buenas noticias de las incontables riquezas del Cristo.",
        },
        {
          reference: "1 Timoteo 1:13",
          purpose: "Pablo reconoció abiertamente su pasado como blasfemo y perseguidor",
          text: "Aunque antes era blasfemo, perseguidor e insolente. Sin embargo, se me mostró misericordia porque había actuado con ignorancia y sin fe.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 6
    // ==========================================
    {
      number: "6",
      textEs: "¿Qué otra cosa hacía sufrir a Pablo? (Vea también la nota).",
      textLSM: "",
      paragraphs: [6],
      keyPoint: "Pablo tenía algo que le causaba mucho dolor, que comparó a 'una espina en la carne'.",
      guidingQuestion: "¿Qué comparación usó Pablo para describir su problema y qué pudo haber sido?",
      answer: [
        "Pablo escribió que había algo que le causaba mucho dolor y lo comparó a **\"una espina en la carne\"** (2 Cor. 12:7).",
        "No explicó si era un problema **físico**, **emocional** o de otra clase.",
        "Sus palabras dan a entender que era algo que le hacía **sufrir muchísimo**.",
      ],
      flashcards: [
        {
          question: "¿Qué posibilidades se mencionan sobre la 'espina en la carne' de Pablo?",
          answer: "Pudo haber sido problemas con la vista que dificultaban su ministerio, o la ansiedad que le producían algunos falsos maestros.",
        },
      ],
      biblicalCards: [
        {
          reference: "2 Corintios 12:7",
          purpose: "Pablo describe algo que le causaba mucho sufrimiento",
          text: "Para evitar que me llene de orgullo, recibí una espina en la carne, un ángel de Satanás, que sigue abofeteándome para que no me llene de orgullo.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 7
    // ==========================================
    {
      number: "7",
      textEs: "¿Cómo hacían sentir a Pablo sus imperfecciones? (Romanos 7:18, 19).",
      textLSM: "",
      paragraphs: [7],
      readText: "LEE Romanos 7:18, 19",
      keyPoint: "Pablo quería hacer lo correcto, pero su naturaleza imperfecta lo empujaba hacia otra dirección; era una batalla constante.",
      guidingQuestion: "Según Romanos 7:18, 19, ¿qué lucha constante tenía Pablo con su naturaleza imperfecta?",
      answer: [
        "Pablo tenía una lucha con los **aspectos negativos** de su personalidad.",
        "Aunque quería hacer lo correcto, su **naturaleza imperfecta** lo empujaba hacia otra dirección.",
        "Reconoció que era una **batalla constante** y se esforzaba por mantener su cuerpo como esclavo (1 Cor. 9:27).",
        "Seguro que se sentía muy **frustrado** cuando sus defectos volvían a asomar.",
      ],
      flashcards: [
        {
          question: "¿Qué quiso decir Pablo con 'golpeo mi cuerpo y lo hago mi esclavo' en 1 Corintios 9:27?",
          answer: "Que ponía todo su empeño en controlar sus tendencias imperfectas, reconociendo que era una batalla constante.",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 7:18, 19",
          purpose: "Pablo describe la frustración de no poder hacer lo correcto debido a su naturaleza imperfecta",
          text: "Porque sé que no hay nada bueno en mí —es decir, en mi carne—, pues, aunque deseo hacer lo que está bien, no soy capaz de hacerlo. Porque no hago las cosas buenas que deseo hacer, sino que practico las cosas malas que no deseo.",
        },
        {
          reference: "1 Corintios 9:27",
          purpose: "Pablo se esforzaba por controlar sus tendencias imperfectas",
          text: "Más bien, golpeo mi cuerpo y lo hago mi esclavo para que, después de haber predicado a otros, yo no sea desaprobado de algún modo.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 8
    // ==========================================
    {
      number: "8",
      textEs: "¿Qué hacía seguramente Pablo para luchar contra sus imperfecciones?",
      textLSM: "",
      paragraphs: [8],
      section: "QUÉ AYUDÓ A PABLO A LIDIAR CON LOS SENTIMIENTOS NEGATIVOS",
      keyPoint: "Pablo reflexionaba en cómo el espíritu de Dios podía ayudar a luchar contra las malas tendencias y aplicaba sus propios consejos.",
      guidingQuestion: "¿Qué indica que Pablo aplicaba en su propia vida los consejos que daba a otros?",
      answer: [
        "Pablo reflexionaba en cómo el **espíritu de Dios** podía ayudar a luchar contra las malas tendencias y **vencerlas** (Rom. 8:13; Gál. 5:16, 17).",
        "Habló de los deseos y prácticas que los cristianos deben **evitar** para agradar a Jehová (Gál. 5:19-21, 26).",
        "**Meditaba** en sus propias imperfecciones, buscaba guía en las **Escrituras** y pensaba en medidas específicas para hacer cambios.",
        "Sin duda **aplicaba** en su propia vida los consejos que les daba a los demás.",
      ],
      flashcards: [
        {
          question: "Según Gálatas 5:16, 17, ¿qué lucha hay entre la carne y el espíritu?",
          answer: "La carne, debido a sus deseos, se opone al espíritu y el espíritu se opone a la carne. Debemos andar de acuerdo con el espíritu.",
        },
        {
          question: "¿Qué pasos daba Pablo para combatir sus malas tendencias?",
          answer: "Meditaba en sus imperfecciones, buscaba guía en las Escrituras y pensaba en medidas específicas para hacer cambios.",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 8:13",
          purpose: "El espíritu de Dios ayuda a dar muerte a las malas prácticas",
          text: "Si ustedes viven guiados por la carne, de seguro morirán. En cambio, si con el espíritu dan muerte a las malas prácticas del cuerpo, vivirán.",
        },
        {
          reference: "Gálatas 5:16, 17",
          purpose: "La lucha entre la carne y el espíritu que experimentan los cristianos",
          text: "Así pues, les digo esto: sigan andando de acuerdo con el espíritu y así no harán realidad ningún deseo de la carne. Porque la carne, debido a sus deseos, se opone al espíritu y el espíritu se opone a la carne.",
        },
        {
          reference: "Gálatas 5:19-21",
          purpose: "Las obras de la carne que los cristianos deben evitar",
          text: "Ahora bien, las obras de la carne son evidentes, y son la inmoralidad sexual, la impureza, la conducta descarada, la idolatría, el espiritismo, las enemistades, las peleas, los celos, los arrebatos de ira, las riñas, las divisiones, la formación de sectas, la envidia, las borracheras, las fiestas descontroladas y cosas como estas.",
        },
        {
          reference: "Gálatas 5:26",
          purpose: "Los cristianos deben evitar el egocentrismo y la envidia",
          text: "No nos volvamos egocéntricos, fomentando competencias entre unos y otros y envidiándonos unos a otros.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 9, 10
    // ==========================================
    {
      number: "9, 10",
      textEs: "¿Qué ayudó a Pablo a luchar contra los sentimientos negativos? (Efesios 1:7; vea también la imagen).",
      textLSM: "",
      paragraphs: [9, 10],
      readText: "LEE Efesios 1:7",
      keyPoint: "Pablo meditaba en el rescate y lo veía como un regalo personal de Jehová, lo que le ayudó a mantener la alegría.",
      guidingQuestion: "¿Qué cosas específicas le ayudaban a Pablo a no perder la alegría?",
      image: "https://i.imgur.com/eqKlDLm.png",
      imageCaption: "Aunque Pablo a veces se sentía culpable al recordar su pasado, meditar en el rescate le fue de gran ayuda. (Vea los párrafos 9 y 10).",
      answer: [
        "Se sentía feliz al oír **buenas noticias** sobre las congregaciones (2 Cor. 7:6, 7).",
        "Lo llenaba de alegría contar con **buenos amigos** (2 Tim. 1:4) y saber que tenía la **aprobación de Jehová** (2 Tim. 1:3).",
        "Incluso **preso en Roma**, animó a los cristianos: **\"Alégrense siempre a causa del Señor\"** (Filip. 4:4).",
        "Meditar en el **rescate** y verlo como un regalo personal lo convenció de que Jehová había **perdonado** sus pecados (Efes. 1:7).",
        "Gracias al **sacrificio de Jesús**, Pablo pudo servir a Dios con **alegría** (Heb. 9:12-14).",
      ],
      flashcards: [
        {
          question: "¿Qué hacía Pablo cuando lo asaltaba un pensamiento negativo?",
          answer: "Enseguida procuraba cambiar el chip y centrar su mente en ideas positivas.",
        },
        {
          question: "¿Cómo veía Pablo el rescate según Gálatas 2:20?",
          answer: "Lo veía como un regalo personal de Jehová: 'El Hijo de Dios me amó y se entregó por mí'.",
        },
      ],
      biblicalCards: [
        {
          reference: "2 Corintios 7:6, 7",
          purpose: "Las buenas noticias sobre las congregaciones consolaban a Pablo",
          text: "Pero Dios, que consuela a los desanimados, nos consoló con la presencia de Tito. Y no solo con su presencia, sino también con el consuelo que recibió gracias a ustedes. Él nos habló de lo mucho que querían verme, de su profunda tristeza y de su gran preocupación por mí, y eso me alegró todavía más.",
        },
        {
          reference: "2 Timoteo 1:4",
          purpose: "La amistad con otros hermanos llenaba de alegría a Pablo",
          text: "Al recordar tus lágrimas, deseo verte para llenarme de alegría.",
        },
        {
          reference: "2 Timoteo 1:3",
          purpose: "Pablo servía a Jehová con una conciencia limpia",
          text: "Le estoy agradecido a Dios —a quien doy servicio sagrado como lo hicieron mis antepasados y con una conciencia limpia— y siempre me acuerdo de ti en los ruegos que hago día y noche.",
        },
        {
          reference: "Filipenses 4:4",
          purpose: "Incluso preso en Roma, Pablo animaba a los demás a alegrarse",
          text: "Alégrense siempre a causa del Señor. Una vez más les digo: ¡alégrense!",
        },
        {
          reference: "Gálatas 2:20",
          purpose: "Pablo veía el rescate como un regalo personal",
          text: "Estoy clavado al madero con Cristo. Ya no soy yo el que vive, sino que es Cristo el que vive en unión conmigo. Así es, la vida que ahora vivo en este cuerpo la vivo por la fe en el Hijo de Dios, quien me amó y se entregó por mí.",
          reasoningQuestion: "¿Cómo nos ayuda ver el rescate como un regalo personal de Jehová para nosotros?",
        },
        {
          reference: "Efesios 1:7",
          purpose: "Gracias al rescate conseguimos el perdón de nuestras ofensas",
          text: "Por medio de él conseguimos la liberación por rescate mediante su sangre, sí, el perdón de nuestras ofensas, según las riquezas de la bondad inmerecida de Dios.",
        },
        {
          reference: "Romanos 7:24, 25",
          purpose: "Pablo encontró alivio a su lucha interna gracias al sacrificio de Jesús",
          text: "¡Qué desdichado soy! ¿Quién me librará del cuerpo que está sufriendo esta muerte? ¡A Dios le doy gracias por medio de Jesucristo nuestro Señor!",
        },
        {
          reference: "Hebreos 9:12-14",
          purpose: "La sangre de Cristo limpia la conciencia para servir a Dios",
          text: "Él entró una vez y para siempre en el lugar santo, pero no con la sangre de cabras y de toros jóvenes, sino con su propia sangre, y consiguió una liberación eterna para nosotros. Porque, si la sangre de las cabras y de los toros y las cenizas de una ternera salpicadas sobre los que se han contaminado santifican purificando el cuerpo, con mucha más razón la sangre del Cristo, quien mediante un espíritu eterno se ofreció sin ningún defecto a Dios, limpiará de obras muertas nuestra conciencia para que le demos servicio sagrado al Dios vivo.",
          reasoningQuestion: "Si la sangre de animales santificaba el cuerpo, ¿cuánto más puede hacer la sangre de Cristo por nuestra conciencia?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 11
    // ==========================================
    {
      number: "11",
      textEs: "¿Por qué nos anima el ejemplo de Pablo?",
      textLSM: "",
      paragraphs: [11],
      keyPoint: "El ejemplo de Pablo nos anima porque demuestra que incluso los siervos fieles luchan contra sentimientos negativos, y Jehová está al tanto.",
      guidingQuestion: "¿Por qué es consolador saber que Pablo también tuvo esos sentimientos?",
      answer: [
        "Es posible que, al igual que Pablo, sintamos que dentro de nosotros hay una **lucha constante**.",
        "Nos consuela saber que **no somos los únicos** que se sienten así.",
        "Nos recuerda que **Jehová** está al tanto de las **dificultades** por las que pasan sus siervos.",
      ],
      flashcards: [
        {
          question: "¿Qué dijo Eliza sobre el ejemplo de Pablo?",
          answer: "Que le anima mucho saber que no es la única que se siente así y que Jehová está al tanto de las dificultades de sus siervos.",
        },
      ],
      biblicalCards: [],
    },
    // ==========================================
    // PREGUNTA 12
    // ==========================================
    {
      number: "12",
      textEs: "¿Cómo nos ayuda en nuestra lucha contra los sentimientos negativos mantener un buen programa de actividades espirituales?",
      textLSM: "",
      paragraphs: [12],
      section: "QUÉ NOS AYUDARÁ EN NUESTRA LUCHA",
      keyPoint: "Mantener buenos hábitos espirituales nos ayuda a concentrarnos en lo positivo y mantener a raya los pensamientos negativos.",
      guidingQuestion: "¿Qué actividades espirituales específicas nos ayudan a combatir los sentimientos negativos?",
      answer: [
        "Desarrollar y mantener **buenos hábitos espirituales** nos ayuda a concentrarnos en lo **positivo**.",
        "Leer la **Biblia** todos los días, **predicar**, prepararnos para las **reuniones**, asistir a ellas y **comentar** nos hace sentir muy bien.",
        "Si nos mantenemos **activos espiritualmente**, será más fácil mantener a raya los **pensamientos negativos** (Rom. 12:11, 12).",
      ],
      flashcards: [
        {
          question: "¿Qué comparación hace el párrafo entre la salud física y la espiritual?",
          answer: "Así como alimentarnos bien, hacer ejercicio y descansar nos hace sentir mejor físicamente, las actividades espirituales nos hacen sentir mejor emocionalmente.",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 12:11, 12",
          purpose: "Mantenerse activos espiritualmente y perseverar en la oración",
          text: "Sean trabajadores, no holgazanes. Que el espíritu los llene de fervor. Sean esclavos de Jehová. Alégrense por la esperanza. Aguanten cuando tengan dificultades. Perseveren en la oración.",
          reasoningQuestion: "¿Cómo nos ayuda 'perseverar en la oración' a luchar contra los sentimientos negativos?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 13, 14
    // ==========================================
    {
      number: "13, 14",
      textEs: "¿Cómo ha ayudado a algunos hermanos mantener un buen programa de actividades espirituales?",
      textLSM: "",
      paragraphs: [13, 14],
      keyPoint: "Los hermanos que mantienen su programa de actividades espirituales a pesar de las dificultades reciben las fuerzas de Jehová.",
      guidingQuestion: "¿Qué ejemplos muestran el beneficio de mantener las actividades espirituales incluso cuando estamos desanimados?",
      answer: [
        "**Juan**, diagnosticado con cáncer a los **39 años**, se aseguró de mantener su programa de actividades espirituales; las **fuerzas de Jehová** calmaron sus pensamientos negativos.",
        "**Eliza** se convence de que Jehová la **escucha** y la quiere al asistir a las reuniones y hacer su estudio personal.",
        "**Nolan** y su esposa **Diane** se esfuerzan por mantener sus actividades espirituales incluso cuando están **desanimados**, confiando en que Jehová los ayudará.",
      ],
      flashcards: [
        {
          question: "¿Qué dijo Juan que lo ayudó a pesar de su diagnóstico de cáncer?",
          answer: "Asegurarse de que siguieran fielmente su horario de actividades espirituales: reuniones, predicación y adoración en familia.",
        },
        {
          question: "¿Qué consejo práctico da Nolan sobre mantener las actividades espirituales?",
          answer: "Esforzarse por mantener el programa incluso cuando están desanimados, confiando en que Jehová los ayudará y bendecirá.",
        },
      ],
      biblicalCards: [],
    },
    // ==========================================
    // PREGUNTA 15
    // ==========================================
    {
      number: "15",
      textEs: "Explique con un ejemplo qué más es posible que tengamos que hacer para vencer los sentimientos negativos.",
      textLSM: "",
      paragraphs: [15],
      keyPoint: "A veces necesitamos hacer algo más que mantener nuestro programa espiritual, como buscar información adicional o consultar a un hermano maduro.",
      guidingQuestion: "¿Qué ejemplo ilustra que a veces necesitamos pasos adicionales para vencer los sentimientos negativos?",
      answer: [
        "A veces no basta con mantener nuestro programa espiritual; puede que tengamos que hacer **algo más**.",
        "Como con un **dolor de espalda**, caminar ayuda un poco, pero quizás necesitemos buscar **información** adicional o consultar a un **médico**.",
        "De manera parecida, tal vez tengamos que buscar información en la **Biblia** y nuestras publicaciones, o consultar a un **hermano maduro**.",
      ],
      flashcards: [
        {
          question: "¿Qué pasos adicionales podemos dar si las actividades espirituales regulares no bastan?",
          answer: "Buscar información en la Biblia y las publicaciones, e incluso consultar a un hermano maduro.",
        },
      ],
      biblicalCards: [],
    },
    // ==========================================
    // PREGUNTA 16
    // ==========================================
    {
      number: "16",
      textEs: "¿Qué nos ayudará a ver por qué tenemos pensamientos negativos? (Salmo 139:1-4, 23, 24).",
      textLSM: "",
      paragraphs: [16],
      readText: "LEE Salmo 139:1-4, 23, 24",
      keyPoint: "Podemos pedirle a Jehová que nos ayude a entender por qué tenemos pensamientos negativos, como hizo el rey David.",
      guidingQuestion: "¿Qué preguntas podemos hacernos para identificar la raíz de nuestros pensamientos negativos?",
      answer: [
        "El rey **David** le pidió a Jehová que lo ayudara a descubrir por qué tenía **\"pensamientos angustiosos\"** (Sal. 139:23, 24).",
        "Podemos pedirle a Jehová que nos ayude a ver **por qué** tenemos pensamientos negativos y cómo **deshacernos** de ellos.",
        "Es bueno hacernos preguntas como: ¿Qué me **preocupa** en el fondo? ¿Hay algún **detonante**? ¿Me quedo **dándoles vueltas** a esos pensamientos?",
      ],
      flashcards: [
        {
          question: "¿Qué tres preguntas podemos hacernos para identificar la raíz de nuestros pensamientos negativos?",
          answer: "1) ¿Qué me preocupa en el fondo? 2) ¿Hay algún detonante? 3) ¿Me quedo dándoles vueltas en vez de rechazarlos?",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 139:1-4",
          purpose: "Jehová nos conoce profundamente y puede ayudarnos a entendernos",
          text: "Oh, Jehová, tú me has examinado a fondo, tú me conoces. Sabes cuándo me siento y cuándo me levanto. De lejos percibes mis pensamientos. Me observas cuando viajo y cuando me acuesto; conoces bien todos mis caminos. Todavía no ha llegado una sola palabra a mi lengua, pero resulta que tú, oh, Jehová, ya la conoces bien.",
        },
        {
          reference: "Salmo 139:23, 24",
          purpose: "Podemos pedirle a Jehová que examine nuestros pensamientos angustiosos",
          text: "Examíname a fondo, oh, Dios, y conoce mi corazón. Mira dentro de mí y conoce mis pensamientos angustiosos. Observa si hay en mí alguna mala tendencia, y llévame por el camino de la eternidad.",
          reasoningQuestion: "¿Por qué es importante pedirle a Jehová que nos ayude a ver la raíz de nuestros pensamientos negativos en vez de solo pedir que desaparezcan?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 17
    // ==========================================
    {
      number: "17",
      textEs: "¿Qué temas conviene que incluyamos en nuestro estudio personal? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [17],
      image: "https://i.imgur.com/gmbwZfr.png",
      imageCaption: "Estudiemos temas que nos ayuden a deshacernos de los pensamientos negativos. (Vea el párrafo 17).",
      keyPoint: "Adaptar nuestro estudio personal para investigar temas como la misericordia, el perdón y el amor leal de Dios.",
      guidingQuestion: "¿Qué herramientas podemos usar para investigar estos temas y cómo aplicarlos?",
      answer: [
        "Podemos analizar facetas de la personalidad de Jehová, como la **misericordia**, el **perdón** y el **amor leal** de Dios.",
        "Disponemos de herramientas como la **Guía de estudio** y el **Índice de las publicaciones** para investigar estos temas.",
        "Debemos hacer una **lista** con los artículos útiles y estudiarlos cuando nos asalte un **pensamiento negativo**.",
        "Busquemos una **aplicación práctica** para nosotros (Filip. 4:8).",
      ],
      flashcards: [
        {
          question: "¿Qué nos aconseja Filipenses 4:8 sobre nuestros pensamientos?",
          answer: "Pensar constantemente en cosas verdaderas, serias, justas, castas, que inspiren amor, de buena reputación, virtuosas y dignas de alabanza.",
        },
      ],
      biblicalCards: [
        {
          reference: "Filipenses 4:8",
          purpose: "Debemos centrar la mente en cosas positivas y edificantes",
          text: "Finalmente, hermanos, piensen constantemente en todas las cosas que son verdaderas, todas las que son serias, todas las que son justas, todas las que son castas, todas las que inspiran amor, todas las que tienen buena reputación, todas las que son virtuosas y todas las que son dignas de alabanza.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 18
    // ==========================================
    {
      number: "18",
      textEs: "¿Qué proyectos de estudio les han resultado útiles a algunos hermanos?",
      textLSM: "",
      paragraphs: [18],
      keyPoint: "Hacer proyectos de estudio sobre temas que nos fortalezcan personalmente nos acerca más a Jehová.",
      guidingQuestion: "¿Qué proyectos de estudio les resultaron útiles a los hermanos mencionados y por qué?",
      answer: [
        "**Eliza** estudió sobre **Job**, quien nunca dejó de apoyarse en Jehová ni siquiera en su peor momento (Job 42:1-6).",
        "**Diane** y su esposo estudian juntos **Acerquémonos a Jehová**, imaginando a Dios **moldeándolos** como un alfarero (Is. 64:8).",
        "Estos proyectos de estudio les ayudan a sentirse más **cerca de Jehová** cuando están desanimados.",
      ],
      flashcards: [
        {
          question: "¿Por qué se sentía Eliza identificada con Job?",
          answer: "Porque Job sufrió una prueba tras otra, pero nunca dejó de apoyarse en Jehová, ni siquiera en su peor momento.",
        },
        {
          question: "¿Qué comparación usa Isaías 64:8 que ayuda a Diane y su esposo?",
          answer: "Compara a Jehová con un alfarero y a nosotros con el barro: Jehová nos enseña y nos da forma para que seamos mejores personas.",
        },
      ],
      biblicalCards: [
        {
          reference: "Job 42:1-6",
          purpose: "Job reconoció el poder y la sabiduría de Jehová tras su prueba",
          text: "Entonces Job le respondió a Jehová con estas palabras: \"Ahora sé que puedes hacer cualquier cosa y que nada de lo que tienes en mente es imposible para ti. Tú dijiste: '¿Quién es este que está oscureciendo mis propósitos sin conocimiento?'. Y es verdad, yo hablé sin entendimiento de cosas demasiado maravillosas para mí, cosas que no conozco. Tú dijiste: 'Escucha, por favor, y yo hablaré. Voy a interrogarte y tú respóndeme'. Con mis oídos había oído hablar de ti, pero ahora te veo con mis propios ojos. Por eso retiro lo dicho y me arrepiento en polvo y ceniza\".",
        },
        {
          reference: "Isaías 64:8",
          purpose: "Jehová es como un alfarero que nos moldea con amor",
          text: "Pero ahora, oh, Jehová, tú eres nuestro Padre. Nosotros somos el barro y tú eres nuestro Alfarero; todos somos la obra de tus manos.",
          reasoningQuestion: "¿Cómo nos consuela saber que Jehová, como un alfarero paciente, nos está dando forma incluso cuando nos sentimos imperfectos?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 19
    // ==========================================
    {
      number: "19",
      textEs: "¿Cómo nos sentiremos a veces, pero de qué podemos estar seguros?",
      textLSM: "",
      paragraphs: [19],
      section: "PODEMOS VENCER EN NUESTRA LUCHA",
      keyPoint: "Con la ayuda de Jehová, los sentimientos negativos no nos dominarán y habrá más días buenos que malos.",
      guidingQuestion: "¿De qué podemos estar seguros a pesar de los días difíciles?",
      answer: [
        "Habrá días en los que nos sintamos **desanimados** o desdichados, como dijo Pablo.",
        "Con la ayuda de Jehová, los pensamientos negativos **no nos dominarán**.",
        "Habrá muchos más **días buenos** que malos, pues contamos con la **amistad de Jehová** y una **conciencia limpia**.",
      ],
      flashcards: [
        {
          question: "¿Qué garantía tenemos si seguimos esforzándonos a pesar de los sentimientos negativos?",
          answer: "Que con la ayuda de Jehová habrá muchos más días buenos que malos, y los pensamientos negativos no nos dominarán.",
        },
      ],
      biblicalCards: [],
    },
    // ==========================================
    // PREGUNTA 20
    // ==========================================
    {
      number: "20",
      textEs: "¿Qué queremos seguir haciendo?",
      textLSM: "",
      paragraphs: [20],
      keyPoint: "Jehová nos ayudará a mantener a raya los sentimientos negativos hasta que en el nuevo mundo la lucha sea cosa del pasado.",
      guidingQuestion: "¿Qué esperanza tenemos para el futuro respecto a los sentimientos negativos?",
      answer: [
        "Sigamos haciendo todo lo posible por **no dejarnos vencer** por los sentimientos negativos.",
        "**Jehová** nos ayudará a mantenerlos **a raya** (Sal. 143:10).",
        "En el **nuevo mundo**, todos los días nos despertaremos sin ningún **pensamiento angustioso**, felices de servir a Jehová.",
      ],
      flashcards: [
        {
          question: "¿Qué esperanza tenemos para el nuevo mundo en cuanto a los sentimientos negativos?",
          answer: "Todos los días nos despertaremos sin ningún pensamiento angustioso, felices de estar sirviendo a Jehová.",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 143:10",
          purpose: "Podemos pedirle a Jehová que nos enseñe y nos guíe",
          text: "Enséñame a hacer tu voluntad, porque tú eres mi Dios. Tu espíritu es bueno; que me guíe por terreno llano.",
        },
      ],
    },
  ],
  // ============================================
  // PÁRRAFOS
  // ============================================
  paragraphs: [
    {
      number: 1,
      content: "¿QUÉ imagen tenemos del apóstol Pablo? Quizás lo veamos como un misionero valiente, un maestro hábil o un escritor de muchos libros de la Biblia. Y así es, Pablo fue todo eso. Pero también fue un hombre de emociones intensas. Y, como muchos de nosotros, a veces tuvo que luchar contra sentimientos negativos.",
      summary: "**Pablo** fue un misionero valiente y maestro hábil, pero también un hombre de **emociones intensas** que tuvo que luchar contra **sentimientos negativos**.",
    },
    {
      number: 2,
      content: "(Lea Romanos 7:21-24). En su Carta a los Romanos, Pablo expresó algunos sentimientos con los que probablemente nos sintamos identificados. Aunque era un cristiano fiel, tenía una lucha interna entre su deseo sincero de hacer la voluntad de Dios y su inclinación imperfecta a hacer cosas malas. Además, a veces se sentía mal al recordar su pasado y se sentía frustrado porque tenía un problema que no mejoraba.",
      summary: "Pablo tenía una **lucha interna** entre su deseo de hacer la voluntad de Dios y su **inclinación imperfecta**. Se sentía mal al recordar su **pasado** y frustrado por un **problema** que no mejoraba.",
    },
    {
      number: 3,
      content: "Aunque Pablo tenía esa lucha, no se dejó vencer por los sentimientos negativos. En este artículo veremos por qué el apóstol a veces se sentía \"desdichado\", qué lo ayudó a lidiar con los sentimientos negativos y qué podemos hacer nosotros para ganar también la batalla.",
      summary: "Pablo no se dejó **vencer** por los sentimientos negativos. Este artículo examina por qué se sentía **\"desdichado\"**, qué lo ayudó y qué podemos hacer **nosotros**.",
    },
    {
      number: 4,
      content: "Las cosas que hizo en el pasado. Antes de hacerse cristiano, Pablo —o Saulo, como se lo conocía entonces— hizo cosas que después lamentó. Por ejemplo, vio con buenos ojos el asesinato de Esteban (Hech. 7:58; 8:1). Y también persiguió ferozmente a muchos cristianos (Hech. 8:3; 26:9-11).",
      summary: "Antes de hacerse cristiano, **Saulo** aprobó el asesinato de **Esteban** y **persiguió ferozmente** a muchos cristianos.",
    },
    {
      number: 5,
      content: "Después de hacerse cristiano, el apóstol Pablo en ocasiones se sintió culpable al recordar su pasado. Y es posible que esos sentimientos se volvieran más intensos con el paso de los años. Por ejemplo, en su primera carta a los cristianos de Corinto, allá por el año 55, escribió: \"No merezco ser llamado apóstol, pues perseguí a la congregación de Dios\" (1 Cor. 15:9). Unos cinco años más tarde, en su Carta a los Efesios, dijo que se consideraba \"inferior al menor de todos los santos\" (Efes. 3:8). Y, en una de las cartas que le escribió a Timoteo, admitió que antes de hacerse cristiano \"era blasfemo, perseguidor e insolente\" (1 Tim. 1:13). ¿Nos imaginamos cómo debió de sentirse Pablo al visitar a las congregaciones y encontrarse con algunos cristianos a los que había perseguido o a sus familiares?",
      summary: "Pablo se sintió **culpable** al recordar su pasado. Se consideró **indigno** de ser apóstol (1 Cor. 15:9), **inferior** a todos los santos (Efes. 3:8) y reconoció haber sido **blasfemo y perseguidor** (1 Tim. 1:13).",
    },
    {
      number: 6,
      content: "Una espina en la carne. Pablo escribió que había algo que le causaba mucho dolor, y lo comparó a \"una espina en la carne\" (2 Cor. 12:7). No explicó si se trataba de un problema físico, emocional o de otra clase. Sin embargo, sus palabras dan a entender que era algo que le hacía sufrir muchísimo.",
      summary: "Pablo comparó algo que le causaba mucho dolor a **\"una espina en la carne\"** (2 Cor. 12:7). No explicó si era un problema **físico** o **emocional**, pero le hacía **sufrir muchísimo**.",
    },
    {
      number: 7,
      content: "Sus imperfecciones. Pablo tenía una lucha con los aspectos negativos de su personalidad (lea Romanos 7:18, 19). Aunque quería hacer lo correcto, su naturaleza imperfecta lo empujaba hacia otra dirección. Ponía todo su empeño en mejorar, pero reconoció que esa era una batalla constante (1 Cor. 9:27). Seguro que se sentía muy frustrado cuando sus defectos volvían a asomar la cabeza.",
      summary: "Pablo luchaba con su **naturaleza imperfecta** que lo empujaba hacia lo malo. Reconoció que era una **batalla constante** y se esforzaba por mantener su cuerpo como **esclavo** (1 Cor. 9:27).",
    },
    {
      number: 8,
      content: "Como se ve en sus cartas, Pablo reflexionaba en cómo el espíritu de Dios podía ayudarlos a él y a otros cristianos a luchar contra las malas tendencias y vencerlas (Rom. 8:13; Gál. 5:16, 17). En muchas ocasiones habló de los deseos y las prácticas que los cristianos deben evitar para agradar a Jehová (Gál. 5:19-21, 26). Seguro que meditaba en sus propias imperfecciones, buscaba guía en las Escrituras y pensaba en medidas específicas para hacer cambios. No tenemos ninguna duda de que aplicaba en su propia vida los consejos que les daba a los demás.",
      summary: "Pablo **reflexionaba** en cómo el **espíritu de Dios** podía ayudar a luchar contra las malas tendencias. **Meditaba** en sus imperfecciones, buscaba **guía en las Escrituras** y aplicaba los consejos que daba a otros.",
    },
    {
      number: 9,
      content: "Aunque Pablo a veces se desanimaba, había muchas cosas que lo ayudaban a no perder la alegría. Por ejemplo, se sentía feliz al oír las cosas buenas que le contaban sus compañeros de viaje sobre las congregaciones (2 Cor. 7:6, 7). También lo llenaba de alegría contar con buenos amigos (2 Tim. 1:4). Y le hacía feliz saber que tenía la aprobación de Jehová y podía servirle \"con una conciencia limpia\" (2 Tim. 1:3). Incluso estando preso en Roma, les dijo a los cristianos: \"Alégrense siempre a causa del Señor\" (Filip. 4:4). ¿Verdad que eso no es lo que diría alguien que está consumido por los sentimientos negativos? Cuando lo asaltaba un pensamiento negativo, Pablo enseguida procuraba cambiar el chip y centrar su mente en ideas positivas.",
      summary: "Pablo no perdía la **alegría** gracias a las buenas noticias sobre las congregaciones, sus **buenos amigos** y saber que tenía la **aprobación de Jehová**. Incluso **preso en Roma**, animó a los cristianos a alegrarse.",
    },
    {
      number: 10,
      content: "Algo más que ayudó a Pablo a luchar contra los sentimientos negativos fue meditar en el rescate y verlo como un regalo que Jehová le había dado a él (Gál. 2:20; lea Efesios 1:7). Así se convenció de que, gracias al sacrificio de Jesús, Jehová había perdonado sus pecados y seguiría haciéndolo (Rom. 7:24, 25). A pesar de sus errores del pasado y sus imperfecciones, Pablo pudo servir a Dios con alegría (Heb. 9:12-14).",
      summary: "Pablo meditaba en el **rescate** como un regalo personal de Jehová. Gracias al **sacrificio de Jesús**, se convenció de que Dios había **perdonado** sus pecados y pudo servir con **alegría**.",
    },
    {
      number: 11,
      content: "Es posible que, al igual que Pablo, sintamos que dentro de nosotros hay una lucha constante, ya sea para controlar lo que pensamos, lo que hacemos o lo que decimos. Y quizás también digamos: \"¡Qué desdichado soy!\". Una hermana de unos veintitantos llamada Eliza cuenta: \"Me anima mucho pensar en el ejemplo de Pablo. Me consuela saber que no soy la única que se siente así. Es otra cosa que me recuerda que Jehová está al tanto de las dificultades por las que pasan sus siervos\". Veamos ahora qué podemos hacer para tener una conciencia limpia y no perder la alegría, al igual que Pablo, aunque a veces tengamos sentimientos negativos.",
      summary: "El ejemplo de **Pablo** nos anima porque demuestra que **no somos los únicos** que luchamos contra sentimientos negativos. **Jehová** está al tanto de las dificultades de sus siervos.",
    },
    {
      number: 12,
      content: "Mantener un buen programa de actividades espirituales. Desarrollar y mantener buenos hábitos espirituales nos ayuda a concentrarnos en lo positivo. En sentido físico, cuando nos alimentamos bien, hacemos ejercicio con regularidad y descansamos lo suficiente, por lo general nos sentimos mejor. Pues bien, algo parecido sucede en sentido espiritual. Cuando leemos la Biblia todos los días, predicamos, nos preparamos para las reuniones, asistimos a ellas y comentamos, nos sentimos muy bien. Si nos mantenemos activos espiritualmente, nos será más fácil mantener a raya los pensamientos negativos (Rom. 12:11, 12).",
      summary: "Mantener **buenos hábitos espirituales** nos ayuda a concentrarnos en lo positivo. Leer la **Biblia**, **predicar**, prepararnos para las **reuniones** y asistir nos ayuda a mantener a raya los pensamientos negativos.",
    },
    {
      number: 13,
      content: "Veamos el ejemplo de Juan, a quien le detectaron un tipo de cáncer poco común cuando tenía 39 años. Al principio, tuvo muchos sentimientos negativos. Dijo: \"Me parecía una injusticia enfermar a mi edad\". Además, él y su esposa tenían un niño de tres años. ¿Qué lo ayudó a no dejarse vencer por sus emociones negativas? Él explicó: \"A pesar del agotamiento, me aseguré de que siguiéramos fielmente nuestro horario de actividades espirituales. A veces se nos hacía difícil, pero siempre íbamos a las reuniones y a predicar, y teníamos la adoración en familia\". Y añadió: \"Una vez que pasa el golpe inicial de la noticia, las fuerzas que nos da Jehová y el amor que nos tiene calman los pensamientos negativos. Jehová puede darnos fuerzas a todos. Me consta\".",
      summary: "**Juan**, diagnosticado con **cáncer** a los **39 años**, se aseguró de mantener su programa de **actividades espirituales**. Las **fuerzas de Jehová** y su amor calmaron sus pensamientos negativos.",
    },
    {
      number: 14,
      content: "Eliza, mencionada en el párrafo 11, cuenta: \"Siempre que voy a las reuniones y hago mi estudio personal me convenzo más y más de que Jehová me escucha y me quiere muchísimo. Eso me hace feliz\". Y Nolan, un superintendente de circuito de África, explica lo que los ayuda a él y a su esposa, Diane: \"Nos esforzamos por mantener nuestro programa de actividades espirituales incluso cuando estamos desanimados. Jehová siempre se encarga de demostrarnos que nos está ayudando a tener la actitud correcta. Intentamos recordar que Jehová nos ayudará y nos bendecirá. No sabemos cómo lo hará, pero estamos seguros de que lo hará\".",
      summary: "**Eliza** se convence de que Jehová la **escucha** y la quiere al asistir a las reuniones. **Nolan** y **Diane** se esfuerzan por mantener sus actividades espirituales incluso cuando están **desanimados**, confiando en la ayuda de Jehová.",
    },
    {
      number: 15,
      content: "Para vencer los sentimientos negativos, tal vez no baste con hacer todo lo que hemos visto hasta ahora; puede que tengamos que hacer algo más. Pongamos un ejemplo. Imaginemos que nos duele la espalda. Es posible que caminar todos los días nos ayude un poco, pero para que el dolor desaparezca quizás tengamos que hacer algo más, como buscar información sobre el tema e incluso consultar a un médico. De manera parecida, para lidiar con los sentimientos negativos, tal vez tengamos que buscar información en la Biblia y en nuestras publicaciones, e incluso consultar a un hermano maduro. Veamos algunos pasos adicionales que podemos dar.",
      summary: "A veces necesitamos hacer **algo más** que mantener nuestro programa espiritual. Como con un **dolor de espalda**, puede que necesitemos buscar **información** adicional o **consultar** a un hermano maduro.",
    },
    {
      number: 16,
      content: "Pedirle a Jehová que nos ayude a entender lo que necesitamos. El rey David sabía que Jehová lo conocía muy bien, por eso le pidió que lo ayudara a descubrir por qué tenía \"pensamientos angustiosos\" (lea Salmo 139:1-4, 23, 24). Nosotros también podemos pedirle a Jehová que nos ayude a ver por qué tenemos pensamientos negativos y cómo deshacernos de ellos. Además, es bueno que nos hagamos preguntas como estas: \"¿Qué es lo que me preocupa en el fondo? ¿Hay algún detonante que siempre despierte en mí pensamientos negativos? ¿Me quedo dándoles vueltas a esos pensamientos en vez de rechazarlos?\".",
      summary: "El rey **David** le pidió a Jehová que lo ayudara a descubrir sus **\"pensamientos angustiosos\"**. Nosotros también podemos pedir ayuda para ver **por qué** tenemos pensamientos negativos y cómo **deshacernos** de ellos.",
    },
    {
      number: 17,
      content: "Adaptar nuestro estudio personal a nuestras necesidades. De vez en cuando, a lo mejor podemos analizar algunas facetas de la personalidad de Jehová. Por ejemplo, al apóstol Pablo le fue de gran ayuda meditar en el rescate y en el perdón de Jehová. ¿Por qué no hacemos lo mismo? En nuestro idioma disponemos de herramientas como la Guía de estudio para los testigos de Jehová y el Índice de las publicaciones Watch Tower para investigar sobre temas como la misericordia, el perdón y el amor leal de Dios. Hagamos una lista con los artículos que nos resulten útiles, tengámosla siempre a la mano y estudiemos esos artículos cuando nos asalte un pensamiento negativo. Además, busquemos una aplicación práctica para nosotros (Filip. 4:8).",
      summary: "Podemos adaptar nuestro **estudio personal** para analizar la **misericordia**, el **perdón** y el **amor leal** de Dios. Debemos tener una lista de artículos útiles y buscar **aplicaciones prácticas**.",
    },
    {
      number: 18,
      content: "Eliza, mencionada antes, se propuso hacer un proyecto de estudio sobre Job. Ella cuenta: \"Me siento muy identificada con Job. Él sufrió una prueba tras otra. Y, aunque no sabía por qué estaba sufriendo, nunca dejó de apoyarse en Jehová, ni siquiera en su peor momento\" (Job 42:1-6). Diane, mencionada en el párrafo 14, dice: \"Mi esposo y yo estamos estudiando juntos el libro Acerquémonos a Jehová. Estamos muy agradecidos de que Jehová nos moldee como si fuéramos barro en las manos de un alfarero. Cuando nos sentimos desanimados por nuestros defectos, tratamos de imaginarnos a Jehová enseñándonos y dándonos forma para que seamos mejores personas. Eso nos acerca más a él\" (Is. 64:8).",
      summary: "**Eliza** estudió sobre **Job**, quien nunca dejó de apoyarse en Jehová. **Diane** y su esposo estudian juntos **Acerquémonos a Jehová**, imaginando a Dios **moldeándolos** como un alfarero.",
    },
    {
      number: 19,
      content: "Incluso si tenemos un buen programa de actividades espirituales y un estudio personal adaptado a nuestras necesidades, habrá días en los que nos sintamos desanimados o desdichados, como dijo Pablo. Ahora bien, con la ayuda de Jehová, esos pensamientos y sentimientos negativos no nos dominarán. Y podemos estar seguros de que habrá muchos más días buenos que malos, pues sabemos que contamos con la amistad de Jehová y podemos servirle con una conciencia limpia.",
      summary: "Habrá días en que nos sintamos **desanimados**, pero con la ayuda de Jehová los sentimientos negativos **no nos dominarán**. Habrá más **días buenos** que malos.",
    },
    {
      number: 20,
      content: "Sigamos haciendo todo lo posible por no dejarnos vencer por los sentimientos negativos que tengamos debido a nuestro pasado, nuestros problemas o nuestras imperfecciones. Jehová nos ayudará a mantenerlos a raya (Sal. 143:10). Y estamos deseando que llegue el día en que esta lucha sea cosa del pasado. En el nuevo mundo, todos los días nos despertaremos sin ningún pensamiento angustioso... ¡felices de estar sirviendo a nuestro cariñoso Dios, Jehová!",
      summary: "Sigamos haciendo todo lo posible por **no dejarnos vencer**. Jehová nos ayudará a mantener los sentimientos negativos **a raya**. En el **nuevo mundo**, esta lucha será **cosa del pasado**.",
    },
  ],
  // ============================================
  // PREGUNTAS DE REPASO
  // ============================================
  reviewQuestions: [
    {
      question: "¿Por qué razones a veces se sentía \"desdichado\" el apóstol Pablo?",
      answer: [
        "Por las cosas que hizo antes de ser cristiano: aprobó el asesinato de **Esteban** y **persiguió** a muchos cristianos.",
        "Tenía algo que le causaba mucho dolor, como **\"una espina en la carne\"**.",
        "Luchaba con su **naturaleza imperfecta** que lo empujaba a hacer lo que no quería.",
      ],
    },
    {
      question: "¿Qué ayudó a Pablo a mantener la alegría a pesar de sus sentimientos negativos?",
      answer: [
        "**Reflexionar** en cómo el espíritu de Dios podía ayudarlo a luchar contra las malas tendencias.",
        "Las **buenas noticias** sobre las congregaciones, sus **buenos amigos** y saber que tenía la aprobación de Jehová.",
        "Meditar en el **rescate** y verlo como un regalo personal, convenciéndose de que Jehová había **perdonado** sus pecados.",
      ],
    },
    {
      question: "¿Qué podemos hacer para luchar contra los sentimientos negativos?",
      answer: [
        "Mantener un buen programa de **actividades espirituales**: lectura de la Biblia, predicación, reuniones.",
        "Pedirle a **Jehová** que nos ayude a entender por qué tenemos pensamientos negativos.",
        "Adaptar nuestro **estudio personal** a nuestras necesidades, investigando temas como la **misericordia** y el **perdón** de Dios.",
      ],
    },
  ],
  finalSong: "Canción 34: Caminaré en integridad",
};
