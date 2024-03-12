import Axios from 'axios';

const axios = Axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: "42754365-919be7dc6da81f3ebd6558a71",
  },
});

export async function getImages(userValue, userPage) {
    const res = await axios.get("", {
        params: {
            q: userValue.trim(),
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: userPage
        }
    })
    
    return res.data;
}
