import {useEffect, useState} from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async function (searchTerm) {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            //Error message comes here
            setErrorMessage('Oops. Something went wrong. Please try again.');
        };
    };

    useEffect(()=> {
        searchAPI('pasta');
    }, []);

    return [searchAPI, results, errorMessage];
}