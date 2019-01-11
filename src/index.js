import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const electron = window.require('electron');
const cppgraphql = electron.remote.require('electron-cppgraphql/build/Debug/electron-cppgraphql.node');

cppgraphql.startService();

function fetchQuery (params) {
  const query = params.query;

  if (query === undefined) {
    return Promise.reject("undefined query!");
  }

  const operationName = params.operationName || "";
  const variables = params.variables ? JSON.stringify(params.variables) : "";

  return new Promise((resolve, reject) => {
      cppgraphql.fetchQuery(query, operationName, variables, (error, response) => {
        if (error) {
          reject(error);
        } else {
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
