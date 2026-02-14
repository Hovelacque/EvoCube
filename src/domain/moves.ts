import { Moves, type Color, type Face, type FaceMatrix, type Move } from "./types";

function rotateFaceClockwise(faces: Record<Face, FaceMatrix>, face: Face) {
    let copyMatrix = structuredClone(faces);
    faces[face] = copyMatrix[face].map((row, i) =>
        row.map((val, j) => copyMatrix[face][copyMatrix[face].length - 1 - j][i])
    );
};

function lineToColumnClockwise(faces: Record<Face, FaceMatrix>, line: Color[], face: Face, column: number) {
    faces[face][0][column] = line[0]
    faces[face][1][column] = line[1]
    faces[face][2][column] = line[2]
};

function columnToLineClockwise(faces: Record<Face, FaceMatrix>, column: Color[], face: Face, line: number) {
    faces[face][line][0] = column[2]
    faces[face][line][1] = column[1]
    faces[face][line][2] = column[0]
};

function columnToColumn(faces: Record<Face, FaceMatrix>, column: Color[], face: Face, pos: number, reverse: boolean = false) {
    if (reverse) {
        faces[face][0][pos] = column[2]
        faces[face][1][pos] = column[1]
        faces[face][2][pos] = column[0]
    }
    else {
        faces[face][0][pos] = column[0]
        faces[face][1][pos] = column[1]
        faces[face][2][pos] = column[2]
    }
};

function rotateFaceAntiClockwise(faces: Record<Face, FaceMatrix>, face: Face) {
    let copyMatrix = structuredClone(faces);
    faces[face] = copyMatrix[face].map((row, i) =>
        row.map((val, j) => copyMatrix[face][j][row.length - 1 - i])
    );
};

function lineToColumnAntiClockwise(faces: Record<Face, FaceMatrix>, line: Color[], face: Face, column: number) {
    faces[face][0][column] = line[2]
    faces[face][1][column] = line[1]
    faces[face][2][column] = line[0]
};

function columnToLineAntiClockwise(faces: Record<Face, FaceMatrix>, column: Color[], face: Face, line: number) {
    faces[face][line][0] = column[0]
    faces[face][line][1] = column[1]
    faces[face][line][2] = column[2]
};

function getColumn(face: FaceMatrix, column: number): Color[] {
    return [
        face[0][column],
        face[1][column],
        face[2][column]
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
    const f0 = structuredClone(faces.F[0]);
    faces.F[0] = faces.L[0];
    faces.L[0] = faces.B[0];
    faces.B[0] = faces.R[0];
    faces.R[0] = f0;
}

function moveF(faces: Record<Face, FaceMatrix>) {
    const u2 = structuredClone(faces.U[2]);
    columnToLineClockwise(faces, getColumn(faces.L, 2), 'U', 2)
    lineToColumnClockwise(faces, faces.D[0], 'L', 2)
    columnToLineClockwise(faces, getColumn(faces.R, 0), 'D', 0)
    lineToColumnClockwise(faces, u2, 'R', 0)
    rotateFaceClockwise(faces, 'F')
}

function moveFi(faces: Record<Face, FaceMatrix>) {
    const u2 = structuredClone(faces.U[2]);
    columnToLineAntiClockwise(faces, getColumn(faces.R, 0), 'U', 2)
    lineToColumnAntiClockwise(faces, faces.D[0], 'R', 0)
    columnToLineAntiClockwise(faces, getColumn(faces.L, 2), 'D', 0)
    lineToColumnAntiClockwise(faces, u2, 'L', 2)
    rotateFaceAntiClockwise(faces, 'F')
}

function moveD(faces: Record<Face, FaceMatrix>) {
    rotateFaceClockwise(faces, 'D');
    const f2 = structuredClone(faces.F[2]);
    faces.F[2] = faces.L[2];
    faces.L[2] = faces.B[2];
    faces.B[2] = faces.R[2];
    faces.R[2] = f2;
}

function moveDi(faces: Record<Face, FaceMatrix>) {
    rotateFaceAntiClockwise(faces, 'D')
    const f2 = structuredClone(faces.F[2]);
    faces.F[2] = faces.R[2];
    faces.R[2] = faces.B[2];
    faces.B[2] = faces.L[2];
    faces.L[2] = f2;
}

function moveR(faces: Record<Face, FaceMatrix>) {
    const u2 = getColumn(faces.U, 2)
    columnToColumn(faces, getColumn(faces.F, 2), 'U', 2)
    columnToColumn(faces, getColumn(faces.D, 2), 'F', 2)
    columnToColumn(faces, getColumn(faces.B, 0), 'D', 2, true)
    columnToColumn(faces, u2, 'B', 0, true)
    rotateFaceClockwise(faces, 'R')
}

function moveRi(faces: Record<Face, FaceMatrix>) {
    const u2 = getColumn(faces.U, 2)
    columnToColumn(faces, getColumn(faces.B, 0), 'U', 2, true)
    columnToColumn(faces, getColumn(faces.D, 2), 'B', 0, true)
    columnToColumn(faces, getColumn(faces.F, 2), 'D', 2)
    columnToColumn(faces, u2, 'F', 2)
    rotateFaceAntiClockwise(faces, 'R')
}

function moveL(faces: Record<Face, FaceMatrix>) {
    const u0 = getColumn(faces.U, 0)
    columnToColumn(faces, getColumn(faces.B, 2), 'U', 0, true)
    columnToColumn(faces, getColumn(faces.D, 0), 'B', 2, true)
    columnToColumn(faces, getColumn(faces.F, 0), 'D', 0)
    columnToColumn(faces, u0, 'F', 0)
    rotateFaceClockwise(faces, 'L')
}

function moveLi(faces: Record<Face, FaceMatrix>) {
    const u0 = getColumn(faces.U, 0)
    columnToColumn(faces, getColumn(faces.F, 0), 'U', 0)
    columnToColumn(faces, getColumn(faces.D, 0), 'F', 0)
    columnToColumn(faces, getColumn(faces.B, 2), 'D', 0, true)
    columnToColumn(faces, u0, 'B', 2, true)
    rotateFaceAntiClockwise(faces, 'L')
}

function moveB(faces: Record<Face, FaceMatrix>) {
    const u0 = structuredClone(faces.U[0]);
    columnToLineAntiClockwise(faces, getColumn(faces.R, 2), 'U', 0)
    lineToColumnAntiClockwise(faces, faces.D[2], 'R', 2)
    columnToLineAntiClockwise(faces, getColumn(faces.L, 0), 'D', 2)
    lineToColumnAntiClockwise(faces, u0, 'L', 0)
    rotateFaceClockwise(faces, 'B')
}

function moveBi(faces: Record<Face, FaceMatrix>) {
    const u0 = structuredClone(faces.U[0]);
    columnToLineClockwise(faces, getColumn(faces.L, 0), 'U', 0)
    lineToColumnClockwise(faces, faces.D[2], 'L', 0)
    columnToLineClockwise(faces, getColumn(faces.R, 2), 'D', 2)
    lineToColumnClockwise(faces, u0, 'R', 2)
    rotateFaceAntiClockwise(faces, 'B')
}

export function applyMove(faces: Record<Face, FaceMatrix>, move: Move) {
    switch (move) {
        case Moves.u: moveU(faces); break;
        case Moves.ui: moveUi(faces); break;
        case Moves.f: moveF(faces); break;
        case Moves.fi: moveFi(faces); break;
        case Moves.d: moveD(faces); break;
        case Moves.di: moveDi(faces); break;
        case Moves.r: moveR(faces); break;
        case Moves.ri: moveRi(faces); break;
        case Moves.l: moveL(faces); break;
        case Moves.li: moveLi(faces); break;
        case Moves.b: moveB(faces); break;
        case Moves.bi: moveBi(faces); break;
    }
}