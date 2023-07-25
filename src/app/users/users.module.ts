import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from 'src/app/users/components/users/users.component'

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
