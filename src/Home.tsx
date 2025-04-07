import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguageSection from "./components/LanguageSection";
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import TechStack from "./components/TechStack";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col px-6">
      <Header />
      
      <main className="flex-1 max-w-5xl mx-auto w-full flex flex-col gap-6 py-6">
        <ProfileSection profileImage={"./../public/me.jpeg"} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillsSection />
          <ExperienceSection />
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechStack />
        <LanguageSection />
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
