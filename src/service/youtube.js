class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }
    //인기항목
    async mostPopular() {
        const response = await this.youtube.get("videos", {
            params: {
                part: "snippet",
                chart: "mostPopular",
                maxResults: 40,
            },
        });
        return response.data.items;
    }

    //검색
    async search(query) {
        const response = await this.youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 40,
                type: "video",
                q: query,
            },
        });
        return response.data.items.map((item) => ({ ...item, id: item.id.video.id }));
    }
}

export default Youtube;
