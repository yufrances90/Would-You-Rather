export default interface IQuestion {
    id: string,
    author: string,
    timestamp: string,
    optionOne: IOption,
    optionTwo: IOption
}

interface IOption {
    votes: string[],
    text: string
}