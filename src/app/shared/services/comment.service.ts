import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Comment } from "../models/Comment.model";

@Injectable({
    providedIn: 'root'
})

export class CommentService {

    private commentCollection: AngularFirestoreCollection<Comment>;
    private comments: Observable<Comment[]>;

    constructor(private firestore: AngularFirestore) {
        this.commentCollection = this.firestore.collection('comments');
    }


    /**
     * Retrieves all comments from the database.
     */
    public getComments(): Observable<Comment[]> {
        return this.comments || this.initComments();
    }


    /**
    * Creates a new comment.
    * @param `Comment` 
    */
    public createComment(comment: Comment): void {
        this.firestore.collection('comments').add(comment);
    }


    /**
	 * Deletes a the provided comment from the database.
	 * @param `POST` The comment which is being deleted.
	 */
    deleteComment(comment: Comment): void {
        this.firestore.collection('comments').doc(comment.id).delete();
    }

	/**
     * Initialize the Comment observable list and return it
     * @returns The comment observable list
     */
    private initComments(): Observable<Comment[]> {
        // Set the observable list to a custom mapping to the firebase snapshot changes
        this.comments = this.commentCollection.snapshotChanges().pipe(
            map((changes: DocumentChangeAction<Comment>[]) => {
                return changes.map((changeAction: DocumentChangeAction<Comment>) => {
                    // Map each changed item to a company object and set the id as well
                    const comment = changeAction.payload.doc.data() as Comment;
                    comment.id = changeAction.payload.doc.id;
                    return comment;
                });
            }),
        );
        // Return the observable list
        return this.comments;
    }

}