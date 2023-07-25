import { Component, OnInit } from '@angular/core'
import { TodosService } from 'src/app/todos/services/todos.service'
import { Observable } from 'rxjs'
import { Todo } from 'src/app/todos/models/todos.model'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber

    this.todosService.createTodo(title)
  }

  deleteTodo() {
    const todoId = 'bd5a07c4-f5de-4fc8-a2b2-e1f171f60c79'

    this.todosService.deleteTodo(todoId)
  }
}
