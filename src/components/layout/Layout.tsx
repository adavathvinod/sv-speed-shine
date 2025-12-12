import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import MusicPlayer from "./MusicPlayer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingButtons />
      <MusicPlayer />
    </div>
  );
};

export default Layout;
