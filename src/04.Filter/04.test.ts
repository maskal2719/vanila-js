test('should take old man older then 90', () => {
    const ages = [18, 29, 22, 100, 88, 14];

    const oldAges = ages.filter(el => el> 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
    const courses: Array<CourseType> = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ]

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('css')
    expect(chipCourses[1].title).toBe('react')
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Sold', isDone: false},
        {id: 3, title: 'Milk', isDone: true},
        {id: 4, title: 'Sugar', isDone: false},
        {id: 5, title: 'Sweat', isDone: true},
        {id: 6, title: 'Drink', isDone: true},
    ]

    const completed = tasks.filter(t => t.isDone)

    expect(completed.length).toBe(4)
    expect(completed[0].id).toBe(1)
    expect(completed[2].id).toBe(5)
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Sold', isDone: false},
        {id: 3, title: 'Milk', isDone: false},
        {id: 4, title: 'Sugar', isDone: false},
    ]

    const completed = tasks.filter(t => !t.isDone)

    expect(completed.length).toBe(4)
    expect(completed[0].id).toBe(1)
    expect(completed[1].id).toBe(2)
    expect(completed[2].id).toBe(3)
    expect(completed[3].id).toBe(4)
})


