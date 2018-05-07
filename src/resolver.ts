import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export function SqLiteResolver() {
  const resolveFromObservable = (source: Observable<any>) => {
    return source.pipe(
      map((data: any) => getArray(data))
    )
  };

  const resolveFromPromise = (source: Promise<any>) => {
    return source.then((data: any) => getArray(data))
  };

  const getArray = (data: any) => {
    const values: any[] = [];
    for (let i = 0; i < data.rows.length; i++)
      values.push(data.rows.item(i));
    return values;
  };

  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalValue = descriptor.value;

    descriptor.value = function () {
      let resolved: any = originalValue.apply(this, arguments);
      if (resolved instanceof Observable) {
        resolved = resolveFromObservable(resolved);
      } else if (resolved.then) {
        resolved = resolveFromPromise(resolved);
      } else {
        throw new Error('This decorator only support working with Observables or Promises');
      }

      return resolved;
    };
    return descriptor;
  };
}
