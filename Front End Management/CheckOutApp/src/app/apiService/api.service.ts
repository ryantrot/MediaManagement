
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from "../body/models/Orders";
import { Item } from '../body/models/Inventory';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) {

  }

  private BASE_URL = "http://localhost:8080/api";
  private ALL_REQUEST_URL = `${this.BASE_URL}\\view`;
  private SEND_REQUEST_URL = `${this.BASE_URL}\\addrequest`;
  private GET_STATUS_URL = `${this.ALL_REQUEST_URL}\\${status}`;
  private GET_SORTED_URL = `${this.BASE_URL}\\view\\sort`;

  private INVENTORY_URL = `${this.BASE_URL}\\inventory`;
  private ADD_INVENTORY_URL = `${this.BASE_URL}\\additem`;

  getAllOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(this.ALL_REQUEST_URL);
  }

  getByStatus(): Observable<Order[]>{
    return this.http.get<Order[]>(this.GET_STATUS_URL);
  }

  getBySortPreacher():Observable<Order[]>{
    const SORT_PREACHER = `${this.GET_SORTED_URL}\\preacher`;
    return this.http.get<Order[]>(SORT_PREACHER);
  }

  getBySortFullname():Observable<Order[]>{
    const SORT_FULLNAME = `${this.GET_SORTED_URL}\\fullname`;
    return this.http.get<Order[]>(SORT_FULLNAME);  
  }


  getBySortDate():Observable<Order[]>{
    const SORT_DATE = `${this.GET_SORTED_URL}\\date`;
    return this.http.get<Order[]>(SORT_DATE);  
  }

  postRequest(order:Order): Observable<any>{
    order.request_id = 0;
    return this.http.post<Order>(this.SEND_REQUEST_URL, order);
  }

  updateRequest(order:Order): Observable<any>{
    const UPDATE_REQUEST_URL = `${this.BASE_URL}\\updaterequest\\${order.request_id}`;
    return this.http.put(UPDATE_REQUEST_URL, order);
  }

  deleteRequest(id:number):Observable<any>{
    const DELELTE_REQUEST_URL = `${this.BASE_URL}\\deleterequest\\${id}`;
    return this.http.delete(DELELTE_REQUEST_URL);
  }

  getInventory(): Observable<any>{
    return this.http.get<Item[]>(this.INVENTORY_URL);
  }

  addInventory(item:Item): Observable<any>{
    item.id = 0;
    return this.http.post<Item>(this.ADD_INVENTORY_URL, item);
  }

  editInventory(item:Item): Observable<any>{
    const UPDATE_Inventory_URL =  `${this.BASE_URL}\\updateitem\\${item.id}`;
    return this.http.put(UPDATE_Inventory_URL, item);
  }
}

