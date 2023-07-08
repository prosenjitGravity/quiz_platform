import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//                                          Angular Material libraries
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TestPageComponent } from './components/test-page/test-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ResultComponent } from './components/result/result.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { AllQuestionComponent } from './components/dashboard/all-question/all-question.component';
import { AdminNavigationComponent } from './components/dashboard/admin-navigation/admin-navigation.component';
import { AddQuestionComponent } from './components/dashboard/add-question/add-question.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FrontPageComponent,
    ExamPageComponent,
    NotFoundComponent,
    AdminLoginComponent,
    FooterComponent,
    TestPageComponent,
    ResultComponent,
    DashboardComponent,
    NavigationComponent,
    AllQuestionComponent,
    AdminNavigationComponent,
    AddQuestionComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatTooltipModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
