import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 

const MessageService = {
  getAllMessages: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/message`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMessageById: async (messageId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/message/${messageId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addMessage: async (messageData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/message`, messageData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateMessage: async (updatedMessage) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/message`, updatedMessage);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteMessage: async (messageId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/message/${messageId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Mes
