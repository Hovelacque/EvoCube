import './index.css';
import TileView from '../TileView';
import type { FaceMatrix } from '../../domain/types';

type FaceProps = {
    colors: FaceMatrix,
    size: 'sm' | 'lg'
}

export default ({ colors, size }: FaceProps) => {

    return (
        <div className={size == 'sm' ? 'face-sm' : 'face'}>
            {
                colors.map((row) =>
                    row.map((color, i) =>
                        <TileView key={i} color={color} size={size} />
                    )
                )
            }
        </div>
    );
}