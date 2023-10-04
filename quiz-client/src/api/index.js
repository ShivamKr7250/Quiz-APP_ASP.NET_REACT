import axios from 'axios'

export const BASE_URL = 'http://localhost:5013/';

export const ENDPOINTS = {
    participant: 'Participants',
    questions: 'Questions',
    getAnswers : 'questions/getAnswers'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return{
        fetch: () => axios.get(url),
        fectchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id),
    }
}