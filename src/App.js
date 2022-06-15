import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import axios from 'axios';
import './styles.scss';

function App() {
  const [data, setData] = useState(null);

  function getData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      // .get(`https://jsonplaceholder.typicode.com/albums`)
      // .get(`https://jsonplaceholder.typicode.com/comments`)
      // .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => setData(res.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  console.log(data, 'data');

  useEffect(() => {
    getData();
  }, []);

  return <div className="container">{data && <Home data={data} />}</div>;
}

export default App;
