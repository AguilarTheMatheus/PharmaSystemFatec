import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {ClientService} from './service/cliente.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  ClientForm!: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) { }

 

  ngOnInit() {
    this.createForm();
  }

  private createForm(){
    this.ClientForm = this.fb.group({
        id: [undefined],
        firstName: [''],
        lastName: [''],
        phone: [''],
        address: [''],
        cpf: [''],
        
    });         
}  

private createClient(){
  this.clientService.create(this.ClientForm.value)
}

}
