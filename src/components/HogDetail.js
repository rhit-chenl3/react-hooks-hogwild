import React from 'react'

function HogDetail({hog, hog:{specialty, greased, weight}}) {
    return (
        <>  
            <h4>Specialty: {specialty}</h4>
            <h4>Greased: {greased.toString()}</h4>
            <h4>Weight: {weight}</h4>
            <h4>Highest Medal Achieved: {hog["highest medal achieved"]}</h4>
        </>
    )
}
export default HogDetail;