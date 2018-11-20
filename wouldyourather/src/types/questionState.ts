import IQuestion from '../interfaces/questions';

export default interface IQuestionState {
    readonly questions: Map<string, IQuestion>,
    readonly question?: IQuestion
}