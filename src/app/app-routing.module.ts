import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBoxDetails } from 'src/components/boxDetails/box-details.component';
import { AppBoxList } from 'src/components/boxList/box-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'boxes', pathMatch: 'full' },
  { path: 'boxes', component: AppBoxList },
  { path: 'boxes/:id', component: AppBoxDetails },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
