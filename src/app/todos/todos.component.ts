import { Component, OnDestroy, OnInit } from '@angular/core'
import { Todo, TodosService } from 'src/app/sevrices/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  error = ''
  subscriptions: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  getTodos() {
    this.subscriptions.add(
      this.todosService.getTodos().subscribe({
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        },
      }),
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber

    this.subscriptions.add(
      this.todosService.createTodo(title).subscribe(res => {
        this.todos.unshift(res.data.item)
      }),
    )
  }

  deleteTodo() {
    const todoId = '66f79195-2f84-472d-8669-f570d058ae1f'

    this.subscriptions.add(
      this.todosService.deleteTodo(todoId).subscribe(() => {
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      }),
    )
  }
}
