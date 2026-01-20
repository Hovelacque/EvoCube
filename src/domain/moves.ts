import { Moves, type Color, type Face, type FaceMatrix, type Move } from "./types";

function rotateFaceClockwise(faces: Record<Face, FaceMatrix>, face: Face) {
    let copyMatrix = structuredClone(faces);
    faces[face] = copyMatrix[face].map((row, i) =>
        row.map((val, j) => copyMatrix[face][copyMatrix[face].length - 1 - j][i])
    );
};

function rotateFaceAntiClockwise(faces: Record<Face, FaceMatrix>, face: Face) {
    let copyMatrix = structuredClone(faces);
    faces[face] = copyMatrix[face].map((row, i) =>
        row.map((val, j) => copyMatrix[face][j][row.length - 1 - i])
    );
};

function lineToColumn(faces: Record<Face, FaceMatrix>, line: Color[], face: Face, column: number) {
    faces[face][0][column] = line[2]
    faces[face][1][column] = line[1]
    faces[face][2][column] = line[0]
};

function columnToLine(faces: Record<Face, FaceMatrix>, column: Color[], face: Face, line: number) {
    faces[face][line][0] = column[0]
    faces[face][line][1] = column[1]
    faces[face][line][2] = column[2]
};

function getColumn(faces: Record<Face, FaceMatrix>, face: Face, column: number): Color[] {
    return [
        faces[face][0][column],
        faces[face][1][column],
        faces[face][2][column]
    ];
};

function moveU(faces: Record<Face, FaceMatrix>) {
    rotateFaceClockwise(faces, 'U');
    const f0 = structuredClone(faces.F[0]);
    faces.F[0] = faces.R[0];
    faces.R[0] = faces.B[0];
    faces.B[0] = faces.L[0];
    faces.L[0] = f0;
}

function moveUi(faces: Record<Face, FaceMatrix>) {
    rotateFaceAntiClockwise(faces, 'U')
}

function moveF(faces: Record<Face, FaceMatrix>) {
    
}

function moveFi(faces: Record<Face, FaceMatrix>) {
    const u2 = structuredClone(faces.U[2]);
    columnToLine(faces, getColumn(faces, 'R', 0), 'U', 2)
    lineToColumn(faces, faces.D[0], 'R', 0)
    columnToLine(faces, getColumn(faces, 'L', 2), 'D', 0)
    lineToColumn(faces, u2, 'L', 2)
    rotateFaceAntiClockwise(faces, 'F')
}

export function applyMove(faces: Record<Face, FaceMatrix>, move: Move) {
    switch (move) {
        case Moves.u: moveU(faces); break;
        case Moves.ui: moveUi(faces); break;
        case Moves.f: moveF(faces); break;
        case Moves.fi: moveFi(faces); break;
    }
}