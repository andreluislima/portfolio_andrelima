import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  imports: [CommonModule,
            FormsModule,
            NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  mensagem = {
    name: "",
    phone:  "",
    email: "",
    message: ""
  };

  
  constructor(private http:HttpClient){}

  // LocalHost -> http://localhost:8080/enviar-email
  // Render -> https://api-email-sender.onrender.com/enviar-email

  submitForm(){

    this.http.post<{mensagem:string}>('https://api-email-sender.onrender.com/enviar-email', this.mensagem)
    .subscribe({
      next:res => alert(res.mensagem),
      error:err => alert(err + 'Erro ao enviar a mensagem')
     })
  }
  
}

