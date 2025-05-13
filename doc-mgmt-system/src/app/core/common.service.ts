import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  user_id:any;
  token:any;
  token_type:any;
  role:any;
  componentType:any;
  constructor() { }

  clearToken() {
    this.token = '';
  }
  
}
