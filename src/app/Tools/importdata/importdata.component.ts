
import { Component, EventEmitter, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { humanizeBytes, MDBSpinningPreloader, ToastService, UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { IMyOptions } from 'ng-uikit-pro-standard';
import { Defaultvalue } from 'src/app/General/Defaults';
import { GeneralserService } from 'src/app/General/generalser.service';
import { signatoryclass } from 'src/app/General/Models/signatory';
import { ImportdataserService } from './importser.service';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.scss']
})
export class ImportdataComponent implements OnInit {
public myDatePickerOptions: IMyOptions = {
// Your options
};

disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;
  formData: FormData;
  model :any;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  @HostListener('input') oninput() {
    

    // if (this.importdetails.valid) {
    //   this.disabledSubmitButton = false;
    // }
  }
  @ViewChild("fileInput") fileInput;
  signatories= new signatoryclass();
  importdetails: FormGroup;
  importerror:string;

  constructor(private fb: FormBuilder,public myService: ImportdataserService , public mygenserv :GeneralserService , private mdbSpinningPreloader: MDBSpinningPreloader) 
  { 
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {

        //console.log( this.signatories.AllSinatory);
     this.importdetails = this.fb.group({
     realdeptname: [''],
     effectivedate: [new Date ,Validators.required],
     signatorydata:'',
     usedeptname:'',
     Sess: ['2016/2017'],
     Sem: ['2'],


   });


  }
  // get name() {
  //   return this.contactForm.get('contactFormName');
  // }
  // get email() {
  //   return this.contactForm.get('contactFormEmail');
  // }
   get signatorydatas() {
     return this.importdetails.get('signatorydata');
   }
  // get message() {
  //   return this.contactForm.get('contactFormMessage');
  // }
  // get copy() {
  //   return this.contactForm.get('contactFormCopy');
  // }
showOptions()
 {
   //console.log(    this.importdetails );
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

   
  onSubmit() {

    
   if(this.files.length <1)
   {alert("Nothing to show ...")
     return
   }
  
   
   else{
     //   console.log(this.files[0])
   }

 let fileToUpload = this.files[0];
    // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, (error: any) => {
    //   console.log('Error', error);
    // });
     console.log(this.importdetails.value)
     //console.log(this.importdetails)
     if (!this.importdetails.value.usedeptname) this.importdetails.value.realdeptname="";

     if ((this.importdetails.value.usedeptname) && (this.importdetails.value.realdeptname==""))
     {
       alert("DEPARTMENT NAME CANNOT BE EMPTY")
       return
     }
     let data = this.getFullSingatory(this.importdetails.value.signatorydata);
     if (data ==null){return }
             this.mdbSpinningPreloader.start();
             this.myService.upload(fileToUpload.nativeFile, Defaultvalue.baseUrl+Defaultvalue.Studentdatafolder ,
// tslint:disable-next-line: max-line-length
              this.importdetails.value.effectivedate , this.importdetails.value. Sess,this.importdetails.value. Sem , data.signatory, data.designation,  data.standingfor,  this.importdetails.value.realdeptname)
           .subscribe(res =>
            {
               //console.log(res);
               this.importerror=res.toString();
            } ,
            error =>      
             {    this.importerror = error;
              this.mdbSpinningPreloader.stop();  
              if(this.importerror=="[object ProgressEvent]")    {  
                 this.importerror="NETWORK PROBLEM CONNECTING TO SERVER/"+this.importerror;
               
                 }
        
               alert(this.importerror);
                                              
             },
             () => { 
              this.mdbSpinningPreloader.stop();
              this.importerror= this.importerror +  " FINALLY FINISHED  UPLOADING "
              alert(this.importerror);
               console.log("FINALLY FINISHED  UPLOAD" )
              }             
          );

  }
 showFiles() {
      let files = '';
       for (let i = 0; i < this.files.length; i ++) {
         console.log(this.files[i])
         files += this.files[i].name;
          if (!(this.files.length - 1 === i)) {
            files += ',';
         }
       }
      return files;
   }

   startUpload(): void {
       const event: UploadInput = {
       type: 'uploadAll',
       url: 'your-path-to-backend-endpoint',
       method: 'POST',
       data: { foo: 'bar' },
       };
       this.files = [];
       this.uploadInput.emit(event);
   }

  // cancelUpload(id: string): void {
  //     this.uploadInput.emit({ type: 'cancel', id: id });
  // }

 onUploadOutput(output: UploadOutput | any): void {

      if (output.type === 'allAddedToQueue') {
      } else if (output.type === 'addedToQueue') {
        this.files.push(output.file); // add file to array when added
      } else if (output.type === 'uploading') {
        // update current data in files array for uploading file
        const index = this.files.findIndex(file => file.id === output.file.id);
        this.files[index] = output.file;
      } else if (output.type === 'removed') {
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
      } else if (output.type === 'dragOver') {
        this.dragOver = true;
      } else if (output.type === 'dragOut') {
      } else if (output.type === 'drop') {
        this.dragOver = false;
      }
      this.showFiles();
  }
  }