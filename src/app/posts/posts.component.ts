import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../shared/models/Post.model';
import { PostService } from '../shared/services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    animations: [
        trigger('collapse', [
            state('in', style({ overflowY: 'hidden', display: 'block' })),
            transition('void => *', [
                style({ opacity: 0, height: 0 }),
                animate('150ms ease-out'),
            ]),
            transition('* => void', [
                animate('150ms ease-in', style({ opacity: 1, height: 'auto' })),
            ]),
        ]),
    ],
})

export class PostsComponent implements OnInit {

    public posts$: Observable<Post[]>;

    constructor(private postService: PostService) { }

    public ngOnInit(): void {
        this.posts$ = this.postService.getPosts();
    }
}
