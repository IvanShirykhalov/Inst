import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ChildComponent } from './parent/child/child.component'
import { ParentComponent } from './parent/parent.component'
import { CompAComponent } from './comp-a/comp-a.component'
import { CompBComponent } from './comp-b/comp-b.component'
import { TodosComponent } from './todos/todos.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    CompAComponent,
    CompBComponent,
    TodosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
