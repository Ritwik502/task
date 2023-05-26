import React, { useState } from "react";

const ArgumentSelect = (prop) => {
    const indata=prop.arg;
    const [boolret, setBoolret] = useState();
    // console.log(typeof indata);
    const handleChange = (e) =>{

        // console.log(indata[e.target.value].boolVal);
        // setBoolret(e.target.value.boolVal);
        // console.log(boolret);
        setBoolret(indata[e.target.value].boolVal);
        prop.callb(indata[e.target.value].boolVal);
    };
    return ( 
        <div>
        {/* <p>constant is chosen</p> */}
        <select
        name= "argsel"
        onChange={(e) => handleChange(e)}
        >
        {indata.map((val, i) => (
                <option value={i}>{val.vname}</option>
        ))}
            </select>
        </div>
     );
}
export default ArgumentSelect;