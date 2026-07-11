import './Hero.css';
const profileImg = new URL('../assets/IMG_6089.JPG', import.meta.url).href; //la build poate redenumi fisierele asa ca folosesc new URL

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">Programming • Web Development • AI</span>

        <img
          src={profileImg}
          alt="Andrei Barbuceanu"
          className="profile-image"
        />

        <h1>Andrei Barbuceanu</h1>

        <p className="hero-description">
          I am an Electronics and Telecommunications Engineering student passionate about programming, web development and artificial intelligence. I enjoy building practical projects and continuously learning new technologies.
        </p>

        <a href="#projects" className="cta-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;