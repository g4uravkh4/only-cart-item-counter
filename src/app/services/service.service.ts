import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public notificationSubject = new BehaviorSubject<string>('default');

  constructor() {}
  /*  yo fn ma data aauxa component bata ane
   next fn bata subject ma data janxa 
   ane app module ma yo service lai as a provider
   pani import garnu paryo*/

  sendNotification(data) {
    this.notificationSubject.next(data);
  }
}
