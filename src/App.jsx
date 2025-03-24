/*import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
export default App;*/
import { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./api/Api";

function App() {
  const [data, setData] = useState([]);
  const getPostData = async () => {
    try {
      const res = await fetchData();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <>
            <li className="card">
              <b>Title:</b> {item.title}
              <br />
              <span>
                <b>Description:</b>
              </span>
              {item.body}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
