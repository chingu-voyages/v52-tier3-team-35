import './globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '../components/Navbar';
import SessionProvider from '../components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'SunCityLA',
  description: 'We\’re helping LA set up solar energy.',
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="sm:w-full sm:mx-0 lg:container lg:mx-auto">
          <SessionProvider session={session}>
            <Navbar />
            {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
