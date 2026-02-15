import FaceView from '../FaceView';
import type { Cube } from '../../domain/Cube';
import './index.css';

type CubeProps = {
    cube: Cube,
    size: 'sm' | 'lg'
}

export default ({ cube, size }: CubeProps) => {
    return (
        <div className={size == 'sm' ? 'cube-sm' : 'cube'}>
            <div className={size == 'sm' ? 'empty-sm' : 'empty'} />
            <FaceView colors={cube.faces.U} size={size} />
            <div className={size == 'sm' ? 'empty-sm' : 'empty'} />
            <div className={size == 'sm' ? 'empty-sm' : 'empty'} />

            <FaceView colors={cube.faces.L} size={size} />
            <FaceView colors={cube.faces.F} size={size} />
            <FaceView colors={cube.faces.R} size={size} />
            <FaceView colors={cube.faces.B} size={size} />

            <div className={size == 'sm' ? 'empty-sm' : 'empty'} />
            <FaceView colors={cube.faces.D} size={size} />
            <div className={size == 'sm' ? 'empty-sm' : 'empty'} />
            <div className={size == 'sm' ? 'empty-sm' : 'empty'} />
            <div />
        </div>
    );
}