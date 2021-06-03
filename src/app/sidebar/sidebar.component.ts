import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
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

  public focusOrder: {
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

  collapse = true;


  constructor(private service : OrderService) {
    
  }

  getOrders=async ()=>{
     this.orders = await this.service.getOrders(); 
     this.focusOrder = this.orders[0]
  }

  ngOnInit() {
    this.getOrders()
    console.log(this.orders)
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }


  updateFocusItems(id:string){

    this.orders.map(item=>{
      if(item.id===id){
        this.focusOrder = item
      }
    })
  }

}
