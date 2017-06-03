import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { QuestionResponse } from './question-response.model';
import { User } from '../user';
import * as SimpleMDE from 'simplemde';

@Component({
    selector: 'question-page',
    templateUrl: 'question-page.component.html',
    styleUrls: [ 'question-page.component.css' ]
})
export class QuestionPageComponent implements OnInit {

    question: Question;
    private simpledme: SimpleMDE; 

    constructor(
        private questionService: QuestionService) { }

    ngOnInit()
    {
        // TODO: get id from route
        this.question = this.questionService.getQuestion("");
        
        this.simpledme = new SimpleMDE({ 
            element: document.getElementById("edit-field"),
            status: false
        });
    }

    onAddResponse() {
        var response = new QuestionResponse();
        response.user = new User();
        response.votes = 0;
        response.content = this.simpledme.value();
        this.simpledme.value("");
        this.question = this.questionService.addResponse(this.question, response);
    }
}