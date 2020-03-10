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

  return new Promise((resolve, reject) => {
    window.cppgraphql.fetchQuery(query, operationName, variables, (error, response) => {
        if (error) {
          reject(error);
        } else {
          console.log(`Response: ${response}`);
          try {
            resolve(JSON.parse(response));
          } catch (error) {
            resolve(response);
          }
        }
      });
  });
}

ReactDOM.render(<GraphiQL fetcher={fetchQuery} />, document.getElementById('root'));
