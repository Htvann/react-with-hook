import {useEffect, useState} from "react";
import "./Home.css"
import axios from "axios";

const Home = () => {
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [data, setData] = useState([]);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=895284fb2d2c50a520ea537456963d9c`

    useEffect(() => {

        //lay vi tri nguoi dung
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
        });

        console.log("Latitude is:", lat)
        console.log("Longitude is:", lon)

        fetch(url)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            });
    },[lat, lon])

console.log(data)
    return (
        <div className="home">

        </div>
    )
}
export default Home