import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { MedicineType} from '../medicine.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MedicineTypeService{

    readonly URI:string  = `/api/v1/medicine/new`; //endpoint

    constructor(private http: HttpClient){}

    // create(medicine:MedicineType):Observable<any>{
    //     console.log(this.URI,medicine);
    //     return this.http.post<MedicineType>(`${this.URI}`,medicine);
    // }


    getAll():Observable<MedicineType[]>{
        return this.http.get<MedicineType[]>(`/api/v1/medicine/get`);
      }
          
    create(medicine:MedicineType):Observable<any>{
    return this.http.post<MedicineType>(`/api/v1/medicine/new`,medicine);
    }

    
    delete(medicineId: MedicineType): Observable<any>{
    return this.http.delete<MedicineType>(`/api/v1/medicine/delete/${medicineId}`);
    }
    
    update(medicineId:MedicineType,medicine:MedicineType):Observable<any>{
    return this.http.put<MedicineType>(`/api/v1/medicine/put/${medicineId}`,medicine);
    }

}