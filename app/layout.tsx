
import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Hind, Roboto } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'
import Footer from '@/components/Footer'




const roboto = Roboto({
  weight: ['400', '500', '700','900'],
  subsets: ['latin'],
  display: 'swap',
})

const hind = Hind({weight:['400','500'] ,subsets:['latin'], variable: '--hind-font' });


export const metadata = {
  title: 'Career Navigator',
  description: 'Choose best college with us',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${hind.className}`} suppressHydrationWarning={true} >
        <ReduxProvider>
          <NavigationBar />
          {children}
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  )
}
