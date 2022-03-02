import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('naruto');

    // /videos,/search, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '3f0962ce6dmshdc09a31e8df653bp15b0dbjsnf50c4275ad15'
            }
        });
        const data = await response.json();

        if(type.includes('/news')){
            console.log(data.entries);
            setResults(data.entries);
        }
        else if(type.includes('/images')){
            setResults(data.image_results);
        }
        else {
            setResults(data.results);
        }
       
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>

    )
}

export const useResultContext = () => useContext(ResultContext);