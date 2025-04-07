const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full mt-auto py-4 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '500ms' }}>
      <div className="flex items-center justify-center gap-1">
        <span>© {currentYear} • Built with</span>
        <span>using React and Vite</span>
      </div>
    </footer>
  );
};

export default Footer;
