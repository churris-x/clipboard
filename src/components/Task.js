import { useState } from 'react';

/* TODO(Fran):
    Styled checkbox with input
    div, is probably easier
    3 states, ['empty', 'completed', 'failed'] string
    cycle between with each click, internal state, update a big global state/json/localstorage
    completed and failed add a line across each task
*/

export const Task = ({}) => {
    const [state, setState] = useState(['empty']);

    return (
        <div className='c-task-container'>
            <div className='c-task-checkbox'>
            </div>
            <input className='c-task-input'></input>
        </div>
    );
};
