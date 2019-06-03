import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Layout, Avatar, Statistic } from 'antd';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Logout } from '../Login/actions'
// main layout imports
const { Content } = Layout;
const { SubMenu } = Menu;
var moment = require('moment');


class Empty extends Component {
	constructor() {
		super();
		this.state = {
			now: moment()
		};
	}


	handleClick = (item) => {
		if (!item.key.localeCompare('/'))
			this.props.logOut();
		if (item.key.localeCompare("user") && item.key.localeCompare('hour'))
			this.props.goToPage(`/${item.key}`);
	};

	getTopMenu() {
		let userData = this.props.user.given_name ? { letter: this.props.user.given_name[0], name: this.props.user.email } : { letter: " ", name: " " }
		if (location.pathname.localeCompare("/"))
			return (
				<Menu onClick={this.handleClick} mode="horizontal">
					<Menu.Item key="home">
						<Icon type="home" />
						Home
					</Menu.Item>

					<SubMenu
						title={
							<Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'left' }} size="small">
								{userData.letter}
							</Avatar>
						}
					>
						<Menu.Item key="user">
							{userData.name}
						</Menu.Item>
						<Menu.Item key="/">
							<Icon type="logout" />
							Logout
						</Menu.Item>
					</SubMenu>
					<Menu.Item key="hour">
						<Statistic
							value={this.state.now.format('MMMM Do YYYY, h:mm:ss a')}
							valueStyle={{ marginBottom: '14px', color: '#7c7c7c', fontSize: "12px" }}
						/>
					</Menu.Item>
				</Menu>
			);
	}


	render() {
		return (
			<Layout className="mainLayout">
				<Content className="content">
					<div className="cover">
						{this.getTopMenu()}
						{this.props.children}
					</div>
				</Content>
			</Layout>
		);
	}
}

Empty.propTypes = {
	user: PropTypes.object.isRequired,
	children: PropTypes.object.isRequired,
	logOut: PropTypes.func.isRequired,
	goToPage: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
	user: state.login.userData
});


const mapDispatchToProps = (dispatch) => {
	return {
		goToPage: (location) => {
			dispatch(push(location));
		},
		logOut: () => dispatch(Logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Empty);
