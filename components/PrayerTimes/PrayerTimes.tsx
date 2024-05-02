"use client"

import { useEffect, useState } from "react";
import { getNextPrayer } from "@/services/PrayerTimeService";
import { DailyPrayerTime } from "@/types/DailyPrayerTimeType";
import moment from "moment";

export default function PrayerTimes({
  today,
  tomorrow,
}: {
  today: DailyPrayerTime;
  tomorrow: DailyPrayerTime;
}) {
  const PrayerTimesArray = [
    {
      label: "Fajr",
      data: today.fajr,
      tomorrow: tomorrow.fajr,
    },
    {
      label: "Zuhr",
      data: today.zuhr,
      tomorrow: tomorrow.zuhr,
    },
    {
      label: "Asr",
      data: today.asr,
      tomorrow: tomorrow.asr,
    },
    {
      label: "Maghrib",
      data: today.maghrib,
      tomorrow: tomorrow.maghrib,
    },
    {
      label: "Isha",
      data: today.isha,
      tomorrow: tomorrow.isha,
    },
  ];

  const [nextPrayerTime, setNextPrayerTime] = useState(getNextPrayer(today));

  useEffect(() => {
    const interval = setInterval(() => {
      setNextPrayerTime(getNextPrayer(today));
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [today]);

  return (
    <table className="text-white mx-auto table-auto border-collapse border-none w-full">
      <thead>
        <tr className="text-center border border-mosqueGreen-dark">
          <th className="sr-only">Prayer time</th>
          <th className="text-3xl md:text-4xl">Begins</th> {/* Adjusted font size */}
          <th className="text-3xl md:text-4xl">Jama&apos;ah</th> {/* Adjusted font size */}
          <th className="text-3xl md:text-4xl">Tomorrow</th> {/* Adjusted font size */}
        </tr>
      </thead>
      <tbody>
        {PrayerTimesArray.map((prayer, index) => (
          <tr
            key={prayer.label}
            className="text-center border border-mosqueGreen-dark"
          >
            <th className="text-left text-xl md:text-2xl md:text-right">
              {prayer.label}
            </th>
            <td className="text-xl md:text-2xl"> {/* Adjusted font size */}
              {moment(prayer.data.start, ["HH:mm"]).format("h:mm")}
              {prayer.data?.start_secondary && (
                <div className="block mt-1 md:mt-2">
                  {moment(prayer.data.start_secondary, ["HH:mm"]).format(
                    "h:mm"
                  )}
                </div>
              )}
            </td>
            <td className="font-bold text-xl md:text-2xl"> {/* Adjusted font size */}
              <span
                className={
                  nextPrayerTime.today === true &&
                  nextPrayerTime.prayerIndex === index
                    ? "underline decoration-mosqueGreen-highlight underline-offset-8"
                    : ""
                }
              >
                {moment(prayer.data.congregation_start, ["HH:mm"]).format(
                  "h:mm"
                )}
              </span>
            </td>
            <td className="text-xl md:text-2xl"> {/* Adjusted font size */}
              <span
                className={
                  nextPrayerTime.today === false &&
                  nextPrayerTime.prayerIndex === index
                    ? "underline decoration-mosqueGreen-highlight underline-offset-8"
                    : ""
                }
              >
                {moment(prayer.tomorrow.congregation_start, ["HH:mm"]).format(
                  "h:mm"
                )}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}