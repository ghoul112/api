import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import UserList from './components/UserList';

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));

}, []);
console.log(users);



return (
<div>
  <UserList users={users}/>
  
</div>
)
}

export default App;
