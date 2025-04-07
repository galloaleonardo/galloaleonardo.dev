import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBriefcase, faLanguage } from "@fortawesome/free-solid-svg-icons";

const LanguageSection = () => {
  const languages = [
    {
      name: "Portuguese",
      level: "Native",
    },
    {
      name: "English",
      level: "Advanced",
    },
    {
      name: "Spanish",
      level: "Basic",
    }
  ];

  return (
    <div className="glass-card p-5 rounded-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faLanguage} />
        <span>Languages</span>
      </h3>
      
      <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2" style={{ textAlign: 'left' }}>
        {languages.map((lang, index) => (
          <div key={index} className="border-l-2 border-accent/40 pl-4">
            <h4 className="text-base font-medium">{lang.name}</h4>
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <span>{lang.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageSection;
