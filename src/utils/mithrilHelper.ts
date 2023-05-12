import m from "mithril";
export default m;

export type MComponent = () => {
  tag: any;
  attrs: any;
  state: any;
  controller: () => void;
  view: () => JSX.Element;
};
