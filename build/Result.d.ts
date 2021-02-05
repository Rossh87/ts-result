declare type Either<E, A> = E | A;
interface IResult<T> {
    ok(): boolean;
    fold(): T;
}
declare class Result {
    static left<E extends Error = Error>(v: E): Left<E>;
    static right<T>(v: T): Right<T>;
    static ok<E, T>(v: Either<Left<E>, Right<T>>): v is Right<T>;
}
declare class Left<E> implements IResult<E> {
    private error;
    isLeft: boolean;
    isRight: boolean;
    constructor(error: E);
    ok(): boolean;
    fold(): E;
}
declare class Right<T> implements IResult<T> {
    value: T;
    isRight: boolean;
    isLeft: boolean;
    constructor(value: T);
    ok(): boolean;
    fold(): T;
}
export default Result;
