import React, { useEffect, useState } from 'react'
import profilePic from '../assets/images/profile_picture.jpg';
import clioLogo from '../assets/images/logos/clio_logo.jpg';
import arctiqLogo from '../assets/images/logos/arctiq_logo.jpg';
import cccLogo from '../assets/images/logos/ccc_logo.png';
import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import experiences from '../data/experiences';
import skills from '../data/skills';

import ContentContainer from '../components/ContentContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faPython, faJs, faAws } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const myRoles = ['Software Engineer', 'Site Reliability Engineer', 'DevOps Engineer', 'UofT CS Graduate'];
  const [currentRole, setCurrentRole] = useState(myRoles[0]);
  const [animate, setAnimate] = useState(false);
  const [spin, setSpin] = useState(null);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

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
    <ContentContainer>
      <div className='bg-dark_blue min-h-screen'>
        <section id="intro-section" className="flex flex-col items-center justify-center h-screen gap-4 text-white">
          <div className='flex flex-col items-center justify-center h-full gap-4 text-white'>
            <div className='flex items-center justify-center gap-20 flex-col lg:flex-row'>
              <div className='flex flex-col items-center'>
                <img src={profilePic} alt="Profile" className='w-72 h-96 rounded-t-lg object-cover'/>
                <div className="w-72 bg-buttons_purple rounded-b-lg p-4 justify-center text-white items-center flex flex-col">
                  <h1 className="text-2xl font-bold text-white">Emily Ho</h1>
                  <div className='flex text-xl gap-2 mt-2'>
                  <a href="https://github.com/Emilyho11" target="_blank" rel="noopener noreferrer" className='text-white hover:text-main_purple'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/emily-ho-cs/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-main_purple'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
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
        <section id="experience-section" className="py-20 text-white h-screen">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">My Work Experience</h2>
            <div className='flex gap-8 pb-4 justify-center flex-wrap text-center'>
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className='w-80 bg-white/20 rounded/lg p-8 flex flex-col items-center hover:scale-105 duration-300 cursor-pointer rounded-lg'
                  onClick={() => navigate(`/experience/${exp.id}`)}
                >
                  <img src={exp.logo} alt={`${exp.company} Logo`} className='w-16 h-16 mb-4 rounded-full bg-white object-contain' />
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray mb-2">{exp.company} ({exp.employment})</p>
                  <p className="text-lg text-gray mb-2">{exp.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills-section" className="py-20 text-white h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Skills</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {skills.map(skill => (
                <span
                  key={skill.name}
                  className='flex items-center gap-2 bg-buttons_purple px-4 py-2 rounded shadow-lg'
                >
                  <FontAwesomeIcon icon={skill.icon} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 text-white">
          Contact Me
        </section>
      </div>
    </ContentContainer>
  )
}

export default Home