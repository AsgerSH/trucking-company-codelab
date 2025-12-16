import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import styles from "./DriverDetail.module.css";

export default function DriverDetail() {
  const { driverId } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!driverId) return;

    // Try fetching by id; if the server doesn't map /drivers/:id, fall back
    fetch(`http://localhost:3000/drivers/${driverId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        // If the server returns an array or object without driverId, handle later
        if (data && (data.driverId || data.id)) {
          setDriver(data);
        } else {
          // fallback: get all drivers and find the right one
          return fetch("http://localhost:3000/drivers")
            .then((r) => r.json())
            .then((list) => list.find((d) => String(d.driverId) === String(driverId)));
        }
      })
      .then((found) => {
        if (found) setDriver(found);
      })
      .catch(() => {
        // fallback attempt
        fetch("http://localhost:3000/drivers")
          .then((r) => r.json())
          .then((list) => {
            const found = list.find((d) => String(d.driverId) === String(driverId));
            if (found) setDriver(found);
            else setError("Driver not found");
          })
          .catch((err) => setError(String(err)));
      });
  }, [driverId]);

  if (error) return <div className={styles.container}><p>{error}</p></div>;
  if (!driver) return <div className={styles.container}><p>Loading...</p></div>;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>← Back</button>
      <div className={styles.detailCard}>
        <h1>{driver.name}</h1>
        <p><strong>ID:</strong> {driver.driverId ?? driver.id}</p>
        <p><strong>License:</strong> {driver.license}</p>
        <p><strong>Phone:</strong> {driver.phone}</p>
        <p><strong>Email:</strong> {driver.email}</p>
        {driver.address && (
          <p><strong>Address:</strong> {`${driver.address.street}, ${driver.address.zip} ${driver.address.city}`}</p>
        )}
      </div>
    </div>
  );
}