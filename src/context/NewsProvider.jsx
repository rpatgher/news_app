import { useState, useEffect, createContext } from "react"
import axios from 'axios';


const  NewsContext = createContext();

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);
    

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const { data } = await axios.get(url);
            setPage(1);
            setNews(data.articles);
            setTotalNews(data.totalResults);
        }
        consultAPI();
    }, [category]);

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const { data } = await axios.get(url);
            setNews(data.articles);
            setTotalNews(data.totalResults);
        }
        consultAPI();
    }, [page]);

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, value) => {
        setPage(value);
    }
    return (
        <NewsContext.Provider value={{
            category,
            handleChangeCategory,
            news,
            totalNews,
            page,
            handleChangePage,

        }}>
            {children}
        </NewsContext.Provider>
    )
}

export { NewsProvider }
export default NewsContext
