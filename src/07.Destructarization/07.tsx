import React from 'react';

export type LessonType = {
    title: string
}

export type Address = {
    street: Street
}

export type Street = {
    title: string
    name? : string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address : Address
}

type PropsType = {
    title: string
    man : ManType
    food: Array<string>
    car : {model:string}
}

const Dest: React.FC<PropsType> = ({title, man, ...props}) => {

    // const {title, man, ...restProps} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    );
};

export default Dest;