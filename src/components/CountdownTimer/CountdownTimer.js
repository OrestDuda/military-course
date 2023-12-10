import React, { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // Задаємо час 23:59:59:999 для кінця доби

    const timeLeft = endOfDay - now;

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p>{`00 : ${String(timeLeft.hours).padStart(2, "0")} : ${String(
      timeLeft.minutes
    ).padStart(2, "0")} : ${String(timeLeft.seconds).padStart(2, "0")}`}</p>
  );
};
