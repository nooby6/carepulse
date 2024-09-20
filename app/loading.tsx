import Image from "next/image";

// Loading component to display a loading spinner and text
export default function Loading() {
  return (
    // Container div with flexbox centering, full size, full height, gap between elements, and white text
    <div className="flex-center size-full h-screen gap-3 text-white">
      {/* Image component from Next.js to display a spinning loader icon */}
      <Image
        src="/assets/icons/loader.svg" // Path to the loader icon
        alt="loader" // Alt text for the image
        width={40} // Width of the image
        height={3240} // Height of the image
        className="animate-spin" // CSS class to apply spinning animation
      />
      {/* Loading text */}
      Loading...
    </div>
  );
}
