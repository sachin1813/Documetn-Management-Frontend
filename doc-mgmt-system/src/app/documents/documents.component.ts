import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { CommonService } from '../core/common.service';
import { TableComponent } from '../shared/table/table.component';
import { FormsModule } from '@angular/forms';
import { AddDocumentComponent } from './add-document/add-document.component';

//interface for document list
interface Document {
  doc_id: string;
  title: string;
  description: string;
  uploaded_by:string;
  status:string;
}

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule,TableComponent,FormsModule,AddDocumentComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class DocumentsComponent {

  documentList : Document[] =[];
  showEditModal = false;
  showAddModal = false;
  showDeleteModal = false;
  editData = { title: '', description: '',doc_id : '' };
  deleteData = { doc_id : '' }

  constructor(
        private apiservice: ApiService,
        private router: Router,
        private common: CommonService
    ){}

  ngOnInit(){
      this.common.componentType = 'document';
      this.getAllDocument()
  }

  getAllDocument(){
    this.apiservice.allDocument().subscribe((res:any) => {
        if(res["status_code"] == "200"){
          this.documentList = res['document']        
        }
       },(err) => {
        alert(err)
       });
  }
  
  onEdit(document: any) {
    this.editData = { ...document };
    this.showEditModal = true;
  }

  onDelete(document: any) {
    this.deleteData = {...document};
    this.showDeleteModal = true;
  }

  onDownlaod(document:any){
      //will implemment
  }
  closeModal() {
    this.showEditModal = false;
    this.showAddModal = false;
    this.showDeleteModal = false;
  }

  submitEdit(){
    const data = {
      title : this.editData.title,
      description: this.editData.description
    }
    const doc_id = this.editData.doc_id
    this.apiservice.updateDocumentDetails(doc_id,data).subscribe((res:any) => {
      this.showEditModal = false
      const index = this.documentList.findIndex(d => d.doc_id === doc_id);
      if (index !== -1) {
        console.log(index)
        this.documentList[index] = { ...this.documentList[index], ...data };
        console.log(this.documentList)
      }
    },(err) => {
      this.showEditModal = false
    })
  }

  submitDelete(){
    const dataObject = {
      doc_id : this.deleteData.doc_id
    }

    this.apiservice.deleteDocument(dataObject).subscribe((res:any) => {
        console.log("document deleted succsfully")
        this.documentList = this.documentList.filter(doc => doc['doc_id'] !== this.deleteData.doc_id)
    },(err:any) => {
      console.log("something went wrong "+err)
    },() => {
      this.showDeleteModal = false;
      this.getAllDocument()
    })
  }

  refreshData(): void {
    this.showAddModal = false;
    this.getAllDocument()
  }

  openAddModal(){
    this.showAddModal = true;
  }
  
}
