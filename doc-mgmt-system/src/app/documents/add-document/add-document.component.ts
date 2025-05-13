import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { CommonService } from '../../core/common.service';

@Component({
  selector: 'app-add-document',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.css'
})
export class AddDocumentComponent {
  title = '';
  description = '';
  file: File | null = null;

  constructor(
    private apiService : ApiService,
    private commonService : CommonService
  ){

  }

  @Output() close = new EventEmitter<void>();
  @Output() documentAdded = new EventEmitter<void>();

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }



  submitForm() {
    if (!this.file) return;

    const formData = new FormData();
    formData.append('file', this.file);
    const dataObject = {
      title : this.title,
      description : this.description,
      uploaded_by : this.commonService.user_id
    }

    this.apiService.addDocument(dataObject,formData).subscribe((res:any) => {
      console.log("successfully uploaded the file !!")
    },(err:any) => {
      console.log("something went wrong"+err)
    },()=>{
        this.documentAdded.emit();
        this.close.emit();
    })
  }

}
