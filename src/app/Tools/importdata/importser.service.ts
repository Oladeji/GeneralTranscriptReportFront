import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CommonFunctions } from 'src/app/General/Commonfunctions';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*',
 
  })
};
const options2: {
  headers?: HttpHeaders;
  //observe: "body";
  params?: HttpParams;
  reportProgress?: boolean;
 // responseType: "blob";
  withCredentials?: boolean;
} = {
  //observe: "body",
 //responseType: "blob",
//   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }).append('Access-Control-Allow-Origin', '*')
// .append("Accept", "application/json")
headers: new HttpHeaders({ }).append('Access-Control-Allow-Origin', '*')
.append("Accept", "application/json")
};
@Injectable({
  providedIn: 'root'
})

export class ImportdataserService {

  user: any;

  constructor(private http: HttpClient) { }


 

  upload(fileToUpload: any, destinationurl: string,effectivedate:any, Sess:string , Sem:string  ,signatory:string ,designation:string , standingfor:string ,realdeptname :string)
   {
    let input = new FormData();

    input.append("file", fileToUpload);
    input.append("effectivedate",effectivedate);
    input.append("Sess",Sess);
    input.append("Sem",Sem);
    input.append("signatory",signatory);
    input.append("designation",designation);
    input.append("standingfor",standingfor);
    input.append("realdeptname",realdeptname);
    
  //  console.log( "called -- logging ", bosid + deptname + submitcheck+ effectivedate+effectivedate.toLocaleDateString() );
   return this.http.post(destinationurl, input, options2)
   .pipe(
    catchError(error => { return new CommonFunctions().handleError(error) }));
  }

}
