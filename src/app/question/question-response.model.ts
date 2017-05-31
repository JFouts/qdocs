import { User } from '../user';

export class QuestionResponse {
    id: string;
    votes: number;
    content: string;
    user: User;
}