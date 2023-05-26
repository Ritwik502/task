const ConstantSelect = (prop) => {

    const handleChange = (e) =>{
        console.log(e.target.value==="true");
        prop.callb(e.target.value==="true");
    };
    return (
        <div>
        {/* <p>constant is chosen</p> */}
        <select
            name="boolVal"
            onChange={(e) => handleChange(e)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          </div>
      );
}
 
export default ConstantSelect;