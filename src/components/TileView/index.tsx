import { Colors, type Color } from '../../domain/types';
import './index.css';

type TileProps = {
    color: Color
};

export default ({ color }: TileProps) => {

    function getColor(): string {
        switch (color) {
            case Colors.White: return 'white';
            case Colors.Red: return 'red';
            case Colors.Orange: return 'orange';
            case Colors.Blue: return 'blue';
            case Colors.Green: return 'green';
            default: return 'yellow';
        }
    }

    return (
        <div className="item" style={{
            backgroundColor: getColor()
        }}></div>
    );
}