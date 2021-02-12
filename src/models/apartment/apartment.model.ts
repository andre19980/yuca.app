interface SubwayStation {
  name: string;
  distance: string;
}

export interface ApartmentApi {
  name: string;
  number: number;
  room: string;
  subwayStation: SubwayStation;
  price: number;
  image: string;
}

class Apartment {
  name: string;

  number: number;

  room: string;

  subwayStation: SubwayStation;

  price: number;

  image: string;

  constructor(apartment: ApartmentApi) {
    this.name = apartment.name;
    this.number = apartment.number;
    this.room = apartment.room;
    this.subwayStation = apartment.subwayStation;
    this.price = apartment.price;
    this.image = apartment.image;
  }
}

export default Apartment;
