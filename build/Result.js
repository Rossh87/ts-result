"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result() {
    }
    Result.left = function (v) {
        return new Left(v);
    };
    Result.right = function (v) {
        return new Right(v);
    };
    Result.ok = function (v) {
        return v.ok();
    };
    return Result;
}());
exports.Result = Result;
var Left = /** @class */ (function () {
    function Left(error) {
        this.error = error;
        this.isLeft = true;
        this.isRight = false;
    }
    Left.prototype.ok = function () {
        return false;
    };
    Left.prototype.fold = function () {
        return this.error;
    };
    return Left;
}());
var Right = /** @class */ (function () {
    function Right(value) {
        this.value = value;
        this.isLeft = false;
        this.isRight = true;
    }
    Right.prototype.ok = function () {
        return true;
    };
    Right.prototype.fold = function () {
        return this.value;
    };
    return Right;
}());
