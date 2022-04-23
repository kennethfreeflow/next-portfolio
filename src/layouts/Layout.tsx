import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { classNames } from "../utils/tailwind";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className={classNames("min-h-screen")}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
