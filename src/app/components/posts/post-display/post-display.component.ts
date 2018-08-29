import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostModel } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';

@Component({
    selector: 'app-post-display',
    templateUrl: 'post-display.component.html'
})

export class PostDisplayComponent implements OnInit {
    post: PostModel;

    constructor (
        private route: ActivatedRoute,
        private postsService: PostsService
    ) {
        this.getPost()
    }

   getPost (): void {
        const id: number =+ this.route.snapshot.paramMap.get('id')
        this.postsService.getPostWithComments(id)
            .subscribe(post => this.post = post)
    }

    ngOnInit () {
    }
}