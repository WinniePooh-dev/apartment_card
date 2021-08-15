export interface ApartmentData {
  id: number;
  price: number;
  square: number;
  img: string;
}

export default class MockDatabase {
  private static data: ApartmentData[] = [
    {
      id: 1,
      price: 14000,
      square: 29,
      img: 'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg'
    },
    {
      id: 2,
      price: 20000,
      square: 45,
      img: 'https://urbanlook.ru/wp-content/uploads/2017/10/%D0%90%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-552x367.jpg'
    },
    {
      id: 3,
      price: 9000,
      square: 21,
      img: 'https://cdn.mskguru.ru/uploads/news/spros-na-apartamenty-moskve-v-pervom-kvartale-zametno-snizilsja_l.jpg'
    },
    {
      id: 4,
      price: 10000,
      square: 30,
      img: 'https://rcmm.ru/uploads/posts/2016-11_/1478682970_ft2085841.jpg'
    },
    {
      id: 5,
      price: 18000,
      square: 31.8,
      img: 'https://sochi.com/upload/iblock/c7b/2a236112dc4a786455bfa0296a98bd61.jpg'
    },
    {
      id: 6,
      price: 17000,
      square: 35,
      img: 'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2021-01/kitchen-living-room-4043091_1920.jpg?itok=JsuzfmRf'
    }
  ];

  static getApartments = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(MockDatabase.data), 500);
    });
  };
}
