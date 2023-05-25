import React, { useState } from "react";
function App() {
  const [data,setData]=useState([{vname:"",lname:""}])
  const handleClick=()=>{
      setData([...data,{vname:"",lname:""}])
  }
  const handleChange=(e,i)=>{
      const {name,value}=e.target
      const onchangeVal = [...data]
      onchangeVal[i][name]=value
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
                  <input name="lname" value={val.lname} onChange={(e)=>handleChange(e,i)} />
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
