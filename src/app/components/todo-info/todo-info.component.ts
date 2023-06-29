import {Component, Input} from '@angular/core';
import {ToDoItem} from "../../app.component";

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.scss']
})
export class TodoInfoComponent {
  @Input() item!: ToDoItem;
}
