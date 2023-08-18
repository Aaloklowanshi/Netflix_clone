import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useMemo  , useState , useEffect} from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(()=>["Jan" , "Feb",
  "Mar" , "Apr" , "May" , "Jun" , "Jul",
  "Aug" , "Sep" , "Oct" , "Non" , "Dec",
] , []);

const [userStats , setUserStats] = useState([]);

useEffect(()=>{
  const getStats = async() =>{
    try{
        const res = await axios.get("http://localhost:8800/api/users/stats" , {
       headers : {
        token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc1ZDA1N2ViNmY2ZmJjYjA4NjVjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTgzNTc5MCwiZXhwIjoxNjkyMjY3NzkwfQ.IPNetVIOU0fwru3lriGkUnC80u72C0OwkDDbOBaOP60"
        }
    });
    const statsList = res.data.sort(function(a , b){
      return a._id - b._id;
    });
    statsList.map(item=> setUserStats(prev=>[...prev, {name : MONTHS[item._id-1] , "New User" :item.total }]));
    }
    catch(err){
      console.log(err);
    }

    
  }
  getStats();
} , [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
