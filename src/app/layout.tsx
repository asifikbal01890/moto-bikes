'use client'
import NavBar from '@/Components/Shared/NavBar/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/Components/Shared/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  )
}
