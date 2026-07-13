import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { use } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutMobileDropdown, setAboutMobileDropdown] = useState(false);
  const aboutRef = useRef(null);

  const myLinks = [
    { to: '/projects', text: 'Projects', type: 'nav' },
    { to: '/hobbies', text: 'Hobbies', type: 'nav' },
    { to: '/#contact-section', text: 'Contact Me', type: 'hash' } // Change to HashLink
  ];

  // Hide dropdown when clicking outside
  function handkeClickOutside(event) {
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setAboutDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handkeClickOutside);
    return () => {
      document.removeEventListener('mousedown', handkeClickOutside);
    };
  }, []);

  return (
    <div className="header w-full h-[60px] relative">
      <div className="m-4 absolute top-0 right-0 gap-14 text-lg hidden md:flex text-white">
        <div className='relative' ref={aboutRef} onClick={() => setAboutDropdown(!aboutDropdown)}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                isActive ? 'font-bold underline' : '',
                'cursor-pointer text-white hover:underline select-none flex items-center gap-1'
              ].join(' ')
            }
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            Home
            <FontAwesomeIcon icon={aboutDropdown ? faChevronUp : faChevronDown} className="ml-1 hover:text-main_purple" />
          </NavLink>
          {aboutDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-buttons_purple rounded-lg shadow-lg flex flex-col text-lg z-20">
              <HashLink
                smooth
                to="/#intro-section"
                className="py-2 px-4 text-white hover:underline"
                onClick={() => setAboutDropdown(false)}
              >
                About
              </HashLink>
              <HashLink
                smooth
                to="/#experience-section"
                className="py-2 px-4 text-white hover:underline"
                onClick={() => setAboutDropdown(false)}
              >
                Work Experience
              </HashLink>
              <HashLink
                smooth
                to="/#skills-section"
                className="py-2 px-4 text-white hover:underline"
                onClick={() => setAboutDropdown(false)}
              >
                Skills
              </HashLink>
              <HashLink
                smooth
                to="/#contact-section"
                className="py-2 px-4 text-white hover:underline"
                onClick={() => setAboutDropdown(false)}
              >
                Contact Me
              </HashLink>
            </div>
          )}
        </div>
        {myLinks.map((link, index) => (
          link.type === 'hash' ? (
            <HashLink
              key={index}
              smooth
              to={link.to}
              className="active text-white hover:underline"
            >
              {link.text}
            </HashLink>
          ) : (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                [
                  !isActive ? 'active' : 'font-bold underline',
                  'text-white hover:underline'
                ].join(' ')
              }
            >
              {link.text}
            </NavLink>
          )
        ))}
      </div>
      <div className="text-white">
        <div className="md:hidden flex items-center absolute top-0 right-0 m-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:underline focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="text-2xl text-white hover:underline" />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-12 right-4 w-48 bg-buttons_purple rounded-lg shadow-lg flex flex-col text-lg">
            <div>
              <div
                className="py-2 px-4 text-white hover:underline flex justify-between items-center cursor-pointer"
                onClick={() => setAboutMobileDropdown(!aboutMobileDropdown)}
              >
                About
                <span>{aboutMobileDropdown ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
              </div>
              {aboutMobileDropdown && (
                <div className="flex flex-col pl-4">
                  <HashLink
                    smooth
                    to="/#experience-section"
                    className="py-2 px-4 text-white hover:underline"
                    onClick={() => setAboutMobileDropdown(false)}
                  >
                    Work Experience
                  </HashLink>
                  <HashLink
                    smooth
                    to="/#skills-section"
                    className="py-2 px-4 text-white hover:underline"
                    onClick={() => setAboutMobileDropdown(false)}
                  >
                    Skills
                  </HashLink>
                </div>
              )}
            </div>
            {myLinks.map((link, index) => (
              link.type === 'hash' ? (
                <HashLink
                  key={index}
                  smooth
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="active text-white hover:underline py-2 px-4"
                >
                  {link.text}
                </HashLink>
              ) : (
                <NavLink
                  key={index}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    [
                      !isActive ? 'active' : 'font-bold underline',
                      'py-2 px-4 text-white hover:underline'
                    ].join(' ')
                  }
                >
                  {link.text}
                </NavLink>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
