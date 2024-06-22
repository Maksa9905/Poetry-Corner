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
          title: "Темница",
          description: null,
          date: new Date(2024, 4, 22, 0, 0, 0, 0),
          text: `Там где-то за стеной,
          За стеной темницы сырой.
          Там где свобода
          и дух мой без мора.
          
          Там где-то за стеной,
          Творимая богом мечта.
          Там где есть прекрасный дух твой
          И творимая мною судьба.
          
          Эта темница вовек заперла мои мысли,
          мои слова, мои строки.
          Ведь выйти от сюда не удастся никак.
          
          'Депрессия у тебя' - говорили они,
          ведомые предрассудками,
          Ужасающие мнения,
          Тех кому похуй на тебя.
          
          А я лишь скажу,
          что моя темница
          Соткана из сказочного зла
          Причинённого той музой.`,
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
          text: `Вся наша жизнь - пихание локтей,
      Удары веслами по ребрам водной глади.
      Вся наша жизнь - хуйня из под ногтей,
      Запас все того, чего не хватит.
      
      Вся наша жизнь - терять свой пот в песке,
      Пиздеть правдиво будто время лечит.
      Вся наша жизнь - пульсация в виске,
      (Стучаться в грудь и ждать пока ответят.
      
      Вся наша жизнь - ебучая постель,
      Измятая за ночь, и цель - ее заправить.
      вся наша жизнь - ошибка, ты поверь,
      'Ивремя чтобы как-то все исправить.`,
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
      Страшно ошибаться втебе`,
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
        может быть, скоро отвины вы сойдёте сума.
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
