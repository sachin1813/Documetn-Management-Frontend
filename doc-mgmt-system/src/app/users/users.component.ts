import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { CommonService } from '../core/common.service';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../shared/table/table.component';
import { FormsModule } from '@angular/forms';

//interface for document list
interface User {
  login_id:string;
  name:string;
  status:string;
  user_id:string;
  user_type:string;
  username:string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,TableComponent,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class UsersComponent {

  showEditModal = false;
  showAddModal = false;
  showDeleteModal = false;
  editData = { login_id: '', username: '',status : '',user_type : '',name : '',user_id : '' };
  deleteData = { doc_id : '' }
  userList : any[] = []
  userHeadKey :any[] = ['login_id','name','status','user_type','username']
  userHead :any[] = ['Login ID','Name','Status','User Type','User Name']
  status : string = "ALL";
  constructor(
      private apiservice: ApiService,
      private router: Router,
      private common: CommonService
  ){}
  ngOnInit(){
    this.common.componentType = 'user';
    this.getAllUser(this.status);
  }

  getAllUser(status:string){
    this.apiservice.allUserDetails(status).subscribe((res:any) => {
      this.userList = res['users']
     },(err) => {
      alert(err)
     })
  }

  onEdit(document: any) {
    this.editData = { ...document };
    this.showEditModal = true;
  }

  onDelete(document: any) {
    //this.deleteData = {...document};
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
    const data = {...this.editData}
    const user_id = data.user_id
    console.log(data.user_id)
    this.apiservice.updateUserDetails(user_id,data).subscribe((res:any) => {
      const index = this.userList.findIndex(d => d.user_id === user_id);
      if (index !== -1) {
        this.userList[index] = { ...this.userList[index], ...data };
      }
      console.log("user modification completed !!")
    },(err:any) => {
      this.showEditModal = false
    },() => {
      this.showEditModal = false
    })
  }

  submitDelete(){
    // const dataObject = {
    //   doc_id : this.deleteData.doc_id
    // }

    // this.apiservice.deleteDocument(dataObject).subscribe((res:any) => {
    //     console.log("document deleted succsfully")
    //     this.documentList = this.documentList.filter(doc => doc['doc_id'] !== this.deleteData.doc_id)
    // },(err:any) => {
    //   console.log("something went wrong "+err)
    // },() => {
    //   this.showDeleteModal = false;
    //   this.getAllDocument()
    // })
  }

  refreshData(): void {
    this.showAddModal = false;
    //this.getAllDocument()
  }

  openAddModal(){
    this.showAddModal = true;
  }
}
