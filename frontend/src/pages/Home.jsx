import React, { useEffect, useState } from 'react'
import profilePic from '../assets/images/profile_picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const myRoles = ['Software Engineer', 'Site Reliability Engineer', 'DevOps Engineer', 'UofT CS Graduate'];
  const [currentRole, setCurrentRole] = useState(myRoles[0]);
  const [animate, setAnimate] = useState(false);

  // Alternate roles every 3 seconds
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % myRoles.length;
      setAnimate(false);
      setTimeout(() => {
        setCurrentRole(myRoles[index]);
        setAnimate(true);
      }, 100);
    }, 3000);

    setAnimate(true);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='h-screen'>
      <div className='flex flex-col items-center justify-center h-full gap-4 text-white'>
        <div className='flex items-center justify-center gap-12'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl font-bold'>Emily Ho</h1>
            <img src={profilePic} alt="Profile" className='w-72 h-96 rounded-lg object-cover'/>
          </div>
          <div className='justify-center items-center flex flex-col max-w-2xl'>
            <h2 className={`text-5xl font-bold mb-12 ${animate ? 'animate-fadeUp' : ''}`} id='role'>
              {currentRole}
            </h2>
            <p className='text-2xl text-center max-w-2xl border-t-2 pt-8'>
              I'm a software engineer with a passion for building impactful, automated projects. Welcome to my personal website where you can learn more about me and my work.
            </p>
            <button className='mt-12 px-6 py-3 bg-main_purple text-white rounded-lg hover:bg-purple-400 transition-colors duration-300'>
              <a href="/#Projects">
                View my Projects
                <FontAwesomeIcon icon={faAngleRight} className='ml-2 text-white' />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home