import './App.css';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import CVSection from './components/sections/CVSection';
import GitHubCommits from './components/sections/GitHubCommits';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => { //ruleaza dupa ce pagina s a incarcat pt layout
    try {
      let saved = localStorage.getItem('portfolio_layout');
      if (saved) {
        if (saved === 'compact') saved = 'showcase';
        const prefix = 'layout-';
        Array.from(document.body.classList)//imi da toate clasele css de pe body sub forma de vector
          .filter((c) => c.startsWith(prefix))
          .forEach((c) => document.body.classList.remove(c)); //imi elimina clasele cu layout vechi si le adauga pe alea noi
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