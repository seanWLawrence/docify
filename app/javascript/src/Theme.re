open Css;

let space = (multiplier: int) => px(5 * multiplier);

module FontFamilies = {
  let body = fontFamily("Georgia, 'Times New Roman', Times, serif");
  let header =
    fontFamily(
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
     Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
     'Segoe UI Symbol'",
    );
};

module FontSizes = {
  let body = px(25);

  let h1 = px(100);
  let h2 = px(75);
  let h3 = px(55);
  let h4 = px(40);
  let h5 = px(30);
  let h6 = px(25);
};

module Colors = {
  let white = hex("fff");
  let light = hex("eee");
  let medium = rgba(0, 0, 0, 0.7);
  let dark = rgba(0, 0, 0, 0.9);

  let primary = color(cornflowerblue);
  let secondary = light;

  let heading = dark;
  let body = medium;
};

module MediaQueries = {
  let mobileInPx = 330;
  let tabletInPx = 768;
  let desktopInPx = 1024;
  let retinaInPx = 1440;

  type minOrMax =
    | Min
    | Max;

  let screenSize = (value: minOrMax, widthInPixels: int): string =>
    switch (value) {
    | Min => "(min-width: " ++ string_of_int(widthInPixels) ++ ")"
    | Max => "(max-width: " ++ string_of_int(widthInPixels) ++ ")"
    };

  let mediaQuery = (minInPx: int, maxInPx: int) =>
    screenSize(Min, minInPx) ++ screenSize(Max, maxInPx);

  /* Auto curried, simply call this with yous styles, i.e.
       mobile([backgroundColor(white)])
     */

  let mobile = media(mediaQuery(mobileInPx, tabletInPx - 1));

  let tablet = media(mediaQuery(tabletInPx, desktopInPx - 1));

  let desktop = media(mediaQuery(desktopInPx, retinaInPx - 1));

  let retina = media(mediaQuery(retinaInPx, 10000));
};