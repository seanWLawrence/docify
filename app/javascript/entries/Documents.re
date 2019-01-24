module Routes = {
  let component = Lazy.make("../src/config/Routes");
};

ReactDOMRe.renderToElementWithId(
  <ReasonApollo.Provider client=ApolloClient.instance>
    <Suspense> Routes.component </Suspense>
  </ReasonApollo.Provider>,
  "root",
);