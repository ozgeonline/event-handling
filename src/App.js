import './App.css';
import React, {useState} from "react";

function App() {

  const [isMouseOver,setMouseOver] = useState(false);
  function handleMouseOver(){
    setMouseOver(true)
  }
  function handleMouseOut(){
    setMouseOver(false)
  }

  const [headingText,setHeadingText] = useState("Hello");
  function handleClick(event){
    setHeadingText("Submitted")
    setName("")
    event.preventDefault();
  }

  const [name,setName] = useState("");
  function handleChange(event){
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText} {name}</h1>
      <form action="" onSubmit={handleClick}>
        <input type="text" placeholder="What's your name?" value={name} onChange={handleChange} />
        <button
        type='submit'
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
          style={{backgroundColor: isMouseOver ? "black" : "white"}}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
