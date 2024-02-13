import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api/client'; 

const ClientService = {
  getAllClients: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getClientById: async (clientId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addClientWithImage: async (clientData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/add-client-with-image`, clientData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateClient: async (updatedClient) => {
    try {
      const response = await axios.put(API_BASE_URL, updatedClient);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteClient: async (clientId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}?id=${clientId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ClientService;
