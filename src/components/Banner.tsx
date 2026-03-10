import Styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={Styles.banner}>
        <Image src="/img/Banner.jpg" alt="Banner Picture" fill={true} priority={true} objectFit='cover' />
        <div className={Styles.bannerText}>
            <h1>where every event finds its venue</h1>
            <h3>Connecting you to the finest venues for weddings, corporate meetings, and private celebrations</h3>
        </div>
    </div>
  );
}