export const Colors = {
    White: 0,
    Orange: 1,
    Green: 2,
    Red: 3,
    Blue: 4,
    Yellow: 5
} as const;
export type Color = typeof Colors[keyof typeof Colors];

// export const Faces = {
//     Up: 0,
//     Left: 1,
//     Front: 2,
//     Right: 3,
//     Back: 4,
//     Down: 5
// } as const;
export type Face = 'U' | 'D' | 'F' | 'B' | 'L' | 'R'; //typeof Faces[keyof typeof Faces];
export type FaceMatrix = Color[][];

export const Moves = {
    u: 'U',
    d: 'D',
    f: 'F',
    b: 'B',
    l: 'L',
    r: 'R',
    ui: "U'",
    di: "D'",
    fi: "F'",
    bi: "B'",
    li: "L'",
    ri: "R'"
} as const;
export type Move = typeof Moves[keyof typeof Moves];
