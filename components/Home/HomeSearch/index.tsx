import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import styles from "./HomeSearch.module.scss";

const HomeSearch = () => {
  return (
    <div
      className={`${styles.searchContainer} lg:pt-32 md:pt-20 md:pb-10 pt-8 text-white`}
    >
      <h1 className="md:text-6xl text-4xl font-semibold text-center">
        Search for brands. Anywhere.
      </h1>
      <p className="text-center md:py-10 py-5">
        Discover that business around you.
      </p>

      <div
        className={`${styles.actionButContainer} md:hidden flex flex-col gap-3 text-black`}
      >
        <input
          type={"text"}
          className="outline-none rounded-lg py-3 px-5 "
          placeholder="Search keyword e.g fashion"
        />
        <input
          type={"text"}
          placeholder="Location"
          className="outline-none rounded-lg py-3 px-5 "
        />
        <div className="flex items-center justify-center">
          <button className="bg-c-red w-fit  py-2 px-8 font-medium rounded-xl text-white">
            Search
          </button>
        </div>
      </div>

      <div className=" hidden md:flex items-center bg-c-red rounded-full">
        <div className="flex flex-1 items-center bg-white text-black rounded-l-full p-4 px-5 gap-3">
          <input
            type={"text"}
            className="flex-1 outline-none bg-transparent"
            placeholder="Search keyword e.g fashion"
          />
          <input
            type={"text"}
            className="border-l-2 pl-3 outline-none bg-transparent lg:flex-1"
            placeholder="Location"
          />
        </div>
        <span className="text-center px-4 cursor-pointer ">
          <FiSearch />
        </span>
      </div>

      {/* dropdown filters */}
      <div className="hidden md:flex items-center justify-center gap-4 py-5 pb-10">
        <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
          <p>Fashion</p>
          <MdKeyboardArrowDown />
        </div>

        <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
          <p>Food</p>
          <MdKeyboardArrowDown />
        </div>

        <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
          <p>Services</p>
          <MdKeyboardArrowDown />
        </div>
        {/* <div className="flex items-center gap-1 border border-white rounded-full px-3  py-1">
                <p>Health & Beauty</p>
                <MdKeyboardArrowDown />
              </div> */}

        <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1">
          <p>More</p>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
