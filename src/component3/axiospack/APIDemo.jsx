import { useEffect, useState } from "react";

function APIDemo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h2>API's</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <p>Id: {post.id}</p>
            <p> <strong>Title: {post.title}</strong></p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIDemo;
