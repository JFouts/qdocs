import { Component, Input } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { VoteType } from './vote-type.model';

@Component({
    selector: 'question',
    templateUrl: 'question.component.html',
    styleUrls: [ 'question.component.css' ]
})
export class QuestionComponent {
    @Input()
    question: Question;

    constructor(
        private questionService : QuestionService) { }

    onUpVote() {
        this.question = this.questionService.setQuestionVote(this.question, VoteType.Upvote);
    }

    onDownVote() {
        this.question = this.questionService.setQuestionVote(this.question, VoteType.Downvote);
    }
}