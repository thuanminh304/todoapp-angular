import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  @Output() createTodo = new EventEmitter<string>();

  addNewTodo(value: string) {
    this.createTodo.emit(value);
    console.log(value)
  }

  constructor() {}

  ngOnInit(): void {}
}
