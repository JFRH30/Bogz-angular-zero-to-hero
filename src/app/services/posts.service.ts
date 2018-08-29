import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostModel } from '../models/post.model';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    postsUrl: string = 'http://localhost:3000/posts';

    constructor (
        private http: HttpClient
    ) { }

    getPost (id: number): Observable<PostModel> {
        return this.http.get<PostModel>( `${this.postsUrl}/${id}` )
    }
    
    getPosts (): Observable<PostModel[]> {
        return this.http.get<PostModel[]>( this.postsUrl )
    }

    getPostsWithUser (): Observable<PostModel[]> {
        return this.http.get<PostModel[]>( `${this.postsUrl}?_embed=comments` )
    }
}