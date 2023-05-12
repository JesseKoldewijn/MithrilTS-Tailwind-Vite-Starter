import { MComponent } from "@/utils/mithril/mithrilHelper";

import MainHeader from "./mainHeader";
import MainFooter from "./mainFooter";

const MainLayout = (Body: MComponent) => {
  return {
    view() {
      return (
        <>
          <MainHeader />
          <Body />
          <MainFooter />
        </>
      );
    },
  };
};
export default MainLayout;
