import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 

const CertificationService = {
  getAllCertifications: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/certification`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCertificationById: async (certificationId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/certification/${certificationId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addCertificationWithImage: async (certificationData) => {
    try {
      const formData = new FormData();
      formData.append('avatarFile', certificationData.avatarFile);

      const response = await axios.post(`${API_BASE_URL}/certification/add-certification-with-image`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCertification: async (updatedCertification) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/certification`, updatedCertification);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCertification: async (certificationId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/certification/${certificationId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CertificationService;
