import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div 
      className="flex items-center gap-1 rounded-lg bg-card/50 border border-border p-1"
      role="group"
      aria-label={t("languageSelector.ariaLabel")}
    >
      <button
        onClick={() => handleLanguageChange("pt")}
        className={`px-2 py-1 text-xs font-medium rounded transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-background ${
          language === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
        aria-pressed={language === "pt"}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-2 py-1 text-xs font-medium rounded transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:ring-offset-background ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
