export type UserType = {
    name: string
    hair: number
    address : {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserType & {
    books: string[]
}
export type UserWithCompaniesType = {
    company : Array<{id: number, title: string}>
}

export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        hair: u.hair/power
    }
    return copy
}

export function moveUser (u: UserWithLaptopType, city: string) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        address: {
            ...u.address,
            city: city,
            house: 45
        }
    }
}
export function moveUserToOtherHouse (u: UserWithLaptopType, house: number) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        address: {
            ...u.address,
            house: house
        }
    }
}
export function updateUserLaptop (u: UserWithLaptopType & UserWithBooks, laptop: string) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        laptop: {
            ...u.laptop,
            title: laptop,
        }
    }
}
export function addBook (u: UserWithBooks & UserWithLaptopType, books: Array<string>) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        books: [...u.books, ...books]
    }
}
export function updateBook (u: UserWithBooks & UserWithLaptopType, oldBook: string, newBook: string) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        books: u.books.map(el => el === oldBook ? newBook : el)
    }
}
export function removeBook (u: UserWithBooks & UserWithLaptopType, deleteBook: string) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        books: u.books.filter(el => el !== deleteBook)
    }
}
export function addCompany (u: UserWithCompaniesType & UserWithLaptopType, newCompany: string, id: number) {
    return {
        ...u, // shallow copy (поверхностная копия) то есть , если внутри объекта будет еще объект, то на него создастся ссылка
        company: u.company.map(el => el.id === id ? {...el, title: newCompany} : el)
    }
}
export function updateCompany (companies: any, userName: string, id: number, companyTitle: string) {
    return {
       ...companies, [userName] : companies[userName].map((el: any) => el.id === id ? {...el, title: companyTitle} : el)
    }
}

