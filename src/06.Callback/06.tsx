// const callback = () => {
//     alert('hey')
// }
//
// window.setTimeout(callback,1000)


import {ChangeEvent, MouseEvent} from "react";

export const User = () => {


    const deleteUser = () => {
        console.log('user was deleted')
    }
    const saveUser = (event : MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.className)
    }

    const nameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
    }

    const blurChange = () => {
        console.log('blur')
    }

    return (
        <div>
            <textarea
                onChange={nameChanged}
                onBlur={blurChange}
            >
                Stas
            </textarea>
            <button onClick={deleteUser}>delete</button>
            <button className={'312'} onClick={saveUser}>save</button>
        </div>
    )
}