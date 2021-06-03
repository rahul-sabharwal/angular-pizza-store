import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{

  @Input() collapsed:boolean = true

  @Input()  order:{
    id: string,
    customerName: string,
    items :
      {
      id: string,
      type: string ,
      description: string
      }[]
  }={
    id: "string",
  customerName: "string",
  items :
    [
    {
    id: "string",
    type: "string" ,
    description: "string"
    }]
} 

  constructor(private service:OrderService){
    this.logOrder()
  }

  ngOnInit(){
    this.logOrder()
  }

  logOrder(){
    console.log(this.order)
  }

}
