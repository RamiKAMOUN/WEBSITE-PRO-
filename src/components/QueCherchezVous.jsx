import React from 'react'
import SectionHeade from './SectionHeade'
import {quechezV} from '../data'
import QuecherchezV from './QuecherchezV'
import { RiQuestionnaireFill } from "react-icons/ri";

const QueCherchezVous = () => {
  return (
   <section className='faqs'>
     <div className='container faqs__container'>

      <SectionHeade icon={<RiQuestionnaireFill />}  title="QUE CHERCHEZ-VOUS ?"/>
      <p className='intro__faqs'>PROGED SOLUTIONS offre un catalogue complet et unique de services pour vous accompagner à toutes les étapes de vos projets notamment « Conseil, Intégration, Développement, Accompagnement du changement, Support, Services Managés ».</p>
        <div className="faqs__wrapper">

          {
                  
            <QuecherchezV />
                       

          }

        </div>
     </div>
   </section>
  )
}

export default QueCherchezVous
