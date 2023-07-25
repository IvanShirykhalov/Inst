import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TodosComponent } from 'src/app/todos/components/todos/todos.component'
import { AuthGuard } from 'src/app/auth/guards/auth.guard'

const routes: Routes = [{ path: '', component: TodosComponent, canActivate: [AuthGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
