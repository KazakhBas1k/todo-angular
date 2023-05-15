import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItem} from "../../app.component";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  @Input() lastId!: number
  @Output() onClose = new EventEmitter
  @Output() onAdd: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>()
  title: string = ""
  priority: string = "";
  status: boolean = false;

  close() {
    this.onClose.emit()
  }

  addItem() {
    if(this.title.trim() && this.priority.trim()) {
      const item: ToDoItem = {
        title: this.title,
        priority: this.priority,
        status: this.status,
        id: this.lastId
      }
      this.onAdd.emit(item)
      this.title = this.priority = '';
      this.close();
      console.log(item)
    } else {
      alert("Заполните все поля!")
    }
  }
  constructor() {
  }
}
