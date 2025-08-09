import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-contact',
  imports: [FormComponent, WhatsappComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  title_session = "Contato"
}
