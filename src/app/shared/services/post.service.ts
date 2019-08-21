import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Post } from '../models/Post.model';
@Injectable({
    providedIn: 'root'
})

export class PostService {

    private postCollection: AngularFirestoreCollection<Post>;
    private posts: Observable<Post[]>;

    constructor(private firestore: AngularFirestore) {
        this.postCollection = this.firestore.collection('posts');
    }


    /**
     * Retrieves all posts from the database.
     */
    public getPosts(): Observable<Post[]> {
        return this.posts || this.initPosts();
    }


    /**
    * Creates a new post.
    * @param `Post` 
    */
    public createPost(post: Post): void {
        this.firestore.collection('posts').add(post);
    }


    /**
	 * Deletes a the provided post from the database.
	 * @param `POST` The post which is being deleted.
	 */
    deletePost(post: Post): void {
        this.firestore.collection('posts').doc(post.id).delete();
    }

	/**
     * Initialize the Post observable list and return it
     * @returns The post observable list
     */
    private initPosts(): Observable<Post[]> {
        // Set the observable list to a custom mapping to the firebase snapshot changes
        this.posts = this.postCollection.snapshotChanges().pipe(
            map((changes: DocumentChangeAction<Post>[]) => {
                return changes.map((changeAction: DocumentChangeAction<Post>) => {
                    // Map each changed item to a company object and set the id as well
                    const post = changeAction.payload.doc.data() as Post;
                    post.id = changeAction.payload.doc.id;
                    return post;
                });
            }),
        );
        // Return the observable list
        return this.posts;
    }

}