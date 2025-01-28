"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { UserProvider } from "./UserContext";
import Homepage from "./Homepage";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      typeof localStorage !== "undefined" &&
      (localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches))
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "";
      }
    }
  }, [isDarkMode]);

  return (
    <>
      <UserProvider value={{ isDarkMode, setIsDarkMode }}>
        <Navbar />
        <Homepage />
      </UserProvider>
    </>
  );
}
