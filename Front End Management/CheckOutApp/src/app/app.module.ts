import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormpageComponent } from './formpage/formpage.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FooterComponent } from './footer/footer.component';
import { OrdertaskComponent } from './ordertask/ordertask.component';
import { SortpComponent } from './sortp/sortp.component';
import { SortdComponent } from './sortd/sortd.component';
import { SortfComponent } from './sortf/sortf.component';
import { DatePipe } from '@angular/common';



const appRoutes : Routes =[
  {
    path:'view',
    component: BodyComponent
  },
  {
    path:'complete',
    component: OrdertaskComponent
  },
  {
    path:'sortdate',
    component: SortdComponent
  },
  {
    path:'sortfullname',
    component: SortfComponent
  },
  {
    path:'sortpreacher',
    component: SortpComponent
  },
  {
    path:'', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'requestform',
    component:FormpageComponent
  },
  {
    path:'inventory',
    component: InventoryComponent
  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    FormpageComponent,
    HomeComponent,
    InventoryComponent,
    FooterComponent,
    OrdertaskComponent,
    SortpComponent,
    SortdComponent,
    SortfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    NgbModule
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
