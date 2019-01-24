[@bs.module "react"] external suspense: ReasonReact.reactClass = "Suspense";

[@bs.deriving abstract]
type suspenseProps = {fallback: ReasonReact.reactElement};

let make = children =>
  ReasonReact.wrapJsForReason(
    ~reactClass=suspense,
    ~props=
      suspenseProps(
        ~fallback={
          <Spinner isLoading=true />;
        },
      ),
    children,
  );