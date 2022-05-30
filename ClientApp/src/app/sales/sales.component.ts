import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from './service/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  SalesForm!: FormGroup;

  constructor(private fb: FormBuilder, private salesService: SalesService) { }

  ngOnInit() {
    this.createForm();
    this.obterDataAtual();
  }


  
now : any;

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


private createForm(){
  this.SalesForm = this.fb.group({
      // product: [''], 
      totalValue: [''],
      // category: [''],
      employeeId: [''],
      costumerId: [''],
      Discount:[''],
      // category:[''],
      // quantity: [''],
      
  });         
}  

createSale(){
  this.salesService.create(this.SalesForm.value).subscribe(()=>{
    console.log("criado com sucesso!");
  },error=>console.log("erro ", error));
}




}
