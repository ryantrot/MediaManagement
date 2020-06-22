import { Component, OnInit } from '@angular/core';
import { Item } from '../body/models/Inventory';
import { ApiService } from '../apiService/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  Items: Item[];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllSpeakers();
  }

  getAllSpeakers(){
    this.apiService.getInventory().subscribe(res=>{this.Items=res}, err=>{alert("Error getting Inventory")});
  }

}
