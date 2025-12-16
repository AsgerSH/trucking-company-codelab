import React, { useState, useEffect } from "react";
import styles from "./Drivers.module.css";
import DriverCard from "../../components/imagecard/DriverCard.jsx";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data))
      .catch((err) => console.error("Error fetching drivers:", err));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Drivers</h1>

      <div className={styles.grid}>
        {drivers.map((d) => (
          <DriverCard
            key={d.driverId}
            driverId={d.driverId}
            imageUrl={
              d.imageUrl ||
              // quick avatar fallback (random-ish by id)
              `https://i.pravatar.cc/300?u=driver-${d.driverId}`
            }
            name={d.name}
            description={d.license ? `License: ${d.license}` : "Driver"}
          />
        ))}
      </div>
    </div>
  );
}
