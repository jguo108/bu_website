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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Lora:ital,wght@0,400..700;1,400..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:ital,wght@0,300..800;1,300..800&display=swap"
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
