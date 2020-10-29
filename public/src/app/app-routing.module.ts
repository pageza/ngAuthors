import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAuthorComponent } from "./display-author/display-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { AddAuthorComponent } from "./add-author/add-author.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [
  {path: 'new', component: AddAuthorComponent},
  {path: 'edit/:id', component: EditAuthorComponent},
  {path: '', component: DisplayAuthorComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
