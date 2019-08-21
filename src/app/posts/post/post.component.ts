import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/Post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input()
    public post: Post;
    public post$: Observable<Post>;

    constructor(
        private postService: PostService,
        private activatedRoute: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        // this.activatedRoute.params.subscribe(params => this.params = params);
    }


    /**
     * Deletes the provided post from the database.
     * @param `Post`
     */
    public deletePost(post: Post): void {
        this.postService.deletePost(post);
    }

}
