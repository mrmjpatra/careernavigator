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
const Footer = dynamic(() => import('@/components/Footer'));


const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});



export const metadata = {
  title: "Career Navigator",
  description: "Choose Best College with us",
  openGraph: {
    title: 'Carrer Navigator',
    description: 'Choose your best Carrer. We guide you to choose best path with best College. Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.',
    url: 'https://nextjs.org',
    siteName: 'Carrer Navigator',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
