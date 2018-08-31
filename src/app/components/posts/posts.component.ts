import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { PostModel } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {
    users: UserModel[];
    @Input() posts: PostModel[];

    constructor (
        private usersService: UsersService,
        private postsService: PostsService
    ) {
        
    }

    getPostsWithUser (): void {
        this.usersService.getUsers()
            .subscribe( users => {this.users = users; this.setName()} )
        
        this.postsService.getPosts()
            .subscribe( posts => {this.posts = posts; this.setName()} )
    }

    setName (): void {
        if (this.posts && this.users) {
            for (let post of this.posts) {
                for (let user of this.users) {
                    if (post.userId === user.id) {
                        post.name = user.name
                    }
                }
            }
        }
    }

    onPostAdded (post: PostModel): void {
        console.log(post)
        this.postsService.addPost(post)
            .subscribe( post => {this.posts.push(post); this.setName()} )
    }

    ngOnInit () {
        this.getPostsWithUser()
    }
}