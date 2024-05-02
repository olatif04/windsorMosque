import { MosqueMetadataType } from "@/types/MosqueDataType";
import Image from 'next/image'; // Import Next.js Image component
import logo from './logo.webp';  // Importing the logo from the same folder

export default function MosqueMetadata({
  metadata,
}: {
  metadata: MosqueMetadataType
}) {
  return (
    <div className="flex text-white text-center md:text-left mt-0">
      <div className="flex-shrink-0 self-center relative m-2 max-w-full lg:max-w-lg max-h-24 mx-auto"> // Make container relative for Image
        {/* Using Next.js Image for optimized image handling */}
        <Image
          src={logo}
          alt={metadata.name}
          width={24} // Specify width
          height={24} // Specify height
          layout='responsive' // This will maintain the aspect ratio
        />
        
      </div>
      <div className="self-center ml-4">
        <h2 className="font-bold text-4xl md:text-4xl">    {metadata.name}</h2>
        {/* Address and website remain hidden */}
        <p className="hidden text-xl mx-5 md:mx-0">{metadata.address}</p>
        <p className="hidden text-xl">{metadata.website}</p>
      </div>
    </div>
  )
}
