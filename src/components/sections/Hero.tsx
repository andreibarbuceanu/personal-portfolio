import "./Hero.css";

const profileImage = new URL("../../assets/IMG_6089.JPG", import.meta.url).href;

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">
          SOFTWARE DEVELOPMENT • ENGINEERING STUDENT
        </span>

        <img
          src={profileImage}
          alt="Andrei Barbuceanu"
          className="profile-image"
        />

        <h1>Andrei Barbuceanu</h1>

        <p className="hero-description">
          I’m a second-year Electronics, Telecommunications and Information
          Technology student, preparing to begin my third year, with a primary
          focus on software development. I build web and mobile applications
          with React, TypeScript, and React Native using Expo, with additional
          experience in Node.js, REST APIs, SQL, and Python. My ETTI background
          includes C/C++, microcontrollers, and digital and analog electronics,
          giving me a broader understanding of how software connects with
          hardware. I enjoy turning ideas into practical, well-structured
          applications and strengthening my skills through real projects.
        </p>

        <a href="#projects" className="cta-button">
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
