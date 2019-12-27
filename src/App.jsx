import React, { useState } from "react";
import Header from "./header";
import CreateArea from "./CreateArea";
import Note from "./note";

function App() {
  const[items, setItems]=useState([]);

  function handleClick(item){
setItems((prevValue)=>{
  return[...prevValue, item]
})
  }

function deleteItem(id){
setItems(prevValue=>{
  return prevValue.filter((el, index)=>{
    return index !==id
  })
})
}


  return (
    <div>
      <Header />
      <CreateArea 
      onClick={handleClick}
      />
{items.map((el,index)=>{
  return(
<Note 
key={index}
id={index}
title={el.title}
content={el.content}
onClick={deleteItem}
/>
  )
})}
      
    </div>
  );
}

export default App;