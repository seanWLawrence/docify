[@bs.module] external app: ReasonReact.reactClass = "./App";

let make = children =>
  ReasonReact.wrapJsForReason(
    ~reactClass=app,
    ~props=Js.Obj.empty(),
    children,
  );