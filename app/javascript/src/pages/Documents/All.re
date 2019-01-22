[@bs.module] external styles: Js.Dict.t(string) = "./All.module.scss";

Js.log(Utils.getClassName(styles, "Documents__Container"));

module AllDocuments = [%graphql
  {|
    query documents {
      viewer {
        documents {
          content
        }
      }
    }
  |}
];

module AllDocumentsQuery = ReasonApollo.CreateQuery(AllDocuments);

module LoginMessage = {
  let component = "LoginMessage" |> ReasonReact.statelessComponent;

  let make = _children => {
    ...component,
    render: _self =>
      <h1>
        {"Please log in to view your documents!" |> ReasonReact.string}
      </h1>,
  };
};

module NoDocumentsMessage = {
  let component = "NoDocumentsMessage" |> ReasonReact.statelessComponent;

  let make = _children => {
    ...component,
    render: _self =>
      <h1>
        {"There are no documents to show... create one!" |> ReasonReact.string}
      </h1>,
  };
};

module NoContentMessage = {
  let component = "NoContentMessage" |> ReasonReact.statelessComponent;

  let make = _children => {
    ...component,
    render: _self =>
      <h1>
        {"There is no content here... add some!" |> ReasonReact.string}
      </h1>,
  };
};

module Documents = {
  let component = "Documents" |> ReasonReact.statelessComponent;

  let make = (~documents, _children) => {
    ...component,
    render: _self =>
      <ul>
        {ReasonReact.array(
           Array.map(
             document =>
               switch (document##content) {
               | None => <NoContentMessage />
               | Some(content) => <li> {content |> ReasonReact.string} </li>
               },
             documents,
           ),
         )}
      </ul>,
  };
};

let component = "AllDocuments" |> ReasonReact.statelessComponent;

let make = _children => {
  ...component,
  render: _self => {
    <AllDocumentsQuery>
      ...{({result}) =>
        switch (result) {
        | Loading => <div> {"Loading" |> ReasonReact.string} </div>
        | Error(error) => <div> {error##message |> ReasonReact.string} </div>
        | Data(response) =>
          switch (response##viewer) {
          | None => <LoginMessage />
          | Some(viewer) =>
            switch (viewer##documents) {
            | None => <NoDocumentsMessage />
            | Some(documents) => <Documents documents />
            }
          }
        }
      }
    </AllDocumentsQuery>;
  },
};

let default = ReasonReact.wrapReasonForJs(~component, _ => make([||]));