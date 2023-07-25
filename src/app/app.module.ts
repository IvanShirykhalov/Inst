import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from 'src/app/home/home.module'
import { ProfileModule } from 'src/app/profile/profile.module'
import { UsersModule } from 'src/app/users/users.module'
import { TodosModule } from 'src/app/todos/todos.module'
import { AuthModule } from 'src/app/auth/auth.module'
import { PageNotFoundModule } from 'src/app/page-not-found/page-not-found.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { CoreModule } from 'src/app/core/core.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ProfileModule,
    UsersModule,
    TodosModule,
    AuthModule,
    PageNotFoundModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
