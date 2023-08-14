import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() messageFromParent!: string;
  @Output() messageToParent: EventEmitter<string> = new EventEmitter<string>();
  @Input() product: { name: string; age: number };
  onClick() {
    alert('hello from child');
  }

  sendMessageToParent() {
    this.messageToParent.emit('Hello from Child!');
  }
}
