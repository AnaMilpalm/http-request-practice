import axios from 'axios';
import { useEffect, useState } from 'react';
import Articles from './components/Articles/Articles';


const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?query-react').then(res => setArticles(res.data.hits))
  }, []);

  return (
    <div>
      <Articles articles={articles}/>
    </div>
  )
}

export default App;