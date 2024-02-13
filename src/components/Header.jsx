import React from 'react'
import { Link } from 'react-router-dom'
import img7 from '../images/img7.png'

const Header = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h1>SharePoint</h1>
          <p>Votre intranet mobile et intelligent.</p>
          <p>Découvrez la vouvelle façon de collaborer et de communiquer au sein de votre organisation,</p>
          <p>S'appuyant sur la solution Microsoft SharePoint et révélez le plein potentiel de vos équipes</p>
          <Link to="/contact" className='btn lg'>CONTACTEZ-NOUS</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={img7} alt="Main Header Image"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
