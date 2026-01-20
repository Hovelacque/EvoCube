import type { FaceMatrix, Face, Move } from "./types";
import { createSolvedCube } from "./utils";
import { applyMove } from "./moves";

export class Cube {
    faces: Record<Face, FaceMatrix>;

    constructor() {
        this.faces = createSolvedCube();
    }

    move(move: Move) {
        applyMove(this.faces, move);
    }

    clone() {
        const clone = new Cube();
        clone.faces = structuredClone(this.faces);
        return clone;
    }

    faceCompleted(face: Face): boolean {
        let completed = true, center = this.faces[face][1][1];
        for (let i = 0; i < this.faces[face].length; i++)
            for (let j = 0; j < this.faces[face][i].length; j++)
                if (completed)
                    completed = this.faces[face][i][j] == center;
        return completed;
    }

    isCompleted(): boolean {
        return this.faceCompleted('F') &&
            this.faceCompleted('U')
    }
}