import React from 'react';
import ReactDOM from 'react-dom';
require('dotenv').config();
import Searchbar from './components/searchbar';

const youtubeAPI = process.env.YOUTUBE_API_KEY;

const App = () => {
    return (
        <div>
            <Searchbar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));