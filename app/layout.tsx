
import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Hind, Roboto } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'
import Footer from '@/components/Footer'
import { FC, ReactNode } from 'react'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const hind = Hind({ weight: ['400', '500'], subsets: ['latin'], variable: '--hind-font' });


export const metadata = {
  title: 'Career Navigator',
  description: 'Choose best college with us',
}

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children, modal }) => {
  return (
    <html lang="en" >
      <body className={`${roboto.className} ${hind.className}`} suppressHydrationWarning={true} >
        <ReduxProvider>
          <NavigationBar />
          {children}
          {modal}
          <Footer />
        </ReduxProvider>
      </body>
    </html >
  )
}
export default RootLayout;


