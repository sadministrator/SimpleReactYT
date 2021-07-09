import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
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

        this.videoSearch('penguins');
    }

    videoSearch(term) {console.log(term);
        YTSearch({ key: youtubeAPI, term: term }, (videos) => {
            this.setState({
                videos: videos,
                video: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

        return (
            <div>
                <Searchbar onSearchTermChange={videoSearch} />
                <Video video={this.state.video} />
                <VideoList onVideoSelect={video => this.setState({ video })} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));