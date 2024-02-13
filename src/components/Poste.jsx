import React, { useState, useEffect } from 'react';
import PosteService from '../Services/PosteService';
import ChercheurDemploi from './ChercheurDemploi';
import {Link} from 'react-router-dom';
import ImageBase64 from './ImageBase64';
import SectionHeade from './SectionHeade';
import { PiSuitcaseSimpleBold } from "react-icons/pi";




const Poste = () => {
  const [postes, setPostes] = useState([]);

  useEffect(() => {
    
    const fetchPostes = async () => {
      try {
        const allPostes = await PosteService.getAllPostes();
        setPostes(allPostes);
      } catch (error) {
        console.error('Error fetching job offers:', error);
      }
    };

    fetchPostes();
  }, []);

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };


  return (
    <div className="poste-container">
      <SectionHeade icon={<PiSuitcaseSimpleBold />}  title=" POSTES À POUVOIR"/>
      <ul>
        {postes.map((poste) => (
          <li key={poste.id} className="poste-item">
            <h3>{poste.name}</h3>
            <div className="image-container" >
            {isValidBase64(poste.avatar) ? (<ImageBase64 avatarBase64={poste.avatar}  />) : (<img src={poste.avatar} alt={poste.name} />)}
            </div>
            <p className="poste-description">{poste.description}</p>
           
            <Link to={`/chercheurdemploi/${poste.id}`} className="see-more-button">
                En savoir plus
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poste;