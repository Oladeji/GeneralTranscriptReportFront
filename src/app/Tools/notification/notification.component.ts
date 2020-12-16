import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MDBSpinningPreloader, ToastService } from 'ng-uikit-pro-standard';
import { CommonFunctions } from 'src/app/General/Commonfunctions';
import { Defaultvalue } from 'src/app/General/Defaults';
import { GeneralserService } from 'src/app/General/generalser.service';
import { camps } from 'src/app/General/Models/camps';
import { depts } from 'src/app/General/Models/depts';
import { effectivedepts } from 'src/app/General/Models/effectivedepts';
import { facs } from 'src/app/General/Models/facs';
import { progoptions } from 'src/app/General/Models/progoptions.1';
import { progs } from 'src/app/General/Models/progs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  gennotificationerror: any;
  organo: any;
  thecamps :camps[];
  thefacs:facs[];
  thedepts:depts[];
  theprogs:progs[];
  theprogoptions:progoptions[];
  theeffectivedepts:effectivedepts[];
  NotificatioFG: FormGroup;

  constructor( private fb: FormBuilder, public mygenserv :GeneralserService, private mdbSpinningPreloader: MDBSpinningPreloader ) 
  { 

  }
  SetDepts(faccode)
  {
    console.log("printing faccode");
    console.log(faccode);
    console.log("printing faccode");
    this.thedepts= new CommonFunctions().filterdeptlist( new CommonFunctions().getdeptlist(this.organo),faccode);
    console.log (this.thedepts);
  }
  SetProgs(deptId)
  {
    console.log("printing depts");
    console.log(deptId);
    console.log("printing depts");
    this.theprogs= new CommonFunctions().filterproglist( new CommonFunctions().getproglist(this.organo),deptId);
    console.log (this.thedepts);
  }

    SetProgOptions(prog)
  {
    console.log("printing SetProgOptions");
    console.log(prog);
    console.log("printing SetProgOptions");
    this.theprogoptions= new CommonFunctions().filterprogoptionlist( new CommonFunctions().getprogoptionlist(this.organo),prog);
    console.log (this.thedepts);
  }
  SetEffectivedepts(options)
  {
    console.log("printing SetProgOptions");
    console.log(options);
    console.log("printing SetProgOptions");
    this.theeffectivedepts= new CommonFunctions().filtereffectivedeptlist( new CommonFunctions().geteffectivedeptlist(this.organo),options);
    console.log (this.thedepts);
  }
  //
  ngOnInit() {

   this. mygenserv.loadOrganogram( Defaultvalue.baseUrl+Defaultvalue.loadOrganogram )
    .subscribe((res) =>
      {
        this.organo= res;
        console.log(res);
        this.thecamps = new CommonFunctions().getcamplist(res);
        console.log( this.thecamps );
        this.thefacs = new CommonFunctions().getfaclist(res);
        console.log(this.thefacs);
        this.thedepts= new CommonFunctions().getdeptlist(res);
        console.log(this.thedepts);
        this.theprogs= new CommonFunctions().getproglist(res);
        console.log(this.theprogs);
        this.theprogoptions= new CommonFunctions().getprogoptionlist(res);
        console.log(this.theprogoptions);
        this.theeffectivedepts= new CommonFunctions().geteffectivedeptlist(res);
        console.log(this.theeffectivedepts);

      });

      this.NotificatioFG = this.fb.group({
        CampId: "",
       GradBosId:""})
  }
  Printdetails(data)
  {
this.mdbSpinningPreloader.start();
   console.log(data.value.GradBosId);
  var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";


 
  this.mygenserv.PrintNotificationService(data.value.GradBosId,Defaultvalue.baseUrl+Defaultvalue.notificationurl)

  .subscribe((pdfreport) =>
   {
    console.log("INSIDE FINAL " + pdfreport);//to be remomed later
    var file = new Blob([pdfreport], { type: 'application/pdf' });
   // var blob = new Blob([pdfreport.blob()], {type: 'application/pdf'});
    var fileURL = URL.createObjectURL(file);
     window.open(fileURL, strWindowFeatures);
   
  },

  
  error => {
   
    this.gennotificationerror = error;
    console.log("ERROR FORM SUBMISSION: " + error)
     this.mdbSpinningPreloader.stop(); 
  },
  () => {
    this.mdbSpinningPreloader.stop();
    alert("Finished....")
     console.log("FINISHED FINALLY ");  }
  );



  }
onSubmit()
{}
}
