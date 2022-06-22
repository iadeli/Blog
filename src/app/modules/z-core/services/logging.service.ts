import { Injectable } from '@angular/core';
//import { SlackService } from './slack.service';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    //private slackService: SlackService
    constructor() { }

    logError(message: string, stack: string) {
        //this.slackService.postErrorOnSlack(message, stack);
        console.log('LoggingService: ' + message);
    }
}