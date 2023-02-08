import {mult, splitIntoWords, sum} from "./01";

let a: number = 1;
let b: number = 10;
let c: number = 2;

//Запустить перед тестом
beforeEach(() => {
    a = 1;
    b = 10;
    c = 2;
})

test('sum should be correct', () => {
    //Подготовка. Создаем данные
    //Вызываем функцию. Какое-то действие
    let res = sum(a, b);
    let res2 = sum(c, a);

    //Ожидаемые результат
    expect(res).toBe(11)
    expect(res2).toBe(3)
})
test('multiply should be correct', () => {
    let a = 1;
    let b = 10;
    let c = 2;

    let res = mult(a, b);
    let res2 = mult(b, c);

    expect(res).toBe(10)
    expect(res2).toBe(20)
})

test('spliting into words should be correct', () => {
    let sent1 = 'Hello my friend!';
    let sent2 = 'Js is programming language.';

    let res1 = splitIntoWords(sent1);
    let res2 = splitIntoWords(sent2);

    expect(res1.length).toBe(3)
    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('my')
    expect(res1[2]).toBe('friend')

    expect(res2.length).toBe(4)
    expect(res2[0]).toBe('js')
    expect(res2[1]).toBe('is')
    expect(res2[2]).toBe('programming')
    expect(res2[3]).toBe('language')
})