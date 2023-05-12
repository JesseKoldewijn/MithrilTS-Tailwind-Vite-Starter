import m, { MComponent } from "@/utils/mithrilHelper";
import MainHeader from "./mainHeader";
import MainFooter from "./mainFooter";

const MainLayout = (Body: MComponent) => {
  return {
    view() {
      return (
        <>
          {m(MainHeader)}
          {m(Body)}
          {m(MainFooter)}
        </>
      );
    },
  };
};
export default MainLayout;
