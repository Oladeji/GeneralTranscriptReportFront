import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path :'importdata', loadChildren:        '.././Tools/Importdata/importdatamod.module#ImportdatamodModule'},
    { path :'SetCertsettings', loadChildren:        '.././Tools/CertSettings/certsettingsmod.module#CertsettingsmodModule'},
    { path :'Exporttransdata', loadChildren:        '.././Tools/exportdata/exportdatamod.module#ExportdatamodModule'},
    { path :'Updatepayees', loadChildren:        '.././Tools/UpdatePayee/updatepayeemod.module#UpdatepayeemodModule'},



    { path :'printnotification', loadChildren: '.././Reports/Notification/notificationmod.module#NotificationmodModule'},
    { path :'printtranscript', loadChildren: '.././Reports/Transcript/transcripmod.module#TranscripmodModule'},

    { path :'printcertificate', loadChildren: '.././Reports/Certificate/certificatetamod.module#CertificatetamodModule'},
//{ path :'printcertificate', loadChildren: '.././Reports/Certificate/certificatetamod.module#CertificatetamodModule'},

    
    
    { path: '**', component: PagenotfoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralrouRoutingModule {}
