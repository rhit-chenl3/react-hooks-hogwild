import React from 'react'

function Sort({handleSort}) {
    return (
        <>
            <select id="sort" onChange={handleSort}>
                <option value="">Select Sort</option>
                <option value="name" >Name</option>
                <option value="weight" >Weight</option>
            </select>
        </>
    )
}

export default Sort;