import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";
import Sort from "./Sort";

function App() {
	const [hogList, setHogList] = useState(hogs);

	const handleFilter = (e) => {
		// console.log(e.target.value)
		setHogList(hogs.filter(hog => hog.greased.toString().includes(e.target.value)));
	}

	const handleSort = (e) => {
		console.log(e.target.value)
		const input = e.target.value;
		if(input === "name"){
			setHogList(hogs)
		}
		if(input === "weight"){
			setHogList(hogs)
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter handleFilter={handleFilter}/>
			<Sort handleSort={handleSort}/>
			<HogContainer hogs = {hogList} />
		</div>
	);
}

export default App;
