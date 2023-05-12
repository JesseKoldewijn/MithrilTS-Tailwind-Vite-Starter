import m from "mithril";
export default m;

export type MComponent = () => {
  controller: () => void;
  view: () => JSX.Element;
};
