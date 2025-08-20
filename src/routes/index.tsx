import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact";
import ImportProcess from "../pages/import-process";
import ProductOverview from "../pages/product-overview";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/import-process", element: <ImportProcess /> },
  { path: "/product-overview", element: <ProductOverview /> },
];

export default routes;
