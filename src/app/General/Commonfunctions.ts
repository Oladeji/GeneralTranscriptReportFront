
import { Observable ,throwError } from "rxjs";
import { camps } from "./Models/camps";
import { facs } from "./Models/facs";
import { depts } from "./Models/depts";
import { progs } from "./Models/progs";
import { progoptions } from "./Models/progoptions.1";
import { effectivedepts } from "./Models/effectivedepts";
import { HttpErrorResponse } from "@angular/common/http";

import { catchError, retry } from 'rxjs/operators';
export class CommonFunctions
{
//   parseErrorBlob(err: HttpErrorResponse): Observable<any> {
//     const reader: FileReader = new FileReader();

//     const obs = Observable.create((observer: any) => {
//       reader.onloadend = (e) => {
//         observer.error(JSON.parse(reader.result));
//         observer.complete();
//       }
//     });
//     reader.readAsText(err.error);
//     return obs;
// }




 
parseErrorBlob(err: HttpErrorResponse) {
 

  console.log( err.headers.get('Content-Type')) ;
   const reader: FileReader = new FileReader();
 
   const obs = Observable.create((observer: any) => {
     reader.onloadend = (e) => {
       observer.error(JSON.parse(reader.result.toString()));
       observer.complete();
     }
   });
   reader.readAsText(err.error);
   console.log(reader.result);
   if (err instanceof HttpErrorResponse && err.status == 404) {
    return throwError("Data Not Found")
}


   return   throwError(reader.result); 
 }
public handleError2(error:  any) {
    
    let errMsg: any
    errMsg=error;
      errMsg = error._body;
    
    return Observable.throw(errMsg);
  }

  // public handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an ErrorObservable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };
  public handleError(error: any) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
    //  console.error('An error occurred:', error.error.message);
      return throwError(error.error.message);
    } else 
    {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
    //  console.error(
      //  `Backend returned code ${error.status}, ` +
        //`body was: ${error.error}`);
        return throwError(error.error);
    }
    // return an ErrorObservable with a user-facing error message
   // return throwError(
   //   'Something bad happened; please try again later.');
  }
  public HandleSimpleError(error: Response|any ) {
    console.error(error);
    let errMsg:string
    if(error instanceof Response)
    {
      const body = error.json() || '';
      const err =  JSON.stringify(body);
      errMsg =`${error.status}-${error.statusText||''} ${err}`;

   }
   else {
    errMsg = error.message ? error.message : error.toString();
   }
    return throwError(errMsg  );
}

  getcamplist(thelist:any[]):camps[]
  {
  //let   camplist:camps[]=[];
   let   camplist=[];
  //  camplist= new Array() camps[];

    for (var i = 0; i < thelist.length; i++) 
    {
       // alert(thelist[i].MYCAMPAKA );
  //    camplist.push(  new camps(thelist[i].MYCAMPID,thelist[i].MYCAMPAKA,thelist[i].MYCAMPNAME))
   camplist.push( {value:thelist[i].MYCAMPID,label :thelist[i].MYCAMPNAME})

    }
     console.log(camplist)
      return camplist;


  }
  getfaclist(thelist:any[]):facs[]
  {
    let   faclist=[];
  //  camplist= new Array() camps[];

    for (var i = 0; i < thelist.length; i++) 
    {
      let   ifaclist=thelist[i].MYFACLIST;
    for (var j= 0; j < ifaclist.length; j++) 
      {
       // faclist.push(new facs (ifaclist[j].MYCAMPID ,ifaclist[j].MYFACID,ifaclist[j].MYFACNAME ));
         faclist.push( { value: ifaclist[j].MYFACID, label :ifaclist[j].MYFACNAME });
      }
    }
      return faclist;
  }

  filterdeptlist(ideptlist:any[], facid: any):depts[]
  {
    let   deptlist:depts[]=[];
   console.log(ideptlist);
   console.log(facid);
    for (var k= 0; k < ideptlist.length; k++) 
    {
      if (ideptlist[k].myFacId==facid)
      deptlist.push(new depts (ideptlist[k].myCampId ,ideptlist[k].myFacId,ideptlist[k].myDeptId,ideptlist[k].myDeptName ));

    }
    console.log(deptlist);
    return deptlist;
  }

  filterproglist(iproglist:any[], deptid: any):progs[]
  {
    let   proglist:progs[]=[];
   console.log(iproglist);
   
   for (var l= 0; l < iproglist.length; l++) 
            {
              if (iproglist[l].myDeptId==deptid)
             proglist.push(new progs (iproglist[l].myCampId ,iproglist[l].myFacId,iproglist[l].myDeptId,iproglist[l].myProgId,iproglist[l].myProgName ));
            }  
    console.log(proglist);
    return proglist;
  }

  filterprogoptionlist(iprogoptionlist:any[], prog: any):progoptions[]
  {
    let   progoptionlist:progoptions[]=[];
   console.log(iprogoptionlist);
   console.log(prog);
   for (var m= 0; m < iprogoptionlist.length; m++) 
   {
    if ((iprogoptionlist[m].myDeptId==prog.myDeptId  ) && (iprogoptionlist[m].myProgId==prog.myProgId  ) )
    progoptionlist.push(new progoptions (iprogoptionlist[m].myCampId ,iprogoptionlist[m].myFacId,iprogoptionlist[m].myDeptId,iprogoptionlist[m].myProgId,iprogoptionlist[m].myProgOptionId,iprogoptionlist[m].myProgOptionName ));
  }    
    console.log(progoptionlist);
    return progoptionlist;
  }

  filtereffectivedeptlist(ieffectivedeptlist:any[], effectdept: any):effectivedepts[]
  {
    let   effectivedeptlist:effectivedepts[]=[];
   console.log(ieffectivedeptlist);
   console.log(effectdept);
  
   for (var n= 0; n < ieffectivedeptlist.length; n++) 
   {
    if ((ieffectivedeptlist[n].myDeptId==effectdept.myDeptId  ) && (ieffectivedeptlist[n].myProgId==effectdept.myProgId )  && (ieffectivedeptlist[n].myProgOptionId==effectdept.myProgOptionId  ) )
     effectivedeptlist.push(new effectivedepts (ieffectivedeptlist[n].myCampId ,ieffectivedeptlist[n].myFacId,ieffectivedeptlist[n].myDeptId,ieffectivedeptlist[n].myProgId,ieffectivedeptlist[n].myProgOptionId,ieffectivedeptlist[n].myEffectiveDeptId,ieffectivedeptlist[n].myGradBosId, ieffectivedeptlist[n].myCertDeptName  ));
   }
    console.log(effectivedeptlist);
    return effectivedeptlist;
  }


  getdeptlist(thelist:any[]):depts[]
  {
    //let   deptlist:depts[]=[];
     let   deptlist=[];
    for (var i = 0; i < thelist.length; i++) 
    {
         let   ifaclist=thelist[i].MYFACLIST;

      
         for (var j= 0; j < ifaclist.length; j++) 
         {
              //faclist.push(new facs (ifaclist[j].MYCAMPID ,ifaclist[j].MYFACID,ifaclist[j].MYFACNAME ));
             let   ideptlist=ifaclist[j].MYDEPTLIST;
             console.log("DEPT"+ideptlist)
             //console.log("DEPTccc"+ideptlist[i] .MYDEPTLIST);
             //  this.camplist.push(new camps(thelist[i].MYCAMPID,thelist[i].MYCAMPAKA,thelist[i].MYCAMPNAME))
            for (var k= 0; k < ideptlist.length; k++) 
           {
            //  deptlist.push(new depts (ideptlist[k].MYCAMPID ,ideptlist[k].MYFACID,ideptlist[k].MYDEPTID,ideptlist[k].MYDEPTNAME ));
  deptlist.push( { value:ideptlist[k].MYDEPTID, label:ideptlist[k].MYDEPTNAME });

            }
         }
     }
      return deptlist;
  }

  getproglist(thelist:any[]):progs[]
  {
    let   proglist=[];
    for (var i = 0; i < thelist.length; i++) 
    {
         let   ifaclist=thelist[i].MYFACLIST;
         
      
         for (var j= 0; j < ifaclist.length; j++) 
         {
             
             let   ideptlist=ifaclist[j].MYDEPTLIST;
           
            for (var k= 0; k < ideptlist.length; k++) 
           {
            let   iproglist=ideptlist[k].MYPROGLIST;
            for (var l= 0; l < iproglist.length; l++) 
            {
            // proglist.push(new progs (iproglist[l].MYCAMPID ,iproglist[l].MYFACID,iproglist[l].MYDEPTID,iproglist[l].MYPROGID,iproglist[l].MYPROGIDNAME ));
            proglist.push({ value:iproglist[l].MYPROGID,label :iproglist[l].MYPROGIDNAME });
            
            }  
           }
         }
     }
      return proglist;
  }
  getprogoptionlist(thelist:any[]):progoptions[]
  {
    let   progoptionlist=[];
    for (var i = 0; i < thelist.length; i++) 
    {
         let   ifaclist=thelist[i].MYFACLIST;
         
      
         for (var j= 0; j < ifaclist.length; j++) 
         {
             
             let   ideptlist=ifaclist[j].MYDEPTLIST;
           
            for (var k= 0; k < ideptlist.length; k++) 
           {
            let   iproglist=ideptlist[k].MYPROGLIST;
            for (var l= 0; l < iproglist.length; l++) 
            {
              let   iprogoptionlist=iproglist[l].MYPROGOPTIONLIST;
              for (var m= 0; m < iprogoptionlist.length; m++) 
            {

            //  progoptionlist.push(new progoptions (iprogoptionlist[m].MYCAMPID ,iprogoptionlist[m].MYFACID,iprogoptionlist[m].MYDEPTID,iprogoptionlist[m].MYPROGID,iprogoptionlist[m].MYPROGOPTIONID,iprogoptionlist[m].MYPROGOPTIONNAME ));
           
              progoptionlist.push( { value :iprogoptionlist[m].MYPROGOPTIONID,label :iprogoptionlist[m].MYPROGOPTIONNAME });
            
            }        
          
          }  
           }
         }
     }
      return progoptionlist;
  }
  geteffectivedeptlist(thelist:any[]):effectivedepts[]
  {
    let   effectivedeptlist=[];
    for (var i = 0; i < thelist.length; i++) 
    {
         let   ifaclist=thelist[i].MYFACLIST;
         
      
         for (var j= 0; j < ifaclist.length; j++) 
         {
             
             let   ideptlist=ifaclist[j].MYDEPTLIST;
           
            for (var k= 0; k < ideptlist.length; k++) 
           {
            let   iproglist=ideptlist[k].MYPROGLIST;
            for (var l= 0; l < iproglist.length; l++) 
            {
              let   iprogoptionlist=iproglist[l].MYPROGOPTIONLIST;
              for (var m= 0; m < iprogoptionlist.length; m++) 
            {
              let   ieffectivedeptlist=iprogoptionlist[m].MYEFFECTIVEDEPTLIST;
              for (var n= 0; n < ieffectivedeptlist.length; n++) 
              {
              //  effectivedeptlist.push(new effectivedepts (ieffectivedeptlist[n].MYCAMPID ,ieffectivedeptlist[n].MYFACID,ieffectivedeptlist[n].MYDEPTID,ieffectivedeptlist[n].MYPROGID,ieffectivedeptlist[n].MYPROGOPTIONID,ieffectivedeptlist[n].MYEFFECTIVEDEPTID,ieffectivedeptlist[n].MYGRADBOSID, ieffectivedeptlist[n].MYCERTDEPTNAME  ));
                effectivedeptlist.push({ value :ieffectivedeptlist[n].MYGRADBOSID, label:ieffectivedeptlist[n].MYGRADBOSID,certdept: ieffectivedeptlist[n].MYCERTDEPTNAME  });

              }
             }             
           }  
           }
         }
     }
      return effectivedeptlist;
  }
  
}