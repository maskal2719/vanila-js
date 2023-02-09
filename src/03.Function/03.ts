import {student, StudentType} from "../02.Object/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02.Object/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

sum(123, 22135);

const res = sum(sum(1, 2), sum(5, 5))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
            id: new Date().getTime(),
            title: skill
        }
    )
}

export function makeStudentActive(st: StudentType) {
    return st.isActive = true
}

export function doesLiveIn(st: StudentType, city: string) {
    return st.address.city.title === city;
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget
}

export function repairHouse(house: HouseType) {
    house.repaired = true
}

export function toFireStaff(building: GovernmentBuildingsType, number: number) {
    building.staffCount -= number
}

export function toHireStaff(building: GovernmentBuildingsType, number: number) {
    building.staffCount += number
}