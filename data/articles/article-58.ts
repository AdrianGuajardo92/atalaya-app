import { ArticleData } from '@/types/atalaya';

// ============================================
// TEXTOS BÍBLICOS PARA CAMPOS readText
// ============================================
export const biblicalTexts58: Record<string, { reference: string; text: string }[]> = {
  "LEE Mateo 13:44-46": [
    { reference: "Mateo 13:44", text: "El Reino de los cielos es como un tesoro que estaba escondido en un campo y que un hombre encontró. El hombre lo volvió a esconder y, de la alegría que le dio, fue y vendió todo lo que tenía y compró ese campo." },
    { reference: "Mateo 13:45", text: "El Reino de los cielos también es como un comerciante viajero que buscaba perlas finas." },
    { reference: "Mateo 13:46", text: "Al encontrar una perla muy valiosa, se fue y enseguida vendió todas las cosas que tenía y la compró." },
  ],
  "LEE Salmo 119:60": [
    { reference: "Salmo 119:60", text: "Rápido y sin demora cumplo tus mandamientos." },
  ],
  "LEE 2 Pedro 3:10-13": [
    { reference: "2 Pedro 3:10", text: "Sin embargo, el día de Jehová vendrá como un ladrón. Ese día los cielos desaparecerán con un estruendo, y los elementos, intensamente calientes, se disolverán, y la tierra y las obras que hay en ella serán puestas al descubierto." },
    { reference: "2 Pedro 3:11", text: "Ya que todas estas cosas se disolverán de este modo, ¡piensen en la clase de personas que deben ser! Deben realizar actos santos de conducta y hechos de devoción a Dios" },
    { reference: "2 Pedro 3:12", text: "mientras esperan y están muy pendientes de la presencia del día de Jehová, mediante el cual los cielos serán destruidos por las llamas y los elementos se derretirán por el intenso calor." },
    { reference: "2 Pedro 3:13", text: "Pero hay unos nuevos cielos y una nueva tierra que esperamos según su promesa, y en ellos reinará la justicia." },
  ],
  "LEE 2 Corintios 6:1, 2": [
    { reference: "2 Corintios 6:1", text: "Como colaboradores de él, nosotros también les suplicamos que no acepten la bondad inmerecida de Dios y luego pierdan de vista el objetivo de esta." },
    { reference: "2 Corintios 6:2", text: "Porque él dice: “Te oí en un tiempo favorable y te ayudé en un día de salvación”. ¡Ahora es el tiempo especialmente favorable! ¡Ahora es el día de salvación!" },
  ],
};

// ============================================
// DATOS DEL ARTÍCULO 58
// ============================================
export const article58: ArticleData = {
  metadata: {
    articleNumber: 58,
    week: "20-26 Abr",
    month: "Abril",
    year: 2026,
  },
  song: "Canción 49: Alegremos el corazón de Jehová",
  title: "Siga progresando hacia el bautismo",
  biblicalText: "“¡Ahora es el tiempo especialmente favorable!” (2 Cor. 6:2).",
  theme: "Ahora es el momento de desarrollar una amistad fuerte con Jehová y bautizarse.",
  questions: [
    // ==========================================
    // PREGUNTA 1
    // ==========================================
    {
      number: "1",
      textEs: "a) ¿Cuáles son algunas de las bendiciones de bautizarse? b) ¿Qué veremos en este artículo?",
      textLSM: "",
      paragraphs: [1],
      keyPoint: "El bautismo trae una buena conciencia, da un buen ejemplo y es esencial para obtener el perdón de los pecados y la aprobación de Dios.",
      guidingQuestion: "¿Qué tres aspectos se analizarán para ayudar a quienes todavía no se han bautizado?",
      answer: [
        "Al bautizarnos le pedimos a Dios una **buena conciencia** (1 Ped. 3:21).",
        "También damos un **excelente ejemplo** a quienes todavía no han dado ese paso.",
        "El bautismo es esencial para obtener el **perdón de los pecados** y la **aprobación de Dios** (Hech. 2:38-40).",
        "El artículo analizará por qué algunos no se deciden, por qué el fin está **muy cerca** y los beneficios de actuar **sin demora**.",
      ],
      flashcards: [
        {
          question: "¿Qué le pide a Dios quien se bautiza?",
          answer: "Le pide una buena conciencia.",
        },
        {
          question: "¿Qué tres ideas principales analizará el artículo?",
          answer: "Por qué algunos no se deciden, por qué hay que recordar que el fin está cerca y los beneficios de actuar sin demora.",
        },
      ],
      biblicalCards: [
        {
          reference: "1 Pedro 3:21",
          purpose: "El bautismo permite pedirle a Dios una buena conciencia",
          text: "El bautismo, que es a lo que esto corresponde, ahora también los está salvando a ustedes (no al quitar la suciedad del cuerpo, sino al pedirle a Dios una buena conciencia) mediante la resurrección de Jesucristo.",
        },
        {
          reference: "Hechos 2:38-40",
          purpose: "El bautismo está relacionado con el perdón de los pecados y la salvación",
          text: "Pedro les dijo: “Arrepiéntanse, y que cada uno de ustedes se bautice en el nombre de Jesucristo para que sus pecados sean perdonados, y recibirán el regalo del espíritu santo. Porque la promesa es para ustedes y sus hijos, y para todos los que están lejos, para todos a los que llame Jehová nuestro Dios”. Y con muchas otras palabras les dio un testimonio completo y les aconsejó: “Sálvense de esta generación malvada”.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 2 — SECCIÓN: POR QUÉ ALGUNOS NO SE DECIDEN
    // ==========================================
    {
      number: "2",
      textEs: "¿Por qué no se atreven algunos a bautizarse?",
      textLSM: "",
      paragraphs: [2],
      section: "POR QUÉ ALGUNOS NO SE DECIDEN",
      keyPoint: "Algunos no se atreven a bautizarse por miedo a no agradar a Dios o a sufrir oposición.",
      guidingQuestion: "¿Qué textos pueden ayudar a vencer esos dos temores?",
      answer: [
        "Algunos temen que nunca serán **lo suficientemente buenos** para agradar a Dios.",
        "Textos como Salmo 103:13, 14 y Colosenses 3:23 nos recuerdan que Jehová no espera **perfección**, sino que demos lo mejor de nosotros.",
        "Otros tienen miedo de sufrir **oposición**.",
        "En ese caso pueden pedirle a Jehová que los ayude a sentir como el salmista: **“Jehová está de mi parte, no tendré miedo”** (Sal. 118:6).",
      ],
      flashcards: [
        {
          question: "¿Qué puede repasar alguien que siente que no será lo bastante bueno para Jehová?",
          answer: "Textos que lo convenzan de que Jehová no espera perfección y valora que demos lo mejor.",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 103:13, 14",
          purpose: "Jehová comprende nuestras limitaciones y nos trata con misericordia",
          text: "Tal como un padre les muestra misericordia a sus hijos, Jehová les ha mostrado misericordia a los que le temen. Porque él sabe bien cómo estamos formados, se acuerda de que somos polvo.",
        },
        {
          reference: "Colosenses 3:23",
          purpose: "Jehová valora que le demos lo mejor de nosotros",
          text: "Cualquier cosa que ustedes hagan, háganla con toda el alma como si fuera para Jehová y no para los hombres.",
        },
        {
          reference: "Salmo 118:6",
          purpose: "Jehová puede ayudarnos a vencer el miedo a la oposición",
          text: "Jehová está de mi parte, no tendré miedo. ¿Qué puede hacerme el hombre?",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 3
    // ==========================================
    {
      number: "3",
      textEs: "¿Por qué postergan algunos la decisión de bautizarse? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [3],
      imageCaption: "Pablo y Silas le predicaron al carcelero y su familia, y ellos enseguida se bautizaron. (Vea el párrafo 3).",
      keyPoint: "Algunos postergan el bautismo porque creen que no tienen suficiente conocimiento, pero el carcelero de Filipos actuó enseguida cuando entendió la verdad.",
      guidingQuestion: "¿Qué requisitos básicos indican que alguien está listo para bautizarse?",
      answer: [
        "Algunos postergan el bautismo porque piensan que no tienen **suficiente conocimiento bíblico**.",
        "El carcelero de Filipos y su familia aprendieron verdades importantes y fueron bautizados **enseguida** (Hech. 16:25-33).",
        "Si una persona conoce a Jehová, lo ama, comprende las enseñanzas básicas, se ha **arrepentido** y quiere obedecerlo, está lista para bautizarse.",
        "Lo importante es amar a Jehová con **todo el corazón** y estar decidido a obedecerle (Mar. 12:30).",
      ],
      flashcards: [
        {
          question: "¿Qué demuestra el ejemplo del carcelero de Filipos?",
          answer: "Que no hace falta saberlo todo para bautizarse; hay que entender la verdad básica y estar decidido a obedecer a Jehová.",
        },
      ],
      biblicalCards: [
        {
          reference: "Hechos 16:25-33",
          purpose: "El carcelero y su familia no postergaron el bautismo cuando entendieron la verdad",
          text: "Como a medianoche, Pablo y Silas estaban orando y alabando a Dios con canciones, y los presos los estaban escuchando. De repente hubo un terremoto tan grande que sacudió los cimientos de la cárcel. Al instante se abrieron todas las puertas y se soltaron las cadenas de todos. Luego el carcelero preguntó: “Señores, ¿qué tengo que hacer para salvarme?”. Ellos respondieron: “Cree en el Señor Jesús, y tú y tu casa serán salvados”. Entonces le predicaron la palabra de Jehová a él y a todos los de su casa. Enseguida, él y todos los de su casa fueron bautizados.",
        },
        {
          reference: "Marcos 12:30",
          purpose: "Quien se bautiza debe amar a Jehová de todo corazón",
          text: "Ama a Jehová tu Dios con todo tu corazón, con toda tu alma, con toda tu mente y con todas tus fuerzas.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 4
    // ==========================================
    {
      number: "4",
      textEs: "¿Cuál es otra razón por la que algunos no se atreven a bautizarse? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [4],
      imageCaption: "Algunos quieren agradar a Dios, pero les preocupan los sacrificios que tendrán que hacer para servirle. (Vea el párrafo 4).",
      keyPoint: "Algunos se centran demasiado en el precio del bautismo: los sacrificios, los cambios y el miedo a fallar después.",
      guidingQuestion: "¿Qué temores relacionados con el precio de servir a Jehová menciona el párrafo?",
      answer: [
        "Algunos no se atreven porque se centran demasiado en el **precio** que conlleva bautizarse.",
        "Es bueno calcular el precio de las decisiones importantes (Luc. 14:27-30), pero no debemos enfocarnos solo en los **sacrificios**.",
        "A algunos les cuesta renunciar a una vida que les gusta o temen no vivir a la altura de las **normas de Jehová**.",
        "También puede darles miedo cometer un pecado grave después de bautizarse.",
      ],
      flashcards: [
        {
          question: "¿Por qué no basta con mirar solo el precio de bautizarse?",
          answer: "Porque eso puede hacer que la persona se concentre demasiado en los sacrificios y pierda de vista el valor de lo que recibirá.",
        },
      ],
      biblicalCards: [
        {
          reference: "Lucas 14:27-30",
          purpose: "Jesús enseñó que hay que calcular el precio de ser discípulo",
          text: "El que no carga con su madero de tormento y me sigue no puede ser mi discípulo. Por ejemplo, ¿quién de ustedes que quiere construir una torre no se sienta antes a calcular los gastos y ver si tiene suficiente para terminarla? No sea que ponga los cimientos pero no pueda acabarla, y todos los que lo vean comiencen a burlarse de él diciendo: ‘Este hombre comenzó a construir, pero no pudo terminar’.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 5
    // ==========================================
    {
      number: "5",
      textEs: "¿Qué debemos tener en cuenta al pensar en bautizarnos? (Mateo 13:44-46).",
      textLSM: "",
      paragraphs: [5],
      readText: "LEE Mateo 13:44-46",
      keyPoint: "Al pensar en bautizarnos, debemos centrarnos en el inmenso valor de la amistad con Jehová y no solo en los cambios que debemos hacer.",
      guidingQuestion: "¿Qué tesoros consigue quien se bautiza?",
      answer: [
        "Al pensar en bautizarnos no debemos centrarnos solo en el **precio**, sino en el **valor** de lo que conseguiremos.",
        "La amistad con Jehová, la esperanza de vivir para siempre y la familia espiritual son auténticos **tesoros**.",
        "Jesús comparó el Reino con un **tesoro** y una **perla muy valiosa** (Mat. 13:44-46).",
        "Si estamos convencidos de ese valor, haremos con gusto los cambios necesarios para bautizarnos.",
      ],
      flashcards: [
        {
          question: "¿Qué tres tesoros menciona el párrafo?",
          answer: "La amistad con Jehová, la esperanza de vivir para siempre y la familia espiritual.",
        },
      ],
      biblicalCards: [
        {
          reference: "Mateo 13:44-46",
          purpose: "Jesús enseñó que el Reino vale cualquier sacrificio",
          text: "El Reino de los cielos es como un tesoro que estaba escondido en un campo y que un hombre encontró. El hombre lo volvió a esconder y, de la alegría que le dio, fue y vendió todo lo que tenía y compró ese campo. El Reino de los cielos también es como un comerciante viajero que buscaba perlas finas. Al encontrar una perla muy valiosa, se fue y enseguida vendió todas las cosas que tenía y la compró.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 6
    // ==========================================
    {
      number: "6",
      textEs: "¿Qué nos puede ayudar a tener un corazón que sea receptivo?",
      textLSM: "",
      paragraphs: [6],
      keyPoint: "Si sentimos que el corazón está dividido, podemos pedirle a Jehová que nos dé un corazón nuevo y receptivo a su guía.",
      guidingQuestion: "¿Qué clase de corazón produce fruto según la parábola del sembrador?",
      answer: [
        "Jesús explicó que algunas clases de corazón impiden progresar, pero otras reciben el mensaje con un **corazón sincero y bueno** (Luc. 8:5-15).",
        "Si sentimos que nuestro corazón está dividido, no debemos **rendirnos**.",
        "Con la ayuda de Dios podemos conseguir **un corazón nuevo** y receptivo a su guía (Ezeq. 18:31; 36:26).",
        "Podemos pedirle a Jehová que ablande nuestro corazón para que la semilla del Reino **florezca**.",
      ],
      flashcards: [
        {
          question: "¿Qué podemos pedirle a Jehová si sentimos que nuestro corazón está dividido?",
          answer: "Que nos ayude a tener un corazón nuevo, receptivo y dispuesto a aceptar su guía.",
        },
      ],
      biblicalCards: [
        {
          reference: "Lucas 8:5-15",
          purpose: "Jesús explicó qué tipo de corazón permite que el mensaje del Reino produzca fruto",
          text: "Un sembrador salió a sembrar sus semillas. Algunas cayeron junto al camino, otras sobre roca, otras entre espinos y otras en la tierra buena. Jesús explicó: “La semilla es la palabra de Dios”. Las que cayeron en la tierra buena son “los que, después de oír la palabra con un corazón sincero y bueno, la retienen y dan fruto con aguante”.",
        },
        {
          reference: "Ezequiel 18:31",
          purpose: "Jehová invita a conseguir un corazón nuevo",
          text: "Líbrense de todas las ofensas que han cometido y consigan un corazón nuevo y un espíritu nuevo. Pues ¿por qué deberían morir, oh, casa de Israel?",
        },
        {
          reference: "Ezequiel 36:26",
          purpose: "Jehová puede darnos un corazón receptivo",
          text: "Les daré un corazón nuevo y pondré dentro de ustedes un espíritu nuevo. Quitaré de su cuerpo el corazón de piedra y les daré un corazón de carne.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 7, 8
    // ==========================================
    {
      number: "7, 8",
      textEs: "¿Por qué no progresan hacia el bautismo algunos jóvenes? (Vea también la imagen).",
      textLSM: "",
      paragraphs: [7, 8],
      imageCaption: "¿Qué tal si hablas con tus padres sobre el tema de bautizarte? (Mira el párrafo 8).",
      keyPoint: "Algunos jóvenes se frenan por la influencia de maestros, compañeros o incluso padres que no los animan a ponerse metas espirituales.",
      guidingQuestion: "¿Qué puede hacer un joven si quiere progresar espiritualmente?",
      answer: [
        "Algunos jóvenes se dejan influir por quienes promueven ideas contrarias a las **normas de Dios** (Sal. 1:1, 2; Prov. 7:1-5).",
        "Para evitar ese peligro, pueden imitar al salmista y reflexionar en los **recordatorios de Jehová** (Sal. 119:99).",
        "Otros jóvenes no reciben suficiente apoyo espiritual de sus **padres**.",
        "Si un joven siente eso, puede hablar con ellos del tema; la edad no es una barrera para ser un buen **amigo de Jehová** (Prov. 20:11).",
      ],
      flashcards: [
        {
          question: "¿Qué puede proteger a un joven de consejos contrarios a las normas de Dios?",
          answer: "Reflexionar en los recordatorios de Jehová y confiar en su sabiduría.",
        },
        {
          question: "¿Qué puede hacer un joven si siente que sus padres podrían apoyarlo más?",
          answer: "Hablar con ellos sobre su deseo de progresar hacia el bautismo.",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 1:1, 2",
          purpose: "Los jóvenes deben evitar consejos que los alejen de Jehová",
          text: "Feliz el hombre que no anda según los consejos de los malvados, que no se detiene en el camino de los pecadores, que no se sienta en el asiento de los burlones, sino que disfruta con la ley de Jehová; día y noche lee su ley y medita en ella.",
        },
        {
          reference: "Proverbios 7:1-5",
          purpose: "Guardar los mandamientos de Jehová protege de influencias peligrosas",
          text: "Hijo mío, pon en práctica mis palabras y atesora mis mandamientos. Cumple mis mandamientos y vive, valora mis enseñanzas como a la niña de tus ojos. Átalos a tus dedos; escríbelos en la tablilla de tu corazón. Dile a la sabiduría “Tú eres mi hermana” y al entendimiento llámalo pariente para que te protejan de la mujer descarriada, de la mujer inmoral y sus palabras seductoras.",
        },
        {
          reference: "Salmo 119:99",
          purpose: "Reflexionar en los recordatorios de Jehová da verdadera perspicacia",
          text: "Soy más perspicaz que todos mis maestros porque reflexiono en tus recordatorios.",
        },
        {
          reference: "Proverbios 20:11",
          purpose: "La edad no impide que alguien demuestre una conducta correcta",
          text: "Hasta un niño deja ver por sus acciones si su comportamiento es puro y correcto.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 9
    // ==========================================
    {
      number: "9",
      textEs: "¿Por qué retrasan algunos el bautismo?",
      textLSM: "",
      paragraphs: [9],
      keyPoint: "Algunos retrasan el bautismo por presión de grupo, pero la dedicación es una promesa personal entre cada uno y Jehová.",
      guidingQuestion: "¿Por qué no debería depender de otros la fecha de nuestro bautismo?",
      answer: [
        "Algunos retrasan el bautismo por **presión de grupo**.",
        "Tal vez un amigo o familiar les pida que lo esperen para bautizarse juntos.",
        "No hay nada malo en bautizarse el mismo día que seres queridos, pero esa no debería ser una razón de peso para **posponer** el bautismo.",
        "La dedicación es una promesa **personal** entre cada uno de nosotros y Jehová (Rom. 14:12).",
      ],
      flashcards: [
        {
          question: "¿Por qué no debe depender de otros nuestra decisión de bautizarnos?",
          answer: "Porque la dedicación es una promesa personal entre cada uno y Jehová.",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 14:12",
          purpose: "Cada persona responde por sí misma ante Dios",
          text: "De manera que cada uno de nosotros rendirá cuentas de sí mismo a Dios.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 10 — SECCIÓN: POR QUÉ TENER PRESENTE QUE EL FIN ESTÁ MUY CERCA
    // ==========================================
    {
      number: "10",
      textEs: "¿Por qué algunos no hacen todos los cambios necesarios para bautizarse?",
      textLSM: "",
      paragraphs: [10],
      section: "POR QUÉ TENER PRESENTE QUE EL FIN ESTÁ MUY CERCA",
      keyPoint: "Algunos no hacen todos los cambios porque creen que todavía tienen mucho tiempo antes de que llegue el fin.",
      guidingQuestion: "¿Qué advertencia de Jesús muestra que no es sensato esperar?",
      answer: [
        "Algunos no progresan porque creen que tienen **mucho tiempo** para hacer cambios.",
        "Esa forma de pensar no es sensata, porque no sabemos cuándo llegará el fin.",
        "Jesús dijo: **“Estén siempre preparados”**.",
        "El Hijo del Hombre viene a la hora en que menos se lo esperan (Luc. 12:40).",
      ],
      flashcards: [
        {
          question: "¿Qué idea puede impedir que alguien haga los cambios necesarios?",
          answer: "Pensar que tiene mucho tiempo antes de que llegue el fin.",
        },
      ],
      biblicalCards: [
        {
          reference: "Lucas 12:40",
          purpose: "Jesús advirtió que debemos estar siempre preparados",
          text: "También ustedes, estén siempre preparados, porque el Hijo del Hombre viene a la hora en que menos se lo esperan.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 11
    // ==========================================
    {
      number: "11",
      textEs: "Según Salmo 119:60, ¿qué sentimos por las normas de Jehová cuanto más lo conocemos?",
      textLSM: "",
      paragraphs: [11],
      readText: "LEE Salmo 119:60",
      keyPoint: "Cuanto más conocemos a Jehová, más queremos obedecer sus normas enseguida, porque entendemos que son para nuestro bien.",
      guidingQuestion: "¿Por qué el momento de hacer lo correcto es ahora?",
      answer: [
        "Lo que nos motiva a dedicarnos y bautizarnos es el **amor por Jehová** y por sus normas.",
        "Cuanto más conocemos a Jehová, más vemos que sus normas son para nuestro **bien**.",
        "Por eso queremos obedecerlas **rápido y sin demora** (Sal. 119:60).",
        "Santiago recordó que no sabemos qué será de nuestra vida mañana; el momento de hacer lo **correcto** es ahora (Sant. 4:13-17).",
      ],
      flashcards: [
        {
          question: "¿Qué sentimos por las normas de Jehová cuanto más lo conocemos?",
          answer: "Queremos obedecerlas enseguida porque vemos que son para nuestro bien.",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 119:60",
          purpose: "El amor por Jehová nos impulsa a obedecer sin demora",
          text: "Rápido y sin demora cumplo tus mandamientos.",
        },
        {
          reference: "Santiago 4:13-17",
          purpose: "No sabemos qué será de nuestra vida mañana, así que debemos hacer lo correcto ahora",
          text: "Ahora escuchen, ustedes que dicen “Hoy o mañana iremos a tal ciudad y allí pasaremos un año, haremos negocios y sacaremos ganancias”, cuando ustedes no saben qué será de su vida mañana. Porque son una neblina que aparece por un poco de tiempo y luego desaparece. En vez de eso, deberían decir “Si Jehová quiere, viviremos y haremos esto o aquello”. Pero ahora ustedes se sienten orgullosos de sus arrogantes alardes. Todo ese tipo de alardes son malos. Por lo tanto, si alguien sabe hacer lo que es correcto pero no lo hace, ya está pecando.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 12
    // ==========================================
    {
      number: "12",
      textEs: "¿Qué aprendemos de la parábola de la viña?",
      textLSM: "",
      paragraphs: [12],
      keyPoint: "Los trabajadores de la última hora no fueron perezosos; respondieron enseguida cuando fueron llamados.",
      guidingQuestion: "¿Cómo debemos responder cuando Jesús nos llama a seguirlo?",
      answer: [
        "En la parábola de la viña, algunos trabajaron solo **una hora** y recibieron el mismo salario que los demás.",
        "Pero no empezaron tarde por pereza, sino porque **nadie los había contratado**.",
        "En cuanto los llamaron, fueron **enseguida** (Mat. 20:1-16).",
        "Hoy Jesús nos ha llamado a seguirlo y a predicar, así que debemos responder en cuanto **oímos** la llamada.",
      ],
      flashcards: [
        {
          question: "¿Por qué no trabajaron antes los de la última hora?",
          answer: "Porque nadie los había contratado; cuando los llamaron, fueron enseguida.",
        },
      ],
      biblicalCards: [
        {
          reference: "Mateo 20:1-16",
          purpose: "Los trabajadores respondieron enseguida cuando fueron llamados",
          text: "El dueño de una viña salió a contratar trabajadores. Algunos trabajaron todo el día y otros solo desde la hora undécima. Cuando anocheció, todos recibieron un denario. A los últimos les preguntaron por qué habían estado todo el día sin trabajo, y ellos contestaron: “Porque nadie nos ha contratado”. Entonces el dueño les dijo: “Vayan ustedes también a la viña”. Jesús concluyó: “Así, los últimos serán primeros y los primeros serán últimos”.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 13
    // ==========================================
    {
      number: "13",
      textEs: "¿Qué aprendemos de la esposa de Lot?",
      textLSM: "",
      paragraphs: [13],
      keyPoint: "La esposa de Lot muestra que dejar los cambios para el último momento puede ser peligroso y que la puerta de la salvación no estará abierta indefinidamente.",
      guidingQuestion: "¿Por qué es peligroso posponer los cambios espirituales?",
      answer: [
        "Jesús dijo: **“Acuérdense de la esposa de Lot”** (Luc. 17:31-35).",
        "Ella sabía que la destrucción era inminente, pero parece que estaba demasiado apegada a lo que dejaba atrás (Gén. 19:23-26).",
        "El relato muestra que hacer cambios en el último momento puede ser **más difícil** de lo que imaginamos.",
        "La puerta de la salvación no estará abierta indefinidamente; llegará el momento en que se cerrará con **llave** (Luc. 13:24, 25).",
      ],
      flashcards: [
        {
          question: "¿Qué nos enseña la esposa de Lot sobre posponer cambios?",
          answer: "Que dejar los cambios para el último momento puede ser peligroso si el corazón sigue apegado a lo que dejamos atrás.",
        },
      ],
      biblicalCards: [
        {
          reference: "Lucas 17:31-35",
          purpose: "Jesús advirtió que no debemos volver a las cosas que dejamos atrás",
          text: "Ese día, el que esté en la azotea pero tenga sus cosas dentro de la casa, que no baje a recogerlas; igualmente, el que esté en el campo, que no vuelva a las cosas que dejó atrás. Acuérdense de la esposa de Lot. El que trate de mantener su vida a salvo la perderá, pero el que la pierda la conservará.",
        },
        {
          reference: "Génesis 19:23-26",
          purpose: "La esposa de Lot miró atrás cuando la destrucción ya era inminente",
          text: "Ya había salido el sol en la región cuando Lot llegó a Zóar. Entonces Jehová hizo llover fuego y azufre sobre Sodoma y Gomorra. Así él destruyó estas ciudades. Destruyó el distrito entero, incluidos los habitantes de las ciudades y toda la vegetación. Pero la esposa de Lot iba detrás de él y empezó a mirar atrás. Entonces se convirtió en una columna de sal.",
        },
        {
          reference: "Lucas 13:24, 25",
          purpose: "La oportunidad de salvarse no estará abierta indefinidamente",
          text: "Esfuércense al máximo por entrar por la puerta angosta, porque les digo que muchos tratarán de entrar pero no podrán. Cuando el dueño de la casa se levante y cierre la puerta con llave, ustedes se quedarán de pie afuera, tocando a la puerta y diciendo: ‘¡Señor, ábrenos!’. Pero él les responderá: ‘Yo no sé de dónde son’.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 14
    // ==========================================
    {
      number: "14",
      textEs: "¿Qué efecto debería tener en usted ver el cumplimiento de las profecías sobre el fin?",
      textLSM: "",
      paragraphs: [14],
      keyPoint: "Ver cómo se cumplen las profecías sobre el fin debe motivarnos a estar vigilantes y seguir dando pasos hacia el bautismo.",
      guidingQuestion: "¿Por qué el ejemplo de los cristianos del siglo primero nos ayuda a actuar?",
      answer: [
        "Lo que pasa en el mundo demuestra que se están cumpliendo las **profecías** sobre el fin.",
        "Aunque algunas profecías no se estén cumpliendo donde vivimos, verlas en otros lugares debe motivarnos a hacer cambios.",
        "Pedro les dijo a cristianos que vivían lejos de Jerusalén que estuvieran **vigilantes** porque “el fin de todas las cosas se ha acercado” (1 Ped. 4:7).",
        "De manera parecida, ver el cumplimiento de las profecías debe impulsarnos a seguir progresando hacia el **bautismo**.",
      ],
      flashcards: [
        {
          question: "¿Qué efecto debe tener en nosotros ver el cumplimiento de las profecías?",
          answer: "Debe motivarnos a estar vigilantes y dar pasos hacia el bautismo.",
        },
      ],
      biblicalCards: [
        {
          reference: "1 Pedro 4:7",
          purpose: "Pedro animó a los cristianos a mantenerse vigilantes",
          text: "Pero el fin de todas las cosas se ha acercado. Por lo tanto, tengan buen juicio y estén vigilantes en cuanto a las oraciones.",
        },
        {
          reference: "1 Pedro 1:1",
          purpose: "Pedro escribió a cristianos que vivían lejos de Jerusalén",
          text: "De Pedro, apóstol de Jesucristo, a los residentes temporales esparcidos por el Ponto, Galacia, Capadocia, Asia y Bitinia, a los escogidos.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 15
    // ==========================================
    {
      number: "15",
      textEs: "¿Con qué actitud debemos esperar el día de Jehová? (2 Pedro 3:10-13).",
      textLSM: "",
      paragraphs: [15],
      readText: "LEE 2 Pedro 3:10-13",
      keyPoint: "Debemos estar muy pendientes del día de Jehová, desearlo intensamente y demostrarlo con actos santos de conducta y hechos de devoción.",
      guidingQuestion: "¿Cómo se sentiría Jehová al vernos dedicarnos y bautizarnos?",
      answer: [
        "Pedro dijo que debemos estar **muy pendientes** del día de Jehová y desearlo **intensamente** (2 Ped. 3:10-13).",
        "Esa actitud nos impulsa a realizar **actos santos de conducta** y **hechos de devoción a Dios**.",
        "Tener presente que el día de Jehová está cerca nos ayuda a estar **preparados**.",
        "Jehová se pone muy feliz al vernos actuar así, y más aún al vernos **dedicarnos y bautizarnos**.",
      ],
      flashcards: [
        {
          question: "¿Qué debe producir en nosotros estar pendientes del día de Jehová?",
          answer: "Actos santos de conducta y hechos de devoción a Dios.",
        },
      ],
      biblicalCards: [
        {
          reference: "2 Pedro 3:10-13",
          purpose: "Pedro explicó con qué actitud debemos esperar el día de Jehová",
          text: "El día de Jehová vendrá como un ladrón. Ese día los cielos desaparecerán con un estruendo, y los elementos, intensamente calientes, se disolverán, y la tierra y las obras que hay en ella serán puestas al descubierto. Ya que todas estas cosas se disolverán de este modo, ¡piensen en la clase de personas que deben ser! Deben realizar actos santos de conducta y hechos de devoción a Dios mientras esperan y están muy pendientes de la presencia del día de Jehová. Pero hay unos nuevos cielos y una nueva tierra que esperamos según su promesa, y en ellos reinará la justicia.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 16 — SECCIÓN: LOS BENEFICIOS DE ACTUAR SIN DEMORA
    // ==========================================
    {
      number: "16",
      textEs: "¿Cuál es el mejor momento de progresar hacia el bautismo? (2 Corintios 6:1, 2; vea también las imágenes).",
      textLSM: "",
      paragraphs: [16],
      section: "LOS BENEFICIOS DE ACTUAR SIN DEMORA",
      readText: "LEE 2 Corintios 6:1, 2",
      imageCaption: "El ejemplo del eunuco etíope nos enseña que el mejor momento de progresar hacia el bautismo es ahora. (Vea el párrafo 16).",
      keyPoint: "El mejor momento de progresar hacia el bautismo es ahora, como lo demuestran las palabras de Pablo y el ejemplo del eunuco etíope.",
      guidingQuestion: "¿Qué hizo el eunuco etíope cuando entendió la verdad?",
      answer: [
        "El mejor momento de progresar hacia el bautismo es **ahora** (2 Cor. 6:1, 2).",
        "El eunuco etíope actuó en cuanto comprendió la verdad y vio la oportunidad de bautizarse.",
        "No pensó que primero debía aprender mucho más ni esperar otra ocasión.",
        "Preguntó: **“¿Qué impide que me bautice?”**, y después de bautizarse siguió feliz su camino (Hech. 8:26, 27, 35-39).",
      ],
      flashcards: [
        {
          question: "¿Qué pregunta hizo el eunuco etíope?",
          answer: "“¿Qué impide que me bautice?”.",
        },
        {
          question: "¿Qué efecto tuvo en él bautizarse?",
          answer: "Siguió feliz su camino.",
        },
      ],
      biblicalCards: [
        {
          reference: "2 Corintios 6:1, 2",
          purpose: "Ahora es el momento favorable para actuar",
          text: "Como colaboradores de él, nosotros también les suplicamos que no acepten la bondad inmerecida de Dios y luego pierdan de vista el objetivo de esta. Porque él dice: “Te oí en un tiempo favorable y te ayudé en un día de salvación”. ¡Ahora es el tiempo especialmente favorable! ¡Ahora es el día de salvación!",
        },
        {
          reference: "Hechos 8:26, 27, 35-39",
          purpose: "El eunuco etíope se bautizó en cuanto se le presentó la oportunidad",
          text: "El ángel de Jehová le habló a Felipe y le dijo: “Prepárate y ve hacia el sur, al camino que baja de Jerusalén a Gaza”. Felipe se preparó y se encontró a un eunuco etíope. Felipe empezó a hablar y, comenzando por este pasaje de las Escrituras, le declaró las buenas noticias acerca de Jesús. Mientras iban por el camino, llegaron a una masa de agua, y el eunuco le dijo: “¡Mira! Aquí hay agua. ¿Qué impide que me bautice?”. Así que mandó parar el carro y tanto Felipe como el eunuco se metieron en el agua. Entonces Felipe lo bautizó. Cuando salieron del agua, el eunuco siguió feliz su camino.",
        },
      ],
    },
    // ==========================================
    // PREGUNTA 17
    // ==========================================
    {
      number: "17",
      textEs: "¿De qué podemos estar seguros?",
      textLSM: "",
      paragraphs: [17],
      keyPoint: "Jehová quiere ayudarnos a vencer cualquier temor, inquietud o influencia que nos impida progresar hacia el bautismo.",
      guidingQuestion: "¿Qué beneficios recibiremos al bautizarnos?",
      answer: [
        "Si algo nos frena, podemos estar seguros de que Jehová quiere ayudarnos a desarrollar una **fuerte amistad** con él (Rom. 2:4).",
        "Con su apoyo podemos vencer cualquier **temor**, **inquietud** o influencia que nos impida progresar.",
        "Al bautizarnos tendremos una **buena conciencia** ante Dios y las cosas que dejamos atrás ya no parecerán tan importantes (Filip. 3:8, 13).",
        "También podremos esperar con emoción **las cosas por venir**, es decir, las promesas de Jehová para quienes se dedican y se bautizan (Hech. 3:19).",
      ],
      flashcards: [
        {
          question: "¿Qué quiere hacer Jehová por quienes desean bautizarse?",
          answer: "Ayudarlos a desarrollar una fuerte amistad con él y a vencer lo que los frena.",
        },
      ],
      biblicalCards: [
        {
          reference: "Romanos 2:4",
          purpose: "La bondad de Jehová nos ayuda a acercarnos a él",
          text: "¿O es que desprecias las riquezas de su bondad, tolerancia y paciencia porque no sabes que en su bondad Dios está tratando de llevarte hacia el arrepentimiento?",
        },
        {
          reference: "Filipenses 3:8, 13",
          purpose: "Después de acercarnos a Jehová, las cosas que dejamos atrás pierden valor",
          text: "Es más, considero también que todas las cosas son pérdida debido al incalculable valor del conocimiento de Cristo Jesús mi Señor. Por él he aceptado la pérdida de todas las cosas y las veo como un montón de basura, para ganar a Cristo. Hermanos, no creo haberlo obtenido todavía. Pero una cosa es segura: olvidando las cosas que quedan atrás y estirándome para alcanzar las cosas por venir.",
        },
        {
          reference: "Hechos 3:19",
          purpose: "Jehová borra los pecados de quienes se arrepienten",
          text: "De modo que arrepiéntanse y den media vuelta para que sus pecados sean borrados, y así el propio Jehová haga venir tiempos de alivio.",
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
      content: "¿HA DADO usted el paso de dedicarse a Jehová y bautizarse? ¡Qué decisión tan buena! Al hacerlo le pidió a Dios una buena conciencia (1 Ped. 3:21). Y, además, les dio un excelente ejemplo a quienes todavía no han dado ese paso. ¿Y si usted todavía no se ha bautizado? Seguro que ama a Jehová y quiere hacer su voluntad. Sabe que para obtener el perdón de sus pecados y la aprobación de Dios es esencial bautizarse (Hech. 2:38-40). Aun así, puede que haya algo que lo esté frenando. Este artículo le será de mucha ayuda. Veremos 1) por qué no se deciden algunos a bautizarse, 2) por qué es bueno tener presente que el fin está muy cerca y 3) cuáles son los beneficios de esforzarse sin demora por alcanzar esa meta.",
      summary: "El bautismo permite pedirle a Dios una **buena conciencia** y da un **buen ejemplo** a otros. Es esencial para obtener el **perdón de los pecados** y la aprobación de Dios. El artículo ayudará a vencer lo que pudiera estar frenando esa decisión.",
    },
    {
      number: 2,
      content: "Hay quienes quieren servir a Jehová, pero no se atreven a bautizarse por miedo. Por ejemplo, quizás teman que nunca serán lo suficientemente buenos como para agradar a Dios. Si usted se siente así, puede repasar textos bíblicos que lo convenzan de que Dios no espera que sea perfecto y de que él estará contento con su adoración mientras usted le dé lo mejor de sí (Sal. 103:13, 14; Col. 3:23). Por otro lado, si le da miedo sufrir oposición, pídale a Jehová que lo ayude a sentirse como el salmista que escribió: “Jehová está de mi parte, no tendré miedo. ¿Qué puede hacerme el hombre?” (Sal. 118:6).",
      summary: "Algunos tienen **miedo** de no ser lo suficientemente buenos o de sufrir **oposición**. Jehová no espera perfección, sino que demos lo **mejor**. Él puede ayudarnos a decir: **“Jehová está de mi parte, no tendré miedo”**.",
    },
    {
      number: 3,
      content: "Algunos postergan la decisión de bautizarse porque piensan que no tienen suficiente conocimiento bíblico. Pero, en el fondo, ¿cuánto conocimiento hay que tener? Pensemos en el siguiente relato. Mientras Pablo y Silas estaban en la cárcel, ocurrió un fuerte terremoto y ellos quedaron libres. Después, aprovecharon para predicarle al carcelero y a los de su casa. El hombre y su familia probablemente comprendieron que Dios había hecho un milagro para liberar a sus siervos. Y esa noche aprendieron muchas enseñanzas importantes sobre Jehová y Jesús. ¿Cuál fue el resultado? “Enseguida, él y todos los de su casa fueron bautizados” (Hech. 16:25-33). Si usted conoce a Jehová, lo ama de todo corazón, comprende las enseñanzas básicas de la Biblia, se ha arrepentido de sus pecados y está decidido a obedecer a Jehová, está listo para bautizarse (Mar. 12:30).",
      summary: "Algunos postergan el bautismo porque creen que no tienen **suficiente conocimiento**. El carcelero de Filipos y su familia aprendieron verdades importantes y se bautizaron **enseguida**. Si alguien ama a Jehová, entiende lo básico, se arrepiente y quiere obedecer, está listo.",
    },
    {
      number: 4,
      content: "Algunos quieren agradar a Dios, pero no se atreven a bautizarse porque se centran en el precio que conlleva dar ese paso. Claro, es bueno calcular el precio de cualquier decisión que tomemos (Luc. 14:27-30). Pero hay quienes se preocupan demasiado por los sacrificios que tendrán que hacer para servir a Jehová. Eso es lo que le pasaba a Candace. Aunque ella conoció la verdad de niña, no la aceptó. Más tarde, siendo ya adulta, empezó a estudiar la Biblia de nuevo. Ella cuenta: “Yo sabía lo que tenía que hacer para agradar a Jehová, pero a una parte de mí le gustaba mucho la vida que llevaba. Sabía que no me iba a ser nada fácil renunciar a esas cosas”. Otros piensan que no podrán vivir a la altura de las normas de Jehová. Les da miedo cometer un pecado grave después de bautizarse y ser sacados de la congregación. ¿Qué puede hacer usted si le preocupa alguna de estas cosas?",
      summary: "Algunos se centran demasiado en el **precio** del bautismo: los sacrificios, los cambios y el temor a fallar. Es bueno calcular el precio, pero no dejar que el miedo a renunciar a ciertas cosas nos **paralice**.",
    },
    {
      number: 5,
      content: "Cuando vamos a comprar algo, no solo tenemos en cuenta su precio, sino también su valor. Si vemos que el valor es mucho mayor que el precio, seguramente lo compraremos enseguida. Igualmente, al pensar en bautizarnos, no debemos centrarnos solo en el precio que pagaremos —los cambios que debemos hacer—, sino en el inmenso valor de lo que conseguiremos: una buena amistad con Jehová. Jesús usó dos comparaciones para enseñar precisamente ese punto (lea Mateo 13:44-46). En cada una, un hombre vendió con gusto todo lo que tenía para comprar algo valioso que había encontrado. Y usted también ha encontrado algo de enorme valor: la verdad del Reino. Si se pregunta si vale la pena hacer los cambios necesarios para poder bautizarse, medite en las comparaciones de Jesús. Podría preguntarse: “¿Estoy convencido de que he encontrado algo muy valioso? ¿Considero que la amistad con Jehová, la esperanza de vivir para siempre y la cariñosa familia espiritual que me ha dado son auténticos tesoros?”. Sus respuestas le indicarán en qué debe mejorar para poder bautizarse.",
      summary: "No debemos mirar solo el **precio** del bautismo, sino su inmenso **valor**. La amistad con Jehová, la esperanza de vivir para siempre y la familia espiritual son auténticos **tesoros**. Quien valora esos tesoros hace cambios con gusto.",
    },
    {
      number: 6,
      content: "En su parábola del sembrador, Jesús habló de diferentes tipos de corazón en los que caen las semillas del mensaje del Reino. Algunas personas tienen distintas clases de corazones que les impiden progresar. Sin embargo, otras escuchan el mensaje del Reino “con un corazón sincero y bueno”, y ponen en práctica lo que aprenden (Luc. 8:5-15). Si usted siente que su corazón está dividido, no se rinda. Con la ayuda de Dios, puede conseguir “un corazón nuevo”, uno que sea receptivo a su guía. Pídale ayuda para ablandar su corazón a fin de que la semilla del Reino florezca (Ezeq. 18:31; 36:26).",
      summary: "Jesús habló de personas que aceptan el mensaje con un **corazón sincero y bueno**. Si sentimos que nuestro corazón está dividido, no debemos rendirnos. Jehová puede ayudarnos a conseguir **“un corazón nuevo”** y receptivo.",
    },
    {
      number: 7,
      content: "Algunos jóvenes que aman a Jehová no progresan hacia el bautismo debido a la influencia de otras personas. Quizás algunos consejeros escolares les digan a los estudiantes que tengan una mente abierta con respecto a la moralidad y que acepten todos los estilos de vida, incluso los que van en contra de las normas de Dios. Pero seguir ese consejo puede tener terribles consecuencias (Sal. 1:1, 2; Prov. 7:1-5). Joven, ¿qué puedes hacer para evitar este peligro? Seguir el ejemplo del salmista que le dijo a Jehová: “Soy más perspicaz que todos mis maestros porque reflexiono en tus recordatorios” (Sal. 119:99).",
      summary: "Algunos jóvenes se frenan por la **influencia** de personas que contradicen las normas de Dios. Para protegerse, pueden reflexionar en los **recordatorios de Jehová** y confiar en su sabiduría más que en consejos dañinos.",
    },
    {
      number: 8,
      content: "Hay informes que indican que algunos Testigos frenan a sus hijos de dar el paso del bautismo. Se centran demasiado en los estudios y en el futuro trabajo de sus hijos, o simplemente no los animan a ponerse metas espirituales. Joven, ¿sientes que tus padres podrían apoyarte más en tu progreso espiritual? ¿Qué tal si hablas con ellos de este asunto? Y no lo olvides: la edad no es una barrera para ser un buen amigo de Jehová (Prov. 20:11).",
      summary: "Algunos padres no animan lo suficiente a sus hijos a ponerse **metas espirituales**. Si un joven necesita más apoyo, puede hablar con ellos. La edad no es una barrera para ser un buen **amigo de Jehová**.",
    },
    {
      number: 9,
      content: "Algunos que cumplen con los requisitos para bautizarse tal vez retrasen esa decisión debido a la presión de grupo. Por ejemplo, quizás un amigo o un familiar les pida que lo esperen para así bautizarse juntos. Por supuesto, no hay nada de malo en bautizarse el mismo día que nuestros seres queridos. ¿Pero sería esa una razón de peso para posponer el bautismo? Recordemos que la dedicación es una promesa personal entre cada uno de nosotros y Jehová. La decisión de bautizarnos no debe depender de los demás (Rom. 14:12).",
      summary: "Algunos retrasan el bautismo por **presión de grupo** o para esperar a alguien. Pero la dedicación es una promesa **personal** entre cada uno y Jehová. La decisión no debe depender de los demás.",
    },
    {
      number: 10,
      content: "Además de las razones que ya vimos, hay quienes no progresan hacia el bautismo porque creen que tienen mucho tiempo para hacer los cambios antes de que llegue el fin. ¿Es sensato pensar así? Jesús les dio esta advertencia a sus discípulos: “Estén siempre preparados, porque el Hijo del Hombre viene a la hora en que menos se lo esperan” (Luc. 12:40).",
      summary: "Algunos creen que tienen **mucho tiempo** para hacer cambios antes del fin. Jesús advirtió que debemos estar **siempre preparados** porque el Hijo del Hombre viene cuando menos se espera.",
    },
    {
      number: 11,
      content: "Lo que nos motiva a dedicarnos y bautizarnos es el amor por Jehová y sus normas. Cuanto más conocemos a Jehová, más vemos lo mucho que nos quiere y que sus normas son para nuestro bien. Y por eso queremos obedecerlas enseguida (lea Salmo 119:60). El discípulo Santiago explicó otra razón por la que tenemos que seguir los mandamientos de Jehová sin demora: no sabemos qué será de nuestra vida mañana. Quizás no tengamos otro día para “hacer lo que es correcto”. Así que el momento de hacer lo que Jehová nos pide es ahora (Sant. 4:13-17).",
      summary: "El amor por **Jehová** y sus normas nos motiva a dedicarnos y bautizarnos. Cuanto más lo conocemos, más queremos obedecer **rápido y sin demora**. No sabemos qué será de nuestra vida mañana, así que el momento de hacer lo correcto es **ahora**.",
    },
    {
      number: 12,
      content: "Ahora bien, puede que alguien piense: “¿Acaso no dijo Jesús en la parábola de la viña que algunos trabajarían solo una hora y aun así recibirían el mismo salario que quienes trabajaron todo el día?”. Eso es verdad. Pero ¿cuál es la razón por la que no empezaron antes los que trabajaron una hora? Ellos dijeron: “Porque nadie nos ha contratado”. No es que fueran perezosos. Habrían trabajado todo el día, solo es que nadie los había contratado. En cuanto los llamaron para trabajar, ellos fueron enseguida (Mat. 20:1-16). Hoy en día, Jesús nos ha llamado para ser sus seguidores y colaborar en la predicación. Y debemos responder a esa llamada en cuanto la oímos.",
      summary: "Los trabajadores de la última hora no fueron **perezosos**; nadie los había contratado. En cuanto los llamaron, fueron **enseguida**. Nosotros también debemos responder a la llamada de Jesús en cuanto la oímos.",
    },
    {
      number: 13,
      content: "Es posible que quienes están posponiendo su progreso espiritual vean que hacer cambios en el último momento para agradar a Dios es más difícil de lo que imaginaban. Jesús lo sabía y por eso les dijo a sus discípulos: “Acuérdense de la esposa de Lot” (Luc. 17:31-35). Ella sabía muy bien que la destrucción de Sodoma y Gomorra era inminente, pero parece ser que estaba demasiado apegada a las posesiones que estaba dejando atrás (Gén. 19:23-26). Este relato también nos recuerda que la puerta de la salvación no estará abierta indefinidamente. Cuando llegue el momento fijado por Dios, se cerrará con llave, de manera permanente (Luc. 13:24, 25).",
      summary: "La esposa de **Lot** sabía que la destrucción era inminente, pero parece que estaba demasiado apegada a lo que dejaba atrás. El relato muestra que hacer cambios al último momento puede ser muy difícil y que la puerta de la salvación no estará abierta **indefinidamente**.",
    },
    {
      number: 14,
      content: "Lo que pasa cada día en el mundo demuestra que se están cumpliendo las profecías sobre el fin de este sistema. Puede ser que algunas de las cosas que predijo la Biblia no estén ocurriendo en el lugar donde usted vive. Pero al ver que sí están sucediendo en otros lugares debería sentirse motivado a hacer los cambios necesarios para bautizarse lo antes posible. Pensemos en lo que el apóstol Pedro les escribió a algunos cristianos del siglo primero: “Estén vigilantes [o “alerta”]”. ¿Por qué les dio ese consejo? Él mismo dijo: “El fin de todas las cosas se ha acercado” (1 Ped. 4:7; nota). Por lo visto, se estaba refiriendo al fin del sistema judío. Ahora bien, aquellos cristianos vivían lejos de Jerusalén. Así que no se verían afectados directamente por la destrucción de la ciudad (1 Ped. 1:1). Sin embargo, al ver cómo se cumplía esa profecía confiarían más en que Jehová cumpliría el resto de sus promesas. De manera parecida, usted está viendo cómo se cumplen las profecías que muestran que el fin está cerca. Seguro que eso lo motiva a estar vigilante y seguir dando pasos hacia el bautismo.",
      summary: "Ver el cumplimiento de las **profecías** debe motivarnos a hacer cambios y seguir progresando hacia el bautismo. Pedro animó a cristianos lejanos a estar **vigilantes** porque el fin del sistema judío se acercaba. Eso fortalecería su confianza en las promesas de Jehová.",
    },
    {
      number: 15,
      content: "En su segunda carta, Pedro explicó con qué actitud debemos esperar “el día de Jehová”, es decir, el fin de este sistema. En el siglo primero todavía faltaba mucho tiempo para que llegara. Aun así, Pedro les dijo a aquellos cristianos que estuvieran “muy pendientes” de ese día o que lo desearan “intensamente” (lea 2 Pedro 3:10-13; nota). Nosotros también queremos tener presente que ese día está muy cerca y deseamos intensamente que llegue. Por eso nos esforzamos por estar preparados realizando “actos santos de conducta y hechos de devoción a Dios”. ¡Y qué feliz se pone Jehová al vernos actuar así! ¿Se imagina usted cómo se sentirá él al verlo dedicarse y bautizarse?",
      summary: "Debemos estar **muy pendientes** del día de Jehová y desearlo **intensamente**. Esa actitud nos impulsa a realizar **actos santos de conducta** y **hechos de devoción a Dios**. Jehová se alegra al vernos dedicarnos y bautizarnos.",
    },
    {
      number: 16,
      content: "El mejor momento de progresar hacia el bautismo es ahora (lea 2 Corintios 6:1, 2). Pensemos en el excelente ejemplo del eunuco etíope al que Felipe le predicó. En cuanto comprendió la verdad sobre las buenas noticias y se le presentó la oportunidad de bautizarse, no postergó la decisión. No pensó: “Primero quiero aprender más sobre las buenas noticias. Seguro que más adelante encontraremos otro lugar para bautizarme”. Al contrario, le preguntó a Felipe: “¿Qué impide que me bautice?” (Hech. 8:26, 27, 35-39). Y, después de bautizarse, “el eunuco siguió feliz su camino”.",
      summary: "El mejor momento de progresar hacia el bautismo es **ahora**. El eunuco etíope no postergó la decisión cuando entendió la verdad. Preguntó: **“¿Qué impide que me bautice?”** y después siguió feliz su camino.",
      note: "Descripción de las imágenes: Al igual que el eunuco etíope le dijo a Felipe que quería bautizarse, una estudiante de la Biblia les dice a los ancianos que desea bautizarse.",
    },
    {
      number: 17,
      content: "Si hay algo que lo está frenando de dar el paso de bautizarse, puede estar seguro de que Jehová quiere ayudarlo a desarrollar una fuerte amistad con él (Rom. 2:4). Con su apoyo, usted podrá vencer cualquier temor, inquietud o influencia que le esté impidiendo progresar. Cuando se bautice, se sentirá muy feliz al tener una buena conciencia ante Dios y probablemente ya no le parecerán tan importantes “las cosas que quedan atrás” (Filip. 3:8, 13). Entonces podrá esperar lleno de emoción “las cosas por venir”, es decir, el cumplimiento de las promesas que Jehová les hace a quienes se dedican a él y se bautizan (Hech. 3:19).",
      summary: "**Jehová** quiere ayudarnos a desarrollar una fuerte amistad con él. Con su apoyo podemos vencer cualquier **temor**, **inquietud** o influencia. Al bautizarnos tendremos una buena conciencia y podremos mirar con emoción **“las cosas por venir”**.",
    },
  ],
  // ==========================================
  // PREGUNTAS DE REPASO
  // ==========================================
  reviewQuestions: [
    {
      question: "¿Por qué no se deciden algunos a bautizarse?",
      answer: [
        "Algunos tienen **miedo** de no ser lo suficientemente buenos para agradar a Jehová.",
        "Otros temen sufrir **oposición** o creen que no tienen suficiente conocimiento bíblico.",
        "También hay quienes se enfocan demasiado en los **sacrificios** o se dejan frenar por la presión de otros.",
      ],
    },
    {
      question: "¿Por qué no sería sensato postergar el bautismo?",
      answer: [
        "Jesús dijo que debemos estar **siempre preparados**, porque el fin llegará cuando menos se espere.",
        "No sabemos qué será de nuestra vida mañana, así que el momento de hacer lo **correcto** es ahora.",
        "La esposa de Lot nos recuerda que hacer cambios al último momento puede ser **peligroso**.",
      ],
    },
    {
      question: "¿Cuál es el mejor momento de progresar hacia el bautismo?",
      answer: [
        "El mejor momento es **ahora**, porque este es el tiempo especialmente favorable.",
        "El eunuco etíope actuó **sin demora** cuando entendió la verdad y tuvo la oportunidad.",
        "Jehová quiere ayudarnos a vencer cualquier obstáculo y a disfrutar de una **buena conciencia**.",
      ],
    },
  ],
  finalSong: "Canción 38: Jehová te cuidará",
};
