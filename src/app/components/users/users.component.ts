import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { User, UsersService } from 'src/app/sevrices/users.service'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers()
    this.users$ = this.usersService.users$
  }

  getUsers() {
    this.usersService.getUsers()
  }
}
