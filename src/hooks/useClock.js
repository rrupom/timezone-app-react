import { useState, useEffect } from "react";
import { utcToZonedTime, format } from "date-fns-tz";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const useClock = ({ timeZone, title, h24 = true }) => {
  console.log(timeZone);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [day, setDay] = useState("Sunday");
  const [month, setMonth] = useState(0);
  const [date, setDate] = useState(0);
  const [pm, setPM] = useState(false);

  useEffect(() => {
    updateClock();

    const interval = setInterval(() => {
      updateClock();
    }, 1 * 1000);

    return () => clearInterval(interval);
  }, []);

  const updateClock = () => {
    const date = timeConversion(new Date(), timeZone);
    let hour = date.getHours();
    if (!h24) {
      hour = hour % 12 || 12;
    }
    let minute = date.getMinutes();
    let second = date.getSeconds();

    setHour(hour);
    setMinute(minute);
    setSecond(second);
    if (date.getHours() >= 12) {
      setPM(true);
    }
    setDay(days[date.getDay()]);
    setDate(date.getDate());
    setMonth(date.toLocaleString("en-US", { month: "long" }));
  };

  const timeConversion = (date, timeZone) => {
    const formattedTime = format(
      utcToZonedTime(date, timeZone),
      "yyyy-MM-dd HH:mm:ss",
      { timeZone: timeZone }
    );

    return new Date(formattedTime);
  };

  return {
    hour,
    minute,
    second,
    day,
    month,
    date,
    pm,
  };
};

export default useClock;
