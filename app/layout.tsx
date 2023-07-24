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
const Footer = dynamic(() => import('@/components/Footer'));


const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = 'https://careernavigator.vercel.app'

export const metadata: Metadata = {
  title: "Career Navigator",
  description: "Choose Best College with us",
  keywords: ['Carrer Navigator', 'Best Colleges', 'Exams', 'Best Coachings', 'Best School', 'Choose Carrer', "top colleges", 'university top', 'college university', 'university colleges', 'colleges university', 'popular colleges', 'career navigator', 'university career', 'global colleges', 'career university', 'navigation career', 'iit top colleges', 'university navigator', 'university popular', 'navigator career'],
  creator: 'Mrutyunjaya Patra',
  publisher: 'Mrutyunjaya Patra',
  authors: [{ name: 'mrmjpatra' }, { name: 'mrmjpatra', url: baseUrl }],
  colorScheme: 'light',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Carrer Navigator',
    description: 'Choose your best Carrer. We guide you to choose best path with best College. Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.',
    url: baseUrl,
    siteName: 'Carrer Navigator',
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',

  },
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
  metadataBase: new URL(baseUrl),
  twitter: {
    card: 'app',
    title: 'Carrer Navigator',
    description: 'Choose your best Carrer. We guide you to choose best path with best College.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: {
      url: `${baseUrl}/opengraph-image.png`,
      alt: 'Next.js Logo',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    title: 'Carrer Navigator',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
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
          <Providers>
            <Toaster />
            <SkeletonTheme baseColor="#cecece" highlightColor="#444">
              <NavigationBar />
              {children}
              {college}
              {school}
              {coaching}
              <Footer />
            </SkeletonTheme>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
};
export default RootLayout;
