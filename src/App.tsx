import './App.css'
import CubeView from './components/CubeView'
import { useCube } from './hooks/useCube';

function App() {
  const {cube, applyMove} = useCube();

  return (
    <>
      <div className="card">
        <CubeView cube={cube} />
        <button onClick={()=>applyMove(["U"])}>U</button>
        <button onClick={()=>applyMove(["U'"])}>U'</button>
        <button onClick={()=>applyMove(["F"])}>F</button>
        <button onClick={()=>applyMove(["F'"])}>F'</button>
        <button onClick={()=>applyMove(["D"])}>D</button>
        <button onClick={()=>applyMove(["D'"])}>D'</button>
        <button onClick={()=>cube.isCompleted()}>C</button>
      </div>
    </>
  )
}

export default App
