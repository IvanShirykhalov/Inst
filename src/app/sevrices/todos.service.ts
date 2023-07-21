import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs'
import { environment } from 'src/app/environment'

export interface Todo {
  id: string
  title: string
  addedDate: string
  order: number
}

export interface BaseResponseType<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}`, this.httpOptions).subscribe({
      next: todos => {
        this.todos$.next(todos)
      },
    })
  }

  createTodo(title: string) {
    this.http
      .post<
        BaseResponseType<{
          item: Todo
        }>
      >(`${environment.baseUrl}`, { title }, this.httpOptions)
      .pipe(
        map(res => {
          // const newTodo = res.data.item
          // const todos = this.todos$.getValue()
          // return [newTodo, ...todos]

          return [res.data.item, ...this.todos$.getValue()]
        }),
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponseType>(`${environment.baseUrl}/${todoId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        }),
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
