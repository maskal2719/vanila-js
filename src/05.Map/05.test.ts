import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, ManType} from "./05";
import {CityType} from "../02.Object/02_02";

let people: Array<ManType> = [] ;

let city : CityType

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]

    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false, address: {
                    number: 100, street: {
                        title: "White street"
                    }
                }

            },
            {
                buildedAt: 2008, repaired: false, address: {
                    number: 100, street: {
                        title: "Happy street"
                    }
                }

            },
            {
                buildedAt: 2020, repaired: false, address: {
                    number: 101, street: {
                        title: "Happy street"
                    }
                }

            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }, number: 1
                },
                budget: 200000
            },
            {
                type: "FIRE-STATION", staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    },
                    number: 1
                },
                budget: 500000
            }
        ],
        citizensNumber: 1000000
    }
})



// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})



test('get array of greeting messages', () => {
    const messages = people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome` );

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe(`Hello Andrew. Welcome`)
})

