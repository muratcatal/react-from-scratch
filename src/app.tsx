import React, {Component} from 'react';

export interface AppProps {
	name: string,
	surname: string
}

class App extends Component<AppProps,{}> {
	render () {
		const {name,surname} = this.props;

		return (<div>{name} {surname}</div>);
	}
}

export default App;
