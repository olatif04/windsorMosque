import { JummahTimes } from "@/types/JummahTimesType"
import moment from "moment"

export default function JummahTiles({
  jummahTimes = [],
}: {
  jummahTimes: JummahTimes
}) {
  return (
    <div className="bg-mosqueGreen-dark text-white mt-0 p-4 lg:p-4">
      {" "}
      {/* Removed top margin and reduced top padding */}
      <dl className="grid grid-cols-3 justify-items-stretch text-center gap-0 md:gap-3">
        {jummahTimes.map((jummahTime, index) => (
          <div key={index}>
            <dt className="text-sm lg:text-2xl font-medium">
              {jummahTime.label}
            </dt>
            <dd className="mt-1 text-5xl lg:text-5xl font-bold tracking-tight">
              {moment(jummahTime.time, ["HH:mm"]).format("h:mm")}
            </dd>
          </div>
        ))}
      </dl>
      {/* Integrated notice section */}
      <div className="flex items-center justify-center">
        <p className="text-3xl lg:text-2xl">
          Isha Iqama will change to 9:45PM tomorrow. Fajr Iqama will also change
          to 6:00AM.
        </p>
      </div>
    </div>
  )
}
