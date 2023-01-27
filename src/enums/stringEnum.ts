import { Color } from '../types/index';

const faveColor = Color.Red;
console.log(faveColor);

const chorock: Color = Color.Green;
console.log(chorock);

// const colorOfSky: Color.Blue = Color.Green;

/* 
    type casting 
    되도록 쓰지 않는게 좋다.
*/
const faveColor2: Color = 'Red' as Color;
console.log(faveColor2);
