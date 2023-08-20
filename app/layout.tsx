import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import ReduxProvider from "@/redux/Provider";
import { FC, ReactNode } from "react";
import Providers from "@/utils/provider";
import dynamic from "next/dynamic";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import { Metadata } from "next";
import { ContactModalProvider } from "@/components/ContactModalContext";
import ApplyModal from "@/components/ApplyModal";
const Footer = dynamic(() => import('@/components/Footer'));


const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = 'https://careernavigator.vercel.app'

export const metadata: Metadata = {
  title: {
    template: '%s | Institute Insider',
    default:'Institute Insider'
  },
  description: "Choose Best College with us",
  keywords: ['Institute Insider', 'Best Colleges', 'Exams', 'Best Coachings', 'Best School', 'Choose Carrer', "top colleges", 'university top', 'college university', 'university colleges', 'colleges university', 'popular colleges', 'career navigator', 'university career', 'global colleges', 'career university', 'navigation career', 'iit top colleges', 'university navigator', 'university popular', 'navigator career'],
  creator: 'Mrutyunjaya Patra',
  publisher: 'Mrutyunjaya Patra',
  authors: [{ name: 'mrmjpatra' }, { name: 'mrmjpatra', url: baseUrl }],
  colorScheme: 'light',
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', baseUrl)],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  twitter: {
    card: 'app',
    title: 'Institute Insider',
    description: 'Choose your best Carrer. We guide you to choose best path with best College.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: {
      url: `${baseUrl}/opengraph-image?60c1579eb90e4b11`,
      alt: 'Institute Insider',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 3,
  },
 
};

interface RootLayoutProps {
  children: ReactNode;
  college: ReactNode;
  school: ReactNode;
  coaching: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({
  children,
  college,
  school,
  coaching,
}) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
        suppressHydrationWarning={true}
      >
        <ReduxProvider>
          <ContactModalProvider>
            <Providers>
              <Toaster />
              <SkeletonTheme baseColor="#cecece" highlightColor="#444">
                <ApplyModal/>
                  <NavigationBar />
                  {children}
                  {college}
                  {school}
                  {coaching}
                <Footer />
              </SkeletonTheme>
            </Providers>
          </ContactModalProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};
export default RootLayout;

export const revalidate = 20
