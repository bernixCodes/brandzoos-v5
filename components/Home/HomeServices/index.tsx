import Image from "next/image";

import styles from "./HomeService.module.scss";

const HomeServices = () => {
  return (
    <div
      className={`${styles.homeServiceContainer} flex md:flex-row flex-col md:items-center md:justify-center gap-10 py-14`}
    >
      <div className="flex items-center  gap-4">
        {/* Image */}
        <Image
          src={"/images/home_service/cup.png"}
          width={30}
          height={40}
          alt="Quality"
        />
        {/* description */}
        <div>
          <h3 className="text-c-black font-semibold">High Quality</h3>
          <p className="text-dark-grey text-sm">Verified products only</p>
        </div>
      </div>

      <div className="flex items-center  gap-4">
        {/* Image */}
        <Image
          src={"/images/home_service/free-shipping.png"}
          width={30}
          height={40}
          alt="Quality"
        />
        {/* description */}
        <div>
          <h3 className="text-c-black font-semibold">Free Shipping</h3>
          <p className="text-dark-grey text-sm">Order over ₦15,000 </p>
        </div>
      </div>

      <div className="flex items-center  gap-4">
        {/* Image */}
        <Image
          src={"/images/home_service/support.png"}
          width={30}
          height={40}
          alt="Quality"
        />
        {/* description */}
        <div>
          <h3 className="text-c-black font-semibold">24 / 7 Support</h3>
          <p className="text-dark-grey text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
