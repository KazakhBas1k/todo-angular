import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceComponent} from "./components/invoice/invoice.component";
import {PrintWindowComponent} from "./components/print-window/print-window.component";

const routes: Routes = [ { path: 'print',
  outlet: 'print',
  component: PrintWindowComponent,
  children: [
    { path: 'invoice/:invoiceIds', component: InvoiceComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
