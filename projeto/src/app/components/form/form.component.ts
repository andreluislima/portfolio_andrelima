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

  // Local host: http://localhost:8080/enviar-email
  // Render: https://mail-api-portifolio-docker-2.onrender.com
  submitForm(){

    this.http.post<{mensagem:string}>('https://mail-api-portifolio-docker-2.onrender.com', this.mensagem)
    .subscribe({
      next:res => alert(res.mensagem),
      error:err => alert(err + 'Erro ao enviar a mensagem')
     })


  }

}
