import { MComponent } from "@/utils/mithril/mithrilHelper";

const MainFooter: MComponent = () => {
  return {
    tag: {},
    attrs: {},
    state: {},
    controller: () => {},
    view() {
      return (
        <div class="absolute w-full">
          <div class="bottom-2 mx-3 mb-2 flex h-56 rounded-xl bg-base-300 px-3 md:mr-5">
            <a class="mx-auto mt-4 text-xl normal-case hover:cursor-pointer hover:text-ThisIsMithil">
              MithrilTS
            </a>
          </div>
        </div>
      );
    }
  };
};
export default MainFooter;
