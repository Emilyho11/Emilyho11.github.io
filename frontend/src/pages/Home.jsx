import React, { useEffect, useState } from 'react'
import profilePic from '../assets/images/profile_picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const myRoles = ['Software Engineer', 'Site Reliability Engineer', 'DevOps Engineer', 'UofT CS Graduate'];
  const [currentRole, setCurrentRole] = useState(myRoles[0]);
  const [animate, setAnimate] = useState(false);

  // Alternate roles every 2 seconds
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % myRoles.length;
      setAnimate(false);
      setTimeout(() => {
        setCurrentRole(myRoles[index]);
        setAnimate(true);
      }, 100);
    }, 2000);

    setAnimate(true);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-dark_blue min-h-screen'>
      <section id="intro-section" className="flex flex-col items-center justify-center h-screen gap-4 text-white">
        <div className='flex flex-col items-center justify-center h-full gap-4 text-white'>
          <div className='flex items-center justify-center gap-20 flex-col lg:flex-row'>
            <div className='flex flex-col items-center'>
              <img src={profilePic} alt="Profile" className='w-72 h-96 rounded-t-lg object-cover'/>
              <div className="w-72 bg-buttons_purple rounded-b-lg p-4 flex justify-center">
                <h1 className="text-2xl font-bold text-white">Emily Ho</h1>
              </div>
            </div>
            <div className='justify-center items-center flex flex-col max-w-2xl'>
              <h2 className={`text-5xl font-bold mb-12 ${animate ? 'animate-fadeUp' : ''}`} id='role'>
                {currentRole}
              </h2>
              <p className='text-2xl text-center max-w-2xl border-t-2 pt-8'>
                I'm a software engineer with a passion for building impactful, automated projects. Welcome to my personal website where you can learn more about me and my work.
              </p>
              <button className='mt-12 px-6 py-3 bg-buttons_purple text-white rounded-lg hover:bg-main_purple transition-colors duration-300'>
                <a href="/#Projects">
                  View my Projects
                  <FontAwesomeIcon icon={faAngleRight} className='ml-2 text-white' />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience-section" className="py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Site Reliability Engineer at Clio</li>
            <li>DevOps Engineer at Arctiq</li>
            <li>Software Engineer at Crystal Claire Cosmetics</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20 text-white h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-buttons_purple px-4 py-2 rounded">Python</span>
            <span className="bg-buttons_purple px-4 py-2 rounded">JavaScript</span>
            <span className="bg-buttons_purple px-4 py-2 rounded">DevOps</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 text-white">
        Contact Me
      </section>
    </div>
  )
}

export default Home