import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orders: {
    id: string,
    customerName: string,
    items :
      {
      id: string,
      type: string ,
      description: string
      }[]
  }[] = []


  public focusItem : {
    id: string,
    customerName: string,
    items :
      {
      id: string,
      type: string ,
      description: string
      }[]
  } = {
    id: "iji",
    customerName: "",
    items :[
      {
      id: "",
      type: "" ,
      description: ""
      }
    ]
  };

 getOrders=async()=>{
   await axios.get("http://localhost:8080/api/v1/order").then(
    res => {
      console.log(res)
        this.orders = res.data;
    }
  );
  return this.orders;  
}
  constructor() {
    this.getOrders();
    this.focusItem = this.orders[0]
   }

  getFocusItem=async(id:string)=>{
    this.orders.map(item=>{
      if(item.id===id){
        this.focusItem=item
      }
    }) 
    return this.focusItem
 }
}
