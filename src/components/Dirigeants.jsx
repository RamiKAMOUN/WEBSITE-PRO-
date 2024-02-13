import React, { useState, useEffect } from 'react';
import { IoIosPeople } from 'react-icons/io';
import SectionHeade from './SectionHeade';
import DirigeantService from '../Services/DirigeantService';
import ImageBase64 from './ImageBase64';

const Dirigeants = () => {
  const [dirigeants, setDirigeants] = useState([]);

  useEffect(() => {
    const fetchDirigeants = async () => {
      try {
        const data = await DirigeantService.getAllDirigeants();
        setDirigeants(data);
      } catch (error) {
        console.error('Error fetching dirigeants:', error);
      }
    };

    fetchDirigeants();
  }, []);

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  return (
    <section className='dirigant'>
      <div className='sec__irigeants'>
        <SectionHeade icon={<IoIosPeople />} title='DIRIGEANTS' />
      </div>
      <div className='container dirigeants__container'>
        {dirigeants.map((dirigeant, index) => (
          <article key={index} className='dirigeant__item'>
            <div className='dirigeant__item-image'>
              
              {isValidBase64(dirigeant.avatar) ? (<ImageBase64 avatarBase64={dirigeant.avatar}  />) : (<img src={dirigeant.avatar} alt={dirigeant.name} />)}
            </div>
            <h3>{dirigeant.name}</h3>
            <p>{dirigeant.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Dirigeants;
