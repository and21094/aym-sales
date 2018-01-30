import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, 
  MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatDialogModule } from '@angular/material';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { BillsComponent } from './bills/bills.component';
import { CashBoxComponent } from './cash-box/cash-box.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginComponent,
    BillsComponent,
    CashBoxComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ],
})
export class AppModule { }
