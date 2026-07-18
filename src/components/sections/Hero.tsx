import './Hero.css';
const profileImg = new URL('../../assets/IMG_6089.JPG', import.meta.url).href;

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">SOFTWARE DEVELOPMENT • DATABASES • AI</span>

        <img
          src={profileImg}
          alt="Andrei Barbuceanu"
          className="profile-image"
        />

        <h1>Andrei Barbuceanu</h1>

        <p className="hero-description">
          I am a third-year Electronics and Telecommunications Engineering student focused on software development, databases and process automation. I enjoy building practical applications with Python, SQL, React and AI-assisted development tools while continuously improving my technical skills.
        </p>

        <a href="#projects" className="cta-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
