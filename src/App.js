import React, { useState } from "react";
import AndSelect from "./AndSelect";
import OrSelect  from "./OrSelect";
import ConstantSelect from "./ConstantSelect"
import ArgumentSelect from "./ArgumentSelect"
function App() {
  const [data, setData] = useState([{ vname: "", boolVal: true }]);
  const [operation, setOperation] = useState("");

  const [resultBool, setResultBool] = useState();
  const handleClick = () => {
    setData([...data, { vname: "", boolVal: true }]);
  };
  const handleChangeVar = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    if (name === "boolVal") {
      onchangeVal[i][name] = value === "true";
    } else onchangeVal[i][name] = value;
    setData(onchangeVal);
  };
  const handleChangeOp = (e) => {
    setOperation(e.target.value);
    // console.log(operation);
  };
  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };
  const calc = (bbval) =>{
    console.log(bbval)
    setResultBool(bbval);
  };
  return (
    <div className="App">
      {data.map((val, i) => (
        <div>
          <input
            name="vname"
            value={val.vname}
            onChange={(e) => handleChangeVar(e, i)}
          />
          <select
            name="boolVal"
            value={val.boolVal}
            onChange={(e) => handleChangeVar(e, i)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
      <button onClick={handleClick}>Add</button>

      <div>
        <div>
          <select
            name="operation "
            value={operation}
            onChange={(e) => handleChangeOp(e)}
          >
            <option value="none">select...</option>
            <option value="constant">constant</option>
            <option value="argument">argument</option>
            <option value="and">and</option>
            <option value="or">or</option>
          </select>
          <button>X</button>
        </div>
        {operation==="constant"? <ConstantSelect callb={calc} />:""}
        {operation==="argument"? <ArgumentSelect  arg={data} callb={calc} />:""}
        {operation==="and"? <AndSelect/>:""}
        {operation==="or"? <OrSelect/>:""}
      </div>
      <p>result : 
      {JSON.stringify(resultBool)}
      </p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
