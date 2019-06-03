import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Typography, Col, Input, List } from 'antd';
import { push } from 'react-router-redux';
import { SearchVideos, SetVideo } from './actions';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
const { Title } = Typography;
const { Search } = Input;

class HomePage extends Component {
	constructor(props) {
		super(props);
		//<Icon type="user-add" />
	}

	componentDidMount() {
	}

	watchVideo = (video) => {
		this.props.setVideo(video)
		this.props.goToPage(`watch/${video.id.videoId}`);
	}

	render() {
		return (
			<Row className={"videoIndex"} type="flex" justify="center" gutter={16}>
				<Col>
					<Title> Tube Master </Title>
					<Row type="flex" justify="center">
						<Search
							placeholder="search video"
							enterButton
							onSearch={value => this.props.searchVideos({ text: value, nextPageToken: '',  resultCount: 50  })}
						/>
					</Row>
					{(<List
						pagination={{ pageSize: 4 }}
						dataSource={this.props.videos}
						renderItem={video => {
							let videoData = video.snippet;
							return (
								<List.Item
									onDoubleClick={() => this.watchVideo(video)}
									extra={
										<img
											width={172}
											src={videoData.thumbnails.high.url}
											onClick={() => this.watchVideo(video)} />
									}
								>
									<List.Item.Meta
										title={videoData.title}
										description={
											<Ellipsis length={100} tooltip>{videoData.description}</Ellipsis>
										}
									/>
								</List.Item>
							)
						}}
					/>
					)}
				</Col>
			</Row >
		);
	}
}

HomePage.propTypes = {
	videos: PropTypes.array.isRequired, // eslint-disable-line
	searchVideos: PropTypes.func.isRequired, // eslint-disable-line
	setVideo: PropTypes.func.isRequired,
	goToPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	videos: state.home.videos
});

function mapDispatchToProps(dispatch) {
	return {
		setVideo: (videoData) => dispatch(SetVideo(videoData)),
		searchVideos: (params) => dispatch(SearchVideos(params)),
		goToPage: (location) => { dispatch(push(location)); }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
