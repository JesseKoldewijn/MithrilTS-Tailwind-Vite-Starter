// Layouts
import MainLayout from "./components/layouts/main/mainLayout";

// Pages
import About from "./pages/about";
import Home from "./pages/index";

const routes = {
  "/": MainLayout(Home),
  "/about": MainLayout(About),
};
export default routes;
