import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../Models/IOrder';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{

  @Input() collapsed:boolean = true

  @Input()  order:any;;

  constructor(private service:OrderService){}

  ngOnInit(){
    this.service.focusOrder.subscribe(res =>{
      this.order = res;
    })
    
    // this.service.order().subscribe(res =>{
    //   this.order = res[0];
    // })
  }

  logOrder(){
    console.log(this.order)
  }

}
