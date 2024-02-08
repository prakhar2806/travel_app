import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel app",
  description: "Travel App for Ui/Ux for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
