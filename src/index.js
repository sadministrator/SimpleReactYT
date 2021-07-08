import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
require('dotenv').config;

const youtubeAPI = process.env.YOUTUBE_API_KEY;

YTSearch({key: youtubeAPI, term: 'surfboards'}, (data) => {
    console.log(data);
});

const App = () => {
    return (
        <div>
            <Searchbar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));