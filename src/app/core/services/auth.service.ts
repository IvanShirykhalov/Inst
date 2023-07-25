import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/environment'
import { MeResponse } from 'src/app/core/models/common.module'
import { ResultCodes } from 'src/app/core/enums/core.enums'

@Injectable()
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
