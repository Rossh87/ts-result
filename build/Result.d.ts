export declare type Either<E, T> = Left<E> | Right<T>;
interface IResult<T> {
    ok(): boolean;
    fold(): T;
}
export declare class Result {
    static left<E extends Error = Error>(v: E): Left<E>;
    static right<T>(v: T): Right<T>;
    static ok<E, T>(v: Either<E, T>): v is Right<T>;
}
export declare class Left<E> implements IResult<E> {
    private error;
    isLeft: boolean;
    isRight: boolean;
    constructor(error: E);
    ok(): boolean;
    fold(): E;
}
export declare class Right<T> implements IResult<T> {
    value: T;
    isRight: boolean;
    isLeft: boolean;
    constructor(value: T);
    ok(): boolean;
    fold(): T;
}
export {};
