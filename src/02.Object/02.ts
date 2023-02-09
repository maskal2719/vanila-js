type StudentType = {
    id: number
    name: string
    age: number
    isActive : boolean
    address : AddressType
    technologies: Array<TechnologiesType>
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    country: string
}
type TechnologiesType = {
    id: number
    title: string
}

const student = {
    name: 'Valera',
    age: 20,
    isActive: false,
    address: {
        streetTitle: 'Hataevicha',
        city: {
            title: 'Gomel',
            country: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1, title: 'html'
        },
        {
            id: 2, title: 'css'
        },
        {
            id: 3, title: 'js'
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)

// const school = {
//     name: 'incubator',
//     isOpen: true,
//     mentors: [
//         {name: 'Valer', age: 56}
//     ]
// }