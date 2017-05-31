import { QuestionResponse } from './question-response.model';
import { User } from '../user';

export class Question {
    id: string;
    votes: number;
    title: string;
    content: string;
    user: User;
    responses: QuestionResponse[];
}