import { Component } from '@angular/core';
import {GoogleAnalyticsService} from "./services/google-analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ab-testing-example';

  public sendEvent(category: string, action: string, label: string): void {
    const service: GoogleAnalyticsService = new GoogleAnalyticsService();

    service.sendEvent(category, action, label);
  }
  public sendTagEvent(event:string): void {
    const service: GoogleAnalyticsService = new GoogleAnalyticsService();

    service.sendTagEvent(event);
  }

  public onClick(event:string):void {
    this.sendTagEvent(event);
  }
}
