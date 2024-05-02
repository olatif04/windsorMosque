"use client"
import moment from "moment-hijri"

export default function Date() {
  const englishDate = moment().format("dddd D MMMM YYYY")
  const hijriDate = moment().locale("en").format("iD iMMMM iYYYY")

  return (
    <div className="bg-mosqueGreen-dark"> {/* Remove padding here if it creates external space */}
      <div className="flex items-center justify-center text-white text-center md:text-left p-4 lg:p-6"> {/* Move padding inside */}
        <p className="font-bold text-3xl md:text-5xl m-0">{englishDate}</p> {/* Remove any margin that might add space */}
        <span className="mx-3 text-5xl md:text-5xl font-bold">|</span> {/* Bold vertical separator */}
        <p className="font-bold text-3xl md:text-5xl m-0">{hijriDate}</p> {/* Remove any margin that might add space */}
      </div>
    </div>
  )
}
