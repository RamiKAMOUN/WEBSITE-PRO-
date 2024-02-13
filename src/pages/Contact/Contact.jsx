import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import imgContact2 from '../../images/imgContact2.jpg'
import { TfiEmail } from "react-icons/tfi";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import contact from './contact.css'
import { HiOutlinePhone } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import SectionHeade from '../../components/SectionHeade' 


const Contact = () => {
  return (
    <div>
      <PagesHeader title="CONTACT" image={imgContact2}>
      Vous avez des questions à poser, vous souhaitez en apprendre davantage sur nos formations ou notre activité, ou peut-être préférez-vous nous rencontrer en personne ? Toutes les informations pour nous contacter ou organiser une rencontre sont disponibles ci-dessous.
      </PagesHeader>
      <section id='contact'>
        
      <div className='container contacter__nous'>
        <SectionHeade icon={<IoIosContacts />} title="CONTACTEZ-NOUS"/>        
      </div>
        <div className='container contact__container'>
          <div className="contact__options">
            <article className='contact__option'>
              <TfiEmail className='contact__option-icon' />
              <h4>Email</h4>
              <p>contact@progedsolutions.com</p>
              <a href="mailto:contact@progedsolutions.com" target="_blank">ENVOYER NOUS UN EMAIL</a>
            </article>
            <article className='contact__option'>
              <HiOutlinePhone className='contact__option-icon' />
              <h4>Téléphone</h4>
              <p>Paris: +33 (0)1 84 19 94 14</p>
              <p>Tunisie: +216 29 65 60 46</p>
            </article>
            <article className='contact__option'>
            <IoLogoWhatsapp  className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>envoyer nous un message</h5>
              <a href="https://api.whatsapp.com/send?phone=+216 29 65 60 46" target="_blank">+216 29 65 60 46</a>
            </article>
          </div>
          <form action="">
            <input type="text"  name='name' placeholder='VOTRE NOM & PRENOM' required/>
            <input type="EMAIL"  name='email' placeholder='EMAIL'required/>
            <input type="text"  name='telephone' placeholder='TÉLÉPHONE'required/>
            <input type="text"  name='SUJET' placeholder='SUJET'required/>            
            <textarea type="submit"  rows="7" placeholder='VOTRE MESSAGE' required></textarea>
            <button type='submit' className='btn btn-primary'>ENVOYER</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact