import axios from 'axios';

const API_KEY = '21677950-a4a5f84606af054d030ec0d2d';
axios.defaults.baseURL = 'https://pixabay.com/api';

export async function fetchPicture(query = '', page = 1) {
  if (query.trim() === '') {
    console.log('PixabayApi: query === ""');
    return [];
  }

  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&per_page=12&image_type=photo&orientation=horizontal`,
  );
  return response.data.hits;
}
