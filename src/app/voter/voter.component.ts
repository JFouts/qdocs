import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'voter',
    templateUrl: 'voter.component.html',
    styleUrls: [ 'voter.component.css' ]
})
export class VoterComponent {
    @Input()
    voteCount: number = 0;

    @Output()
    upvote: EventEmitter<{}> = new EventEmitter();

    @Output()
    downvote: EventEmitter<{}> = new EventEmitter();

    onUpVote() {
        this.upvote.emit();
    }

    onDownVote() {
        this.downvote.emit();
    }
}