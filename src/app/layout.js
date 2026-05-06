import Cursor from "./Component/Cursor/Cursor";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.css';


export const metadata = {
  title: "Dilorra Marine",
  description: "Trusted Marine Shipping, Logistics and Freight Solutions Worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
        <Cursor />{children}
        <Footer/>
        </body>
      
    </html>
  );
}
