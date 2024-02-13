import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Societe from './pages/Societe/Societe'
import Accueil from './pages/Accueil/Accueil'
import Services from './pages/Services/Services'
import Careers from './pages/Careers/Careers'
import Contact from './pages/Contact/Contact'
import APropos from './pages/APropos/APropos'
import NotreFamille from './pages/NotreFamille/NotreFamille'
import NotreHistoire from './pages/NotreHistoire/NotreHistoire'
import Navbar from './components/Navbar'
import NotFound from './pages/notFound/notFound'
import Footer from './components/Footer'

import ChercheurDemploi from './components/ChercheurDemploi'



const App = () => {
  return (
    <Router>
     
      <Navbar/> 
         
      <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/Societe' element={<Societe/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/NotreFamille' element={<NotreFamille/>}/>
          <Route path='/APropos' element={<APropos/>}/>
          <Route path='/NotreHistoire' element={<NotreHistoire/>}/>
          <Route path='*' element={<NotFound/>}/>
         
          <Route path="/chercheurdemploi/:id" element={<ChercheurDemploi />} />
      </Routes>  
      <Footer/>
      
      
    
    </Router>
    
  )
}

export default App