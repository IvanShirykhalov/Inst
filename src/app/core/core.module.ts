import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from 'src/app/core/services/auth.service'
import { BeautifulLoggerService } from 'src/app/core/services/beautiful-logger.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { CredentialsInterceptor } from 'src/app/core/interceptors/credentials.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    BeautifulLoggerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
