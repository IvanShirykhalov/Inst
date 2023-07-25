import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from 'src/app/profile/components/profile/profile.component'
import { AuthGuard } from 'src/app/auth/guards/auth.guard'

const routes: Routes = [
  {
    path: 'profile/:userId',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
