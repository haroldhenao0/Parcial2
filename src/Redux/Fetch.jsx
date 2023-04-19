import axios from 'axios';

export const Fetch = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const posts = response.data;
    dispatch({ type: 'FETCH_SUCCESS', payload: { posts } });
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: { error } });
  }
};

export default Fetch