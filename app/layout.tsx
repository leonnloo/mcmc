import type { Metadata } from 'next';
import React from 'react';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import { Sidebar } from '@/components/sidebar';
export const metadata: Metadata = {
  title: 'Foursight',
  description:
    'Aimed to predict shipment delays and geographical demand patterns for a better supply chain management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const initialState = cookieToInitialState(config, headers().get('cookie'));
  return (
    <html lang="en">
      <body className="font-fira_sans flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
