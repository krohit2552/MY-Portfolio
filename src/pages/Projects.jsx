import { Link } from 'react-router-dom';
import {projects} from '../constants';
import {arrow} from'../assets/icons';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Projects = () => {

  console.log('thi is project array',projects[0].description);
  return (
    <section className='max-container'>
       <h1 className='head-text'>My <span className='me-color-sp font-semibold drop-shadow'>Projects</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Embarked on numerous projects throughout my B.Tech career, showcasing a commitment to turning ideas into reality with creativity, problem-solving, and technical proficiency.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project)=>(
        <div className='lg:w-[400px] w-full' key={project.name}>
        <div className='block-container w-20 h-20'>
          <div className={`btn-back rounded-xl ${project.theme}`}/>
          <div className='btn-front rounded-xl flex justify-center items-center'>
          <Link to={project.linkcc}  target='_blank' rel='noopener noreferrer'>
            <img src={project.iconUrl} alt= "Project Icon" className='w-4/5 h-4/5 object-contain items-center ml-2'/>
            </Link>
          </div>
          </div>
          <div className='mt-5 flex flex-col'>
          <h4 className='text-2xl font-poppins font-semibold'>
            {project.name}
          </h4>
          <p className='mt-2 text-slate-500'>
            {project.description}
          </p>
          <div className='mt-5 flex items-center gap-2 font-poppins '>
            <Link to={project.link}  target='_blank' rel='noopener noreferrer'
            className='font-semibold text-indigo-600 flex hover:opacity-70 hover:ml-1.5 hover:scale-110 transform transition duration-500'>
              Link <img src={arrow} className='w-4 h-4 object-contain items-center flex mt-1  '/>
            </Link>
           
          </div>
          </div>
        </div>
      ))}
      </div>
      <hr  className='border-slate-200'/>
      <CTA />
      <hr  className='border-slate-200 mt-16'/>
      <Footer/>
    </section>
  )
}

export default Projects
