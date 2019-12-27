import React, { useState } from "react";
import "./styles/create.area.styles.css";

function CreateArea(props){
const[item, setItem]=useState({
title:"",
content:""
});
const[hide, setHide]=useState(false);

function showTitle(){
setHide(true)
}

function handleChange(event){
const{name, value}=event.target;
setItem((prevValue)=>{
  return{
...prevValue,
[name]:value
  }
})
}

  return(
<div>
  <form>
    {hide ? <input 
    onChange={handleChange}
    value={item.title}
    name="title"
    type="text" 
    placeholder="Title"></input> : null}
    <textarea 
    onClick={showTitle}
    onChange={handleChange}
    value={item.content}
    name="content"
    type="text" 
    rows={hide ? "5": "2"}
    placeholder="Take a note"></textarea>
    <button onClick={(event)=>{
      props.onClick(item);
      setItem({
        title:"",
        content:""
      })
      event.preventDefault();
    }}>ADD</button>
  </form>
</div>
  )
}

export default CreateArea;