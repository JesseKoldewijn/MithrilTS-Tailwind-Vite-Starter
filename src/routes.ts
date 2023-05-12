// Layouts
import MainLayout from "./components/layouts/main/mainLayout";

// Pages
import Home from "./pages/home";
import About from "./pages/about";

const routes = {
  "/": MainLayout(Home),
  "/about": MainLayout(About),
};
export default routes;
