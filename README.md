# cppgraphiql

This is a sample Electron app hosting GraphiQL for a cppgraphqlgen service.<br>
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This package assumes that you've successfully built [electron-cppgraphql](https://github.com/wravery/electron-cppgraphql) with `npm install`.

To start running the app, use:
* `npm install`
* `npm start`, and in a separate window
* `npm run electron`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
However, the browser won't have access to Node APIs, so you will need to start electron once the server is running. 

### `npm run electron`

Runs the app in Electron against the dev server.<br>
The Electron app supports all of the same hot-reloading as the browser normally would, plus it has access to the Node APIs it needs to talk to `electron-cppgraphql`.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
The only test is one that's left over from `create-react-app` since GraphiQL takes over the entire page, but you can use [App.test.js](./src/App.test.js) as a template for new tests if you want.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>

The build is minified and the filenames include the hashes.<br>

I haven't got this working for this app yet, there seems to be a conflict with the redistributable files from GraphiQL.<br>
When I re-point [startElectron.js](./src/startElectron.js) at the result, I get a script error indicating there are too many imports of the `graphql` module.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
