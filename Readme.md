# Bootstrap v4 components

These components are a minimal implementation, as required by my own needs for an application of mine, of the Bootstrap v4 components and layouts to React. They are not meant to be a complete solution or replacement for [react-bootstrap](https://react-bootstrap.github.io/) which uses Bootstrap v3.

## Installation

```
npm i @devasatyam/react-bootstrap-4-controls
```

The components can then be imported as shown in each individual section. The file at `lib/index.umd.js` can also be imported via HTML `<script>` tag which will create a global `reactBootstrap4Controls` variable containing all the controls as properties, ie: `reactBootstrap4Controls.Button`, `reactBootstrap4Controls.NavBar` and so on.

### External dependencies

The controls have React as a peer dependency, that is, they expect it to be installed into `node_modules`, but does not include it. `react-router-dom` should also be available. The `Form` and `Field` components expect `react-final-form` to be installed likewise.

This package also expect Bootstrap 4 CSS files to be available. As an alternative [Bootswatch](https://bootswatch.com/) offer various styles that can be used. There is no need to include JQuery or Popper.

## Usage

See the corresponding section:

* [Button and ButtonGroup](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/Button/Readme.md)
* [DataTable](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/DataTable/Readme.md)
* [Form](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/Form/Readme.md)
* [Grid, Row and Col](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/Grid/Readme.md)
* [Jumbotron](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/Jumbotron/Readme.md)
* [NavBar](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/NavBar/Readme.md)
* [Table](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/Table/Readme.md)
* [Tabs](https://github.com/Satyam/react-bootstrap-4-controls/tree/master/src/Tabs/Readme.md)
