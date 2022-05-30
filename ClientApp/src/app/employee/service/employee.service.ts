
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from '../employee.modal';
 
@Injectable({
    providedIn: 'root'
})
export class EmployeeService{

    readonly URI:string  = `/api/v1/employee/new`; //endpoint

    constructor(private http: HttpClient){}

   


    getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(`/api/v1/costumer/get`);
      }
          
      create(employee:Employee):Observable<any>{
      return this.http.post<Employee>(`/api/v1/costumer/new`,employee);
      }
  
      
      delete(employeeId: Employee): Observable<any>{
      return this.http.delete<Employee>(`/api/v1/costumer/delete/${employeeId}`);
      }
      
      update(employeeId:Employee,employee:Employee):Observable<any>{
      return this.http.put<Employee>(`/api/v1/costumer/put/${employeeId}`,employee);
      }

}