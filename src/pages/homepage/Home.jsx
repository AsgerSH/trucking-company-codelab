import styles from "./Home.module.css";
import ImageCardContainer from "../../components/imagecard/ImageCardContainer.jsx";

const truckImages = [
  {
    imageUrl:
      "https://images.stockcake.com/public/7/e/3/7e36a192-f83c-4a5d-91bf-bfd43d341cb3_large/mighty-chrome-beast-stockcake.jpg",
    name: "Mighty Chrome Beast",
    description: "High-performance long-haul truck",
  },
  {
    imageUrl:
      "https://images.stockcake.com/public/f/4/d/f4de3584-d967-4924-8d5f-7f086c6a8cd0_large/powerful-truck-portrait-stockcake.jpg",
    name: "Powerful Hauler",
    description: "Heavy-duty cargo transport",
  },
  {
    imageUrl:
      "https://images.stockcake.com/public/9/1/9/9195e92f-07ad-486c-8d8e-13f403d97726_large/mighty-truck-emerges-stockcake.jpg",
    name: "Mighty Emerger",
    description: "All-terrain delivery vehicle",
  },
  {
    imageUrl:
      "https://images.stockcake.com/public/d/4/6/d46a2adf-c36f-445a-84b8-ae5bb935e44e_large/midnight-highway-phantom-stockcake.jpg",
    name: "Highway Phantom",
    description: "Night-route specialized truck",
  },
];

function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to the Trucking Company Codelab!</h1>

      <div className={styles.container}>
        <div className={styles.rightContent}>
          <ImageCardContainer cards={truckImages} />
        </div>
      </div>
      
      <h2 className={styles.subtitle}>About us</h2>
      <p className={styles.paragraph}>
        We are a leading trucking company dedicated to providing top-notch logistics
        and transportation services across the country. Our fleet of modern trucks and
        experienced drivers ensure that your goods are delivered safely and on time.
        At our core, we value reliability, efficiency, and customer satisfaction.
        Whether you're shipping locally or long-distance, we've got you covered.
      </p>
    </div>
  );
}

export default Home;
