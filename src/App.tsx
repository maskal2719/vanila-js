import React from 'react';
import './App.css';
import {User} from "./06.Callback/06";
import Dest from "./07.Destructarization/07";

function App() {

    let props = {
        name: 'Stas',
        age: 26,
        lessons: [{title: '1'},{title: '2'}],
        address : {
            street: {
                title: 'Gomelskay'
            }
        }
    }

    return (
        <div className="App">
            <Dest title={'123123'} man={props} car={{model:'opel'}} food={['513512']} />
        </div>
    );
}

export default App;
