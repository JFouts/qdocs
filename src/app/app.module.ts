import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionPageComponent, QuestionComponent, QuestionResponseComponent } from './question';
import { UserTagComponent } from './user';
import { VoterComponent } from './voter';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, 
    QuestionPageComponent,
    QuestionComponent,
    UserTagComponent,
    VoterComponent,
    QuestionResponseComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
