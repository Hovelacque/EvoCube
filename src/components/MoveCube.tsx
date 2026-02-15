import { useCube } from '../hooks/useCube';
import CubeCard from './CubeCard';

export default () => {
    const { cube, applyMove } = useCube();

    return (
        <CubeCard
            title='Move Cube'
            size='sm'
            cube={cube}
            container={
                <>
                    <button onClick={() => applyMove(["U"])}>U</button>
                    <button onClick={() => applyMove(["U'"])}>U'</button>
                    <button onClick={() => applyMove(["F"])}>F</button>
                    <button onClick={() => applyMove(["F'"])}>F'</button>
                    <br />
                    <button onClick={() => applyMove(["D"])}>D</button>
                    <button onClick={() => applyMove(["D'"])}>D'</button>
                    <button onClick={() => applyMove(["R"])}>R</button>
                    <button onClick={() => applyMove(["R'"])}>R'</button>
                    <br />
                    <button onClick={() => applyMove(["L"])}>L</button>
                    <button onClick={() => applyMove(["L'"])}>L'</button>
                    <button onClick={() => applyMove(["B"])}>B</button>
                    <button onClick={() => applyMove(["B'"])}>B'</button>
                </>
            }
        />
    )
}
