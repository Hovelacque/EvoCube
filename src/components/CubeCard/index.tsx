import type { Cube } from "../../domain/Cube";
import CubeView from "../CubeView";
import './index.css';
 
type CubeCardProps = {
    title: string,
    cube: Cube,
    container: React.ReactNode,
}

export default ({ title, container, cube }: CubeCardProps) => {
    return (
        <>
            <div className="card">
                <label className="title">{title}</label>
                <CubeView cube={cube} />
                {container}
            </div>
        </>
    )
}
