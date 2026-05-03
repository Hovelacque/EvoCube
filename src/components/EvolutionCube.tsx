import { randomMove } from '../domain/moves';
import { useCube } from '../hooks/useCube';
import CubeCard from './CubeCard';

export default () => {
    const { cube, applyMove } = useCube();

    const shuffle = () => {
        const randMoves = randomMove(10);
        applyMove(randMoves);
    }

    const createGeneration = (size: number) => {
        const generation = [];
        for (let i = 0; i < size; i++)
            generation.push({
                moves: randomMove(10),
                fitness: 0
            })
        return generation;
    }

    const resolve = () => {

    }

    return (
        <CubeCard
            title='Evolution Cube'
            size='lg'
            cube={cube}
            container={
                <>
                    <button onClick={() => shuffle()}>Shuffle</button>
                    <button onClick={() => resolve()}>Resolve</button>
                </>
            }
        />
    )
}
