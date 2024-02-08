import ColorForm from "@/components/colorsPallete/ColorForm";
import ColorsList from "@/components/colorsPallete/ColorsList";
import { Form } from "@/components/ui/form";
import { useEffect, useState } from "react";

const colorsLS = JSON.parse(localStorage.getItem('colors')) || [];

const ColorsPallete = () => {
    const [colors, setColors] = useState(colorsLS);

    useEffect(()=>{
      localStorage.setItem('colors', JSON.stringify(colors))
    }, [colors])
  
    return (
      <div className="p-4 bg-green-200">
          <h1>Administrar colores</h1>
          <ColorForm setColors={setColors}/>
          <Form/>
          <ColorsList colors={colors} setColors={setColors}/>
      </div>)
}

export default ColorsPallete