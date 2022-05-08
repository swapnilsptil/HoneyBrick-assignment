# HoneyBrick Assignment

Simple React Js assignment as Proof of concepts for implementation of ReactJS along with Redux and React-dom-router.

This demo app serves as an example for following tooling

1. [React](https://reactjs.org/) Javascript Library
2. [Redux](https://redux.js.org/) for state management
3. [React Router Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview) for client side routing
4. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing - yet to implement
5. Recoil component mocking for tests - - yet to implement
6. React in-built CI tooling for code coverage - - yet to implement

## Versions

```shell
Node : v18.1.0
npm : 8.8.0
React Js : 18.1.0
Redux : 4.2.0
```

## Run

```shell
npm install
npm run start
```

## Test coverage

```shell
npm run test:ci
open coverage/lcov-report/index.html
```

## Steps to run Application

Once application running

1. Complete Wizard requirements
  * Income Range
  * Investment Goals
  * Experience Level
2. Once requirements are entered, user will get multiple options to select
3. User can add multiple options to cart. 
4. User can remove option from cart if not required. 
5. User can add new options from home page as well.
6. User have to enter email id before checkout. 
7. User can reset cart by clicking on Reset Cart button on checkout page.