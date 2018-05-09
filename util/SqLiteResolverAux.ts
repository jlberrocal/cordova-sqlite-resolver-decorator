import { Observable } from "rxjs";
import { SqlResultSet } from '../interfaces/SqlResultSet';
import { map } from "rxjs/operators";

export class SqLiteResolverAux<T> {
    resolveFromObservable(source: Observable<SqlResultSet<T>>) {
        return source.pipe(
            map(
                (data: SqlResultSet<T>) => this.getArray(data)
            )
        );
    };

    resolveFromPromise(source: Promise<SqlResultSet<T>>) {
        return source.then(
            (data: SqlResultSet<T>) => this.getArray(data)
        );
    };

    private getArray(data: SqlResultSet<T>): T[] {
        const values: T[] = [];

        for (let i = 0; i < data.rows.length; i++)
            values.push(data.rows.item(i));

        return values;
    };
}