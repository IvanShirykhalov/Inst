import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/environment'
import { Observable } from 'rxjs'

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

enum ResultCodes {
  success = 0,
  error = 1,
  captcha = 10,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  authMe() {
    return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe({
      next: res => {
        if (res.resultCode === ResultCodes.success) {
          this.isAuth = true
        }
      },
    })
  }
}
