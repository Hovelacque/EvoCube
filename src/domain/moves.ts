import { Moves, type Face, type FaceMatrix, type Move } from "./types";

function rotateFaceClockwise(faces: Record<Face, FaceMatrix>, face: Face) {
    let newMatrix = structuredClone(faces);
    faces[face] = newMatrix[face].map((row, i) =>
        row.map((val, j) => newMatrix[face][newMatrix[face].length - 1 - j][i])
    );
};

function moveU(faces: Record<Face, FaceMatrix>) {
    rotateFaceClockwise(faces, 'U')
}

export function applyMove(faces: Record<Face, FaceMatrix>, move: Move) {
    switch (move) {
        case Moves.u: moveU(faces)
    }
}