export type CityType = {
    title : string
    houses : Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}