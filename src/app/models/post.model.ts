export class PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
    name?: string;
    users?: [{id: number, name: string, username: string, email: string}]
    comments?: any
}