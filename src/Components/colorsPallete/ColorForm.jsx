import { useState } from "react"
import { getRandomNumber } from "../../helpers.js";
import ColorPicker from "./ColorPicker.jsx";
import { Button } from "../ui/button.jsx";

const ColorForm = (props) => {

  const {setColors} = props;

  const [color, setColor] = useState('#000000');

  const handleChange = (e) =>{
    setColor(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newColor = {
      id: getRandomNumber(0,5000),
      value: color,
    }

    setColors((prev)=>[...prev, newColor])

    setColor('#000000')
  };

  return (
    <div className="w-7">
      <form onSubmit={handleSubmit} className="w-5">
        <h5>Administrar colores</h5>
        <div >
          <ColorPicker color={color} handleChange={handleChange}/>
          <p>{color}</p>
        </div>
        <Button type="submit">Guardar</Button>
      </form>
    </div>
  )
}

export default ColorForm