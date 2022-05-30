import { Component, OnInit } from '@angular/core';
import { ClientService } from './../service/cliente.service';
import PageResult from "./../../util/page-result.model";
import {Client} from "./../client.modal";

@Component({
  selector: 'app-consult-client',
  templateUrl: './consult-client.component.html',
  styleUrls: ['./consult-client.component.css']
})
export class ConsultClientComponent implements OnInit {

  constructor( private clientService:ClientService) { }

  ngOnInit() {
    this.getAll();
    this.obterDataAtual();
  }


  now : any;
  pageResult: PageResult<Client> = new PageResult();
  listClients?:Client[];

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

  

  getAll(){
    console.log('entrou get');
    this.clientService.getAll().subscribe((response)=>{
      
      console.log('primeiro response',response);

      if(response){
        this.listClients = response;
      }

      console.log('lista',this.listClients);
    },error=>console.log("erro ", error));;
  } 

  delete(Id: any){
    console.log("id do parametro:", Id);

    this.clientService.delete(Id).subscribe(()=>{
      console.log("excluido com sucesso!");
    },error=>console.log("erro ", error));
    
  }
  

}
