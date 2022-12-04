import Head from "next/head";

import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import "@fontsource/work-sans";
import HomeSearch from "../components/Home/HomeSearch";
import HomeBrand from "../components/Home/HomeBrands";
import HomeServices from "../components/Home/HomeServices";
import Promo from "../components/Home/Promo";
import Foooter from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Search for brands. Anywhere | Brandzoos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Searching for the Free Classified Ads Websites in Lagos? At Brandzoos we offer Buying and Selling of Free Classified Ads Websites. Visit us today!"
        />
        <meta
          name="keywords"
          content=" Buying and Selling Site in Lagos, Free Online Classifieds in Lagos, Post Classified Ads for Free in Lagos, Free Classified Ads Websites in Lagos, Buy Online Free Classifieds In Lagos, Sell Online Free Classifieds In Lagos, Post Free Ads Online In Lagos"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.brandzoos.com/" />
        <meta property="og:title" content="Search for brands. Anywhere" />
        <meta
          property="og:description"
          content="DISCOVER THAT BUSINESS AROUND YOU"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/3.png" />
        <meta property="og:image:secure_url" content="/images/3.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <div
          className={`${styles.main} max-w-screen-md md:max-w-screen-2xl md:h-fit pb-5 `}
        >
          <div className={styles.homeHeader}>
            <Header active="home" type="transparent" />
          </div>
          <HomeSearch />
        </div>
        <HomeBrand />
        <HomeServices />
        <Promo />
        <Foooter />
      </main>
    </div>
  );
}
