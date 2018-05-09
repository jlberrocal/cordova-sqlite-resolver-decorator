import { SqlResultSetRow } from "./SqlResultSetRow";
export interface SqlResultSet<T> {
    insertId: number;
    rowsAffected: number;
    rows: SqlResultSetRow<T>;
}
