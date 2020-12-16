import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { Defaultvalue } from 'src/app/General/Defaults';
import { GeneralserService } from 'src/app/General/generalser.service';
import { signatoryclass } from 'src/app/General/Models/signatory';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {
gentranscripterror: any;
  signatories= new signatoryclass();
  TranscriptFG: FormGroup;
  constructor( private fb: FormBuilder , public myRepservice :GeneralserService , private mdbSpinningPreloader: MDBSpinningPreloader) 
  { 

  }
 // 
  ngOnInit() {
    this.TranscriptFG = this.fb.group({
      MatNo: "",
      Aset:"",
      Address:"",
      RefId:"",
      signatorydata:'',
    })
  }
    get signatorydatas() {
     return this.TranscriptFG.get('signatorydata');
   }
    getFullSingatory(signatorydata)
 {
   let data ;
     
      this.signatories.AllSinatory.forEach(element => {
       if(element.value===signatorydata)
       {
          data =element;
       }
     });
   return data
 }
  GetSelectedStudent(student)
  {
  
    this.TranscriptFG.patchValue({     MatNo: student.MYTSTUDENTID   });
    this.TranscriptFG.patchValue({     Aset: student. MYASETID   });
    this.TranscriptFG.patchValue({     Address: student. MYDELIVERYADDRESS });
    this.TranscriptFG.patchValue({     RefId: student. MYSCHLFEESCARDSERIALNO });

  }
  searchfortranscript(Transdata)
  {
  console.log(Transdata);
  this.mdbSpinningPreloader.start();
  var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
     let data = this.getFullSingatory(this.TranscriptFG.value.signatorydata);
     if (data ==null){return }
  this.myRepservice.PrintTranscriptService(Transdata.MatNo,Transdata.Aset,Transdata.Address,Transdata.RefId,data.signatory,data.designation,data.signedfor,Defaultvalue.baseUrl+Defaultvalue.transcript)

 .subscribe((pdfreport) =>
  {
   console.log("INSIDE FINAL " + pdfreport);//to be remomed later
   var file = new Blob([pdfreport], { type: 'application/pdf' });
  // var blob = new Blob([pdfreport.blob()], {type: 'application/pdf'});
   var fileURL = URL.createObjectURL(file);
    window.open(fileURL, strWindowFeatures);
  
 },

 
 error => {
  
   this.gentranscripterror = error;
    this.mdbSpinningPreloader.stop(); 
 },
 () => { this.mdbSpinningPreloader.stop(); alert("FINISHED FINALLY ");  }
 );

  }
}
