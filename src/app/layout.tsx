import type { Metadata } from "next";
import { RegisterProvider } from "@/components/RegisterProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BoundaryUnknown — Youth Entrepreneurship & AI",
  description:
    "BoundaryUnknown is a youth future school where kids bring an idea, learn to think like founders, and use AI to build something real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="antialiased min-h-screen">
        <RegisterProvider>{children}</RegisterProvider>
      </body>
    </html>
  );
}
