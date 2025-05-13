import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonService } from '../../core/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName:string = ''
  role:string = ''
  systemTime:String = ''

  userRole : boolean = false
  documentRoles : boolean = false
  ingestionRoles : boolean = false

  constructor(
    private common:CommonService,
    private router: Router,
  ){}

  ngOnInit(){
    this.userName = this.common.user_id
    this.role = this.common.role
    this.updateSystemTime()
    if(this.role === 'ADMIN'){
      this.userRole = true
      this.documentRoles = true
      this.ingestionRoles = true
    }else if(this.role === 'EDITOR'){
      this.documentRoles = true;
      this.ingestionRoles = true
    }else{
      this.documentRoles = true;
    }

  }

  logout(){
    this.router.navigate(["/"],{skipLocationChange : true})
  }

  updateSystemTime(){
    setInterval(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    this.systemTime = formattedTime;
  }, 1000);
  }
}
