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
  isEditOpen: boolean = false;

  updateItem(newItem: ToDoItem) {
    this.item = newItem
  }
  delete() {
    this.onDelete.emit(this.item.id)
  }
  toggleEdit() {
    this.isEditOpen = !this.isEditOpen
  }
}
