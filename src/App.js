import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState,useEffect} from 'react';
function App() {
  const [name,setName]=useState("siva");
  const siva =async ()=>{
    var res=await axios.get("http://localhost:8080/emp/search");
    console.log(res);
    setName(res.data)
  }
  siva();
  return (
    <div className="App">
     <h1>{name}</h1>
    </div>
  );
}

export default App;
