"use client"

import moment from "moment-hijri"

export default function Date() {
  const englishDate = moment().format("dddd D MMMM YYYY")
  const hijriDate = moment().locale("en").format("iD iMMMM iYYYY")

  return (
    <div className="text-white text-center md:text-left">
      <p className="font-bold text-3xl md:text-5xl mb-0">{englishDate}</p> {/* Reduced margin-bottom to 0 */}
      <p className="mt-3 md:mt-5 text-3xl md:text-4xl mb-0">{hijriDate}</p> {/* Reduced margin-bottom to 0 */}
    </div>
  )
}
