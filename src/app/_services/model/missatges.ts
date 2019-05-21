export class Missatge {
  public tipus: string;
  private objecte: any;

  constructor(tipus: string, objecte: any) {
    this.tipus = tipus;
    this.objecte = objecte;
  }

  getObjecte() {
    return this.objecte;
  }

  getObjectAtribut(atribut: string) {
    return this.objecte[atribut];
  }
}
