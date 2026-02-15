import './App.css'
import MoveCube from './components/MoveCube';
import RandomCube from './components/RandomCube';
import ShuffleCube from './components/ShuffleCube';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <MoveCube />
      <RandomCube />
      <ShuffleCube />
    </div>
  )
}

export default App
