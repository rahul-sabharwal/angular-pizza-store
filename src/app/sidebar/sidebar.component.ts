import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {menuList} from './menu-list'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  sideMenu  = [{
    id: "",
    customerName:""
  }];
  collapse = false;

  
fetchData = ()=>{
  axios.get("http://localhost:8080/api/v1/order").then(
  res => {
    console.log(res)
      this.sideMenu =  res.data;
  }
);
}

  constructor() { 
    this.fetchData()
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }


}
