import React from 'react';
import { useParams } from 'react-router-dom';
import { experiences } from '../data/experiences';
import ContentContainer from '../components/ContentContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const { id } = useParams();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  const descriptionList = experience.description
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  return (
    <ContentContainer className='h-screen text-white md:flex gap-12 items-start justify-center'>
      <div className='flex md:block mb-8 items-center gap-6'>
        <img src={experience.logo} alt={experience.title} className='md:w-full sm:w-1/2 h-64 object-cover rounded-lg mb-8' />
        <div>
          <p className='text-2xl mb-4 font-bold'>{experience.company}</p>
          <p className='text-xl flex items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} />
            {experience.date}
          </p>
          <p className='text-xl gap-2 flex items-center'>
            <FontAwesomeIcon icon={faLocationDot} />
            {experience.location}
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <p className='text-4xl font-bold mb-4'>{experience.title}</p>
        <ul className='text-lg list-disc pl-6 max-w-3xl'>
          {descriptionList.map((line, index) => (
            <li key={index} className='mb-2'>{line}</li>
          ))}
        </ul>
      </div>
    </ContentContainer>
  )
}

export default Experience