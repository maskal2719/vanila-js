type LessonType = {
    title: string
}

type Address = {
    street: Street
}

type Street = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address : Address
}


let props : ManType;

test('', () => {
    beforeEach(() => {
        props = {
            name: 'Stas',
            age: 26,
            lessons: [{title: '1'},{title: '2'}],
            address : {
                street: {
                    title: 'Gomelskay'
                }
            }
        }
    })

    //const age = props.age
    //const lessons = props.lessons

    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(26)
    expect(title).toBe('Gomelskay')
    expect(lessons.length).toBe(2)

})
test('123', () => {

    // const [ls1, ls2] = props.lessons

    // const [,ls2] = props.lessons // если нужно вытянуть только второй элемент, и пропустить первый

    // const [ls1, ...restLessons] = props.lessons; // первый элемент запишется в ls1 , все остальное попадет в restLessons

})


