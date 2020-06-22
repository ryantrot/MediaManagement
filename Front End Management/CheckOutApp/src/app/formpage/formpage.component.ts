import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { Router } from '@angular/router';
import { Order } from '../body/models/Orders';
import {Location, DatePipe} from '@angular/common'

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {

  model:Order;

  errorMessage: string;
  location:Location;

  constructor(private apiService: ApiService, private router: Router, private datePipe: DatePipe) {

      this.model = new Order();
   }

  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => { return false};
    this.datePipe.transform(this.model.event_date, 'yyyy-MM-dd');
  }

  refresh():void{
    window.location.reload();
  }

  sendForm(){
    //this.apiService.getAllOrders().subscribe({next:res=>{this.orders=res}, error:err=>{alert("Error")}});

    //let url = "http://localhost:8080/api/addrequest"; 
    //const myObserver = {next:res=>{location.reload()}, error:err=>{alert("An error has occured while adding;")}}
    //this.apiService.postRequest(this.model).subscribe(res=>{this.router, location.reload()});
    this.model.status = false;
    //this.model.event_date = this.datePipe.transform(this.model.event_date,'yyyy-MM-dd');
    this.apiService.postRequest(this.model).subscribe(data => this.router.navigate[("/view")]);
    this.refresh();
    
  }
}
