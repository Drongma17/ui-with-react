import axios from "axios";
import { useState } from "react";
import api from "./api/api";


function CustomAxiosInstance() {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    api.post("/posts", newPost).then((response) => {
      console.log("New Post Added: ", response.data);
      setData([response.data]);
    });
  };
  return (
    <div>
      <h1>API's in React</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
export default CustomAxiosInstance;
