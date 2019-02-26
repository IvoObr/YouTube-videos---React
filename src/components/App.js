import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = {
        videos: []
    };

    onTermSubmit = async (searchString) => {
        const response = youtube.get('/search', {
            params: {
                q: searchString
            }
        });

        response.then(result => {this.setState({videos: result.data.items})})
    };

    render() {
        return (
            <div className='ui container'>
                <SearchBar onSubmitTerm={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;