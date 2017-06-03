import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionPageComponent, QuestionComponent, QuestionResponseComponent, QuestionListPageComponent, QuestionAskPageComponent } from './question';
import { UserTagComponent } from './user';
import { VoterComponent } from './voter';
import { RouterModule }   from '@angular/router';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'questions/ask',
        component: QuestionAskPageComponent,
      },
      {
        path: 'questions/:id',
        component: QuestionPageComponent,
      },
      {
        path: 'questions',
        component: QuestionListPageComponent
      }
    ])
  ],
  declarations: [
    AppComponent, 
    QuestionPageComponent,
    QuestionComponent,
    UserTagComponent,
    VoterComponent,
    QuestionResponseComponent,
    QuestionListPageComponent, 
    QuestionAskPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
