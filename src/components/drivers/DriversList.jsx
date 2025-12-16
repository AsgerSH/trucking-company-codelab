import React from "react";
import styles from "./DriversList.module.css";

export default function Drivers({ drivers }) {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>License</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {drivers.map((driver) => (
            <tr key={driver.driverId}>
              <td>{driver.driverId}</td>
              <td>{driver.name}</td>
              <td>{driver.license}</td>
              <td>{driver.phone}</td>
              <td>{driver.email}</td>
              <td>{`${driver.address.street}, ${driver.address.zip} ${driver.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
