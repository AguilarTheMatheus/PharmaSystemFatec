import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {EmployeeService} from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(){
    this.EmployeeForm = this.fb.group({
        id: [undefined],
        firstName: [''],
        lastName: [''],
        permissionType: [''],
        email: [''],
        cpf: [''],
        
    });         
}  


private createEmployee(){
  this.employeeService.create(this.EmployeeForm.value)
}


}
 