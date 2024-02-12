import { Routes } from "react-router-dom";
import Header from "../components/lte/header/header.jsx";
import TopNav from "../components/lte/top-nav/top-nav.jsx";
import Sidebar from "../components/lte/sidebar/sidebar.jsx";
import Content from "../components/lte/content/content.jsx";
import Footer from "../components/lte/footer/footer.jsx";
import ThemePanel from "../components/lte/theme-panel/theme-panel.jsx";
export const RoutesApp = ({
  appContentClass,
  appHeaderNone,
  appTopNav,
  appSidebarNone,
  appContentNone,
  appFooter
}) => {
  return (
    <>
        {!appHeaderNone && <Header />}
        {appTopNav && <TopNav />}
        {!appSidebarNone && <Sidebar />}
        {!appContentNone && <Content className={appContentClass} />}
        {appFooter && <Footer />}
        <ThemePanel />
    </>
  );
};
