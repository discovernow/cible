import type { Metadata } from 'next';
import { Inter, Raleway, Nunito_Sans } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font--raleway',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font--inter',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font--nunito_sans',
});

export const metadata: Metadata = {
  title: 'Cible Limited | Sustainable Solutions',
  description: 'Sustainable solutions company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${raleway.variable} ${inter.variable} ${nunito_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
