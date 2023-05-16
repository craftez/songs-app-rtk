# Songs App

This is a demo app that demonstrates the implementation of a basic React app with Redux state using `@reduxjs/toolkit` along with `createApi`. In this app, the API is connected directly to the Redux store, rather than using the ApiProvider. Redux DevTools are enabled only in production.

Initially, I defined styles, actions, action creators, and reducers using the previous Redux Thunk implementation. However, I later migrated everything to the toolkit, utilizing slices and createSlice, which provided a more streamlined approach. Additionally, I incorporated memoized selectors to enhance the artist data. During the process, I had the idea of using `createApi`, even though it is typically meant for single requests at a time. I followed my intuition and used queryFn to augment artists to the song data, allowing me to leverage the benefits of all these components, including the use of the `useQuery` hook and caching.

Overall, it was an enjoyable experience that allowed me to explore multiple patterns and different layers, making it ideal for testing and gaining insights into various approaches.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
