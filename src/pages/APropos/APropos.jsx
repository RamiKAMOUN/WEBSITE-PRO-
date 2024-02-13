import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import aPropos from './aPropos.css'
import imgH3 from '../../images/imgH3.jpg'
import NotreSavoirFaire from '../../components/NotreSavoirFaire'
import Dirigeants from '../../components/Dirigeants'
import Certifications from '../../components/Certifications'
import QuiSommesNous from '../../components/QuiSommesNous'


const APropos = () => {
  return (
    <div>
      <PagesHeader title="A PROPOS DE PROGED" image={imgH3}>
      PROGED est une société de services et d’ingénierie informatique, qui offre une large gamme de solutions innovantes répondant au besoin de tout type d’entreprises en matière de portails d’entreprise, de gestion électronique de documents et d’outils d’aide à la décision.
      </PagesHeader>
     <QuiSommesNous/>
     <NotreSavoirFaire/>
     <Certifications/>
     <Dirigeants/>
    </div>
  )
}

export default APropos