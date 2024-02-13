import axios from 'axios';

const API_BASE_URL = 'https://localhost:7294/api'; 
const ChercheurDemploiService = {
  getAllChercheurDemplois: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/chercheurdemploi`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getChercheurDemploiById: async (chercheurDemploiId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/chercheurdemploi/${chercheurDemploiId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addChercheurDemploiWithCV: async (chercheurDemploiData) => {
    try {
      const formData = new FormData();
      formData.append('CVFile', chercheurDemploiData.CVFile);
      formData.append('Nom', chercheurDemploiData.Nom);
      formData.append('Prenom', chercheurDemploiData.Prenom);
      formData.append('Email', chercheurDemploiData.Email);
      formData.append('Telephone', chercheurDemploiData.Telephone);
      formData.append('Diplome', chercheurDemploiData.Diplome);
      formData.append('Universite', chercheurDemploiData.Universite);
      formData.append('ProfileLinkedin', chercheurDemploiData.ProfileLinkedin);
      formData.append('Motivation', chercheurDemploiData.Motivation);
      formData.append('IdeeProjet', chercheurDemploiData.IdeeProjet);

      const response = await axios.post(`${API_BASE_URL}/chercheurdemploi/add-chercheur-with-image`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateChercheurDemploi: async (updatedChercheurDemploi) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/chercheurdemploi`, updatedChercheurDemploi);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteChercheurDemploi: async (chercheurDemploiId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/chercheurdemploi/${chercheurDemploiId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ChercheurDemploiService;
