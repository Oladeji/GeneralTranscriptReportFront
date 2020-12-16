
export class signatoryclass {

      public  signatory:string;
      public  designation:string;
      public standingfor:string ;
  
    
    //  constructor(   signatory:string,  designation:string,   standingfor:string )
    //  {
    //      this.signatory=signatory;
    //     // this.ProgCode=ProgCode;
    //      this.designation=designation;
    //      this.standingfor= standingfor;
       
    //  }
  //  public AllSinatory :signatoryclass[];

    public AllSinatory2 = [
        {signatory: 'S.A OBAGUNLE', designation: 'DEPUTY REGISTRAR (AA)',standingfor:'FOR : REGISTRAR'},
            {signatory: 'A.M OLANREWAJU', designation: 'PRINCIPAL ASSISTANT REGISTRAR',standingfor:'FOR : REGISTRAR'},
     //   {signatory: 'TOMI OLATUNJI', designation: 'REGISTRAR',standingfor:''},
    ]
        public AllSinatory = [
        {value :'0', label :'S.A OBAGUNLE',signatory: 'S.A OBAGUNLE', designation: 'DEPUTY REGISTRAR (AA)',standingfor:'FOR : REGISTRAR'},
            {value: '1',label: 'A.M OLANREWAJU',signatory: 'A.M OLANREWAJU', designation: 'PRINCIPAL ASSISTANT REGISTRAR',standingfor:'FOR : REGISTRAR'},
       // {value: '2', label: 'TOMI OLATUNJI',signatory: 'TOMI OLATUNJI', designation: 'REGISTRAR',standingfor:''},
    ]
}
