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

export interface MyInterface {
    value: string | number | string[];
}

export interface MyInterfaceG<T> {
    value: T;
}

export type User = {
    email: string;
    name: string;
};

export enum Status {
    Initiated = 'Initiated',
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
}

export interface Order {
    buyer: string;
    orderStatus: Status;
}
