import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalSearchFormComponent } from './local-search-form/local-search-form.component';
import { LocalSearchResultsComponent } from './local-search-results/local-search-results.component';

const routes: Routes = [
  {
    path: '', component: LocalSearchFormComponent
  },
  {
    path: 'results', component: LocalSearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
