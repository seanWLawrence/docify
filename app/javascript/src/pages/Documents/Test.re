let component = ReasonReact.statelessComponent("Test");

let make = _children => {
  ...component,
  render: _self => <h1> {"Hello yo!" |> ReasonReact.string} </h1>,
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));