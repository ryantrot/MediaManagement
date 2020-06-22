import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../body/models/Orders';

@Component({
  selector: 'app-sortd',
  templateUrl: './sortd.component.html',
  styleUrls: ['./sortd.component.css']
})
export class SortdComponent implements OnInit {

  orders: Order[];

  headElements = ['Full Name', 'email', 'Phone Number', 'Preacher','Event', 'Date', 'Type of Disk','Order Status',];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllOrdersByDate();
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

  getAllOrdersByDate(){
    const myObservable = {next:res=> {this.orders=res}, error:err=>{alert("Error getting Orders")}};
    this.apiService.getBySortDate().subscribe(myObservable);
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
