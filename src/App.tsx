import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import GitHubCommits from './components/GitHubCommits';
import Contact from './components/Contact';
import CVSection from './components/CVSection';

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