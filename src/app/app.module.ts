import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonActionComponent } from './buttons/button-action/button-action.component';
import { ButtonIconRaisedComponent } from './buttons/button-icon-raised/button-icon-raised.component';
import { ButtonIconComponent } from './buttons/button-icon/button-icon.component';
import { ButtonStandardComponent } from './buttons/button-standard/button-standard.component';
import { MaterialModule } from './material.module';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        PostFormComponent,
        PostComponent,
        ButtonActionComponent,
        ButtonIconComponent,
        ButtonIconRaisedComponent,
        ButtonStandardComponent,
        ButtonsComponent,
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
