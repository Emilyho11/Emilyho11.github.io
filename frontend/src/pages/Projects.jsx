import React from 'react'
import ContentContainer from '../components/ContentContainer'
import projects from '../data/projects'

const Projects = () => {
  return (
    <ContentContainer>
      <h1 className='text-white text-2xl'>PROJECTS</h1>
      <div className='min-h-screen'>
        <div className='grid grid-cols-4 gap-4 mt-4'>
          {projects.map((project, index) => (
            <button key={index} className='relative overflow-hidden bg-neutral-700/80 rounded-lg text-left'>
              <img src={project.image} alt={project.title} className='w-full h-56 object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'/>
              <h2 className='absolute bottom-0 left-0 p-4 text-white text-lg font-bold'>{project.title}</h2>
            </button>
          ))}
        </div>
      </div>
    </ContentContainer>
  )
}

export default Projects