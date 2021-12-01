import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service"

@Component({
  selector: "postlist",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  public postList: Array<any> | undefined;

  constructor(
    public postService: PostService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    return this.postService.getPostList().subscribe(
      res => {
        this.postList = res["items"]
        console.log(">>>", this.postList)
      },
      error => { console.log(error) },
      () => { }
    )
  }
}
