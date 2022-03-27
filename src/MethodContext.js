import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    increaseCount() {
        obj.count++;
    },
    subscribe() {
        console.log(this);
        EventEmitter.on('click', obj.increaseCount);
    },
    unsubscribe() {
        EventEmitter.off('click', obj.increaseCount);
        obj.count = 0;
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        console.log(args);
        obj1.second(...args.map((e) => e).reverse());
    },
    second(...args) {
        console.log(args);
        // здесь ничего писать не нужно
    },
};
