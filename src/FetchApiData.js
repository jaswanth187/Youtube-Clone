import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    // part: "snippet",
    // videoId: "M7FIvfx5J10",
    maxResults: "25",
  },
  headers: {
    "X-RapidAPI-Key": "cc7b8ebdcbmsh5aa719cb9a78a6dp135daajsnd3aa6c3142b6",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApiData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// const response = fetchApiData(`search?part=snippet&q=${"react"}`);
// response.then((data) => console.log(data));
