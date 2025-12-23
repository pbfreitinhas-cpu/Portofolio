import { useState } from "react";
import { Portfolio } from "./components/Portfolio";
import { CaseStudy1 } from "./components/CaseStudy1";
import { CaseStudy2 } from "./components/CaseStudy2";
import { CaseStudy3 } from "./components/CaseStudy3";

type Page = 'home' | 'case-study-1' | 'case-study-2' | 'case-study-3';
type Theme = 'night' | 'day';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<Theme>('night');

  const handleCaseStudyClick = (id: number) => {
    setCurrentPage(`case-study-${id}` as Page);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'night' ? 'day' : 'night');
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light:wght@400&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Shadows Into Light', cursive" }}>
        {currentPage === 'home' && <Portfolio onCaseStudyClick={handleCaseStudyClick} theme={theme} onToggleTheme={toggleTheme} />}
        {currentPage === 'case-study-1' && <CaseStudy1 onBack={handleBackToHome} theme={theme} />}
        {currentPage === 'case-study-2' && <CaseStudy2 onBack={handleBackToHome} theme={theme} />}
        {currentPage === 'case-study-3' && <CaseStudy3 onBack={handleBackToHome} theme={theme} />}
      </div>
    </>
  );
}
