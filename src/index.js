import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

window.cppgraphql.startService();

function fetchQuery (params) {
  const query = params.query;

  if (query === undefined) {
    return Promise.reject("undefined query!");
  }

  const operationName = params.operationName || "";
  const variables = params.variables ? JSON.stringify(params.variables) : "";

  console.log(`Query: ${query}`);
  console.log(`Operation: ${operationName}`);
  console.log(`Variables: ${variables}`);

  return window.cppgraphql.fetchQuery(query, operationName, variables)
    .then(response => JSON.parse(response));
}

ReactDOM.render(<GraphiQL fetcher={fetchQuery} />, document.getElementById('root'));
