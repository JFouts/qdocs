import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import {Router} from '@angular/router';
import * as SimpleMDE from 'simplemde';

@Component({
    selector: 'question-ask-page',
    templateUrl: 'question-ask-page.component.html',
    styleUrls: [ 'question-ask-page.component.css' ]
})
export class QuestionAskPageComponent implements OnInit {

    private simpledme: SimpleMDE; 
    title: string;
    
    constructor(
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit()
    {
        this.simpledme = new SimpleMDE({ 
            element: document.getElementById("edit-field"),
            status: false
        });
    }

    onAddQuestion() {
        var question = new Question();

        question.title = this.title;
        question.content = this.simpledme.value();

        var newQuestion = this.questionService.addQuestion(question);
        this.router.navigate(['/questions/' + newQuestion.id]);
    }
}