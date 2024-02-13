import React from 'react'
import ProgedJourney from '../../components/ProgedJourney'
import notreHistoire from './notreHistoire.css'
import { FaHistory } from "react-icons/fa";
import journey from '../../images/soustraitance.jpg'
import PagesHeader from '../../components/PagesHeader'
import SectionHeade from '../../components/SectionHeade'

const NotreHistoire = () => {
  return (
    <div>
        <PagesHeader title="NOTRE HISTOIRE" image={journey}>     
        </PagesHeader>
        
        <SectionHeade className='notre__histoire'  icon={<FaHistory />} title="NOTRE HISTOIRE"/>        
       
        <ProgedJourney/>
    </div>
  )
}

export default NotreHistoire