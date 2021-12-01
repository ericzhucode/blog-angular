import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "post",
    loadChildren: () => import('./blog/post/post.module').then(m => m.PostModule)
  },
  {
    path: "home",
    loadChildren: () => import('./blog/home/home.module').then(m => m.HomeModule)
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
