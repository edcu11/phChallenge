import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Login, SetUser } from './actions';
import { Row, Button, Typography, Col } from 'antd';
import { push } from 'react-router-redux';
// import {firebase} from '../firebase/firebase'
const { Title } = Typography;

class LoginPage extends Component {
	constructor(props) {
		super(props);
		//<Icon type="user-add" />
	}

	componentDidMount() {

	}

	Login = () => {
		this.props.login().then((response) => {
			this.props.setUser(response.additionalUserInfo.profile);
			this.props.goToPage('/home')
		});
	}

	render() {
		return (
			<Row className={"loginPage"} type="flex" justify="center" gutter={16}>
				<Col>
					<Title> Tube Master </Title>
				</Col>
				<Col >
					<Button
						className="loginBtn"
						type="primary"
						icon="login"
						onClick={this.Login}
					>
						Login
				</Button>
				</Col>
			</Row >
		);
	}
}

LoginPage.propTypes = {
	setUser: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	goToPage: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
	return {
		setUser: (userData) => dispatch(SetUser(userData)),
		login: () => dispatch(Login()),
		goToPage: (location) => { dispatch(push(location)); }
	};
}

export default connect(null, mapDispatchToProps)(LoginPage);
