import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from "../logo/logo.component";
import { MatCardModule } from '@angular/material/card';
import { InputComponent } from "../input/input.component";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-send-mail-pw',
    standalone: true,
    templateUrl: './send-mail-pw.component.html',
    styleUrl: './send-mail-pw.component.scss',
    imports: [
        FormsModule,
        InputComponent,
        LogoComponent,
        MatCardModule,
        ReactiveFormsModule,
        RouterLink
    ]
})
export class SendMailPwComponent {
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  sendMail() {
    console.log('Mail sollte gesendet werden!', this.emailForm.value);
  }
}
