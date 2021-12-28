import {
  GAME_SEARCH_URL,
  API_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  searchGame: async (searchTerm) => {
    const endpoint = `${GAME_SEARCH_URL}${searchTerm}`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;
