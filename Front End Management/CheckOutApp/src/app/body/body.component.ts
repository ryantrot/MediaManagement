import { Component, OnInit } from '@angular/core';
import { Order } from './models/Orders';
import { ApiService } from '../apiService/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  orders: Order[];

  count: number

  location: Location;

  headElements = ['Full Name', 'email', 'Phone Number', 'Preacher','Event', 'Date', 'Type of Disk','Order Status',];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllOrders();
  }

  refresh():void{
    //this.router.navigate(['/view']);
    window.location.reload();
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


