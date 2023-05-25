import React, { useState } from "react";
function App() {
  const [data,setData]=useState([{vname:"",boolVal:true}])
  const handleClick=()=>{
      setData([...data,{vname:"",boolVal:true}])
  }
  const handleChange=(e,i)=>{
      const {name,value}=e.target
      const onchangeVal = [...data]
      if(name==="boolVal"){

        onchangeVal[i][name]=(value==="true");
      }
      else onchangeVal[i][name]=value
      setData(onchangeVal)
  }
  const handleDelete=(i)=>{
      const deleteVal = [...data]
      deleteVal.splice(i,1)
      setData(deleteVal)
  }
  return(
      <div className="App">
          {
            data.map((val,i)=>
            <div>
                  <input name="vname" value={val.vname} onChange={(e)=>handleChange(e,i)} />
                  <select  name ="boolVal" value={val.boolVal} onChange={(e)=>handleChange(e,i)}>
                  <option value="true">True</option>
                  <option value="false">False</option>
                  </select>
                  <button onClick={()=>handleDelete(i)}>Delete</button>
              </div>
              )
            }
            <button onClick={handleClick}>Add</button>
          <p>{JSON.stringify(data)}</p>
      </div>
    )
}


export default App;
