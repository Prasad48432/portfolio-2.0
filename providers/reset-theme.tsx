"use client";
import { useEffect } from "react";

export default function ResetTheme() {
  useEffect(() => {
    localStorage.removeItem("theme"); // default storage key
  }, []);

  return null;
}
