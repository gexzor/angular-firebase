import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/models/Post.model';
import { PostService } from 'src/app/shared/services/post.service';

export interface PostFormError {
    titleError: string;
    subtitleError: string;
    contentError: string;
};

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

    public titleMaxLength: number = 100;
    public contentMaxLength: number = 2000;
    public postForm = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(this.titleMaxLength)]],
        subtitle: ['', [Validators.maxLength(this.titleMaxLength)]],
        content: ['', [Validators.required, Validators.maxLength(this.contentMaxLength)]],
    });

    constructor(private fb: FormBuilder, private postService: PostService) { }

    public ngOnInit(): void {
    }

    public get title() { return this.postForm.get('title'); }
    public get subtitle() { return this.postForm.get('subtitle'); }
    public get content() { return this.postForm.get('content'); }

    public getErrorMessage(): PostFormError {
        const errorMsg: PostFormError = {
            titleError: this.title.hasError('required') ? 'Title is required.' :
                this.title.hasError('maxlength') ? 'Title is too long' : '',
            subtitleError: this.subtitle.hasError('maxlength') ? 'Subtitle is too long' : '',
            contentError: this.content.hasError('required') ? 'Post content is required.' :
                this.content.hasError('maxlength') ? 'Post is too long' : ''
        };
        return errorMsg;
    }

    private submitForm(formDirective: FormGroupDirective): void {
        if (this.postForm.valid) {
            const newPost: Post = this.postForm.value;
            this.postService.createPost(newPost);
            formDirective.resetForm(); // Reset form validators
            this.postForm.reset(); // Reset form input
        }
    }

    private resetForm(formDirective: FormGroupDirective): void {
        formDirective.resetForm(); // Reset form validators
        this.postForm.reset(); // Reset form input
    }
}
