import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const NewsDetails = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const apiKey = 'b4adcb3a0bdc4e9aa6b6defb7d05c718';
  const query = 'tesla';

  useEffect(() => {
    const fetchArticle = async () => {
      const url = `https://newsapi.org/v2/everything?q=${query}&from=2024-06-24&sortBy=publishedAt&apiKey=${apiKey}&page=1`;
      try {
        const response = await axios.get(url);
        const selectedArticle = response.data.articles[parseInt(id, 10)];
        setArticle(selectedArticle);
      } catch (error) {
        console.error("Error fetching article details", error);
      }
    };

    fetchArticle();
  }, [id]);

  return article ? (
    <div className="p-6 max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold bg-transparent text-orange-400 mb-4">{article.title}</h2>
      {article.urlToImage && (
        <div className="flex justify-center mb-4 bg-transparent">
          <img src={article.urlToImage} alt="Article" className="w-full md:w-1/2 rounded-lg" />
        </div>
      )}
      <div className="space-y-4 bg-transparent">
        <p className='bg-transparent'>
          <span className="font-semibold bg-transparent">Description:</span>{' '}
          <span className="text-gray-400 bg-transparent">{article.description}</span>
        </p>
        <p className='bg-transparent'>
          <span className="font-semibold bg-transparent ">Author:</span>{' '}
          <span className="text-gray-400 bg-transparent">{article.author}</span>
        </p>
        <p className='bg-transparent'>
          <span className="font-semibold bg-transparent">Content:</span>{' '}
          <span className="text-gray-400 bg-transparent">{article.content}</span>
        </p>
      </div>
      <div className="flex justify-center mt-6 bg-transparent">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 "
        >
          Back to Articles
        </Link>
      </div>
    </div>
  ) : (
    <p className="text-white text-center">Loading...</p>
  );
};

export default NewsDetails;
