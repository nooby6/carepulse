import type { Metadata } from "next"; // Importing the Metadata type from Next.js for type-checking metadata.
import "./globals.css"; // Importing global CSS styles.
import { Plus_Jakarta_Sans as FontSans } from "next/font/google"; // Importing the Plus Jakarta Sans font from Google Fonts via Next.js.
import { ThemeProvider } from "next-themes"; // Importing the ThemeProvider component from next-themes for theme management.

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names.

const fontSans = FontSans({
  subsets: ["latin"], // Specifying the subsets of the font to be used.
  weight: ["300", "400", "500", "600", "700"], // Specifying the font weights to be used.
  variable: "--font-sans", // Defining a CSS variable for the font.
});

// Metadata object for the application, used by Next.js for SEO and other purposes.
export const metadata: Metadata = {
  title: "CarePulse", // The title of the application.
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.", // A brief description of the application.
  icons: {
    icon: "/assets/icons/logo-icon.svg", // Path to the favicon or icon for the application.
  },
};

/**
 * RootLayout component that sets up the basic HTML structure and theme for the application.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 *
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Type definition for the children prop, which is a React node.
}>) {
  return (
    <html lang="en">
      {" "}
      {/* Setting the language attribute for the HTML document. */}
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased", // Applying minimum height, background color, font, and antialiasing styles.
          fontSans.variable, // Adding the CSS variable for the font.
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {" "}
          {/* Wrapping children with ThemeProvider to manage themes, defaulting to dark theme. */}
          {children}{" "}
          {/* Rendering the child components passed to RootLayout. */}
        </ThemeProvider>
      </body>
    </html>
  );
}
