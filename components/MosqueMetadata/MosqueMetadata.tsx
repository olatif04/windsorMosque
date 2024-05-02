import { MosqueMetadataType } from "@/types/MosqueDataType";
import Image from 'next/image';
import logo from './logo.webp';  // Ensure this import path is correct

export default function MosqueMetadata({
  metadata,
}: {
  metadata: MosqueMetadataType
}) {
  return (
    <div className="flex text-white text-center md:text-left mt-0"> {/* Reduced top margin */}
      <div className="flex-shrink-0 self-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={logo}
          alt={metadata.name} // Proper alt text for accessibility
          width={24} // Specify width
          height={24} // Specify height
          layout='responsive' // This will maintain the aspect ratio
        />
      </div>
      <div className="self-center ml-4">
        <h2 className="font-bold text-4xl md:text-4xl">{metadata.name}</h2> {/* Increased font size */}
        {/* Address and website are hidden; they are included for potential future use but not displayed */}
        <p className="hidden text-xl mx-5 md:mx-0">{metadata.address}</p>
        <p className="hidden text-xl">{metadata.website}</p>
      </div>
    </div>
  )
}
