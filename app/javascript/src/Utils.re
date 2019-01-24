let getClassName = (dictionary: Js.Dict.t(string), className: string) => {
  switch (Js.Dict.get(dictionary, className)) {
  | Some(className) => className
  | None => "Nothing found"
  };
};

let join = (joiner: string, strList: list(string)) =>
  String.concat(joiner, strList);

let joinStyles = join(" ");