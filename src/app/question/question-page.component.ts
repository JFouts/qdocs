import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { QuestionResponse } from './question-response.model';
import { User } from '../user';
import 'rxjs/add/operator/switchMap';
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
        private questionService: QuestionService,
        private route: ActivatedRoute) { }

    ngOnInit()
    {
        this.route.params
            .switchMap((params: Params) => 
                this.questionService.getQuestion(params['id']))
            .subscribe((question: Question) => 
                this.question = question);

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
        this.questionService.addResponse(this.question, response)
            .subscribe((question: Question) => this.question = question);
    }
}