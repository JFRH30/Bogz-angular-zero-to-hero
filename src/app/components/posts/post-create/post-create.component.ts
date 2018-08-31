import { Component } from '@angular/core';

import { PostModel } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';

@Component({
    selector: 'app-post-create',
    templateUrl: 'post-create.component.html'
})

export class PostCreateComponent {

    constructor (
        private postsService: PostsService
    ) {}

    addPost (newPost: PostModel) {
        newPost.userId = 1;
        this.postsService.addPost(newPost)
            .subscribe( post => this.postsService.posts.push(post) )
    }
}