import { MComponent } from "@/utils/mithrilHelper";
import m from "mithril";

const About: MComponent = () => {
  return {
    controller: () => {},
    view: () => {
      return (
        <div class="flex h-screen flex-col justify-center gap-2 text-center">
          <h1 class="text-4xl font-extrabold text-gray-300">About Me</h1>
          <h3 class="text-xl font-light">Who am I?</h3>
        </div>
      );
    },
  };
};
export default About;
