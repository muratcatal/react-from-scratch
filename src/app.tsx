import React from "react";
import Counter from "./containers/counter";
import Users from "./containers/http-example/users/list";

const App: () => JSX.Element = () => (
		<>
				<Counter dummy={1}/>
				<Users />
		</>
);

export default App;
