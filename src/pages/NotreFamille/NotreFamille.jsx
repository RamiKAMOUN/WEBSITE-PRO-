import React, { useState, useEffect } from 'react';
import notreFamille  from './notreFamille.css'
import PagesHeader from '../../components/PagesHeader'
import weAreHiring2 from '../../images/weAreHiring2.png'
import FamilleService from '../../Services/FamilleService';
import ImageBase64 from '../../components/ImageBase64'

const NotreFamille = () => {
  const [familles, setFamilles] = useState([]);
  useEffect(() => {
    const fetchFamilles = async () => {
      try {
        const data = await FamilleService.getAllFamilles();
        setFamilles(data);
      } catch (error) {
        console.error('Error fetching familles:', error);
      }
    };

    fetchFamilles();
  }, []);

  const isValidBase64 = (str) => {
    try {
      return btoa(atob(str)) === str;
    } catch (error) {
      return false;
    }
  };

  return (
    <div>
     

      <div>
      <PagesHeader title="NOTRE FAMILLE" image={weAreHiring2}>
        Nous offrons un ensemble de conditions de travail attractives pour vous ! Cela inclut le soutien financier pour votre parcours d'ingénieur, un salaire compétitif dès le début de votre carrière universitaire, une assurance groupe, des tickets restaurant, le tout dans des locaux modernes à Paris, Tunis ou Sfax. Vous serez intégré(e) au sein d'une équipe unie et solidaire, bénéficiant d'une ambiance conviviale et de multiples activités en dehors du travail.
      </PagesHeader>

      <section className='gallery'>
        <div className='container gallery__container'>
          {familles.map((famille, index) => (
            <article key={index}>
              
              {isValidBase64(famille.avatar) ? (<ImageBase64 avatarBase64={famille.avatar}  />) : (<img src={famille.avatar} alt={famille.avatar} />)}
            </article>
          ))}
        </div>
      </section>
    </div>
     
    </div>
  )
}

export default NotreFamille