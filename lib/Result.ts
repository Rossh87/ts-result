// Note: this is a loose implementation of an Either type, and may not obey functor laws in every case
type Either<E, A> = E | A;

interface IMapper<A, B> {
    (a: A): B;
}

interface IResult<T> {
    ok(): boolean;
    fold(): T;
}

class Result {
    static left<E extends Error = Error>(v: E) {
        return new Left<E>(v);
    }

    static right<T>(v: T) {
        return new Right<T>(v);
    }

    static ok<E, T>(v: Either<Left<E>, Right<T>>): v is Right<T> {
        return v.ok();
    }
}

class Left<E> implements IResult<E> {
    public isLeft: boolean;
    public isRight: boolean;

    constructor(private error: E) {
        this.isLeft = true;
        this.isRight = false;
    }

    ok() {
        return false;
    }

    fold() {
        return this.error;
    }
}

class Right<T> implements IResult<T> {
    public isRight: boolean;
    public isLeft: boolean;

    constructor(public value: T) {
        this.isLeft = false;
        this.isRight = true;
    }

    ok() {
        return true;
    }

    fold() {
        return this.value;
    }
}

module.exports = Result;
