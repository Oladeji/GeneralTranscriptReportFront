import { Component } from '@angular/core';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GeneralTranscriptFront';

    constructor(private mdbSpinningPreloader: MDBSpinningPreloader) {}

  ngOnInit() {
    this.mdbSpinningPreloader.stop();
  }
}
