
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from './../client.modal';
import PageResult from "src/app/util/page-result.model";

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    //readonly URI:string  = `/api/v1/costumer/new`; //endpoint
    

    constructor(private http: HttpClient){}

    getAll():Observable<Client[]>{
      return this.http.get<Client[]>(`/api/v1/costumer/get`);
    }
        
    create(client:Client):Observable<any>{
    return this.http.post<Client>(`/api/v1/costumer/new`,client);
    }

    
    delete(clientId: Client): Observable<any>{
    return this.http.delete<Client>(`/api/v1/costumer/delete/${clientId}`);
    }
    
    update(clientId:Client,client:Client):Observable<any>{
    return this.http.put<Client>(`/api/v1/costumer/put/${clientId}`,client);
    }



    
        

} 