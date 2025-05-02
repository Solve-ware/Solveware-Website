import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Proactiv - Social Media Automation',
  description: 'Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our All-in-One Marketing Solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}