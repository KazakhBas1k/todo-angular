import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ToDoItem} from "../../app.component";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  @Input() item!: ToDoItem;
  @Output() onClose = new EventEmitter
  @Output() onAdd: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>()
  newItem: ToDoItem = {
    title: "",
    priority: "",
    status: false,
    id: 1
  }
  changeItem() {
    this.onAdd.emit(this.newItem)
    this.close()
  }
  close() {
    this.onClose.emit()
  }

  ngOnInit() {
    this.newItem.title = this.item.title
    this.newItem.priority = this.item.priority
    this.newItem.status = this.item.status
    this.newItem.id = this.item.id
  }
}
