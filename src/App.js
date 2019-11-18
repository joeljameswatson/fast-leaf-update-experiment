import React from "react";
import Leaf from "./Leaf";
import "./App.css";

const nodeA = 3;
const nodeB = 50;
let data = [];
let highlight = {};

for (let i = 0; i < nodeA; i++) {
  data.push({ name: `node-a-${i}`, children: [] });
  for (let j = 0; j < nodeB; j++) {
    data[i].children.push({ name: `${data[i].name}-node-b-${j}` });
  }
}

const leafNodes = data.reduce((acc, curr) => {
  return [...acc, ...curr.children];
}, []);

function App() {
  function onMouseOver(e) {
    e.stopPropagation();
    const id = e.target.dataset.id;
    if (id) {
      highlight[id](true);
    }
  }
  function onMouseLeave(e) {
    e.stopPropagation();
    const id = e.target.dataset.id;
    if (id) {
      highlight[id](false);
    }
  }
  function register(name, setHighlight) {
    highlight[name] = setHighlight;
  }
  return (
    <div className="App" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <ul>
        {data.map(nodeA => {
          return (
            <li key={nodeA.name}>
              {nodeA.name}
              <ul>
                {nodeA.children.map(nodeB => {
                  return (
                    <Leaf
                      data={nodeB}
                      key={`${nodeB.name}`}
                      register={register}
                    />
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <ul>
        {leafNodes.map(l => {
          return (
            <li
              data-id={l.name}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseLeave}
              key={l.name}
            >
              {l.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
