import React from "react";
import { useParams, useNavigate } from "react-router";
import styles from "./TruckDetail.module.css";
import { useState, useEffect } from "react";

export default function TruckDetail() {
  const { truckId } = useParams();
  const navigate = useNavigate();
  const [truck, setTruck] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!truckId) {
      setError("No truck id provided");
      return;
    }

    // Try the straightforward endpoint first
    fetch(`http://localhost:3000/trucks/${truckId}`)
      .then((res) => {
        if (!res.ok) {
          // not found — fall back to list lookup
          throw new Error(`Fetch returned status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // If we got a valid object, use it.
        if (data && (data.truckId || data.id)) {
          setTruck(data);
        } else {
          // Unexpected shape, fall back
          throw new Error("Unexpected response shape");
        }
      })
      .catch(() => {
        // Fallback: fetch all and find by truckId property
        fetch("http://localhost:3000/trucks")
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch trucks list");
            return res.json();
          })
          .then((list) => {
            const found =
              list.find((t) => String(t.truckId) === String(truckId)) ||
              list.find((t) => String(t.id) === String(truckId));
            if (found) {
              setTruck(found);
            } else {
              setError("Truck not found");
            }
          })
          .catch((err) => {
            setError("Error fetching trucks: " + String(err));
          });
      });
  }, [truckId]);

  if (error) {
    return (
      <div className={styles.container}>
        <p style={{ color: "var(--text-primary)" }}>{error}</p>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    );
  }

  if (!truck) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className={styles.detailCard}>
        <h1>{truck.name}</h1>
        <div className={styles.details}>
          <p>
            <strong>ID:</strong> {truck.truckId ?? truck.id}
          </p>
          <p>
            <strong>Model:</strong> {truck.model}
          </p>
          <p>
            <strong>Capacity:</strong> {truck.capacity} lbs
          </p>
          <p>
            <strong>Weight:</strong> {truck.weight} lbs
          </p>
          <p>
            <strong>Max Speed:</strong> {truck.maxSpeed} mph
          </p>
          <p>
            <strong>Length:</strong> {truck.length} ft
          </p>
          <p>
            <strong>Drivers:</strong>{" "}
            {truck.drivers && truck.drivers.length > 0
              ? truck.drivers.join(", ")
              : "No drivers assigned"}
          </p>
        </div>
      </div>
    </div>
  );
}