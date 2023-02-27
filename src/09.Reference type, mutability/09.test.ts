
export type Users = {
    name: string
    age: number
    address: {title: string}
}

function ageInc(user: Users) {
    user.age++
}

test('reference type test', () => {


    let user: Users = {
        name: 'Stas',
        age: 25,
        address : {
            title: 'Gomel'
        }
    }

    ageInc(user)

    const superman = user;

    superman.age = 1000;


    expect(user.age).toBe(1000)
})

test('arr test', () => {


    let users = [
        {
            name: 'Stas',
            age: 25
        },
        {
            name: 'Den',
            age: 30
        },


]

    var admins = users

    admins.push({name:'allo', age: 512})

    expect(users[2]).toEqual({name:'allo', age: 512})
})

test('value type test', () => {


    const usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 50 + 1;

    expect(adminsCount).toBe(51)
    expect(usersCount).toBe(100)
})


test('33312 test', () => {


    let user: Users = {
        name: 'Stas',
        age: 25,
        address : {
            title: 'Gomel'
        }
    }

    let addAddress = user.address
    let user2 : Users = {
        name: 'tae',
        age:42,
        address: user.address
    }

    expect(user.age).toBe(1000)
})