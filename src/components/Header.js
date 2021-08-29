import React, { useState } from "react";

const Header = ({ setDistance, connectionTypeId, setConnectionTypeId }) => {
  const [checkedState, setCheckedState] = useState(true);

  const handleToggle = (e) => {
    setCheckedState(e.target.checked);
    let indexVal = connectionTypeId.indexOf(e.target.value);

    // checking the checked status
    if (!e.target.checked) {
      connectionTypeId.splice(indexVal, 1);
    }
    if (e.target.checked) {
      // now we are considering that user has checked one option again
      // need to check the presence of that element to be more specific
      if (!connectionTypeId.includes(e.target.value)) {
        if (e.target.value === "25") {
          connectionTypeId.splice(0, 0, "25");
        } else if (e.target.value === "33") {
          if (connectionTypeId.includes("25")) {
            connectionTypeId.splice(1, 0, "33");
          } else {
            connectionTypeId.splice(0, 0, "33");
          }
        } else {
          if (
            connectionTypeId.includes("25") &&
            connectionTypeId.includes("33")
          ) {
            connectionTypeId.splice(2, 0, "2");
          } else if (connectionTypeId.includes("33")) {
            connectionTypeId.splice(1, 0, "2");
          } else {
            connectionTypeId.splice(0, 0, "2");
          }
        }
      }
    }

    const newConnectionType = [...connectionTypeId];
    setConnectionTypeId(newConnectionType);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="max distance in km"
        onChange={(e) => setDistance(e.target.value)}
      />
      <span>Connector types</span>

      <label>
        <input
          type="checkbox"
          value="25"
          onChange={handleToggle}
          defaultChecked={checkedState}
        />{" "}
        <span>Type2</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="33"
          onChange={handleToggle}
          defaultChecked={checkedState}
        />{" "}
        <span>CCS</span>
      </label>
      <label>
        <input
          type="checkbox"
          value="2"
          onChange={handleToggle}
          defaultChecked={checkedState}
        />{" "}
        <span>CHAdeMO</span>
      </label>
    </div>
  );
};

export default Header;
