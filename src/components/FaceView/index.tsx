import './index.css';
import TileView from '../TileView';
import type { FaceMatrix } from '../../domain/types';

type FaceProps = {
    colors: FaceMatrix,
}

export default ({ colors }: FaceProps) => {

    return (
        <div className="face">
            {
                colors.map((row) =>
                    row.map((color, i) =>
                        <TileView key={i} color={color} />
                    )
                )
            }
        </div>
    );
}