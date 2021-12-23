import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { CreateTodoComponent } from './todo-app/create-todo/create-todo.component';
import { ListTodoComponent } from './todo-app/list-todo/list-todo.component';



@NgModule({
  declarations: [
    TodoAppComponent,
    CreateTodoComponent,
    ListTodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TodoAppComponent]
})
export class TodoAppModule { }
