import './App.css';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import CVSection from './components/sections/CVSection';
import GitHubCommits from './components/sections/GitHubCommits';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    try {
      let saved = localStorage.getItem('portfolio_layout');
      if (saved) {
        if (saved === 'compact') saved = 'showcase';
        const prefix = 'layout-';
        Array.from(document.body.classList)
          .filter((c) => c.startsWith(prefix))
          .forEach((c) => document.body.classList.remove(c));
        document.body.classList.add(`${prefix}${saved}`);
      } else {
        document.body.classList.add('layout-professional');
      }
    } catch { 
      // ca sa nu crape aplicatia daca browserul blocheaza accesul la localstorage
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Projects />

        <CVSection />

        <GitHubCommits />

        <Contact />
      </main>
    </>
  );
}

export default App;
