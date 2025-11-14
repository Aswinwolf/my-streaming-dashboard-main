"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}
    `}
    >
      <div className="flex items-center justify-between px-14 py-4">


        {/* 🌟 LOGO IMAGE */}
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKhpHp5_eKFpXV1dZe8UF2rp-NgVcgt1pOA&s"
          alt="App Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-10 text-white font-semibold tracking-wide">
          <Link href="/">Home</Link>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">My List</Link>
        </nav>

        {/* Right Section: Search + Profile */}
        <div className="flex items-center gap-6">
          {/* 🔎 SEARCH BAR */}
          <SearchBar />

          {/* Profile */}
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer">
            <span className="text-white font-semibold">A</span>
          </div>
        </div>
      </div>
    </header>
  );
}
