import React, { Component } from 'react';
import { Empty } from 'antd';

class NotFound extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Empty />
			</div>

		);
	}
}

NotFound.propTypes = {
};

export default NotFound;