import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonService } from '../../core/common.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
    @Input() headers: string[] = [];
    @Input() data: any[] = [];
    @Input() dataExtrator: any[] = []
    @Output() edit = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() download = new EventEmitter<any>();
    @Output() ingestion = new EventEmitter<any>();

    editButtonFlag : boolean = false;
    deleteButtonFlag : boolean = false
    downloadButtonFlag : boolean = false;
    ingestionButtonFlag: boolean = false;

    constructor(
      private common : CommonService
    ){}

    ngOnInit(){

      if(this.common.role === 'ADMIN'){
        this.editButtonFlag = true
        this.deleteButtonFlag = true
        if(this.common.componentType === 'document'){
          this.downloadButtonFlag = true
          this.ingestionButtonFlag = true
        }
      }

      if(this.common.role === 'VIEWER'){
        if(this.common.componentType === 'document'){
          this.downloadButtonFlag = true
        }
      }

      if(this.common.role === 'EDITOR'){
        this.editButtonFlag = true
        this.deleteButtonFlag = true
        if(this.common.componentType === 'document'){
          this.downloadButtonFlag = true
          this.ingestionButtonFlag = true
        }
      }

    }
}
