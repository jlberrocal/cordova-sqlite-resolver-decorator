export interface SqlResultSetRow<T> {
    length: number;
    item(index: number): T;
}
