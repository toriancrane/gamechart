import React, {useState, useEffect} from 'react';

// API 
import API from '../API';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components

//Hook

//Image



const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const searchGame = async (searchTerm='Animal') => {
        try {
            
            setError(false);
            setLoading(true);
            
            const games = await API.searchGame(searchTerm);
            
            console.log(games);
            
        } catch {
            setError(true);
        }
        
        setLoading(false);
    };
    
    // Initial render
    useEffect(() => {
        searchGame()
    }, [])

    return <div> Home Page! </div>
}

export default Home;