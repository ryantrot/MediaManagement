import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../body/models/Orders';

@Component({
  selector: 'app-ordertask',
  templateUrl: './ordertask.component.html',
  styleUrls: ['./ordertask.component.css']
})
export class OrdertaskComponent implements OnInit {

  orders: Order[];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()  {
    this.getAllOrders();
  }

  toggleStatus(order: Order){
    order.status = !order.status;
    this.apiService.updateRequest(order).subscribe(data=> {this.apiService.getAllOrders().subscribe((data:any) => {this.orders = data;})})
  }

  setDiskType(order: Order){
    if(order.disk_type == "CD"){
      order.disk_type = "DVD";
      this.apiService.updateRequest(order).subscribe(data=> {this.apiService.getAllOrders().subscribe((data:any) => {this.orders = data;})})
    }
    else if(order.disk_type == "DVD"){
      order.disk_type = "CD";
      this.apiService.updateRequest(order).subscribe(data=> {this.apiService.getAllOrders().subscribe((data:any) => {this.orders = data;})})
    }
  }

  public getAllOrders(){
    let url = "http://localhost:8080/api/view";
    const myObserver = { next:res=>{this.orders=res}, error:err=>{alert("Error")}};
    this.apiService.getAllOrders().subscribe(myObserver);
  }

  updateOrders(updateOrder:Order){
    this.apiService.updateRequest(updateOrder).subscribe(data=> {this.apiService.getAllOrders().subscribe((data:any) => {this.orders = data;})})
  }

  deleteOrders(order:Order){
    if(confirm("Do you want to cancel the order?")){
      this.apiService.deleteRequest(order.request_id).subscribe(
        res=>{
          this.apiService.getAllOrders().subscribe((data:any) => {this.orders=data})
      },
      error=>{alert("Could not delete order")});
    }
  }

}
