import { JummahTimes } from "@/types/JummahTimesType"
import moment from "moment"

export default function JummahTiles({
  jummahTimes = [],
}: {
  jummahTimes: JummahTimes
}) {
  return (
    <div>
      <dl
        className="grid grid-cols-3 justify-items-stretch text-center gap-0 md:gap-3"
      >
        {jummahTimes.map((jummahTime, index) => (
          <div
            className="bg-mosqueGreen-dark text-white p-4 lg:p-6"
            key={index}
          >
            <dt className="text-sm lg:text-2xl font-medium">
              {jummahTime.label}
            </dt>
            <dd className="mt-1 text-3xl lg:text-5xl font-bold tracking-tight">
              {moment(jummahTime.time, ["HH:mm"]).format("h:mm")}
            </dd>
          </div>
        ))}
      </dl>
      {/* Placeholder text section below the Jummah times */}
      <div className="text-white p-4 lg:p-6 bg-mosqueGreen-dark mt-4">
        <p className="text-3xl lg:text-2xl">
          Isha Iqama will change to 9:45PM tomorrow.
        </p>
      </div>
    </div>
  )
}
