import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  
  constructor(private http:HttpClient, private snackBar:MatSnackBar){}

  // LocalHost -> http://localhost:8080/enviar-email
  // Render -> https://api-email-sender.onrender.com/enviar-email

  submitForm(form: NgForm) {
  this.http.post<{ mensagem: string }>('https://api-email-sender.onrender.com/enviar-email', this.mensagem).subscribe({
    next: () => {
      this.snackBar.open('Mensagem enviada com sucesso!', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snackbar-success'],
      });
      form.reset(); // <- aqui é o local correto
    },
    error: () => {
      this.snackBar.open('Erro ao enviar a mensagem.', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snackbar-error']
      });
    }
  });
}

}


// Antigo 2
//  submitForm(form: NgForm) {
//     this.http.post<{ mensagem: string }>('https://api-email-sender.onrender.com/enviar-email', this.mensagem)
//       .subscribe({
//         next: res => {
//           alert(res.mensagem);
//           form.reset();  
//         },
//         error: err => alert('Erro ao enviar a mensagem: ' + err.message)
//       });
//   }
// }


// Antigo
//   submitForm(form: NgForm){

//     this.http.post<{mensagem:string}>('https://api-email-sender.onrender.com/enviar-email', this.mensagem)
//     .subscribe({
//       next:res => alert(res.mensagem),
//       error:err => alert(err + 'Erro ao enviar a mensagem')
//      })

//   }

// }