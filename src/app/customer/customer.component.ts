import {Component} from "@angular/core";
import {CustomerModel} from "../customer.model";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrl: "./customer.component.css"
})

export class CustomerComponent{
  title = "CUSTOMER";
  Customer: CustomerModel [] = [
    new CustomerModel(1,"Sullaiman","sullaimankamanda96@gmail.com","12345",27)
  ]
  newCustomer: CustomerModel ={
    id:0,
    name:"",
    email:"",
    contact:"",
    age:0
  };
  addCustomer(){
    this.Customer.push({id:0,name:"",email:"",contact:"",age:0,...this.newCustomer})
    this.resetForm();
  }
  resetForm(){
    this.newCustomer ={
      id:0,
      name:"",
      email:"",
      contact:"",
      age:0
    }
  }
  constructor() {
  }
}
