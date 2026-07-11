import { useEffect, useRef, useState } from "react";
import { achievements, type Achievement } from "../data/achievements";
import "./CVSection.css";

function CVSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );

    startAutoSlide();
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );

    startAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="cv-section" id="cv">
      <div className="cv-header">
        <h2>CV & Achievements</h2>
        <p>
          Skills, experiences and achievements developed throughout my
          academic journey.
        </p>
      </div>

      <div className="carousel-container">
        <button
          className="carousel-button"
          onClick={previousSlide}
          aria-label="Previous achievement"
        >
          ‹
        </button>

        <div
          className="achievement-card"
          onClick={() => setSelectedAchievement(achievements[currentIndex])}
        >
          <span className="achievement-category">
            {achievements[currentIndex].category}
          </span>

          <h3>{achievements[currentIndex].title}</h3>

          <p>{achievements[currentIndex].shortDescription}</p>

          <small>{achievements[currentIndex].year}</small>
        </div>

        <button
          className="carousel-button"
          onClick={nextSlide}
          aria-label="Next achievement"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {achievements.map((achievement, index) => (
          <button
            key={achievement.id}
            className={index === currentIndex ? "dot active-dot" : "dot"}
            onClick={() => goToSlide(index)}
            aria-label={`Go to achievement ${index + 1}`}
          />
        ))}
      </div>

      <a
        href={`${import.meta.env.BASE_URL}cv/Andrei_Barbuceanu_CV.pdf`}
        download
        className="cv-download-button"
      >
        Download CV
      </a>

      {selectedAchievement && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="achievement-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedAchievement(null)}
              aria-label="Close achievement details"
            >
              ×
            </button>

            <span className="achievement-category">
              {selectedAchievement.category}
            </span>

            <h3>{selectedAchievement.title}</h3>

            <p>{selectedAchievement.fullDescription}</p>

            <small>{selectedAchievement.year}</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default CVSection;