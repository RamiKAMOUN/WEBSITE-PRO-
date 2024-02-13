// ChercheurDemploi.jsx
import React, { useState, useEffect } from 'react';
import ChercheurDemploiService from '../Services/ChercheurDemploiService';
import PosteService from '../Services/PosteService';
import { useParams } from 'react-router-dom';



const ChercheurDemploi = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
    Email: '',
    Telephone: '',
    Diplome: '',
    Universite: '',
    ProfileLinkedin: '',
    Motivation: '',
    IdeeProjet: '',
    CVFile: null,
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetailsData = await PosteService.getPosteById(id);
        setJobDetails(jobDetailsData);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      CVFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Combine job details and applicant's data before sending
      const applicationData = {
        jobDetails,
        applicantData: formData,
      };
      await ChercheurDemploiService.submitApplication(applicationData);
      // Optionally, you can add logic here to show a success message or redirect the user
    } catch (error) {
      console.error('Error submitting application:', error);
      // Optionally, you can add logic here to show an error message
    }
  };

  return (
    <div className='job'style={styles.container}>
      <h2 style={styles.heading}>{jobDetails?.name}</h2>
      <p style={styles.description}>{jobDetails?.description}</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Nom:
          <input type="text" name="Nom" value={formData.Nom} onChange={handleInputChange} required />
        </label>
        <label>
          Prenom:
          <input type="text" name="Prenom" value={formData.Prenom} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} required />
        </label>
        <label>
          Telephone:
          <input type="tel" name="Telephone" value={formData.Telephone} onChange={handleInputChange} required />
        </label>
        <label>
          Diplome:
          <input type="text" name="Diplome" value={formData.Diplome} onChange={handleInputChange} required />
        </label>
        <label>
          Universite:
          <input type="text" name="Universite" value={formData.Universite} onChange={handleInputChange} required />
        </label>
        <label>
          Profile Linkedin:
          <input type="text" name="ProfileLinkedin" value={formData.ProfileLinkedin} onChange={handleInputChange} />
        </label>
        <label>
          Motivation:
          <textarea name="Motivation" value={formData.Motivation} onChange={handleInputChange} required />
        </label>
        <label>
          Idee Projet:
          <textarea name="IdeeProjet" value={formData.IdeeProjet} onChange={handleInputChange} />
        </label>
        <label>
          Upload CV:
          <input type="file" name="CVFile" onChange={handleFileChange} required />
        </label>

            <button type="submit">Send Application</button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '800px',
    margin: '200px auto',
    padding: '20px',
    backgroundColor: 'transparent',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '0 3rem 0 3rem',
  },
  heading: {
    color: 'black',
    margin:'15px'
  },
  description: {
    color: 'black',
  },
  form: {
    marginTop: '20px',
    color:'black',
    // ... additional styles for the form
  },
  // Add more styles as needed
};
export default ChercheurDemploi;
