import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ToDoItem } from "../../app.component";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() item!: ToDoItem
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  delete() {
    console.log(this.item)
    this.onDelete.emit(this.item.id)
  }
}
