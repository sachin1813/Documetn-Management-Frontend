import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Router } from "@angular/router";
import { CommonService } from '../../core/common.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  failueMsg = '';
  
  constructor(
    private authService: ApiService,
    private router: Router,
    private common: CommonService
  ) {}

  onSubmit() { 
    const data = {
      login_id : this.email,
      password : this.password
    }
    
    this.authService.login(data).subscribe((res) => {
      //if(res['status'] == '200'){
        this.common.user_id = res['user_id']
        this.common.token = res['access_token']
        this.common.token_type = res['token_type']
        this.common.role = res['roles']
        this.router.navigate(["/home"], {skipLocationChange: true,});
      //}
     },(err) => {
      alert(err)
     })
   }
}
