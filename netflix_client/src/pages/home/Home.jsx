import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token : "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

/*


import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar';
// import {AcUnit} from "@material-ui/icons"
import "./home.scss"
import "../../App.scss";
import List from '../../components/list/List';
import Featured from '../../components/featured/Featured';
import axios from "axios"

const Home = ({ type }) => {
  const [lists , setLists] = useState([]);
  const [genre , setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async() =>{
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              // "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
              "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc1ZDA1N2ViNmY2ZmJjYjA4NjVjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTgzNTc5MCwiZXhwIjoxNjkyMjY3NzkwfQ.IPNetVIOU0fwru3lriGkUnC80u72C0OwkDDbOBaOP60",
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getRandomLists();
  } , [type , genre]);
  return (
    <div className='home'>
       <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home */
