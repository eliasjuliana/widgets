import { useEffect, useState } from "react";
import NewsForm from "../Components/News/NewsForm"
import NewsGallery from "../Components/News/NewsGallery"

const newsUrl = import.meta.env.VITE_NEWS_URL

const fetchNews = async (category)=>{
  let url = newsUrl;

  if(category){
    url+= `&category=${category}`
  }
//   console.log(url)
  try{
    const response = await fetch(url);
    const data = await response.json();
    const newsArray = data.results;
    // console.log(newsArray);
    return newsArray;
  } catch(e) {
    console.error(e);
    return null
  }
}

const News = () => {

    const [news, setNews] = useState([]);
    // const [filteredNews, setFilteredNews] = useState([]);


    useEffect(()=>{
      fetchNews().then((newsArray)=>{setNews(newsArray)});
    },[]);

    const handleChange = (e) =>{
      const category = e.target.value;

      fetchNews(category).then((newsArray)=>{setNews(newsArray)});
  };


    return (
      <div className='border shadow-md p-3'>
        <h2 className="font-bold text-center text-xl">News</h2>
        <NewsForm handleChange={handleChange}/>
        <NewsGallery news={news}/>
      </div>
    )
}

export default News