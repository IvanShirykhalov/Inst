import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
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
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.baseUrl}`, this.httpOptions)
  }

  createTodo(title: string): Observable<BaseResponseType<{ item: Todo }>> {
    return this.http.post<
      BaseResponseType<{
        item: Todo
      }>
    >(`${environment.baseUrl}`, { title }, this.httpOptions)
  }

  deleteTodo(todoId: string): Observable<BaseResponseType> {
    return this.http.delete<BaseResponseType>(`${environment.baseUrl}/${todoId}`, this.httpOptions)
  }
}
