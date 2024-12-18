import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "unischool Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full bg-primary dark:bg-gray-900 z-50  sticky top-0 px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40">
            <Navbar />
          </div>
          <div className=" bg-background dark:bg-gray-900 px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-40">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}