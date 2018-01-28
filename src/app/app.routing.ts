import {Router} from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';
import {CashBoxComponent} from './cash-box/cash-box.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
    {path: '', component: LoginComponent},
    {path: 'menu', component: MainMenuComponent},
    {path: 'cashbox', component: CashBoxComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
