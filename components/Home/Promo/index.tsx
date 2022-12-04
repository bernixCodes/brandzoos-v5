import Image from "next/image";
import styles from "./Promo.module.scss";

const Promo = () => {
  return (
    <div className={`${styles.promoContainer} flex gap-5  w-full `}>
      <div className="min-w-md">
        <Image
          src={"/images/promo/promo1.png"}
          alt="promo"
          width={800}
          height={200}
        />
      </div>
      <div className="min-w-md">
        <Image
          src={"/images/promo/promo2.png"}
          alt="promo"
          width={800}
          height={200}
        />
      </div>
      <div className="min-w-md">
        <Image
          src={"/images/promo/promo3.png"}
          alt="promo"
          width={800}
          height={200}
        />
      </div>
    </div>
  );
};

export default Promo;
