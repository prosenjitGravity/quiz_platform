import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { ResultComponent } from './components/result/result.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllQuestionComponent } from './components/dashboard/all-question/all-question.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';
import { AddQuestionComponent } from './components/dashboard/add-question/add-question.component';

const routes: Routes = [
  {
    path:'', component:FrontPageComponent
  },
  {
    path:'exam',component:ExamPageComponent
  },
  {
    path:'nav',component:NavigationComponent
  },
  {
    path:'test',component:TestPageComponent
  },
  {
    path:'result',component:ResultComponent
  },
  {
    path:'admin-login',component:AdminLoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent,children:[
      {
        path:'home',component:AdminHomeComponent
      },
      {
        path:'add-question',component:AddQuestionComponent
      },
      {
        path:'all-question',component:AllQuestionComponent
      },
      {
        path:'user-result', component:ResultComponent
      }
    ]
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
