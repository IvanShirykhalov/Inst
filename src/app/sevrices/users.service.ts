import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from 'src/app/environment'
import { catchError, EMPTY, map, Observable } from "rxjs"
import { BeautifulLoggerService } from 'src/app/sevrices/beautiful-logger.service'

interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: null | string
    large: null | string
  }
  status: null
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
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

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkUrl}/users?page=${page}`, this.httpOptions)
      .pipe(
        map(el => el.items),
        catchError(this.errorHandler.bind(this)),
      )
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautifulLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
