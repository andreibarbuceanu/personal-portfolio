import "./Hero.css";

const profileImage = new URL("../../assets/IMG_6089.JPG", import.meta.url).href;

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">
          ENGINEERING STUDENT • SOFTWARE DEVELOPMENT
        </span>

        <img
          src={profileImage}
          alt="Andrei Barbuceanu"
          className="profile-image"
        />

        <h1>Andrei Barbuceanu</h1>

        <p className="hero-description">
          I'm an Electronics, Telecommunications and Information Technology
          student focused on software development. I enjoy building practical
          web and mobile applications using React, TypeScript and React Native,
          while also exploring backend development, APIs and databases. I like
          turning ideas into clean, functional projects and continuously
          improving my skills through hands-on work.
        </p>

        <a href="#projects" className="cta-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
