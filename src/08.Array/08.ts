// let user = {
//     name: 'Dimych',
//     age: 12,
//     address: {
//         city: {
//             title: 'Minsk'
//         }
//     }
// }
//
// let user2 = {
//     'name': 'Dimych',
//     'age': 12,
//     'address': {
//         'city': {
//             'title': 'Minsk'
//         }
//     }
// }
//
// let a = user['address']['city']['title']
// let b = user.address.city.title
//
// var users = ['123', '345', '678']
//
// let c = users['map']((e) => e.toUpperCase()) // так можно вызвать map

type UsersType = {
    [key: string]: {id: number, name: string}
}

export let usersObj: UsersType = {
    '101': {id: 101, name: 'Stas'},
    '1412': {id: 1412, name: 'Dima'},
    '112': {id: 112, name: 'Valera'},
    '14112': {id: 14112, name: 'Sanya'},
}

let userId = usersObj['112']; // лучше с точки зрения производительности (быстрее)

export let usersArray = [
    {id: 101, name: 'Stas'},
    {id: 1412, name: 'Dima'},
    {id: 112, name: 'Valera'},
    {id: 14112, name: 'Sanya'},
]
let userIdArr = usersArray.find(el => el.id === 1) // найти чет
let uuussseeerrrsss = {id:125487, name: 'GSDG'}
usersObj[uuussseeerrrsss.id] = uuussseeerrrsss
delete usersObj['101']


//
// let keys = Object.keys(usersObj)
// let values = Object.values(usersObj)
