import { Observable } from "rxjs";
import { SqLiteResolverAux } from './util/SqLiteResolverAux';

export function SqLiteResolver<T>() {
    const aux = new SqLiteResolverAux<T>();

    return function Resolver(target, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value;

        descriptor.value = function () {
            let resolved: any = originalValue.apply(this, arguments);
            if (resolved instanceof Observable) {
                resolved = aux.resolveFromObservable(resolved);
            } else if (resolved.then) {
                resolved = aux.resolveFromPromise(resolved);
            } else {
                throw new Error('This decorator only support working with Observables or Promises');
            }

            return resolved;
        };
        return descriptor;
    };
}

export function SqLiteResolveInsert() {
    const aux = new SqLiteResolverAux();

    return function Resolver(target, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value;

        descriptor.value = function () {
            let resolved: any = originalValue.apply(this, arguments);
            if (resolved instanceof Observable) {
                resolved = aux.resolveInsertFromObservable(resolved);
            } else if (resolved.then) {
                resolved = aux.resolveInsertFromPromise(resolved);
            } else {
                throw new Error('This decorator only support working with Observables or Promises');
            }

            return resolved;
        };
        return descriptor;
    };
}

export function SqLiteResolveChanges() {
    const aux = new SqLiteResolverAux();

    return function Resolver(target, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalValue = descriptor.value;

        descriptor.value = function () {
            let resolved: any = originalValue.apply(this, arguments);
            if (resolved instanceof Observable) {
                resolved = aux.resolveChangesFromObservable(resolved);
            } else if (resolved.then) {
                resolved = aux.resolveChangesFromPromise(resolved);
            } else {
                throw new Error('This decorator only support working with Observables or Promises');
            }

            return resolved;
        };
        return descriptor;
    };
}