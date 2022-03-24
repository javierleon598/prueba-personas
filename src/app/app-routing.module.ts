import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ScheduleComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
