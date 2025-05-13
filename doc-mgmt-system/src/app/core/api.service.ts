import { Injectable } from '@angular/core';
import { environment } from "../enviroment/enviroment";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';
import { CommonService } from './common.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private common : CommonService
  ) { }

    login(obj: any): Observable<any> {
      const apiPath = "login";
      const path = `${environment.api_url}${apiPath}`;
      const httpOptions = {};

      return this.http.post(path, obj).pipe(
      catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

  allUserDetails(userStatus:string){
    const apiPath  = `users/users/${userStatus}`
    const path = `${environment.api_url}${apiPath}`;

    const headers_object = new HttpHeaders().set(
            "Authorization",
            "Bearer "+ this.common.token
      );

    const options = {
        headers: headers_object,
        observe: 'response' as const
      };
    return this.http.get(path,options).pipe(
      map(response => response.body),
      catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      })
    );
     

  }


  allDocument(){
    const apiPath  = `documents`
    const path = `${environment.api_url}${apiPath}`;

    const headers_object = new HttpHeaders().set(
            "Authorization",
            "Bearer "+ this.common.token
      );

    const options = {
        headers: headers_object,
        observe: 'response' as const
      };
    return this.http.get(path,options).pipe(
      map(response => response.body),
      catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      })
    );
     

  }

  updateDocumentDetails(doc_id:string,obj:any): Observable<any>{
      const apiPath  = `documents/${doc_id}`
      const path = `${environment.api_url}${apiPath}`;
      const headers_object = new HttpHeaders().set(
            "Authorization",
            "Bearer "+ this.common.token
      );

      return this.http.put(path, obj).pipe(
      catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

  addDocument(dataObject:any,file:FormData){
    const apiPath  = `documents/?title=${dataObject.title}&&description=${dataObject.description}&uploaded_by=${dataObject.uploaded_by}`
    const path = `${environment.api_url}${apiPath}`;
    const headers_object = new HttpHeaders().set(
            "Authorization",
            "Bearer "+ this.common.token
      );
    return this.http.post(path,file).pipe(catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      }))
  }

  deleteDocument(dataObject:any){
    const apiPath  = `documents/${dataObject.doc_id}`
    const path = `${environment.api_url}${apiPath}`;
    const headers_object = new HttpHeaders().set(
            "Authorization",
            "Bearer "+ this.common.token
      );
    const options = {
        headers: headers_object,
        observe: 'response' as const
      };
    return this.http.delete(path,options).pipe(catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      }))
  }

  updateUserDetails(user_id:string,data:any){
    const apiPath  = `users/users/${user_id}`
      const path = `${environment.api_url}${apiPath}`;
      const headers_object = new HttpHeaders().set(
            "Authorization",
            "Bearer "+ this.common.token
      );
      const dataObj = {
        user_type : data.user_type,
        status : data.status,
        role : data.user_type,
      }

      return this.http.put(path, dataObj).pipe(
      catchError((err) => {
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

}
