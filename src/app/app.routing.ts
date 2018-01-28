import {Router} from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {path: '', component: LoginComponent},
    {path: 'menu', component: MainMenuComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
