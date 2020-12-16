import { NotificationComponent } from './Tools/notification/notification.component';
import { ImportdataComponent } from './Tools/importdata/importdata.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscriptComponent } from './Tools/transcript/transcript.component';

const routes: Routes = [
    // { path: '', component: HomeComponent },
     { path: 'importdata', component: ImportdataComponent },
       { path: 'Transcript', component: TranscriptComponent },
         { path: 'Notification', component: NotificationComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
