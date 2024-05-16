import SessionProvider from '@/util/auth/SessionProvider';
import ProvidesTheQueryClient from '@/utils/ProvidesTheQueryClient';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pensieve',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <ProvidesTheQueryClient>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ProvidesTheQueryClient>
    </SessionProvider>
  );
}
