import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { QuestionResponse } from './question-response.model';
import { User } from '../user';
import { VoteType } from './vote-type.model';

@Injectable()
export class QuestionService {
    getQuestion(id: string): Question {
        var question = new Question();
        question.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet ante eget leo sagittis consequat. Aliquam volutpat sed massa et sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla laoreet diam quis nisi dictum pulvinar. Duis ac semper dolor, sed pellentesque odio. Suspendisse ut pharetra orci, eu pharetra est. Donec porta augue enim, a faucibus diam ullamcorper et. Fusce a leo in ligula lacinia fermentum sed eu odio.';
        question.title = 'Lorem ipsum dolor sit amet?'
        question.user = new User();
        question.votes = 8888;
        question.responses = [];
        var q = new QuestionResponse();
        q.content = 'Fusce eu erat cursus nisl varius vehicula. Proin tincidunt quis nunc eget varius. Suspendisse tristique bibendum dolor ut lacinia. Class.';
        q.user = new User();
        q.votes = 123;
        question.responses.push(q);
        q = new QuestionResponse();
        q.content = 'Fusce eu erat cursus nisl varius vehicula. Proin tincidunt quis nunc eget varius. Suspendisse tristique bibendum dolor ut lacinia. Class.';
        q.user = new User();
        q.votes = 8;
        question.responses.push(q);
        q = new QuestionResponse();
        q.content = 'Fusce eu erat cursus nisl varius vehicula. Proin tincidunt quis nunc eget varius. Suspendisse tristique bibendum dolor ut lacinia. Class.';
        q.user = new User();
        q.votes = -345;
        question.responses.push(q);
        return question;
    }

    setQuestionVote(question: Question, voteType: VoteType) : Question {
        if(voteType === VoteType.Upvote)
            question.votes++;
        else
            question.votes--;

        return question;
    }

    setResponseVote(response: QuestionResponse, voteType: VoteType): QuestionResponse {
        if(voteType === VoteType.Upvote)
            response.votes++;
        else
            response.votes--;
        
        return response;
    }

    addResponse(question: Question, response: QuestionResponse): Question {
        question.responses.push(response);

        return question;
    }
}