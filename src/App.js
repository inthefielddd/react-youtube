import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import SearchHeader from "./components/search/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const search = (query) => {
        youtube //
            .search(query)
            .then((videos) => setVideos(videos));
    };
    useEffect(() => {
        youtube //
            .mostPopular()
            .then((videos) => setVideos(videos));
    }, [youtube]);
    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <VideoList videos={videos} />
            <Footer />
        </div>
    );
}

export default App;
