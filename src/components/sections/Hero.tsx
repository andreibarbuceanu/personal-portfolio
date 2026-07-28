import "./Hero.css";

const profileImage = new URL("../../assets/IMG_6089.JPG", import.meta.url).href;

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">
          SOFTWARE • EMBEDDED SYSTEMS • DATABASES
        </span>

        <img
          src={profileImage}
          alt="Andrei Barbuceanu"
          className="profile-image"
        />

        <h1>Andrei Barbuceanu</h1>

        <p className="hero-description">
          I am a second-year Electronics and Telecommunications Engineering
          student, preparing to start my third year. I enjoy turning ideas into
          practical projects, from web applications and databases to small
          embedded systems. I mainly work with C, C++, Python, SQL, React and
          TypeScript, and I am always looking for new things to build and learn.
        </p>

        <a href="#projects" className="cta-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
