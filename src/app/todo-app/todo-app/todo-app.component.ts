import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  listTodo: any[] = [];
  id: number = 1;
  addNew(value: string) {
    this.listTodo.push({
      id: this.id++,
      title: value,
      completed: false,
      edited: false,
    });
    console.log(this.listTodo)
  }

  constructor() {}

  ngOnInit(): void {}
}
