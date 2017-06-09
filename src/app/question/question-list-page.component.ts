import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import {Router} from '@angular/router';

@Component({
    selector: 'question-list-page',
    templateUrl: 'question-list-page.component.html',
    styleUrls: [ 'question-list-page.component.css' ]
})
export class QuestionListPageComponent implements OnInit {

    questions: Question[];

    constructor(
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit() {
        this.questionService.getQuestions()
            .subscribe((questions: Question[]) => this.questions = questions);
    }

    onAskButtonClick() {
        this.router.navigate(['/questions/ask']);
    }
}