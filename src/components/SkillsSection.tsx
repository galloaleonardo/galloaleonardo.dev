import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { faDiamond, } from "@fortawesome/free-solid-svg-icons";

const SkillsSection = () => {
  const skills = [
    { name: "Software Engineering", level: "Expert" },
    { name: "Software Architecture", level: "Expert" },
    { name: "System Design", level: "Expert" },
    { name: "Back-end", level: "Expert" },
    { name: "Front-end", level: "Advanced" },
    { name: "JavaScript", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "NodeJS", level: "Expert" },
    { name: "PHP", level: "Advanced" },
    { name: "Go", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "AWS Services", level: "Advanced" },
    { name: "Terraform IaC", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "SQL Server", level: "Advanced" },
    { name: "GraphQL", level: "Advanced" },
    { name: "Docker", level: "Advanced" },
    { name: "Prompt Engineer", level: "Advanced" },
    { name: "Event-driven Services", level: "Advanced" },
    { name: "Microservices", level: "Advanced" },
    { name: "Micro-frontend", level: "Intermediate" },
    { name: "Monorepo", level: "Intermediate" },
    { name: "Legacy Modernization", level: "Advanced" },
    { name: "Azure DevOps", level: "Advanced" },
    { name: "SCRUM", level: "Advanced" },
    { name: "Agile", level: "Advanced" },
    { name: "Leadership", level: "Advanced" },
    { name: "RESTful API", level: "Advanced" },
    { name: "Clean Architecture", level: "Advanced" },
    { name: "DDD", level: "Advanced" },
    { name: "Jenkins", level: "Intermediate" },
    { name: "Git", level: "Expert" },
    { name: "CI/CD", level: "Advanced" },
    { name: "Elastic APM", level: "Advanced" },
    { name: "Assertive Communication", level: "Expert" },
    { name: "Providing Feedback", level: "Expert" },
    { name: "Oratory", level: "Expert" },
  ];

  return (
    <div className="glass-card p-5 rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faDiamond} />
        <span>Skills</span>
      </h3>
      <ScrollArea className="h-[180px] w-full pr-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-sm">
              {skill.name} • {skill.level}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SkillsSection;
