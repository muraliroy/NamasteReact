const heading = React.createElement("h1", { id: "heading" }, [
  React.createElement("h2", {}, "happy"),
  React.createElement("h3", {}, "happy birthday"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
