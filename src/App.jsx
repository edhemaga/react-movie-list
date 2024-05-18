import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setData(response.data);
  })
  return <div>
    {
      data?.map((arg) => {
        return <div>{arg.title}</div>
      })
    }
  </div>
}
export default App;
