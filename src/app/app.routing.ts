import {Router} from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';
import {BillsComponent} from './bills/bills.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    { path: 'menu', component: MainMenuComponent, children: [
      { path: '', component: BillsComponent, outlet: 'menuOutlet'}
      { path: 'bills', component: BillsComponent, outlet: 'menuOutlet'}
  	]},
];

export const routing = RouterModule.forRoot(appRoutes);
