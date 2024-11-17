"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleRevalidate = async () => {
      await fetch("/api/revalidate");
    };
    handleRevalidate();
  }, []);
  return <div>page</div>;
}
