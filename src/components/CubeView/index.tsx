import FaceView from '../FaceView';
import type { Cube } from '../../domain/Cube';
import './index.css';

type CubeProps = {
    cube: Cube
}

export default ({ cube }: CubeProps) => {
    return (
        <div className='cube'>
            <div className='empty' />
            <FaceView colors={cube.faces.U} />
            <div className='empty' />
            <div className='empty' />

            <FaceView colors={cube.faces.L} />
            <FaceView colors={cube.faces.F} />
            <FaceView colors={cube.faces.R} />
            <FaceView colors={cube.faces.B} />

            <div className='empty' />
            <FaceView colors={cube.faces.D} />
            <div className='empty' />
            <div className='empty' />
            <div />
        </div>
    );
}