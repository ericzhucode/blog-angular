import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component'
import { PostListComponent } from './post-list/post-list.component'

export const postRoute: Routes = [
  {
    path: "",
    redirectTo: "page/1",
    pathMatch: "full"
  },
  {
    path: "page/:page",
    component: PostListComponent
  },
  {
    path: "post-detail/:id",
    component: PostDetailMainComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(postRoute)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
