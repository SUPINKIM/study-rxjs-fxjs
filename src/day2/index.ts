/** Fxjs STUDY */

const log = console.log;

const products = [
    { name: '반팔티', price: 20000 },
    { name: '후드티', price: 24000 },
    { name: '캐릭터티', price: 43300 },
    { name: '긴팔티', price: 18000 },
    { name: '청바지', price: 36000 },
];

/** map **/
const map = (f, iter) => {
    let res = [];
    for (const n of iter) {
        res.push(f(n));
    }
    return res;
}

console.log(map(p => p.name, products));
console.log(map(p => p.price, products));

function *gen() {
    yield 1;
    yield 2;
    yield 3;
}
console.log(map(a => a * a, gen()));

/** filter **/
const filter = (f, iter) => {
    const res = [];
    for (const i of iter) {
        if (f(i)) {
            res.push(i);
        }
    }
    return res;
}

/* iterable 만들기 */

const iterable = { // Symbol.iterator 이라는 메소드를 가진 객체
    [Symbol.iterator]() {
        let i = 4;
        return {
            next() {
                return i === 0 ? { done: true } : { value: i--, done: false }
            },
            [Symbol.iterator]() { // well-formed iterator
                return this;
            }
        }
    }
}

let iterator = iterable[Symbol.iterator](); // next라는 메소드를 가진 객체, next 메소드를 실행하면 value, done이라는 필드를 가진 객체가 리턴됨
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());

const arr2 = [1, 2, 3];
const arr2Iterator = arr2[Symbol.iterator]();
log(arr2Iterator.next()); // { value: 1, done: false }
log(arr2Iterator[Symbol.iterator]() === arr2Iterator); // true

for (const a of arr2Iterator) log(a); // 2, 3

const gener = function* () {
    yield 10;
    yield 20;
    yield 30;
}

const iter = gener();
log(iter[Symbol.iterator]() === iter); // true
