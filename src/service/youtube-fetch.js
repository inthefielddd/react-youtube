class YoutubeFetch {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }

    //인기항목
    async mostPopular() {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items;
    }

    //검색
    async search(query) {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map((item) => ({
            ...item,
            id: item.id.vidoeId, //search에서는 id값이 오브젝트안에 들어가있기때문에 재설정해주기
        }));
    }
}

export default YoutubeFetch;
