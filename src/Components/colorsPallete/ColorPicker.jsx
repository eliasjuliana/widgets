const ColorPicker = (props) => {

    const {color, handleChange, disabled=false} = props

return (
    <input 
    type="color" 
    id='color-input' 
    name='color' 
    className='form-control mb-4' 
    value={color} 
    onChange={handleChange}
    disabled={disabled}/>
)
}

export default ColorPicker