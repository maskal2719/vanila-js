const ages = [18, 29, 22, 100, 88, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = []

type CourseType = {
    title: string
    price: number
}

const courses: Array<CourseType> = [
    {title: 'css', price: 100},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = []