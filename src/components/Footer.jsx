import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>     
      < div className="container footer__container">

        <article>
          <Link to="/" className='logo'>
            <img src={logo} alt="Footer Logo" />
          </Link>
          <p>PROGED est une société de services et d’ingénierie informatique, qui offre une large gamme de solutions innovantes répondant au besoin de tout type d’entreprises en matière de portails d’entreprise, de gestion électronique de documents et d’outils d’aide à la décision.</p>

        </article>

        <article>
          <h4> Permalinks</h4>
          <Link to="/">Acceuil</Link>
          <Link to="/Societe">Societe</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Careers">Careers</Link>
          <Link to="/contact">Contact</Link>

        </article>
        <article className='footer__link'>
        <h4> Permalinks</h4>
      
          <Link to="/APropos">A Propos</Link>
          <Link to="/NotreHistoire">Notre Histoire</Link>
          <Link to="/NotreFamille">Notre Famille</Link>
          

        </article>
        <article className='article__icon'>
        <h4 className='contactezNous__footer'> Contactez-Nous</h4>
          
          <Link to="/contact">Contact</Link>

          <p><CiClock1 className='days__work' />  Lundi - Vendredi 08:30 - 18:00</p>
          <p><CiPhone className='phone__number'/> 0033 (0)1 84 19 94 14</p>
          <p><CiPhone className='phone__number' /> 00216 29 65 60 46</p>
          <p><HiOutlineMail className='email__adress'/> contact@progedsolutions.com</p>

        </article>
          <div className='footer__socials'>

            <a href="https://www.facebook.com/progedsolutions/ " target="_blank" rel='noreferrer noopener'><FaFacebook /></a>

            <a href="https://www.linkedin.com/company/proged/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>

          </div>
      </div>
      <div  className="footer__proged">
          <small>YOUR PATNER FOR INNOVATIONS</small>
      </div>

    </footer>
  )
}

export default Footer