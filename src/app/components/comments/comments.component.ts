import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { CommentModel } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-comments',
    templateUrl: 'comments.component.html'
})

export class CommentsComponent {

    @ViewChild('commentBody') comment: ElementRef;
    @Output() commentAdded = new EventEmitter<CommentModel>()

    constructor (
        private route: ActivatedRoute
    ) {
        
    }

    onCommentAdded (): void {
        const postId: number =+ this.route.snapshot.paramMap.get('id');
        const userId = 1;
        const body:string = this.comment.nativeElement.value;
        const newComment = {postId: postId, userId: userId, body: body}
        this.commentAdded.emit(newComment)
    }
}