import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Samiuzzaman Safowan | Portfolio",
  description:
    "Personal portfolio of Md. Samiuzzaman Safowan, Software Engineer, AI Researcher, and Full Stack Developer."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
