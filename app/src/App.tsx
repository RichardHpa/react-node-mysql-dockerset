import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:3001/students';

interface Student {
  student_name: string;
}

function App() {
  const [data, setData] = useState<Student[]>([]);

  const fetchInfo = async () => {
    const response = await axios.get(url);
    return setData(response.data.rows);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          {data.map(student => {
            return <li>{student.student_name}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
