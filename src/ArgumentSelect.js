import React from "react";

const ArgumentSelect = (prop) => {
    const indata=prop.arg;
    // const [boolret, setBoolret] = useState();
    const handleChange = (e) =>{
        // setBoolret(indata[e.target.value].boolVal);
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