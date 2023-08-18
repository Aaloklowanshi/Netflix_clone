import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const[newUsers , setNewUsers] = useState([]);
  useEffect(()=>{
    const getNewUsers = async() =>{
      try{
      const res = await axios.get("http://localhost:8800/api/users?new=true" ,{
        headers: {
          token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc1ZDA1N2ViNmY2ZmJjYjA4NjVjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTkxNDg5NiwiZXhwIjoxNjkyMzQ2ODk2fQ.E06ezORWrRRawUdS9Dpf76E6WW58EMQdVBPZZW1cZv4"
        }
      } );
      setNewUsers(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getNewUsers();
  } , []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>(
        <li className="widgetSmListItem">
          <img
             src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" }
            // src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
           
          </div>
           <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
