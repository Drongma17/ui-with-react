import { useEffect } from "react";
import { useForm } from "react-hook-form";

function AddCustomValidation() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(watch("name"));
  const watchName = watch("name");
  const watchEmail = watch("email");

  useEffect(() => {
    console.log("Name", watchName);
  }, [watchName]);

  useEffect(() => {
    console.log("Email", watchEmail);
  }, [watchEmail]);

  const validateName = (value) => {
    if (value !== "admin") {
      return "Only admin is allowed";
    }
    return true;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          {/* <input {...register("name", {required: true, minLength:2})}></input> */}
          <input
            {...register("name", {
              required: "Name is required ",
              minLength:  2,
            //   validate: validateName,
            validate:
            {
                notAdmin:  (value) => value !== "admin" || "Admin is not allowed",
                isNotNumber: (value) => isNaN(value) || "Name cannot be number"
            }
            })}
          ></input>
        </label>
        {/* {errors.name && <p>Name is required and should be atleast 2 characters </p>} */}
        {errors.name && <p>{errors.name.message}</p>}
        <label>
          Email:
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          ></input>
        </label>
        {errors.email && <p>Email is required! </p>}
        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddCustomValidation;
