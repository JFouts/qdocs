import { Component } from '@angular/core';
import { QuestionService } from './question';
import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ QuestionService ]
})
export class AppComponent { }
