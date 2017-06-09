import { Component, Input } from '@angular/core';
import { Question } from './question.model';
import { QuestionResponse } from './question-response.model';
import { QuestionService } from './question.service';
import { VoteType } from './vote-type.model';

@Component({
    selector: 'question-response',
    templateUrl: 'question-response.component.html',
    styleUrls: [ 'question-response.component.css' ]
})
export class QuestionResponseComponent {
    @Input()
    question: Question;
    @Input()
    response: QuestionResponse;

    constructor(
        private questionService : QuestionService) { }

    onUpVote() {
        this.questionService.setResponseVote(this.question, this.response, VoteType.Upvote)
            .subscribe((response: QuestionResponse) => this.response = response);
    }

    onDownVote() {
        this.questionService.setResponseVote(this.question, this.response, VoteType.Downvote)
            .subscribe((response: QuestionResponse) => this.response = response);
    }
}