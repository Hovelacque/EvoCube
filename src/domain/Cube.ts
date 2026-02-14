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

    faceCompleted(face: FaceMatrix): boolean {
        const center = face[1][1];
        for (let i = 0; i < face.length; i++)
            for (let j = 0; j < face[i].length; j++)
                if (face[i][j] != center)
                    return false;
        return true;
    }

    isCompleted(): boolean {
        return (
            this.faceCompleted(this.faces.U) &&
            this.faceCompleted(this.faces.F) &&
            this.faceCompleted(this.faces.D) &&
            this.faceCompleted(this.faces.B) &&
            this.faceCompleted(this.faces.R) &&
            this.faceCompleted(this.faces.L)
        )
    }
}