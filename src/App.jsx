
import { useEffect, useState } from 'react';
import Articles from './components/Articles/Articles';
import { fetchArticles } from './services/api';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';


const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(0);
  const [nbPages, setNbPages] = useState(0);
  

  useEffect(() => {

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const {hits, nbPages} = await fetchArticles(query, page);
        setNbPages(nbPages);
        setArticles(prev => (page === 0 ? hits : [...prev, ...hits]));
        
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoader(false); 
      }
    };

      getData();   
  }, [query, page]);

    const handleChangeQuery = query => {
      setArticles([]);
      setQuery(query);
      setPage(0);


    }
      return (
    <div>
      <p>Current page: {page}</p>
      <SearchBar onChangeQuery={handleChangeQuery} />
  {isLoader && <Loader />}
  {nbPages > page && <button onClick={() => setPage(prev => prev + 1)}>Load more</button>}
  <Articles articles={articles}/>
  {isError && <h2>Щось сталось! Онови сторінку...</h2>}
    </div>
  )
}

export default App;
// axios.get('https://hn.algolia.com/api/v1/search?query-react').then(res => setArticles(res.data.hits))