import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import  YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyCzVmktTEUo0NzCL0FIZ4o2LoF1Zi0X0FI";

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: "houses"}, (videos) => {
            this.setState({ videos });

        })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));