import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css'],
})
export class SiblingOneComponent implements OnInit {
  currentMessage: string;
  constructor(private notifS: ServiceService) {}

  ngOnInit(): void {
    this.notifS.notificationSubject.subscribe((d) => {
      this.currentMessage = d;
    });
  }

  sendMessage(data) {
    this.notifS.sendNotification(data.value);
  }
}
