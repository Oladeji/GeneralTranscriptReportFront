import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { CommonFunctions } from './Commonfunctions';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*'
 
  })
};
const options: {
  headers?: HttpHeaders;
  observe: "body";
  params?: HttpParams;
  reportProgress?: boolean;
  responseType: "blob";
  withCredentials?: boolean;
} = {
  observe: "body",
  responseType: "blob",
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append('Access-Control-Allow-Origin', '*')
.append("Accept", "application/pdf")

};


@Injectable({
  providedIn: 'root'
})
export class GeneralserService {

  constructor(private http: HttpClient) { }

  
  loadOrganogram(destinationurl): any
   {
    //let body = JSON.stringify(StoredAppForm);
    //console.log(body);
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');

    //let options = new RequestOptions({ headers: headers });
    return this.http
      .post(destinationurl,  httpOptions)
      //.map ((res )=> <Postumecand>res.json() )
      .pipe(
      catchError(error => { return new CommonFunctions().handleError(error) }))
     // .finally(() => console.log("Finally done with Loading  Organogram"));
     
      //return this.http.post(destinationurl, input, httpOptions);
  }


  getSignatory(jsonFileURL): any{  
    return this.http
    .get(jsonFileURL)  
    .pipe(
      catchError(error => { return new CommonFunctions().handleError(error) }))
}

    PrintNotificationService(BosId:string,destinationurl:any): Observable<any>
    {
          // let input = new FormData();
      //
          // input.append("BosId", BosId);
        
          let body =  JSON.stringify(BosId);
     
          console.log(body); 
          return this.http
             .post(destinationurl, body,  options)
             .pipe(
             // catchError(error => { return new CommonFunctions().handleError(error) })
             catchError(   new CommonFunctions(). parseErrorBlob)
            )
    }

    
  PrintTranscriptService(MatNo:string,Aset:string, Address:string, RefId:string,signatory:string,designation:string,signedfor:string,destinationurl:any): Observable<any>
  {
      
    
        let allinfo =   {MatNo: MatNo, Aset: Aset,Address:Address, RefId:RefId,signatory:signatory,designation:designation,signedfor:signedfor};

        return this.http
           .post(destinationurl, allinfo,  options)
           .pipe(
          //  catchError(error => { return new CommonFunctions().handleError(error) })
          catchError(   new CommonFunctions(). parseErrorBlob)
          )
  }
}
