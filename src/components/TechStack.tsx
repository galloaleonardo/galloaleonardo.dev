import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faNodeJs, 
  faReact, 
  faDocker, 
  faAws, 
  faJs,
  faPhp,
  faGolang,
  faPython,
  faMicrosoft,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { ScrollArea } from "./ui/scroll-area";
import { faDatabase, faLaptopCode, faToolbox } from "@fortawesome/free-solid-svg-icons";

const TechStack = () => {
  const technologies = [
    { name: "Node.js", icon: faNodeJs },
    { name: "TypeScript", icon: faJs },
    { name: "JavaScript", icon: faJs },
    { name: "AWS", icon: faAws },
    { name: "Docker", icon: faDocker },
    { name: "ReactJS", icon: faReact },
    { name: "PHP", icon: faPhp },
    { name: "GO", icon: faGolang },
    { name: "Python", icon: faPython },
    { name: "Git", icon: faGit },
    { name: "MongoDB", icon: faDatabase },
    { name: "MySQL", icon: faDatabase },
    { name: "SQL Server", icon: faDatabase },
    { name: "Terraform", icon: faToolbox },
    { name: "Azure DevOps", icon: faMicrosoft },
  ];

  return (
    <div className="glass-card p-5 rounded-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faLaptopCode} />
        <span>Technologies</span>
      </h3>
      
      <ScrollArea className="h-[160px] w-full pr-4">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <div className="tech-icon">
                <FontAwesomeIcon icon={tech.icon} size="lg" />
              </div>
              <span className="text-xs">{tech.name}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TechStack;