[@bs.module] external styles: Js.Dict.t(string) = "./Toast.module.scss";

let getStyle = Utils.getClassName(styles);

let component = "Toast" |> ReasonReact.statelessComponent;

let make = (_children, ~message: string, ~isVisible: bool) => {
  ...component,
  render: _self => {
    let containerStyles =
      isVisible ? getStyle("Container--Visible") : getStyle("Container");

    <div className=containerStyles>
      <div className={getStyle("Container__Inner")}>
        {message |> ReasonReact.string}
      </div>
    </div>;
  },
};