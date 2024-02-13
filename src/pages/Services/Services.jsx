import React, { useState, useEffect } from 'react';
import { IoIosPeople } from 'react-icons/io';

import CerviceService from '../../Services/CerviceService';
import imgH3 from '../../images/imgH3.jpg'
import PagesHeader from '../../components/PagesHeader'
import ImageBase64 from '../../components/ImageBase64';
import services from './services.css'

const Services = () => {
  const [cervices, setCervices] = useState([]);

  useEffect(() => {
    const fetchCervices = async () => {
      try {
        const data = await CerviceService.getAllCervices();
        setCervices(data);
      } catch (error) {
        console.error('Error fetching cervices:', error);
      }
    };

    fetchCervices();
  }, []);

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  const renderImage = (avatar) => {
    if (isValidBase64(avatar)) {
      return <ImageBase64 avatarBase64={avatar} className="service-image" />;
    } else {
      return <img src={avatar} alt={avatar} className="service-image" />;
    }
  };

  return (
    <div>
      <PagesHeader title="SERVICES" image={imgH3}></PagesHeader>
      {cervices.map((cervice, index) => (
        <section key={index} className='about__vision'>
          <div className="container about__vision-container">
            <div className={`about__section-content ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
              <h1>{cervice.name}</h1>
              <p>{cervice.description}</p>
            </div>
            <div className={`about__section-image ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
              {renderImage(cervice.avatar)}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;


