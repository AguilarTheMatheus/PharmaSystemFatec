import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Sales} from '../Sales.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SalesService{

    readonly URI:string  = `/api/v1/medicine/new`; //endpoint

    constructor(private http: HttpClient){}

   


    // getAll():Observable<MedicineType[]>{
    //     return this.http.get<MedicineType[]>(`/api/v1/Basket/get`);
    //   }
          
    create(sales:Sales):Observable<any>{
    return this.http.post<Sales>(`/api/v1/Basket/new`,sales);
    }

    
    // delete(medicineId: MedicineType): Observable<any>{
    // return this.http.delete<MedicineType>(`/api/v1/medicine/delete/${medicineId}`);
    // }
    
    // update(medicineId:MedicineType,medicine:MedicineType):Observable<any>{
    // return this.http.put<MedicineType>(`/api/v1/medicine/put/${medicineId}`,medicine);
    // }

}