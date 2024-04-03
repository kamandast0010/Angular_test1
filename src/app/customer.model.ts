export class CustomerModel{
  public id:number;
  public name:string;
  public email:string;
  public contact:string;
  public age:number;

  constructor(id:number,name:string,email:string,contact:string,age:number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.age = age;
  }
}
