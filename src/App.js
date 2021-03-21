import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";

function App() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCSO9IkhCXuH03IAM-e3Vzup2vgyJD76Ls",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
        //한번만 호출하기위해서 []
    }, []);
    return <VideoList videos={videos} />;
}

export default App;
