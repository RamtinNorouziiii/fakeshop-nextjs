import Footer from "./footer";
import Navbar from "./navabar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
     <div className="min-vh-100" > {children} </div>
     <Footer />
    </div>
  );
};

export default Layout;
