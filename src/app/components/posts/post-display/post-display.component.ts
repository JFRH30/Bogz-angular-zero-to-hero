import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostModel } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';

import { UserModel } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { CommentStmt } from '@angular/compiler';
import { CommentsService } from '../../../services/comments.service';
import { CommentModel } from '../../../models/comment.model';

@Component({
    selector: 'app-post-display',
    templateUrl: 'post-display.component.html'
})

export class PostDisplayComponent implements OnInit {
    post: PostModel;
    comment: CommentModel;
    users: UserModel[];

    constructor (
        private route: ActivatedRoute,
        private postsService: PostsService,
        private usersService: UsersService,
        private commentsService: CommentsService
    ) {
    }

    getPost (): void {
        const id: number =+ this.route.snapshot.paramMap.get('id')
        this.postsService.getPostWithComments(id)
            .subscribe(post => { this.post = post; this.setName() } );
        this.usersService.getUsers()
            .subscribe(users => { this.users = users; this.setName() } );
    }

    onCommentAdded (comment: CommentModel): void {
        this.commentsService.addComment(comment)
            .subscribe(comment => {this.comment = comment; this.getPost() })

    }

    setName (): void {
        if (this.post && this.users) {
            for (const user of this.users) {
                if (this.post.userId === user.id) { this.post.name = user.name }
                for (const comment of this.post.comments) {
                    if (comment.userId === user.id) { comment.name = user.name }
                }
            }
        }
    }

    ngOnInit () {
        this.getPost()
    }
}