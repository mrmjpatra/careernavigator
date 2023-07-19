import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import { Hind, Roboto } from "next/font/google";
import ReduxProvider from "@/redux/Provider";
import Footer from "@/components/Footer";
import { FC, ReactNode } from "react";
import Providers from "@/utils/provider";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const hind = Hind({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--hind-font",
});

export const metadata = {
  title: "Career Navigator",
  description: "Choose best college with us",
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
        className={`${roboto.className} ${hind.className}`}
        suppressHydrationWarning={true}
      >
        <ReduxProvider>
          <Providers>
          <Toaster/>
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
