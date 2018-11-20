import { QuestionActionTypes, Options } from '../constants/questions';
import IQuestion from '../interfaces/questions';

export interface IGetAllQuestions {
    type: QuestionActionTypes.GET_ALL_QUESTIONS,
    questions: Map<string, IQuestion>
}

export interface ISaveQuestion {
    type: QuestionActionTypes.SAVE_QUESTION,
    question: IQuestion
}

export interface ISaveQuestionAnswer {
    type: QuestionActionTypes.SAVE_QUESTION_ANSWER,
    authedUser: string,
    qid: string,
    answer: Options
}

export type QuestionAction = 
    IGetAllQuestions | 
    ISaveQuestion | 
    ISaveQuestionAnswer;

export function getAllQuestions(questions: Map<string, IQuestion>): IGetAllQuestions {
    return {
        type: QuestionActionTypes.GET_ALL_QUESTIONS,
        questions
    };
}

export function saveQuestion(question: IQuestion): ISaveQuestion {
    return {
        type: QuestionActionTypes.SAVE_QUESTION,
        question
    };
}

export function saveQuestionAnswer(
    authedUser: string,
    qid: string,
    answer: Options 
): ISaveQuestionAnswer {
    return {
        type: QuestionActionTypes.SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer /* values: "optionOne" or "optionTwo" */
    };
}