import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="w-full py-3 flex items-center justify-between animate-fade-in">
      <div className="text-xl font-semibold">
        <span className="gradient-text">G</span>
      </div>
      
      <div className="flex items-center space-x-5">
        <a href="https://github.com/galloaleonardo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/galloaleonardo/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="mailto:galloaleonardo@gmail.com" className="hover:text-accent transition-colors">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
    </header>
  );
};

export default Header;
