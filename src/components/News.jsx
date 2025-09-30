import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NewsCard from './NewsCard';

function News() {
  const [articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState('');
  const apiKey = import.meta.env.VITE_API_KEY;
  const fetchNews = async (keyword = 'cars AND technology AND sports') => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`
      );
      if(res.data.articles.length === 0){
        setError('No articles found')
      }
      setArticles(res.data.articles);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to fetch news')
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600 mt-5 underline decoration-blue-40 underline-offset-8 bg-white">
        News Explorer
      </h1>

      {/* Pass fetchNews to SearchBar */}
      <SearchBar onSearch={fetchNews} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {loading && <p className='text-center'>Loading news...</p>}
        {error && <p className='text-center'>{error}</p>}
        {!loading && !error && articles.length> 0 &&
        articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default News;