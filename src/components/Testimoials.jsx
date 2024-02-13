import React, { useState, useEffect } from 'react';
import SectionHeade from './SectionHeade';
import TemoignageService from '../Services/TemoignagesService'
import { BsQuote } from "react-icons/bs";
import { MdChevronRight,MdKeyboardArrowLeft } from "react-icons/md";
import Card from '../UI/Card' 
import ImageBase64 from './ImageBase64';


const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await TemoignageService.getAllTemoignages();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchData();
  }, []);

  const prevTestimonialHandler = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { name, quote, job, avatar } = testimonials[index] || {};

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  return (
    <section className='testimonials'>
      <div className="container testimonials__container">

        <SectionHeade icon={<BsQuote />} title="Témoignages" className="testimonials__head" />

        <Card className="testimonial">
          <div className='testimonial__avatar'>
          {isValidBase64(avatar) ? (<ImageBase64 avatarBase64={avatar} />) : (<img src={avatar} alt={name} />)}
          </div>
          <p className='testimonial__quote'>
            {`${quote}`}
          </p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
          
        </Card>

        <div className="testimonials__btn-container"> 
          <button className="testimonials__btn" onClick={prevTestimonialHandler}><MdKeyboardArrowLeft /></button>
          
          <button className="testimonials__btn" onClick={nextTestimonialHandler}><MdChevronRight /></button> 
    
        </div>
    
      </div>
 
    </section> ) }
 
 
 export default Testimonials
