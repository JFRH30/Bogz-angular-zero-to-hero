import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})

export class UsersComponent {
    activatedUser: UserModel = this.usersService.activatedUser;
    users: UserModel[];

    constructor (
        private usersService: UsersService
    ) {}

    getUser (): void {
        this.usersService.getUsers()
            .subscribe( users => this.users = users )
    }

    changeUser (): void {
        this.usersService.activatedUser = this.activatedUser;
    }
}