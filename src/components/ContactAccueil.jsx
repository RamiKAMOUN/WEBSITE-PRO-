import {useState,useRef} from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const ContactAccueil = () => {

  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    sujet:'',
    email:'',
    message:'',
  })
  const [loading,setLoading]=useState(false);
  const handleChange = (e)=>{  
  }
  
  const handleSubmit=(e)=>{}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
     <motion.div
      variants={slideIn('left',"tween",0.2,1)}
      className='flex-[0.75] bg-gray-500 bg-opacity-50 p-8 rounded-2xl'
     >

      <p className={styles.sectionSubText}>
        Get in touch
      </p>
      <h3 className={styles.sectionHeadText}>CONTACTEZ-NOUS</h3>
      <form
       ref={formRef}
       onSubmit={handleSubmit}
       className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
           Nom & Prénom
          </span>
          <input 
           type='text'
           name="name"
           value={form.name}
           onChange={handleChange}
           placeholder='Votre Nom et prénom'
           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
         />

        </label>

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
           E-mail
          </span>
          <input 
           type='email'
           name=" email"
           value={form. email}
           onChange={handleChange}
           placeholder='email'
           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
         />

        </label>
        
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
           Sujet
          </span>
          <input 
           type='text'
           name="Sujet"
           value={form.sujet}
           onChange={handleChange}
           placeholder='Sujet'
           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
         />

        </label>

        

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
           Message
          </span>
          <textarea
           row="7"
           name="message"
           value={form.message}
           onChange={handleChange}
           placeholder='Messgae'
           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
         />

        </label>
        <button
         type="submit"
         className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >

          EONVOYER
        </button>

      </form>

     </motion.div>
     <motion.div
       variants={slideIn('right',"tween",0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
     >

      <EarthCanvas/>  

     </motion.div>
      
    </div>
  )
}

export default SectionWrapper(ContactAccueil,'ContactAccueil')