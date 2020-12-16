export class onlinepayee

{
    mySurname  : string ;
    myMiddlename  : string ;
    myFirstname  : string ;
    myTStudentId  : string ;
    myMainFeesType  : string ;
    mySchlFeesPayID  : string ;
    mySchlFeesCardSerialNo  : string ;
    mySchlFeesPayDate  : Date ;
    mySchlFeesWebPayDate  : Date ;
    myBankDraftID  : string ;
    myBankName  : string ;
    myRemark  : string ;
    myAmountToPayInSem  : number ;
    myAmountInWord  : string ;
    myFeesDescription  : string ;
    myStudentGUID  : string ;
    myAmountMinusIt  : number ;
    myAppStatus  : string ;
    myDeliveryAddress  : string ;
    myDestinationArea  : string ;
    myDestinationAreaAmount  : number ;
    myPhoneno  : string ;
    myemail  : string ;
    mycourse  : string ;
    myDownloadstate  : string ;

    constructor(  Surname,  Middlename,  Firstname,  
        TStudentId,  MainFeesType,  SchlFeesPayID,  SchlFeesCardSerialNo,
         SchlFeesPayDate,  SchlFeesWebPayDate,  BankDraftID,  BankName,   Remark, 
         AmountToPayInSem,AmountInWord , Feesdescription,StudentGUID, AmountMinusIt,   AppStatus,
           DeliveryAddress,        DestinationArea ,DestinationAmount,phoneno,email ,course,Downloadstate) 
    {
        this.mySurname  = Surname ;
        this.myMiddlename  = Middlename ;
        this.myFirstname   =Firstname;
        this.myTStudentId   =TStudentId;
        this.myMainFeesType   = MainFeesType ;
        this.mySchlFeesPayID   =SchlFeesPayID ;
        this.mySchlFeesCardSerialNo   =SchlFeesCardSerialNo;
        this.mySchlFeesPayDate  = SchlFeesPayDate ;
        this.mySchlFeesWebPayDate  =SchlFeesWebPayDate ;
        this.myBankDraftID   = BankDraftID;
        this.myBankName   =BankName;
        this.myRemark   =Remark;
        this.myAmountToPayInSem  =AmountToPayInSem ;
        this.myAmountInWord   = AmountInWord;
        this.myFeesDescription  = Feesdescription ;
        this.myStudentGUID  =StudentGUID ;
        this.myAmountMinusIt =AmountMinusIt  ;
        this.myAppStatus   =AppStatus;
        this.myDeliveryAddress =DeliveryAddress  ;
        this.myDestinationArea   =DestinationArea;
        this.myDestinationAreaAmount  =DestinationAmount ;
        this.myPhoneno   =phoneno;
        this.myemail  = email ;
        this.mycourse   =course;
        this.myDownloadstate  =Downloadstate ;
    }   
}