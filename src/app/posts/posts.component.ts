import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../shared/models/Post.model';
import { PostService } from '../shared/services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    postForm = new FormControl('');

    posts$: Observable<Post[]>;

    constructor(private postService: PostService) { }

    public ngOnInit(): void {
        // this.postService.getPosts()
    }

}
