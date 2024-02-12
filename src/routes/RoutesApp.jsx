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

        <Routes>
          {/* <Route path="/lte" element={<Lte />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/lte/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/lte/widgets" element={<Widgets />} /> */}
          {/* <Route path="/lte/charts" element={<Charts />} /> */}
          {/* <Route path="/lte/forms" element={<Forms />} /> */}
          {/* <Route path="/lte/tables" element={<Tables />} /> */}
          {/* <Route path="/lte/elements" element={<Elements />} /> */}
          {/* <Route path="/lte/buttons" element={<Buttons />} /> */}
          {/* <Route path="/lte/calendar" element={<Calendar />} /> */}
          {/* <Route path="/lte/gallery" element={<Gallery />} /> */}
          {/* <Route path="/lte/invoice" element={<Invoice />} /> */}
          {/* <Route path="/lte/mailbox" element={<Mailbox />} /> */}
          {/* <Route path="/lte/compose" element={<Compose />} /> */}
          {/* <Route path="/lte/lockscreen" element={<Lockscreen />} /> */}
          {/* <Route path="/lte/error" element={<ErrorPage />} /> */}
          {/* <Route path="/lte/empty" element={<EmptyPage />} /> */}
          {/* <Route path="/lte/faq" element={<Faq />} /> */}
          {/* <Route path="/lte/contacts" element={<Contacts />} /> */}
          {/* <Route path="/lte/profile" element={<Profile />} /> */}
          {/* <Route path="/lte/projects" element={<Projects />} /> */}
          {/* <Route path="/lte/project" element={<Project />} /> */}
          {/* <Route path="/lte/ecommerce" element={<Ecommerce />} /> */}
          {/* <Route path="/lte/products" element={<Products />} /> */}
          {/* <Route path="/lte/product" element={<Product />} /> */}
          {/* <Route path="/lte/cart" element={<Cart />} /> */}
          {/* <Route path="/lte/orders" element={<Orders />} /> */}
          {/* <Route path="/lte/order" element={<Order />} /> */}
          {/* <Route path="/lte/customers" element={<Customers />} /> */}
          {/* <Route path="/lte/customer" element={<Customer />} /> */}
          {/* <Route path="/lte/settings" element={<Settings />} /> */}
          {/* <Route path="/lte/typography" element={<Typography /> */}
        </Routes>
    </>
  );
};
