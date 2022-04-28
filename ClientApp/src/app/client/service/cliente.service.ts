
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from './../client.modal';

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    readonly URI:string  = ``; //endpoint

    constructor(private http: HttpClient){}

    create(client:Client):Observable<any>{
        return this.http.post<Client>(`${this.URI}`,client);
    }

}