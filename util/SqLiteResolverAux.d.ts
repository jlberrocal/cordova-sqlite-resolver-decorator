import { Observable } from "rxjs";
import { SqlResultSet } from '../interfaces/SqlResultSet';
export declare class SqLiteResolverAux<T> {
    resolveFromObservable(source: Observable<SqlResultSet<T>>): Observable<T[]>;
    resolveFromPromise(source: Promise<SqlResultSet<T>>): Promise<T[]>;
    resolveInsertFromObservable(source: Observable<SqlResultSet<void>>): Observable<number>;
    resolveInsertFromPromise(source: Promise<SqlResultSet<void>>): Promise<number>;
    resolveChangesFromObservable(source: Observable<SqlResultSet<void>>): Observable<number>;
    resolveChangesFromPromise(source: Promise<SqlResultSet<void>>): Promise<number>;
    private getArray(data);
    private getInsertId(data);
    private getChanges(data);
}
