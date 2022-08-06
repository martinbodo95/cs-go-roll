export interface BoxNode {
  node: Box;
}

export interface IBox {
  id: string;
  name: string;
  iconUrl: string;
  cost: number;
}

export class Box implements IBox {
  public id: string;
  public name: string;
  public iconUrl: string;
  public cost: number;
  constructor(id: string, name: string, iconUrl: string, cost: number) {
    this.id = id;
    this.name = name;
    this.iconUrl = iconUrl;
    this.cost = cost;
  }
}
