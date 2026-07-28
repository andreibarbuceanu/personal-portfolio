import Navbar from './components/layout/Navbar';
import Contact from './components/sections/Contact';
import CVSection from './components/sections/CVSection';
import GitHubCommits from './components/sections/GitHubCommits';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';

function App() {
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
