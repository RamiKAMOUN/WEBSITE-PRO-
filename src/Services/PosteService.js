
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 

const PosteService = {
  getAllPostes: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/poste`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPosteById: async (postId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/poste/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addPosteWithImage: async (posteData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/poste/add-post-with-image`, posteData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePoste: async (updatedPoste) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/poste`, updatedPoste);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePoste: async (postId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/poste/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PosteService;
