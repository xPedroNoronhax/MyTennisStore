import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "../../containers/footer/Footer";
import ScrollToTop from "../SrollToTop";

const Root = () => {
  return (
    <div className="max-w-1440 ">
      <MainNavigation />
      <main>
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
