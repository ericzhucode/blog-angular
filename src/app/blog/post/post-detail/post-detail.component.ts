import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post: any = {}

  constructor(public postService: PostService,
    public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(
      params => this.postService.getPost().subscribe(
        data => {
          this.post = data;
          console.log(this.post);
        }
      )
    )
  }

}
