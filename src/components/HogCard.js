import {useState} from "react";
import HogDetail from "./HogDetail";

function HogCard({hog, hog:{name, image}}){
    // console.log(hog["highest medal achieved"]);

    const [displayInfo, setDisplayInfo] = useState(false);

    function handleDisplay(){
        setDisplayInfo(!displayInfo)
    }

    return(
        <div className="ui eight wide column">
            <h3>{name}</h3>
            {/* {console.log(displayInfo)} */}
            {displayInfo ? <HogDetail hog={hog} /> : ""}
            <img onClick={handleDisplay} height='200' src={image} alt={name}></img>
        </div>
    );

}

export default HogCard;

