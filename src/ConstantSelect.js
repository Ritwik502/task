import React, { useState } from "react";

const ConstantSelect = (prop) => {
    const indata=prop.arg;
    const [boolret, setBoolret] = useState();    // console.log(indata);
    // console.log(typeof indata);
    const handleChange = (e) =>{

        console.log(indata[e.target.value].boolVal);
        // setBoolret(e.target.value.boolVal);
        console.log(boolret);
    }
    return ( 
        <div>
        <p>constant is chosen</p>
        <select
        name= "argsel"
        value={boolret}
        onChange={(e) => handleChange(e)}
        >
        {indata.map((val, i) => (
                <option value={i}>{val.vname}</option>
        ))}
            </select>
        </div>
     );
}
export default ConstantSelect;