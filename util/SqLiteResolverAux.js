"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var SqLiteResolverAux = /** @class */ (function () {
    function SqLiteResolverAux() {
    }
    SqLiteResolverAux.prototype.resolveFromObservable = function (source) {
        return source.pipe(operators_1.map(this.getArray));
    };
    ;
    SqLiteResolverAux.prototype.resolveFromPromise = function (source) {
        return source.then(this.getArray);
    };
    ;
    SqLiteResolverAux.prototype.resolveInsertFromObservable = function (source) {
        return source.pipe(operators_1.map(this.getInsertId));
    };
    SqLiteResolverAux.prototype.resolveInsertFromPromise = function (source) {
        return source.then(this.getInsertId);
    };
    SqLiteResolverAux.prototype.resolveChangesFromObservable = function (source) {
        return source.pipe(operators_1.map(this.getChanges));
    };
    SqLiteResolverAux.prototype.resolveChangesFromPromise = function (source) {
        return source.then(this.getChanges);
    };
    SqLiteResolverAux.prototype.getArray = function (data) {
        var values = [];
        for (var i = 0; i < data.rows.length; i++)
            values.push(data.rows.item(i));
        return values;
    };
    ;
    SqLiteResolverAux.prototype.getInsertId = function (data) {
        return data.insertId;
    };
    SqLiteResolverAux.prototype.getChanges = function (data) {
        return data.rowsAffected;
    };
    return SqLiteResolverAux;
}());
exports.SqLiteResolverAux = SqLiteResolverAux;
