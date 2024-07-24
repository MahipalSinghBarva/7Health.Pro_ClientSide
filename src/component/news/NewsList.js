import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const apiKey = "b4adcb3a0bdc4e9aa6b6defb7d05c718";
    const query = "tesla";

    const fetchArticles = async (page) => {
        const url = `https://newsapi.org/v2/everything?q=${query}&from=2024-06-24&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&pageSize=20`;
        try {
            const response = await axios.get(url);
            setArticles(response.data.articles);
            setTotalResults(response.data.totalResults);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchArticles(page);
    }, [page]);

    const handleNextPage = () => {
        if ((page * 20) < totalResults) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    return (
        <>
            <h1 className='text-orange-700 text-4xl flex justify-center items-center mt-10 my-10'>Tesla News</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10'>
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <Link to={`/post/${index}`} key={index} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow-md ">
                            <div className="sm:flex  sm:justify-between sm:items-center">
                                <div>
                                {article.urlToImage && (
                                    <img
                                        alt="Thumbnail"
                                        src={article.urlToImage}
                                        className="h-32 w-64 ml-4 rounded-lg object-cover shadow-sm"
                                    />
                                )}
                                    <h3 className="text-lg font-bold text-yellow-900 sm:text-xl">{article.title}</h3>
                                    <p className="mt-1 text-xs font-medium text-gray-600">By {article.author ? article.author : "Unknown"}</p>
                                    <p className="text-sm text-gray-500">{article.description}</p>
                                    <p className="text-xs text-gray-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                </div>
                                
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No articles available</p>
                )}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
                <button
                    className='text-white bg-blue-500 px-4 py-2 rounded disabled:opacity-50'
                    onClick={handlePrevPage}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    className='text-white bg-blue-500 px-4 py-2 rounded'
                    onClick={handleNextPage}
                    disabled={(page * 20) >= totalResults}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default NewsList;
