"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const font_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("IDN");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "IDN" ? "ENG" : "IDN"));
    setShowLangDropdown(false);
  };

  return (
    <nav
      className={`${font_jakarta.className} w-full fixed z-50 top-0 bg-white dark:bg-black shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={25}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray dark:text-white">
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN" ? "Home" : "Home"}
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN" ? "Layanan" : "Services"}
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN" ? "Proyek" : "Projects"}
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN" ? "Klien" : "Clients"}
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN" ? "Berita" : "News"}
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN"
                ? "Kualitas Kesehatan & Keselamatan (K3)"
                : "Health & Safety Quality (K3)"}
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-blue-600 hover:font-bold">
              {language === "IDN" ? "Tentang Kami" : "About Us"}
            </Link>
          </li>
        </ul>

        {/* Right section: Mode dan Bahasa */}
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-1 text-gray-700 dark:text-white cursor-pointer"

          >
            {darkMode ? (
              <>
                <span>{language === "IDN" ? "Gelap" : "Dark"}</span>
                <Image
                  src="/icons/moon.svg"
                  width={24}
                  height={24}
                  alt="Gelap"
                />
              </>
            ) : (
              <>
                <span className={font_jakarta.className}>
                  {language === "IDN" ? "Terang" : "Light"}
                </span>
                <Image
                  src="/icons/sun.svg"
                  width={24}
                  height={24}
                  alt="Terang"
                />
              </>
            )}
          </button>

          {/* Dropdown Bahasa */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer text-gray-700 dark:text-white"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              <Image
                src={language === "IDN" ? "/id.svg" : "/gb.svg"}
                alt="Bendera"
                width={24}
                height={18}
                className="cursor-pointer"
                priority
              />
              {language}
              <Image
                src={darkMode ? "/icons/arrow-down-white.svg" : "/icons/arrow-down.svg"}
                width={14}
                height={14}
                alt="Panah ke bawah"
              />
            </div>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-white-800 border dark:border-white-700 rounded shadow-md z-50">
                <button
                  onClick={toggleLanguage}
                  className="block px-4 py-2 text-sm hover:bg-gray dark:hover:bg-white w-full text-left"
                >
                  {language === "IDN" ? "ENG" : "IDN"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
