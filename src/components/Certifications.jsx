import React, { useState, useEffect } from 'react';
import { PiCertificateBold } from 'react-icons/pi';
import SectionHeade from './SectionHeade';
import CertificationService from '../Services/CertificationService';
import ImageBase64 from './ImageBase64';
import microsoft from '../images/Microsoft gold-silver.gif'

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const data = await CertificationService.getAllCertifications();
        setCertifications(data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      }
    };

    fetchCertifications();
  }, []);

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  return (
    <section className='cerifications'>
      <div className='Nos__certifs'>
        <SectionHeade icon={<PiCertificateBold />} title='NOS CERTIFICATIONS' />
      </div>

      <div className='container certif__container'>
        <div className='certif__proged'>
        <div className='certif__proged-image'>
             <img src={microsoft} alt="Microsoft gold-silver "/>
        </div>   

        </div>

        <div className='certif__content'>
          <div className='exams__proged'>
            {certifications.slice(1).map((certification, index) => (
              <article key={index} className='exam__proged'>
                
                {isValidBase64(certification.avatar) ? (<ImageBase64 avatarBase64={certification.avatar}  />) : (<img src={certification.avatar} alt={certification.avatar} />)}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
