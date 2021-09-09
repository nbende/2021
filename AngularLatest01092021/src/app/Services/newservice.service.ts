import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  private url: string ='https://localhost:58811/api/';
 // private urlCreate: string ='https://localhost:53168/api/';

  constructor(private _http:HttpClient) { }
  extractData(res: Response) {
    let body=res;
    console.log (body);
    return body || {};
  }
  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      console.log('${operation}failed:${error.message}');
      return of (result as T);
    };

  }
  GetComplaintMode()
  {
    debugger
    return this._http.get(this.url+"Employee").pipe(tap(this.extractData),catchError(this.handleError<any>('ComplaintMode Add Failed')));
  }
  AddMode(swa:any):Observable<any>{
    debugger;
    return this._http.post<any>("https://localhost:53168/api/Complaint/AddOrUpdate",swa).pipe(tap(this.extractData),catchError(this.handleError<any>('ComplaintMode Add Failed')));
  }
}
