import React from "react";
import styles from "./Trucks.module.css";
import { useState, useEffect } from "react";
import TruckList from "../../components/trucks/TruckList.jsx";

export default function Trucks() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trucks")
      .then((res) => res.json())
      .then((data) => setTrucks(data))
      .catch((err) => console.error("Error fetching trucks:", err));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trucks Page</h1>
      <TruckList trucks={trucks} />
    </div>
  );
}
