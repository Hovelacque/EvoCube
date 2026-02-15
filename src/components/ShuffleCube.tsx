import { useState } from 'react';
import { useCube } from '../hooks/useCube';
import { randomMove } from '../domain/moves';
import CubeCard from './CubeCard';

export default () => {
    const { cube, applyMove } = useCube();
    const [moves, setMoves] = useState("");

    const shuffle = () => {
        const randMoves = randomMove(10)
        setMoves(randMoves.join(', '));
        applyMove(randMoves);
    }

    return (
        <CubeCard
            title='Shuffle Cube'
            size='sm'
            cube={cube}
            container={
                <>
                    <button onClick={() => shuffle()}>Shuffle</button>
                    <label style={{
                        color: 'white',
                        flexDirection: 'row'
                    }}>
                        {moves}
                    </label>
                </>
            }
        />
    )
}
