import "@/styles/tailwind.css";

import m from "@/utils/mithrilHelper";

import routes from "./routes";

const main = () => {
  const mountNode = document.querySelector("#_MITHRIL_ROOT_");

  if (mountNode) {
    m.route.prefix = "";
    m.route(mountNode, "/", routes);
  }
};
main();
