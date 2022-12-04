import { useState } from "react";
import Image from "next/image";
import brandLogo from "../../public/images/logo.png";

import Link from "next/link";

import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "./Header.module.scss";

interface IHeaderProps {
  type?: "transparent" | "solid";
  active?: "home" | "brands" | "products" | "wishlist" | "account";
}

const Header = ({ type = "solid", active }: IHeaderProps) => {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  return (
    <>
      <header
        className={`${
          styles.header
        } flex  justify-between  px-6 py-5 z-50 sticky overlay rounded-lg text-white
       ${
         type === "solid"
           ? "border border-gray-200 bg-white shadow-default text-c-black"
           : ""
       }`}
      >
        <nav className="flex items-center gap-3">
          <span
            onClick={() => setOpenMenuModal(!openMenuModal)}
            className={`md:hidden block w-5  ${
              type === "transparent" ? "text-white" : ""
            }`}
          >
            <AiOutlineMenu />
          </span>
          <div className="mx-10 md:mx-0">
            <Image
              src={brandLogo}
              alt="BrandoozLogo"
              className="w-32 md:w-40"
            />
          </div>
          <div className=" hidden md:flex">
            <Link href="/">
              <p
                className={`hover:text-b-pink mx-3 ${
                  active === "home" ? "text-c-red" : ""
                }`}
              >
                Home
              </p>
            </Link>
            <Link href="/brands">
              <p
                className={`hover:text-b-pink mx-3 ${
                  active === "brands" ? "text-c-red" : ""
                }`}
              >
                Brands
              </p>
            </Link>
            <Link href="/products">
              <p
                className={`hover:text-b-pink mx-3 ${
                  active === "products" ? "text-c-red" : ""
                }`}
              >
                Products
              </p>
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
              <AiOutlineHeart />
              <span
                style={{ fontSize: " 7px" }}
                className="absolute  -top-1 -right-1 w-fit px-1  bg-[#fb7e15] rounded-full"
              >
                2
              </span>
            </div>
            <p className="md:flex hidden">Wishlist</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegUser />
            <div className="md:flex items-center hidden">
              <p>Account</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>

        {/* SidebarMenu */}
        {openMenuModal && (
          <div className="absolute -top-0 -left-4 flex flex-col h-screen w-60 bg-b-blue text-center z-10 text-white font-medium">
            <span
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.2rem",
                fontSize: "1.1rem",
                color: "white",
              }}
              onClick={() => setOpenMenuModal(false)}
            >
              <AiOutlineClose />
            </span>
            <Link href="/">
              <p
                className={`hover:text-b-pink mx-3 mb-5 mt-10 hover:bg-sky-500 p-5 ${
                  active === "home" ? "text-c-red" : ""
                }`}
              >
                Home
              </p>
            </Link>
            <Link href="/brands">
              <p
                className={`hover:text-b-pink mx-3 mb-5 hover:bg-sky-500 p-5 ${
                  active === "brands" ? "text-c-red" : ""
                }`}
              >
                Brands
              </p>
            </Link>
            <Link href="/products">
              <p
                className={`hover:text-b-pink mx-3 hover:bg-sky-500 p-5 ${
                  active === "products" ? "text-c-red" : ""
                }`}
              >
                Products
              </p>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
