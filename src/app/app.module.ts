import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule, 
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
  MatSelectModule,
  MatGridListModule,
  MatListModule } from '@angular/material';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { BillsComponent } from './bills/bills.component';
import { CashBoxComponent } from './cash-box/cash-box.component';
import { ModalComponent } from './modal/modal.component';
import { DialogComponent } from './dialogs/dialog/dialog.component';
import { SearchCustomerDialogComponent } from './dialogs/search-customer-dialog/search-customer-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginComponent,
    BillsComponent,
    CashBoxComponent,
    ModalComponent,
    DialogComponent,
    SearchCustomerDialogComponent
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
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ],
})
export class AppModule { }
