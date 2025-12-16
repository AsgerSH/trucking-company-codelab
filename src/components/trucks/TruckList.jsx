import React from "react";
import styles from "./TruckList.module.css";

export default function Trucks({ trucks }) {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {trucks.map((truck) => (
            <tr key={truck.truckId}>
              <td>{truck.truckId}</td>
              <td>{truck.name}</td>
              <td>{truck.capacity}</td>
              <td>{truck.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}