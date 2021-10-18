import HogCard from "./HogCard";

function HogContainer({hogs}){

    
    return (
        <div className = "ui grid container">
            {hogs.map((hog) => <HogCard hog={hog} key={hog.name}/>)}
        </div>
    );
    

}

export default HogContainer;