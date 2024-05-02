"use client"
import moment from "moment-hijri"

export default function Date() {
  const englishDate = moment().format("dddd D MMMM YYYY")
  const hijriDate = moment().locale("en").format("iD iMMMM iYYYY")

  return (
    <div className="flex items-center justify-center text-white text-center md:text-left">
      <p className="font-bold text-3xl md:text-5xl">{englishDate}</p>
      <span className="mx-3 text-5xl md:text-5xl font-bold">|</span> {/* Bold vertical separator */}
      <p className="font-bold text-3xl md:text-5xl">{hijriDate}</p>
    </div>
  )
}
