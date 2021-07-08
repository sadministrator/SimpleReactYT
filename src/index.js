import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
import VideoList from './components/videoList';
import Video from './components/video';
require('dotenv').config;
const youtubeAPI = process.env.YOUTUBE_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            video: null
        }

        YTSearch({ key: youtubeAPI, term: 'surfboards' }, (videos) => {
            this.setState({
                videos: videos,
                video: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <Searchbar />
                <Video video={this.state.video} />
                <VideoList onVideoSelect={video => this.setState({ video })} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));