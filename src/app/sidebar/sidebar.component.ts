import { Component, OnInit } from '@angular/core';
import { IOrder } from '../Models/IOrder';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  public orders: IOrder[]= []

  public focusOrder: IOrder={
    id: "string",
  customerName: "string",
  items :
    [
    {
    id: "string",
    type: "string" ,
    description: "string"
    }
  ]
} 

  collapse = true;


  constructor(private service : OrderService) {
    
  }

  ngOnInit() {
    this.service.order().subscribe(orders => {
      this.orders = orders;
      this.focusOrder=orders[0]
    })
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }


  updateFocusItems(id:string){

    this.orders.map(item=>{
      if(item.id===id){
        this.service.focusOrder.next(item)
      }
    })
  }

}
