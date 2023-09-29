# React Learning

....

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food ordering app

/\*\*

- Header
- Logo
- Nav Items
- Body
- Search
- RestaurantContainer
- RestaurantCard
- Img
- Name of Res, Star Rating, Cuisine, delivery time
- Footer
- Copyright
- Links
- Address
- Contact
  \*/

- Two types of Export/Import

  export default Component;
  import Component from "path"

- Named Export/Import

  export const Component;
  import {Component} from "path"

.................

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful state variables in react
- useEffect()
- useParams() - by react router

# 2 types of Routong in web apps

- Client side Routing
- Server side Routing

- Follow single responsibility principle

# Optimize the application - speedup and make performant

- Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/On Demand Loading/Dynamic Import

# Redux Toolkit

- Install @reduxjs/tookit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch(action)
- Reducer
- Selector

# Types of testing (devloper)

- Unit Testing - test component/unit in isolation
- Integration Testing - testing integration of components
- End to End Testing- e2e testing - entire user flow

- React Testing Library builds on top of DOM Testing Library
- DOM Testing Library uses "jest" behind the scences
- So react testing needs jest
- jest uses Babel

# Setting up Testing in our app

- Install React Testing ibrary npm i -D @testing-library/react
- Install jest - npm i -D jest
- Install Babel dependencies - npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configure Babel - Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

  ```
  module.exports = {
     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };

  ```

- To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.

  .parcelrc

  ```
  {
    "extends": "@parcel/config-default",
    "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
   }
  }
  ```

- Jest configuration - npx jest --init

  - Would you like to use Typescript for the configuration file? - no
  - Choose the test environment that will be used for testing - Use arrow-keys. Return to submit. - jsdom (browser-like)
  - Do you want Jest to add coverage reports? - yes
  - Which provider should be used to instrument code for coverage? › - Use arrow-keys. Return to submit. - babel
  - Automatically clear mock calls, instances, contexts and results before every test? - yes

- Install jsdom library - npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom
