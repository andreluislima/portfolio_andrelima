import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  nome:string = "";
  phone:string = "";
  email:string = "";
  message:string = "";

  submitForm(){
    alert("Dados enviados")
  }

}
