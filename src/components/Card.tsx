import styles from './card.module.css';
import Image from 'next/image';

export default function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.cardimg}>
            <Image src="/img/Venue.jpg" alt="Venue Picture" fill={true} className="object-cover"/>
        </div>
        <div className={styles.cardtext}>
            <h3>The Botanic Glasshouse</h3>
            <h5>A stunning natural light venue surrounded by lush greenery. The ideal setting for intimate weddings and creative workshops.</h5>
        </div>
    </div>
  );
}