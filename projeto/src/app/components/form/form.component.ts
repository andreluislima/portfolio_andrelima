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
    nome: "",
    phone:  "",
    email: "",
    message: ""
  };

  constructor(private http:HttpClient){}

  submitForm(){
    this.http.post('http://localhost:3000/enviar-email', this.mensagem)
    .subscribe({
      next:res => alert('Mensagem enviada com sucesso!'),
      error:err => alert('Erro ao enviar a mensagem')
    })

  }

}
