import { useEffect, useState } from "react";
import { achievements, type Achievement } from "../../data/achievements";
import "./CVSection.css";

function CVSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const closeAchievementModal = () => {
    setSelectedAchievement(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (!selectedAchievement) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAchievementModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedAchievement]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="cv-section" id="cv">
      <div className="cv-header">
        <h2>Education, Training & Certifications</h2>
        <p>
          My academic background, technical coursework and professional
          development.
        </p>
      </div>

      <div className="carousel-container">
        <button
          type="button"
          className="carousel-button"
          onClick={previousSlide}
          aria-label="Previous achievement"
        >
          ‹
        </button>

        <div
          className="achievement-card"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedAchievement(achievements[currentIndex])}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setSelectedAchievement(achievements[currentIndex]);
            }
          }}
        >
          <span className="achievement-category">
            {achievements[currentIndex].category}
          </span>

          <h3>{achievements[currentIndex].title}</h3>

          <p>{achievements[currentIndex].shortDescription}</p>

          <small>{achievements[currentIndex].year}</small>
        </div>

        <button
          type="button"
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
            type="button"
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
          onClick={closeAchievementModal}
          role="presentation"
        >
          <div
            className="achievement-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeAchievementModal}
              aria-label="Close achievement details"
            >
              ×
            </button>

            <span className="achievement-category">
              {selectedAchievement.category}
            </span>

            <h3 id="achievement-modal-title">{selectedAchievement.title}</h3>

            <p>{selectedAchievement.fullDescription}</p>

            <small>{selectedAchievement.year}</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default CVSection;
