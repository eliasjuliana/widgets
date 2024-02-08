import ColorPicker from "./ColorPicker";

const ColorCard = (props) => {

    const {color, handleDelete} = props;

    return (
        <article className="col-12 col-md-3">
            <div className="card d-flex flex-column align-items-center">
                <h5 className="card-header">{color.value}</h5>
                <ColorPicker color={color.value} disabled/>
                <button className="btn btn-danger" type="button" onClick={()=>handleDelete(color.id)}>Borrar</button>
            </div>
        </article>
    )
}

export default ColorCard