import { useForm } from "react-hook-form";

function CustomAdvanceValidation() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({mode: 'onChange'});
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const existingUsernames = ["admin", "user123", "john"];
  const checkIfUsernameExist = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return existingUsernames.includes(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register("name", {
              required: "Name is required ",
              minLength: 2,
              validate: {
                notAdmin: (value) =>
                  value !== "admin" || "Admin is not allowed",
                isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                checkUsername: async (value) => {
                  const exist = await checkIfUsernameExist(value);
                  return !exist || "Username already taken ";
                },
              },
            })}
          ></input>
        </label>
        {errors.name && <p> {errors.name.message || "Name is required and should be atleast 2 characters"} </p>}
        <br />
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
        <br />
        <label>
          Password:
          <input
            type="password"
            {...register("password", {
              required: "Name is required ",
              minLength: 2,
            })}
          />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Name is required ",
              minLength: 2,
              validate: (value) =>
                value === watch("password") || "Confirm Password do not match",
            })}
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomAdvanceValidation;
