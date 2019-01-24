[@bs.module] external styles: Js.Dict.t(string) = "./Button.module.scss";

open Utils;

let component = "Button" |> ReasonReact.statelessComponent;

let make = (~isActive=false, ~className="", ~children, ~onClick) => {
  ...component,
  render: _self => {
    let buttonStyles =
      joinStyles([
        getClassName(styles, isActive ? "Base--Active" : "Base"),
        className,
      ]);

    <button className=buttonStyles onClick> children </button>;
  },
};