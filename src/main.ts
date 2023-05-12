import "@/styles/tailwind.css";

import route from "mithril/route";

import routes from "./routes";

const main = () => {
  const mountNode = document.querySelector("#_MITHRIL_ROOT_");

  if (mountNode) {
    route.prefix = "";
    route(mountNode, "/", routes);
  }
};
main();
