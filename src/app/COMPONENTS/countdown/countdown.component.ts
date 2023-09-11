import { ChangeDetectionStrategy, Component } from '@angular/core';


import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //????
})
export class CountdownComponent {
  // config: CountdownConfig = { stopTime: new Date().getTime() + 1000 * 600 };

  // resetStop() {
  //   this.config = { stopTime: new Date().getTime() + 1000 * 600 };
  // }

  // -----------------------------------------------------------
  config: CountdownConfig = {
    leftTime: 60,
    format: 'HH:mm:ss',
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
  };

  handleEvent(e: CountdownEvent) {
    console.log('Actions', e);
  }
}
