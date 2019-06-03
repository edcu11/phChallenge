import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { Row, Card } from 'antd';
const { Meta } = Card;
import Ellipsis from 'ant-design-pro/lib/Ellipsis';



class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        //<Icon type="user-add" />
    }

    componentDidMount() {
    }


    render() {
        let videoData = this.props.video.snippet;
        return (
            <Row type="flex" justify="center" >
                <Card
                    cover={
                        <YouTube
                            videoId={this.props.params.videoId}
                            opts={{
                                height: '480',
                                width: '660',
                                playerVars: {
                                    autoplay: 1
                                }
                            }} />
                    }
                >
                    <Meta
                        title={`${videoData.title}`}
                        description={<Ellipsis length={100} tooltip>{` ${videoData.channelTitle} - ${videoData.description}`}</Ellipsis>}
                    />
                </Card>
            </Row>
        );
    }
}



VideoPlayer.propTypes = {
    video: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    video: state.home.selectedVideo
});

export default connect(mapStateToProps, null)(VideoPlayer);