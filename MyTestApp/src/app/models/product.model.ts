export class Product {
  id: number;

  name: string;

  description: string;

  price: number;

  colors: string[];

  active: boolean;

  // constructor() {}

  constructor(
    pId: number,
    pName: string,
    pDesc: string,
    pPrice: number,
    pColors: string[],
    pStatus: boolean
  ) {
    this.id = pId;
    this.name = pName;
    this.description = pDesc;
    this.price = pPrice;
    this.colors = pColors;
    this.active = pStatus;
  }
}
