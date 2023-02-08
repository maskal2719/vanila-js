const sentense = 'Hello my friend';

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ');
    return words.filter(v => v !== '')
        .map(v => v
            .replace('!', '')
            .replace('.', ''))
}

export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}