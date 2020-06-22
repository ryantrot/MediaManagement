import { Component, OnInit } from '@angular/core';
import { Item } from '../body/models/Inventory';
import { ApiService } from '../apiService/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items: Item[]; 
  newItem: Item;
  location: Location;
  headElements = [ 'Preacher','Event', 'Type of Disk', 'Quantity'];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getInventory();
  }


  refresh():void{
    //this.router.navigate(['/view']);
    window.location.reload();
  }
  public getInventory(){
    this.apiService.getInventory().subscribe(res=>{this.items=res}, err=>{alert("Error getting Inventory")});
  }

  updateInventory(updateInventory: Item){
    this.apiService.editInventory(updateInventory).subscribe(data=> {this.apiService.getInventory().subscribe((data:any) => {this.items = data;})});
  }

  addItem(){
    this.newItem = new Item();
    this.apiService.addInventory(this.newItem).subscribe(result=>{location.reload()}, error=>{alert("An error has occured while adding;")});
    this.refresh();
  }
}
