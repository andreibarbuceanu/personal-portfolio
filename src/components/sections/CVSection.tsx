import { useEffect, useState } from "react";
import { achievements, type Achievement } from "../../data/achievements";
import AchievementCard from "../achievements/AchievementCard";
import ButtonLink from "../ui/ButtonLink";
import Modal from "../ui/Modal";
import SectionHeader from "../ui/SectionHeader";
import "./CVSection.css";

function CVSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const closeAchievementModal = () => {
    setSelectedAchievement(null);
  };

  useEffect(() => {
    if (selectedAchievement) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === achievements.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, selectedAchievement]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="cv-section" id="cv">
      <SectionHeader
        title="Education, Training & Certifications"
        description="My academic background, technical coursework and professional development."
      />

      <div className="carousel-container">
        <button
          type="button"
          className="carousel-button"
          onClick={previousSlide}
          aria-label="Previous achievement"
        >
          ‹
        </button>

        <AchievementCard
          achievement={achievements[currentIndex]}
          onSelect={setSelectedAchievement}
        />

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

      <ButtonLink
        href={`${import.meta.env.BASE_URL}cv/Andrei_Barbuceanu_CV.pdf`}
        download
        centered
      >
        Download CV
      </ButtonLink>

      {selectedAchievement && (
        <Modal
          ariaLabelledBy="achievement-modal-title"
          closeLabel="Close achievement details"
          description={selectedAchievement.fullDescription}
          details={<small>{selectedAchievement.year}</small>}
          eyebrow={selectedAchievement.category}
          onClose={closeAchievementModal}
          title={selectedAchievement.title}
        />
      )}
    </section>
  );
}

export default CVSection;
