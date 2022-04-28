import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {MedicineTypeService} from './service/medicine.serve';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  MedicineForm!: FormGroup;

  constructor(private fb: FormBuilder, private medicineService: MedicineTypeService) { 
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(){
    this.MedicineForm = this.fb.group({
        id: [undefined],
        name: [''],
        price: [''],
        stripe: [''],
        category: [''],
    });         
}  

  private createMedicine(){
    this.medicineService.create(this.MedicineForm.value)
  }

 

}
