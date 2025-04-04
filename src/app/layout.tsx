import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "@/styles/globals.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
