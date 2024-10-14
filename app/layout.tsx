import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Movie Platform',
  description: 'Discover and stream your favorite movies and shows on Movie Platform.',
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
