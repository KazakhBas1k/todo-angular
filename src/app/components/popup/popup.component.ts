import {Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() onClose = new EventEmitter
  @Input() id!: number;
  close() {
    this.onClose.emit()
  }
}
