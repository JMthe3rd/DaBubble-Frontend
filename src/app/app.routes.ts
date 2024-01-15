import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  // **************************************
  // Hier die SignUpComponent mit der Home oder Login Component tauschen
  { path: '', component: LoginComponent },

  //   **************************************
  { path: 'sign-up', component: SignUpComponent },
  { path: 'select-avatar', component: SelectAvatarComponent },
];
