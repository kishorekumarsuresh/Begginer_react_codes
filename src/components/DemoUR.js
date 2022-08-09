
import React, { useEffect, createRef, useState } from "react";


function DemoUR () {
const [counter, setCounter] = useState(0);
const ref = createRef();

useEffect(() => {
	ref.current = "GeeksforGeeeks";
}, []);

useEffect(
	() => {
	console.log(counter, ref.current);
	},
	[counter]
);

return (
	<div className="App">
	<header className="App-header">
		<h3>Example on createRef</h3>
		<button onClick={() => setCounter((counter) => counter + 1)}>
		Increment
		</button>
		<h5>Counter Value: {counter}</h5>
		<h1>{ref.current}</h1>
	</header>
	</div>
);
}

export default DemoUR
