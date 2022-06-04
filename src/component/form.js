import React from 'react';

const form = (props) => {
    return (
        <div>
            <form onSubmit={props.addCourse}>
                <input value={props.current} type="text" onChange={props.upCourse} />
                <button type="submit">Add course</button>
            </form>
        </div>
    )
}

export default form 