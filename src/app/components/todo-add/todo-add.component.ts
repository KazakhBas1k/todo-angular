import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ToDoItem} from "../../app.component";
import {style} from "@angular/animations";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  @Input() lastId!: number
  @Output() onClose = new EventEmitter
  @Output() onAdd: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>()
  @ViewChild('input') input!: ElementRef
  @ViewChild('select') select!: ElementRef
  title: string = ""
  priority: string = "";
  status: boolean = false;
  deadline!: Date;

  close() {
    this.onClose.emit()
  }

  addItem() {
    if (!(this.title.trim()) && !(this.priority.trim())) {
      this.input.nativeElement.focus();
      alert("Заполните заголовок и Выберите приоритет!")
    } else if ((this.title.trim()) && !(this.priority.trim())) {
      alert("Выберите приоритет!")
      this.select.nativeElement.focus();
    } else if (!(this.title.trim()) && (this.priority.trim())) {
      alert("Заполните заголовок!")
      this.select.nativeElement.focus();
    } else {
      const item: ToDoItem = {
        title: this.title,
        priority: this.priority,
        status: this.status,
        id: this.lastId,
        createdDate: new Date(),
        deadline: this.deadline,
      }
      this.onAdd.emit(item)
      this.title = this.priority = '';
      this.close();
    }
  }
  constructor() {
  }

  protected readonly style = style;
}
