import React, { useState } from "react";

function FormDataa() {
  const [formData, setFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: '',
  });
  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox'? checked : value,
    });
  };
  return (
    <div className="form-container">
      <h1> Form Example</h1>
      <form>
        {/* text Input */}
        <div className="form-field">
          <label>Text:</label>
          <input type="text"
          name='text'
           value={formData.text} onChange={handleChange} />
        </div>
        {/* check list */}
        <div className="form-field">
          <label>
            <input
              type='checkbox'
              name='checkbox'
              checked={formData.checkbox}
              onChange={handleChange}
            />
            Checkbox
          </label>
        </div>
        {/* radio button */}
        <div className="form-field">
        <label> Radio : </label>
          <label>
            <input
              type='radio'
              name='radio'
              value='radio1'
              checked={formData.radio === "optional1"}
              onChange={handleChange}
            />
            Radio 1
          </label>
        </div>
        <div className="form-field">
          <label>
            <input
              type='radio'
              name='radio'
              value='radio2'
              checked={formData.radio === "optional2"}
              onChange={handleChange}
            />
            Radio 2
          </label>
        </div>
        {/* Dropdown */}
        <div className="form-field">
          <label>Select</label>
          <select name="select" value={formData.select} onChange={handleChange}>
            <option value="">--choose an option --</option>
            <option value="option1"> option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
          </select>
        </div>

    <div className="form-data">
        <h3>Form Data</h3>
        <p><strong>Text:</strong>{formData.text || 'N/A'}</p>
        <p><strong>Checkbox:</strong>{formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        <p><strong>Radio:</strong>{formData.radio || 'N/A'}</p>
        <p><strong>Select:</strong>{formData.select || 'N/A'}</p>
    </div>

      </form>
    </div>
  );
}

export default FormDataa;
