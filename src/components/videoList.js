import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    let videoList = props.videos.map((video) => {
        return <VideoListItem
            key={video.etag}
            onVideoSelect={props.onVideoSelect}
            video={video}
        />
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoList}
        </ul>
    );
}

export default VideoList;