import { MosqueMetadataType } from "@/types/MosqueDataType"

export default function MosqueMetadata({
  metadata,
}: {
  metadata: MosqueMetadataType
}) {
  return (
    <div className="flex text-white text-center md:text-left">
      <div className="flex-shrink-0 self-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="m-2 max-w-full lg:max-w-lg max-h-12 mx-auto"
          src={metadata.logo_url}
          alt={metadata.name} // Proper alt text for accessibility
        />
      </div>
      <div className="self-center ml-4">
        <h2 className="font-bold text-2xl md:text-3xl">
          {metadata.name}
        </h2>
        {/* Address and website are hidden; they are included for potential future use but not displayed */}
        <p className="hidden text-xl mx-5 md:mx-0">{metadata.address}</p>
        <p className="hidden text-xl">{metadata.website}</p>
      </div>
    </div>
  )
}
