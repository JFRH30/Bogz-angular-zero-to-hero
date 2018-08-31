import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CommentModel } from '../models/comment.model';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class CommentsService {
    commentsUrl: string = 'http://localhost:3000/comments';

    constructor (
        private http: HttpClient
    ) { }

    getComments (postId: number): Observable<CommentModel[]> {
        return this.http.get<CommentModel[]>( `${this.commentsUrl}\postId=${postId}` )
    }

    addComment (comment: CommentModel): Observable<CommentModel> {
        return this.http.post<CommentModel>(this.commentsUrl, comment, httpOptions)
    }
}