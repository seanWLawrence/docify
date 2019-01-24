[@bs.module "react"] external makeLazy: (unit => unit) => unit = "lazy";
[@bs.val] external import: string => unit = "";

let make = (componentPath: string) => makeLazy(() => import(componentPath));