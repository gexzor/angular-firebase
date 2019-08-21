export class Comment {
    id?: string;
    author?: string;
    parentId: string;
    content: string;
    comments?: string[];
    upvotes?: string[];
    downvotes?: string[];
}