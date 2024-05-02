import { MosqueMetadataType } from "@/types/MosqueDataType"
import logo from './logo.webp';  // Importing the logo from the same folder

export default function MosqueMetadata({
  metadata,
}: {
  metadata: MosqueMetadataType
}) {
  return (
    <div className="flex text-white text-center md:text-left mt-0"> {/* Reduced top margin */}
      <div className="flex-shrink-0 self-center">
        {/* Using a local image */}
        <img
          className="m-2 max-w-full lg:max-w-lg max-h-24 mx-auto transform scale-125" // Adjust styling as needed
          src={logo}  // Using imported image
          alt={metadata.name} // Proper alt text for accessibility
        />
      </div>
      <div className="self-center ml-4">
        <h2 className="font-bold text-4xl md:text-4xl">{metadata.name}</h2> {/* Optionally adjust font size */}
        {/* Address and website remain hidden */}
        <p className="hidden text-xl mx-5 md:mx-0">{metadata.address}</p>
        <p className="hidden text-xl">{metadata.website}</p>
      </div>
    </div>
  )
}
