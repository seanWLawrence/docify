#!/usr/bin/env bash

  echo "Starting..."
  echo "Generating GraphQL schema..."
  bundle exec rake generate_graphql_schema
  bundle exec bin/rails s
