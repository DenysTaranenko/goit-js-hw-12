import axios from 'axios';

export async function fetchImages(searchWord, currPage) {
  const KEY = '43855184-3ed97af1df9d5eb5f963fa3ef';
  const URL = 'https://pixabay.com/api/';
  const resp = await axios.get(URL, {
    params: {
      key: KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currPage,
      per_page: 15,
    },
  });
  return resp.data;

}
