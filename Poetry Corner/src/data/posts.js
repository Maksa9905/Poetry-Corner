export const authors = [
  {
    id: 0,
    nickname: "user1",
    penName: "М.Г",

    get iconUrl() {
      return `https://iimg.su/s/23/k5QO5NtS5FiyLg91AwlfvDDyl5VSLxwHwLCZstCJ.png`;
    },
    get rating() {
      return (
        this.posts.reduce((rating, post) => rating + post.rating, 0) /
        this.posts.length
      );
    },
    get views() {
      return this.posts.reduce((views, post) => views + post.views);
    },
    get posts() {
      const posts = [
        {
          author: this,
          id: 0,
          title: "Серые глаза, рассвет...",
          description: null,
          date: new Date(2024, 4, 22, 0, 0, 0, 0),
          text: `Серые глаза — рассвет,
          Пароходная сирена,
          Дождь, разлука, серый след
          За винтом бегущей пены.
          
          Чёрные глаза — жара,
          В море сонных звёзд скольженье,
          И у борта до утра
          Поцелуев отраженье.
          
          Синие глаза — луна,
          Вальса белое молчанье,
          Ежедневная стена
          Неизбежного прощанья.
          
          Карие глаза — песок,
          Осень, волчья степь, охота,
          Скачка, вся на волосок
          От паденья и полёта.
          
          Нет, я не судья для них,
          Просто без суждений вздорных
          Я четырежды должник
          Синих, серых, карих, чёрных.
          
          Как четыре стороны
          Одного того же света,
          Я люблю — в том нет вины —
          Все четыре этих цвета.`,
          rating: 3,
          views: 22,
        },
        {
          author: this,
          id: 2,
          title: "Она или он?",
          date: new Date(2024, 4, 22, 0, 0, 0, 0),
          description: null,
          text: `Как багровыми слезами наполняем мир...
          Я жду её, его визита,
          А двери в небо навсегда закрыты.
          Есть лишь глаза, истёртые до дыр.
          
          Был так чудесен сон Морфея.
          Я виноват, я снова крайний.
          Чего мне ждать?! Воспоминаний?
          Пришествия же белой феи?
          
          Как таракан, где чёрны вдовы.
          Тутвсё живёт без колебаний,
          Но жар, мороз моих терзаний
          Не поглотит и взрыв сверхновой.`,
          rating: 3,
          views: 18,
        },
      ];
      return posts;
    },
  },
  {
    id: 1,
    nickname: "user2",
    penName: "В.П",

    info: {
      sex: "female",
      contacts: {
        telegram: "@pushkin",
        vk: "id3242132",
      },
      birthsday: new Date(2002, 3, 22, 0, 0, 0, 0),
    },
    quote: "Все мы когда-то землю будем удобрять",
    get iconUrl() {
      return `https://iimg.su/s/23/k5QO5NtS5FiyLg91AwlfvDDyl5VSLxwHwLCZstCJ.png`;
    },
    get rating() {
      return (
        this.posts.reduce((rating, post) => rating + post.rating, 0) /
        this.posts.length
      );
    },
    get views() {
      return this.posts.reduce((views, post) => views + post.views);
    },
    get posts() {
      const posts = [
        {
          author: this,
          id: 3,
          title: "Блицкриг",
          date: new Date(2024, 4, 22, 0, 0, 0, 0),
          description: null,
          text: `Вальтер, люгер, МР-40.
        Немцу винт снимает стресс,
    
        В лесах слышен тихий шорох,
        Хитрым лисом ждёт СС.
    
        ‘Сорок первый, крепость Брест,
        Закреплён железный крест,
    
        ‘Адольфы, Штефаны и Гансы
            ‘С «пантерою» ликуют в танце,
    
        'Нацист долго не стоит,
        ‘Слышен детский плач и крик,
        До поражения лишь миг.-
        Это тактика - «Блицкриг».`,
          rating: 3.6,
          views: 54,
        },
      ];
      return posts;
    },
  },

  {
    id: 2,
    nickname: "user3",
    penName: "В.П",
    info: {
      sex: "female",
      contacts: {
        telegram: "@helloWorld",
        vk: "id228228",
      },
    },
    quote: "Дайте мне белые крылья и я утопаю в омуте",
    get iconUrl() {
      return `https://iimg.su/s/23/k5QO5NtS5FiyLg91AwlfvDDyl5VSLxwHwLCZstCJ.png`;
    },
    get rating() {
      return (
        this.posts.reduce((rating, post) => rating + post.rating, 0) /
        this.posts.length
      );
    },
    get views() {
      return this.posts.reduce((views, post) => views + post.views);
    },
    get posts() {
      const posts = [
        {
          author: this,
          id: 4,
          title: "Вся наша жизнь",
          date: new Date(2024, 3, 22, 12, 23, 2, 3),
          description: null,
          text: `Измучась всем, я умереть хочу.
          Тоска смотреть, как мается бедняк,
          И как шутя живётся богачу,
          И доверять, и попадать впросак,
          
          И наблюдать, как наглость лезет в свет,
          И честь девичья катится ко дну,
          И знать, что ходу совершенствам нет,
          И видеть мощь у немощи в плену,
          
          И вспоминать, что мысли замкнут рот,
          И разум сносит глупости хулу,
          И прямодушье простотой слывёт,
          И доброта прислуживает злу.
          
          Измучась всем, не стал бы жить и дня,
          Да другу трудно будет без меня.`,
          rating: 5,
          views: 32,
        },
        {
          author: this,
          id: 5,
          title: "Страшно ошибаться",
          date: new Date(2023, 2, 10, 0, 0, 4, 2),
          description: null,
          text: `Не страшно чувствовать холод
      страшно жить со льдиной в груди
      Не страшно жить не влюбленным
      Страшно умирать, но все же любить
      Не страшно остаться последним
      Страшно быть постоянно в конце
      Не страшно тебе поверить
      Страшно ошибаться в тебе`,
          rating: 5,
          views: 21,
        },
        {
          author: this,
          id: 1,
          title: "Молодой человек",
          date: new Date(2021, 4, 22, 0, 0, 0, 0),
          description: null,
          text: `Что вы тут разлеглись, молодой человек?
        Погребённый морфином в Петербурга парадной.
        Здесь останетесь вы, позабытым на век,
        Ведь никто и не спросит, что тут с вами неладно.
        
        Пальто ваше грязненькое и всё в колтунах.
        может быть, скоро от вины вы сойдёте с ума.
        Как же вам тут холодно и синие руки в ремнях.
        Ещё чуть и ваше тельце окутает тьмой луна.
        
        Не вините себя, молодой человек,
        Погребённый морфином в Петербурга парадной.
        Пальто вы накиньте и забудьте на век.
        Так ступайте туда, где свами будет всё ладно.`,
          rating: 4,
          views: 26,
        },
      ];
      return posts;
    },
  },
];

export const posts = [
  ...authors.reduce((postsArray, author) => {
    return [...postsArray, ...author.posts];
  }, []),
];
