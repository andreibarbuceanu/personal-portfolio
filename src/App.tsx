import Navbar from './components/layout/Navbar';
import Contact from './components/sections/Contact';
import CVSection from './components/sections/CVSection';
import GitHubCommits from './components/sections/GitHubCommits';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <CVSection />
        <GitHubCommits />
        <Contact />
      </main>
    </>
  );
}

export default App;
