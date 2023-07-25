import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/app/environment'
import { catchError, EMPTY, map, Observable } from 'rxjs'
import { BeautifulLoggerService } from 'src/app/core/services/beautiful-logger.service'
import { User, UsersResponse } from "src/app/users/models/users.model"



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private beautifulLoggerService: BeautifulLoggerService,
  ) {}

  getUsers(page: number): Observable<User[]> {
    return this.http.get<UsersResponse>(`${environment.baseNetworkUrl}/users?page=${page}`).pipe(
      map(el => el.items),
      catchError(this.errorHandler.bind(this)),
    )
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautifulLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
