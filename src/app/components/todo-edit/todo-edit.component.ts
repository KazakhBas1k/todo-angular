import {Component, EventEmitter, Input, Output, OnInit, ContentChild, ElementRef, ViewChild} from '@angular/core';
import {ToDoItem} from "../../app.component";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  @Input() item!: ToDoItem
  @Output() onClose = new EventEmitter
  @Output() onAdd: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>()
  @ContentChild('index') index!: ElementRef
  @ViewChild('input') input!: ElementRef
  newItem: ToDoItem = {
    id: 1,
    title: "",
    status: false,
    priority: "",
  }
  isNotChanged: boolean = true;
  changeItem() {
    if (this.isNotChanged) {
      alert("Изменений не было")
      this.input.nativeElement.focus()
    } else {
      this.onAdd.emit(this.newItem)
      this.close()
      alert(`${this.newItem.id}-й элемент был изменен`)
    }
  }
  close() {
    this.onClose.emit()
  }

  onChange() {
    this.isNotChanged = false;
  }
  ngOnInit() {
    this.newItem.title = this.item.title
    this.newItem.priority = this.item.priority
    this.newItem.status = this.item.status
    this.newItem.id = this.item.id
  }
}
