import {BallCanvas} from '../components/canvas'
import { SectionWrapper } from "../hoc"
import {technologies} from '../constants'
import SectionHeade from './SectionHeade'
import { DiTechcrunch } from "react-icons/di";

const NosTechnologies = () => {
  return (
    <div>
        <SectionHeade icon={<DiTechcrunch />}  title="NOS TECHNOLOGIES"/>
            <div className='flex flex-row flex-wrap justify-center gap-10' style={{ marginTop: '80px' }}>
              {technologies.map((technology)=>(
                <div className='w-28 h-28 ' key={technology.name}>
                  <BallCanvas icon={technology.icon}/>
                </div>
              ))}
            </div>
    </div>
  )
}

export default SectionWrapper(NosTechnologies,"")