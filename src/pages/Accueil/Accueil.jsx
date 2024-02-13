import React from 'react'
import Header from '../../components/Header'
import accueil from './accueil.css'
import QuickContact from '../../components/QuickContact'
import QueCherchezVous from '../../components/QueCherchezVous'
import Testimoials from '../../components/Testimoials'
import HeaderAccueil from '../../components/headerAccueil/HeaderAccueil'
import i2 from '../../images/i1 (2).png'
import NosTechnologies from '../../components/NosTechnologies'
import ContactAccueil from '../../components/ContactAccueil'
import Clients from '../../components/Clients'
import Contact from '../../components/Contact'




const Accueil = () => {
  return (
    <div>
      <HeaderAccueil title='SharePoint' image={i2}> </HeaderAccueil>  
      <Contact/>  
      <QuickContact/>
      <Testimoials/>
      <Clients/>
      <QueCherchezVous/>
      <NosTechnologies/>
      <ContactAccueil/>
     
    </div>
  )
}

export default Accueil