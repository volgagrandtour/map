const spots = [
  {
    "coords": "57.251332, 32.467774",
    "id": "p0",
    "title": "Исток реки Волги",
    "img": "p0-volgoverkhovie.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p0",
      "https://yandex.ru/maps/-/CHQXVXKv"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.155667, 33.100617",
    "id": "p1",
    "title": "Осташков. Старая колокольня в центральном парке",
    "img": "p1-ostashkov.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p1",
      "https://yandex.ru/maps/-/CHQ1v4Ip"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.040948, 34.961115",
    "title": "Торжок. Пешеходный старый вантовый мост рядом с памятником Н.А. Львову",
    "id": "p2",
    "img": "p2-torzhok.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p2",
      "https://yandex.ru/maps/-/CHQ1vFIA"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.863514, 35.901868",
    "title": "Тверь. Памятник А.С. Пушкину на набережной Волги",
    "id": "p3",
    "img": "p3-tver.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p3",
      "https://yandex.ru/maps/-/CHQ1vF1J"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.705118, 36.712557",
    "title": "Переправа Топорок (с тверской стороны напротив Конаково)",
    "id": "p3a",
    "img": "p3a-toporok.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p3a",
      "https://yandex.ru/maps/-/CHQLzZOi"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.695921, 36.732630",
    "title": "🚢 Переправа Зеленый Бор. В Конаково",
    "id": "p3b",
    "img": "p3b-zelbor.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p3b",
      "https://yandex.ru/maps/-/CHQLzZ9K"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.705108, 36.749283",
    "title": "Конаково. Сосновый бор и смотровая площадка",
    "id": "p4",
    "img": "p4-konakovo.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p4",
      "https://yandex.ru/maps/-/CHQLzZYB"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.713778, 37.132807",
    "title": "🚢 Переправа через канал (Конаковский берег)",
    "id": "p4a",
    "img": "p4a-kanal.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p4a",
      "https://yandex.ru/maps/-/CHQLzKnn"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.714377, 37.134082",
    "title": "🚢 Переправа через канал (Дубненский берег)",
    "id": "p4b",
    "img": "p4b-kanal.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p4b",
      "https://yandex.ru/maps/-/CHQLzKp9"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.730965, 37.124717",
    "title": "Дубна. Памятник В.И. Ленину",
    "id": "p5",
    "img": "p5-dubna.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p5",
      "https://yandex.ru/maps/-/CHQ1vSkg"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.857229, 37.365838",
    "title": "Кимры (Савелово). Песчаная набережная на стороне вокзала",
    "id": "p6",
    "img": "p6-kimry.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p6",
      "https://yandex.ru/maps/-/CHQ1zR5U"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.241691, 37.855486",
    "title": "Калязин. Смотровая площадка на набережной с видом на колокольню",
    "id": "p7",
    "img": "p7-kalyazin.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p7",
      "https://yandex.ru/maps/-/CHQ1j8-m"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.530853, 38.320916",
    "title": "Углич. Пристань на набережной",
    "id": "p8",
    "img": "p8-uglich.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p8",
      "https://yandex.ru/maps/-/CHQ1j2Jx"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.785985, 38.457988",
    "title": "Мышкин. Пристань с торговыми рядами",
    "id": "p9",
    "img": "p9-myshkin.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p9",
      "https://yandex.ru/maps/-/CHQ1nB5a"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.986915, 38.424874",
    "title": "🚢 Переправа в Солнцево. На Мышкинской стороне",
    "id": "p9a",
    "img": "p9a-solntsevo.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p9a",
      "https://yandex.ru/maps/-/CHQ1nFPi"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.986355, 38.449303",
    "title": "🚢 Переправа в Глебово. Со стороны Рыбинска",
    "id": "p9b",
    "img": "p9b-glebovo.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p9b",
      "https://yandex.ru/maps/-/CHQ1nJOC"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "58.050167, 38.854570",
    "title": "Рыбинск. Пристань на набережной",
    "id": "p10",
    "img": "p10-rybinsk.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p10",
      "https://yandex.ru/maps/-/CHQ1nN0A"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.880701, 39.535863",
    "title": "Тутаев (Романовская сторона). Смотровая площадка храма и Волги (напротив дома Дмитриева с красивым видом на Казанскую-Преображенскую церковь)",
    "id": "p11",
    "img": "p11-tutayev.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p11",
      "https://yandex.ru/maps/-/CHQ1nR5U"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.621442, 39.904190",
    "title": "Ярославль. Смотровая площадка на стрелке",
    "id": "p12",
    "img": "p12-yaroslavl.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p12",
      "https://yandex.ru/maps/-/CHQ1nZIS"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.462546, 40.572427",
    "title": "Нерехта",
    "id": "p12a",
    "img": "p12a-nerehta.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p12a",
      "https://yandex.ru/maps/-/CHad7ClO"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.767815, 40.926999",
    "title": "Кострома. Сусанинская площадь в центре",
    "id": "p13",
    "img": "p13-kostroma.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p13",
      "https://yandex.ru/maps/-/CHQ1nKoI"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.494938, 41.233934",
    "title": "🚢 Переправа Красное на Волге. Пристань",
    "id": "p13a",
    "img": "p13a-krasnoe-pozhni.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p13a",
      "https://yandex.ru/maps/-/CHQ1n88Q"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.486621, 41.234187",
    "title": "Переправа Красные Пожни. Пристань",
    "id": "p13b",
    "img": "p13b-pozhni-ples.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p13b",
      "https://yandex.ru/maps/-/CHQ1n0Yf"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.461264, 41.513416",
    "title": "Плёс. Памятник Ф.И. Шаляпину на набережной",
    "id": "p14",
    "img": "p14-ples.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p14",
      "https://yandex.ru/maps/-/CHQ1nD1I"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.463015, 41.539350",
    "title": "🚢 Плёс. Пристань в Гравийном карьере. На другой стороне от Плеса",
    "id": "p14b",
    "img": "p14b-krasnoe-grav.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p14b",
      "https://yandex.ru/maps/-/CHQ1nHNV"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.443752, 42.174053",
    "title": "Кинешма. Смотровая площадка на стрелке",
    "id": "p15",
    "img": "p15-kineshma.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p15",
      "https://yandex.ru/maps/-/CHQ1nSiE"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "57.318713, 43.111136",
    "title": "Юрьевец. Центральная площадь рядом с Георгиевской колокольней",
    "id": "p16",
    "img": "p16-yurevets.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p16",
      "https://yandex.ru/maps/-/CHQ1nL6O"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.641548, 43.464703",
    "title": "Городец. Памятник Александру Невскому на смотровой площадке",
    "id": "p17",
    "img": "p17-gorodets.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p17",
      "https://yandex.ru/maps/-/CHQ1rI7u"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.330028, 44.009432",
    "title": "Нижний Новгород. Чкаловская лестница рядом с Кремлем",
    "id": "p18",
    "img": "p18-nnovgorod.jpg",
    "links": [
      "https://volgagrandtour.github.io/#p18",
      "https://yandex.ru/maps/-/CHQ1rMmn"
    ],
    "kind": "town",
    "points": []
  },
  {
    "coords": "56.955246, 35.252909",
    "title": "Усадьба Знаменское-Раёк",
    "id": "raek",
    "links": [
      "https://yandex.ru/maps/-/CHBiVNy3"
    ],
    "kind": "landmark",
    "points": []
  },
  {
    "coords": "56.934330, 35.435797",
    "title": "Мемориальный комплекс Медное",
    "id": "mednoe",
    "links": [
      "https://yandex.ru/maps/-/CHBiVKok"
    ],
    "kind": "landmark",
    "points": []
  },
  {
    "coords": "57.696700, 39.827412",
    "title": "Толгский монастырь",
    "id": "tolga",
    "links": [
      "https://yandex.ru/maps/-/CHBiV8Oj"
    ],
    "kind": "landmark",
    "points": []
  },
  {
    "coords": "57.611278, 39.905862",
    "title": "Храмовый комплекс в Коровниках",
    "id": "korovniki",
    "links": [
      "https://yandex.ru/maps/-/CHBiVHYj"
    ],
    "kind": "landmark",
    "points": []
  },
  {
    "coords": "57.257825, 43.022840",
    "title": "Смотровая площадка рядом с Юрьевцом",
    "id": "smotrovaya-ryadom-uryevets",
    "links": [
      "https://yandex.ru/maps/-/CHBiZFpH"
    ],
    "kind": "landmark",
    "points": []
  }
];