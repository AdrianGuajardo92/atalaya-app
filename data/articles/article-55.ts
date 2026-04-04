import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS PARA CAMPOS readText
// ============================================
export const biblicalTexts55: Record<string, { reference: string; text: string }[]> = {
  "LEE Hechos 17:27": [
    { reference: "Hechos 17:27", text: "para que buscaran a Dios, por si lo podían encontrar a tientas y de verdad lo hallaban, aunque en realidad no está lejos de ninguno de nosotros." },
  ],
  "LEE Marcos 3:11, 12": [
    { reference: "Marcos 3:11", text: "Y los espíritus impuros, siempre que lo veían, caían delante de él y gritaban: «¡Tú eres el Hijo de Dios!»." },
    { reference: "Marcos 3:12", text: "Pero él les ordenaba una y otra vez que no dieran a conocer quién era." },
  ],
  "LEE Colosenses 4:6": [
    { reference: "Colosenses 4:6", text: "Que sus palabras sean siempre agradables, sazonadas con sal, para que sepan cómo deben responder a cada persona." },
  ],
  "LEE Proverbios 25:11": [
    { reference: "Proverbios 25:11", text: "Como manzanas de oro con adornos de plata es la palabra dicha en el momento oportuno." },
  ],
};

// ============================================
// DATOS DEL ARTÍCULO 55
// ============================================
export const article55: ArticleData = {
  metadata: {
    articleNumber: 55,
    week: "30 Mar - 5 Abr",
    month: "Enero",
    year: 2026,
  },
  song: "Canción 76: Cuéntame lo que sientes",
  title: "Sazonemos la verdad con palabras agradables",
  biblicalText: "\"Jehová, el Dios de la verdad\" (Sal. 31:5).",
  theme: "Cómo decir la verdad y hablar de la verdad para beneficiar a los demás.",
  questions: [
    // ==========================================
    // PREGUNTA 1
    // ==========================================
    {
      number: "1",
      textEs: "¿Qué tenemos que hacer para formar parte de la familia de Jehová?",
      textLSM: "",
      paragraphs: [1],
      keyPoint: "Para formar parte de la familia de Jehová tenemos que demostrar que amamos y vivimos la verdad, siendo honestos en palabras y hechos.",
      guidingQuestion: "¿Por qué usamos expresiones como 'conocer la verdad' o 'vivir en la verdad'?",
      answer: [
        "Para nosotros la verdad de la Biblia es muy **importante** e influye en **todo aspecto** de nuestra vida.",
        "Para formar parte de la familia de Jehová tenemos que demostrar que **amamos** y **vivimos** la verdad.",
        "Esto incluye ser **honestos** con lo que decimos y hacemos (Sal. 15:1-3).",
      ],
      flashcards: [
        {
          question: "¿Qué incluye 'vivir la verdad' según el párrafo 1?",
          answer: "Ser honestos con lo que decimos y hacemos.",
        },
        {
          question: "¿Por qué es lógico que usemos expresiones como 'conocer la verdad'?",
          answer: "Porque la verdad de la Biblia es muy importante para nosotros e influye en todo aspecto de nuestra vida.",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 15:1-3",
          purpose: "Para ser huéspedes de Jehová debemos ser honestos",
          text: "Jehová, ¿quién puede ser huésped en tu tienda? ¿Quién puede vivir en tu monte santo? El que anda sin defecto, hace lo que es justo y dice la verdad de corazón; el que no calumnia con su lengua, no le hace daño a su compañero y no difama a su vecino.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 2
    // ==========================================
    {
      number: "2",
      textEs: "a) ¿Qué reputación tenía Jesús? b) ¿Qué efecto tenían las verdades que Jesús enseñaba?",
      textLSM: "",
      paragraphs: [2],
      keyPoint: "Jesús siempre fue honesto, incluso cuando su mensaje dividía a las personas en dos grupos.",
      guidingQuestion: "¿Qué reconocieron incluso los enemigos de Jesús sobre él?",
      answer: [
        "Los **enemigos** de Jesús reconocieron que era **honesto** incluso cuando a los demás no les gustaba lo que decía (Mat. 22:16).",
        "Las verdades que enseñaba causaron **división**: el hijo contra su padre, la hija contra su madre (Mat. 10:35).",
        "Jesús no quería provocar esa reacción negativa, pero era **realista** (Mat. 23:37).",
        "Sabía que su mensaje dividiría al mundo en **dos grupos**: los que aman las verdades bíblicas y los que no (2 Tes. 2:9-11).",
      ],
      flashcards: [
        {
          question: "¿Cómo dividió Jesús al mundo con su enseñanza?",
          answer: "En dos grupos: los que aman las verdades bíblicas y los que no.",
        },
        {
          question: "¿Qué reconocieron incluso los enemigos de Jesús?",
          answer: "Que era honesto y enseñaba el camino de Dios de acuerdo con la verdad, sin dejarse influir por nadie.",
        },
      ],
      biblicalCards: [
        {
          reference: "Mateo 22:16",
          purpose: "Incluso sus enemigos reconocieron que Jesús era honesto",
          text: "Así que le mandaron a sus discípulos junto con los partidarios de Herodes. Estos le dijeron: «Maestro, sabemos que eres sincero y que enseñas el camino de Dios de acuerdo con la verdad. Tú no te dejas influir por nadie, porque no te fijas en las apariencias».",
        },
        {
          reference: "Mateo 10:35",
          purpose: "Las verdades de Jesús causaban división",
          text: "Porque vine a causar división: el hijo estará contra su padre, la hija contra su madre y la nuera contra su suegra.",
        },
        {
          reference: "Mateo 23:37",
          purpose: "Jesús no quería provocar reacciones negativas pero era realista",
          text: "«¡Jerusalén, Jerusalén, la que mata a los profetas y apedrea a los que le son enviados! ¡Cuántas veces quise reunir a tus hijos como la gallina reúne a sus pollitos debajo de sus alas! Pero ustedes no quisieron».",
        },
        {
          reference: "2 Tesalonicenses 2:9-11",
          purpose: "El mundo se divide entre quienes aman la verdad y quienes no",
          text: "Pero la presencia del desaforado se producirá según la operación de Satanás con toda obra poderosa y señales y portentos mentirosos y con todo engaño injusto para los que están pereciendo, como retribución porque no aceptaron el amor de la verdad para que fueran salvos. Por eso Dios deja que les llegue una operación de error, para que crean la mentira.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 3
    // ==========================================
    {
      number: "3",
      textEs: "¿Qué analizaremos en este artículo?",
      textLSM: "",
      paragraphs: [3],
      keyPoint: "En este artículo analizaremos dónde encontrar la verdad, por qué, cómo y cuándo decirla para sazonarla con palabras agradables.",
      guidingQuestion: "¿Cuáles son los cuatro aspectos de la verdad que se analizarán?",
      answer: [
        "Nos esforzamos por **decir siempre la verdad** y por predicar las verdades bíblicas incluso cuando no les guste a los demás.",
        "Es importante darle importancia a **cómo y cuándo** nos expresamos.",
        "Analizaremos: **dónde** encontrar la verdad, **por qué**, **cómo** y **cuándo** decirla.",
        "Todo esto nos ayudará a ser más hábiles en **sazonar la verdad** con palabras agradables.",
      ],
      flashcards: [
        {
          question: "¿Cuáles son los cuatro aspectos de la verdad que analiza este artículo?",
          answer: "Dónde encontrar la verdad, por qué decirla, cómo decirla y cuándo decirla.",
        },
      ],
      biblicalCards: [],
    },
    // ==========================================
    // PREGUNTA 4 — SECCIÓN: DÓNDE ENCONTRAR LA VERDAD
    // ==========================================
    {
      number: "4",
      textEs: "¿Por qué decimos que Jehová es la fuente de la verdad?",
      textLSM: "",
      paragraphs: [4],
      section: "DÓNDE ENCONTRAR LA VERDAD",
      keyPoint: "Jehová es la fuente de la verdad porque todo lo que dice es cierto, sus predicciones se cumplen, jamás rompe sus promesas y es imposible que mienta.",
      guidingQuestion: "¿Qué cuatro razones demuestran que Jehová es 'el Dios de la verdad'?",
      answer: [
        "Todo lo que Jehová dice es **cierto**, incluyendo lo que afirma sobre lo que está bien y lo que está mal (Sal. 19:9; 119:142, 151).",
        "Lo que **predice** sobre el futuro siempre se **hace realidad** (Is. 55:10, 11).",
        "Jamás **rompe** sus **promesas** (Núm. 23:19).",
        "Es **imposible** que mienta (Heb. 6:18). Con razón la Biblia lo llama **\"el Dios de la verdad\"** (Sal. 31:5).",
      ],
      flashcards: [
        {
          question: "¿Qué cuatro razones demuestran que Jehová es la fuente de la verdad?",
          answer: "1) Todo lo que dice es cierto, 2) sus predicciones se cumplen, 3) jamás rompe sus promesas, 4) es imposible que mienta.",
        },
        {
          question: "¿Qué título le da la Biblia a Jehová en Salmo 31:5?",
          answer: "\"El Dios de la verdad\".",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 19:9",
          purpose: "Los mandatos de Jehová son verdaderos y justos",
          text: "El temor de Jehová es puro; permanece para siempre. Los mandatos judiciales de Jehová son verdaderos; todos ellos son justos.",
        },
        {
          reference: "Salmo 119:142, 151",
          purpose: "La ley y los mandamientos de Jehová son la verdad",
          text: "Tu justicia es una justicia eterna y tu ley es la verdad. Tú estás cerca, oh Jehová, y todos tus mandamientos son la verdad.",
        },
        {
          reference: "Isaías 55:10, 11",
          purpose: "La palabra de Jehová siempre se cumple",
          text: "Porque, tal como la lluvia y la nieve bajan del cielo y no vuelven allá sin antes haber saturado la tierra, haciéndola producir y germinar y dándole semilla al sembrador y pan al que come, así será mi palabra que sale de mi boca. No volverá a mí sin resultados, sino que ciertamente hará lo que me agrada y tendrá éxito en aquello para lo que la envié.",
        },
        {
          reference: "Números 23:19",
          purpose: "Dios jamás rompe sus promesas",
          text: "Dios no es un hombre para que mienta, ni un hijo del hombre para que cambie de parecer. Cuando lo dice, ¿no lo hace? Cuando lo promete, ¿no lo cumple?",
        },
        {
          reference: "Hebreos 6:18",
          purpose: "Es imposible que Dios mienta",
          text: "...para que, mediante dos cosas que no pueden cambiarse y en las cuales es imposible que Dios mienta, los que hemos huido al refugio seamos poderosamente animados a agarrarnos de la esperanza que tenemos por delante.",
        },
        {
          reference: "Salmo 31:5",
          purpose: "La Biblia llama a Jehová 'el Dios de la verdad'",
          text: "En tu mano encomiendo mi espíritu. Tú me has rescatado, oh Jehová, el Dios de la verdad.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 5
    // ==========================================
    {
      number: "5",
      textEs: "¿Por qué no es difícil encontrar al \"Dios de la verdad\"? (Hechos 17:27).",
      textLSM: "",
      paragraphs: [5],
      readText: "LEE Hechos 17:27",
      keyPoint: "No es difícil encontrar a Jehová porque hay pruebas de su existencia a nuestro alrededor, él no está lejos de nosotros, y atrae a las personas humildes.",
      guidingQuestion: "¿Qué les dijo Pablo a los griegos cultos en Atenas sobre encontrar a Dios?",
      answer: [
        "A nuestro alrededor encontramos muchas **pruebas** de que Jehová existe y de cómo es (Rom. 1:20).",
        "Pablo les dijo a los griegos cultos en Atenas que Dios quiere que lo **encontremos** y que **\"no está muy lejos\"** de cada uno de nosotros (Hech. 17:27).",
        "Jehová **trae** hacia él a las personas **humildes** que están buscando la verdad (Juan 6:44).",
      ],
      flashcards: [
        {
          question: "¿Qué les dijo Pablo a los griegos cultos sobre Dios en Hechos 17:27?",
          answer: "Que Dios quiere que lo encontremos y que 'no está muy lejos de cada uno de nosotros'.",
        },
        {
          question: "¿Qué hace Jehová con las personas humildes que buscan la verdad?",
          answer: "Las trae hacia él (Juan 6:44).",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 1:20",
          purpose: "La creación prueba la existencia de Dios",
          text: "Porque sus cualidades invisibles —su poder eterno y su Divinidad— se ven claramente desde la creación del mundo, pues se perciben por medio de las cosas hechas, de modo que ellos no tienen excusa.",
        },
        {
          reference: "Hechos 17:27",
          purpose: "Dios no está lejos de nosotros",
          text: "para que buscaran a Dios, por si lo podían encontrar a tientas y de verdad lo hallaban, aunque en realidad no está lejos de ninguno de nosotros.",
        },
        {
          reference: "Juan 6:44",
          purpose: "Jehová atrae a las personas humildes hacia él",
          text: "Nadie puede venir a mí a menos que el Padre, que me envió, lo traiga; y a ese yo lo resucitaré en el último día.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 6
    // ==========================================
    {
      number: "6",
      textEs: "¿Cuáles son algunas verdades que enseña la Biblia, y por qué agradece usted conocerlas?",
      textLSM: "",
      paragraphs: [6],
      keyPoint: "La Biblia enseña verdades confiables sobre el origen de la vida, el sufrimiento, la muerte, y las promesas de Dios para el futuro.",
      guidingQuestion: "¿Qué verdades bíblicas podemos confiar en que son ciertas?",
      answer: [
        "Los hombres que escribieron la Biblia fueron **inspirados por el espíritu santo** (2 Ped. 1:20, 21), así que todo en ella es **verdad**.",
        "Podemos confiar en lo que dice sobre el **origen** del universo (Gén. 1:1, 26) y por qué **pecamos, sufrimos y morimos** (Rom. 5:12; 6:23).",
        "Jehová utilizará a su Hijo para reparar todo el daño de **Satanás, \"el padre de la mentira\"** (Juan 8:44; Rom. 16:20).",
        "Jesús **destruirá** a los malvados, **resucitará** a los muertos y convertirá la Tierra en un **paraíso** (Juan 11:25, 26; 1 Juan 3:8).",
        "Jehová nos da el **privilegio** de enseñar la verdad a otros (Mat. 28:19, 20).",
      ],
      flashcards: [
        {
          question: "¿Qué cuatro verdades fundamentales enseña la Biblia según el párrafo 6?",
          answer: "1) El origen del universo, 2) por qué sufrimos y morimos, 3) que Jehová reparará el daño de Satanás, 4) la esperanza de la resurrección y el paraíso.",
        },
        {
          question: "¿Por qué llama la Biblia a Satanás 'el padre de la mentira'?",
          answer: "Porque ha esparcido mentiras sobre Dios, pero Jehová utilizará a su Hijo para deshacer todo el daño que ha hecho.",
        },
      ],
      biblicalCards: [
        {
          reference: "2 Pedro 1:20, 21",
          purpose: "La Biblia fue inspirada por el espíritu santo",
          text: "Porque ante todo sepan esto: que ninguna profecía de las Escrituras es resultado de una interpretación privada de nadie. Porque la profecía nunca fue traída por voluntad humana, sino que los hombres hablaron de parte de Dios al ser llevados por el espíritu santo.",
        },
        {
          reference: "Génesis 1:1, 26",
          purpose: "La Biblia enseña la verdad sobre el origen del universo y la vida",
          text: "En el principio Dios creó los cielos y la tierra. Entonces Dios dijo: «Hagamos al hombre a nuestra imagen, según nuestra semejanza, y que tenga en sujeción los peces del mar, las aves del cielo, los animales domésticos, toda la tierra y todo animal que se arrastra sobre la tierra».",
        },
        {
          reference: "Romanos 5:12",
          purpose: "Explica por qué pecamos y morimos",
          text: "Por eso, así como por medio de un solo hombre el pecado entró en el mundo, y la muerte por medio del pecado, y así la muerte se extendió a todos los hombres porque todos habían pecado...",
        },
        {
          reference: "Romanos 6:23",
          purpose: "El pecado trae muerte, pero Dios ofrece vida eterna",
          text: "Porque el salario que el pecado paga es la muerte, pero el regalo que Dios da es la vida eterna por medio de Cristo Jesús, nuestro Señor.",
        },
        {
          reference: "Juan 8:44",
          purpose: "Satanás es el padre de la mentira",
          text: "Ustedes proceden de su padre, el Diablo, y quieren hacer los deseos de su padre. Él fue un homicida desde el principio y no permaneció en la verdad, porque no hay verdad en él. Cuando dice mentiras, habla según su propia naturaleza, porque es un mentiroso y el padre de la mentira.",
        },
        {
          reference: "Romanos 16:20",
          purpose: "Jehová aplastará a Satanás",
          text: "Y el Dios de la paz aplastará a Satanás bajo los pies de ustedes en breve. Que la bondad inmerecida de nuestro Señor Jesús esté con ustedes.",
        },
        {
          reference: "Juan 11:25, 26",
          purpose: "Jesús resucitará a los muertos",
          text: "Jesús le dijo: «Yo soy la resurrección y la vida. El que ejerce fe en mí, aunque muera, llegará a vivir; y todo el que vive y ejerce fe en mí no morirá jamás. ¿Crees esto?».",
        },
        {
          reference: "1 Juan 3:8",
          purpose: "Jesús deshará las obras del Diablo",
          text: "El que practica el pecado se origina del Diablo, porque el Diablo ha estado pecando desde el principio. Para esto se manifestó el Hijo de Dios: para deshacer las obras del Diablo.",
        },
        {
          reference: "Mateo 28:19, 20",
          purpose: "Jehová nos da el privilegio de enseñar la verdad a otros",
          text: "Por lo tanto, vayan y hagan discípulos de personas de todas las naciones, bautizándolas en el nombre del Padre y del Hijo y del espíritu santo, y enseñándoles a obedecer todo lo que les he mandado. Y sepan que yo estoy con ustedes todos los días hasta la conclusión del sistema de cosas.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 7, 8 — SECCIÓN: POR QUÉ DECIR LA VERDAD Y HABLAR DE LA VERDAD
    // ==========================================
    {
      number: "7, 8",
      textEs: "¿Por qué es importante el motivo por el que decimos la verdad? Dé un ejemplo (Marcos 3:11, 12; vea también las imágenes).",
      textLSM: "",
      paragraphs: [7, 8],
      section: "POR QUÉ DECIR LA VERDAD Y HABLAR DE LA VERDAD",
      readText: "LEE Marcos 3:11, 12",
      image: "https://i.imgur.com/4FK2u5O.png",
      imageCaption: "Cuando enseñamos la verdad, ¿a quién dirigimos la atención? (Vea los párrafos 7 y 8).",
      keyPoint: "Para Jehová es importante no solo decir la verdad, sino por qué motivo lo hacemos. Debemos enseñar por amor a Jehová y dirigir las alabanzas hacia él.",
      guidingQuestion: "¿Qué mal ejemplo dieron los demonios al decir una verdad sobre Jesús?",
      answer: [
        "Para agradar a Dios **no basta** con decir la verdad; para él también es importante **por qué** lo hacemos.",
        "Los **demonios** dijeron la verdad sobre Jesús: \"¡Tú eres el Hijo de Dios!\", pero por **motivos egoístas** (Mar. 3:11, 12).",
        "Es indispensable enseñar la verdad por **amor a Jehová** y dirigir hacia él las **alabanzas** que recibamos (Mat. 5:16; Hech. 14:12-15).",
      ],
      flashcards: [
        {
          question: "¿Por qué rechazó Jesús el testimonio de los demonios a pesar de que era verdad?",
          answer: "Porque lo hicieron por motivos egoístas, tal vez para ganarse la confianza de la gente y lograr que se alejaran de Jehová.",
        },
        {
          question: "¿Qué debemos hacer con las alabanzas que recibimos por enseñar la verdad?",
          answer: "Dirigirlas siempre hacia Jehová, no buscar admiración personal (Mat. 5:16).",
        },
      ],
      biblicalCards: [
        {
          reference: "Marcos 3:11, 12",
          purpose: "Los demonios dijeron la verdad por motivos egoístas",
          text: "Y los espíritus impuros, siempre que lo veían, caían delante de él y gritaban: «¡Tú eres el Hijo de Dios!». Pero él les ordenaba una y otra vez que no dieran a conocer quién era.",
        },
        {
          reference: "Mateo 5:16",
          purpose: "Debemos dirigir la gloria a nuestro Padre celestial",
          text: "Del mismo modo, dejen que su luz brille delante de la gente, para que vean sus buenas obras y glorifiquen a su Padre que está en los cielos.",
        },
        {
          reference: "Hechos 14:12-15",
          purpose: "Pablo y Bernabé rechazaron las alabanzas y las dirigieron a Dios",
          text: "Y empezaron a llamar a Bernabé, Zeus, y a Pablo, Hermes, porque era el orador principal. Sin embargo, cuando los apóstoles Bernabé y Pablo oyeron esto, se rasgaron la ropa y saltaron entre la multitud, gritando: «Hombres, ¿por qué hacen estas cosas? Nosotros también somos humanos, con las mismas debilidades que ustedes. Les declaramos las buenas noticias para que se aparten de estas cosas vanas y se vuelvan al Dios vivo, que hizo el cielo, la tierra, el mar y todo lo que hay en ellos».",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 9
    // ==========================================
    {
      number: "9",
      textEs: "¿Qué no debemos hacer, y por qué?",
      textLSM: "",
      paragraphs: [9],
      keyPoint: "No debemos revelar información confidencial solo para impresionar a otros, pues nuestro motivo para decir la verdad no sería el correcto.",
      guidingQuestion: "¿Qué pasa si revelamos información confidencial para impresionar a los demás?",
      answer: [
        "No debemos **revelar información confidencial** que alguien nos haya contado, incluso si es verdad.",
        "Quizás **impresionemos** a los demás, pero no a **Jehová** (Prov. 11:13).",
        "Aunque lo que digamos sea cierto, **no tenemos derecho** a revelar esa información y nuestro **motivo** no sería el correcto.",
      ],
      flashcards: [
        {
          question: "Según Proverbios 11:13, ¿quién mantiene en secreto los asuntos confidenciales?",
          answer: "El de espíritu leal.",
        },
        {
          question: "¿Qué ejemplo del párrafo 9 muestra un motivo incorrecto para decir la verdad?",
          answer: "Un anciano nos cuenta algo confidencial y nosotros se lo contamos a otros para impresionarlos.",
        },
      ],
      biblicalCards: [
        {
          reference: "Proverbios 11:13",
          purpose: "El de espíritu leal no revela información confidencial",
          text: "El chismoso revela los asuntos confidenciales, pero el de espíritu leal los mantiene en secreto.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 10 — SECCIÓN: CÓMO DECIR LA VERDAD Y HABLAR DE LA VERDAD
    // ==========================================
    {
      number: "10",
      textEs: "¿A qué se refiere Colosenses 4:6 cuando dice que las palabras de los cristianos deben ser \"agradables\"?",
      textLSM: "",
      paragraphs: [10],
      section: "CÓMO DECIR LA VERDAD Y HABLAR DE LA VERDAD",
      readText: "LEE Colosenses 4:6",
      keyPoint: "Nuestras palabras deben ser agradables: no solo beneficiar a los demás sino también ser bondadosas y atractivas.",
      guidingQuestion: "¿Qué idea transmite la palabra griega que Pablo usó para 'agradables'?",
      answer: [
        "Pablo les recordó a los colosenses que sus palabras debían ser **\"siempre agradables\"** (Col. 4:6).",
        "La palabra griega transmite la idea de que nuestra manera de hablar debe **beneficiar** a los demás.",
        "También debe ser **bondadosa** y **atractiva**.",
      ],
      flashcards: [
        {
          question: "Según Colosenses 4:6, ¿qué tres cualidades deben tener nuestras palabras?",
          answer: "Deben ser agradables (beneficiosas para los demás), bondadosas y atractivas.",
        },
      ],
      biblicalCards: [
        {
          reference: "Colosenses 4:6",
          purpose: "Nuestras palabras deben ser siempre agradables y sazonadas con sal",
          text: "Que sus palabras sean siempre agradables, sazonadas con sal, para que sepan cómo deben responder a cada persona.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 11, 12
    // ==========================================
    {
      number: "11, 12",
      textEs: "¿Por qué debemos hablar de la verdad con tacto? Ponga un ejemplo (vea también las imágenes).",
      textLSM: "",
      paragraphs: [11, 12],
      image: "https://i.imgur.com/OuCcM7N.png",
      imageCaption: "Si queremos usar la Biblia hábilmente para enseñar la verdad, ¿qué debemos hacer? (Vea los párrafos 11 y 12).",
      keyPoint: "Debemos usar la Biblia hábilmente para no ofender ni provocar discusiones innecesarias.",
      guidingQuestion: "¿Qué puede pasar si no usamos la Biblia hábilmente al enseñar?",
      answer: [
        "Las verdades bíblicas son como una **espada afilada** que revela sentimientos y motivos (Heb. 4:12).",
        "Si no usamos la Biblia **hábilmente**, podríamos **ofender** a alguien o provocar discusiones sin necesidad.",
        "Ejemplo: si en la primera visita le mostramos a alguien que la Navidad y la Pascua son **paganas** (Is. 44:14-20; 2 Cor. 6:14-17), estaríamos diciendo la verdad pero **no** usando la Biblia hábilmente.",
      ],
      flashcards: [
        {
          question: "¿A qué compara Hebreos 4:12 las verdades bíblicas?",
          answer: "A una espada afilada que separa el alma del espíritu, es decir, que revela los sentimientos y motivos de una persona.",
        },
        {
          question: "¿Qué error podemos cometer en la predicación según el ejemplo del párrafo 12?",
          answer: "Mostrar en la primera visita que la Navidad y la Pascua son celebraciones paganas, en vez de usar la Biblia con tacto.",
        },
      ],
      biblicalCards: [
        {
          reference: "Hebreos 4:12",
          purpose: "Las verdades bíblicas son como una espada afilada",
          text: "Porque la palabra de Dios es viva y ejerce poder. Es más afilada que cualquier espada de dos filos: penetra hasta dividir el alma del espíritu, las articulaciones de la médula, y puede discernir los pensamientos y las intenciones del corazón.",
        },
        {
          reference: "Isaías 44:17, 19",
          purpose: "Es absurdo orarle a un objeto sin vida",
          text: "Con el resto hace un dios, una imagen tallada. Se postra ante ella, la adora y le ruega: «Sálvame, porque tú eres mi dios». Ninguno reflexiona, ninguno tiene el conocimiento ni el entendimiento para decir: «Quemé la mitad en el fuego; sobre sus brasas cocí pan y asé carne y la comí. ¿Y con el resto voy a hacer algo detestable? ¿Voy a adorar un bloque de madera?».",
        },
        {
          reference: "2 Corintios 6:14, 17",
          purpose: "Separarse de las prácticas paganas",
          text: "No se unan en yugo desigual con los incrédulos. Porque ¿qué tiene en común la justicia con el desafuero? ¿O qué compañerismo tiene la luz con la oscuridad? «Por eso, sálganse de entre ellos y sepárense —dice Jehová— y dejen de tocar lo impuro»; «y yo los recibiré».",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 13
    // ==========================================
    {
      number: "13",
      textEs: "¿De qué manera sazonamos con sal nuestras palabras?",
      textLSM: "",
      paragraphs: [13],
      keyPoint: "Adaptar el mensaje al 'gusto' de la persona, sin disfrazar ni esconder la verdad, teniendo en cuenta su cultura y circunstancias.",
      guidingQuestion: "¿Qué significa que nuestras palabras deben estar 'sazonadas con sal'?",
      answer: [
        "Sazonar con sal **no** es disfrazar la verdad ni esconderla.",
        "Es presentar el mensaje de manera que se **adapte al gusto** de la persona que lo \"saborea\" (Job 12:11).",
        "Hay que sazonar nuestras palabras al gusto de **la persona** con la que hablamos, **no** a nuestro gusto o según nuestra **cultura**.",
        "Pablo dijo: **\"Sepan cómo deben responder a cada persona\"**.",
      ],
      flashcards: [
        {
          question: "¿Con qué compara Job 12:11 la forma en que evaluamos las palabras?",
          answer: "Con el paladar que saborea la comida: así como el paladar distingue sabores, el oído examina las palabras.",
        },
        {
          question: "¿A quién debemos adaptar nuestra manera de hablar al enseñar la verdad?",
          answer: "Al gusto de la persona con la que hablamos, no a nuestro gusto ni según nuestra cultura.",
        },
      ],
      biblicalCards: [
        {
          reference: "Job 12:11",
          purpose: "El oído examina las palabras como el paladar saborea la comida",
          text: "¿No examina el oído las palabras tal como el paladar saborea la comida?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 14 — SECCIÓN: CUÁNDO DECIR LA VERDAD Y HABLAR DE LA VERDAD
    // ==========================================
    {
      number: "14",
      textEs: "Mientras estuvo en la Tierra, ¿les enseñó Jesús a sus discípulos todo lo que sabía?",
      textLSM: "",
      paragraphs: [14],
      section: "CUÁNDO DECIR LA VERDAD Y HABLAR DE LA VERDAD",
      keyPoint: "Jesús fue considerado con sus discípulos: no intentó enseñarles todo de una vez porque sabía que todavía no estaban listos.",
      guidingQuestion: "¿Qué les dijo Jesús a sus discípulos cuando todavía no estaban listos para ciertas verdades?",
      answer: [
        "Jesús les habló de manera **agradable** y les enseñó con **cariño** (Mar. 6:34).",
        "**No intentó** enseñarles todo lo que sabía; fue **considerado** con sus limitaciones.",
        "Les dijo que algunas verdades serían **demasiado para ellos** en ese momento (Juan 16:12).",
      ],
      flashcards: [
        {
          question: "¿Por qué no enseñó Jesús todo lo que sabía a sus discípulos?",
          answer: "Porque fue considerado, tuvo en cuenta sus limitaciones y sabía que todavía no era el momento indicado.",
        },
      ],
      biblicalCards: [
        {
          reference: "Marcos 6:34",
          purpose: "Jesús se compadeció de la multitud y les enseñó con cariño",
          text: "Al bajar, vio una gran multitud y se compadeció de ellos, porque eran como ovejas sin pastor. Y empezó a enseñarles muchas cosas.",
        },
        {
          reference: "Juan 16:12",
          purpose: "Jesús no les enseñó todo a sus discípulos de una vez",
          text: "Todavía tengo muchas cosas que decirles, pero ahora no las pueden soportar.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 15
    // ==========================================
    {
      number: "15",
      textEs: "¿Hay que enseñarles a los estudiantes todo lo que sabemos de una vez? (Proverbios 25:11; vea también la imagen).",
      textLSM: "",
      paragraphs: [15],
      readText: "LEE Proverbios 25:11",
      image: "https://i.imgur.com/TvKEwtJ.png",
      imageCaption: "Al enseñar la verdad, imitemos a Jesús y pensemos en qué decir y cuándo decirlo. (Vea el párrafo 15).",
      keyPoint: "No hay que enseñar todo de una vez; hay que saber qué decir y cuándo decirlo, adaptándose al ritmo del estudiante.",
      guidingQuestion: "¿Por qué no sería prudente enseñarle a un estudiante nuevo sobre festividades paganas justo antes de Navidad?",
      answer: [
        "El hecho de que sepamos la verdad **no significa** que tengamos que enseñar todo de **una vez**.",
        "Lo mejor es imitar a Jesús y ser **considerados** con los estudiantes.",
        "A algunos les cuesta más tiempo **cambiar** su manera de pensar y actuar.",
        "Para ayudar a un estudiante a progresar, no basta con enseñarle las verdades que necesita oír, también hay que saber **cuándo** hacerlo (Prov. 25:11).",
      ],
      flashcards: [
        {
          question: "¿A qué se compara la palabra dicha en el momento oportuno según Proverbios 25:11?",
          answer: "A manzanas de oro con adornos de plata.",
        },
        {
          question: "¿Por qué no es buena idea enseñar sobre festividades paganas justo antes de Navidad?",
          answer: "Porque no estaríamos sazonando la verdad con palabras agradables; hay que saber cuándo es el momento oportuno.",
        },
      ],
      biblicalCards: [
        {
          reference: "Proverbios 25:11",
          purpose: "La palabra dicha en el momento oportuno tiene gran valor",
          text: "Como manzanas de oro con adornos de plata es la palabra dicha en el momento oportuno.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 16
    // ==========================================
    {
      number: "16",
      textEs: "¿Cómo podemos ayudar a un estudiante a seguir \"andando en la verdad\"?",
      textLSM: "",
      paragraphs: [16],
      keyPoint: "Poniéndole un buen ejemplo, hablando con el motivo correcto y usando palabras agradables, amables y oportunas.",
      guidingQuestion: "¿Qué cuatro cosas debemos hacer para ayudar a alguien a seguir 'andando en la verdad'?",
      answer: [
        "Es importante ponerle un **buen ejemplo** y que nuestra vida demuestre que creemos en las **promesas** de la Biblia (3 Juan 3, 4).",
        "Hablar de la verdad con el **motivo correcto** y usando palabras **agradables**, **amables** y **oportunas**.",
        "Dirigir a Jehová cualquier **alabanza** que recibamos.",
        "Así demostraremos que servimos a **Jehová, el Dios de la verdad**.",
      ],
      flashcards: [
        {
          question: "¿Qué cuatro cualidades deben tener nuestras palabras al enseñar la verdad?",
          answer: "Deben ser dichas con el motivo correcto, agradables, amables y oportunas.",
        },
        {
          question: "Según 3 Juan 3, 4, ¿qué da mucha alegría?",
          answer: "Saber que nuestros hijos espirituales siguen andando en la verdad.",
        },
      ],
      biblicalCards: [
        {
          reference: "3 Juan 3, 4",
          purpose: "Andando en la verdad damos alegría a otros",
          text: "Porque me alegré mucho cuando llegaron los hermanos y dieron testimonio de tu fidelidad a la verdad, de cómo sigues andando en la verdad. No tengo ninguna otra razón para estar más agradecido que esta: saber que mis hijos siguen andando en la verdad.",
        },
      ],
    },
  ],
  // ==========================================
  // PÁRRAFOS
  // ==========================================
  paragraphs: [
    {
      number: 1,
      content: "CUANDO conocemos a un hermano, una de las preguntas que solemos hacerle es \"¿Cómo conociste la verdad?\". Tal vez responda \"Me crie en la verdad\" o \"Soy nuevo en la verdad\". Usamos este tipo de expresiones porque para nosotros la verdad de la Biblia es muy importante e influye en todo aspecto de nuestra vida. Y es lógico que las usemos porque para formar parte de la familia de Jehová tenemos que demostrar que amamos y vivimos la verdad, lo que incluye ser honestos con lo que decimos y hacemos (Sal. 15:1-3).",
      summary: "Para formar parte de la familia de **Jehová**, tenemos que demostrar que **amamos** y **vivimos** la verdad, siendo **honestos** con lo que decimos y hacemos (Sal. 15:1-3).",
      note: "En este artículo la palabra verdad casi siempre se refiere a las verdades de la Biblia, pero a veces también se refiere a una afirmación que es cierta y veraz.",
      videoLSM: "/videos/a55_Parrafo_1.mp4",
    },
    {
      number: 2,
      content: "Jesús siempre decía la verdad. De hecho, sus enemigos reconocieron que era honesto incluso cuando a las demás personas no les gustaba lo que decía (Mat. 22:16). Hablando del efecto de las verdades que enseñaba, Jesús dijo: \"Vine a causar división. El hijo estará contra su padre, la hija contra su madre y la nuera contra su suegra\" (Mat. 10:35). Jesús no quería provocar esta reacción negativa a lo que él y sus discípulos predicaban, pero era realista (Mat. 23:37). Aunque enseñaba la verdad, sabía que su mensaje dividiría al mundo en dos grupos: los que aman las verdades bíblicas y los que no (2 Tes. 2:9-11).",
      summary: "**Jesús** siempre decía la verdad. Sus **enemigos** reconocieron que era honesto (Mat. 22:16). Sabía que su mensaje dividiría al mundo en **dos grupos**: los que aman las verdades bíblicas y los que no (2 Tes. 2:9-11).",
      videoLSM: "/videos/a55_Parrafo_2.mp4",
    },
    {
      number: 3,
      content: "Al igual que Jesús, nos esforzamos por decir siempre la verdad y por predicar y enseñar las verdades bíblicas incluso cuando a los demás no les guste lo que decimos. ¿Significa eso que no es necesario darle importancia a cómo y cuándo nos expresamos? Al contrario, sí es importante. En este artículo empezaremos analizando dónde podemos encontrar la verdad. Luego veremos por qué, cómo y cuándo debemos decir la verdad y hablar de la verdad. Todo esto nos ayudará a ser más hábiles en sazonar la verdad con palabras agradables.",
      summary: "Analizaremos **dónde** encontrar la verdad, **por qué**, **cómo** y **cuándo** debemos decirla. Todo esto nos ayudará a **sazonar la verdad** con palabras agradables.",
      videoLSM: "/videos/a55_Parrafo_3.mp4",
    },
    {
      number: 4,
      content: "Jehová es la fuente de la verdad. Todo lo que dice es cierto, como por ejemplo lo que afirma sobre lo que está bien y lo que está mal (Sal. 19:9; 119:142, 151). Lo que predice sobre el futuro siempre se hace realidad (Is. 55:10, 11). Y jamás rompe sus promesas (Núm. 23:19). De hecho, es imposible que mienta (Heb. 6:18). Con razón la Biblia lo llama \"el Dios de la verdad\" (Sal. 31:5).",
      summary: "**Jehová** es la fuente de la verdad: todo lo que dice es **cierto** (Sal. 19:9), sus predicciones se **cumplen** (Is. 55:10, 11), jamás rompe sus **promesas** (Núm. 23:19) y es **imposible** que mienta (Heb. 6:18).",
      videoLSM: "/videos/a55_Parrafo_4.mp4",
    },
    {
      number: 5,
      content: "Algunas personas dicen que no es fácil conocer a Jehová, \"el Dios de la verdad\". Pero no es así. A nuestro alrededor encontramos muchas pruebas de que él existe y de cómo es (Rom. 1:20). Cuando el apóstol Pablo estaba en Atenas hablando con un grupo de griegos muy cultos, les dijo que Dios quiere que lo encontremos y que \"no está muy lejos de cada uno de nosotros\" (lea Hechos 17:27). Es más, Jehová trae hacia él a las personas humildes que están buscando la verdad (Juan 6:44).",
      summary: "No es difícil encontrar a Jehová. Hay muchas **pruebas** de su existencia (Rom. 1:20). Dios **\"no está muy lejos\"** de nosotros (Hech. 17:27) y **trae** hacia él a las personas humildes (Juan 6:44).",
      videoLSM: "/videos/a55_Parrafo_5.mp4",
    },
    {
      number: 6,
      content: "Una de las maneras de encontrar a Jehová es estudiando la Biblia. Los hombres que la escribieron fueron inspirados por el espíritu santo de Dios (2 Ped. 1:20, 21). Así que todo lo que encontramos en ella es verdad y merece nuestra confianza. Por ejemplo, podemos confiar en lo que dice sobre el origen del universo y la vida en la Tierra (Gén. 1:1, 26). También podemos tener la seguridad de que explica la verdad sobre por qué pecamos, sufrimos y morimos (Rom. 5:12; 6:23). Además, podemos tener la certeza de que, tal como dice la Biblia, Jehová utilizará a su Hijo para reparar todo el daño que ha hecho Satanás, \"el padre de la mentira\" (Juan 8:44; Rom. 16:20). Y podemos poner toda nuestra fe en la promesa de que Jesús destruirá a los malvados, resucitará a los muertos, convertirá la Tierra en un paraíso y nos ayudará a alcanzar la perfección (Juan 11:25, 26; 1 Juan 3:8). Jehová nos ha enseñado la verdad y nos da la oportunidad de enseñarla a otros (Mat. 28:19, 20). ¡Qué gran privilegio!",
      summary: "La **Biblia** fue inspirada por el espíritu santo (2 Ped. 1:20, 21). Enseña verdades sobre el **origen** del universo (Gén. 1:1, 26), por qué **sufrimos** (Rom. 5:12; 6:23), y la promesa de que Jesús **destruirá** a los malvados y **resucitará** a los muertos (Juan 11:25, 26; 1 Juan 3:8). ¡Qué gran **privilegio** enseñar estas verdades!",
      videoLSM: "/videos/a55_Parrafo_6.mp4",
    },
    {
      number: 7,
      content: "Como vimos antes, debemos ser honestos si queremos formar parte de la familia de Jehová. Sin embargo, para agradar a Dios no basta con que digamos la verdad. Para él también es importante por qué lo hacemos. Pensemos en algo que pasó durante el ministerio de Jesús (lea Marcos 3:11, 12). Mientras predicaba cerca del mar de Galilea, llegó una gran multitud adonde estaba él. Entre aquellas personas había unos endemoniados que cayeron a sus pies y gritaron: \"¡Tú eres el Hijo de Dios!\". ¿Por qué dijeron los demonios esta verdad sobre Jesús? Quizás querían ganarse la confianza de quienes estaban allí y lograr que con el tiempo se alejaran de Jehová. Aunque dijeron la verdad, lo hicieron por motivos egoístas. Pero no engañaron a Jesús. A él no le gustó para nada lo que hicieron y les ordenó que no dieran testimonio de él.",
      summary: "Para agradar a Dios, no basta con decir la verdad; también importa **por qué** lo hacemos. Los **demonios** dijeron la verdad sobre Jesús (Mar. 3:11, 12), pero por **motivos egoístas**. Jesús les ordenó que **no dieran testimonio** de él.",
      videoLSM: "/videos/a55_Parrafos_7_y_8.mp4",
    },
    {
      number: 8,
      content: "¿Qué aprendemos de este relato? Que para Jehová es importante el motivo por el que decimos la verdad. Así que es indispensable que enseñemos la verdad por amor a Jehová y que siempre dirijamos hacia él las alabanzas que tal vez recibamos (Mat. 5:16; compare con Hechos 14:12-15).",
      summary: "Para **Jehová** es importante el **motivo** por el que decimos la verdad. Debemos enseñar por **amor a Jehová** y dirigir hacia él las **alabanzas** que recibamos (Mat. 5:16).",
      videoLSM: "/videos/a55_Parrafos_7_y_8.mp4",
    },
    {
      number: 9,
      content: "Pensemos en otra situación en la que tal vez nos sintamos tentados a buscar la admiración de los demás. Digamos que un anciano nos cuenta algo confidencial y que luego nosotros se lo contamos a otros. Si esas personas más tarde se enteran de que era verdad lo que les dijimos, tal vez queden asombradas y deduzcan que tenemos acceso a mucha información confidencial. Quizás impresionemos a los demás, pero no a Jehová (Prov. 11:13). ¿Por qué? Porque, aunque lo que digamos sea cierto, no tenemos derecho a revelar esa información y nuestro motivo para decir la verdad no es el correcto.",
      summary: "No debemos **revelar** información confidencial para impresionar a otros (Prov. 11:13). Aunque lo que digamos sea cierto, **no tenemos derecho** a revelar esa información y nuestro **motivo** no sería el correcto.",
      videoLSM: "/videos/a55_Parrafo_9.mp4",
    },
    {
      number: 10,
      content: "(Lea Colosenses 4:6). El apóstol Pablo les recordó a los cristianos de Colosas que sus palabras debían ser \"siempre agradables\". La palabra griega que usó transmite la idea de que nuestra manera de hablar no solo debe beneficiar a los demás, sino que también debe ser bondadosa y atractiva.",
      summary: "Pablo les recordó que las palabras deben ser **\"siempre agradables\"** (Col. 4:6). La palabra griega transmite la idea de una manera de hablar **bondadosa**, **atractiva** y que **beneficie** a los demás.",
      videoLSM: "/videos/a55_Parrafo_10.mp4",
    },
    {
      number: 11,
      content: "Es importante poner en práctica el consejo de Pablo de usar palabras agradables cuando les enseñamos la verdad a otros. Hebreos 4:12 muestra que las verdades bíblicas son como una espada afilada que separa el alma del espíritu, es decir, que revela lo que realmente siente una persona y sus motivos. Pero, si no usamos la Biblia hábilmente, podríamos terminar ofendiendo a alguien o provocando discusiones sin necesidad. Veamos un ejemplo.",
      summary: "Las verdades bíblicas son como una **espada afilada** (Heb. 4:12). Si no usamos la Biblia **hábilmente**, podríamos **ofender** a alguien o provocar **discusiones** sin necesidad.",
      videoLSM: "/videos/a55_Parrafos_11_y_12.mp4",
    },
    {
      number: 12,
      content: "Supongamos que en la predicación nos encontramos con un hombre sincero que suele rezar a imágenes y al que le gusta celebrar la Navidad y la Pascua en familia. Quizás se nos ocurra usar la Biblia para mostrarle que no tiene ningún sentido orarle a un objeto que no tiene vida y que tanto la Navidad como la Pascua son celebraciones paganas (Is. 44:14-20; 2 Cor. 6:14-17). Si hiciéramos eso en la primera visita, estaríamos diciendo la verdad, pero no estaríamos usando la Biblia hábilmente.",
      summary: "En la primera visita, no sería hábil mostrar que la **Navidad** y la **Pascua** son celebraciones paganas (Is. 44:14-20; 2 Cor. 6:14-17). Estaríamos diciendo la verdad, pero no usando la Biblia **hábilmente**.",
      videoLSM: "/videos/a55_Parrafos_11_y_12.mp4",
    },
    {
      number: 13,
      content: "Pablo también dijo que nuestras palabras deben estar \"sazonadas con sal\". Esto no quiere decir que debamos disfrazar la verdad o esconderla. La idea es presentar el mensaje de la verdad de una manera que se adapte al gusto de la persona que lo \"saborea\" (Job 12:11). Sin embargo, esto puede ser todo un reto. Tal como no a todo el mundo le gusta la comida sazonada de la misma manera, no a todo el mundo le resulta agradable la misma manera de hablar. Por ejemplo, en algunas culturas se ve bien expresar la opinión de manera directa, incluso al hablar con alguien de más edad. Pero en otras culturas eso sería inaceptable o hasta ofensivo. Pablo dijo: \"Sepan cómo deben responder a cada persona\". Así que hay que sazonar nuestras palabras, no a nuestro gusto o según nuestra cultura, sino al gusto de la persona con la que hablamos.",
      summary: "Sazonar con sal **no** es disfrazar la verdad, sino presentarla adaptándola al **gusto** de la persona (Job 12:11). Hay que sazonar nuestras palabras al gusto de la **persona**, **no** a nuestro gusto ni según nuestra **cultura**.",
      videoLSM: "/videos/a55_Parrafo_13.mp4",
    },
    {
      number: 14,
      content: "Jesús siempre les habló a sus discípulos de una manera agradable y les enseñó muchas cosas con cariño (Mar. 6:34). Aunque tenían bastante que aprender, Jesús no intentó enseñarles todo lo que sabía. Fue considerado, pues tuvo en cuenta sus limitaciones. Sabía que todavía no era el momento indicado para que aprendieran algunas verdades bíblicas. De hecho, les dijo que sería demasiado para ellos (Juan 16:12). ¿Qué aprendemos?",
      summary: "**Jesús** les enseñó con cariño (Mar. 6:34), pero **no intentó** enseñarles todo. Fue **considerado** y les dijo que algunas verdades serían **demasiado** para ellos (Juan 16:12).",
      videoLSM: "/videos/a55_Parrafo_14.mp4",
    },
    {
      number: 15,
      content: "El ejemplo de Jesús muestra que el hecho de que sepamos la verdad no significa que tengamos que enseñar todo lo que sabemos de una vez. Lo mejor es imitar a Jesús y ser considerados. Pensemos de nuevo en el hombre al que le gusta celebrar la Navidad y la Pascua en familia. Sabemos que esas festividades son de origen pagano y que a Jehová no le gustan. Pero imaginemos que empezamos a estudiar la Biblia con el hombre una o dos semanas antes de Navidad. ¿Estaríamos sazonando la verdad con palabras agradables si le mostráramos lo que dice la Biblia sobre las celebraciones paganas para que dejara de celebrar la Navidad de inmediato? Obvio que no. Aunque algunos estudiantes ponen en práctica enseguida lo que aprenden, a otros les cuesta más tiempo cambiar su manera de pensar y actuar. Para ayudar a un estudiante a progresar no basta con enseñarle las verdades que necesita oír, también hay que saber cuándo hacerlo (lea Proverbios 25:11).",
      summary: "El hecho de que sepamos la verdad **no significa** que debamos enseñar todo de una vez. Hay que ser **considerados** como Jesús. Para ayudar a un estudiante, hay que saber **cuándo** enseñar cada verdad (Prov. 25:11).",
      videoLSM: "/videos/a55_Parrafo_15.mp4",
    },
    {
      number: 16,
      content: "Hay pocas cosas que dan más alegría en la vida que enseñarle a alguien la verdad sobre Jehová. Para ayudarlo a seguir \"andando en la verdad\" es importante ponerle un buen ejemplo y asegurarnos de que nuestra vida demuestre que creemos en las promesas de la Biblia (3 Juan 3, 4). Y, como hemos visto, tenemos que hablar de la verdad con el motivo correcto y usando palabras agradables, amables y oportunas. También debemos dirigir a Jehová cualquier alabanza que recibamos. Así demostraremos que servimos a Jehová, el Dios de la verdad.",
      summary: "Para ayudar a alguien a seguir **\"andando en la verdad\"** (3 Juan 3, 4), hay que ponerle un buen **ejemplo**, hablar con el **motivo correcto** y usar palabras **agradables**, **amables** y **oportunas**.",
      videoLSM: "/videos/a55_Parrafo_16.mp4",
    },
  ],
  // ==========================================
  // PREGUNTAS DE REPASO
  // ==========================================
  reviewQuestions: [
    {
      question: "¿Qué aprendió de Hechos 17:27?",
      answer: [
        "Jehová **no está lejos** de nosotros; quiere que lo **busquemos** y lo encontremos.",
        "A nuestro alrededor hay muchas **pruebas** de su existencia.",
        "Él **trae** hacia sí a las personas **humildes** que buscan la verdad.",
      ],
    },
    {
      question: "¿Qué aprendió de Colosenses 4:6?",
      answer: [
        "Nuestras palabras deben ser **\"siempre agradables\"**: bondadosas, atractivas y beneficiosas.",
        "Debemos **sazonarlas con sal**, adaptándolas al gusto de cada persona.",
        "Debemos saber **cómo responder** a cada persona según su cultura y circunstancias.",
      ],
    },
    {
      question: "¿Qué aprendió de Proverbios 25:11?",
      answer: [
        "La palabra dicha en el **momento oportuno** es como \"manzanas de oro con adornos de plata\".",
        "No basta con enseñar la verdad; hay que saber **cuándo** decirla.",
        "Debemos ser **considerados** como Jesús e imitar su ejemplo de enseñar con paciencia.",
      ],
    },
  ],
  finalSong: "Canción 160: ¡Buenas noticias!",
};
