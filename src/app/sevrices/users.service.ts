import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/app/environment'
import { BehaviorSubject, catchError, EMPTY } from 'rxjs'
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
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
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

  getUsers() {
    this.http
      .get<UsersResponse>(`${environment.baseNetworkUrl}/users`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe({
        next: res => {
          this.users$.next(res.items)
        },
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautifulLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
