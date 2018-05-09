"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var SqLiteResolverAux = /** @class */ (function () {
    function SqLiteResolverAux() {
    }
    SqLiteResolverAux.prototype.resolveFromObservable = function (source) {
        var _this = this;
        return source.pipe(operators_1.map(function (data) { return _this.getArray(data); }));
    };
    ;
    SqLiteResolverAux.prototype.resolveFromPromise = function (source) {
        var _this = this;
        return source.then(function (data) { return _this.getArray(data); });
    };
    ;
    SqLiteResolverAux.prototype.getArray = function (data) {
        var values = [];
        for (var i = 0; i < data.rows.length; i++)
            values.push(data.rows.item(i));
        return values;
    };
    ;
    return SqLiteResolverAux;
}());
exports.SqLiteResolverAux = SqLiteResolverAux;
