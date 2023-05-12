import { MComponent } from "@/utils/mithril/mithrilHelper";

const MainHeader: MComponent = () => {
  return {
    tag: {},
    attrs: {},
    state: {},
    controller: () => {},
    view() {
      return (
        <div class="fixed w-full">
          <div class="top-0 mx-3 mt-2 flex h-12 items-center rounded-xl bg-base-300 px-3 md:mr-5">
            <a class="text-xl normal-case hover:cursor-pointer hover:text-ThisIsMithil">
              MithrilTS
            </a>
          </div>
        </div>
      );
    },
  };
};
export default MainHeader;
