import type { FaceMatrix, Face, Color } from './types';
import { Colors } from './types';

function createFace(color: Color): FaceMatrix {
    return Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => color)
    );
}

export function createSolvedCube(): Record<Face, FaceMatrix> {
    return {
        U: createFace(Colors.White),
        D: createFace(Colors.Yellow),
        F: createFace(Colors.Green),
        B: createFace(Colors.Blue),
        L: createFace(Colors.Orange),
        R: createFace(Colors.Red)
    };
}
