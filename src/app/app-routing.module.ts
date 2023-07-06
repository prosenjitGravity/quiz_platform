import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { TestPageComponent } from './components/test-page/test-page.component';

const routes: Routes = [
  {
    path:'', component:FrontPageComponent
  },
  {
    path:'exam',component:ExamPageComponent
  },
  {
    path:'test',component:TestPageComponent
  },
  {
    path:'admin-login',component:AdminLoginComponent
  },
  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
