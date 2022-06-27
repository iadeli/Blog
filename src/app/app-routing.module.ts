import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/main-posts/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'manage_posts',
    loadChildren: () =>
      import('./modules/posts/manage-posts/manage-posts.module').then(
        (m) => m.ManageMainPageModule
      ),
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
