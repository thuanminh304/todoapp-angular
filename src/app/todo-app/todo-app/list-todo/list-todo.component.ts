import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  @Input() renderListTodo: any;

  styleComplete = {
    color: 'red',
  };
  todoTitle: any = 's';
  editTodo(todo: any) {
    let index = this.renderListTodo.findIndex(
      (item: any) => item.title === todo.title
    );
    if (index !== -1) {
      todo.edited = true;
    }
  }

  doneEdit(todo: any) {
    todo.edited = false;
  }

  deleteTodo(id: number) {
    if (window.confirm('Are you sure delete this todo?')) {
      this.renderListTodo.splice(id, 1);
    }
  }

  completeTodo(todo: any) {
    todo.completed = true;
  }

  changeValueInput(value: any, todo: any) {
    todo.title = value.target.value;
  }
  constructor() {}

  ngOnInit(): void {}
}
