import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from 'src/app/environment'
import { BeautifulLoggerService } from 'src/app/sevrices/beautiful-logger.service'

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

  constructor(
    private http: HttpClient,
    private beautifulLoggerService: BeautifulLoggerService,
  ) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseTodoUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe({
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
      >(`${environment.baseTodoUrl}/todo-lists`, { title }, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
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
      .delete<BaseResponseType>(`${environment.baseTodoUrl}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        }),
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautifulLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
