export let withMutation = Component => mutationProps => (
  <Mutation {...mutationProps}>
    {(mutation, { data, loading, error }) => {
      if (loading) {
        return <h1>Loading....</h1>;
      }
      if (error) {
        return <h1>Error...</h1>;
      }

      return <Component data={data} mutation={mutation} />;
    }}
  </Mutation>
);

export let withQuery = Component => queryProps => (
  <Query {...queryProps}>
    {({ data, loading, error }) => {
      if (loading) {
        return <h1>Loading....</h1>;
      }
      if (error) {
        return <h1>Error...</h1>;
      }

      return <Component data={data} />;
    }}
  </Query>
);
