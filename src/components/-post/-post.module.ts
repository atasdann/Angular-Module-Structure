import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './-post-routing.module';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [],
  imports: [
    PostComponent,
    CommentComponent,
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
