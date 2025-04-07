import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface ProfileSectionProps {
  profileImage?: string;
}

const ProfileSection = ({ profileImage }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden border-2 border-accent/30 p-1">
        <img 
          src={profileImage} 
          alt="Leonardo Gallo" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <div className="space-y-3 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">Leonardo Gallo</h1>
        <h2 className="text-xl text-muted-foreground">Software Architect</h2>
        
        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
          <FontAwesomeIcon icon={faLocationDot} size="sm" />
          <span>Campinas, São Paulo, Brazil</span>
        </div>
        
        <p className="text-muted-foreground w-full max-w-full text-justify">
        I am a <strong>software architect</strong> and <strong>tech lead</strong> with {Number(new Date().getFullYear()) - 2016} years of experience, deeply passionate about both <strong>back-end</strong> and <strong>front-end</strong> development.
        I graduated in <strong>Information Systems</strong> and hold a post-graduate degree in <strong>Solutions Architecture</strong>.
        I <strong>design</strong> and <strong>build</strong> robust, scalable solutions, leveraging cloud infrastructure and harnessing the power of <strong>AI</strong> to streamline processes, enhance efficiency, and deliver innovative results. 
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;