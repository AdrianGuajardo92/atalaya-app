import { AtalayaDatabase, ArticleData } from '@/types/atalaya';

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

      // Artículo 35 (Artículo actual - completo)
      {
        metadata: {
          articleNumber: 35,
          week: "4-10 Nov",
          month: "Agosto",
          year: 2025
        },
        song: "Canción 121: Necesitamos autodominio",
        title: "Cómo ganar la batalla contra los malos deseos",
        biblicalText: "\"No dejen que el pecado siga reinando en sus cuerpos mortales de modo que tengan que obedecer sus deseos\" (ROM. 6:12).",
        theme: "Qué nos ayudará a no desanimarnos cuando tengamos malos deseos y a rechazar las tentaciones.",
        questions: [
          {
            number: "1",
            textEs: "¿Qué lucha tenemos todos?",
            textLSM: "",
            paragraphs: [1]
          },
          {
            number: "2",
            textEs: "¿Qué tentaciones quizás estén enfrentando algunos cristianos y estudiantes de la Biblia?",
            textLSM: "",
            paragraphs: [2]
          },
          {
            number: "3",
            textEs: "¿Qué puede empezar a sentir alguien que está luchando una y otra vez contra el mismo mal deseo?",
            textLSM: "",
            paragraphs: [3]
          },
          {
            number: "4",
            textEs: "a) ¿Qué quiere Satanás que pensemos? b) ¿Por qué estamos seguros de que tenemos las fuerzas para resistir los malos deseos?",
            textLSM: "",
            paragraphs: [4],
            section: "CÓMO QUIERE SATANÁS QUE NOS SINTAMOS"
          },
          {
            number: "5",
            textEs: "¿Cómo sabemos que Jehová está seguro de que podemos vencer en la batalla contra los malos deseos?",
            textLSM: "",
            paragraphs: [5]
          },
          {
            number: "6, 7",
            textEs: "¿Qué otra cosa quiere Satanás que creamos?",
            textLSM: "",
            paragraphs: [6, 7]
          },
          {
            number: "8",
            textEs: "¿Qué otra cosa nos puede hacer creer que no tenemos la aprobación de Dios o las fuerzas para resistir los malos deseos?",
            textLSM: "",
            paragraphs: [8],
            section: "CÓMO NOS PUEDE HACER SENTIR EL PECADO HEREDADO"
          },
          {
            number: "9, 10",
            textEs: "a) ¿Cómo se sintieron Adán y Eva cuando se convirtieron en seres imperfectos? b) ¿Cómo nos sentimos nosotros debido a la imperfección?",
            textLSM: "",
            paragraphs: [9, 10]
          },
          {
            number: "11",
            textEs: "Si sentimos que no tenemos las fuerzas para resistir los malos deseos, ¿qué nos recuerda Romanos 6:12?",
            textLSM: "",
            paragraphs: [11]
          },
          {
            number: "12",
            textEs: "¿Qué debemos hacer si sentimos que Jehová no nos va a dar su aprobación, y por qué?",
            textLSM: "",
            paragraphs: [12]
          },
          {
            number: "13, 14",
            textEs: "¿Por qué sabemos que Jehová no nos quita su aprobación solo por tener un mal deseo?",
            textLSM: "",
            paragraphs: [13, 14]
          },
          {
            number: "15",
            textEs: "Si queremos ganar la batalla contra los malos deseos, ¿por qué tenemos que ser honestos con nosotros mismos?",
            textLSM: "",
            paragraphs: [15],
            section: "CÓMO GANAR LA BATALLA"
          },
          {
            number: "16",
            textEs: "¿Cómo puede fortalecer su determinación de hacer lo que es correcto?",
            textLSM: "",
            paragraphs: [16]
          },
          {
            number: "17",
            textEs: "¿Qué aprendemos de José?",
            textLSM: "",
            paragraphs: [17]
          },
          {
            number: "18",
            textEs: "¿Qué más puede hacer para ganar su batalla contra los malos deseos?",
            textLSM: "",
            paragraphs: [18],
            section: "\"SIGAN EXAMINÁNDOSE\""
          },
          {
            number: "19",
            textEs: "¿Por qué es muy importante que evitemos tomar malas decisiones en cosas aparentemente pequeñas?",
            textLSM: "",
            paragraphs: [19]
          },
          {
            number: "20",
            textEs: "¿Qué pasará en el futuro con nuestros malos deseos, y con qué ayuda contamos ahora?",
            textLSM: "",
            paragraphs: [20]
          }
        ],
        paragraphs: [
          {
            number: 1,
            content: "¿HA SENTIDO alguna vez un fuerte deseo de hacer algo que a Jehová no le gusta? Si es así, quizás piense que es el único al que le pasa, y por eso se sienta desanimado. Pero la Biblia dice: \"A ustedes no se les ha presentado ninguna tentación que no sea común a todas las personas\" (1 Cor. 10:13). Eso significa que usted no es el único; hay otros hermanos que también están luchando contra deseos similares. Y no olvide que en su lucha cuenta con la ayuda de Jehová, así que puede ganar esta batalla."
          },
          {
            number: 2,
            content: "La Biblia también menciona: \"Cada uno es probado al ser atraído y seducido por su propio deseo\" (Sant. 1:14). En otras palabras, no todas las personas se ven tentadas por las mismas cosas. Por ejemplo, algunos cristianos y estudiantes de la Biblia quizás sienten el deseo de cometer actos inmorales con alguien de diferente sexo o con alguien del mismo sexo. Otros tal vez han dejado de ver pornografía pero sienten ganas de retomar este hábito. Y hay quienes sienten el impulso de volver a consumir drogas o beber en exceso. En cualquier caso, es probable que todos nos hayamos sentido en algún momento como el apóstol Pablo, que escribió: \"Cuando deseo hacer lo que es correcto, lo que es malo está conmigo\" (Rom. 7:21).",
            image: "https://i.imgur.com/0MaQXT8.png",
            imageCaption: "Una tentación puede aparecer en cualquier momento y en cualquier lugar. (Vea el párrafo 2)."
          },
          {
            number: 3,
            content: "Si usted está luchando una y otra vez contra el mismo mal deseo, quizás sienta que no tiene las fuerzas para rechazarlo y que solo por tener ese mal deseo no tiene la aprobación de Jehová. ¡Pero nada más lejos de la realidad! Para ver por qué afirmamos eso, en este artículo vamos a responder dos preguntas: 1) ¿cuál es el verdadero origen de esos sentimientos negativos? y 2) ¿cómo podemos ganar nuestra batalla contra los malos deseos?"
          },
          {
            number: 4,
            content: "Cuando estamos ante una tentación, Satanás quiere que pensemos que no tenemos las fuerzas para rechazarla. Por eso Jesús nos enseñó a pedirle a Jehová: \"No nos dejes caer en la tentación, sino líbranos del Maligno\" (Mat. 6:13). De hecho, Satanás afirma que los seres humanos, ante la tentación de hacer algo malo, optarán por desobedecer a Jehová (Job 2:4, 5). Pero qué irónico que diga eso, cuando precisamente fue él quien no tuvo fuerza de voluntad, se dejó llevar por sus malos deseos y decidió desobedecer a Dios. Por lo visto, cree que somos como él. Y no solo eso: ¡hasta pensó que el Hijo de Dios, que era perfecto, caería en la tentación de hacer algo malo! (Mat. 4:8, 9). Pero ¿de verdad no tenemos las fuerzas para resistir los malos deseos? Claro que las tenemos, pues como dijo el apóstol Pablo: \"Tengo fuerzas para todo gracias a aquel que me da poder\" (Filip. 4:13)."
          },
          {
            number: 5,
            content: "Jehová es muy diferente a Satanás: él está totalmente seguro de que somos capaces de vencer en la batalla contra los malos deseos. ¿Cómo lo sabemos? Porque Jehová predijo que una gran muchedumbre de personas fieles sobreviviría a la gran tribulación. ¿Nos damos cuenta de lo que eso significa? Jehová, que no puede mentir, asegura que muchísimas personas —no solo unas pocas— entrarán en el nuevo mundo vestidas \"con túnicas largas blancas\", lo que simboliza que están limpias a sus ojos (Apoc. 7:9, 13, 14). Está claro que Jehová sabe que tenemos las fuerzas para luchar contra los malos deseos."
          },
          {
            number: 6,
            content: "Por otro lado, Satanás también quiere que creamos que solo por tener malos deseos no podemos conseguir la aprobación de Jehová ni la vida eterna. De nuevo, qué irónico que Satanás intente esto, cuando precisamente es él quien no tiene ninguna esperanza de recibir la aprobación de Jehová ni de vivir para siempre, pues ya ha sido juzgado y condenado (Gén. 3:15; Apoc. 20:10). Como nosotros podemos conseguir algo que está totalmente fuera de su alcance, nos tiene envidia y quiere que nos sintamos como él: sin esperanza. Pero la Biblia nos asegura que Jehová quiere ayudarnos para que tengamos su aprobación y vivamos para siempre. Él \"no desea que ninguno sea destruido, sino que todos lleguen a arrepentirse\" (2 Ped. 3:9). Así que nuestra situación no se parece en nada a la del Diablo. ¡Nosotros sí tenemos esperanza!"
          },
          {
            number: 7,
            content: "Como vemos, es Satanás quien quiere que creamos que no tenemos las fuerzas para resistir los malos deseos o que solo por tenerlos no contamos con la aprobación de Jehová. Tenga esto siempre muy presente, y así podrá luchar contra esos sentimientos negativos. ¡No deje que Satanás se salga con la suya! (1 Ped. 5:8, 9)."
          },
          {
            number: 8,
            content: "Además de Satanás, hay otro factor que nos puede hacer creer que no tenemos las fuerzas para resistir los malos deseos o que no contamos con la aprobación de Jehová. ¿A qué nos referimos? Al pecado que hemos heredado de Adán y Eva (Job 14:4; lea Salmo 51:5)."
          },
          {
            number: 9,
            content: "Pensemos en cómo se sintieron Adán y Eva cuando pecaron y se convirtieron en seres imperfectos. Después de desobedecer a Jehová, se escondieron y trataron de cubrir sus cuerpos. ¿Por qué reaccionaron así? El libro Perspicacia para comprender las Escrituras explica: \"El pecado introdujo en ellos sentimientos de culpabilidad, ansiedad, inseguridad y vergüenza\". Es como si la imperfección fuera una casa cerrada con llave y cada uno de esos cuatro sentimientos fuera una habitación. Adán y Eva podían moverse de una habitación a otra, pero no podían escapar de la casa. Estaban atrapados en su imperfección, no había ninguna salida para ellos.",
            image: "https://i.imgur.com/M5qH1K9.png",
            imageCaption: "Después de que Adán y Eva pecaron, sintieron culpabilidad, ansiedad, inseguridad y vergüenza. (Vea el párrafo 9)."
          },
          {
            number: 10,
            content: "Claro está, nosotros no estamos exactamente en la misma situación que Adán y Eva. A diferencia de ellos, nosotros sí tenemos una salida: el rescate, que nos permite recibir el perdón de nuestros pecados y tener una conciencia limpia (1 Cor. 6:11). Aun así, como hemos heredado la imperfección, no es de extrañar que también sintamos culpabilidad, ansiedad, inseguridad y vergüenza. De hecho, la Biblia dice que el pecado continúa ejerciendo una fuerte influencia sobre todos los seres humanos, incluso sobre los que no han pecado \"de la misma manera en la que pecó Adán\" (Rom. 5:14). Pero no debemos dejar que eso nos haga sentir que no tendremos las fuerzas para hacer lo correcto y que nunca podremos conseguir la aprobación de Jehová. ¿Qué nos ayudará a librarnos de estos sentimientos negativos?"
          },
          {
            number: 11,
            content: "A veces, la imperfección puede ser como una voz dentro de nuestra cabeza que nos dice: \"No vas a ser capaz de vencer los malos deseos, no tienes las fuerzas para rechazarlos\". ¡No escuchemos esa voz! Recordemos que la Biblia enseña que no debemos dejar que el pecado siga \"reinando\" sobre nosotros (lea Romanos 6:12). Esto significa que no tenemos por qué llevar a cabo los malos deseos; podemos decidir no hacerlo (Gál. 5:16). Jehová sabe que somos capaces de resistir las tentaciones. De lo contrario, no nos lo pediría (Deut. 30:11-14; Rom. 6:6; 1 Tes. 4:3). No hay duda: tenemos las fuerzas para ganar la batalla contra los malos deseos."
          },
          {
            number: 12,
            content: "En otras ocasiones, podemos oír la voz de la imperfección diciéndonos: \"Como tienes este mal deseo, Jehová no te va a dar su aprobación\". ¡No le hagamos caso! Recordemos que la Biblia enseña que Jehová comprende que nacemos siendo imperfectos (Sal. 103:13, 14). Él \"lo sabe todo\" sobre nosotros, incluido cómo el pecado heredado ha hecho que cada uno de nosotros tenga ciertas malas inclinaciones (1 Juan 3:19, 20). Mientras sigamos luchando contra los malos deseos y no los llevemos a cabo, estaremos limpios a los ojos de Jehová. ¿Por qué podemos estar seguros de esto?"
          },
          {
            number: 13,
            content: "La Biblia enseña que hay una gran diferencia entre tener un mal deseo y llevar a la práctica ese mal deseo. Y es que no siempre podemos controlar lo que deseamos, pero sí podemos controlar lo que hacemos. Por ejemplo, antes de ser cristianos, algunos corintios habían practicado la homosexualidad. El apóstol Pablo dijo: \"Algunos de ustedes eran eso\". Entonces, ¿nunca más volvieron a sentir el deseo de realizar actos homosexuales? Sería poco realista pensar así, porque estos deseos suelen estar muy arraigados dentro de la persona. Pero los cristianos que mostraban autocontrol y no llevaban a cabo sus malos deseos habían sido \"lavados\" y tenían la aprobación de Jehová (1 Cor. 6:9-11). Lo mismo puede decirse de usted."
          },
          {
            number: 14,
            content: "Sin importar cuál sea el deseo contra el que lucha, puede estar seguro de que podrá rechazarlo. Aun si no logra que desaparezca, sí puede mostrar autocontrol y negarse a hacer \"la voluntad de la carne\" y de sus \"pensamientos\" (Efes. 2:3). Entonces, ¿cómo puede ganar su batalla contra los malos deseos? Veamos."
          },
          {
            number: 15,
            content: "Si quiere ganar su batalla contra los malos deseos, para empezar tendrá que ser honesto consigo mismo y reconocer sus debilidades. Tenga cuidado para no engañarse con \"razonamientos falsos\" (Sant. 1:22). Por ejemplo, tal vez alguien razone \"Otros beben más que yo\" o culpe a otros diciendo \"Si mi esposa fuera más cariñosa, yo no sentiría la tentación de ver pornografía\". Pero quien piense así está minimizando el problema, y eso solo logra que sea más fácil caer en la tentación. Así que no busque excusas para justificarse, ni siquiera para sus adentros. Asuma su propia responsabilidad (Gál. 6:7)."
          },
          {
            number: 16,
            content: "Además de ser honesto consigo mismo, fortalezca su determinación de no ceder a sus debilidades (1 Cor. 9:26, 27; 1 Tes. 4:4; 1 Ped. 1:15, 16). Tenga claro cuáles son las situaciones y las cosas que hacen que usted sea más vulnerable. Quizás a cierta hora del día sea más probable que caiga en la tentación, por ejemplo cuando es tarde en la noche o está cansado. Anticípese a la tentación y ensaye en su mente cómo la rechazaría. Como vemos, una clave para luchar contra las tentaciones es prepararse antes (Prov. 22:3)."
          },
          {
            number: 17,
            content: "Pensemos en cómo reaccionó José cuando la esposa de Potifar intentó seducirlo: le dijo que no de inmediato y con decisión (lea Génesis 39:7-9). Esa reacción indica que, antes de que ella tratara de seducirlo, él ya tenía decidido que no se iba a acostar con la esposa de otro hombre. ¿Qué puede aprender de José? Que lo mejor es que fortalezca su determinación de hacer lo correcto antes de que se presente la tentación. Así, cuando aparezca, se le hará más fácil rechazarla porque ya decidió cómo va a reaccionar.",
            image: "https://i.imgur.com/KVM09rR.png",
            imageCaption: "Rechace la tentación de inmediato, tal como hizo José. (Vea el párrafo 17)."
          },
          {
            number: 18,
            content: "Para ganar su batalla contra los malos deseos, también tendrá que examinarse con frecuencia (lea 2 Corintios 13:5). Eso le permitirá ver si tiene que hacer algún cambio en su manera de pensar o actuar. Por ejemplo, después de haber resistido una tentación, puede preguntarse: \"¿Cuánto tiempo me tomó rechazarla?\". Si no la rechazó de inmediato, no se desanime, pero tome medidas para reaccionar más rápido la próxima vez. Hágase preguntas como estas: \"¿Puedo sacar de mi mente más rápido los malos pensamientos? ¿Me está haciendo más difícil la lucha el entretenimiento que escojo? ¿Aparto la mirada al instante cuando aparecen escenas inmorales? ¿Tengo siempre claro que obedecer todas las normas de Jehová es lo mejor para mí, aunque en algunos casos necesite mostrar mucho autocontrol?\" (Sal. 101:3)."
          },
          {
            number: 19,
            content: "Recuerde también que \"el corazón es más traicionero que cualquier otra cosa y es desesperado\" (Jer. 17:9). Y Jesús dijo que \"del corazón salen razonamientos malvados\" (Mat. 15:19). Así que no deje que su corazón lo engañe con explicaciones supuestamente \"lógicas\". Por ejemplo, alguien que ha dejado de ver pornografía podría empezar a pensar con el tiempo que no es peligroso ver imágenes provocativas mientras no aparezca nadie desnudo. O tal vez piense: \"No hay nada de malo en tener fantasías sexuales siempre y cuando no las lleve a cabo\". Ese tipo de razonamientos indican que, por decirlo así, su corazón está \"haciendo planes para satisfacer los deseos de la carne\" (Rom. 13:14). ¿Qué puede hacer usted para no caer en esa trampa? Recuerde que tomar malas decisiones en cosas aparentemente pequeñas puede llevarlo a tomar malas decisiones en asuntos mucho más serios. Evite todos los \"razonamientos malvados\" que le hagan restarles importancia a las malas acciones."
          },
          {
            number: 20,
            content: "Como hemos visto, Jehová nos da las fuerzas para resistir las tentaciones. Además, gracias al rescate, tenemos la esperanza de vivir para siempre en el nuevo mundo. ¡Qué felices seremos de servir a Jehová sin tener que luchar con nuestros malos deseos! Hasta que llegue ese día, recordemos que, si ponemos todo nuestro empeño en luchar contra las tentaciones, Jehová nos bendecirá y ganaremos la batalla."
          }
        ],
        reviewQuestions: [
          {
            question: "¿Qué nos ayudará si sentimos que no tenemos las fuerzas para resistir los malos deseos o que no contamos con la aprobación de Jehová?"
          },
          {
            question: "¿Cómo podemos ganar la batalla contra los malos deseos?"
          },
          {
            question: "¿Cómo podemos seguir examinándonos?"
          }
        ],
        finalSong: "Canción 122: ¡Mantengámonos firmes, inmovibles!"
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

  // Ejemplo: Septiembre 2025
  "2025-09": {
    articles: [
      // Artículo 39 (Placeholder - puedes agregar el contenido cuando lo necesites)
      {
        metadata: {
          articleNumber: 39,
          week: "2-8 Dic",
          month: "Septiembre",
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

      // Artículo 40 (Placeholder)
      {
        metadata: {
          articleNumber: 40,
          week: "9-15 Dic",
          month: "Septiembre",
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
      // Puedes agregar cuantos artículos necesites aquí...
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

// Helper para listar todos los artículos de un mes
export function getMonthArticles(yearMonth: string): ArticleData[] {
  return atalayaDatabase[yearMonth]?.articles || [];
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
