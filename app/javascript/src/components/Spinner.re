[@bs.module] external styles: Js.Dict.t(string) = "./Spinner.module.scss";

let getStyle = Utils.getClassName(styles);

let component = "Spinner" |> ReasonReact.statelessComponent;

let make = (~isLoading=true, _children) => {
  ...component,
  render: _self => {
    let loaderStyle = className =>
      isLoading ? getStyle({j|Loading--$className|j}) : getStyle("Hidden");

    <div className={getStyle("Container")}>
      <div className={loaderStyle("One")} />
      <div className={loaderStyle("Two")} />
      <div className={loaderStyle("Three")} />
    </div>;
  },
};