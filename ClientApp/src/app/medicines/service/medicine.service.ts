import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { MedicineType} from '../medicine.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MedicineTypeService{

    readonly URI:string  = ``; //endpoint

    constructor(private http: HttpClient){}

    create(medicine:MedicineType):Observable<any>{
        return this.http.post<MedicineType>(`${this.URI}`,medicine);
    }

}