import { Component, Input } from '@angular/core';
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
    response: QuestionResponse;

    constructor(
        private questionService : QuestionService) { }

    onUpVote() {
        this.response = this.questionService.setResponseVote(this.response, VoteType.Upvote);
    }

    onDownVote() {
        this.response = this.questionService.setResponseVote(this.response, VoteType.Downvote);
    }
}