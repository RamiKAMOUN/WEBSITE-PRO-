import React from 'react'
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import SectionHeade from './SectionHeade';
import {servicess} from '../data'
import Card from '../UI/Card';
import {Link} from 'react-router-dom'
import { CgAdd } from "react-icons/cg";

const QuickContact = () => {
  return (
    <section className='programs'>
      <div className='container programs__container'>
        <SectionHeade icon={<MdOutlineMiscellaneousServices />} title="NOS SERVICES"/>        
      </div>
      <div className="programs__wrapper">
        {
          servicess.map(({id,icon,title,info,path})=>{
            return (
               
             
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className ="btn sm">En savoir plus <CgAdd /></Link>

              </Card>
             
            )
          }
          
          )
        }
      </div>
    </section>
  )
}

export default QuickContact