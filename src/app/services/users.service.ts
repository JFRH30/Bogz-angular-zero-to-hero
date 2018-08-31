import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../models/user.model';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    activatedUser: UserModel;

    usersUrl: string = 'http://localhost:3000/users';

    constructor (
        private http: HttpClient
    ) { }

    getUsers (): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.usersUrl)
    }
}