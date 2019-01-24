[@bs.module "slate-md-serializer"]
external createMarkdownSerializer: unit => Js.Dict.t(string => string) =
  "default";

let serializer = createMarkdownSerializer();

let toSlate = Js.Dict.get(serializer, "deserialize");
let toMarkdown = Js.Dict.get(serializer, "serialize");