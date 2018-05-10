# cordova-sqlite-resolver-decorator
The main idea is to turn SQLResultSets into Arrays of expected types, this decorator attemps to be used only in methods, it will let you work with observables or promises (default are promises) as result types, if result type is different it will throw an error indicating the above mentioned.

# Usage Examples
```typescript
@SqLiteResolver<RowProcess>()
getAll(): Observable<RowProcess[]> {
  return this.fromPromise(this.db.executeSql("SELECT * FROM users", []));
}

/**
 * Take in mind that if you use the *Promise* based method you'll be able to use async/await sintax without problems
 * 
 * @example
 * async getUsers() {
 *   let users = await this.usersService.getAllByPromise();
 *   console.log(users);
 * }
 */
@SqLiteResolver<RowProcess>()
getAllByPromise(): Promise<RowProcess[]> {
  return this.db.executeSql("SELECT * FROM users", []);
  });
}
```

# Available decorators:
## SqLiteResolver
## SqLiteResolveInsert
## SqLiteResolveChanges

All of the above methods will work in the same way as explained in examples above