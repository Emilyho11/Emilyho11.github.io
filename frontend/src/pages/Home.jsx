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
import { faAngleRight, faClose, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faPython, faJs, faAws } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const myRoles = ['Software Engineer', 'Site Reliability Engineer', 'DevOps Engineer', 'UofT CS Graduate'];
  const [currentRole, setCurrentRole] = useState(myRoles[0]);
  const [animate, setAnimate] = useState(false);
  const [spin, setSpin] = useState(null);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // Group the skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

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
      <div className='min-h-screen flex flex-col md:flex-row justify-center gap-8'>
        <div className='w-full max-w-sm mx-auto md:mx-0 md:w-80 lg:w-96 md:sticky md:top-14 md:self-start pt-16'>
          <img src={profilePic} alt="Profile" className="w-full object-cover rounded-t-lg"/>
          <div className="w-full bg-buttons_purple rounded-b-lg p-4 justify-center text-white items-center flex flex-col">
            <h1 className="text-2xl font-bold text-white">Emily Ho</h1>
            <div className='flex text-2xl gap-2 mt-2'>
              <a href="https://github.com/Emilyho11" target="_blank" rel="noopener noreferrer" className='text-white hover:text-main_purple'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/emily-ho-cs/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-main_purple'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <p className='text-lg flex items-center'>
              <FontAwesomeIcon icon={faLocationDot} />
              Toronto, ON.
            </p>
          </div>
        </div>
        <div className='flex-1 max-w-4xl'>
          <section id="intro-section" className="flex flex-col md:min-h-[calc(100vh-160px)] items-center justify-center text-white">
            <div className='flex flex-col items-center justify-center h-full gap-4 text-white'>
              <div className='flex items-center justify-center gap-20 flex-col lg:flex-row'>
                <div className='justify-center items-center flex flex-col'>
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 ${animate ? 'animate-fadeUp' : ''}`} id='role'>
                    {currentRole}
                  </h2>
                  <p className='text-base sm:text-lg lg:text-2xl text-center max-w-2xl border-t-2 pt-6 lg:pt-8'>
                    I'm a software engineer with a passion for building impactful, automated projects. Welcome to my personal website where you can learn more about me and my work.
                  </p>
                  <button className='text-lg mt-12 px-6 py-3 bg-buttons_purple text-white rounded-lg hover:bg-main_purple transition-colors duration-300'>
                    <a href="/#Projects">
                      View Projects
                      <FontAwesomeIcon icon={faAngleRight} className='ml-2 text-white' />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Experience Section */}
          <section id="experience-section" className="min-h-screen py-20 text-white">
            <div className="mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">My Work Experience</h2>
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
          <section id="skills-section" className="min-h-screen py-20 text-white">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
              <div className='justify-center'>
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                  <div key={category} className='w-64 pb-12'>
                    <h3 className='text-xl font-semibold'>{category}</h3>
                    <div className='flex gap-4 mt-2'>
                      {skills.map(({ name, icon, color }) => (
                        <div key={name} className='flex flex-col items-center gap-2'>
                          <FontAwesomeIcon icon={icon} color={color} size="2x" />
                          <span className='text-sm text-gray'>{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Contact Section */}
          <section id="contact-section" className="min-h-screen py-20 text-white">
            <div className='mx-auto max-w-2xl'>
              <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
              <form className='w-full flex flex-col gap-6'>
                <div className='md:flex gap-6'>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className='w-full px-5 py-3 rounded-lg bg-white/80 text-dark_purple placeholder-dark_purple focus:outline-none focus:ring-2 focus:ring-main_purple transition'
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className='w-full px-5 py-3 rounded-lg bg-white/80 text-dark_purple placeholder-dark_purple focus:outline-none focus:ring-2 focus:ring-main_purple transition'
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className='w-full px-5 py-3 rounded-lg bg-white/80 text-dark_purple placeholder-dark_purple focus:outline-none focus:ring-2 focus:ring-main_purple transition min-h-32'
                  required
                ></textarea>
                <button
                  type="submit"
                  className='self-end px-6 py-3 bg-buttons_purple text-white rounded-lg hover:bg-main_purple transition-colors duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Home