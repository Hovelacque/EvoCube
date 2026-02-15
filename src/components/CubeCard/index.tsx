import type { Cube } from "../../domain/Cube";
import CubeView from "../CubeView";
import './index.css';

type CubeCardProps = {
    title: string,
    cube: Cube,
    container: React.ReactNode,
    size: 'sm' | 'lg'
}

export default ({ title, container, cube, size }: CubeCardProps) => {
    return (
        <>
            <div className="card">
                <label className="title">{title}</label>
                <CubeView cube={cube} size={size} />
                {container}
            </div>
        </>
    )
}
