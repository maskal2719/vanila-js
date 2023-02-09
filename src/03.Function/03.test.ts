// 01. Создайте в отдельном файле функцию, чтобы тесты прошли

import {CityType} from "../02.Object/02_02";
import {StudentType} from "../02.Object/02";
import {addMoneyToBudget, addSkill, doesLiveIn, makeStudentActive, repairHouse, toFireStaff, toHireStaff} from "./03";

let city : CityType;

beforeEach(() => {
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

test('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});


// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
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
})
test('new skill add', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student,'js');
    expect(student.technologies.length).toBe(4)
})


test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student);
    expect(student.isActive).toBe(true)
})

test('student lives in city?', () => {

    let res1  = doesLiveIn(student, 'Moscow');
    let res2  = doesLiveIn(student, 'Gomel');
    expect(res1).toBe(false)
    expect(res2).toBe(true)
})