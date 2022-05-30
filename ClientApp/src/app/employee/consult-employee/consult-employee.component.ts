import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Employee } from '../employee.modal';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-consult-employee',
  templateUrl: './consult-employee.component.html',
  styleUrls: ['./consult-employee.component.css'],
  
})
export class ConsultEmployeeComponent implements OnInit {
  
  ConsultEmployeeForm!: FormGroup;

  constructor(private filterb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAll();
    this.obterDataAtual();
  }



  
now : any;
listEmployee?:Employee[];

public  obterDataAtual() {
  const date = new Date();

  const ano = date.getFullYear();
  const mes = date.getMonth()+1;
  const dia = date.getDate();

  let mesValor = '';
  let diaValor = '';
  let anoValor = '';

  anoValor = ((ano < 10) ? '0' : '').concat(ano.toString())
  mesValor = ((mes < 10) ? '0' : '').concat(mes.toString())
  diaValor = ((dia < 10) ? '0' : '').concat(dia.toString())

  var valor = (diaValor).concat('/').concat(mesValor).concat('/').concat(anoValor);
  this.now = valor;
  return valor;
}

  private createFilterForm(){
    this.ConsultEmployeeForm = this.filterb.group({
        // id: [undefined],
        firstName: [''],
        permissionType: [''],
        cpf: [''],
        
    });         
}  


// private createFilterEmployee(){
//   this.consultEmployeeService.create(this.ConsultEmployeeForm.value)
// }



getAll(){
  console.log('entrou get');
  this.employeeService.getAll().subscribe((response)=>{
    
    console.log('primeiro response',response);

    if(response){
      this.listEmployee = response;
    }

    console.log('lista',this.listEmployee);
  },error=>console.log("erro ", error));;
} 




}
