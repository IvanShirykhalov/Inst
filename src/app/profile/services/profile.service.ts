import { Injectable } from '@angular/core'
import { catchError, EMPTY, Observable } from 'rxjs'
import { environment } from 'src/app/environment'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BeautifulLoggerService } from 'src/app/core/services/beautiful-logger.service'
import { Router } from '@angular/router'

export interface ProfileResponse {
  aboutMe?: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription?: string
  fullName: string
  userId: number
  photos: {
    small?: string
    large?: string
  }
}

interface Contacts {
  facebook?: string | null
  website?: string | null
  vk?: string | null
  twitter?: string | null
  instagram?: string | null
  youtube?: string | null
  github?: string | null
  mainLink?: string | null
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {


  constructor(
    private http: HttpClient,
    private beautifulLoggerService: BeautifulLoggerService,
  ) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http
      .get<ProfileResponse>(`${environment.baseNetworkUrl}/profile/${userId}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautifulLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
