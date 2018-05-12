import { Observable } from "rxjs";
import { SqlResultSet } from '../interfaces/SqlResultSet';
import { map } from "rxjs/operators";

export class SqLiteResolverAux<T> {
    resolveFromObservable(source: Observable<SqlResultSet<T>>) {
        return source.pipe(map(this.getArray));
    };

    resolveFromPromise(source: Promise<SqlResultSet<T>>) {
        return source.then(this.getArray);
    };

    resolveOneFromObservable(source: Observable<SqlResultSet<T>>) {
        return source.pipe(map(this.getOne));
    };

    resolveOneFromPromise(source: Promise<SqlResultSet<T>>) {
        return source.then(this.getOne);
    };

    resolveInsertFromObservable(source: Observable<SqlResultSet<void>>) {
        return source.pipe(map(this.getInsertId));
    }

    resolveInsertFromPromise(source: Promise<SqlResultSet<void>>) {
        return source.then(this.getInsertId);
    }

    resolveChangesFromObservable(source: Observable<SqlResultSet<void>>) {
        return source.pipe(map(this.getChanges));
    }

    resolveChangesFromPromise(source: Promise<SqlResultSet<void>>) {
        return source.then(this.getChanges);
    }

    private getArray(data: SqlResultSet<T>): T[] {
        const values: T[] = [];

        for (let i = 0; i < data.rows.length; i++)
            values.push(data.rows.item(i));

        return values;
    }

    private getOne(data: SqlResultSet<T>): T {
        const values = this.getArray(data);
        if (values.length > 1)
            throw new Error("result set have more than one value");
        return values[0];
    }

    private getInsertId(data: SqlResultSet<T>): number {
        return data.insertId;
    }

    private getChanges(data: SqlResultSet<T>): number {
        return data.rowsAffected;
    }
}