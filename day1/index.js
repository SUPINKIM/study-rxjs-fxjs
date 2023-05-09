import {filter, Observable, range, Subject} from "rxjs";

/* RxJS Observable */
Observable.create((observer) => {
    observer.next('item');
    observer.complete();
}).subscribe({
    next: (arg) => {
        console.log(arg);
    },
    error: (error) => {
        console.error(error);
    },
    complete: () => {
        console.log('complete');
    }
})

/* RxJs Subject */
const subject = new Subject();
subject.subscribe(
    (item) => console.log('first', item),
    (error) => console.error(error),
    () => console.log('first complete')
);

subject.subscribe(
    (item) => console.log('second', item),
    (error) => console.error(error),
    () => console.log('second complete')
);

subject.next(111);
subject.complete();

/**
 * export function filter<T>(predicate: (value: T, index: number) => boolean, thisArg?: any): MonoTypeOperatorFunction<T> {
 *   return (source) =>
 *     new Observable((subscriber) => {
 *       // An index passed to our predicate function on each call.
 *       let index = 0;
 *
 *       // Subscribe to the source, all errors and completions are
 *       // forwarded to the consumer.
 *       source.subscribe(
 *         // Call the predicate with the appropriate `this` context,
 *         // if the predicate returns `true`, then send the value
 *         // to the consumer.
 *         createOperatorSubscriber(subscriber, (value) => predicate.call(thisArg, value, index++) && subscriber.next(value))
 *       );
 *     });
 * }
 *
 *
 */


// range(1,10).pipe(
//     filter(x => !(x % 2))
// ).subscribe({
//     next: (a) => console.log(a),
//     error: (err) => console.error(err),
//     complete: () => console.log('complete!!!!')
// });

const a = range(1,10).pipe(
    filter(x => !(x % 2))
);

console.log(a);
console.log(a.subscribe({
    next: (a) => console.log(a)
}))

const a22 = function* () {
    let bbb = 1;
    if (bbb > 10) {
        yield bbb++;
    }
    // while (bbb < 10) {
    //     yield bbb++;
    // }
};

