import axios from 'axios';

export const fetchArticles = async (query, page) => {
    const responsse = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=20`);
    return responsse.data;
}