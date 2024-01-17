import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { LoginComponent } from './login/login.component';
import { SendMailPwComponent } from './send-mail-pw/send-mail-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'send-mail-pw', component: SendMailPwComponent },
  { path: 'reset-pw', component: ResetPwComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'select-avatar', component: SelectAvatarComponent },
];
