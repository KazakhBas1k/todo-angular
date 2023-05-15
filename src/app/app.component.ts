import { Component } from '@angular/core';
export interface ToDoItem {
  id?: number,
  title: string,
  status: boolean,
  priority: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: ToDoItem[] = [
    {id: 1, title: "Buy groceries", status: false, priority: "High"},
    {id: 2, title: "Cardio at 6pm", status: false, priority: "Medium"},
    {id: 3, title: "Dinner with bae", status: false, priority: "Low"}
  ]
  isAddOpen: boolean = false;
  isEditOpen: boolean = false;
  OpenClose() {
    this.isAddOpen = !this.isAddOpen
  }

  updateItems(item: ToDoItem) {
    this.items.push(item);
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id)
  }
  constructor() {
  }
}
