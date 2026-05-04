import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex flex-row-reverse text-white h-[50px] fixed bottom-0 w-full p-4'>
      <div className="text-2xl gap-2 items-center flex">
        <p className='text-base pr-4 my-4 border-r-2'>Emily Ho © 2026</p>
        <a href="https://github.com/Emilyho11" target="_blank" rel="noopener noreferrer" className='text-white hover:text-main_purple'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/emily-ho-cs/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-main_purple'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

    </div>
  )
}

export default Footer