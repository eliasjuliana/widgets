import ColorCard from "./ColorCard";

const ColorsList = (props) => {

    const {colors, setColors} = props;

    const handleDelete = (id) =>{
        const newList = colors.filter((item) => item.id !== id);
        setColors(newList);
    };

    return (
        <section className="mt-3 row">
            {colors.map((color)=>(<ColorCard key={color.id} color={color} handleDelete={handleDelete}/>))}
        </section>
    )
}

export default ColorsList