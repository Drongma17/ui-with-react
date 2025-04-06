import axios from "axios";
import { useEffect, useState } from "react";

function APIWithAxios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response)
        setData(response.data);
        setLoading(false);
       // throw new Error('Something went wrong!')
      })
      .catch((error)=>{
        console.error(`Error Fetching Data : `, error);
        setError('Failed to fetch the data ');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ... </p>;
  }

  if (error) {
    return <p> {error} </p>;
  }
  return (
    <div>
      <br />
      <br />
      <h2>API's</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <p>Id: {post.id}</p>
            <p>
              <strong>Title: {post.title}</strong>
            </p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIWithAxios;
