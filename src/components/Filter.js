import React from 'react'

function Filter({handleFilter}) {
    return (
        <div>
            <select id="greased" onChange={handleFilter}>
                <option value="">Select Filter</option>
                <option value={true} >Greased</option>
                <option value={false} >Not Greased</option>
            </select>
        </div>
        
    )
}

export default Filter;