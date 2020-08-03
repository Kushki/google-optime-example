/**
 * Google Analytics Service
 */
import {environment} from 'src/environments/environment';

/**
 * Google Analytics Service
 */
export class GoogleAnalyticsService {

// tslint:disable
  public sendEvent(category: string, action: string, label?: string): void {
    (<any>window).ga('send', 'event', {
      eventCategory: `${category} ${environment.google_analytics}`,
      eventLabel: label !== undefined ? label : action,
      eventAction: action
    });
  }

  public sendTagEvent(event: string): void {
    (<any>window).gtag('event', event, {
      event: `${event} ${environment.google_analytics}`,
    });
  }
}
