import React from 'react'
import headerAccueil from './headerAccueil.css'

import i1 from '../../images/i1 (2).png'

const HeaderAccueil = () => {
  return (
    <header className='accueil__header'>
     
   
        <div className="headerAccueil__container">
           <div className="headerAccueil__container-bg">
            <img 
              src={i1} 
              alt="Header Image"
              className="header-image"
            />
        </div>
          <div className="HeaderAccueil__content">
              {/* <h2>SharePoint</h2>
              <p>Votre intranet et intelligent</p><br/>
              <p>Découvrez la nouvelle façon de collaborer et de communiquer au sein de votre organisation,</p><br/>
            <p>S'appuyant sur la solution Microsoft Sharpoint et révélez le plein potentiel de vos équipes</p><br/> */ }
        </div>
        </div>
    </header>


  )
}

export default HeaderAccueil