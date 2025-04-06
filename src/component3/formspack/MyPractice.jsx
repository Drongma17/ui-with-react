import { useState } from "react";

function MyPractice() {
  const [formDate, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({
      ...formDate,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
    });
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };
  const [errors, setError] = useState({});
  const validate = () => {
    const newError = {};
    if (!formDate.name.trim()) {
      newError.name = "Name is required ";
    } else if (!formDate.email.trim()) {
      newError.email = "Email is required ";
    }
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      console.log("submit form ", formDate);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formDate.name}
            onChange={handleChange}
          ></input>
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formDate.email}
            onChange={handleChange}
          ></input>
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyPractice;
