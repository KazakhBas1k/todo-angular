import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoInfoComponent } from './components/todo-info/todo-info.component';
import { PopupComponent } from './components/popup/popup.component';
import { InputComponent } from './forms/input/input.component';
import { SelectComponent } from './forms/select/select.component';
import { SubmitComponent } from './controllers/submit/submit.component';
import { DeleteComponent } from './controllers/delete/delete.component';
import {HttpClientModule} from "@angular/common/http";
import { PrintWindowComponent } from './components/print-window/print-window.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoInfoComponent,
    PopupComponent,
    InputComponent,
    SelectComponent,
    SubmitComponent,
    DeleteComponent,
    PrintWindowComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
