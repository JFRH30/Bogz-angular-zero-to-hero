import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
    users: UserModel[]

    constructor (
        private usersService: UsersService
    ) {
        
    }

    getUsersWithPost (): void {
        this.usersService.getUsersWithPost().subscribe( users => this.users = users )
    }

    ngOnInit () {
        this.getUsersWithPost()
    }
}