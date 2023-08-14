import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  message: string = 'hello from parent';
  @ViewChild(ChildComponent) childref: ChildComponent | any;
  messageFromChild!: string;
  products = [
    {
      name: 'nike',
      age: 12,
    },
  ];

  onparent() {
    this.childref.onClick();
  }
  handleMessageFromChild(message: any) {
    this.messageFromChild = message;
  }
}
