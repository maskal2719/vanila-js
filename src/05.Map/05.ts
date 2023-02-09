import {GovernmentBuildingsType, HouseType} from "../02.Object/02_02";

export type ManType = {
    name: string;
    age: number;
};

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];

const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    };
};

const devs = [
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov',
    },
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov',
    },
    {
        stack: ['css, htnl', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov',
    },
];

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
];

const dev3 = people.map(el => ({
    stack: ['css', 'js'],
    firstName: el.name.split(' ')[0],
    lastName: el.name.split(' ')[1]
}))

export let messages = people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome` )

export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildingsType>) {
    return  buildings.map(el => el.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map(el => el.address.street.title)
}