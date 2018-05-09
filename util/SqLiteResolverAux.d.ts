import { Observable } from "rxjs";
import { SqlResultSet } from '../interfaces/SqlResultSet';
export declare class SqLiteResolverAux<T> {
    resolveFromObservable(source: Observable<SqlResultSet<T>>): Observable<T[]>;
    resolveFromPromise(source: Promise<SqlResultSet<T>>): Promise<T[]>;
    private getArray(data);
}
