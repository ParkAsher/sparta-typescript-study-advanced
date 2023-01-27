/* enum */
import { Color, Direction } from '../types';

/* interface */
import type { IThingsInLife } from '../types';

function printRGB(color: Color): Color {
    return color;
}

console.log(printRGB(Color.Red));
console.log(printRGB(Color.Green));

function printThingsInLife(things: IThingsInLife): string {
    return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.KeyboardArrow}`;
}

console.log(printThingsInLife({ colorOfPen: Color.Blue, KeyboardArrow: Direction.Left }));
