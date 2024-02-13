import React from 'react'
import careers from './careers.css'
import PagesHeader from '../../components/PagesHeader'
import weAreHiring2 from '../../images/weAreHiring2.png'
import { FaCheck } from "react-icons/fa6";
import Poste from '../../components/Poste';


const Careers = () => {
  return (
    <div>
      <PagesHeader title="CAREERS" image={weAreHiring2}>
      Boostez votre carrière et participez à une success story !

      </PagesHeader>
      <section id='careers'>
        <h5 className='careers__weAreHiring'>We're hiring ! Come work with us.</h5>
        <div className='container careers__container'>
        <article className='careers'>
            <div className='carrers__head'>
              <h3>Tech et Succès : L'Univers PROGED</h3>
            </div>
            <ul className='careers__list'>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Découvrez des projets innovants dans un environnement stimulant</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Un lieu où la passion pour la tech est notre moteur</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Toujours à la pointe : vivez les technologies de demain aujourd'hui </p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Ensemble, progressons vers l'avenir de la programmation</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Équilibre travail-vie personnelle : rejoignez une entreprise dynamique et stable </p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Expérimentez des projets variés et novateurs au sein de PROGED</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Rejoignez une équipe passionnée, animée par la tech et l'innovation</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Évoluez dans un environnement où la curiosité et la créativité sont encouragées</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Faites partie d'une aventure technologique en constante évolution</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Conciliez vie professionnelle épanouie et progression constante au sein de notre entreprise dynamique</p>
              </li>
             
            </ul>
          </article>
          <article className='careers'>
            <div className='carrers__head'>
              <h3>Nous vous accompagnons</h3>
            </div>
            <ul className='careers__list'>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Encadrement depuis le parcours universitaire</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Prise en charge financière du parcours d’ingénieur</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Rémunération pendant la phase d’étude</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Formations certifiantes sur les dernières technologies Microsoft</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Participation à l’innovation et à la veille technologique de PROGED</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Préparation de votre futur parcours professionnel en France</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Un plan de carrière ambitieux pour toujours améliorer vos compétences</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>De nombreux évènements et activités en interne</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Des superbes bureaux, avec des collègues incroyables, dans une très bonne ambiance de travail</p>
              </li>
              <li>
              <FaCheck className='service__list-icon'/>
              <p>Une assurance santé pour le collaborateur ainsi que les membres de sa famille</p>
              </li>
             </ul>
          </article>
         
        </div>

       
      </section>

      <Poste/>
     
     
    </div>
  )
}

export default Careers