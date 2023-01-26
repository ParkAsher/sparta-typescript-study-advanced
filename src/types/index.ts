export enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

export enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// type TThingsInLife = {
//     colorOfPen: Color;
//     KeyboardArrow: Direction;
// };

export interface IThingsInLife {
    colorOfPen: Color;
    KeyboardArrow: Direction;
}
