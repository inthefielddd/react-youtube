import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import SearchHeader from "./components/search/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) => {
        //클릭한 비디오가 있다면
        //setSelectedVideo로 업데이트를 해준다
        setSelectedVideo(video);
    };

    //단어를 찾아서 값을 가져온다
    const search = (query) => {
        setSelectedVideo(null);
        youtube //
            .search(query) //값을 받아오면 setVideos를 통해서 업데이트해주기
            .then((videos) => {
                setVideos(videos);
                setSelectedVideo(null);
            });
    };

    //useEffect를 통해서 인기항목 값을 가져온다
    useEffect(() => {
        youtube //
            .mostPopular()
            .then((videos) => setVideos(videos));
    }, []);
    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}

                <div className={styles.list}>
                    <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? "list" : "grid"} />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
