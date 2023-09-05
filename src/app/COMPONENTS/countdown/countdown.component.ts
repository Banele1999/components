import { ChangeDetectionStrategy, Component } from '@angular/core';


import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //????
})
export class CountdownComponent {
  config: CountdownConfig = { stopTime: new Date().getTime() + 1000 * 60 };

  resetStop() {
    this.config = { stopTime: new Date().getTime() + 1000 * 60 };
  }
}
