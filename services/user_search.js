import axios from 'axios';

export const searchUsers = async (query, page) => {
  try {
    const request = `${process.env.NEXT_PUBLIC_REST_BASE_API_URL}/search/users?q=${query}&sort=followers&page=${page || 1}`;
    const response = await axios.get(request, {headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`}});
    return { 
        data: response?.data, 
        loading: response?.status
    };
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};