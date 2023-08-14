import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css'],
})
export class SiblingTwoComponent implements OnInit {
  notificationMessange: string;
  constructor(private notifS: ServiceService) {}

  ngOnInit(): void {
    this.notifS.notificationSubject.subscribe((d) => {
      this.notificationMessange = d;
    });
  }
}
