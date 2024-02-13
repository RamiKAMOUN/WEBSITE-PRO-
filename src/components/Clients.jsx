import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeade from './SectionHeade';
import { FaHandshake } from 'react-icons/fa';
import ClientService from '../Services/ClientService'
import ImageBase64 from './ImageBase64';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px', 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };


  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await ClientService.getAllClients();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  
  return (
    
     
      <div className="clients-container">
        <Slider {...settings} className="client-carousel">
          {clients.map((client, index) => (
            <div key={index} className="client-slide">
             

              {isValidBase64(client.avatar) ? (  <img src={`data:image/png;base64,${client.avatar}`} alt={client.avatar} className="client-logo" />) : (<img src={client.avatar} alt={client.avatar} className="client-logo" />)}


            </div>
          ))}
        </Slider>
      </div>
    
  );
};

export default Clients;
