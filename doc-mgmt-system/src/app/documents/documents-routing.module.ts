import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './add-document/add-document.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
