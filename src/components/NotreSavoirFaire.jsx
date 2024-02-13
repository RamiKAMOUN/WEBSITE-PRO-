import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";

const NotreSavoirFaire = () => {
  return (
    <section id='experience'>
      
      <div className="container experience__container">
        <div className='experience__NotreSavoirFaire'>
          <h3>NOTRE SAVOIR-FAIRE</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h5>Transformation digitale</h5>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h5>Mise en place d’intranet (extranet)</h5>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h5>Les réseaux sociaux d'entreprise</h5>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h5>Les portails de GED et numérisation</h5>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h5>L’automatisation des processus (Workflows)</h5>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h5>Support Office 365</h5>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h5>Formations</h5>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default NotreSavoirFaire