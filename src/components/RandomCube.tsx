import { useCube } from '../hooks/useCube';
import CubeCard from './CubeCard';

export default () => {
    const { cube, resolve } = useCube();

    return (
        <CubeCard
            title='Random Cube'
            cube={cube}
            container={
                <button onClick={() => resolve()}>Resolve</button>
            }
        />
    )
}
