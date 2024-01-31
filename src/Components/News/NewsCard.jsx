const NewsCard = (props) => {
    const {item} = props
    return (
      <div className=" bg-gray-200 border shadow-md p-3 rounded text-wrap">
        <h4 className="text-xl">{item.title}</h4> <br/> <p>{item.category}</p>
      </div>
    )
}

export default NewsCard