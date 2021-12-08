import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post.routing.module';
import { PostHeadlineComponent } from './post-headline/post-headline.component';
import { PostService } from './post.service';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostHeadlineComponent,
    PostDetailComponent,
    PostDetailMainComponent
  ],
  imports: [
    RouterModule,
    PostRoutingModule,
    CommonModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
