import { useEffect } from "react";
import Articles from "./components/Articles/Articles";

import { useState } from "react";
import { fetchArticles } from "./components/services/api";

const App = () => {
const [articles, setArticles] = useState([]);

  useEffect(() => {
  const getData = async () => {
    try {
      const { hits } = await fetchArticles();
    setArticles(hits);
    } catch(error) {
      console.error(error);
    }
  };
    getData();
  },[]); 

  return <div>
    <Articles articles={articles} />
  </div>
}

export default App;

// axios.get('https//:hn.algolia.com/api/v1/search?query-react').then(res => setArticles(res.data.hits));