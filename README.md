# cordova-sqlite-resolver-decorator
The main idea is to turn SQLResultSets into Arrays of expected types, this decorator attemps to be used only in methods, it will let you work with observables or promises (default are promises) as result types, if result type is different it will throw an error indicating the above mentioned.

# Usage Examples
```typescript
@SqLiteResolver()
getAll(): Observable<RowProcess[]> {
  return this.fromPromise(this.db.executeSql("SELECT * FROM users", []));
}

@SqLiteResolver()
getAllByPromise(): Promise<RowProcess[]> {
  return this.db.executeSql("SELECT * FROM users", []);
  });
}
```
