import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
export interface ToDoItem {
  id?: number,
  title: string,
  status: boolean,
  priority: string
  createdDate: Date,
  deadline: Date,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: ToDoItem[] = [
    {id: 1, title: "Buy groceries", status: false, priority: "High", createdDate: new Date(2023, 4,21), deadline: new Date(2023, 0o4, 25)},
    {id: 2, title: "Cardio at 6pm", status: false, priority: "Medium", createdDate: new Date(2023, 4, 22), deadline: new Date(2023, 0o4, 26)},
    {id: 3, title: "Dinner with bae", status: false, priority: "Low", createdDate: new Date(2023, 4, 23), deadline: new Date(2023, 0o4, 27)}
  ]
  isAddOpen: boolean = false;
  toggleAdd() {
    this.isAddOpen = !this.isAddOpen
  }

  updateItems(item: ToDoItem) {
    this.items.push(item);
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id)
  }
  constructor(private http: HttpClient) {

  }
}
