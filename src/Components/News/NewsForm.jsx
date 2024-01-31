

const NewsForm = (props) => {
    const {handleChange} = props;

  return (
    <form className="mb-5">
        <select onChange={handleChange}>
            <option>Category</option>
            <option value={'business'}>Business</option>
            <option value={'health'}>Health</option>
            <option value={'science'}>Science</option>
            <option value={'technology'}>Technology</option>
        </select>
    </form>
  )
}

export default NewsForm