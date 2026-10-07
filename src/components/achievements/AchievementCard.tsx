import type { KeyboardEvent } from "react";
import type { Achievement } from "../../data/achievements";
import "./AchievementCard.css";

type AchievementCardProps = {
  achievement: Achievement;
  onSelect: (achievement: Achievement) => void;
};

function AchievementCard({
  achievement,
  onSelect,
}: AchievementCardProps) {
  const selectAchievement = () => {
    onSelect(achievement);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectAchievement();
    }
  };

  return (
    <article
      className="achievement-card"
      role="button"
      tabIndex={0}
      onClick={selectAchievement}
      onKeyDown={handleKeyDown}
    >
      <span className="achievement-category">{achievement.category}</span>
      <h3>{achievement.title}</h3>
      <p>{achievement.shortDescription}</p>
      <small>{achievement.year}</small>
    </article>
  );
}

export default AchievementCard;
