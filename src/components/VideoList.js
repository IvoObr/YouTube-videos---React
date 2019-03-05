import React from 'react';
import VideoItem from './VideoItem';

const VideoList  = ({videos, onVideoSelect}) => {
    const renderedVideos = videos.map(video => {
       return !! video.id.videoId ? <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/> : null
    });

    return (
        <div className='ui relaxed divided list'>
            {renderedVideos}
        </div>
    )
};

export default VideoList;