import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostModel } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';

import { UserModel } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';

@Component({
    selector: 'app-post-display',
    templateUrl: 'post-display.component.html'
})

export class PostDisplayComponent implements OnInit {
    post: PostModel;
    users: UserModel[];

    constructor (
        private route: ActivatedRoute,
        private postsService: PostsService,
        private usersService: UsersService
    ) {
        this.getPost()
    }

    getPost (): void {
        const id: number =+ this.route.snapshot.paramMap.get('id')
        this.postsService.getPostWithComments(id)
            .subscribe(post => { this.post = post; this.setName() } );
        this.usersService.getUsers()
            .subscribe(users => { this.users = users; this.setName() } );
    }

    setName (): void {
        if (this.post) {
            if (this.users) {
                for (const comment of this.post.comments) {
                    for (const user of this.users) {
                        if (this.post.userId === user.id) { this.post.name = user.name }
                        if (comment.userId === user.id) { comment.name = user.name }
                    }
                }
            }

        }
    }

    ngOnInit () {
    }
}