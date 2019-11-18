import React, { useState, useEffect } from "react";

function Leaf({ data, register }) {
  const [highlight, setHiglight] = useState(false);
  useEffect(() => {
    register(data.name, setHiglight);
  }, [register, data.name, setHiglight]);

  console.log("render leaf", data.name);
  return (
    <li key={data.name} className={highlight ? "highlight" : ""}>
      {data.name}
    </li>
  );
}

export default Leaf;
