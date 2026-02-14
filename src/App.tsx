import { useState } from 'react';
import './App.css'
import CubeView from './components/CubeView'
import { randomMove } from './domain/moves';
import { useCube } from './hooks/useCube';

function App() {
  const { cube, applyMove, resolve, } = useCube();
  const [moves, setMoves] = useState("");

  const randomize = () => {
    const randMoves = randomMove(10)
    setMoves(randMoves.join(', '));
    applyMove(randMoves);
  }

  return (
    <>
      <div className="card">
        <CubeView cube={cube} />
        <button onClick={() => applyMove(["U"])}>U</button>
        <button onClick={() => applyMove(["U'"])}>U'</button>
        <button onClick={() => applyMove(["F"])}>F</button>
        <button onClick={() => applyMove(["F'"])}>F'</button>
        <button onClick={() => applyMove(["D"])}>D</button>
        <button onClick={() => applyMove(["D'"])}>D'</button>
        <button onClick={() => applyMove(["R"])}>R</button>
        <button onClick={() => applyMove(["R'"])}>R'</button>
        <button onClick={() => applyMove(["L"])}>L</button>
        <button onClick={() => applyMove(["L'"])}>L'</button>
        <button onClick={() => applyMove(["B"])}>B</button>
        <button onClick={() => applyMove(["B'"])}>B'</button>
        <button onClick={() => resolve()}>Resolve</button>
        <br />
        <div style={{
          color: 'white',
          flexDirection: 'row'
        }}>
          <button onClick={() => randomize()}>Randomize</button>
          {moves}
        </div>
      </div>
    </>
  )
}

export default App
