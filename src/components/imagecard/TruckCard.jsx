import React from "react";
import { useNavigate } from "react-router";
import styles from "./TruckCard.module.css";

const Card = ({ imageUrl, name, description, truckId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/truck/${truckId}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <div className={styles.cardText}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
