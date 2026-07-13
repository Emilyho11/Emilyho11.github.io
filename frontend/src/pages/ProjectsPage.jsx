import React from 'react'
import ContentContainer from '../components/ContentContainer'
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

const ProjectsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <ContentContainer>
      <div className='min-h-screen px-48'>
        <h1 className='text-white text-2xl'>{project.title}</h1>
        <div className='flex gap-8'>
          <img src={project.image} alt={project.title} className='w-1/2 h-96 object-cover mt-4 rounded-lg' />
          <p className='text-white text-lg tracking-wide mt-4'>{project.description}</p>
        </div>
      </div>
    </ContentContainer>
  )
}

export default ProjectsPage