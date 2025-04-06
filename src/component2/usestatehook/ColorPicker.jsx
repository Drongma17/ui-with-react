

import React, { useState } from "react";

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const colors = ['#ff0000', '#0097A7', '#388E3C', '#E64A19', '#1E88E5', '#FFEE58','#E53935','#6A1B9A'];
  const handleColorChange = (color) =>{
    setBackgroundColor(color)
  }
  return (
    <div  className='App' style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div key={index} className='color-box'
          style={{backgroundColor: color}}
          onClick={() => handleColorChange(color)}>
          </div>
        ))}
      </div>
      <div className="custom-color-picker">
  <input type="color" 
  value ={backgroundColor}
  onChange={(e)=> handleColorChange(e.target.value)}
  />
      </div>
    </div>
  );
}

export default ColorPicker;
