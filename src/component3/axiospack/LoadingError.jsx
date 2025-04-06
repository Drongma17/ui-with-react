import { useEffect, useState } from "react";

function loadingError() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        throw new Error('Something went wrong!')
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

export default loadingError;
