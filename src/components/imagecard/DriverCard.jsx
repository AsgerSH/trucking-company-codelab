import React from "react";
import { useNavigate } from "react-router";
import styles from "./DriverCard.module.css";

const Card = ({ imageUrl, name, description, driverId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/driver/${driverId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Open driver ${name} details`}
    >
      <img src={imageUrl} alt={name} />
      <div className={styles.cardText}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
