import {
    addBook, addCompany,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany,
    updateUserLaptop,
    UserType,
    UserWithBooks, UserWithCompaniesType,
    UserWithLaptopType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel'
        }
    }

    const cutUser = makeHairstyle(user, 2)

    expect(cutUser.hair).toBe(10)
    expect(user.hair).toBe(20)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userCopy = updateUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')

})
test('upgrade arr', () => {
    let user: UserWithLaptopType & UserWithBooks = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})
test('add books', () => {
    let user: UserWithLaptopType & UserWithBooks = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'react']
    }

    const userCopy = addBook(user, ['ts', 'restapi'])

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[3]).toBe('ts')
    expect(userCopy.books[4]).toBe('restapi')

})
test('update book js to ts', () => {
    let user: UserWithLaptopType & UserWithBooks = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'java')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[1]).toBe('java')

})
test('remove book js', () => {
    let user: UserWithLaptopType & UserWithBooks = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    const userCopy = removeBook(user, 'css')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[0]).toBe('html')

})
test('add companies', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Stas',
        hair: 20,
        address: {
            city: 'Gomel',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        company: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-incubator'}
        ]
    }

    const userCopy = addCompany(user, 'EPAM', 1)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.company).not.toBe(user.company)
    expect(userCopy.company[0].title).toBe('EPAM')

})
test('update company', () => {

    let companies = {
        'Stas': [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-incubator'}
        ],
        'Denis': [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-incubator'}
        ]
    }

    let copy = updateCompany(companies, 'Stas',1, 'IBA')


    expect(copy['Stas']).not.toBe(companies["Stas"])
    expect(copy['Denis']).toBe(companies["Denis"])
    expect(copy['Stas'][0].title).toBe('IBA')
})