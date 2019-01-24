[@bs.module] external styles: Js.Dict.t(string) = "./Toolbar.module.scss";

let getStyle = Utils.getClassName(styles);

let component = "Toolbar" |> ReasonReact.statelessComponent;

let make = (~children) => {
  ...component,
  render: _self => <div className={getStyle("Base")}> children </div>,
};