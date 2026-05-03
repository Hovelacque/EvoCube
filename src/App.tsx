import './App.css'
import EvolutionCube from './components/EvolutionCube';
import MoveCube from './components/MoveCube';
import RandomCube from './components/RandomCube';
import ShuffleCube from './components/ShuffleCube';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      {/* 
      <MoveCube />
      <RandomCube />
      <ShuffleCube /> 
      */}
      <EvolutionCube />
    </div>
  )
}

export default App
