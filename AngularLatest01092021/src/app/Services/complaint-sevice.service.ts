import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComplaintSeviceService {
  private url: string ='https://localhost:62819/api/';
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
    return this._http.get(this.url+"Complaint").pipe(tap(this.extractData),catchError(this.handleError<any>('ComplaintMode Add Failed')));
  }
  AddMode(swa:any):Observable<any>{
    debugger;
    return this._http.post<any>(this.url +"Complaint/AddOrUpdate",swa).pipe(tap(this.extractData),catchError(this.handleError<any>('ComplaintMode Add Failed')));
  }
  GetComplaintsById(id:string):Observable<any>
  { 
    debugger
    return this. _http.get<any>(this.url +"Complaint/"+ id).pipe(tap(),catchError(this.handleError<any>('Country Add Failed')));
  }
}
