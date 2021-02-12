export interface ServiceApi {
  id: string;
  name: string;
  price: number;
}

class Service {
  id: string;

  name: string;

  price: number;

  constructor(service: ServiceApi) {
    this.id = service.id;
    this.name = service.name;
    this.price = service.price;
  }
}

export default Service;
