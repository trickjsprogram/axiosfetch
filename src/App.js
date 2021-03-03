import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    // const loadPost = () => {
    //   setLoading(true);
    //   return fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "GET",
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setLoading(false);
    //       setPosts(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setLoading(false);
    //     });
    // };

    loadPost();
  }, []);
  return (
    <div className="App">
      <h4>Axios vs Fetch in React</h4>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts.map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
}

export default App;
