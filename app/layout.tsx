// Metadata for the application, including title and description
export const metadata = {
  title: "Next.js", // Title of the application
  description: "Generated by Next.js", // Description of the application
};

// RootLayout component which serves as the root layout for the application
export default function RootLayout({
  children, // Children components to be rendered inside the layout
}: {
  children: React.ReactNode; // Type definition for children prop
}) {
  return (
    <html lang="en">
      {" "}
      {/* HTML element with language set to English */}
      <body>{children}</body>{" "}
      {/* Body element containing the children components */}
    </html>
  );
}
