/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const TimerTitle = ({ title }) => {
  return (
    <div className="text-[.7em] sm:text-[0.875em] text-black/60 dark:text-white/60 uppercase">
      {title}
    </div>
  );
};

const TimerNumber = ({ time, color = "white" }) => {
  return (
    <div className="font-work-sans text-[1.875em] font-bold text-black/30 dark:text-white/30">
      {time}
    </div>
  );
};

const TimerSeperator = () => {
  return <TimerNumber time=":" />;
};

const TimeBox = ({ time, title }) => {
  return (
    <div className="w-[3em] sm:w-[4.375em]">
      <TimerNumber time={time} />
      <TimerTitle title={title} />
    </div>
  );
};

const Timer = ({ somestate }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const isBritishSummerTime = (date) => {
    const lastSundayMarch = new Date(date.getFullYear(), 2, 31, 1, 0, 0, 0);
    lastSundayMarch.setDate(
      lastSundayMarch.getDate() - lastSundayMarch.getDay()
    );

    const lastSundayOctober = new Date(date.getFullYear(), 9, 31, 1, 0, 0, 0);
    lastSundayOctober.setDate(
      lastSundayOctober.getDate() - lastSundayOctober.getDay()
    );

    return date >= lastSundayMarch && date < lastSundayOctober;
  };

  useEffect(() => {
    const countdownDate = new Date("2023-07-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date();
      const londonOffset = isBritishSummerTime(now) ? 60 : 0; // Add 1 hour for BST
      const currentTime =
        now.getTime() + (now.getTimezoneOffset() + londonOffset) * 60 * 1000;

      const distance = countdownDate - currentTime;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="white flex justify-center text-center space-x-[0.5em]">
      <TimeBox time={days} title={"Days"} />
      <TimerSeperator />
      <TimeBox time={hours} title={"Hours"} />
      <TimerSeperator />
      <TimeBox time={minutes} title={"Minutes"} />
      <TimerSeperator />
      <TimeBox time={seconds} title={"SECONDS"} />
    </div>
  );
};

export default Timer;
