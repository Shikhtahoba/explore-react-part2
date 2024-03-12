
import './App.css'

import Counter from './Counter';
import Team from './Team';

import Friends from './Friends';

function App() {

function handleClick(){
  alert('button clicked');
}



  

  return (
    <>
      
      <h3>React Core Concept2</h3>

      <Friends></Friends>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      
      <button>Click2</button>

      
      
    </>
  )
}

export default App
