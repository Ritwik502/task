import React, { useState } from "react";

const OrSelect = (prop) => {
    const indata = prop.arg;
    const [boolret, setBoolret] = useState();
    const handleChangea = (e) => {
        setBoolret(indata[e.target.value].boolVal);
        // prop.callb(indata[e.target.value].boolVal);
    };
    const handleChangeb = (e) => {
        // setBoolret(indata[e.target.value].boolVal);
        prop.callb(((indata[e.target.value].boolVal)|boolret) === 1);
    };
    return (
        <div>
            {/* <p>constant is chosen</p> */}
            <select
                name="argsela"
                onChange={(e) => handleChangea(e)}
            >
                {indata.map((val, i) => (
                    <option value={i}>{val.vname}</option>
                ))}
            </select>

            <select
                name="argselb"
                onChange={(e) => handleChangeb(e)}
            >
                {indata.map((val, i) => (
                    <option value={i}>{val.vname}</option>
                ))}
            </select>
        </div>

    );
}

export default OrSelect;