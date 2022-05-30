import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {ClientService} from './service/cliente.service';
import {Client} from "./client.modal";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  ClientForm!: FormGroup;
  


@Input()
editing: boolean;

@Output()
onSubmit = new EventEmitter<Client>();

@Output()
OnCancel = new EventEmitter<void>();
//date: any;


  constructor(private fb: FormBuilder, private clientService: ClientService) { }

 

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
    this.ClientForm = this.fb.group({
        // id: [undefined],
        firstName: [''],
        lastName: [''],
        phone: [''],
        address: [''],
        cpf: [''],
        
    });         
}  

onCancelButton(){
  this.OnCancel.emit();
  }

  
  

 createClient(){
  this.clientService.create(this.ClientForm.value).subscribe(()=>{
    console.log("criado com sucesso!");
  },error=>console.log("erro ", error));
}

}
