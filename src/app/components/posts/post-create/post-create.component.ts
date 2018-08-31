import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { PostModel } from '../../../models/post.model';

@Component({
    selector: 'app-post-create',
    templateUrl: 'post-create.component.html'
})

export class PostCreateComponent {
    @ViewChild('postTitle') postTitle: ElementRef;
    @ViewChild('postBody') postBody: ElementRef;
    @Output() postAdded = new EventEmitter<PostModel>()

    constructor ( ) {}

    onAddPost (): void {
        const userId = 1
        const title: string = this.postTitle.nativeElement.value;
        const body: string = this.postBody.nativeElement.value;
        const newPost = {userId: userId, title: title, body: body}
        this.postAdded.emit(newPost)
    }
}