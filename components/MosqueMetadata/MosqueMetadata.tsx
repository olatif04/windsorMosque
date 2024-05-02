import { MosqueMetadataType } from "@/types/MosqueDataType";
import Image from 'next/image';
import logo from './logo.webp';  // Ensure this import path is correct

export default function MosqueMetadata({
  metadata,
}: {
  metadata: MosqueMetadataType
}) {
  return (
    <div className="flex items-center text-white text-center md:text-left mt-0"> {/* Use items-center to align items vertically */}
      <div className="flex-shrink-0">
        <Image
          src={logo}
          alt={metadata.name} // Proper alt text for accessibility
          width={100} // Adjusted for visual balance
          height={100} // Adjusted for visual balance
          layout='responsive' // This will maintain the aspect ratio
        />
      </div>
      <div className="ml-4" style={{ marginTop: '0.5em' }}>  // Subtle adjustment to lower the text
        <h2 className="font-bold text-4xl md:text-4xl">{metadata.name}</h2> {/* Increased font size */}
        {/* Address and website are hidden; they are included for potential future use but not displayed */}
        <p className="hidden text-xl mx-5 md:mx-0">{metadata.address}</p>
        <p className="hidden text-xl">{metadata.website}</p>
      </div>
    </div>
  )
}
