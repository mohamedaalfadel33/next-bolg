import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className=" min-h-[100vh]">
          <div className=" max-w-sm px-2 pt-4 sm:max-w-lg md:max-w-3xl xl:max-w-6xl 2xl:max-w-screen-1xl  ml-auto mr-auto  ">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
