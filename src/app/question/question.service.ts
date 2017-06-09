import { Injectable, Inject } from '@angular/core';
import { Question } from './question.model';
import { QuestionResponse } from './question-response.model';
import { User } from '../user';
import { VoteType } from './vote-type.model';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class QuestionService {

    apiEndpoint: string = "http://localhost:62538/api/"
    headers: Headers;

    constructor(
        private http: Http) { 
        this.headers = new Headers();
        this.headers.set("Content-Type", 'application/json');
    }

    getQuestion(id: string) {
        return this.http.get(this.apiEndpoint + "questions/" + id)
            .map(response => response.json());
    }

    getQuestions() {
        return this.http.get(this.apiEndpoint + "questions")
            .map(response => response.json());
    }

    addQuestion(question: Question) {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiEndpoint + "questions", question, options).map(response => response.json());
    }

    setQuestionVote(question: Question, voteType: VoteType) {
        var vote = voteType === VoteType.Upvote ? 1 : -1;
        return this.http.post(this.apiEndpoint + "questions/" + question.id + "/votes", vote, {
            headers: this.headers
        }).map(response => response.json());
    }

    setResponseVote(question: Question, response: QuestionResponse, voteType: VoteType) {
        var vote = voteType === VoteType.Upvote ? 1 : -1;
        return this.http.post(this.apiEndpoint + "questions/" + question.id + "/responses/" + response.id + "/votes", vote, {
            headers: this.headers
        }).map(response => response.json());
    }

    addResponse(question: Question, response: QuestionResponse) {
        return this.http.post(this.apiEndpoint + "questions/" + question.id + "/responses", response, {
            headers: this.headers
        }).map(response => response.json());
    }
}