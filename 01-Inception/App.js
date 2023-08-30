{
  /* <div id="parent">
    <div id="child">
        <h1> I'm h1 tag</h1>
        <h1> I'm h1 tag</h1>
    </div>
</div> */
}

// const heading = document.createElement("h1");
// heading.innerHTML = "I am h1 Element";
// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
