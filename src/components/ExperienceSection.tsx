import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Architect",
      company: "CI&T",
      duration: "2024 - Present",
    },
    {
      role: "Software Engineer",
      company: "CI&T",
      duration: "2021 - 2024",
    },
    {
      role: "Software Engineer",
      company: "Dextra",
      duration: "2021 - 2021",
    },
    {
      role: "Software Engineer",
      company: "CRM Soluções",
      duration: "2016 - 2021",
    }
  ];

  return (
    <div className="glass-card p-5 rounded-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faBriefcase} />
        <span>Experience</span>
      </h3>
      
      <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2" style={{ textAlign: 'left' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-accent/40 pl-4">
            <h4 className="text-base font-medium">{exp.role}</h4>
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <span>{exp.company}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} size="xs" />
                <span>{exp.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
