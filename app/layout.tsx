
import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Roboto } from 'next/font/google'
import ReduxProvider from '@/redux/Provider'




const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={roboto.className} suppressHydrationWarning={true} >
        <ReduxProvider>
          <NavigationBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
