import NewsCard from "./NewsCard";


const NewsGallery = (props) => {
    const {news} = props;

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
        {news.map((item) => (
              <NewsCard key={item.id} item={item} />
        ))}
        </div>
    )
}

export default NewsGallery