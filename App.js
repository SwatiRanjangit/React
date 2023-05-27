
const heading = React.createElement(
  "h1",
  { id: "title" },
  "hello world!"
); // this will override the root element.React will override all the thing which is in root

const heading1 = React.createElement(
  "h1",
  { id: "title1" },
  "namaste world!!"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing a react element inside the root.
<!-- root.render(heading); -->
root.render(container);
