import axios from 'axios';

const KEY = 'AIzaSyCDnQPzKXP9h0rzDXujgcAZXiVDi0ZeCiI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

