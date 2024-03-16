const heading = React.createElement("div",{id: "parent"},[React.createElement("div", {id: "child1"},[React.createElement("h1", {},"Im H1"),React.createElement("h2", {},"Im H1")]),React.createElement("div", {id: "child2"},[React.createElement("h1", {},"Im H1"),React.createElement("h2", {},"Im H1")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);